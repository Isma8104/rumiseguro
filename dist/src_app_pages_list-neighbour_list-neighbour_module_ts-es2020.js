"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_list-neighbour_list-neighbour_module_ts"],{

/***/ 92431:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/list-neighbour/add-neighbour/add-neighbour.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNeighboursComponent": function() { return /* binding */ AddNeighboursComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_neighbour_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-neighbour.component.html */ 11971);
/* harmony import */ var _add_neighbour_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-neighbour.component.scss */ 33078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/loading/loader */ 81534);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iplab/ngx-file-upload */ 8278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13413);












let AddNeighboursComponent = class AddNeighboursComponent {
    constructor(dialogRef, dialog, data, fb, api, events) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.api = api;
        this.events = events;
        this.title = "";
        this.isButton = false;
        this.idNeighbourhood = "";
        this.access = "";
        this.showPassword = false;
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
        this.files = [];
        this.company = "";
        this.latE = null;
        this.lngE = null;
        this.heightE = '50%';
        dialogRef.disableClose = true;
        this.title = data.title;
        this.neighs = data.neigh;
        this.idNeighbourhood = data.idNeighbour;
        this.access = data.identifier;
        this.company = (data.team.name === 'SHADOW' ? 'SHADOW' : 'ABIC');
        this.selectedBtn(this.neighs?.physicalBtn ? true : false);
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.latE = (this.title === 'Agregar') ? '-2.8974172' : this.neighs?.lat;
        this.lngE = (this.title === 'Agregar') ? '-79.0070696' : this.neighs?.lng;
        this.form = this.fb.group({
            ci: [(this.title === 'Agregar') ? '' : this.neighs?.ci, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            name: [(this.title === 'Agregar') ? '' : this.neighs?.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: [(this.title === 'Agregar') ? '' : this.neighs?.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            address: [(this.title === 'Agregar') ? '' : this.neighs?.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [(this.title === 'Agregar') ? '' : this.neighs?.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            password: [(this.title === 'Agregar') ? '' : this.neighs?.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            img: [(this.title === 'Agregar') ? '' : this.neighs?.img],
            imgName: [(this.title === 'Agregar') ? '' : 'tiene valor'],
            neighbourhood: [this.idNeighbourhood],
            company: [this.company],
            access: [this.access],
            isButton: [(this.title === 'Agregar') ? false : true]
        });
        this.formUbi = this.fb.group({
            lat: [(this.title === 'Agregar') ? '' : this.neighs?.lat, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            lng: [(this.title === 'Agregar') ? '' : this.neighs?.lng, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
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
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.files[0], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
        this.form = this.fb.group({
            ci: [this.form.value.ci, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            name: [this.form.value.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: [this.form.value.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            address: [this.form.value.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [this.form.value.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            password: [this.form.value.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            img: [this.filesControl],
            imgName: ['tiene valor'],
            neighbourhood: [this.idNeighbourhood]
        });
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadValidators.filesLimit(1));
        this.form = this.fb.group({
            ci: [this.form.value.ci, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            name: [this.form.value.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: [this.form.value.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            address: [this.form.value.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [this.form.value.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            password: [this.form.value.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            img: [this.filesControl],
            imgName: [''],
            neighbourhood: [this.idNeighbourhood]
        });
    }
    setLatLng(coors) {
        this.formUbi.patchValue({ lat: coors.lat });
        this.formUbi.patchValue({ lng: coors.lng });
    }
    configNeighs() {
        if (this.title === 'Editar') {
            this.putneighss();
        }
        else {
            this.postNeighbour();
        }
    }
    selectedBtn(value) {
        this.isButton = value;
        this.formBtns = this.fb.group({
            physicalBtn: [(this.title === 'Agregar') ? '' : this.neighs.physicalBtn, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
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
        (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.startLoading)();
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
        };
        this.api.postNeighbour(data).subscribe(resp => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            switch (resp?.status) {
                case 200:
                    (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Vecino creado correctamente', 'btn btn-fill btn-info').then((result) => {
                        this.close();
                    });
                    break;
                default:
                    (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', resp.body.message, 'btn btn-fill btn-info');
                    break;
            }
        }, (err) => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    convertFile(file) {
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
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
        };
        this.api.putNeighbour(body, this.neighs._id).subscribe(resp => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Vecino actualizado correctamente', 'btn btn-fill btn-info').then((result) => {
                this.close();
            });
        }, (err) => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (err.error.error.message.message === "Validation failed: email: El campo email ya está en uso")
                ?
                    (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'El correo electrónico proporcionado ya está registrado en el sistema. Por favor, ingresa un correo electrónico diferente', 'btn btn-info')
                :
                    (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    get errorsForm() { return this.form.controls; }
    get errorsBtnForm() { return this.formBtns.controls; }
    validarNumeros(event) {
        if ((event.keyCode < 48) || (event.keyCode > 57))
            event.returnValue = false;
    }
    close() {
        this.dialogRef.close();
    }
};
AddNeighboursComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event }
];
AddNeighboursComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-neighborhoods',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_neighbour_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_neighbour_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddNeighboursComponent);



/***/ }),

/***/ 43875:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/list-neighbour/excel-import/excel-import.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelImportComponent": function() { return /* binding */ ExcelImportComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_excel_import_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./excel-import.component.html */ 15327);
/* harmony import */ var _excel_import_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excel-import.component.scss */ 57459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/loading/loader */ 81534);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);










let ExcelImportComponent = class ExcelImportComponent {
    constructor(dialogRef, dialog, data, fb, api, events) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.api = api;
        this.events = events;
        this.idNeigh = "";
        this.lists = [];
        this.access = "";
        this.responsesError = [];
        this.idNeigh = data.idNeigh;
        this.access = data.access;
        this.company = (data.team.name === 'SHADOW' ? 'SHADOW' : 'ABIC');
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            this.api.readExcelFile(file).then((jsonData) => {
                let jsonDecoded = [];
                this.lists = [];
                for (let i = 1; i < jsonData.length; i++) {
                    let data = {
                        ci: jsonData[i][0],
                        name: jsonData[i][1],
                        phone: jsonData[i][2],
                        address: jsonData[i][3],
                        email: jsonData[i][4],
                        password: jsonData[i][5],
                        lat: jsonData[i][6],
                        lng: jsonData[i][7],
                        company: this.company,
                        neighbourhood: this.idNeigh,
                        access: this.access
                    };
                    if (data.ci === undefined ||
                        data.name === undefined ||
                        data.phone === undefined ||
                        data.address === undefined ||
                        data.email === undefined ||
                        data.password === undefined ||
                        data.lat === undefined ||
                        data.lng === undefined) {
                        throw new Error('Uno o más campos son undefined.');
                    }
                    jsonDecoded.push(data);
                }
                this.lists = jsonDecoded;
            }).catch((error) => {
                console.error('Error al leer el archivo Excel:', error);
            });
        }
    }
    postNeighbours() {
        (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.startLoading)();
        this.api.postNeighbourImport(this.lists).subscribe(resp => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Success', 'Vecinos creados con éxito', 'btn btn-info');
            let errors = resp.body['results'].errors;
            if (errors.length > 0) {
                this.responsesError = errors;
            }
        }, (err) => {
            console.error(err);
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    get errorsForm() { return this.form.controls; }
    close() {
        this.dialogRef.close();
    }
};
ExcelImportComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event }
];
ExcelImportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-excel-import',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_excel_import_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_excel_import_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExcelImportComponent);



/***/ }),

/***/ 80474:
/*!******************************************************************!*\
  !*** ./src/app/pages/list-neighbour/list-neighbour.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListNeighbourComponent": function() { return /* binding */ ListNeighbourComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_neighbour_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-neighbour.component.html */ 76330);
/* harmony import */ var _list_neighbour_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-neighbour.component.scss */ 65993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _add_neighbour_add_neighbour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-neighbour/add-neighbour.component */ 92431);
/* harmony import */ var _excel_import_excel_import_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./excel-import/excel-import.component */ 43875);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var _red_red_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./red/red.component */ 4536);












let ListNeighbourComponent = class ListNeighbourComponent {
    constructor(api, route, fb, dialog, router) {
        this.api = api;
        this.route = route;
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.neighbour = [];
        this.pagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
        this.wordToSearch = "";
        this.count = 0;
        this.role = '';
        let parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
        this.neighborhoods = parameters;
    }
    ngOnInit() {
        this.role = localStorage.getItem('role');
        this.createForm();
        this.getNeighbour();
    }
    createForm() {
        this.searchForm = this.fb.group({
            value: ['']
        });
    }
    getNeighbour() {
        this.wordToSearch = this.searchForm.value.value;
        this.api.getUserByNeighborhood(this.neighborhoods.id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
            this.neighbour = resp.body['users'];
            this.count = resp.body['pagination']['total'];
            this.pagination = resp.body['pagination'];
        }, (err) => {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_5__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    openExcelImport() {
        const modal = this.dialog.open(_excel_import_excel_import_component__WEBPACK_IMPORTED_MODULE_4__.ExcelImportComponent, {
            width: '600px',
            data: {
                idNeigh: this.neighborhoods.id,
                team: this.neighborhoods.team,
                access: this.neighborhoods.identifier
            }
        });
        modal.afterClosed().subscribe(result => {
            this.getNeighbour();
        });
    }
    openModal(opt, neigh) {
        const modal = this.dialog.open(_add_neighbour_add_neighbour_component__WEBPACK_IMPORTED_MODULE_3__.AddNeighboursComponent, {
            width: '600px',
            data: {
                title: opt,
                neigh,
                team: this.neighborhoods.team,
                idNeighbour: this.neighborhoods.id,
                identifier: this.neighborhoods.identifier
            }
        });
        modal.afterClosed().subscribe(result => {
            this.getNeighbour();
        });
    }
    openRedSettings(opt, user) {
        this.dialog.open(_red_red_component__WEBPACK_IMPORTED_MODULE_6__.RedComponent, {
            width: '400px',
            data: {
                opt,
                identifier: (opt === 'CENTRAL') ? this.neighborhoods.identifier : user
            }
        });
    }
    changePage(eventPage) {
        this.pagination.page = eventPage.pageIndex + 1;
        this.getNeighbour();
    }
};
ListNeighbourComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ListNeighbourComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-list-neighbour',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_neighbour_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_neighbour_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListNeighbourComponent);



/***/ }),

/***/ 9509:
/*!***************************************************************!*\
  !*** ./src/app/pages/list-neighbour/list-neighbour.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListNeighbourModule": function() { return /* binding */ ListNeighbourModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _list_neighbour_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-neighbour.routes */ 70352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 87762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material/material.module */ 95123);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var _list_neighbour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-neighbour.component */ 80474);
/* harmony import */ var _add_neighbour_add_neighbour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-neighbour/add-neighbour.component */ 92431);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ 54276);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _excel_import_excel_import_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./excel-import/excel-import.component */ 43875);
/* harmony import */ var _red_red_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./red/red.component */ 4536);















let ListNeighbourModule = class ListNeighbourModule {
};
ListNeighbourModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _list_neighbour_component__WEBPACK_IMPORTED_MODULE_4__.ListNeighbourComponent,
            _add_neighbour_add_neighbour_component__WEBPACK_IMPORTED_MODULE_5__.AddNeighboursComponent,
            _excel_import_excel_import_component__WEBPACK_IMPORTED_MODULE_7__.ExcelImportComponent,
            _red_red_component__WEBPACK_IMPORTED_MODULE_8__.RedComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_list_neighbour_routes__WEBPACK_IMPORTED_MODULE_0__.ListNeighbourRoutes),
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzoneModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule
        ],
        providers: [
            typescript_events__WEBPACK_IMPORTED_MODULE_3__.Event
        ]
    })
], ListNeighbourModule);



