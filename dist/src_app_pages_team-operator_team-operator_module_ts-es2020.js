"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_team-operator_team-operator_module_ts"],{

/***/ 80084:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/team-operator/select-operator/select-operator.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOperatorComponent": function() { return /* binding */ SelectOperatorComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_operator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-operator.component.html */ 51635);
/* harmony import */ var _select_operator_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-operator.component.scss */ 52911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/loading/loader */ 81534);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33927);











let SelectOperatorComponent = class SelectOperatorComponent {
    constructor(dialogRef, dialog, data, fb, api, events) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.api = api;
        this.events = events;
        this.title = "";
        this.pagination = { page: 1, pages: 1, itemsPage: 1000, total: 1 };
        this.operators = [];
        this.operatorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.idTeam = data.team;
    }
    ngOnInit() {
        this.createForm();
        this.getOperators();
    }
    createForm() {
        this.searchForm = this.fb.group({
            value: ['']
        });
    }
    getOperators() {
        this.api.getOperators(this.pagination.page, this.pagination.itemsPage, "").subscribe(resp => {
            this.operators = resp.body['administrators'];
            this.filteredOperators = this.operatorCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => this._filterOperator(value)));
        }, (err) => {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    postOperatorTeam() {
        (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.startLoading)();
        this.api.postOperatorTeam(this.selectOperator._id, this.idTeam).subscribe(resp => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Operador asignado correctamente', 'btn btn-fill btn-info').then((result) => {
                this.close();
            });
        }, (err) => {
            (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
            this.word = "";
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', err.error.message, 'btn  btn-fill btn-info');
        });
    }
    _filterOperator(value) {
        const filterValue = value;
        return this.operators.filter(item => item.fullName.includes(filterValue));
    }
    selected(event) {
        this.word = event.option.value.fullName;
        this.selectOperator = event.option.value;
    }
    close() {
        this.dialogRef.close();
    }
};
SelectOperatorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event }
];
SelectOperatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-select-operator',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_operator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_operator_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectOperatorComponent);



/***/ }),

/***/ 98770:
/*!****************************************************************!*\
  !*** ./src/app/pages/team-operator/team-operator.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamOperatorComponent": function() { return /* binding */ TeamOperatorComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_operator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./team-operator.component.html */ 98985);
/* harmony import */ var _team_operator_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-operator.component.scss */ 49078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var _select_operator_select_operator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-operator/select-operator.component */ 80084);










let TeamOperatorComponent = class TeamOperatorComponent {
    constructor(dialog, fb, route, _api, router) {
        this.dialog = dialog;
        this.fb = fb;
        this.route = route;
        this._api = _api;
        this.router = router;
        this.operators = [];
        this.pagination = { page: 1, pages: 1, itemsPage: 10, total: 1 };
        this.wordToSearch = '';
        this.count = 0;
        let parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
        this.team = parameters;
    }
    ngOnInit() {
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
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
        });
    }
    openModal() {
        const modal = this.dialog.open(_select_operator_select_operator_component__WEBPACK_IMPORTED_MODULE_4__.SelectOperatorComponent, {
            width: '400px',
            data: {
                team: this.team.id
            }
        });
        modal.afterClosed().subscribe(result => {
            this.getOperatorByTeam();
        });
    }
    changePage(eventPage) {
        this.pagination.page = eventPage.pageIndex + 1;
        this.getOperatorByTeam();
    }
};
TeamOperatorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
TeamOperatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-team-operator',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_operator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_team_operator_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamOperatorComponent);



/***/ }),

/***/ 15316:
/*!*************************************************************!*\
  !*** ./src/app/pages/team-operator/team-operator.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamOperatorModule": function() { return /* binding */ TeamOperatorModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _team_operator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-operator.component */ 98770);
/* harmony import */ var _select_operator_select_operator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-operator/select-operator.component */ 80084);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 87762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material/material.module */ 95123);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ 54276);
/* harmony import */ var _team_operator_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-operator.routes */ 75911);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);












