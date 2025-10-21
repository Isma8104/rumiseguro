import  { Routes } from '@angular/router';
import { ListNeighbourComponent } from './list-neighbour.component';


export const ListNeighbourRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: ListNeighbourComponent
        }]
    }
];