import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { PasswordComponent } from './pages/login/password/password.component';

// ===================================================================
// PASO 1: Importa las librerías necesarias para Socket.IO
// ===================================================================
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// ===================================================================
// PASO 2: Configura la URL de tu backend (Node.js)
//         Asegúrate de que el puerto (ej: 3010) sea el correcto.
// ===================================================================
const config: SocketIoConfig = { url: 'http://localhost:3010', options: {} };

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TagInputModule,
    NgbModule,
    ComponentsModule,
    MaterialModule,

    // ===================================================================
    // PASO 3: Agrega el módulo a los imports de tu aplicación
    // ===================================================================
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PasswordComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}