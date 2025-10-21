import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { matchValues, noWhitespaceValidator } from 'src/app/utils/validations';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-chage-password',
  templateUrl: './chage-password.component.html',
  styleUrls: ['./chage-password.component.scss']
})
export class ChagePasswordComponent implements OnInit {
  passwordForm: FormGroup;
  public showPasswordAnt: boolean = false;
  public showPassword: boolean = false;
  public showRepPassword: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ChagePasswordComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.passwordForm = this.fb.group({
      passwordAnt: ['',  [Validators.required, noWhitespaceValidator]],
      password: ['', [Validators.required, noWhitespaceValidator]],
      repPassword: ['', [Validators.required, noWhitespaceValidator]]
    },  {
      validator: matchValues('password', 'repPassword')
    });
  }

 changePassword(){
  delete this.passwordForm.value.repPassword;
  
  let idUser = this.api.getUser();

  this.api.resetPaswordOperator(this.passwordForm.value, idUser).subscribe(resp => {
    showAlert('success', 'Correcto', 'Contraseña actualizada', 'btn  btn-primary').then(() => {
       this.close();
    });
  }, (err)=> {
    showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
  });
 }

  close(){
    this.dialogRef.close();
  }
}
