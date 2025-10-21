"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_teams_teams_module_ts"],{

/***/ 85446:
/*!**************************************************************!*\
  !*** ./src/app/pages/teams/add-teams/add-teams.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTeamsComponent": function() { return /* binding */ AddTeamsComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_teams_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-teams.component.html */ 77256);
/* harmony import */ var _add_teams_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-teams.component.scss */ 15715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iplab/ngx-file-upload */ 8278);











let AddTeamsComponent = class AddTeamsComponent {
  constructor(dialogRef, dialog, data, fb, api, events) {
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.data = data;
    this.fb = fb;
    this.api = api;
    this.events = events;
    this.title = "";
    this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
    this.files = [];
    dialogRef.disableClose = true;
    this.title = data.title;
    this.team = data.team;
  }

  ngOnInit() {
    this.createForm();

    if (this.title === 'Editar') {// this.convertFileExist(this.team.image);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: [this.title === 'Agregar' ? '' : this.team.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      licenseStart: [this.title === 'Agregar' ? '' : new Date(Date.parse(this.team.licenseStart)).toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      licenseEnd: [this.title === 'Agregar' ? '' : new Date(Date.parse(this.team.licenseEnd)).toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      maxPlants: [this.title === 'Agregar' ? '' : this.team.maxPlants, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      maxButtons: [this.title === 'Agregar' ? '' : this.team.maxButtons, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      maxUsers: [this.title === 'Agregar' ? '' : this.team.maxUsers, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      radius: [this.title === 'Agregar' ? '' : this.team.radius, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      company: [this.title === 'Agregar' ? '' : this.team.company, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      image: [this.title === 'Agregar' ? '' : this.team.image],
      imgName: [this.title === 'Agregar' ? '' : 'tiene valor', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }

  onSelect(event) {
    this.files[0] = event.addedFiles;
    this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.files[0], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
    this.form.get('image').setValue(this.filesControl);
    this.form.get('imgName').setValue('tiene valor'); // this.form = this.fb.group({
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
    this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
    this.form.get('image').setValue(this.filesControl);
    this.form.get('imgName').setValue(''); // this.form = this.fb.group({
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

  postTeams() {
    var _this = this;

    return (0,C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.form.value.image && _this.form.value.image.value && _this.form.value.image.value[0]) {
        const imageBase = yield _this.convertFile(_this.form.value.image.value[0]);

        _this.form.get('image').setValue(imageBase);
      }

      _this.api.postTeams(_this.form.value).subscribe({
        next: res => {
          (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Team creado correctamente', 'btn btn-fill btn-info').then(result => {
            _this.close();
          });
        },
        error: err => {
          if (err.error.message.message.includes('name is already in use')) {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'El nombre proporcionado ya está registrado en el sistema. Por favor, ingresa un nombre diferente.', 'btn btn-info');
          } else {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
          }
        }
      });
    })();
  }

  putTeams() {
    var _this2 = this;

    return (0,C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this2.form.value.image && _this2.form.value.image.value && _this2.form.value.image.value[0]) {
        const imageBase = yield _this2.convertFile(_this2.form.value.image.value[0]);

        _this2.form.get('image').setValue(imageBase);
      }

      _this2.api.putTeams(_this2.form.value, _this2.team._id).subscribe({
        next: res => {
          (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Team actualizado correctamente', 'btn btn-fill btn-info').then(result => {
            _this2.close();
          });
        },
        error: err => {
          if (err.error.message.message.includes('name is already in use')) {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'El nombre proporcionado ya está registrado en el sistema. Por favor, ingresa un nombre diferente.', 'btn btn-info');
          } else {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, por favor inténtalo de nuevo más tarde.', 'btn btn-info');
          }
        }
      });
    })();
  }

  convertFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = btoa(reader.result);
        resolve(base64String);
      };

      reader.onerror = () => {
        reject('Error al leer el archivo.');
      }; // Verifica que el archivo sea una imagen antes de leerlo


      if (file.type.match(/image.*/)) {
        reader.readAsBinaryString(file);
      } else {
        reject('El archivo seleccionado no es una imagen.');
      }
    });
  }

  convertFileExist(imageUrl) {
    let base64data;
    fetch(imageUrl).then(response => response.blob()).then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onloadend = () => {
        base64data = String(reader.result);
        this.sendFileToOnSelect(base64data);
      };
    }).catch(error => {// showAlert('error', 'Error', 'Algo ha salido mal al cargar la imagen, intente más tarde!', 'btn btn-info');
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
    const fileBlob = new Blob([byteArray], {
      type: 'image/jpeg'
    }); // Crear un objeto File a partir del Blob

    const file = new File([fileBlob], 'nombre_archivo.jpg', {
      type: 'image/jpeg'
    });
    let event = {
      addedFiles: [file]
    };
    this.onSelect(event);
  }

  get errorsForm() {
    return this.form.controls;
  }

  close() {
    this.dialogRef.close();
  }

};