/***/ }),

/***/ 70352:
/*!***************************************************************!*\
  !*** ./src/app/pages/list-neighbour/list-neighbour.routes.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListNeighbourRoutes": function() { return /* binding */ ListNeighbourRoutes; }
/* harmony export */ });
/* harmony import */ var _list_neighbour_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-neighbour.component */ 80474);

const ListNeighbourRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _list_neighbour_component__WEBPACK_IMPORTED_MODULE_0__.ListNeighbourComponent
            }]
    }
];


/***/ }),

/***/ 4536:
/*!***********************************************************!*\
  !*** ./src/app/pages/list-neighbour/red/red.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedComponent": function() { return /* binding */ RedComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_red_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./red.component.html */ 50971);
/* harmony import */ var _red_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red.component.scss */ 5346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);







let RedComponent = class RedComponent {
    constructor(fb, dialogRef, dialog, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.title = "";
        this.showPassword = false;
        dialogRef.disableClose = true;
        this.identifier = data.identifier;
        this.title = data.opt;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            identifier: [this.identifier, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    engancharRed() {
        let dataForm = this.form.value;
        let idBarrio = dataForm.identifier; // Suponiendo que this.data contiene el id del barrio
        let ssId = dataForm.name; // Suponiendo que this.dataForm contiene un FormGroup con el campo 'name' para el ssid de la red
        let password = dataForm.password; // Suponiendo que this.dataForm contiene un FormGroup con el campo 'password' para la contraseña
        let url = `http://192.168.4.1/set?a=${idBarrio}&b=${ssId}&c=${password}`;
        // Crear un elemento de texto temporal para copiar al portapapeles
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        // Seleccionar el texto dentro del elemento
        el.select();
        // Copiar el texto seleccionado al portapapeles
        document.execCommand('copy');
        // Eliminar el elemento temporal
        document.body.removeChild(el);
        // Abrir la URL en una nueva ventana
        window.open(url, '_blank');
        (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_2__.showAlert)('success', 'Correcto', 'Red enganchada correctamente', 'btn btn-info');
        this.close();
    }
    get errorsForm() { return this.form.controls; }
    close() {
        this.dialogRef.close();
    }
};
RedComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA,] }] }
];
RedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-red',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_red_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_red_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedComponent);



