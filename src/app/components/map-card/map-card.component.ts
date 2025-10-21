import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Vector from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import { fromLonLat, transform } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control.js';
import { Event } from "typescript.events";
import { environment } from 'src/environments/environment';
import { URL_SERVICES } from 'src/app/configurations/url.service';
import { LineString } from 'ol/geom';
import Stroke from 'ol/style/Stroke';
import VectorLayer from 'ol/layer/Vector';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html'
})
export class MapCardComponent implements OnInit {

  @ViewChild('mapa', { static: false }) mapa;
  @Input() lat: any;
  @Input() opt: any = "";
  @Input() lng: any;
  @Input() heightE: any;
  @Output() coorsEmit: EventEmitter<any> = new EventEmitter();


  map: Map;
  source: any;
  point: any;
  marker: any;
  markerVectorLayer: any;
  routeVectorLayer: any;

  isNew = true;
  zoom = 15;

  constructor(
    public events: Event,
  ) {
    this.events.on('map-center', (data) => {
      this.centerMap(data.lng, data.lat, 14);
    });
  }

  ngOnInit() {
    this.mapLoad();
  }

  mapLoad() {
    if ((this.lat === null && this.lng === null) || (this.lat === 'null' && this.lng === 'null')) {
      this.lat = '-0.21542619772706928';
      this.lng = '-78.51745989941895';
      this.isNew = true;
      this.zoom = 7;
    } else {
      this.isNew = false;
      this.zoom = 15;
    }

    if (this.heightE) {
      const box = document.getElementById('mapC');

      if (box != null) {
        box.style.setProperty('width', '100%');
        box.style.setProperty('height', this.heightE);
      }
    }

    setTimeout(() => {
      this.map = new Map({
        controls: defaultControls({
          zoom: false,
          rotate: false,
        }),
        target: 'mapC',
        layers: [
          new TileLayer({
            source: new XYZ({
              // url: 'https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga'
              // url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga'
              url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
              // url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=${environment.tokenMap}`
            })
          })
        ],
        view: new View({
          center: fromLonLat([this.lng, this.lat]),
          zoom: this.zoom,
          maxZoom: 18,
          minZoom: 7,
        })
      });

      this.map.on('rendercomplete', (event) => {
        this.map.updateSize();
      });

      if (this.opt === 'click') {
        this.clickMap();
        this.setMarker(transform([this.lng, this.lat], 'EPSG:4326', 'EPSG:3857'));
      }
    }, 50);

  }

  clickMap() {
    this.map.on('click', (event) => {
      if (this.markerVectorLayer !== undefined) {
        this.clearMarker();
      }
      this.setMarker(event.coordinate);
    });
  }

  setMarker(coordinate) {
    const coors = transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    this.coorsEmit.emit({
      lat: coors[1],
      lng: coors[0]
    });

    this.source = new VectorSource();
    this.point = new Point(coordinate);

    this.marker = new Feature({
      geometry: this.point
    });

    this.marker.setStyle(this.iconStyle());
    this.source.addFeature(this.marker);
    this.markerVectorLayer = new Vector({
      source: this.source,
    });

    this.map.addLayer(this.markerVectorLayer);
  }

  iconStyle() {
    return new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        anchor: [24, 48],
        anchorXUnits: IconAnchorUnits.PIXELS,
        anchorYUnits: IconAnchorUnits.PIXELS,
        src: `${URL_SERVICES}/view/pin`
        // src: `https://bee.com.ec/register/shop/assets/img/bee_location.png`
      })
    });
  }

  clearMarker() {
    this.markerVectorLayer.getSource().clear();
  }

  centerMap(long, lat, zoom) {
    this.map.getView().setCenter(transform([Number(long), Number(lat)], 'EPSG:4326', 'EPSG:3857'));
    this.map.getView().setZoom(zoom);

    if (this.markerVectorLayer !== undefined) {
      this.clearMarker();
    }

    this.setMarker(transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
  }

  plotRoute(coordinates: { lat: string, lng: string }[]) {
    const routeCoordinates = coordinates.map(coor => transform([parseFloat(coor.lng), parseFloat(coor.lat)], 'EPSG:4326', 'EPSG:3857'));

    const route = new LineString(routeCoordinates);

    const routeFeature = new Feature({
      geometry: route
    });

    const routeStyle = new Style({
      stroke: new Stroke({
        color: '#FF0000',
        width: 9
      })
    });

    routeFeature.setStyle(routeStyle);

    const routeSource = new VectorSource({
      features: [routeFeature]
    });

    this.routeVectorLayer = new VectorLayer({
      source: routeSource
    });

    this.map.addLayer(this.routeVectorLayer);
    
    let lastPosition = coordinates.length;

    if (this.markerVectorLayer !== undefined) {
      this.clearMarker();
    }
    this.setMarker(transform([Number(coordinates[lastPosition - 1].lng), Number(coordinates[lastPosition - 1].lat)], 'EPSG:4326', 'EPSG:3857'));
    this.centerMap(Number(coordinates[lastPosition - 1].lng), Number(coordinates[lastPosition - 1].lat), 15);
  }
}
