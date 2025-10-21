import { NgModule } from '@angular/core';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    // CommonModule,
    // RouterModule.forChild(HomeRoutes),
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
