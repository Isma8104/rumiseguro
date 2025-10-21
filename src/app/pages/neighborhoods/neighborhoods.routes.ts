import  { Routes } from '@angular/router';
import { NeighborhoodsComponent } from './neighborhoods.component';


export const NeighborhoodsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: NeighborhoodsComponent
        }]
    }
];