/***/ }),

/***/ 11971:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-neighbour/add-neighbour/add-neighbour.component.html ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">{{title}} Vecino</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <mat-horizontal-stepper #stepper class=\"rounded\">\r\n        <mat-step label=\"Datos personales\" state=\"category\" [stepControl]=\"form\">\r\n            <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <!-- <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                                <div class=\"custom-dropzone-p\" ngx-dropzone [accept]=\"'image/*'\"\r\n                                    (change)=\"onSelect($event)\">\r\n                                    <ngx-dropzone-label>\r\n                                        <div>\r\n                                            <img src=\"assets/img/icons/upload.png\" width=\"64px\" height=\"64px\">\r\n                                            <h6 style=\"color: #000;\">Subir imagen</h6>\r\n                                        </div>\r\n                                    </ngx-dropzone-label>\r\n                                    <ngx-dropzone-image-preview class=\"center\" id=\"preview\"\r\n                                        ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f[0]\"\r\n                                        [removable]=\"true\" (removed)=\"onRemove(f[0])\">\r\n                                    </ngx-dropzone-image-preview>\r\n                                </div>\r\n                                <input type=\"hidden\" required formControlName=\"imgName\" id=\"imgName\" name=\"imgName\">\r\n                            </div>\r\n                        </div> -->\r\n                        <br>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Cédula</mat-label>\r\n                                <input matInput name=\"ci\" formControlName=\"ci\" (keypress)=\"validarNumeros($event)\">\r\n                                <mat-error *ngIf=\"(errorsForm.ci.touched) && errorsForm.ci.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Correo</mat-label>\r\n                                <input matInput name=\"email\" formControlName=\"email\">\r\n                                <mat-error *ngIf=\"(errorsForm.email.touched) && errorsForm.email.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Nombre</mat-label>\r\n                                <input matInput name=\"name\" formControlName=\"name\">\r\n                                <mat-error *ngIf=\"(errorsForm.name.touched) && errorsForm.name.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Contraseña</mat-label>\r\n                                <input matInput [type]=\"showPassword ? 'text' : 'password'\" name=\"password\"\r\n                                    formControlName=\"password\">\r\n                                <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"showPassword = !showPassword\">\r\n                                    {{showPassword?'visibility_off':'visibility'}}\r\n                                </mat-icon>\r\n                                <mat-error\r\n                                    *ngIf=\"(errorsForm.password.touched) && errorsForm.password.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Teléfono</mat-label>\r\n                                <input matInput name=\"phone\" formControlName=\"phone\" (keypress)=\"validarNumeros($event)\">\r\n                                <mat-error *ngIf=\"(errorsForm.phone.touched) && errorsForm.phone.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Agregar Botones</mat-label>\r\n                                <mat-select formControlName=\"isButton\" (selectionChange)=\"selectedBtn($event.value)\">\r\n                                    <mat-option [value]=\"false\">No</mat-option>\r\n                                    <mat-option [value]=\"true\">Si</mat-option>\r\n                                </mat-select>\r\n                                <mat-error\r\n                                    *ngIf=\"(errorsForm.isButton.touched) && errorsForm.isButton.errors?.required\">\r\n                                    Tipo es obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                style=\"border: 2px #000000;\">\r\n                                <mat-label>Dirección</mat-label>\r\n                                <input matInput name=\"address\" formControlName=\"address\">\r\n                                <mat-error *ngIf=\"(errorsForm.address.touched) && errorsForm.address.errors?.required\">\r\n                                    Campo obligatorio\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div mat-dialog-actions class=\"dialog-footer\">\r\n                <button id=\"btnPrevious\" mat-button matStepperPrevious class=\"left-button\">\r\n                    Anterior\r\n                </button>\r\n                <button id=\"btnNext\" mat-button matStepperNext #next class=\"right-button\">\r\n                    Siguiente\r\n                </button>\r\n            </div>\r\n        </mat-step>\r\n\r\n        <mat-step label=\"Ubicación\" state=\"category\" [stepControl]=\"formUbi\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [opt]=\"'click'\" [heightE]=\"heightE\"\r\n                        (coorsEmit)=\"setLatLng($event)\"></app-map-card>\r\n                </div>\r\n            </div>\r\n\r\n            <div mat-dialog-actions class=\"dialog-footer\">\r\n                <button id=\"btnPrevious\" mat-button matStepperPrevious class=\"left-button\">\r\n                    Anterior\r\n                </button>\r\n                <button id=\"btnNext\" *ngIf=\"isButton === true\" mat-button matStepperNext #next class=\"right-button\">\r\n                    Siguiente\r\n                </button>\r\n                <button id=\"btnNext\" (click)=\"configNeighs()\" *ngIf=\"isButton === false\" mat-button matStepperNext #next\r\n                    class=\"right-button\">\r\n                    Finalizar\r\n                </button>\r\n            </div>\r\n        </mat-step>\r\n\r\n        <mat-step label=\"Botones\" state=\"category\" [stepControl]=\"formBtns\" *ngIf=\"isButton === true\">\r\n            <form class=\"form-horizontal\" [formGroup]=\"formBtns\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Botón 1</mat-label>\r\n                        <input matInput name=\"physicalBtn\" formControlName=\"physicalBtn\">\r\n                        <mat-error\r\n                            *ngIf=\"(errorsBtnForm.physicalBtn.touched) && errorsBtnForm.physicalBtn.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Botón 4</mat-label>\r\n                        <input matInput name=\"physicalBtnFour\" formControlName=\"physicalBtnFour\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Botón 2</mat-label>\r\n                        <input matInput name=\"physicalBtnTwo\" formControlName=\"physicalBtnTwo\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Botón Wifi</mat-label>\r\n                        <input matInput name=\"physicalBtnWifi\" formControlName=\"physicalBtnWifi\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-6 col-md-6\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Botón 3</mat-label>\r\n                        <input matInput name=\"physicalBtnThree\" formControlName=\"physicalBtnThree\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </form>\r\n\r\n            <div mat-dialog-actions class=\"dialog-footer\">\r\n                <button id=\"btnPrevious\" mat-button matStepperPrevious class=\"left-button\">\r\n                    Anterior\r\n                </button>\r\n                <button id=\"btnNext\" (click)=\"configNeighs()\" mat-button matStepperNext #next class=\"right-button\">\r\n                    Finalizar\r\n                </button>\r\n            </div>\r\n        </mat-step>\r\n    </mat-horizontal-stepper>\r\n</mat-dialog-content>");

