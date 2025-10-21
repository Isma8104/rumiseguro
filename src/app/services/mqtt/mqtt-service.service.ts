import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';

@Injectable({
  providedIn: 'root'
})
export class MqttServiceService {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect('wss://certphy.com', {
        path: '/mqtt',
    });

    // this.client = mqtt.connect('ws://206.189.198.104:8083', {
    //   path: '/mqtt',
    // });

    this.client.on('connect', () => {
      // console.log('Conectado a MQTT!');
      // this.subscribeToTopic('server');
    });

    // this.client.on('message', (top, message) => {
    this.client.on('message', (_, __) => {
      // console.log(`Mensaje recibido bajo el tópico ${topic}: ${message.toString()}`);
    });
  }

  subscribeToTopic(topic: string) {
    this.client.subscribe(topic, { qos: 1 }, (error) => {
      if (error) {
        // console.log('Suscripción fallida:', error);
      } else {
        // console.log('Suscripto con éxito al tópico:', topic);
      }
    });
  }

  publishToTopic(topic: string, message: string) {
    this.client.publish(topic, message, { qos: 1, retain: true }, (error) => {
      if (error) {
        // console.log('Publicación fallida:', error);
      } else {
        // console.log('Mensaje publicado con éxito en el tópico:', topic);
      }
    });
  }

  unsubscribeFromTopic(topic: string) {
    this.client.unsubscribe(topic, (error) => {
      if (error) {
        // console.log('Desuscripción fallida:', error);
      } else {
        // console.log('Desuscripto con éxito del tópico:', topic);
      }
    });
  }

  listenTopic() {
    return this.client;
  }

  ngOnDestroy(): void {
    if (this.client) {
      this.client.end();
    }
  }
}
