import  { Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';


export const HomeRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: TeamsComponent
        }]
    }
];