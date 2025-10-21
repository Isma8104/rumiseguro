import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNeighbourRoutes } from './list-neighbour.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { Event } from 'typescript.events';
import { ListNeighbourComponent } from './list-neighbour.component';
import { AddNeighboursComponent } from './add-neighbour/add-neighbour.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ComponentsModule } from 'src/app/components/components.module';
import { ExcelImportComponent } from './excel-import/excel-import.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    ListNeighbourComponent,
    AddNeighboursComponent,
    ExcelImportComponent,
    RedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(ListNeighbourRoutes),
    MaterialModule,
    NgxDropzoneModule,
    ComponentsModule
  ],
  providers: [
    Event
  ]
})
export class ListNeighbourModule { }
