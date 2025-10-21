import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }

  public cerrarSesion() {
    localStorage.removeItem("token-shadow");
    localStorage.removeItem("id-sh");
    localStorage.removeItem("role");
    this.router.navigate(['/login']);
  }
}
