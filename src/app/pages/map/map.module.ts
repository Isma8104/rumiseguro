import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { Event } from 'typescript.events';
import { MapComponent } from './map.component';
import { MapRoutes } from './map.routes';
import { InfoAlertsComponent } from './info-alert/info-alert.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActionsComponent } from './actions/actions.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    MapComponent,
    InfoAlertsComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule.forChild(MapRoutes),
    MaterialModule,
    ComponentsModule,
  ],
  providers: [
    Event
  ]
})
export class MapModule { }
