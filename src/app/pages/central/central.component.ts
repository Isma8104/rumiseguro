import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent implements OnInit {
  teams: any[] = [];
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  count: number = 0;
  searchForm: FormGroup;
  role: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder
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

        if (this.teams.length === 1) {
          let data = {
            id: this.teams[0]._id,
            name: this.teams[0].name
          }

          let parameter = btoa(JSON.stringify(data));
          this.router.navigate(['neighborhoods/' + parameter]);
        }else{
          this.pagination = resp.body.pagination;
          this.count = resp.body.pagination.total;
        }
      },
      error: (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
      }
    });
  }

  showPlants(team) {
    let data = {
      id: team._id,
      name: team.name
    }

    let parameter = btoa(JSON.stringify(data));
    this.router.navigate(['neighborhoods/' + parameter]);
  }
}
