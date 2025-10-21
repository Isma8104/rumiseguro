import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { Router } from '@angular/router';;
import { PageEvent } from '@angular/material/paginator';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  count: number = 0;
  searchForm: FormGroup;
  role: string = '';

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    private api: ApiService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.createForm();
    this.getTeams();
  }

  createForm() {
    this.searchForm = this.fb.group({
      value: ['']
    });
  }

  getTeams() {
    this.wordToSearch = this.searchForm.value.value;
    this.api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe({
      next: (resp: any) => {
        this.teams = resp.body.teams;
        this.pagination = resp.body.pagination;
        this.count = resp.body.pagination.total;
      },
      error: (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
      }
    });
  }

  openModal(opt: any, team?: any) {
    const modal = this.dialog.open(AddTeamsComponent, {
      width: '800px',
      data: {
        title: opt,
        team
      }
    });

    modal.afterClosed().subscribe(_ => {
      this.getTeams();
    });
  }

  showPlants(team: { _id: any; name: any; }) {
    let data = {
      id: team._id,
      name: team.name
    }
    let parameter = btoa(JSON.stringify(data));
    this.router.navigate(['neighborhoods/' + parameter]);
  }

  showUsers(team: { _id: any; name: any; }) {
    let data = {
      id: team._id,
      name: team.name
    }

    let parameter = btoa(JSON.stringify(data));
    this.router.navigate(['operator-team/' + parameter]);
  }

  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getTeams();
  }
}
