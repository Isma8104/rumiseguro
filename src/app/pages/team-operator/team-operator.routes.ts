import  { Routes } from '@angular/router';
import { TeamOperatorComponent } from './team-operator.component';

export const TeamOperatorRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: TeamOperatorComponent
        }]
    }
];