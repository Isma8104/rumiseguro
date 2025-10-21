"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_central_central_module_ts"],{

/***/ 69378:
/*!****************************************************!*\
  !*** ./src/app/pages/central/central.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralComponent": function() { return /* binding */ CentralComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_central_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./central.component.html */ 41516);
/* harmony import */ var _central_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central.component.scss */ 92525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);








let CentralComponent = class CentralComponent {
    constructor(api, router, fb) {
        this.api = api;
        this.router = router;
        this.fb = fb;
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
                if (this.teams.length === 1) {
                    let data = {
                        id: this.teams[0]._id,
                        name: this.teams[0].name
                    };
                    let parameter = btoa(JSON.stringify(data));
                    this.router.navigate(['neighborhoods/' + parameter]);
                }
                else {
                    this.pagination = resp.body.pagination;
                    this.count = resp.body.pagination.total;
                }
            },
            error: (err) => {
                (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            }
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
};
CentralComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
CentralComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-central',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_central_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_central_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CentralComponent);



/***/ }),

/***/ 24506:
/*!*************************************************!*\
  !*** ./src/app/pages/central/central.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralModule": function() { return /* binding */ CentralModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 87762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _central_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central.routes */ 83747);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material/material.module */ 95123);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ 54276);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _central_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./central.component */ 69378);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript.events */ 25260);












let CentralModule = class CentralModule {
};
CentralModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _central_component__WEBPACK_IMPORTED_MODULE_4__.CentralComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_central_routes__WEBPACK_IMPORTED_MODULE_1__.CentralRoutes),
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__.NgxDropzoneModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        providers: [
            typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event
        ]
    })
], CentralModule);



/***/ }),

/***/ 83747:
/*!*************************************************!*\
  !*** ./src/app/pages/central/central.routes.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRoutes": function() { return /* binding */ CentralRoutes; }
/* harmony export */ });
/* harmony import */ var _central_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central.component */ 69378);

const CentralRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _central_component__WEBPACK_IMPORTED_MODULE_0__.CentralComponent
            }]
    }
];


/***/ }),

/***/ 41516:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/central/central.component.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Teams: {{ count }}</h4>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                    style=\"border: 2px #000000;\">\r\n                                    <mat-label>Buscar por nombre</mat-label>\r\n                                    <input matInput name=\"value\" (keyup)=\"getTeams()\" formControlName=\"value\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <br>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\" *ngFor=\"let item of teams\">\r\n                                <div class=\"card\" (click)=\"showPlants(item)\" id=\"card-team\">\r\n                                    <img class=\"card-img-top\" src=\"data:image/png;base64,{{item.image}}\" />\r\n                            \r\n                                    <div class=\"card-body\" style=\"text-align: center;\">\r\n                                        <strong>TEAM - {{ item.name }}</strong>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ 92525:
/*!******************************************************!*\
  !*** ./src/app/pages/central/central.component.scss ***!
  \******************************************************/
/***/ (function(module) {

module.exports = ".card-img-top {\n  width: 100%;\n  /* Ancho del 100% del contenedor */\n  height: 20vh;\n  /* Altura fija */\n  border-bottom: 1px solid gray;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /* Ajuste de la imagen para cubrir el contenedor */\n}\n\n#card-team {\n  border: none !important;\n  border-radius: 2vh;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n#card-team:hover {\n  transform: scale(1.01);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQWEsa0NBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCw2QkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFBcUIsa0RBQUE7QUFJekI7O0FBREE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkk7RUFDSSxzQkFBQTtBQUlSIiwiZmlsZSI6ImNlbnRyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBBbmNobyBkZWwgMTAwJSBkZWwgY29udGVuZWRvciAqL1xyXG4gICAgaGVpZ2h0OiAyMHZoOyAvKiBBbHR1cmEgZmlqYSAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluOyAvKiBBanVzdGUgZGUgbGEgaW1hZ2VuIHBhcmEgY3VicmlyIGVsIGNvbnRlbmVkb3IgKi9cclxufVxyXG5cclxuI2NhcmQtdGVhbXtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_central_central_module_ts-es2020.js.map