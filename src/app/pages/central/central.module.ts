import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { CentralRoutes } from './central.routes';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ComponentsModule } from 'src/app/components/components.module';
import { CentralComponent } from './central.component';
import { Event } from 'typescript.events';

@NgModule({
  declarations: [
    CentralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(CentralRoutes),
    MaterialModule,
    NgxDropzoneModule,
    ComponentsModule
  ],
  providers: [
    Event
  ]
})
export class CentralModule { }
