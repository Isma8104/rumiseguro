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
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.scss']
})
export class AddTeamsComponent implements OnInit {
  title = "";
  form: FormGroup;
  team;

  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(1));
  files: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTeamsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public api: ApiService,
    public events: Event
  ) {
    dialogRef.disableClose = true;
    this.title = data.title;
    this.team = data.team;
  }

  ngOnInit(): void {
    this.createForm();
    if (this.title === 'Editar') {
      // this.convertFileExist(this.team.image);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: [(this.title === 'Agregar') ? '' : this.team.name, [Validators.required]],
      licenseStart: [(this.title === 'Agregar') ? '' : new Date(Date.parse(this.team.licenseStart)).toISOString().substring(0, 10), [Validators.required]],
      licenseEnd: [(this.title === 'Agregar') ? '' : new Date(Date.parse(this.team.licenseEnd)).toISOString().substring(0, 10), [Validators.required]],
      maxPlants: [(this.title === 'Agregar') ? '' : this.team.maxPlants, [Validators.required]],
      maxButtons: [(this.title === 'Agregar') ? '' : this.team.maxButtons, [Validators.required]],
      maxUsers: [(this.title === 'Agregar') ? '' : this.team.maxUsers, [Validators.required]],
      radius: [(this.title === 'Agregar') ? '' : this.team.radius, [Validators.required]],
      company: [(this.title === 'Agregar') ? '' : this.team.company, [Validators.required]],
      image: [(this.title === 'Agregar') ? '' : this.team.image],
      imgName: [(this.title === 'Agregar') ? '' : 'tiene valor', Validators.required]
    });
  }

  onSelect(event) {
    this.files[0] = (event.addedFiles);
    this.filesControl = new FormControl(this.files[0], FileUploadValidators.filesLimit(1));
    this.form.get('image').setValue(this.filesControl);
    this.form.get('imgName').setValue('tiene valor');
    // this.form = this.fb.group({
    //   name: [this.form.value.name, [Validators.required]],
    //   licenseStart: [this.form.value.licenseStart, [Validators.required]],
    //   licenseEnd: [this.form.value.licenseEnd, [Validators.required]],
    //   maxPlants: [this.form.value.maxPlants, [Validators.required]],
    //   maxButtons: [this.form.value.maxButtons, [Validators.required]],
    //   maxUsers: [this.form.value.maxUsers, [Validators.required]],
    //   image: [this.filesControl],
    //   imgName: ['tiene valor', Validators.required]
    // });
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    this.filesControl = new FormControl('', FileUploadValidators.filesLimit(1));
    this.form.get('image').setValue(this.filesControl);
    this.form.get('imgName').setValue('');
    // this.form = this.fb.group({
    //   name: [this.form.value.name, [Validators.required]],
    //   licenseStart: [this.form.value.licenseStart, [Validators.required]],
    //   licenseEnd: [this.form.value.licenseEnd, [Validators.required]],
    //   maxPlants: [this.form.value.maxPlants, [Validators.required]],
    //   maxButtons: [this.form.value.maxButtons, [Validators.required]],
    //   maxUsers: [this.form.value.maxUsers, [Validators.required]],
    //   image: [this.filesControl],
    //   imgName: ['', Validators.required]
    // });
  }

  configTeams() {
    if (this.title === 'Editar') {
      this.putTeams();
    } else {
      this.postTeams();
    }
  }

  async postTeams() {
    if ((this.form.value.image && this.form.value.image.value) && this.form.value.image.value[0]) {
      const imageBase = await this.convertFile(this.form.value.image.value[0]);
      this.form.get('image').setValue(imageBase);
    }
    this.api.postTeams(this.form.value).subscribe({
      next: (res) => {
        showAlert('success', 'Correcto', 'Team creado correctamente', 'btn btn-fill btn-info').then((result: any) => {
          this.close();
        });
      },
      error: (err) => {
        if (err.error.message.message.includes('name is already in use')) {
          showAlert('error', 'Error', 'El nombre proporcionado ya está registrado en el sistema. Por favor, ingresa un nombre diferente.', 'btn btn-info');
        } else {
          showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
        }
      }
    });
  }

  async putTeams() {

    if ((this.form.value.image && this.form.value.image.value) && this.form.value.image.value[0]) {
      const imageBase = await this.convertFile(this.form.value.image.value[0]);
      this.form.get('image').setValue(imageBase);
    }
    this.api.putTeams(this.form.value, this.team._id).subscribe({
      next: (res) => {
        showAlert('success', 'Correcto', 'Team actualizado correctamente', 'btn btn-fill btn-info').then((result: any) => {
          this.close();
        });
      },
      error: (err) => {
        if (err.error.message.message.includes('name is already in use')) {
          showAlert('error', 'Error', 'El nombre proporcionado ya está registrado en el sistema. Por favor, ingresa un nombre diferente.', 'btn btn-info');
        } else {
          showAlert('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
        }
      }
    });
  }
  convertFile(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = btoa(reader.result as string);
        resolve(base64String);
      };

      reader.onerror = () => {
        reject('Error al leer el archivo.');
      };

      // Verifica que el archivo sea una imagen antes de leerlo
      if (file.type.match(/image.*/)) {
        reader.readAsBinaryString(file);
      } else {
        reject('El archivo seleccionado no es una imagen.');
      }
    });
  }

  convertFileExist(imageUrl) {
    let base64data: string;
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          base64data = String(reader.result);
          this.sendFileToOnSelect(base64data);
        };
      })
      .catch(error => {
        // showAlert('error', 'Error', 'Algo ha salido mal al cargar la imagen, intente más tarde!', 'btn btn-info');

        // console.error('Error al obtener la imagen:', error);
      });
  }

  sendFileToOnSelect(base64data) {
    const byteCharacters = atob(base64data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const fileBlob = new Blob([byteArray], { type: 'image/jpeg' });

    // Crear un objeto File a partir del Blob
    const file = new File([fileBlob], 'nombre_archivo.jpg', { type: 'image/jpeg' });

    let event = {
      addedFiles: [file]
    }
    this.onSelect(event);
  }

  get errorsForm() { return this.form.controls; }

  close() {
    this.dialogRef.close();
  }
}
