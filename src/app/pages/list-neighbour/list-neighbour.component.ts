import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { AddNeighboursComponent } from './add-neighbour/add-neighbour.component';
import { ExcelImportComponent } from './excel-import/excel-import.component';
import { PageEvent } from '@angular/material/paginator';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { showAlert } from 'src/app/utils/swal-alert';
import { RedComponent } from './red/red.component';

@Component({
  selector: 'app-list-neighbour',
  templateUrl: './list-neighbour.component.html',
  styleUrls: ['./list-neighbour.component.scss']
})
export class ListNeighbourComponent implements OnInit {
  parameters;
  neighborhoods;
  neighbour: any[] = [];
  searchForm: FormGroup;
  team;

  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = "";
  count: number = 0;
  role: string = '';

  constructor(
    private api: ApiService,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
  ) { 
    let parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
    this.neighborhoods = parameters;
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.createForm();
    this.getNeighbour();
  }
  
  createForm(){
    this.searchForm = this.fb.group({
      value: ['']
    });
  }
  
  getNeighbour(){
    this.wordToSearch = this.searchForm.value.value;

    this.api.getUserByNeighborhood(this.neighborhoods.id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
      this.neighbour = resp.body['users'];
      this.count = resp.body['pagination']['total'];
      this.pagination = resp.body['pagination'];
    }, (err) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }   

  openExcelImport(){
    const modal = this.dialog.open(ExcelImportComponent, {
      width: '600px',
      data: {
        idNeigh: this.neighborhoods.id,
        team: this.neighborhoods.team,
        access: this.neighborhoods.identifier
      }
    });

    modal.afterClosed().subscribe(result => {
      this.getNeighbour();
    });
  }

  openModal(opt,  neigh?){
    const modal = this.dialog.open(AddNeighboursComponent, {
      width: '600px',
      data: {
        title: opt,
        neigh,
        team: this.neighborhoods.team,
        idNeighbour: this.neighborhoods.id,
        identifier: this.neighborhoods.identifier
      }
    });
  
    modal.afterClosed().subscribe(result => {
      this.getNeighbour();
    });
  }

  openRedSettings(opt: string, user?: string){
    this.dialog.open(RedComponent, {
      width: '400px',
      data: {
        opt,
        identifier: (opt === 'CENTRAL') ? this.neighborhoods.identifier : user
      }
    });
  }


  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getNeighbour();
  }
}