AddTeamsComponent.ctorParameters = () => [{
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
    args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA]
  }]
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event
}];

AddTeamsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-add-teams',
  template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_teams_component_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_add_teams_component_scss__WEBPACK_IMPORTED_MODULE_2__]
})], AddTeamsComponent);


/***/ }),

/***/ 73356:
/*!************************************************!*\
  !*** ./src/app/pages/teams/teams.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsComponent": function() { return /* binding */ TeamsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_teams_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./teams.component.html */ 90065);
/* harmony import */ var _teams_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams.component.scss */ 13198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_teams_add_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-teams/add-teams.component */ 85446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);









;

let TeamsComponent = class TeamsComponent {
    constructor(dialog, fb, api, router) {
        this.dialog = dialog;
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.teams = [];
        this.pagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
        this.wordToSearch = '';
        this.count = 0;
        this.role = '';
    }
    ngOnInit() {
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
            next: (resp) => {
                this.teams = resp.body.teams;
                this.pagination = resp.body.pagination;
                this.count = resp.body.pagination.total;
            },
            error: (err) => {
                (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            }
        });
    }
    openModal(opt, team) {
        const modal = this.dialog.open(_add_teams_add_teams_component__WEBPACK_IMPORTED_MODULE_3__.AddTeamsComponent, {
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
    showPlants(team) {
        let data = {
            id: team._id,
            name: team.name
        };
        let parameter = btoa(JSON.stringify(data));
        this.router.navigate(['neighborhoods/' + parameter]);
    }
    showUsers(team) {
        let data = {
            id: team._id,
            name: team.name
        };
        let parameter = btoa(JSON.stringify(data));
        this.router.navigate(['operator-team/' + parameter]);
    }
    changePage(eventPage) {
        this.pagination.page = eventPage.pageIndex + 1;
        this.getTeams();
    }
};
TeamsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
TeamsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-teams',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_teams_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_teams_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamsComponent);



/***/ }),

/***/ 38573:
/*!*********************************************!*\
  !*** ./src/app/pages/teams/teams.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsModule": function() { return /* binding */ TeamsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _teams_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams.component */ 73356);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 87762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _teams_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams.routes */ 82560);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material/material.module */ 95123);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var _add_teams_add_teams_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-teams/add-teams.component */ 85446);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ 54276);












let TeamsModule = class TeamsModule {
};
TeamsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _teams_component__WEBPACK_IMPORTED_MODULE_0__.TeamsComponent,
            _add_teams_add_teams_component__WEBPACK_IMPORTED_MODULE_5__.AddTeamsComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_teams_routes__WEBPACK_IMPORTED_MODULE_2__.HomeRoutes),
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__.NgxDropzoneModule
        ],
        providers: [
            typescript_events__WEBPACK_IMPORTED_MODULE_4__.Event
        ]
    })
], TeamsModule);



/***/ }),

/***/ 82560:
/*!*********************************************!*\
  !*** ./src/app/pages/teams/teams.routes.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutes": function() { return /* binding */ HomeRoutes; }
/* harmony export */ });
/* harmony import */ var _teams_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams.component */ 73356);

const HomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _teams_component__WEBPACK_IMPORTED_MODULE_0__.TeamsComponent
            }]
    }
];


