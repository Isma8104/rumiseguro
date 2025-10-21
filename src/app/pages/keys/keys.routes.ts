import  { Routes } from '@angular/router';
import { KeysComponent } from './keys.component';


export const KeysRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: KeysComponent
        }]
    }
];