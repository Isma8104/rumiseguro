// MEJORADO: Se añade OnDestroy para la limpieza de suscripciones
import { Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { SocketService } from 'src/app/services/socket.service';
import { MapCardComponent } from 'src/app/components/map-card/map-card.component';
import Swal, { SweetAlertType } from "sweetalert2";
// NUEVO: Se importa Subscription para manejar las suscripciones a Observables
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-alerts',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertsComponent implements OnInit, OnDestroy {
  latE: any = null;
  lngE: any = null;
  heightE = '100%';
  idAlert: any;
  user: any;
  form: FormGroup;
  lastPosition: any;

  // NUEVO: Variables para guardar las suscripciones y poder limpiarlas después
  private positionSubscription: Subscription;
  private mqttSubscription: Subscription;

  @ViewChild('mapCard') mapCard: MapCardComponent;
  coordinates = [];

  constructor(
    public dialogRef: MatDialogRef<InfoAlertsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    private _socket: SocketService
  ) {
    this.user = data.user;
    this.idAlert = data.idAlert;
    this.latE = this.user.lat;
    this.lngE = this.user.lng;
  }

  ngOnInit(): void {
    this.createForm();
    this.getUserPosition(this.user._id);

    // SOLUCIÓN: Conectar solo el socket principal (ya que ambos eventos vienen por el mismo socket)
    this._socket.socketConnect(this.user._id);
    
    // Empezamos a escuchar los datos en tiempo real
    this.listenForRealtimeData();
  }

  // MEJORADO: Un solo método para manejar todas las suscripciones de datos en tiempo real
  listenForRealtimeData() {
    // 1. Escuchar actualizaciones de posición
    this.positionSubscription = this._socket.listenForPositions().subscribe((data: any) => {
      console.log("RECIBO DATA DE POSICIÓN:", data);
      if (data && data.positions && data.positions.length > 0) {
        this.coordinates.push({ lat: data.positions[0].lat, lng: data.positions[0].lng });
        if (this.mapCard) {
          this.mapCard.plotRoute(this.coordinates);
        }
      }
    });

    // 2. Escuchar mensajes MQTT
    this.mqttSubscription = this._socket.listenForMqttMessages().subscribe((data: any) => {
      console.log("RECIBO DATA DE MQTT:", data);
      // Aquí puedes reaccionar a mensajes MQTT específicos
      if (data.topic === `alarma/${this.user.access}` && data.message === 'F') {
        this.showAlert('info', 'Alarma Desactivada', 'El usuario ha desactivado la alarma remotamente.', 'btn btn-info');
      }
    });
  }

  postComment() {
    startLoading();
    this.api.putAlertHeeded(
      this.idAlert,
      {
        description: this.form.value.comment,
        administrator: this.getUser(),
        replyDate: new Date()
      },
    ).subscribe(_ => {
      finishLoading();
      this.showAlert('success', 'Correcto', 'Alerta atendida correctamente', 'btn btn-info');

      // Publicar mensaje MQTT para apagar alarma
      const topic = `alarma/${this.user.access}`;
      const message = 'F';
      this._socket.publishMqttMessage(topic, message, { qos: 2, retain: true });

    }, (_) => {
      finishLoading();
      this.showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
    if (this.mqttSubscription) {
      this.mqttSubscription.unsubscribe();
    }
  }

  convertCoordsToAddress() {
    if (this.lastPosition && this.lastPosition.lat && this.lastPosition.lng) {
      this.api.getAddressFromCoords(Number(this.lastPosition.lat), Number(this.lastPosition.lng)).subscribe((resp: any) => {
        this.user['current_position'] = resp.address['road'];
      }, (err: any) => {
        console.log(err);
      });
    }
  }

  sendWhatsAppMessage(event: any) {
    event.preventDefault();
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${this.lastPosition.lat},${this.lastPosition.lng}`;
    const message = `Información:\n\nNombre: ${this.user.name}\nCédula: ${this.user.ci}\nTeléfono: ${this.user.phone}\nDirección: ${this.user.address}\nUbicación: ${googleMapsLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  getUserPosition(user) {
    this.api.getUserPosition(user).subscribe((resp: any) => {
      let position = resp.body['position'];
      this.lastPosition = position;
      this.convertCoordsToAddress();
    }, (err: any) => {
      console.log("ERR UP: ", err);
    });
  }

  createForm() {
    this.form = this.fb.group({
      comment: ['', [Validators.required]]
    });
  }

  close(dialogResult = undefined) {
    this.dialogRef.close(dialogResult);
  }

  getUser() {
    return localStorage.getItem('id-sh');
  }

  handleCoordinates(event: { lat: number, lng: number }) {
    console.log('Received coordinates:', event);
  }

  async showAlert(type: SweetAlertType, title: string, text: string, classBtn: string) {
    return await Swal.fire({
      title,
      text,
      type: type,
      buttonsStyling: false,
      confirmButtonClass: classBtn,
      allowOutsideClick: false
    }).then((data) => {
      if (data.value) {
        if (type !== 'info' && type !== 'warning') {
          this.close('close');
        }
      }
    });
  }
}