/***/ }),

/***/ 77256:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/teams/add-teams/add-teams.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">{{title}} Team</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <div class=\"custom-dropzone-p\" ngx-dropzone [accept]=\"'image/*'\" (change)=\"onSelect($event)\">\r\n                            <ngx-dropzone-label>\r\n                                <div>\r\n                                    <img src=\"assets/img/icons/upload.png\" width=\"64px\" height=\"64px\"\r\n                                        alt=\"Imagen del team\">\r\n                                    <h6 style=\"color: #000;\">Subir imagen del team</h6>\r\n                                </div>\r\n                            </ngx-dropzone-label>\r\n                            <ngx-dropzone-image-preview class=\"center\" id=\"preview\" ngProjectAs=\"ngx-dropzone-preview\"\r\n                                *ngFor=\"let f of files\" [file]=\"f[0]\" [removable]=\"true\" (removed)=\"onRemove(f[0])\">\r\n                            </ngx-dropzone-image-preview>\r\n                        </div>\r\n                        <input type=\"hidden\" required formControlName=\"imgName\" id=\"imgName\" name=\"imgName\">\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-4 col-md-4\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Nombre</mat-label>\r\n                        <input matInput name=\"name\" formControlName=\"name\"\r\n                            oninput=\"javascript:this.value=this.value.toUpperCase();\">\r\n                        <mat-error *ngIf=\"(errorsForm.name.touched) && errorsForm.name.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-4 col-md-4\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Inicio Licencia</mat-label>\r\n                        <input type=\"date\" matInput name=\"licenseStart\" formControlName=\"licenseStart\">\r\n                        <mat-error\r\n                            *ngIf=\"(errorsForm.licenseStart.touched) && errorsForm.licenseStart.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-4 col-md-4\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Fin Licencia</mat-label>\r\n                        <input type=\"date\" matInput name=\"licenseEnd\" formControlName=\"licenseEnd\">\r\n                        <mat-error *ngIf=\"(errorsForm.licenseEnd.touched) && errorsForm.licenseEnd.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <br>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-2 col-md-2\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Máximo centrales</mat-label>\r\n                        <input type=\"number\" matInput name=\"maxPlants\" formControlName=\"maxPlants\">\r\n                        <mat-error *ngIf=\"(errorsForm.maxPlants.touched) && errorsForm.maxPlants.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-2 col-md-2\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Máximo botones</mat-label>\r\n                        <input type=\"number\" matInput name=\"maxButtons\" formControlName=\"maxButtons\">\r\n                        <mat-error *ngIf=\"(errorsForm.maxButtons.touched) && errorsForm.maxButtons.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-2 col-md-2\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Máximo usuarios</mat-label>\r\n                        <input type=\"number\" matInput name=\"maxUsers\" formControlName=\"maxUsers\">\r\n                        <mat-error *ngIf=\"(errorsForm.maxUsers.touched) && errorsForm.maxUsers.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-2 col-md-2\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Radio cobertura (m)</mat-label>\r\n                        <input type=\"number\" matInput name=\"radius\" formControlName=\"radius\">\r\n                        <mat-error *ngIf=\"(errorsForm.radius.touched) && errorsForm.radius.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-4 col-md-4\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Compania</mat-label>\r\n                        <mat-select name=\"company\" formControlName=\"company\">\r\n                            <mat-option value=\"\"> Seleccionar </mat-option>\r\n                            <mat-option value=\"ABIC\"> ABIC </mat-option>\r\n                            <mat-option value=\"SHADOW\"> SHADOW </mat-option>\r\n                          </mat-select>\r\n                        <mat-error *ngIf=\"(errorsForm.company.touched) && errorsForm.company.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"configTeams()\" [disabled]=\"!form.valid\" type=\"button\">\r\n        Guardar\r\n    </button>\r\n</div>");

/***/ }),

