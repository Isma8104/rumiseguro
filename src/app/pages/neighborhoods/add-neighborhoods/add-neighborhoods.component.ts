import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';
import { MapCardComponent } from 'src/app/components/map-card/map-card.component';

@Component({
  selector: 'app-add-neighborhoods',
  templateUrl: './add-neighborhoods.component.html',
  styleUrls: ['./add-neighborhoods.component.scss']
})
export class AddNeighborhoodsComponent implements OnInit {
  title = '';
  form: FormGroup;
  neighs: any;
  idTeam = '';
  latE: any = null;
  lngE: any = null;
  heightE = '300px';

  @ViewChild('mapCardRef', { static: false }) mapCardRef: MapCardComponent;

  files: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddNeighborhoodsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    dialogRef.disableClose = true;

    this.title = data.title;
    this.neighs = data.neighs;
    this.idTeam = data.idTeam;
  }

  ngOnInit(): void {
    this.createForm();
  }

  clickMap() {
    this.mapCardRef.clickMap();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latE = position.coords.latitude;
        this.lngE = position.coords.longitude;
        this.form.patchValue({ lat: position.coords.latitude });
        this.form.patchValue({ lng: position.coords.longitude });

        if (this.mapCardRef.markerVectorLayer !== undefined) {
          this.mapCardRef.clearMarker();
        }

        this.mapCardRef.setMarker(position.coords);
        this.mapCardRef.centerMap(this.lngE, this.latE, 15);
        // this.mapCardRef.clickMap(position.coords);
      });
    } else {
      console.log('User not allow')
    }
  }

  createForm() {
    this.latE = (this.title === 'Agregar') ? '-2.8974172' : this.neighs.lat;
    this.lngE = (this.title === 'Agregar') ? '-79.0070696' : this.neighs.lng;

    this.form = this.fb.group({
      name: [(this.title === 'Agregar') ? '' : this.neighs.name, [Validators.required]],
      identifier: [(this.title === 'Agregar') ? '' : this.neighs.identifier, [Validators.required]],
      description: [(this.title === 'Agregar') ? '' : this.neighs.description, [Validators.required]],
      radius: [(this.title === 'Agregar') ? '' : this.neighs.radius, [Validators.required]],
      team: [this.idTeam],
      lat: [(this.title === 'Agregar') ? '-2.8974172' : this.neighs.lat],
      lng: [(this.title === 'Agregar') ? '-79.0070696' : this.neighs.lng]
    });

    this.form.get('identifier').disable();
  }

  setLatLng(coors: any) {
    this.form.patchValue({ lat: coors.lat });
    this.form.patchValue({ lng: coors.lng });
  }

  configNeighs() {
    if (this.title === 'Editar') {
      this.putneighss();
    } else {
      this.postNeighborhood();
    }
  }

  postNeighborhood() {
    startLoading();

    this.api.postNeighborhood(this.form.value).subscribe(resp => {
      finishLoading();
      showAlert('success', 'Correcto', 'Central creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
        this.close();
      });
    }, (err) => {
      finishLoading();
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  putneighss() {
    startLoading();
    this.api.putNeighborhood(this.form.value, this.neighs._id).subscribe(resp => {
      finishLoading();
      showAlert('success', 'Correcto', 'Central actualizado correctamente', 'btn btn-fill btn-info').then((result: any) => {
        this.close();
      });
    }, (err) => {
      finishLoading();
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  get errorsForm() { return this.form.controls; }

  close() {
    this.dialogRef.close();
  }
}
