import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
// import { SessionInService } from './services/session-in/session-in.service';
// import { SessionOutService } from './services/session-out/session-out.service';
import { OperatorsModule } from './pages/operators/operators.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [SessionInService]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [SessionOutService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'teams',
        loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule),
      },
      {
        path: 'operators',
        loadChildren: () => import('./pages/operators/operators.module').then(m => m.OperatorsModule),
      },
      {
        path: 'neighborhoods/:parameters',
        loadChildren: () => import('./pages/neighborhoods/neighborhoods.module').then(m => m.NeighborhoodsModule),
      },
      {
        path: 'central',
        loadChildren: () => import('./pages/central/central.module').then(m => m.CentralModule)
      },
      {
        path: 'list-neighbour/:parameters',
        loadChildren: () => import('./pages/list-neighbour/list-neighbour.module').then(m => m.ListNeighbourModule),
      },
      {
        path: 'map',
        loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule),
      },
      {
        path: 'keys',
        loadChildren: () => import('./pages/keys/keys.module').then(m => m.KeysModule)
      },
      {
        path: 'operator-team/:parameters',
        loadChildren: () => import('./pages/team-operator/team-operator.module').then(m => m.TeamOperatorModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