/***/ 90065:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/teams/teams.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Teams: {{ count }}</h4>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                    style=\"border: 2px #000000;\">\r\n                                    <mat-label>Buscar por nombre</mat-label>\r\n                                    <input matInput name=\"value\" (keyup)=\"getTeams()\" formControlName=\"value\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <br>\r\n                    <div class=\"content table-responsive table-full-width\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Nombre</th>\r\n                                    <th class=\"text-right\">Acciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"count > 0\">\r\n                                <tr *ngFor=\"let team of teams; let i=index;\">\r\n                                    <td class=\"td-size\">{{team.name}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <a (click)=\"showPlants(team)\" rel=\"tooltip\" title=\"Ver Centrales\"\r\n                                            class=\"btn btn-primary btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-eye\"></i>\r\n                                        </a>\r\n                                        <a *ngIf=\"role === ('SUPER-ADMIN' || 'ADMINISTRATOR')\"\r\n                                            (click)=\"openModal('Editar', team)\" rel=\"tooltip\" title=\"Editar\"\r\n                                            class=\"btn btn-warning btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </a>\r\n                                        <a *ngIf=\"role === ('SUPER-ADMIN' || 'ADMINISTRATOR')\" (click)=\"showUsers(team)\"\r\n                                            rel=\"tooltip\" title=\"Ver Operadores\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-users\"></i>\r\n                                        </a>\r\n                                        <!-- <a (click)=\"questionYN(i)\" rel=\"tooltip\" title=\"Eliminar\" data-toggle=\"modal\" data-target=\"#delete\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </a> -->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p class=\"msg-empty\" *ngIf=\"count === 0\">No existen registros</p>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"count !==0\" class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col d-flex justify-content-end\">\r\n                                <mat-paginator #paginator showFirstLastButtons [length]=\"pagination?.total\"\r\n                                    [pageSize]=\"pagination?.itemsPage\" (page)=\"changePage($event)\">\r\n                                </mat-paginator>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<caption>\r\n    <button *ngIf=\"role === ('SUPER-ADMIN' || 'ADMINISTRATOR')\" (click)=\"openModal('Agregar')\" id=\"addBtn\"\r\n        class=\"btn btn-icon btn-round btn-twitter\">\r\n        <img src=\"assets/img/icons/mas.png\">\r\n    </button>\r\n</caption>");

/***/ }),

/***/ 15715:
/*!****************************************************************!*\
  !*** ./src/app/pages/teams/add-teams/add-teams.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = ".general {\n  position: relative;\n  margin: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.picture {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10ZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQTFFSjs7QUE2RUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUExRUoiLCJmaWxlIjoiYWRkLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy9JbWFnZXNcclxuXHJcbi8vIC5jdXN0b20tZHJvcHpvbmUge1xyXG4vLyAgICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyAgICAgd2lkdGg6IGF1dG87XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiAjY2VkNGRhO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgICAgYm9yZGVyOiA1cHggZGFzaGVkICNmZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggI2NlZDRkYTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBuZ3gtZHJvcHpvbmUsXHJcbi8vIC5jdXN0b20tZHJvcHpvbmUge1xyXG4vLyAgICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5jdXN0b20tZHJvcHpvbmUge1xyXG4vLyAgICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogI2NlZDRkYTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBjb2xvcjogIzAwMDtcclxuLy8gICAgIGJvcmRlcjogNXB4IGRhc2hlZCAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMXB4ICNjZWQ0ZGE7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1kcm9wem9uZS1wIHtcclxuLy8gICAgIGhlaWdodDogMTUwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgY29sb3I6ICMwMDA7XHJcbi8vICAgICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDFweCAjY2VkNGRhO1xyXG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuY3VzdG9tLWRyb3B6b25lLXAubmd4LWR6LWhvdmVyZWQge1xyXG4vLyAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIzNSwgNzksIDc5KTtcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1kcm9wem9uZS5uZ3gtZHotaG92ZXJlZCB7XHJcbi8vICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbi8vIH1cclxuXHJcbi8vICNwcmV2aWV3IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLmNlbnRlciB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLmdlbmVyYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnBpY3R1cmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 13198:
/*!**************************************************!*\
  !*** ./src/app/pages/teams/teams.component.scss ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_teams_teams_module_ts-es2020.js.map