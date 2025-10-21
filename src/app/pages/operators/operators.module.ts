import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { OperatorRoutes } from './operators.routes';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Event } from 'typescript.events';
import { AddOperatorsComponent } from './add-operators/add-operators.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    AddOperatorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(OperatorRoutes),
    MaterialModule,
    NgxDropzoneModule
  ],
  providers: [
    Event
  ]
})
export class OperatorsModule { }
