// En src/app/services/socket.service.ts

import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { URL_SOCKET } from '../configurations/url.service';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: Socket;
  socketPosition: Socket;

  private mqttMessageSource = new Subject<any>();
  private positionSource = new Subject<any>();

  constructor(
    private _api: ApiService
  ) { }

  /**
   * Conecta el socket principal para eventos generales y MQTT.
   * Lo ideal es llamar a esta función una vez que el usuario ha iniciado sesión.
   * @param id Un identificador único, como el ID del usuario.
   */
  socketConnect(id: any) {
    let user = this._api.getUser();
    if (this.socket && this.socket.connected) {
      return;
    }

    // QUITAR EL NAMESPACE '/angular' - conectar al root
    this.socket = io(`${URL_SOCKET}`, {  // <-- Cambio aquí
      query: { id, user },
    });

    // Escucha el evento 'mqttMessage' del backend y lo emite a través del Observable
    this.socket.on('mqttMessage', (data) => {
      console.log('Mensaje MQTT recibido en frontend:', data);
      this.mqttMessageSource.next(data);
    });

    // Agregar listeners para depuración
    this.socket.on('connect', () => {
      console.log('Conectado al servidor Socket.IO');
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor Socket.IO');
    });

    this.socket.on('error', (error) => {
      console.error('Error en Socket.IO:', error);
    });
  }
  
  /**
   * Conecta el socket secundario, específico para posiciones.
   * @param id Un identificador único, como el ID del usuario o del seguimiento.
   */
  socketPositionConnect(id: any) {
    if (this.socketPosition && this.socketPosition.connected) {
        return;
    }
    
    // QUITAR EL NAMESPACE '/positions' - conectar al root
    this.socketPosition = io(`${URL_SOCKET}`, {  // <-- Cambio aquí
      query: { id },
    });

    // Escucha el evento 'user-position' y lo emite a través del Observable
    this.socketPosition.on('user-position', (data: any) => {
        this.positionSource.next(data);
    });
  }

  // --- MÉTODOS PÚBLICOS PARA USAR EN LOS COMPONENTES ---

  /**
   * Permite a los componentes suscribirse para recibir mensajes MQTT en tiempo real.
   */
  public listenForMqttMessages(): Observable<any> {
    return this.mqttMessageSource.asObservable();
  }

  /**
   * Permite a los componentes suscribirse para recibir actualizaciones de posición en tiempo real.
   */
  public listenForPositions(): Observable<any> {
    return this.positionSource.asObservable();
  }

  /**
   * Permite a los componentes enviar una petición al backend para publicar un mensaje MQTT.
   * @param topic El tópico MQTT al que se publicará.
   * @param message El mensaje que se enviará.
   * @param options Opciones adicionales de MQTT (ej: { qos: 2, retain: true }).
   */
  public publishMqttMessage(topic: string, message: string, options?: any) {
    if (this.socket) {
        console.log('Enviando mensaje MQTT:', { topic, message });
        this.socket.emit('publishToMqtt', { topic, message, options });
    }
  }

  /**
   * Método genérico para emitir cualquier otro evento al socket principal.
   * @param eventName Nombre del evento.
   * @param data Datos a enviar.
   */
  public emitEvent(eventName: string, data: any) {
    if (this.socket) {
        this.socket.emit(eventName, data);
    }
  }

  /**
   * Desconectar sockets
   */
  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.socketPosition) {
      this.socketPosition.disconnect();
    }
  }
}