/***/ }),

/***/ 15327:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-neighbour/excel-import/excel-import.component.html ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">Importar Vecinos</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <input type=\"file\" formControlName=\"file\" (change)=\"onFileChange($event)\" />\r\n        </div>\r\n\r\n        <br>\r\n        <br>\r\n        <div *ngIf=\"responsesError.length > 0\">\r\n            <small *ngFor=\"let item of responsesError\">{{ item.email }} no creado <br></small>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postNeighbours()\" [disabled]=\"this.lists.length === 0\" type=\"button\">\r\n        Guardar \r\n    </button>\r\n</div>");

/***/ }),

/***/ 76330:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-neighbour/list-neighbour.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Vecinos ({{neighborhoods.name}}): {{ count }} <mat-icon title=\"Enganchar red\"\r\n                                style=\"float: right; margin-top: 2px; cursor: pointer;\"\r\n                                (click)=\"openRedSettings('CENTRAL')\">settings</mat-icon></h4>\r\n\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                    style=\"border: 2px #000000;\">\r\n                                    <mat-label>Buscar por identificación, nombre, correo o teléfono</mat-label>\r\n                                    <input matInput name=\"value\" (keyup)=\"getNeighbour()\" formControlName=\"value\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <br>\r\n                    <div class=\"content table-responsive table-full-width\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Cédula</th>\r\n                                    <th>Nombre</th>\r\n                                    <th>Correo</th>\r\n                                    <th>Teléfono</th>\r\n                                    <th class=\"text-right\">Acciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"neighbour.length > 0\">\r\n                                <tr *ngFor=\"let item of neighbour; let i=index;\">\r\n                                    <td class=\"td-size\">{{item.ci}}</td>\r\n                                    <td class=\"td-size\">{{item.name}}</td>\r\n                                    <td class=\"td-size\">{{item.email}}</td>\r\n                                    <td class=\"td-size\">{{item.phone}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <a (click)=\"openRedSettings('USUARIO', item._id)\" rel=\"tooltip\" title=\"Boton Wifi\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-wifi\"></i>\r\n                                        </a>\r\n                                        <a (click)=\"openModal('Editar', item)\" rel=\"tooltip\" title=\"Editar\"\r\n                                            class=\"btn btn-warning btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p class=\"msg-empty\" *ngIf=\"neighbour.length ===  0\">No existen registros</p>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"neighbour?.length !==0\" class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col d-flex justify-content-end\">\r\n                                <mat-paginator #paginator showFirstLastButtons [length]=\"pagination.total\"\r\n                                    [pageSize]=\"pagination.itemsPage\" (page)=\"changePage($event)\">\r\n                                </mat-paginator>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<caption>\r\n    <button (click)=\"openExcelImport()\" id=\"addExcel\" class=\"btn btn-icon btn-round btn-fill btn-success\">\r\n        <img src=\"assets/img/icons/excel.png\">\r\n    </button>\r\n</caption>\r\n\r\n<caption>\r\n    <button (click)=\"openModal('Agregar')\" id=\"addBtn\" class=\"btn btn-icon btn-round btn-twitter\">\r\n        <img src=\"assets/img/icons/mas.png\">\r\n    </button>\r\n</caption>");

