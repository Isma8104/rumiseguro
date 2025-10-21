import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysComponent } from './keys.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MaterialModule } from 'src/app/material/material.module';
import { KeysRoutes } from './keys.routes';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Event } from 'typescript.events';
import { GenerateKeysComponent } from './generateKeys/generate-key.component';

@NgModule({
  declarations: [
    KeysComponent,
    GenerateKeysComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(KeysRoutes),
    MaterialModule,
    NgxDropzoneModule,
    ComponentsModule
  ],
  providers: [
    Event
  ]
})
export class KeysModule { }
