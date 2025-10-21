"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.routes */ 50338);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 79328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);





let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
        ],
        imports: [
            // CommonModule,
            // RouterModule.forChild(HomeRoutes),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_home_routes__WEBPACK_IMPORTED_MODULE_0__.HomeRoutes),
        ]
    })
], HomeModule);



/***/ }),

/***/ 50338:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.routes.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutes": function() { return /* binding */ HomeRoutes; }
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 79328);

const HomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            }]
    }
];


/***/ }),

/***/ 79328:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home/home.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 26432);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 96137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 26432:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home/home.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid-home\">\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 96137:
/*!*****************************************************!*\
  !*** ./src/app/pages/home/home/home.component.scss ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = ".container-fluid-home {\n  background-image: url(\"https://res.cloudinary.com/dmueerzoi/image/upload/v1741999008/shwservices_hzxo8g.jpg\");\n  background-size: contain;\n  /* background-position: center; */\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2R0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC1ob21lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RtdWVlcnpvaS9pbWFnZS91cGxvYWQvdjE3NDE5OTkwMDgvc2h3c2VydmljZXNfaHp4bzhnLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts-es2020.js.map