let TeamOperatorModule = class TeamOperatorModule {
};
TeamOperatorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _team_operator_component__WEBPACK_IMPORTED_MODULE_0__.TeamOperatorComponent,
            _select_operator_select_operator_component__WEBPACK_IMPORTED_MODULE_1__.SelectOperatorComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__.TabsModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_team_operator_routes__WEBPACK_IMPORTED_MODULE_4__.TeamOperatorRoutes),
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__.NgxDropzoneModule,
        ],
        providers: [
            typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event
        ]
    })
], TeamOperatorModule);



/***/ }),

/***/ 75911:
/*!*************************************************************!*\
  !*** ./src/app/pages/team-operator/team-operator.routes.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamOperatorRoutes": function() { return /* binding */ TeamOperatorRoutes; }
/* harmony export */ });
/* harmony import */ var _team_operator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-operator.component */ 98770);

const TeamOperatorRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _team_operator_component__WEBPACK_IMPORTED_MODULE_0__.TeamOperatorComponent
            }]
    }
];


/***/ }),

/***/ 51635:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/team-operator/select-operator/select-operator.component.html ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">Asignar Operador</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"searchForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Seleccionar Operador</mat-label>\r\n                        <input type=\"search\" matInput placeholder=\"Buscar team\" [matAutocomplete]=\"auto\"\r\n                            [ngModel]=\"word\" [formControl]=\"operatorCtrl\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                            <mat-option *ngFor=\"let item of filteredOperators | async\" [value]=\"item\">\r\n                                {{ item.fullName }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postOperatorTeam()\" [disabled]=\"!searchForm.valid\"\r\n        type=\"button\">\r\n        Guardar\r\n    </button>\r\n</div>");

/***/ }),

/***/ 98985:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/team-operator/team-operator.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Operadores Team {{team.name}}: {{ count }}</h4>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                    style=\"border: 2px #000000;\">\r\n                                    <mat-label>Buscar por operador</mat-label>\r\n                                    <input matInput name=\"value\" (keyup)=\"getOperatorByTeam()\" formControlName=\"value\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <br>\r\n                    <div class=\"content table-responsive table-full-width\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Nombre</th>\r\n                                    <th class=\"text-right\">Acciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"operators.length > 0\">\r\n                                <tr *ngFor=\"let team of operators; let i=index;\">\r\n                                    <td>{{team.fullName}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <!-- <a (click)=\"showPlants(team)\" rel=\"tooltip\" title=\"Ver Centrales\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-eye\"></i>\r\n                                        </a>\r\n                                        <a (click)=\"openModal('Editar', team)\" rel=\"tooltip\" title=\"Editar\" class=\"btn btn-warning btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </a>\r\n                                        <a (click)=\"viewUsers(team.id)\" rel=\"tooltip\" title=\"Ver Operadores\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-users\"></i>\r\n                                        </a> -->\r\n                                        <!-- <a (click)=\"questionYN(i)\" rel=\"tooltip\" title=\"Eliminar\" data-toggle=\"modal\"\r\n                                            data-target=\"#delete\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </a> -->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p class=\"msg-empty\" *ngIf=\"operators.length ===  0\">No existen registros</p>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"operators?.length !==0\" class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col d-flex justify-content-end\">\r\n                                <mat-paginator #paginator showFirstLastButtons [length]=\"pagination.total\"\r\n                                    [pageSize]=\"pagination.itemsPage\" (page)=\"changePage($event)\">\r\n                                </mat-paginator>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<caption>\r\n    <button (click)=\"openModal()\" id=\"addBtn\" class=\"btn btn-icon btn-round btn-twitter\">\r\n        <img src=\"assets/img/icons/mas.png\">\r\n    </button>\r\n</caption>");

/***/ }),

/***/ 52911:
/*!************************************************************************************!*\
  !*** ./src/app/pages/team-operator/select-operator/select-operator.component.scss ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Qtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 49078:
/*!******************************************************************!*\
  !*** ./src/app/pages/team-operator/team-operator.component.scss ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_team-operator_team-operator_module_ts-es2020.js.map