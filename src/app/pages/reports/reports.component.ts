import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { startWith, map } from 'rxjs/operators';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as moment from 'moment';
import { AlertTypePipe } from 'src/app/utils/alert.pipe';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  teamsCtrl = new FormControl();
  filteredTeams: Observable<any[]>;
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  teams: any[] = [];
  teamSelect = null;
  nameTeam: string = '';
  formSearch: FormGroup;
  count: number = -1;
  alerts: any[] = [];
  disableBtn: boolean = true;

  constructor(
    private _api: ApiService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTeams();
    this.createFormSearch();
  }


  createFormSearch() {
    this.formSearch = this.fb.group({
      startDate: [new Date().toISOString().substring(0, 10), [Validators.required]],
      endDate: [new Date().toISOString().substring(0, 10), [Validators.required]],
    });
  }

  getTeams() {
    this._api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
      this.teams = resp.body['teams'];
      this.filteredTeams = this.teamsCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterTeams(value))
      );
    });
  }

  showName(team?: any): string | undefined {
    return team ? team.name : undefined;
  }


  private _filterTeams(value: string): any[] {
    const filterValue = value;
    return this.teams.filter(item => item.name.includes(filterValue));
  }

  selected(event) {
    this.teamSelect = event.option.value._id;
    this.nameTeam = event.option.value.name;
    this.disableBtn = false;
  }

  onOptionChange(value: any) {
    if (!value) {
      this.disableBtn = true;
      this.teamSelect = null;
      this.alerts = [];
      this.count = -1;
      this.nameTeam = '';
    } else {

    }
  }


  get errorsFormSearch() { return this.formSearch.controls; }

  searchReport() {
    this.alerts = [];
    if (this.teamSelect) {
      this._api.generateReport(this.teamSelect, this.formSearch.value.startDate, this.formSearch.value.endDate).subscribe({
        next: (reponse: any) => {
          this.alerts = reponse.body.alerts;
          this.count = reponse.body.alerts?.length;
        },
        error: (err) => {
          showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        }
      })
    }
  }

  generateReport() {
    if (this.alerts?.length > 0) {
      try {
        const title = 'SHADOW';
        const subtitle = 'Listado de alarmas';
        const fromDate = moment(this.formSearch.value.startDate).format('DD/MM/YYYY');
        const toDate = moment(this.formSearch.value.endDate).format('DD/MM/YYYY');
        const total = this.alerts?.length;
        const processedAlarms = this.processAlerts(this.alerts);
        const alarms = [
          ['Fecha', 'Fecha respuesta', 'Tipo', 'Origen', 'Central', 'Usuario CC', ' Usuario Nombre', 'Operador CC', 'Operador Nombre', 'Respuesta'],
          ...processedAlarms
        ];
        this.generateAlarmListPdf(title, subtitle, fromDate, toDate, total, alarms);
        showAlert('success', 'Correcto', 'Reporte creado correctamente', 'btn btn-fill btn-info');
      } catch (error) {
        showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
      }

    }
  }

  processAlerts(alerts: any[]): any[][] {
    const processedData: any[][] = [];
    alerts.forEach(alert => {
      const alertType = new AlertTypePipe().transform(alert.type);
      const date = moment(alert.date).format('DD/MM/YYYY');
      const replyDate = moment(alert.replyDate).format('DD/MM/YYYY');
      processedData.push([
        date,
        replyDate,
        alertType,
        'Gps',
        alert.access.name,
        alert.user?.ci,
        alert.user?.name,
        alert.administrator?.ci,
        alert.administrator?.fullName,
        alert.description
      ]);
    });
    return processedData;
  }

  generateAlarmListPdf(title: string, subtitle: string, fromDate: string, toDate: string, total: number, alarms: any[][]): void {
    const documentDefinition = {
      content: [
        { text: title, style: 'header', alignment: 'center' },
        { text: subtitle, style: 'subheader', margin: [0, 0, 0, 5] },
        { text: [{ text: 'DESDE: ', bold: true }, `${fromDate} `], margin: [0, 0, 0, 5] },
        { text: [{ text: 'HASTA: ', bold: true }, `${toDate} `], margin: [0, 0, 0, 5] },
        { text: [{ text: 'TOTAL: ', bold: true }, `${total} alarmas`], margin: [0, 0, 0, 5] },
        {
          table: {
            headerRows: 1,
            widths: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            body: alarms,
          },
          layout: {
            fillColor: function (rowIndex, node, columnIndex) {
              return (rowIndex === 0) ? '#CCCCCC' : null; // Gray fill for header row
            },
          },
        }
      ],
      styles: {
        header: { fontSize: 24, bold: true },
        subheader: { fontSize: 18, bold: true },
        tableHeader: { bold: true }
      },
      pageOrientation: 'landscape',
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    // pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download('Reporte_Alarmas.pdf');
  }

}
