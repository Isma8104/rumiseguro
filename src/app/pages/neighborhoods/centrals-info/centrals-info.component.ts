import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-centrals-info',
  templateUrl: './centrals-info.component.html',
  styleUrls: ['./centrals-info.component.scss']
})
export class CentralsInfoComponent implements OnInit {

  title = '';
  form: FormGroup;
  team;
  central = null;
  centralName = '';
  options: string[] = ['Estado de la batería', 'Estado del sensor', 'Estado de corriente',];
  selectedOption: string;
  information: string[][];

  constructor(
    public dialogRef: MatDialogRef<CentralsInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: ApiService,
  ) {
    this.central = this.data.central;
    this.centralName = this.central.name;
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    const actualDate = new Date();
    const lastWeekDate = new Date(actualDate);
    lastWeekDate.setDate(actualDate.getDate() - 7);

    this.form = this.fb.group({
      typeEvent: ['', [Validators.required]],
      startDate: [
        new Date(lastWeekDate.getFullYear(),lastWeekDate.getMonth(), lastWeekDate.getDate()).toISOString().substring(0, 10), [Validators.required]],
      endDate: [new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()).toISOString().substring(0, 10), [Validators.required]],

    });
  }

  identifyQueryType(type) {
    let option;
    switch (type) {
      case 'Estado de la batería':
        option = 'battery-status';
        break;
      case 'Estado del sensor':
        option = 'sensor-status';
        break;
      case 'Estado de corriente':
        option = 'power-outage';
        break;
      default:
        option = '';
        break
    }

    return option;

  }

  showInformation(queryType, resp) {
    let info;
    let strings = []
    let field: string[] = [];

    if (queryType === 'Estado de la batería') {
      for (let i = 0; i < resp.boxStats.length; i++) {
        info = 'Estado de la batería';
        field.push(info);
        info = resp.boxStats[i].createdAt.split('T')[0];
        field.push(info);
        const date: Date = new Date(resp.boxStats[i].createdAt);
        info = date.getHours() + ':' + date.getMinutes();
        field.push(info);
        info = resp.boxStats[i].batteryStatus + ' V';
        field.push(info);
        strings.push(field);
        info = '';
        field = [];
      }
    } else if (queryType === 'Estado del sensor') {
      for (let i = 0; i < resp.boxStats.length; i++) {
        info = 'Estado del sensor';
        field.push(info);
        info = resp.boxStats[i].createdAt.split('T')[0];
        field.push(info);
        const date: Date = new Date(resp.boxStats[i].createdAt);
        info = date.getHours() + ':' + date.getMinutes();
        field.push(info);
        info = (resp.boxStats[i].sensorStatus === '0') ? 'Caja cerrada' : 'Caja abierta';
        field.push(info);
        strings.push(field);
        info = '';
        field = [];
      }
    } else if (queryType === 'Estado de corriente')
      for (let i = 0; i < resp.boxStats.length; i++) {
        info = 'Estado de corriente';
        field.push(info);
        info = resp.boxStats[i].createdAt.split('T')[0];
        field.push(info);
        const date: Date = new Date(resp.boxStats[i].createdAt);
        info = date.getHours() + ':' + date.getMinutes();
        field.push(info);
        info = (resp.boxStats[i].powerOutage === '0') ? 'No conectado' : 'Conectado';
        field.push(info);
        strings.push(field);
        info = '';
        field = [];
      }

    return strings;
  }
  searchInfo() {
    const queryType = this.identifyQueryType(this.form.get('typeEvent').value)
    this.api.getCentralInformation(queryType, this.central.identifier).subscribe(
      (resp) => {
        this.information = this.showInformation(this.form.get('typeEvent').value, resp);
      }, (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
      }
    )
  }

  onSeleccionarOpcion() {
    console.log('Opción seleccionada:', this.selectedOption);
    // Agrega aquí la lógica que necesites realizar cuando se seleccione una opción
  }
  close() {
    this.dialogRef.close();
  }

  get errorsForm() { return this.form.controls; }
}
