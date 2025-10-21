import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IPagination } from 'src/app/components/pagination/pagination.interface';
import { ApiService } from 'src/app/services/api.service';
import { GenerateKeysComponent } from './generateKeys/generate-key.component';
import { PageEvent } from '@angular/material/paginator';
import { showAlert } from 'src/app/utils/swal-alert';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {
  keys: any[] = [];
  searchForm: FormGroup;
  pagination: IPagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
  wordToSearch: string = '';
  count: number = 0;

  constructor(
    private _api: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getKeys();
  }

  getKeys() {
    this._api.getKeys(this.pagination.page, this.pagination.itemsPage).subscribe({
      next: (resp: any) => {
        this.keys = resp.body.keys;
        this.pagination = resp.body.pagination;
        this.count = resp.body.pagination.total;
      },
      error: (err) => {
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
      }
    });
  }

  openModal() {
    const openModal = this.dialog.open(GenerateKeysComponent, {
      width: '300px'
    });

    openModal.afterClosed().subscribe(result => {
      this.getKeys();
    });
  }

  changePage(eventPage: PageEvent) {
    this.pagination.page = eventPage.pageIndex + 1;
    this.getKeys();
  }
}
