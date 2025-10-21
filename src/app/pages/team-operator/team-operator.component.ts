import { Component, OnInit } from '@angular/core';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { showAlert } from 'src/app/utils/swal-alert';
import { SelectOperatorComponent } from './select-operator/select-operator.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-team-operator',
  templateUrl: './team-operator.component.html',
  styleUrls: ['./team-operator.component.scss']
})
export class TeamOperatorComponent implements OnInit {
  team;
  operators: any[] = [];
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  count: number = 0;
  searchForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    private _api: ApiService,
    public router: Router,
  ) {
    let parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
    this.team = parameters;
  }

  ngOnInit(): void {
    this.createForm();
    this.getOperatorByTeam();
  }

  createForm() {
    this.searchForm = this.fb.group({
      value: ['']
    });
  }

  getOperatorByTeam() {
    this.wordToSearch = this.searchForm.value.value;
    this._api.getOperatorsByTeam(this.team.id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
      this.operators = resp.body['users'];
      this.count = resp.body['pagination']['total'];
      this.pagination = resp.body['pagination'];
    }, (err) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  openModal() {
    const modal = this.dialog.open(SelectOperatorComponent, {
      width: '400px',
      data: {
        team: this.team.id
      }
    });

    modal.afterClosed().subscribe(result => {
      this.getOperatorByTeam();
    });
  }

  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getOperatorByTeam();
  }
}
