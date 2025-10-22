import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

/** OpenLayers Map Imports */
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { defaults as defaultControls } from 'ol/control.js';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Geometry, Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import { URL_SERVICES } from 'src/app/configurations/url.service';
import Icon from 'ol/style/Icon';
import { fromLonLat } from 'ol/proj';
import { InfoAlertsComponent } from './info-alert/info-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { showAlert } from 'src/app/utils/swal-alert';
//import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';
import { SocketService } from 'src/app/services/socket.service';
import { NotificationService } from 'src/app/services/notifications.service';
import { ActionsComponent } from './actions/actions.component';
import { EventsKey } from 'ol/events';
import { unByKey } from 'ol/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']

})
export class MapComponent implements OnInit {
  isLoadingAlerts = false;

  isConnect = false;
  alerts: any[] = [];

  map: any;
  markers: any = {};
  source: any;

  fit = true;
  fitF = true;
  center = false;
  centerMarker: any;

  markerStyle: any;
  zoomGlobal: any;

  searchForm: FormGroup;
  word: string = '';
  teams: any[] = [];
  neighborhoods: any[] = [];

  pagination: IPagination = { page: 1, pages: 1, itemsPage: 500, total: 1 };
  wordToSearch: string = '';

  dataSelected;
  filteredTeams: Observable<any[]>;
  teamsCtrl = new FormControl();
  teamSelectedId: string;

  layerRegistry: { [key: string]: VectorLayer<any> } = {};
  isSound: boolean = false;
  isBouncing = false;

  singleClickListener: EventsKey | null = null;
  private topicMessageCount: { [key: string]: number } = {};


  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  constructor(
    private _api: ApiService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private notifyService: NotificationService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.loadOpenStreet();
    this.createForm();
    this.getTeams();
    this.listenMqttMessages();

    this.map.getView().on('change:resolution', () => {
      const zoomLevel = this.map.getView().getZoom();
      this.updateMarkerStyles(zoomLevel);
    });
  }

  updateMarkerStyles(zoomLevel: number) {
    for (const markerId in this.markers) {
      if (this.markers.hasOwnProperty(markerId)) {
        const marker = this.markers[markerId];
        const style = marker.getStyle();

        let textStyle = style.getText();
        if (!textStyle) {
          textStyle = new Text({});
        }

        textStyle.setText(marker.get('name'));
        textStyle.setFont(10 + 'px sans-serif');
        style.setText(textStyle);

        marker.setStyle(style);

        // if (style && style.getText()) {
        //   style.getText().setText(zoomLevel > 15 ? marker.get('name') : '');
        // }
        // marker.setStyle(style);
      }
    }
  }

  listenMqttMessages() {
    // Conecta el socket primero
    this.socketService.socketConnect('map-component');

    // Escucha mensajes MQTT a través de Socket.IO
    this.socketService.listenForMqttMessages().subscribe((data: any) => {
      const topic = data.topic;
      const message = data.message;
      const topico = topic.split('/')[1];

      if (topic.includes('alarma')) {
        console.log('ENTRA EN TOPIC ALARMA:', topic, message);

        if (message.toString().includes('0')) {
          return;
        }

        this.manageAlarms(topico, message);
      }

      console.log('MENSAJE MQTT RECIBIDO:', topic, message);

      const central = this.neighborhoods.find((item: any) => item.identifier === topico);
      const alert = message.toString().substring(0, 1);
      const status = message.toString().substring(1, message.toString().length);

      if (central) {
        this.typesAlert(central, alert, status);
      }
    });
  }

  manageAlarms(topic: string, message: Buffer) {
    if (!this.topicMessageCount[topic]) {
      this.topicMessageCount[topic] = 0;
    }

    console.log('SUENA: ', this.topicMessageCount);

    this.topicMessageCount[topic]++;
    if (this.topicMessageCount[topic] > 1) {
      this.getAlerts();

      const data: string = message.toString('utf-8');

      console.log('ESTO 1: ', data);
      if (data.includes('out')) {
        console.log('ENTRA EN OUT');
        const user = JSON.parse(data.split('*')[1]);
        this.notifyService.showError('Fuera de cobertura', `${user.name} - Emitió una alerta`);
        if (!this.markers[user._id]) {
          const marker = new Feature({
            geometry: new Point([parseFloat(user.lng), parseFloat(user.lat)]).transform('EPSG:4326', 'EPSG:3857'),
            name: user.name,
            id: user._id
          });
          this.markers[user._id] = marker;
          // TODO: agregar marcador al mapa
          // Crear el vector source con el nuevo marcador
          // const vectorSource = new VectorSource({
          //   features: [marker]
          // });
          //
          // // Crear el vector layer usando el vector source
          // const vectorLayer = new VectorLayer({
          //   source: vectorSource
          // });
          //
          // // Agregar el vector layer al mapa
          // this.map.addLayer(vectorLayer);
        }
        return;
      }

      if (Number(data) < 10) {
        console.log('ENTRA EN ESTO con IS NUMBER');
        this.changePinColor(topic);
      }

    }

  }

