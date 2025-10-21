import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOperatorComponent } from './team-operator.component';
import { SelectOperatorComponent } from './select-operator/select-operator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TeamOperatorRoutes } from './team-operator.routes';
import { Event } from 'typescript.events';

@NgModule({
  declarations: [
    TeamOperatorComponent,
    SelectOperatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(TeamOperatorRoutes),
    MaterialModule,
    NgxDropzoneModule,
  ],
  providers: [
    Event
  ]
})
export class TeamOperatorModule { }
