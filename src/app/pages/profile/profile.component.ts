import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { ChagePasswordComponent } from './chage-password/chage-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  operator!: FormGroup;

  constructor(
    private _api: ApiService,
    private _fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getProfile();
  }

  createForm(){
    this.operator = this._fb.group({
      ci: [''],
      fullName:  [''],
      email: [''],
      role: ['']
    });
  }

  getProfile(){
    let id = this._api.getUser();

    this._api.getOperatorsById(id).subscribe(resp => {
      let operatorSelected = resp.body['administrator'];
      
      this.operator = this._fb.group({
        ci: [operatorSelected.ci || ''],
        fullName:  [operatorSelected.fullName],
        email:  [operatorSelected.email],
        role: [operatorSelected.role]
      });

      if (operatorSelected.role !== 'SUPER-ADMIN') {
        this.operator.get('role')?.disable();
      }
    }, (err) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-primary');
    });
  }

  updateAdmin(){
    let id = this._api.getUser();

    this._api.putOperators(this.operator.value, id).subscribe((resp: any) => {
      showAlert('success', 'Correcto', 'Usuario modificado correctamente', 'btn btn-primary').then(() => {
        window.location.reload();
      });
    }, (err: any) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-primary');
    });
  }

  changePassword(){
    const  openModal = this.dialog.open(ChagePasswordComponent, {
      width: '400px',
    });
  }
}
