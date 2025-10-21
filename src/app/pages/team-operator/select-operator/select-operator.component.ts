import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-select-operator',
  templateUrl: './select-operator.component.html',
  styleUrls: ['./select-operator.component.scss']
})
export class SelectOperatorComponent implements OnInit {
  title = "";
  idTeam;
  searchForm: FormGroup;
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 1000, total: 1 };
  operators: any[] = [];
  word: "";

  filteredOperators: Observable<any[]>;
  operatorCtrl = new FormControl();
  selectOperator;

  constructor(
    public dialogRef: MatDialogRef<SelectOperatorComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    this.idTeam = data.team;
  }

  ngOnInit(): void {
    this.createForm();
    this.getOperators();
  }

  createForm(){
    this.searchForm = this.fb.group({
      value: ['']
    });
  }

  getOperators(){
    this.api.getOperators(this.pagination.page, this.pagination.itemsPage, "").subscribe(resp => {
      this.operators = resp.body['administrators'];
      
      this.filteredOperators = this.operatorCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterOperator(value))
      );
    }, (err) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  postOperatorTeam(){
    startLoading();
    this.api.postOperatorTeam(this.selectOperator._id,  this.idTeam).subscribe(resp =>  {
      finishLoading();
      showAlert('success', 'Correcto', 'Operador asignado correctamente', 'btn btn-fill btn-info').then((result: any) => {
          this.close();
      });
    },  (err) => {
      finishLoading();
      this.word ="";
      showAlert('error', 'Error', err.error.message,  'btn  btn-fill btn-info');
    });
  }

  private _filterOperator(value: string): any[] {
    const filterValue = value;
    return this.operators.filter(item => item.fullName.includes(filterValue));   
}

  selected(event){
    this.word = event.option.value.fullName;
    this.selectOperator = event.option.value;
  }

  close(){
    this.dialogRef.close();
  }
}
