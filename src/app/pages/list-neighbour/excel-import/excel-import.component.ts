import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.scss']
})
export class ExcelImportComponent implements OnInit {
    idNeigh = "";
    form: FormGroup;
    lists: any[] = [];
    company;
    access = "";
    responsesError: any[] = [];

    constructor(
        public dialogRef: MatDialogRef<ExcelImportComponent>,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public api: ApiService,
        public events: Event
    ) {
        this.idNeigh = data.idNeigh;
        this.access = data.access;
        this.company = (data.team.name === 'SHADOW' ? 'SHADOW' : 'ABIC');
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            file: ['', [Validators.required]]
        });
    }

    onFileChange(event: any): void {
        const file = event.target.files[0];
        
        if (file) {
            this.api.readExcelFile(file).then((jsonData) => {
                let jsonDecoded = [];
                this.lists = [];

                for (let i = 1; i < jsonData.length; i++) {
                    let data = {
                        ci: jsonData[i][0],
                        name: jsonData[i][1],
                        phone: jsonData[i][2],
                        address: jsonData[i][3],
                        email: jsonData[i][4],
                        password: jsonData[i][5],
                        lat: jsonData[i][6],
                        lng: jsonData[i][7],
                        company: this.company,
                        neighbourhood: this.idNeigh,
                        access: this.access
                    }
        
                    if (
                        data.ci === undefined ||
                        data.name === undefined ||
                        data.phone === undefined ||
                        data.address === undefined ||
                        data.email === undefined ||
                        data.password === undefined ||
                        data.lat === undefined ||
                        data.lng === undefined
                    ) {
                        throw new Error('Uno o más campos son undefined.');
                    }

                    jsonDecoded.push(data);
                }

                this.lists = jsonDecoded;
            }).catch((error) => {
                console.error('Error al leer el archivo Excel:', error);
            });
        }
    }

    postNeighbours(){
        startLoading();
        this.api.postNeighbourImport(this.lists).subscribe(resp => {
            finishLoading();
            showAlert('success', 'Success', 'Vecinos creados con éxito', 'btn btn-info');
    
            let errors = resp.body['results'].errors;
                
            if (errors.length > 0) {
                this.responsesError = errors;
            }
        }, (err) => {
            console.error(err);
            finishLoading();
            showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        })
    }

    get errorsForm() { return this.form.controls; }

    close(){
        this.dialogRef.close();
    }
}
