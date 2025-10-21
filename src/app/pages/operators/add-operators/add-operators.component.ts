import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-operators.component.html',
  styleUrls: ['./add-operators.component.scss']
})
export class AddOperatorsComponent implements OnInit {
  title = "";
  form: FormGroup;
  operator;
  showPassword: boolean = false;
  permissions: FormGroup;
  role: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddOperatorsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    dialogRef.disableClose = true;
    this.title = data.title;
    this.operator = data.operator;
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.createForm();
    this.initFormPermissions();
  }

  createForm() {
    this.form = this.fb.group({
      ci: [(this.title === 'Agregar') ? '' : this.operator.ci, [Validators.required]],
      fullName: [(this.title === 'Agregar') ? '' : this.operator.fullName, [Validators.required]],
      email: [(this.title === 'Agregar') ? '' : this.operator.email, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      role: [(this.title === 'Agregar') ? '' : this.operator.role, [Validators.required]],
      password: [(this.title === 'Agregar') ? '123456' : null,
      (this.title === 'Agregar') ? [Validators.required] : []],
    });
  }

  initFormPermissions() {
    this.permissions = this.fb.group({
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      p7: false,
    });

  }


  configOperator() {
    if (this.title === 'Editar') {
      this.putOperator();
    } else {
      this.postOperator();
    }
  }

  validarNumeros(event) {
    if ((event.keyCode < 48) || (event.keyCode > 57)) event.returnValue = false;
  }

  postOperator() {
    this.api.postOperators(this.form.value).subscribe({
      next: (res) => {
        switch (res?.status) {
          case 200:
            showAlert('success', 'Correcto', 'Operador creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
              this.close();
            });
            break;
          default:
            showAlert('error', 'Error', res.body.message, 'btn btn-fill btn-info');
            break;
        }
      },
      error: (err) => {
        if (err.error.message.message.includes('email is already in use')) {
          showAlert('error', 'Error', 'El correo electrónico proporcionado ya está registrado en el sistema. Por favor, ingresa un correo electrónico diferente.', 'btn btn-info');
        } else {
          showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
        }
      }
    });

  }

  putOperator() {
    this.api.putOperators(this.form.value, this.operator._id).subscribe({
      next: (res) => {
        switch (res?.status) {
          case 200:
            showAlert('success', 'Correcto', 'Operador actualizado correctamente', 'btn btn-fill btn-info').then((result: any) => {
              this.close();
            });
            break;
          default:
            showAlert('error', 'Error', res.body.message, 'btn btn-fill btn-info');
            break;
        }
      },
      error: (err) => {
        if (err.error.message.message.includes('email is already in use')) {
          showAlert('error', 'Error', 'El correo electrónico proporcionado ya está registrado en el sistema. Por favor, ingresa un correo electrónico diferente.', 'btn btn-info');
        } else {
          showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
        }
      }
    });
  }

  resetPaswordOperator() {
    this.api.resetPaswordOperator({ password: "123456" }, this.operator._id).subscribe({
      next: (res) => {
        switch (res?.status) {
          case 200:
            showAlert('success', 'Correcto', 'Contraseña actualizada correctamente', 'btn btn-fill btn-info').then((result: any) => {
              this.close();
            });
            break;
          default:
            showAlert('error', 'Error', res.body.message, 'btn btn-fill btn-info');
            break;
        }
      },
      error: (err) => {

        showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');

      }
    });
  }



  get errorsForm() { return this.form.controls; }

  selectedRole(value) {
    this.form.get('role').setValue(value);
  }

  close() {
    this.dialogRef.close();
  }

}
