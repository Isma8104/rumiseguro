import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { finishLoading, startLoading } from 'src/app/components/loading/loader';
import { ApiService } from 'src/app/services/api.service';
import { showAlert } from 'src/app/utils/swal-alert';
import { Event } from 'typescript.events';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-neighborhoods',
  templateUrl: './add-neighbour.component.html',
  styleUrls: ['./add-neighbour.component.scss']
})
export class AddNeighboursComponent implements OnInit {
  title = "";
  form: FormGroup;
  formUbi: FormGroup;
  formBtns: FormGroup;
  isButton: boolean = false;

  neighs;
  idNeighbourhood = "";
  access = "";

  public showPassword: boolean = false;

  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(1));
  files: File[] = [];
  company: string = "";
  latE: any = null;
  lngE: any = null;
  heightE = '50%';

  constructor(
    public dialogRef: MatDialogRef<AddNeighboursComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    dialogRef.disableClose = true;
    this.title = data.title;
    this.neighs = data.neigh;
    this.idNeighbourhood = data.idNeighbour;
    this.access = data.identifier;
    this.company = (data.team.name === 'SHADOW' ? 'SHADOW' : 'ABIC');
    this.selectedBtn(this.neighs?.physicalBtn ? true : false)
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.latE = (this.title === 'Agregar') ? '-2.8974172' : this.neighs?.lat;
    this.lngE = (this.title === 'Agregar') ? '-79.0070696' : this.neighs?.lng;

    this.form = this.fb.group({
      ci: [(this.title === 'Agregar') ? '' : this.neighs?.ci, [Validators.required]],
      name: [(this.title === 'Agregar') ? '' : this.neighs?.name, [Validators.required]],
      phone: [(this.title === 'Agregar') ? '' : this.neighs?.phone, [Validators.required]],
      address: [(this.title === 'Agregar') ? '' : this.neighs?.address, [Validators.required]],
      email: [(this.title === 'Agregar') ? '' : this.neighs?.email, [Validators.required]],
      password: [(this.title === 'Agregar') ? '' : this.neighs?.password, [Validators.required]],
      img: [(this.title === 'Agregar') ? '' : this.neighs?.img],
      imgName: [(this.title === 'Agregar') ? '' : 'tiene valor'],
      neighbourhood: [this.idNeighbourhood],
      company: [this.company],
      access: [this.access],
      isButton: [(this.title === 'Agregar') ? false : true]
    });

    this.formUbi = this.fb.group({
      lat: [(this.title === 'Agregar') ? '' : this.neighs?.lat, [Validators.required]],
      lng: [(this.title === 'Agregar') ? '' : this.neighs?.lng, [Validators.required]],
    });

    this.formBtns = this.fb.group({
      physicalBtn: [(this.title === 'Agregar') ? '' : this.neighs?.physicalBtn],
      physicalBtnTwo: [(this.title === 'Agregar') ? '' : this.neighs?.physicalBtnTwo],
      physicalBtnThree: [(this.title === 'Agregar') ? '' : this.neighs?.physicalBtnThree],
      physicalBtnFour: [(this.title === 'Agregar') ? '' : this.neighs?.physicalBtnFour],
      physicalBtnWifi: [(this.title === 'Agregar') ? '' : this.neighs?.physicalBtnWifi],
    });
  }

  onSelect(event) {
    this.files[0] = (event.addedFiles);
    this.filesControl = new FormControl(this.files[0], FileUploadValidators.filesLimit(1));

    this.form = this.fb.group({
      ci: [this.form.value.ci, [Validators.required]],
      name: [this.form.value.name, [Validators.required]],
      phone: [this.form.value.phone, [Validators.required]],
      address: [this.form.value.address, [Validators.required]],
      email: [this.form.value.email, [Validators.required]],
      password: [this.form.value.password, [Validators.required]],
      img: [this.filesControl],
      imgName: ['tiene valor'],
      neighbourhood: [this.idNeighbourhood]
    });
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    this.filesControl = new FormControl('', FileUploadValidators.filesLimit(1));

    this.form = this.fb.group({
      ci: [this.form.value.ci, [Validators.required]],
      name: [this.form.value.name, [Validators.required]],
      phone: [this.form.value.phone, [Validators.required]],
      address: [this.form.value.address, [Validators.required]],
      email: [this.form.value.email, [Validators.required]],
      password: [this.form.value.password, [Validators.required]],
      img: [this.filesControl],
      imgName: [''],
      neighbourhood: [this.idNeighbourhood]
    });
  }

  setLatLng(coors: any) {
    this.formUbi.patchValue({ lat: coors.lat });
    this.formUbi.patchValue({ lng: coors.lng });
  }

  configNeighs() {
    if (this.title === 'Editar') {
      this.putneighss();
    } else {
      this.postNeighbour();
    }
  }

  selectedBtn(value) {
    this.isButton = value;
    this.formBtns = this.fb.group({
      physicalBtn: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtn, [Validators.required]],
      physicalBtnTwo: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtnTwo],
      physicalBtnThree: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtnThree],
      physicalBtnFour: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtnFour],
      physicalBtnWifi: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtnWifi],
    });
  }

  //Convert image
  // if (this.form.value.imgName !== '') {
  //   this.convertFile(this.form.value.image.value[0]).subscribe(imgBase64 => {
  //     data['img'] = imgBase64;

  //     this.api.postNeighbour(data).subscribe(resp => {
  //       finishLoading();
  //       switch (resp?.statusCode) {
  //         case 200:
  //           showAlert('success', 'Correcto', 'Vecino creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
  //             this.close();
  //           });
  //           break;
  //         default:
  //           // showAlert(TYPE_ALERT.WARNING, TYPE_BUTTON.WARNING, TYPE_TITLE.WARNING, reponse.message);
  //           showAlert('success', 'Correcto', resp.message, 'btn btn-fill btn-info').then((result: any) => {
  //             // this.close();
  //           });
  //           break;
  //       }

  //     }, (err) => {
  //       finishLoading();
  //       showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
  //     });
  //   })
  // } else {

  postNeighbour() {
    startLoading();

    let data = {
      ci: this.form.value.ci,
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      email: this.form.value.email,
      lat: this.formUbi.value.lat,
      lng: this.formUbi.value.lng,
      password: this.form.value.password,
      neighbourhood: this.form.value.neighbourhood,
      company: this.form.value.company,
      access: this.form.value.access,
      physicalBtn: this.formBtns.value.physicalBtn,
      physicalBtnTwo: this.formBtns.value.physicalBtnTwo,
      physicalBtnThree: this.formBtns.value.physicalBtnThree,
      physicalBtnFour: this.formBtns.value.physicalBtnFour,
      physicalBtnWifi: this.formBtns.value.physicalBtnWifi,
    }
    this.api.postNeighbour(data).subscribe(resp => {
      finishLoading();
      switch (resp?.status) {
        case 200:
          showAlert('success', 'Correcto', 'Vecino creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
            this.close();
          });
          break;
        default:
          showAlert('error', 'Error', resp.body.message, 'btn btn-fill btn-info');
          break;
      }
    }, (err) => {
      finishLoading();
      showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });

  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  putneighss() {
    let body = {
      ci: this.form.value.ci,
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      email: this.form.value.email,
      lat: this.formUbi.value.lat,
      lng: this.formUbi.value.lng,
      password: this.form.value.password,
      neighbourhood: this.form.value.neighbourhood,
      company: this.form.value.company,
      access: this.form.value.access,
      physicalBtn: this.formBtns.value.physicalBtn,
      physicalBtnTwo: this.formBtns.value.physicalBtnTwo,
      physicalBtnThree: this.formBtns.value.physicalBtnThree,
      physicalBtnFour: this.formBtns.value.physicalBtnFour,
      physicalBtnWifi: this.formBtns.value.physicalBtnWifi,
    }
    this.api.putNeighbour(body, this.neighs._id).subscribe(resp => {
      finishLoading();
      showAlert('success', 'Correcto', 'Vecino actualizado correctamente', 'btn btn-fill btn-info').then((result: any) => {
        this.close();
      });
    }, (err) => {
      finishLoading();
      (err.error.error.message.message === "Validation failed: email: El campo email ya está en uso")
        ?
        showAlert('error', 'Error', 'El correo electrónico proporcionado ya está registrado en el sistema. Por favor, ingresa un correo electrónico diferente', 'btn btn-info')
        :
        showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });

  }


  get errorsForm() { return this.form.controls; }
  get errorsBtnForm() { return this.formBtns.controls; }


  validarNumeros(event) {
    if ((event.keyCode < 48) || (event.keyCode > 57)) event.returnValue = false;
  }
  
  close() {
    this.dialogRef.close();
  }
}
