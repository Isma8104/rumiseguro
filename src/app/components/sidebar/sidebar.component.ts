import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  business;
  branchOffice;
  public nombreEmpresa: string;
  public nombreSucursal: string;
  public role: string = '';

  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.role = localStorage.getItem('role');
  }

}