  typesAlert(central: any, alert: string, status: string) {
    // C0 corte de corriente solo batería
    // C1 no hay corte de corriente
    // P1 abierta caja
    // P0 caja cerrada
    // B11.5 estado de la batería
    let mensaje = '';

    switch (alert) {
      case 'C': //Estado Bateria
        if (status === '0') {
          mensaje = 'Central corte de corriente';
        } else {
          mensaje = 'Revisión estado corriente correcto';
        }
        break;
      case 'D':
        if (status === '0') {
          mensaje = 'Central fuera de línea';
          this.setMarkerStyle(this.markers[central.identifier], 'pin-disconnect');
        } else {
          mensaje = 'Central central en línea';
          this.setMarkerStyle(this.markers[central.identifier], 'pin');
        }
        break;
      case 'P': //Estado Caja
        if (status === '0') {
          mensaje = 'Puerta central abierta';
        } else {
          mensaje = 'Puerta central cerrada';
        }
        break;
      case 'B': //Estado bateria
        mensaje = `Estado de la bateria ${status}`;
        break;
      default:
        break;
    }
  }

  createForm() {
    this.searchForm = this.fb.group({
      value: [this.teams[0]]
    });
  }

  centerMap() {
    const coordinates = this.neighborhoods.map(point => [parseFloat(point.lng), parseFloat(point.lat)]);

    // Calcular el centro de todas las coordenadas
    const center = coordinates.reduce(
      (accumulator, current) => [accumulator[0] + current[0], accumulator[1] + current[1]],
      [0, 0]
    );
    center[0] /= coordinates.length;
    center[1] /= coordinates.length;

    // Configurar la vista del mapa para centrarse en el punto calculado
    this.map.getView().setCenter(fromLonLat(center));
    const zoom = this.calculateZoomForPoints(this.neighborhoods);
    this.map.getView().setZoom(zoom);
  }

  clearMapState() {
    this.markers = {};
    this.topicMessageCount = {};

    // Ya no necesitas desuscribirte de temas MQTT directamente
    // porque eso lo maneja el backend

    // Remover todas las capas del mapa
    for (const layerId in this.layerRegistry) {
      if (this.layerRegistry.hasOwnProperty(layerId)) {
        this.map.removeLayer(this.layerRegistry[layerId]);
      }
    }

    this.layerRegistry = {};
    this.neighborhoods = [];

    if (this.singleClickListener) {
      unByKey(this.singleClickListener);
      this.singleClickListener = null;
    }
  }

  setMarker(incomingMarker: any, neighborhood: any) {
    if (!incomingMarker) {
      const marker = new Feature({
        geometry: new Point([parseFloat(neighborhood.lng), parseFloat(neighborhood.lat)]).transform('EPSG:4326', 'EPSG:3857'),
        name: neighborhood.name,
        connected: neighborhood.connected,
        identifier: neighborhood.identifier
      });
      this.markers[neighborhood.identifier] = marker;
      this.setMarkerStyle(marker, neighborhood.connected ? 'pin' : 'pin-disconnect');
    } else {
      incomingMarker.set('connected', neighborhood.connected);
      this.setMarkerStyle(incomingMarker, neighborhood.connected ? 'pin' : 'pin-disconnect');
    }
  }

