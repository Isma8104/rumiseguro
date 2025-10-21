import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { NeighborhoodsRoutes } from './neighborhoods.routes';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NeighborhoodsComponent } from './neighborhoods.component';
import { AddNeighborhoodsComponent } from './add-neighborhoods/add-neighborhoods.component';
import { Event } from 'typescript.events';
import { MapCardComponent } from 'src/app/components/map-card/map-card.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CentralsInfoComponent } from './centrals-info/centrals-info.component';


@NgModule({
  declarations: [
    NeighborhoodsComponent,
    AddNeighborhoodsComponent,
    CentralsInfoComponent,
    // MapCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(NeighborhoodsRoutes),
    MaterialModule,
    NgxDropzoneModule,
    ComponentsModule
  ],
  providers: [
    Event
  ]
})
export class NeighborhoodsModule { }
