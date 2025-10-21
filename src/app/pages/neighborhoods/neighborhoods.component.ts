import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { AddNeighborhoodsComponent } from './add-neighborhoods/add-neighborhoods.component';
import { showAlert } from 'src/app/utils/swal-alert';
import { PageEvent } from '@angular/material/paginator';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { CentralsInfoComponent } from './centrals-info/centrals-info.component';

@Component({
  selector: 'app-neighborhoods',
  templateUrl: './neighborhoods.component.html',
  styleUrls: ['./neighborhoods.component.scss']
})
export class NeighborhoodsComponent implements OnInit {
  parameters;
  idTeam;
  neighborhoods: any[] = [];
  searchForm: FormGroup;
  team;


  teams: any[] = [];
  selectTeam: boolean = false;


  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = "";
  count: number = 0;
  countTeams: number = 0;
  role: string = '';

  constructor(
    private api: ApiService,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
  ) {
    let parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
    this.team = parameters;
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.createForm();
    // this.getTeams();
    this.getNeighborhoodByTeam();
  }

  createForm() {
    this.searchForm = this.fb.group({
      value: ['']
    });
  }

  getNeighborhoodByTeam() {
    this.wordToSearch = this.searchForm.value.value;

    this.api.getNeighborhoodByTeam(this.team.id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
      this.neighborhoods = resp.body['neighborhoods'];
      this.count = resp.body['pagination']['total'];
      this.pagination = resp.body['pagination'];
    }, (err) => {
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  // getTeams(){
  //   this.wordToSearch = this.searchForm.value.value;

  //   this.api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
  //     this.teams = resp.body['teams'];
  //     this.countTeams = resp.body['pagination']['total'];
  //     // this.pagination = resp.body['pagination'];
  //   }, (err) => {
  //     console.log(err);
  //     console.log(this.teams.length);
  //     showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
  //   });
  // }

  // getNeighborhoodByTeam(team){
  //   this.selectTeam  = true;
  //   this.team = team;

  //   this.wordToSearch = this.searchForm.value.value;

  //   this.api.getNeighborhoodByTeam(this.team._id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
  //     this.neighborhoods = resp.body['neighborhoods'];
  //     this.count = resp.body['pagination']['total'];
  //     this.pagination = resp.body['pagination'];
  //   }, (err) => {
  //     showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
  //   });
  // }

  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getNeighborhoodByTeam();
  }

  openModal(opt, neighs?) {
    const modal = this.dialog.open(AddNeighborhoodsComponent, {
      width: '800px',
      data: {
        title: opt,
        neighs,
        idTeam: this.team.id
      }
    });

    modal.afterClosed().subscribe(result => {
      this.getNeighborhoodByTeam();
    });
  }

  openInfoModal(opt) {
    const modal = this.dialog.open(CentralsInfoComponent, {
      width: '750px',
      data: {
        central: opt,
      }
    });

    modal.afterClosed().subscribe(result => {
      // this.getTeams();
    });
  }

  showUsers(plant) {
    let data = {
      id: plant._id,
      name: plant.name,
      identifier: plant.identifier,
      team: this.team
    }

    let parameter = btoa(JSON.stringify(data));

    this.router.navigate(['list-neighbour/' + parameter]);
  }
}
