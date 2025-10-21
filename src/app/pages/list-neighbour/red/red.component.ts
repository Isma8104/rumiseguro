import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  title: string = "";
  form: FormGroup;
  identifier: "";
  public showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RedComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    dialogRef.disableClose = true;
    this.identifier = data.identifier;
    this.title = data.opt;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      identifier: [this.identifier, [Validators.required]]
    });
  }

  engancharRed(){
    let dataForm = this.form.value;
    let idBarrio = dataForm.identifier; // Suponiendo que this.data contiene el id del barrio
    let ssId = dataForm.name; // Suponiendo que this.dataForm contiene un FormGroup con el campo 'name' para el ssid de la red
    let password = dataForm.password; // Suponiendo que this.dataForm contiene un FormGroup con el campo 'password' para la contraseña
    
    let url = `http://192.168.4.1/set?a=${idBarrio}&b=${ssId}&c=${password}`;

    // Crear un elemento de texto temporal para copiar al portapapeles
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);

    // Seleccionar el texto dentro del elemento
    el.select();

    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(el);

    // Abrir la URL en una nueva ventana
    window.open(url, '_blank');

    showAlert('success', 'Correcto', 'Red enganchada correctamente', 'btn btn-info');
    this.close();
  }

  get errorsForm() { return this.form.controls; }

  close(){
    this.dialogRef.close();
  }
}