/***/ }),

/***/ 50971:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-neighbour/red/red.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">Red {{ title }}</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>SSID</mat-label>\r\n                        <input matInput name=\"name\" formControlName=\"name\">\r\n                        <mat-error *ngIf=\"(errorsForm.name.touched) && errorsForm.name.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Contraseña</mat-label>\r\n                        <input matInput [type]=\"showPassword ? 'text' : 'password'\" name=\"password\"\r\n                            formControlName=\"password\">\r\n                        <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"showPassword = !showPassword\">\r\n                            {{showPassword?'visibility_off':'visibility'}}\r\n                        </mat-icon>\r\n                        <mat-error\r\n                            *ngIf=\"(errorsForm.password.touched) && errorsForm.password.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"engancharRed()\" [disabled]=\"!form.valid\" type=\"button\">\r\n        Enganchar \r\n    </button>\r\n</div>");

/***/ }),

/***/ 33078:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/list-neighbour/add-neighbour/add-neighbour.component.scss ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = "@charset \"UTF-8\";\n.custom-dropzone {\n  height: 80px;\n  width: auto;\n  background: #fff;\n  color: #000;\n  border: 5px dashed #fff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n  padding-top: 30px;\n}\nngx-dropzone,\n.custom-dropzone {\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.custom-dropzone {\n  height: 200px;\n  width: auto;\n  background: #fff;\n  color: #000;\n  border: 5px dashed #fff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n  padding-top: 30px;\n}\n.custom-dropzone-p {\n  height: 150px;\n  background: #fff;\n  color: #000;\n  border: 2px dashed #000;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n}\n.custom-dropzone-p.ngx-dz-hovered {\n  border: 5px solid #eb4f4f;\n}\n.custom-dropzone.ngx-dz-hovered {\n  border: 5px solid black;\n}\n#preview {\n  display: flex;\n  height: 100px;\n  min-height: 100px;\n  min-width: 200px;\n  max-width: 200px;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  margin: 10px;\n  border-radius: 5px;\n  position: relative;\n}\n.center {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block;\n}\n#btnPrevious {\n  background-color: #43BDD6;\n  color: white;\n}\n#btnNext {\n  background-color: #43BDD6;\n  color: white;\n}\n.dialog-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.left-button {\n  order: 1;\n  /* El botón Anterior estará en el extremo izquierdo */\n}\n.right-button {\n  order: 2;\n  /* El botón Siguiente estará en el extremo derecho */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZWlnaGJvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlBOztFQUdJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFISjtBQU1BO0VBQ0kseUJBQUE7QUFISjtBQU1BO0VBQ0ksdUJBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUhKO0FBTUE7RUFDSSxRQUFBO0VBQVUscURBQUE7QUFGZDtBQUtBO0VBQ0ksUUFBQTtFQUFVLG9EQUFBO0FBRGQiLCJmaWxlIjoiYWRkLW5laWdoYm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jdXN0b20tZHJvcHpvbmUge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiA1cHggZGFzaGVkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMXB4ICNjZWQ0ZGE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbm5neC1kcm9wem9uZSxcbi5jdXN0b20tZHJvcHpvbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1kcm9wem9uZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiA1cHggZGFzaGVkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMXB4ICNjZWQ0ZGE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5jdXN0b20tZHJvcHpvbmUtcCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggI2NlZDRkYTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VzdG9tLWRyb3B6b25lLXAubmd4LWR6LWhvdmVyZWQge1xuICBib3JkZXI6IDVweCBzb2xpZCAjZWI0ZjRmO1xufVxuXG4uY3VzdG9tLWRyb3B6b25lLm5neC1kei1ob3ZlcmVkIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG59XG5cbiNwcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNidG5QcmV2aW91cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M0JERDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2J0bk5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNCREQ2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kaWFsb2ctZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubGVmdC1idXR0b24ge1xuICBvcmRlcjogMTtcbiAgLyogRWwgYm90w7NuIEFudGVyaW9yIGVzdGFyw6EgZW4gZWwgZXh0cmVtbyBpenF1aWVyZG8gKi9cbn1cblxuLnJpZ2h0LWJ1dHRvbiB7XG4gIG9yZGVyOiAyO1xuICAvKiBFbCBib3TDs24gU2lndWllbnRlIGVzdGFyw6EgZW4gZWwgZXh0cmVtbyBkZXJlY2hvICovXG59Il19 */";

/***/ }),

/***/ 57459:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/list-neighbour/excel-import/excel-import.component.scss ***!
  \*******************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNlbC1pbXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65993:
/*!********************************************************************!*\
  !*** ./src/app/pages/list-neighbour/list-neighbour.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW5laWdoYm91ci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5346:
/*!*************************************************************!*\
  !*** ./src/app/pages/list-neighbour/red/red.component.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list-neighbour_list-neighbour_module_ts-es2020.js.map