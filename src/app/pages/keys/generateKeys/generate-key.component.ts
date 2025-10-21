import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})
export class GenerateKeysComponent implements OnInit {
  title = "";
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GenerateKeysComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      quantity: ['', [Validators.required]],
    });
  }


  generateKeys(){
    this.api.generateKeys(this.form.value.quantity).subscribe(resp  => {
        showAlert('success', 'Correcto', 'Código creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
            this.close();
        });
    }, (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    })
  }

  get errorsForm() { return this.form.controls; }


  close(){
    this.dialogRef.close();
  }
}
