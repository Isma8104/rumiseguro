"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["common"],{

/***/ 81534:
/*!**********************************************!*\
  !*** ./src/app/components/loading/loader.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startLoading": function() { return /* binding */ startLoading; },
/* harmony export */   "finishLoading": function() { return /* binding */ finishLoading; },
/* harmony export */   "backgroundInit": function() { return /* binding */ backgroundInit; },
/* harmony export */   "backgroundDestroy": function() { return /* binding */ backgroundDestroy; }
/* harmony export */ });
function startLoading() {
    const box = document?.getElementById('loader') || null;
    if (box != null) {
        box.classList?.add("loader");
        box.style.setProperty('position', 'fixed');
        box.style.setProperty('left', '0px');
        box.style.setProperty('top', '0px');
        box.style.setProperty('width', '100%');
        box.style.setProperty('height', '100%');
        box.style.setProperty('z-index', '9999');
        box.style.setProperty('background', 'url("https://cronosoft.net/view/loading") 50% 50% no-repeat #151B1C');
        box.style.setProperty('background-size', '10%');
        box.style.setProperty('opacity', '70%');
    }
}
function finishLoading() {
    const box = document?.getElementById('loader');
    if (box != null) {
        box.classList.remove("loader");
        box.removeAttribute('style');
    }
}
function backgroundInit() {
    var body = document?.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
}
function backgroundDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
}


/***/ })

}]);
//# sourceMappingURL=common-es2020.js.map