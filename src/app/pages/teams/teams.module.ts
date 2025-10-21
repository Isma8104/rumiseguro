import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './teams.routes';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Event } from 'typescript.events';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    TeamsComponent,
    AddTeamsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(HomeRoutes),
    MaterialModule,
    NgxDropzoneModule
  ],
  providers: [
    Event
  ]
})
export class TeamsModule { }
