import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
// ELIMINA: import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';
// AGREGA:
import { SocketService } from 'src/app/services/socket.service';
import { Event } from 'typescript.events';
import { register, format } from 'timeago.js';
import es from 'timeago.js/lib/lang/es';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  name = '';
  identifier = '';

  alerts: object[] = [
    {
      text: 'SOS',
      value: '1'
    },
    {
      text: 'SOSPECHOSO',
      value: '2'
    },
    {
      text: 'INUNDACIÓN',
      value: '6'
    },
    {
      text: 'TERREMOTO',
      value: '7'
    },
    {
      text: 'DISUASIVA',
      value: '10'
    },
    {
      text: 'LIBADORES',
      value: '11'
    },
    {
      text: 'EXTORSIONADOR',
      value: '12'
    },
    {
      text: 'P0',
      value: '13'
    },
    {
      text: 'P1',
      value: '14'
    },
    {
      text: 'P2',
      value: '15'
    }
  ];

  icons: any[] = [];

  connected = '';
  connectedAt: Date = new Date();
  connectedTimeAgo = '';

  powerOutage = '';
  powerOutageAt: Date = new Date();
  powerOutageTimeAgo = '';

  doorOpen = '';
  doorOpenAt: Date = new Date();
  doorOpenTimeAgo = '';

  batteryStatus: number | null = null;
  batteryStatusAt: Date = new Date();
  batteryStatusTimeAgo = '';

  threshold = 12;

  constructor(
    public dialogRef: MatDialogRef<ActionsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public events: Event,
    // ELIMINA: private mqttService: MqttServiceService,
    // AGREGA:
    private socketService: SocketService,
    private apiService: ApiService
  ) {
    register('es', es);
    this.name = data.name;
    this.identifier = data.identifier;
  }

  ngOnInit(): void {
    this.getLastStats();
    
    // CONECTA EL SOCKET AL INICIAR EL COMPONENTE
    this.socketService.socketConnect(`actions-${this.identifier}`);
  }

  getLastStats() {
    this.apiService.getCentralInformationLast('battery-status', this.identifier).subscribe((res: any) => {
      this.batteryStatus = res.boxStats[0].batteryStatus;
      this.batteryStatusAt = new Date(res.boxStats[0].createdAt);
      this.batteryStatusTimeAgo = format(this.batteryStatusAt, 'es');
    });
    
    this.apiService.getCentralInformationLast('sensor-status', this.identifier).subscribe((res: any) => {
      console.log('sensor status', res);
    });
    
    this.apiService.getCentralInformationLast('power-outage', this.identifier).subscribe((res: any) => {
      this.powerOutage = res.boxStats[0].powerOutage;
      this.powerOutageAt = new Date(res.boxStats[0].createdAt);
      this.powerOutageTimeAgo = format(this.powerOutageAt, 'es');
    });
    
    this.apiService.getCentralInformationLast('connected', this.identifier).subscribe((res: any) => {
      this.connected = res.boxStats[0].connected;
      this.connectedAt = new Date(res.boxStats[0].createdAt);
      this.connectedTimeAgo = format(this.connectedAt, 'es');
    });
  }

  sendCommand(payload: any) {
    // REEMPLAZA LA PUBLICACIÓN DIRECTA MQTT POR SOCKET.IO
    // this.mqttService.publishToTopic(`alarma/${this.identifier}`, payload.value);
    
    // USA EL SOCKET SERVICE PARA PUBLICAR A TRAVÉS DEL BACKEND
    this.socketService.publishMqttMessage(
      `alarma/${this.identifier}`, 
      payload.value, 
      { qos: 1, retain: true }
    );
    
    console.log(`Comando enviado: alarma/${this.identifier} = ${payload.value}`);
    
    // this.close('alert');
  }

  close(opt) {
    this.dialogRef.close({
      opt
    });
  }
}