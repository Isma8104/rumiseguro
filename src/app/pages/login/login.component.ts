import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PasswordComponent } from './password/password.component';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'SHADOW  SISB';
  public token: any;
  public showPassword: boolean = false;

  form: FormGroup;

  @ViewChild('closebutton', { static: false }) closebutton: any;
  @ViewChild('closebuttonReg', { static: false }) closebuttonReg: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public dialog: MatDialog,
    public api: ApiService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  createForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
    });
  }

  login() {
    this.api.login(this.form.value).subscribe(resp => {
      if (resp.status === 200) {
        this.router.navigate(['/home']);
      }
    }, (err) => {
      if (err.error?.status === 401) {
        showAlert('error', 'Error', err.error?.message, 'btn btn-info');
      } else {
        showAlert('error', 'Error', 'Credenciales incorrectas', 'btn btn-info');
      }
    });
  }

  openRecoverPassword() {
    this.dialog.open(PasswordComponent, { width: '600px', data: this.form.value.email });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
