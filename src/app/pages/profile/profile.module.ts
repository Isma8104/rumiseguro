import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routes';
import { MaterialModule } from 'src/app/material/material.module';
import { PasswordComponent } from '../login/password/password.component';
import { Event } from 'typescript.events';
import { ChagePasswordComponent } from './chage-password/chage-password.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ChagePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(ProfileRoutes),
    MaterialModule,
  ],
  providers: [
    Event
  ]
})
export class ProfileModule { }