  setMarkerStyle(marker: Feature<Geometry>, iconType: string) {
    const text = new Text({
      // text: marker.get('name'),
      text: '',
      offsetY: 12,
      fill: new Fill({ color: 'black' }),
      font: 'bold 14px Arial',
      backgroundFill: new Fill({ color: 'white' }),
      padding: [3, 3, 3, 3]
    });

    this.markerStyle = new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        anchor: [24, 48],
        anchorXUnits: IconAnchorUnits.PIXELS,
        anchorYUnits: IconAnchorUnits.PIXELS,
        src: `${URL_SERVICES}/view/${iconType}`
      }),
      text
    });

    let textStyle = this.markerStyle.getText();

    if (!textStyle) {
      textStyle = new Text({});
    }

    textStyle.setText(marker.get('name'));
    textStyle.setFont(10 + 'px sans-serif');
    this.markerStyle.setText(textStyle);

    // const zoomLevel = this.map.getView().getZoom();
    // if (zoomLevel < 16) {
    //   this.markerStyle.setText(null);
    // }

    marker.setStyle(this.markerStyle);
  }


  getNeighborhoodByTeam(teamSelected: string) {
    this.clearMapState();
    this._api.getNeighborhoodByTeam(
      teamSelected,
      this.pagination.page,
      this.pagination.itemsPage,
      this.wordToSearch,
    ).subscribe(resp => {
      this.neighborhoods = resp.body['neighborhoods'];
      this.centerMap();

      this.neighborhoods.forEach((neighborhood) => {
        // En lugar de suscribirte directamente a MQTT, envía una petición al backend
        // para que él se suscriba y te reenvíe los mensajes via Socket.IO
        console.log('Monitoring neighborhood:', neighborhood.identifier);

        this.setMarker(this.markers[neighborhood.identifier], neighborhood);
        const vectorSource = new VectorSource({
          features: [this.markers[neighborhood.identifier]]
        });
        const vectorLayer = new VectorLayer({
          source: vectorSource
        });
        vectorLayer.set('layerId', neighborhood._id);

        this.layerRegistry[neighborhood._id] = vectorLayer;
        this.map.addLayer(vectorLayer);
      });

      // ---> INICIO: CÓDIGO AÑADIDO PARA INTEGRAR ACTIONSCOMPONENT <---
      // 🗺️ Primero, nos aseguramos de limpiar cualquier listener anterior para evitar duplicados.
      if (this.singleClickListener) {
        unByKey(this.singleClickListener);
      }

      // Creamos el nuevo listener para el evento 'singleclick'
      this.singleClickListener = this.map.on('singleclick', (evt: any) => {
        this.map.forEachFeatureAtPixel(evt.pixel, (feature: any, _: any) => {
          // Si se hizo clic sobre un marcador (feature)
          if (feature) {
            const name = feature.get('name');
            const connected = feature.get('connected');
            const identifier = feature.get('identifier');

            // Abrimos el diálogo del ActionsComponent con los datos del marcador
            this.dialog.open(ActionsComponent, {
              width: '60%',
              data: { name, connected, identifier }
            });
          }
        });
      });
      // ---> FIN: CÓDIGO AÑADIDO <---

    }); // Cierre de la suscripción de _api.getNeighborhoodByTeam
  }

  calculateZoomForPoints(points) {
    if (points.length === 0) {
      return 2; // Valor predeterminado si no hay puntos
    }

    // Obtener las coordenadas extremas (mínima y máxima) de los puntos
    const minX = Math.min(...points.map(point => parseFloat(point.lng)));
    const minY = Math.min(...points.map(point => parseFloat(point.lat)));
    const maxX = Math.max(...points.map(point => parseFloat(point.lng)));
    const maxY = Math.max(...points.map(point => parseFloat(point.lat)));

    // Calcular el centro y el ancho/alto de la extensión geográfica
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const extentWidth = maxX - minX;
    const extentHeight = maxY - minY;

    // Obtener el tamaño del contenedor del mapa
    const mapContainer = document.getElementById('map'); // Ajusta el ID según tu estructura HTML
    const containerWidth = mapContainer.clientWidth;
    const containerHeight = mapContainer.clientHeight;

    // Calcular el zoom necesario para que la extensión geográfica sea completamente visible
    const resolutionX = extentWidth / containerWidth;
    const resolutionY = extentHeight / containerHeight;
    const resolution = Math.max(resolutionX, resolutionY);

    // Calcular el zoom basado en la resolución y el tamaño del contenedor
    const zoom = Math.log2(360 / (resolution * 256)) - 1;

    return zoom;
  }

  loadOpenStreet() {
    this.map = new Map({
      controls: defaultControls({
        zoom: false,
        rotate: false,
      }),
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            // url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga'
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        maxZoom: 19,
        minZoom: 2
      })
    });
  }

  getTeams() {
    this._api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
      this.teams = resp.body.teams;
      if (this.teams.length > 0) {
        this.searchForm.patchValue({ value: this.teams[0]._id });
        this.selected(this.searchForm.value.value);
      }
    });
  }

  // Cuando se cambia el dropdown de teams se pasa como parametro el team y se ejecuta esto.
  selected(teamId: string) {
    this.markers = {};
    this.neighborhoods = [];
    this.getNeighborhoodByTeam(teamId);
    this.teamSelectedId = teamId;
    this.alerts = [];
    this.getAlerts();
  }

  getAlerts() {
    this.isLoadingAlerts = true;
    this._api.getAlertsByTeam(this.teamSelectedId).subscribe((resp: any) => {
      this.alerts = resp.body.alerts;
      this.isLoadingAlerts = false;
    }, (err: any) => {
      showAlert(
        'error',
        'Error',
        `Algo ha salido mal, intente más tarde!\n${err}`,
        'btn btn-info',
      );
    })
  }

  changePinColor(identifier: string) {
    if (!identifier || !this.markers[identifier]) {
      return;
    }
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        if (i === 19) {
          this.setMarkerStyle(this.markers[identifier], 'pin');
          this.stopSound();
        }

        if (i % 2 === 0) {
          this.setMarkerStyle(this.markers[identifier], 'pin4');
        } else {
          this.setMarkerStyle(this.markers[identifier], this.markers[identifier].get('connected') ? 'pin' : 'pin-disconnect');
        }
      }, i * 500);
    }


    if (!this.isSound) {
      this.playSound();
    }

  }

  getTypeAlert(alert) {
    let notificationMessage;
    let imgAlert;
    let imgDefault = 'assets/img/icons/rumi_black.png';

    switch (alert) {
      case 'ALERT_1':
        notificationMessage = 'ALERTA DE SOS';
        imgAlert = 'assets/img/alerts/policebtn.png';

        break;
      case 'ALERT_2':
        notificationMessage = 'ALERTA DE SOSPECHOSO';
        imgAlert = 'assets/img/alerts/suspect.png';

        break;
      case 'ALERT_3':
        notificationMessage = 'ALERTA SILENCIOSA';
        imgAlert = 'assets/img/alerts/silencio.png';

        break;
      case 'ALERT_4':
        notificationMessage = 'ALERTA DE MI UBICACIÓN';
        imgAlert = imgDefault;

        break;
      case 'ALERT_5':
        notificationMessage = 'ALERTA DE VIOLENCIA DE GÉNERO';
        imgAlert = 'assets/img/alerts/genero.png';

        break;
      case 'ALERT_6':
        notificationMessage = 'ALERTA DE INUNDACIÓN';
        imgAlert = 'assets/img/alerts/flood.png';

        break;
      case 'ALERT_7':
        notificationMessage = 'ALERTA DE TERREMOTO';
        imgAlert = 'assets/img/alerts/earthquake.png';

        break;

      case 'ALERT_10':
        notificationMessage = 'ALERTA DISUASIVA';
        imgAlert = imgDefault;
        break;

      case 'ALERT_11':
        notificationMessage = 'ALERTA DE LIBADORES';
        imgAlert = imgDefault;
        break;

      case 'ALERT_12':
        notificationMessage = 'ALERTA DE EXTORSIONADOR';
        imgAlert = imgDefault;
        break;
      case 'ALERT_13':
        notificationMessage = 'ALERTA P0';
        imgAlert = imgDefault;
        break;
      case 'ALERT_14':
        notificationMessage = 'ALERTA P1';
        imgAlert = imgDefault;
        break;
      case 'ALERT_15':
        notificationMessage = 'ALERTA P2';
        imgAlert = imgDefault;
        break;
    }

    return {
      type: notificationMessage,
      img: imgAlert
    };
  }

  playSound() {
    this.isSound === true;
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    audio.play();
  }

  stopSound() {
    this.isSound === false;
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    audio.pause();
    audio.currentTime = 0;
  }

  showAlertInfo(data: any) {
    const modal = this.dialog.open(InfoAlertsComponent, {
      width: '60%',
      data: {
        user: data.user,
        idAlert: data._id
      }
    });

    modal.afterClosed().subscribe(infoData => {
      if (infoData === undefined) {
        return;
      }

      this.alerts = [];
      this.getAlerts();
    });
  }
}
