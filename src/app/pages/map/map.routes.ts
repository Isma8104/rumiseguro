import  { Routes } from '@angular/router';
import { MapComponent } from './map.component';


export const MapRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: MapComponent
        }]
    }
];