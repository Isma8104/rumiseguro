import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { AddOperatorsComponent } from './add-operators/add-operators.component';
import { PageEvent } from '@angular/material/paginator';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  operators: any[] = [];
  searchForm: FormGroup;
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  count: number = 0;

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    private api: ApiService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getOperators();
  }

  createForm() {
    this.searchForm = this.fb.group({
      value: ['']
    });
  }

  getOperators() {
    this.wordToSearch = this.searchForm.value.value;
    this.api.getOperators(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe({
      next: (resp: any) => {
        this.operators = resp.body.administrators;
        this.pagination = resp.body.pagination;
        this.count = resp.body.pagination.total;
      },
      error: (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
      }
    });
  }

  openModal(opt, operator?) {
    const modal = this.dialog.open(AddOperatorsComponent, {
      width: '400px',
      data: {
        title: opt,
        operator
      }
    });

    modal.afterClosed().subscribe(result => {
      this.getOperators();
    });
  }

  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getOperators();
  }
}
