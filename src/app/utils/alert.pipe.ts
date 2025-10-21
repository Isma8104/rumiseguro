import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alertType'
})
export class AlertTypePipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'MEDIC_ALERT':
                return 'ALERTA MÉDICA';
            case 'FIRE_ALERT':
                return 'ALERTA DE INCENDIO';
            case 'POLICE_ALERT':
                return 'ALERTA POLICIAL';
            case 'SENSOR_ALERT':
                return 'ALERTA DE SENSOR';
            case 'BROKEN_SENSOR_ALERT':
                return 'ALERTA DE SENSOR DAÑADO';
            case 'DEVICE_ALERT':
                return 'ALERTA DE DISPOSITIVO';
            case 'ALERT_1':
                return 'ALERTA DE SOS';
            case 'ALERT_2':
                return 'ALERTA DE SOSPECHOSO';
            case 'ALERT_3':
                return 'ALERTA SILENCIOSA';
            case 'ALERT_4':
                return 'ALERTA DE MI UBICACIÓN';
            case 'ALERT_5':
                return 'ALERTA DE VIOLENCIA DE GÉNERO';
            case 'ALERT_6':
                return 'ALERTA DE INUNDACIÓN';
            case 'ALERT_7':
                return 'ALERTA DE TERREMOTO';
            case 'ALERT_10':
                return 'ALERTA DISUASIVA';
            case 'ALERT_11':
                return 'ALERTA DE LIBADORES';
            case 'ALERT_12':
                return 'ALERTA DE EXTORSIONADOR';
            case 'ALERT_13':
                return 'ALERTA P0';
            case 'ALERT_14':
                return 'ALERTA P1';
            case 'ALERT_15':
                return 'ALERTA P2';
            default:
                return value; // Devuelve el valor original si no hay coincidencia
        }
    }
}