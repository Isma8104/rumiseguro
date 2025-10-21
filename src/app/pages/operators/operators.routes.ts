import  { Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';


export const OperatorRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: OperatorsComponent
        }]
    }
];