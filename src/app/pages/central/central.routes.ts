import  { Routes } from '@angular/router';
import { CentralComponent } from './central.component';


export const CentralRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: CentralComponent
        }]
    }
];