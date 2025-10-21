"use strict";
(self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_map_map_module_ts"],{

/***/ 76082:
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": function() { return /* binding */ format; }
/* harmony export */ });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ 1929);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ 43983);


/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
var format = function (date, locale, opts) {
    // diff seconds
    var sec = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate);
    // format it with locale
    return (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0,_register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));
};


/***/ }),

/***/ 96274:
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": function() { return /* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.format; },
/* harmony export */   "render": function() { return /* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.render; },
/* harmony export */   "cancel": function() { return /* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel; },
/* harmony export */   "register": function() { return /* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.register; }
/* harmony export */ });
/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ 94921);
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ 56937);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ 43983);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ 76082);
/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ 88080);
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */



(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__.default);
(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__.default);





/***/ }),

/***/ 94921:
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    var unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}


/***/ }),

/***/ 56937:
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    var unit = ZH_CN[~~(idx / 2)];
    return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
}


/***/ }),

/***/ 88080:
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": function() { return /* binding */ cancel; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ 91268);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ 1929);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ 43983);



// all realtime timer
var TIMER_POOL = {};
/**
 * clear a timer from pool
 * @param tid
 */
var clear = function (tid) {
    clearTimeout(tid);
    delete TIMER_POOL[tid];
};
// run with timer(setTimeout)
function run(node, date, localeFunc, opts) {
    // clear the node's exist timer
    clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
    // get diff seconds
    var diff = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate);
    // render
    node.innerText = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);
    var tid = setTimeout(function () {
        run(node, date, localeFunc, opts);
    }, Math.min(Math.max((0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[tid] = 0;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);
}
/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
function cancel(node) {
    // cancel one
    if (node)
        clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    // cancel all
    // @ts-ignore
    else
        Object.keys(TIMER_POOL).forEach(clear);
}
/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
function render(nodes, locale, opts) {
    // by .length
    // @ts-ignore
    var nodeList = nodes.length ? nodes : [nodes];
    nodeList.forEach(function (node) {
        run(node, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0,_register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});
    });
    return nodeList;
}


/***/ }),

/***/ 43983:
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": function() { return /* binding */ register; },
/* harmony export */   "getLocale": function() { return /* binding */ getLocale; }
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
/**
 * All supported locales
 */
var Locales = {};
/**
 * register a locale
 * @param locale
 * @param func
 */
var register = function (locale, func) {
    Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
    return Locales[locale] || Locales['en_US'];
};


/***/ }),

/***/ 1929:
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDate": function() { return /* binding */ toDate; },
/* harmony export */   "formatDiff": function() { return /* binding */ formatDiff; },
/* harmony export */   "diffSec": function() { return /* binding */ diffSec; },
/* harmony export */   "nextInterval": function() { return /* binding */ nextInterval; }
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
function formatDiff(diff, localeFunc) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    var agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Time in seconds
     */
    var totalSec = diff;
    /**
     * Unit of time
     */
    var idx = 0;
    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
        diff /= SEC_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    var relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
}


/***/ }),

/***/ 91268:
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateAttribute": function() { return /* binding */ getDateAttribute; },
/* harmony export */   "setTimerId": function() { return /* binding */ setTimerId; },
/* harmony export */   "getTimerId": function() { return /* binding */ getTimerId; }
/* harmony export */ });
var ATTR_TIMEAGO_TID = 'timeago-id';
/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
function getDateAttribute(node) {
    return node.getAttribute('datetime');
}
/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
function setTimerId(node, timerId) {
    // @ts-ignore
    node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
/**
 * get the timer id
 * @param node
 */
function getTimerId(node) {
    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}


/***/ }),

/***/ 84801:
/*!************************************************!*\
  !*** ./node_modules/timeago.js/lib/lang/es.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(number, index) {
    return [
        ['justo ahora', 'en un rato'],
        ['hace %s segundos', 'en %s segundos'],
        ['hace 1 minuto', 'en 1 minuto'],
        ['hace %s minutos', 'en %s minutos'],
        ['hace 1 hora', 'en 1 hora'],
        ['hace %s horas', 'en %s horas'],
        ['hace 1 día', 'en 1 día'],
        ['hace %s días', 'en %s días'],
        ['hace 1 semana', 'en 1 semana'],
        ['hace %s semanas', 'en %s semanas'],
        ['hace 1 mes', 'en 1 mes'],
        ['hace %s meses', 'en %s meses'],
        ['hace 1 año', 'en 1 año'],
        ['hace %s años', 'en %s años'],
    ][index];
}
exports.default = default_1;


/***/ }),

/***/ 73384:
/*!********************************************************!*\
  !*** ./src/app/pages/map/actions/actions.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsComponent": function() { return /* binding */ ActionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_actions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./actions.component.html */ 47094);
/* harmony import */ var _actions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.component.scss */ 33325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ 15383);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! timeago.js */ 96274);
/* harmony import */ var timeago_js_lib_lang_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! timeago.js/lib/lang/es */ 84801);






// ELIMINA: import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';
// AGREGA:




let ActionsComponent = class ActionsComponent {
    constructor(dialogRef, dialog, data, events, 
    // ELIMINA: private mqttService: MqttServiceService,
    // AGREGA:
    socketService, apiService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.events = events;
        this.socketService = socketService;
        this.apiService = apiService;
        this.name = '';
        this.identifier = '';
        this.alerts = [
            {
                text: 'SOS',
                value: '1'
            },
            {
                text: 'SOSPECHOSO',
                value: '2'
            },
            {
                text: 'INUNDACIÓN',
                value: '6'
            },
            {
                text: 'TERREMOTO',
                value: '7'
            },
            {
                text: 'DISUASIVA',
                value: '10'
            },
            {
                text: 'LIBADORES',
                value: '11'
            },
            {
                text: 'EXTORSIONADOR',
                value: '12'
            },
            {
                text: 'P0',
                value: '13'
            },
            {
                text: 'P1',
                value: '14'
            },
            {
                text: 'P2',
                value: '15'
            }
        ];
        this.icons = [];
        this.connected = '';
        this.connectedAt = new Date();
        this.connectedTimeAgo = '';
        this.powerOutage = '';
        this.powerOutageAt = new Date();
        this.powerOutageTimeAgo = '';
        this.doorOpen = '';
        this.doorOpenAt = new Date();
        this.doorOpenTimeAgo = '';
        this.batteryStatus = null;
        this.batteryStatusAt = new Date();
        this.batteryStatusTimeAgo = '';
        this.threshold = 12;
        (0,timeago_js__WEBPACK_IMPORTED_MODULE_5__.register)('es', timeago_js_lib_lang_es__WEBPACK_IMPORTED_MODULE_6__.default);
        this.name = data.name;
        this.identifier = data.identifier;
    }
    ngOnInit() {
        this.getLastStats();
        // CONECTA EL SOCKET AL INICIAR EL COMPONENTE
        this.socketService.socketConnect(`actions-${this.identifier}`);
    }
    getLastStats() {
        this.apiService.getCentralInformationLast('battery-status', this.identifier).subscribe((res) => {
            this.batteryStatus = res.boxStats[0].batteryStatus;
            this.batteryStatusAt = new Date(res.boxStats[0].createdAt);
            this.batteryStatusTimeAgo = (0,timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(this.batteryStatusAt, 'es');
        });
        this.apiService.getCentralInformationLast('sensor-status', this.identifier).subscribe((res) => {
            console.log('sensor status', res);
        });
        this.apiService.getCentralInformationLast('power-outage', this.identifier).subscribe((res) => {
            this.powerOutage = res.boxStats[0].powerOutage;
            this.powerOutageAt = new Date(res.boxStats[0].createdAt);
            this.powerOutageTimeAgo = (0,timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(this.powerOutageAt, 'es');
        });
        this.apiService.getCentralInformationLast('connected', this.identifier).subscribe((res) => {
            this.connected = res.boxStats[0].connected;
            this.connectedAt = new Date(res.boxStats[0].createdAt);
            this.connectedTimeAgo = (0,timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(this.connectedAt, 'es');
        });
    }
    sendCommand(payload) {
        // REEMPLAZA LA PUBLICACIÓN DIRECTA MQTT POR SOCKET.IO
        // this.mqttService.publishToTopic(`alarma/${this.identifier}`, payload.value);
        // USA EL SOCKET SERVICE PARA PUBLICAR A TRAVÉS DEL BACKEND
        this.socketService.publishMqttMessage(`alarma/${this.identifier}`, payload.value, { qos: 1, retain: true });
        console.log(`Comando enviado: alarma/${this.identifier} = ${payload.value}`);
        // this.close('alert');
    }
    close(opt) {
        this.dialogRef.close({
            opt
        });
    }
};
ActionsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA,] }] },
    { type: typescript_events__WEBPACK_IMPORTED_MODULE_4__.Event },
    { type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ActionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-actions',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_actions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actions_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActionsComponent);



/***/ }),

/***/ 28990:
/*!**************************************************************!*\
  !*** ./src/app/pages/map/info-alert/info-alert.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoAlertsComponent": function() { return /* binding */ InfoAlertsComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info-alert.component.html */ 17957);
/* harmony import */ var _info_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-alert.component.scss */ 51028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/loading/loader */ 81534);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/socket.service */ 15383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);



 // MEJORADO: Se añade OnDestroy para la limpieza de suscripciones








let InfoAlertsComponent = class InfoAlertsComponent {
  constructor(dialogRef, dialog, data, fb, api, _socket) {
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.data = data;
    this.fb = fb;
    this.api = api;
    this._socket = _socket;
    this.latE = null;
    this.lngE = null;
    this.heightE = '100%';
    this.coordinates = [];
    this.user = data.user;
    this.idAlert = data.idAlert;
    this.latE = this.user.lat;
    this.lngE = this.user.lng;
  }

  ngOnInit() {
    this.createForm();
    this.getUserPosition(this.user._id); // SOLUCIÓN: Conectar solo el socket principal (ya que ambos eventos vienen por el mismo socket)

    this._socket.socketConnect(this.user._id); // Empezamos a escuchar los datos en tiempo real


    this.listenForRealtimeData();
  } // MEJORADO: Un solo método para manejar todas las suscripciones de datos en tiempo real


  listenForRealtimeData() {
    // 1. Escuchar actualizaciones de posición
    this.positionSubscription = this._socket.listenForPositions().subscribe(data => {
      console.log("RECIBO DATA DE POSICIÓN:", data);

      if (data && data.positions && data.positions.length > 0) {
        this.coordinates.push({
          lat: data.positions[0].lat,
          lng: data.positions[0].lng
        });

        if (this.mapCard) {
          this.mapCard.plotRoute(this.coordinates);
        }
      }
    }); // 2. Escuchar mensajes MQTT

    this.mqttSubscription = this._socket.listenForMqttMessages().subscribe(data => {
      console.log("RECIBO DATA DE MQTT:", data); // Aquí puedes reaccionar a mensajes MQTT específicos

      if (data.topic === `alarma/${this.user.access}` && data.message === 'F') {
        this.showAlert('info', 'Alarma Desactivada', 'El usuario ha desactivado la alarma remotamente.', 'btn btn-info');
      }
    });
  }

  postComment() {
    (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.startLoading)();
    this.api.putAlertHeeded(this.idAlert, {
      description: this.form.value.comment,
      administrator: this.getUser(),
      replyDate: new Date()
    }).subscribe(_ => {
      (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.finishLoading)();
      this.showAlert('success', 'Correcto', 'Alerta atendida correctamente', 'btn btn-info'); // Publicar mensaje MQTT para apagar alarma

      const topic = `alarma/${this.user.access}`;
      const message = 'F';

      this._socket.publishMqttMessage(topic, message, {
        qos: 2,
        retain: true
      });
    }, _ => {
      (0,src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.finishLoading)();
      this.showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
    });
  }

  ngOnDestroy() {
    // Limpiar suscripciones
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }

    if (this.mqttSubscription) {
      this.mqttSubscription.unsubscribe();
    }
  }

  convertCoordsToAddress() {
    if (this.lastPosition && this.lastPosition.lat && this.lastPosition.lng) {
      this.api.getAddressFromCoords(Number(this.lastPosition.lat), Number(this.lastPosition.lng)).subscribe(resp => {
        this.user['current_position'] = resp.address['road'];
      }, err => {
        console.log(err);
      });
    }
  }

  sendWhatsAppMessage(event) {
    event.preventDefault();
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${this.lastPosition.lat},${this.lastPosition.lng}`;
    const message = `Información:\n\nNombre: ${this.user.name}\nCédula: ${this.user.ci}\nTeléfono: ${this.user.phone}\nDirección: ${this.user.address}\nUbicación: ${googleMapsLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  getUserPosition(user) {
    this.api.getUserPosition(user).subscribe(resp => {
      let position = resp.body['position'];
      this.lastPosition = position;
      this.convertCoordsToAddress();
    }, err => {
      console.log("ERR UP: ", err);
    });
  }

  createForm() {
    this.form = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }

  close(dialogResult = undefined) {
    this.dialogRef.close(dialogResult);
  }

  getUser() {
    return localStorage.getItem('id-sh');
  }

  handleCoordinates(event) {
    console.log('Received coordinates:', event);
  }

  showAlert(type, title, text, classBtn) {
    var _this = this;

    return (0,C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
        title,
        text,
        type: type,
        buttonsStyling: false,
        confirmButtonClass: classBtn,
        allowOutsideClick: false
      }).then(data => {
        if (data.value) {
          if (type !== 'info' && type !== 'warning') {
            _this.close('close');
          }
        }
      });
    })();
  }

};

InfoAlertsComponent.ctorParameters = () => [{
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
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService
}];

InfoAlertsComponent.propDecorators = {
  mapCard: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['mapCard']
  }]
};
InfoAlertsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-info-alerts',
  template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_alert_component_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_info_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__]
})], InfoAlertsComponent);


/***/ }),

/***/ 51846:
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": function() { return /* binding */ MapComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./map.component.html */ 92867);
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss */ 97916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ol/Map */ 65835);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ol/View */ 83223);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ol/layer/Tile */ 25504);
/* harmony import */ var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ol/source/XYZ */ 95361);
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ol/control.js */ 29046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/layer/Vector */ 81204);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/source/Vector */ 49010);
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/Feature */ 33697);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/geom */ 32475);
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Style */ 16274);
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Fill */ 49040);
/* harmony import */ var ol_style_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Text */ 6888);
/* harmony import */ var ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/style/IconAnchorUnits */ 51953);
/* harmony import */ var src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/url.service */ 96407);
/* harmony import */ var ol_style_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Icon */ 16212);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj */ 68565);
/* harmony import */ var _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-alert/info-alert.component */ 28990);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/swal-alert */ 22176);
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/socket.service */ 15383);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/actions.component */ 73384);
/* harmony import */ var ol_Observable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Observable */ 82146);




/** OpenLayers Map Imports */





















//import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';




let MapComponent = class MapComponent {
    constructor(_api, fb, dialog, notifyService, socketService) {
        this._api = _api;
        this.fb = fb;
        this.dialog = dialog;
        this.notifyService = notifyService;
        this.socketService = socketService;
        this.isLoadingAlerts = false;
        this.isConnect = false;
        this.alerts = [];
        this.markers = {};
        this.fit = true;
        this.fitF = true;
        this.center = false;
        this.word = '';
        this.teams = [];
        this.neighborhoods = [];
        this.pagination = { page: 1, pages: 1, itemsPage: 500, total: 1 };
        this.wordToSearch = '';
        this.teamsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
        this.layerRegistry = {};
        this.isSound = false;
        this.isBouncing = false;
        this.singleClickListener = null;
        this.topicMessageCount = {};
    }
    ngOnInit() {
        this.loadOpenStreet();
        this.createForm();
        this.getTeams();
        this.listenMqttMessages();
        this.map.getView().on('change:resolution', () => {
            const zoomLevel = this.map.getView().getZoom();
            this.updateMarkerStyles(zoomLevel);
        });
    }
    updateMarkerStyles(zoomLevel) {
        for (const markerId in this.markers) {
            if (this.markers.hasOwnProperty(markerId)) {
                const marker = this.markers[markerId];
                const style = marker.getStyle();
                let textStyle = style.getText();
                if (!textStyle) {
                    textStyle = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__.default({});
                }
                textStyle.setText(marker.get('name'));
                textStyle.setFont(10 + 'px sans-serif');
                style.setText(textStyle);
                marker.setStyle(style);
                // if (style && style.getText()) {
                //   style.getText().setText(zoomLevel > 15 ? marker.get('name') : '');
                // }
                // marker.setStyle(style);
            }
        }
    }
    listenMqttMessages() {
        // Conecta el socket primero
        this.socketService.socketConnect('map-component');
        // Escucha mensajes MQTT a través de Socket.IO
        this.socketService.listenForMqttMessages().subscribe((data) => {
            const topic = data.topic;
            const message = data.message;
            const topico = topic.split('/')[1];
            if (topic.includes('alarma')) {
                console.log('ENTRA EN TOPIC ALARMA:', topic, message);
                if (message.toString().includes('0')) {
                    return;
                }
                this.manageAlarms(topico, message);
            }
            console.log('MENSAJE MQTT RECIBIDO:', topic, message);
            const central = this.neighborhoods.find((item) => item.identifier === topico);
            const alert = message.toString().substring(0, 1);
            const status = message.toString().substring(1, message.toString().length);
            if (central) {
                this.typesAlert(central, alert, status);
            }
        });
    }
    manageAlarms(topic, message) {
        if (!this.topicMessageCount[topic]) {
            this.topicMessageCount[topic] = 0;
        }
        console.log('SUENA: ', this.topicMessageCount);
        this.topicMessageCount[topic]++;
        if (this.topicMessageCount[topic] > 1) {
            this.getAlerts();
            const data = message.toString('utf-8');
            console.log('ESTO 1: ', data);
            if (data.includes('out')) {
                console.log('ENTRA EN OUT');
                const user = JSON.parse(data.split('*')[1]);
                this.notifyService.showError('Fuera de cobertura', `${user.name} - Emitió una alerta`);
                if (!this.markers[user._id]) {
                    const marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__.default({
                        geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_13__.default([parseFloat(user.lng), parseFloat(user.lat)]).transform('EPSG:4326', 'EPSG:3857'),
                        name: user.name,
                        id: user._id
                    });
                    this.markers[user._id] = marker;
                    // TODO: agregar marcador al mapa
                    // Crear el vector source con el nuevo marcador
                    // const vectorSource = new VectorSource({
                    //   features: [marker]
                    // });
                    //
                    // // Crear el vector layer usando el vector source
                    // const vectorLayer = new VectorLayer({
                    //   source: vectorSource
                    // });
                    //
                    // // Agregar el vector layer al mapa
                    // this.map.addLayer(vectorLayer);
                }
                return;
            }
            if (Number(data) < 10) {
                console.log('ENTRA EN ESTO con IS NUMBER');
                this.changePinColor(topic);
            }
        }
    }
    typesAlert(central, alert, status) {
        // C0 corte de corriente solo batería
        // C1 no hay corte de corriente
        // P1 abierta caja
        // P0 caja cerrada
        // B11.5 estado de la batería
        let mensaje = '';
        switch (alert) {
            case 'C': //Estado Bateria
                if (status === '0') {
                    mensaje = 'Central corte de corriente';
                }
                else {
                    mensaje = 'Revisión estado corriente correcto';
                }
                break;
            case 'D':
                if (status === '0') {
                    mensaje = 'Central fuera de línea';
                    this.setMarkerStyle(this.markers[central.identifier], 'pin-disconnect');
                }
                else {
                    mensaje = 'Central central en línea';
                    this.setMarkerStyle(this.markers[central.identifier], 'pin');
                }
                break;
            case 'P': //Estado Caja
                if (status === '0') {
                    mensaje = 'Puerta central abierta';
                }
                else {
                    mensaje = 'Puerta central cerrada';
                }
                break;
            case 'B': //Estado bateria
                mensaje = `Estado de la bateria ${status}`;
                break;
            default:
                break;
        }
    }
    createForm() {
        this.searchForm = this.fb.group({
            value: [this.teams[0]]
        });
    }
    centerMap() {
        const coordinates = this.neighborhoods.map(point => [parseFloat(point.lng), parseFloat(point.lat)]);
        // Calcular el centro de todas las coordenadas
        const center = coordinates.reduce((accumulator, current) => [accumulator[0] + current[0], accumulator[1] + current[1]], [0, 0]);
        center[0] /= coordinates.length;
        center[1] /= coordinates.length;
        // Configurar la vista del mapa para centrarse en el punto calculado
        this.map.getView().setCenter((0,ol_proj__WEBPACK_IMPORTED_MODULE_4__.fromLonLat)(center));
        const zoom = this.calculateZoomForPoints(this.neighborhoods);
        this.map.getView().setZoom(zoom);
    }
    clearMapState() {
        this.markers = {};
        this.topicMessageCount = {};
        // Ya no necesitas desuscribirte de temas MQTT directamente
        // porque eso lo maneja el backend
        // Remover todas las capas del mapa
        for (const layerId in this.layerRegistry) {
            if (this.layerRegistry.hasOwnProperty(layerId)) {
                this.map.removeLayer(this.layerRegistry[layerId]);
            }
        }
        this.layerRegistry = {};
        this.neighborhoods = [];
        if (this.singleClickListener) {
            (0,ol_Observable__WEBPACK_IMPORTED_MODULE_14__.unByKey)(this.singleClickListener);
            this.singleClickListener = null;
        }
    }
    setMarker(incomingMarker, neighborhood) {
        if (!incomingMarker) {
            const marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__.default({
                geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_13__.default([parseFloat(neighborhood.lng), parseFloat(neighborhood.lat)]).transform('EPSG:4326', 'EPSG:3857'),
                name: neighborhood.name,
                connected: neighborhood.connected,
                identifier: neighborhood.identifier
            });
            this.markers[neighborhood.identifier] = marker;
            this.setMarkerStyle(marker, neighborhood.connected ? 'pin' : 'pin-disconnect');
        }
        else {
            incomingMarker.set('connected', neighborhood.connected);
            this.setMarkerStyle(incomingMarker, neighborhood.connected ? 'pin' : 'pin-disconnect');
        }
    }
    setMarkerStyle(marker, iconType) {
        const text = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__.default({
            // text: marker.get('name'),
            text: '',
            offsetY: 12,
            fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__.default({ color: 'black' }),
            font: 'bold 14px Arial',
            backgroundFill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__.default({ color: 'white' }),
            padding: [3, 3, 3, 3]
        });
        this.markerStyle = new ol_style_Style__WEBPACK_IMPORTED_MODULE_16__.default({
            image: new ol_style_Icon__WEBPACK_IMPORTED_MODULE_17__.default({
                crossOrigin: 'anonymous',
                anchor: [24, 48],
                anchorXUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__.default.PIXELS,
                anchorYUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__.default.PIXELS,
                src: `${src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__.URL_SERVICES}/view/${iconType}`
            }),
            text
        });
        let textStyle = this.markerStyle.getText();
        if (!textStyle) {
            textStyle = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__.default({});
        }
        textStyle.setText(marker.get('name'));
        textStyle.setFont(10 + 'px sans-serif');
        this.markerStyle.setText(textStyle);
        // const zoomLevel = this.map.getView().getZoom();
        // if (zoomLevel < 16) {
        //   this.markerStyle.setText(null);
        // }
        marker.setStyle(this.markerStyle);
    }
    getNeighborhoodByTeam(teamSelected) {
        this.clearMapState();
        this._api.getNeighborhoodByTeam(teamSelected, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
            this.neighborhoods = resp.body['neighborhoods'];
            this.centerMap();
            this.neighborhoods.forEach((neighborhood) => {
                // En lugar de suscribirte directamente a MQTT, envía una petición al backend
                // para que él se suscriba y te reenvíe los mensajes via Socket.IO
                console.log('Monitoring neighborhood:', neighborhood.identifier);
                this.setMarker(this.markers[neighborhood.identifier], neighborhood);
                const vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_19__.default({
                    features: [this.markers[neighborhood.identifier]]
                });
                const vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_20__.default({
                    source: vectorSource
                });
                vectorLayer.set('layerId', neighborhood._id);
                this.layerRegistry[neighborhood._id] = vectorLayer;
                this.map.addLayer(vectorLayer);
            });
            // ---> INICIO: CÓDIGO AÑADIDO PARA INTEGRAR ACTIONSCOMPONENT <---
            // 🗺️ Primero, nos aseguramos de limpiar cualquier listener anterior para evitar duplicados.
            if (this.singleClickListener) {
                (0,ol_Observable__WEBPACK_IMPORTED_MODULE_14__.unByKey)(this.singleClickListener);
            }
            // Creamos el nuevo listener para el evento 'singleclick'
            this.singleClickListener = this.map.on('singleclick', (evt) => {
                this.map.forEachFeatureAtPixel(evt.pixel, (feature, _) => {
                    // Si se hizo clic sobre un marcador (feature)
                    if (feature) {
                        const name = feature.get('name');
                        const connected = feature.get('connected');
                        const identifier = feature.get('identifier');
                        // Abrimos el diálogo del ActionsComponent con los datos del marcador
                        this.dialog.open(_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__.ActionsComponent, {
                            width: '60%',
                            data: { name, connected, identifier }
                        });
                    }
                });
            });
            // ---> FIN: CÓDIGO AÑADIDO <---
        }); // Cierre de la suscripción de _api.getNeighborhoodByTeam
    }
    calculateZoomForPoints(points) {
        if (points.length === 0) {
            return 2; // Valor predeterminado si no hay puntos
        }
        // Obtener las coordenadas extremas (mínima y máxima) de los puntos
        const minX = Math.min(...points.map(point => parseFloat(point.lng)));
        const minY = Math.min(...points.map(point => parseFloat(point.lat)));
        const maxX = Math.max(...points.map(point => parseFloat(point.lng)));
        const maxY = Math.max(...points.map(point => parseFloat(point.lat)));
        // Calcular el centro y el ancho/alto de la extensión geográfica
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        const extentWidth = maxX - minX;
        const extentHeight = maxY - minY;
        // Obtener el tamaño del contenedor del mapa
        const mapContainer = document.getElementById('map'); // Ajusta el ID según tu estructura HTML
        const containerWidth = mapContainer.clientWidth;
        const containerHeight = mapContainer.clientHeight;
        // Calcular el zoom necesario para que la extensión geográfica sea completamente visible
        const resolutionX = extentWidth / containerWidth;
        const resolutionY = extentHeight / containerHeight;
        const resolution = Math.max(resolutionX, resolutionY);
        // Calcular el zoom basado en la resolución y el tamaño del contenedor
        const zoom = Math.log2(360 / (resolution * 256)) - 1;
        return zoom;
    }
    loadOpenStreet() {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_21__.default({
            controls: (0,ol_control_js__WEBPACK_IMPORTED_MODULE_22__.defaults)({
                zoom: false,
                rotate: false,
            }),
            target: 'map',
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_23__.default({
                    source: new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_24__.default({
                        // url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga'
                        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
            ],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_25__.default({
                center: [0, 0],
                zoom: 2,
                maxZoom: 19,
                minZoom: 2
            })
        });
    }
    getTeams() {
        this._api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
            this.teams = resp.body.teams;
            if (this.teams.length > 0) {
                this.searchForm.patchValue({ value: this.teams[0]._id });
                this.selected(this.searchForm.value.value);
            }
        });
    }
    // Cuando se cambia el dropdown de teams se pasa como parametro el team y se ejecuta esto.
    selected(teamId) {
        this.markers = {};
        this.neighborhoods = [];
        this.getNeighborhoodByTeam(teamId);
        this.teamSelectedId = teamId;
        this.alerts = [];
        this.getAlerts();
    }
    getAlerts() {
        this.isLoadingAlerts = true;
        this._api.getAlertsByTeam(this.teamSelectedId).subscribe((resp) => {
            this.alerts = resp.body.alerts;
            this.isLoadingAlerts = false;
        }, (err) => {
            (0,src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_6__.showAlert)('error', 'Error', `Algo ha salido mal, intente más tarde!\n${err}`, 'btn btn-info');
        });
    }
    changePinColor(identifier) {
        if (!identifier || !this.markers[identifier]) {
            return;
        }
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                if (i === 19) {
                    this.setMarkerStyle(this.markers[identifier], 'pin');
                    this.stopSound();
                }
                if (i % 2 === 0) {
                    this.setMarkerStyle(this.markers[identifier], 'pin4');
                }
                else {
                    this.setMarkerStyle(this.markers[identifier], this.markers[identifier].get('connected') ? 'pin' : 'pin-disconnect');
                }
            }, i * 500);
        }
        if (!this.isSound) {
            this.playSound();
        }
    }
    getTypeAlert(alert) {
        let notificationMessage;
        let imgAlert;
        let imgDefault = 'assets/img/icons/shadow.png';
        switch (alert) {
            case 'ALERT_1':
                notificationMessage = 'ALERTA DE SOS';
                imgAlert = 'assets/img/alerts/policebtn.png';
                break;
            case 'ALERT_2':
                notificationMessage = 'ALERTA DE SOSPECHOSO';
                imgAlert = 'assets/img/alerts/suspect.png';
                break;
            case 'ALERT_3':
                notificationMessage = 'ALERTA SILENCIOSA';
                imgAlert = 'assets/img/alerts/silencio.png';
                break;
            case 'ALERT_4':
                notificationMessage = 'ALERTA DE MI UBICACIÓN';
                imgAlert = imgDefault;
                break;
            case 'ALERT_5':
                notificationMessage = 'ALERTA DE VIOLENCIA DE GÉNERO';
                imgAlert = 'assets/img/alerts/genero.png';
                break;
            case 'ALERT_6':
                notificationMessage = 'ALERTA DE INUNDACIÓN';
                imgAlert = 'assets/img/alerts/flood.png';
                break;
            case 'ALERT_7':
                notificationMessage = 'ALERTA DE TERREMOTO';
                imgAlert = 'assets/img/alerts/earthquake.png';
                break;
            case 'ALERT_10':
                notificationMessage = 'ALERTA DISUASIVA';
                imgAlert = imgDefault;
                break;
            case 'ALERT_11':
                notificationMessage = 'ALERTA DE LIBADORES';
                imgAlert = imgDefault;
                break;
            case 'ALERT_12':
                notificationMessage = 'ALERTA DE EXTORSIONADOR';
                imgAlert = imgDefault;
                break;
            case 'ALERT_13':
                notificationMessage = 'ALERTA P0';
                imgAlert = imgDefault;
                break;
            case 'ALERT_14':
                notificationMessage = 'ALERTA P1';
                imgAlert = imgDefault;
                break;
            case 'ALERT_15':
                notificationMessage = 'ALERTA P2';
                imgAlert = imgDefault;
                break;
        }
        return {
            type: notificationMessage,
            img: imgAlert
        };
    }
    playSound() {
        this.isSound === true;
        const audio = this.audioPlayer.nativeElement;
        audio.play();
    }
    stopSound() {
        this.isSound === false;
        const audio = this.audioPlayer.nativeElement;
        audio.pause();
        audio.currentTime = 0;
    }
    showAlertInfo(data) {
        const modal = this.dialog.open(_info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__.InfoAlertsComponent, {
            width: '60%',
            data: {
                user: data.user,
                idAlert: data._id
            }
        });
        modal.afterClosed().subscribe(infoData => {
            if (infoData === undefined) {
                return;
            }
            this.alerts = [];
            this.getAlerts();
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService },
    { type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService }
];
MapComponent.propDecorators = {
    audioPlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['audioPlayer',] }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'app-map',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 96016:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": function() { return /* binding */ MapModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 87762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material/material.module */ 95123);
/* harmony import */ var typescript_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript.events */ 25260);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ 51846);
/* harmony import */ var _map_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.routes */ 12687);
/* harmony import */ var _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-alert/info-alert.component */ 28990);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/actions.component */ 73384);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 83315);














let MapModule = class MapModule {
};
MapModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent,
            _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__.InfoAlertsComponent,
            _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__.ActionsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsModule.forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot({
                timeOut: 10000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_map_routes__WEBPACK_IMPORTED_MODULE_4__.MapRoutes),
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        ],
        providers: [
            typescript_events__WEBPACK_IMPORTED_MODULE_2__.Event
        ]
    })
], MapModule);



/***/ }),

/***/ 12687:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.routes.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapRoutes": function() { return /* binding */ MapRoutes; }
/* harmony export */ });
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ 51846);

const MapRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent
            }]
    }
];


/***/ }),

/***/ 79744:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 83315);



let NotificationService = class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title, {
            positionClass: 'toast-top-left'
        });
    }
    showError(message, title) {
        this.toastr.error(message, title, {
            positionClass: 'toast-top-left'
        });
    }
    showInfo(message, title) {
        this.toastr.info(message, title, {
            positionClass: 'toast-top-left'
        });
    }
    showWarning(message, title) {
        this.toastr.warning(message, title, {
            positionClass: 'toast-top-left'
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 15383:
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": function() { return /* binding */ SocketService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 80381);
/* harmony import */ var _configurations_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configurations/url.service */ 96407);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
// En src/app/services/socket.service.ts






let SocketService = class SocketService {
    constructor(_api) {
        this._api = _api;
        this.mqttMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.positionSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    /**
     * Conecta el socket principal para eventos generales y MQTT.
     * Lo ideal es llamar a esta función una vez que el usuario ha iniciado sesión.
     * @param id Un identificador único, como el ID del usuario.
     */
    socketConnect(id) {
        let user = this._api.getUser();
        if (this.socket && this.socket.connected) {
            return;
        }
        // QUITAR EL NAMESPACE '/angular' - conectar al root
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${_configurations_url_service__WEBPACK_IMPORTED_MODULE_1__.URL_SOCKET}`, {
            query: { id, user },
        });
        // Escucha el evento 'mqttMessage' del backend y lo emite a través del Observable
        this.socket.on('mqttMessage', (data) => {
            console.log('Mensaje MQTT recibido en frontend:', data);
            this.mqttMessageSource.next(data);
        });
        // Agregar listeners para depuración
        this.socket.on('connect', () => {
            console.log('Conectado al servidor Socket.IO');
        });
        this.socket.on('disconnect', () => {
            console.log('Desconectado del servidor Socket.IO');
        });
        this.socket.on('error', (error) => {
            console.error('Error en Socket.IO:', error);
        });
    }
    /**
     * Conecta el socket secundario, específico para posiciones.
     * @param id Un identificador único, como el ID del usuario o del seguimiento.
     */
    socketPositionConnect(id) {
        if (this.socketPosition && this.socketPosition.connected) {
            return;
        }
        // QUITAR EL NAMESPACE '/positions' - conectar al root
        this.socketPosition = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${_configurations_url_service__WEBPACK_IMPORTED_MODULE_1__.URL_SOCKET}`, {
            query: { id },
        });
        // Escucha el evento 'user-position' y lo emite a través del Observable
        this.socketPosition.on('user-position', (data) => {
            this.positionSource.next(data);
        });
    }
    // --- MÉTODOS PÚBLICOS PARA USAR EN LOS COMPONENTES ---
    /**
     * Permite a los componentes suscribirse para recibir mensajes MQTT en tiempo real.
     */
    listenForMqttMessages() {
        return this.mqttMessageSource.asObservable();
    }
    /**
     * Permite a los componentes suscribirse para recibir actualizaciones de posición en tiempo real.
     */
    listenForPositions() {
        return this.positionSource.asObservable();
    }
    /**
     * Permite a los componentes enviar una petición al backend para publicar un mensaje MQTT.
     * @param topic El tópico MQTT al que se publicará.
     * @param message El mensaje que se enviará.
     * @param options Opciones adicionales de MQTT (ej: { qos: 2, retain: true }).
     */
    publishMqttMessage(topic, message, options) {
        if (this.socket) {
            console.log('Enviando mensaje MQTT:', { topic, message });
            this.socket.emit('publishToMqtt', { topic, message, options });
        }
    }
    /**
     * Método genérico para emitir cualquier otro evento al socket principal.
     * @param eventName Nombre del evento.
     * @param data Datos a enviar.
     */
    emitEvent(eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    }
    /**
     * Desconectar sockets
     */
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
        if (this.socketPosition) {
            this.socketPosition.disconnect();
        }
    }
};
SocketService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ 47094:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/actions/actions.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title class=\"mat-typography\">{{name}}</h2>\r\n<mat-dialog-content>\r\n  <div class=\"status-container\">\r\n    <div *ngIf=\"connected == null || connected == ''\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"connected == '1'\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">wifi</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>En línea</div>\r\n        <div>{{ connectedTimeAgo }}</div>\r\n        <div>{{ connectedAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"connected != '1' && connected != null && connected != ''\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">wifi</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Fuera de línea</div>\r\n        <div>{{ connectedTimeAgo }}</div>\r\n        <div>{{ connectedAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"powerOutage == null || powerOutage == ''\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"powerOutage == '1'\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">power</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Revisión conectado</div>\r\n        <div>{{ powerOutageTimeAgo }}</div>\r\n        <div>{{ powerOutageAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"powerOutage != '1' && powerOutage != null && powerOutage != ''\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">power</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Revisión desconectado</div>\r\n        <div>{{ powerOutageTimeAgo }}</div>\r\n        <div>{{ powerOutageAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus == null\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus <= threshold && batteryStatus != null\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">battery_alert</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>{{ batteryStatus }}V</div>\r\n        <div>{{ batteryStatusTimeAgo }}</div>\r\n        <div>{{ batteryStatusAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus > threshold && batteryStatus != null\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">battery_alert</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>{{ batteryStatus }}V</div>\r\n        <div>{{ batteryStatusTimeAgo }}</div>\r\n        <div>{{ batteryStatusAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"grid-container\">\r\n    <div class=\"grid-item\" *ngFor=\"let alert of alerts\">\r\n      <button mat-button class=\"custom-mat-button\" (click)=\"sendCommand(alert)\">{{ alert.text }}</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"center-button-container\">\r\n    <button mat-button class=\"custom-mat-button-red\" (click)=\"sendCommand({'value': '0'})\">Apagar</button>\r\n  </div>\r\n</mat-dialog-content>\r\n<div tabindex=\"-1\" cdkFocusInitial></div>\r\n");

/***/ }),

/***/ 17957:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/info-alert/info-alert.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"modal-header1 text-left row mb-1\"> -->\r\n<!--     <h6 class=\"modal-title\">Información alerta</h6> -->\r\n<!--     <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\"> -->\r\n<!--         <i class=\"fa fa-times icon-modal-close\"></i> -->\r\n<!--     </button> -->\r\n<!-- </div> -->\r\n<!--  -->\r\n<!-- <mat-dialog-content class=\"mat-typography\"> -->\r\n<!--     <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\"> -->\r\n<!--         <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> -->\r\n<!--             <div class=\"row\"> -->\r\n<!--                 <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" > -->\r\n<!--                  -->\r\n<!--                     <strong>Usuario</strong><br> -->\r\n<!--                     <p> -->\r\n<!--                         <small>Nombre: <strong>{{ user.name }}</strong></small><br> -->\r\n<!--                         <small>Cédula: <strong>{{ user.ci }}</strong></small><br> -->\r\n<!--                         <small>Teléfono: <strong>{{ user.phone }}</strong></small><br> -->\r\n<!--                         <small>Dirección: <strong>{{ user.address }}</strong></small><br> -->\r\n<!--                     </p> -->\r\n<!--                 </div> -->\r\n<!--                 <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\" style=\"height: 55vh;\" > -->\r\n<!--                     <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [heightE]=\"heightE\" #mapCard></app-map-card> -->\r\n<!--                 </div> -->\r\n<!--             </div> -->\r\n<!--  -->\r\n<!--         </div> -->\r\n<!--          -->\r\n<!--         <div class=\"row\"> -->\r\n<!--             <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" > -->\r\n<!--                 <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\"> -->\r\n<!--                     <mat-label>Motivo de alerta</mat-label> -->\r\n<!--                     <input matInput name=\"comment\" formControlName=\"comment\"> -->\r\n<!--                 </mat-form-field> -->\r\n<!--             </div> -->\r\n<!--  -->\r\n<!--         </div> -->\r\n<!--     </form> -->\r\n<!-- </mat-dialog-content> -->\r\n<!--  -->\r\n<!-- <div mat-dialog-actions align=\"end\" class=\"dialog-footer\"> -->\r\n<!--     <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postComment()\" [disabled]=\"!form.valid\" type=\"button\"> -->\r\n<!--         Guardar  -->\r\n<!--     </button> -->\r\n<!-- </div> -->\r\n\r\n<div class=\"modal-header1 text-left row mb-1\">\r\n  <h6 class=\"modal-title\">Información alerta</h6>\r\n  <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n    <i class=\"fa fa-times icon-modal-close\"></i>\r\n  </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"map-container\">\r\n            <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [heightE]=\"heightE\" #mapCard></app-map-card>\r\n            <div class=\"info-card\">\r\n              <strong>Usuario</strong><br>\r\n              <p>\r\n                <small>Nombre: <strong>{{ user.name }}</strong></small><br>\r\n                <small>Cédula: <strong>{{ user.ci }}</strong></small><br>\r\n                <small>Teléfono: <strong>{{ user.phone }}</strong></small><br>\r\n                <small>Dirección: <strong>{{ user.address }}</strong></small><br>\r\n                <small>Dirección Actual: <strong>{{ user.current_position }}</strong></small><br>\r\n                <a href=\"#\" (click)=\"sendWhatsAppMessage($event)\">\r\n                  <i class=\"fab fa-whatsapp\"></i> Compartir\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n          <mat-label>Motivo de alerta</mat-label>\r\n          <input matInput name=\"comment\" formControlName=\"comment\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n  <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postComment()\" [disabled]=\"!form.valid\" type=\"button\">\r\n    Guardar\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ 92867:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/map.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\" >\r\n                        <strong class=\"h4 title\">SALA DE MONITOREO</strong>\r\n                            <mat-icon title=\"Centrar\" style=\"float: right; cursor: pointer;\" (click)=\"centerMap()\">center_focus_strong</mat-icon>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <div class=\"row\">\r\n                          <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                            <div id=\"map\" class=\"map\">\r\n                                <mat-form-field class=\"col-xs-3 col-sm-3 col-md-3 custom-input\"  appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                                    <mat-label> Teams</mat-label>\r\n                                    <mat-select name=\"value\" formControlName=\"value\" (selectionChange)=\"selected($event.value)\">\r\n                                      <mat-option *ngFor=\"let item of teams\" [value]=\"item._id\">\r\n                                        TEAM - {{ item.name }}\r\n                                      </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n\r\n                                <div id=\"card-alert\" class=\"card\">\r\n                                  <div class=\"card-header\">\r\n                                    <h5 class=\"h6 mb-0 text-center\" style=\"font-weight: bold;\">\r\n                                      Alertas Pendientes\r\n                                      <i *ngIf=\"isLoadingAlerts\" class=\"fas fa-spinner fa-spin\"></i>\r\n                                    </h5>\r\n                                  </div>\r\n\r\n                                  <div class=\"card-body\" >\r\n                                    <div\r\n                                      class=\"timeline timeline-one-side\"\r\n                                      data-timeline-axis-style=\"dashed\"\r\n                                      data-timeline-content=\"axis\"\r\n                                    >\r\n                                      <div class=\"timeline-block\" *ngFor=\"let item of alerts\" style=\"margin-top: -2vh !important;\">\r\n                                        <span class=\"timeline-step badge-warning\" style=\"cursor: pointer;\" title=\"Ver más\" (click)=\"showAlertInfo(item)\">\r\n                                          <mat-icon>notifications_active</mat-icon>\r\n                                          <!-- <img src=\"{{ getTypeAlert(item.type).img }}\" style=\"height: 4vh; width: 4vh;\" alt=\"\"> -->\r\n                                        </span>\r\n              \r\n                                        <div class=\"timeline-content\">\r\n                                          <div class=\"d-flex justify-content-between\">\r\n                                            <div>\r\n                                              <span class=\"text-sm font-weight-bold\">\r\n                                                {{ getTypeAlert(item.type).type }} - \r\n                                                {{ item.access.name }}\r\n                                              </span>\r\n                                              <br>\r\n                                              <small style=\"font-weight: 500;\">{{ item.user.name }}</small>\r\n                                              <!-- <small style=\"font-weight: 500;\">{{ getTypeAlert(item.type).type }}</small> -->\r\n                                            </div>\r\n                          \r\n                                            <div class=\"text-right\">\r\n                                              <small class=\"text-muted\">\r\n                                                <i class=\"fas fa-clock mr-1\"> </i> \r\n                                                {{ item.date | date:'HH:mm' }}\r\n                                              </small>\r\n                                            </div>\r\n                                          </div>\r\n                          \r\n                                         \r\n                                        </div>\r\n                                      </div>\r\n                          \r\n                                    </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n                          </form>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"row\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <h6 class=\"h2 mb-0\">Alertas</h6>\r\n                    </div>\r\n      \r\n                    <div class=\"card-body\" id=\"card-alert\">\r\n                      <div\r\n                        class=\"timeline timeline-one-side\"\r\n                        data-timeline-axis-style=\"dashed\"\r\n                        data-timeline-content=\"axis\"\r\n                      >\r\n                        <div class=\"timeline-block\" *ngFor=\"let item of alerts\">\r\n                          <span class=\"timeline-step badge-success\" style=\"cursor: pointer;\" title=\"Ver más\" (click)=\"showAlertInfo(item)\">\r\n                            <img src=\"{{ getTypeAlert(item.type).img }}\" style=\"height: 4vh; width: 4vh;\" alt=\"\">\r\n                          </span>\r\n\r\n                          <div class=\"timeline-content\">\r\n                            <div class=\" d-flex justify-content-between pt-1\">\r\n                              <div>\r\n                                <span class=\" text-muted text-sm font-weight-bold\">\r\n                                  {{ item.access.name }}\r\n                                </span>\r\n                              </div>\r\n            \r\n                              <div class=\"text-right\">\r\n                                <small class=\"text-muted\">\r\n                                  <i class=\"fas fa-clock mr-1\"> </i> \r\n                                  {{ item.date | date:'HH:mm' }}\r\n                                </small>\r\n                              </div>\r\n                            </div>\r\n            \r\n                            <p class=\" text-sm mt-1 mb-0\">\r\n                              <strong>{{ item.user.name }}</strong><br>\r\n                              <small>{{ getTypeAlert(item.type).type }}</small>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n            \r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n        </div>\r\n\r\n        <audio #audioPlayer>\r\n          <source src=\"assets/notification.mp3\" type=\"audio/mp3\">\r\n          Tu navegador no soporta la reproducción de audio.\r\n        </audio>\r\n    </div>\r\n</div>\r\n\r\n<!-- <caption>\r\n  <button id=\"addBtn\" class=\"btn btn-icon btn-round btn-twitter\">\r\n      <i  class=\"fa fa-chevron-up\"></i>\r\n  </button>\r\n</caption> -->\r\n");

/***/ }),

/***/ 33325:
/*!**********************************************************!*\
  !*** ./src/app/pages/map/actions/actions.component.scss ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "@charset \"UTF-8\";\n.btn-actions {\n  height: 100% !important;\n  width: 120%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center !important;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  gap: 10px;\n}\n.grid-item {\n  display: flex;\n  justify-content: center;\n}\nbutton[mat-button] {\n  width: 100%;\n}\n.custom-mat-button {\n  border: 2px solid #ADD8E6 !important;\n  border-radius: 8px !important;\n  background-color: transparent !important;\n}\n.custom-mat-button:hover {\n  background-color: #ADD8E6 !important;\n  color: white !important;\n}\n.custom-mat-button-red {\n  border: 2px solid #E57373 !important;\n  border-radius: 8px !important;\n  background-color: transparent !important;\n}\n.custom-mat-button-red:hover {\n  background-color: #E57373 !important;\n  color: white !important;\n}\n.center-button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.status-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 10px;\n  gap: 10px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.status-item {\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  /* Ajusta el ancho según tus necesidades */\n}\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0FBRUY7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUVGO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBRUY7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUVGO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUFhLDBDQUFBO0FBR2Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHRiIsImZpbGUiOiJhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1hY3Rpb25zIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTBweDtcbn1cblxuLmdyaWQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b25bbWF0LWJ1dHRvbl0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0FERDhFNiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FERDhFNiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uLXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNTczNzMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tbWF0LWJ1dHRvbi1yZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU3MzczICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5zdGF0dXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnN0YXR1cy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 51028:
/*!****************************************************************!*\
  !*** ./src/app/pages/map/info-alert/info-alert.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = ".map-container {\n  position: relative;\n  width: 100%;\n  height: 55vh;\n}\n\n.info-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: white;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJpbmZvLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 97916:
/*!**********************************************!*\
  !*** ./src/app/pages/map/map.component.scss ***!
  \**********************************************/
/***/ (function(module) {

module.exports = "@charset \"UTF-8\";\n#map {\n  width: 100%;\n  height: 75vh !important;\n  position: relative;\n}\n#card-alert {\n  width: 35vh;\n  height: 30vh;\n  position: absolute;\n  background-color: #fff;\n  opacity: 0.8;\n  right: 2vh;\n  bottom: -2vh;\n  /* ajusta la posición vertical según tu preferencia */\n  z-index: 1000;\n  /* ajusta el índice z para que el input esté encima del mapa */\n}\n#card-alert > .card-body {\n  height: 10vh !important;\n  overflow-y: auto !important;\n}\n.custom-input {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  right: 10px;\n  top: 10px;\n  /* ajusta la posición vertical según tu preferencia */\n  z-index: 1000;\n  /* ajusta el índice z para que el input esté encima del mapa */\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n  border: none !important;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFBYyxxREFBQTtFQUVkLGFBQUE7RUFBZSw4REFBQTtBQUNqQjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUFXLHFEQUFBO0VBRVgsYUFBQTtFQUFlLDhEQUFBO0FBQWpCO0FBR0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjYXJkLWFsZXJ0IHtcbiAgd2lkdGg6IDM1dmg7XG4gIGhlaWdodDogMzB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIHJpZ2h0OiAydmg7XG4gIGJvdHRvbTogLTJ2aDtcbiAgLyogYWp1c3RhIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbCBzZWfDum4gdHUgcHJlZmVyZW5jaWEgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogYWp1c3RhIGVsIMOtbmRpY2UgeiBwYXJhIHF1ZSBlbCBpbnB1dCBlc3TDqSBlbmNpbWEgZGVsIG1hcGEgKi9cbn1cbiNjYXJkLWFsZXJ0ID4gLmNhcmQtYm9keSB7XG4gIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIC8qIGFqdXN0YSBsYSBwb3NpY2nDs24gdmVydGljYWwgc2Vnw7puIHR1IHByZWZlcmVuY2lhICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGFqdXN0YSBlbCDDrW5kaWNlIHogcGFyYSBxdWUgZWwgaW5wdXQgZXN0w6kgZW5jaW1hIGRlbCBtYXBhICovXG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59Il19 */";

/***/ }),

/***/ 6888:
/*!***************************************!*\
  !*** ./node_modules/ol/style/Text.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fill.js */ 49040);
/* harmony import */ var _TextPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextPlacement.js */ 46982);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../size.js */ 41666);
/**
 * @module ol/style/Text
 */



/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 */
var DEFAULT_FILL_COLOR = '#333';
/**
 * @typedef {Object} Options
 * @property {string} [font] Font style as CSS 'font' value, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font. Default is '10px sans-serif'
 * @property {number} [maxAngle=Math.PI/4] When `placement` is set to `'line'`, allow a maximum angle between adjacent characters.
 * The expected value is in radians, and the default is 45° (`Math.PI / 4`).
 * @property {number} [offsetX=0] Horizontal text offset in pixels. A positive will shift the text right.
 * @property {number} [offsetY=0] Vertical text offset in pixels. A positive will shift the text down.
 * @property {boolean} [overflow=false] For polygon labels or when `placement` is set to `'line'`, allow text to exceed
 * the width of the polygon at the label position or the length of the path that it follows.
 * @property {import("./TextPlacement.js").default|string} [placement='point'] Text placement.
 * @property {number|import("../size.js").Size} [scale] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the text with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {string|Array<string>} [text] Text content or rich text content. For plain text provide a string, which can
 * contain line breaks (`\n`). For rich text provide an array of text/font tuples. A tuple consists of the text to
 * render and the font to use (or `''` to use the text style's font). A line break has to be a separate tuple (i.e. `'\n', ''`).
 * **Example:** `['foo', 'bold 10px sans-serif', ' bar', 'italic 10px sans-serif', ' baz', '']` will yield "**foo** *bar* baz".
 * **Note:** Rich text is not supported for the immediate rendering API.
 * @property {string} [textAlign] Text alignment. Possible values: 'left', 'right', 'center', 'end' or 'start'.
 * Default is 'center' for `placement: 'point'`. For `placement: 'line'`, the default is to let the renderer choose a
 * placement where `maxAngle` is not exceeded.
 * @property {string} [justify] Text justification within the text box.
 * If not set, text is justified towards the `textAlign` anchor.
 * Otherwise, use options `'left'`, `'center'`, or `'right'` to justify the text within the text box.
 * **Note:** `justify` is ignored for immediate rendering and also for `placement: 'line'`.
 * @property {string} [textBaseline='middle'] Text base line. Possible values: 'bottom', 'top', 'middle', 'alphabetic',
 * 'hanging', 'ideographic'.
 * @property {import("./Fill.js").default} [fill] Fill style. If none is provided, we'll use a dark fill-style (#333).
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Fill.js").default} [backgroundFill] Fill style for the text background when `placement` is
 * `'point'`. Default is no fill.
 * @property {import("./Stroke.js").default} [backgroundStroke] Stroke style for the text background  when `placement`
 * is `'point'`. Default is no stroke.
 * @property {Array<number>} [padding=[0, 0, 0, 0]] Padding in pixels around the text for decluttering and background. The order of
 * values in the array is `[top, right, bottom, left]`.
 */
/**
 * @classdesc
 * Set text style for vector features.
 * @api
 */
var Text = /** @class */ (function () {
    /**
     * @param {Options} [opt_options] Options.
     */
    function Text(opt_options) {
        var options = opt_options || {};
        /**
         * @private
         * @type {string|undefined}
         */
        this.font_ = options.font;
        /**
         * @private
         * @type {number|undefined}
         */
        this.rotation_ = options.rotation;
        /**
         * @private
         * @type {boolean|undefined}
         */
        this.rotateWithView_ = options.rotateWithView;
        /**
         * @private
         * @type {number|import("../size.js").Size|undefined}
         */
        this.scale_ = options.scale;
        /**
         * @private
         * @type {import("../size.js").Size}
         */
        this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(options.scale !== undefined ? options.scale : 1);
        /**
         * @private
         * @type {string|Array<string>|undefined}
         */
        this.text_ = options.text;
        /**
         * @private
         * @type {string|undefined}
         */
        this.textAlign_ = options.textAlign;
        /**
         * @private
         * @type {string|undefined}
         */
        this.justify_ = options.justify;
        /**
         * @private
         * @type {string|undefined}
         */
        this.textBaseline_ = options.textBaseline;
        /**
         * @private
         * @type {import("./Fill.js").default}
         */
        this.fill_ =
            options.fill !== undefined
                ? options.fill
                : new _Fill_js__WEBPACK_IMPORTED_MODULE_1__.default({ color: DEFAULT_FILL_COLOR });
        /**
         * @private
         * @type {number}
         */
        this.maxAngle_ =
            options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;
        /**
         * @private
         * @type {import("./TextPlacement.js").default|string}
         */
        this.placement_ =
            options.placement !== undefined ? options.placement : _TextPlacement_js__WEBPACK_IMPORTED_MODULE_2__.default.POINT;
        /**
         * @private
         * @type {boolean}
         */
        this.overflow_ = !!options.overflow;
        /**
         * @private
         * @type {import("./Stroke.js").default}
         */
        this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        /**
         * @private
         * @type {number}
         */
        this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;
        /**
         * @private
         * @type {number}
         */
        this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;
        /**
         * @private
         * @type {import("./Fill.js").default}
         */
        this.backgroundFill_ = options.backgroundFill
            ? options.backgroundFill
            : null;
        /**
         * @private
         * @type {import("./Stroke.js").default}
         */
        this.backgroundStroke_ = options.backgroundStroke
            ? options.backgroundStroke
            : null;
        /**
         * @private
         * @type {Array<number>|null}
         */
        this.padding_ = options.padding === undefined ? null : options.padding;
    }
    /**
     * Clones the style.
     * @return {Text} The cloned style.
     * @api
     */
    Text.prototype.clone = function () {
        var scale = this.getScale();
        return new Text({
            font: this.getFont(),
            placement: this.getPlacement(),
            maxAngle: this.getMaxAngle(),
            overflow: this.getOverflow(),
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            text: this.getText(),
            textAlign: this.getTextAlign(),
            justify: this.getJustify(),
            textBaseline: this.getTextBaseline(),
            fill: this.getFill() ? this.getFill().clone() : undefined,
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            offsetX: this.getOffsetX(),
            offsetY: this.getOffsetY(),
            backgroundFill: this.getBackgroundFill()
                ? this.getBackgroundFill().clone()
                : undefined,
            backgroundStroke: this.getBackgroundStroke()
                ? this.getBackgroundStroke().clone()
                : undefined,
            padding: this.getPadding() || undefined,
        });
    };
    /**
     * Get the `overflow` configuration.
     * @return {boolean} Let text overflow the length of the path they follow.
     * @api
     */
    Text.prototype.getOverflow = function () {
        return this.overflow_;
    };
    /**
     * Get the font name.
     * @return {string|undefined} Font.
     * @api
     */
    Text.prototype.getFont = function () {
        return this.font_;
    };
    /**
     * Get the maximum angle between adjacent characters.
     * @return {number} Angle in radians.
     * @api
     */
    Text.prototype.getMaxAngle = function () {
        return this.maxAngle_;
    };
    /**
     * Get the label placement.
     * @return {import("./TextPlacement.js").default|string} Text placement.
     * @api
     */
    Text.prototype.getPlacement = function () {
        return this.placement_;
    };
    /**
     * Get the x-offset for the text.
     * @return {number} Horizontal text offset.
     * @api
     */
    Text.prototype.getOffsetX = function () {
        return this.offsetX_;
    };
    /**
     * Get the y-offset for the text.
     * @return {number} Vertical text offset.
     * @api
     */
    Text.prototype.getOffsetY = function () {
        return this.offsetY_;
    };
    /**
     * Get the fill style for the text.
     * @return {import("./Fill.js").default} Fill style.
     * @api
     */
    Text.prototype.getFill = function () {
        return this.fill_;
    };
    /**
     * Determine whether the text rotates with the map.
     * @return {boolean|undefined} Rotate with map.
     * @api
     */
    Text.prototype.getRotateWithView = function () {
        return this.rotateWithView_;
    };
    /**
     * Get the text rotation.
     * @return {number|undefined} Rotation.
     * @api
     */
    Text.prototype.getRotation = function () {
        return this.rotation_;
    };
    /**
     * Get the text scale.
     * @return {number|import("../size.js").Size|undefined} Scale.
     * @api
     */
    Text.prototype.getScale = function () {
        return this.scale_;
    };
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    Text.prototype.getScaleArray = function () {
        return this.scaleArray_;
    };
    /**
     * Get the stroke style for the text.
     * @return {import("./Stroke.js").default} Stroke style.
     * @api
     */
    Text.prototype.getStroke = function () {
        return this.stroke_;
    };
    /**
     * Get the text to be rendered.
     * @return {string|Array<string>|undefined} Text.
     * @api
     */
    Text.prototype.getText = function () {
        return this.text_;
    };
    /**
     * Get the text alignment.
     * @return {string|undefined} Text align.
     * @api
     */
    Text.prototype.getTextAlign = function () {
        return this.textAlign_;
    };
    /**
     * Get the justification.
     * @return {string|undefined} Justification.
     * @api
     */
    Text.prototype.getJustify = function () {
        return this.justify_;
    };
    /**
     * Get the text baseline.
     * @return {string|undefined} Text baseline.
     * @api
     */
    Text.prototype.getTextBaseline = function () {
        return this.textBaseline_;
    };
    /**
     * Get the background fill style for the text.
     * @return {import("./Fill.js").default} Fill style.
     * @api
     */
    Text.prototype.getBackgroundFill = function () {
        return this.backgroundFill_;
    };
    /**
     * Get the background stroke style for the text.
     * @return {import("./Stroke.js").default} Stroke style.
     * @api
     */
    Text.prototype.getBackgroundStroke = function () {
        return this.backgroundStroke_;
    };
    /**
     * Get the padding for the text.
     * @return {Array<number>|null} Padding.
     * @api
     */
    Text.prototype.getPadding = function () {
        return this.padding_;
    };
    /**
     * Set the `overflow` property.
     *
     * @param {boolean} overflow Let text overflow the path that it follows.
     * @api
     */
    Text.prototype.setOverflow = function (overflow) {
        this.overflow_ = overflow;
    };
    /**
     * Set the font.
     *
     * @param {string|undefined} font Font.
     * @api
     */
    Text.prototype.setFont = function (font) {
        this.font_ = font;
    };
    /**
     * Set the maximum angle between adjacent characters.
     *
     * @param {number} maxAngle Angle in radians.
     * @api
     */
    Text.prototype.setMaxAngle = function (maxAngle) {
        this.maxAngle_ = maxAngle;
    };
    /**
     * Set the x offset.
     *
     * @param {number} offsetX Horizontal text offset.
     * @api
     */
    Text.prototype.setOffsetX = function (offsetX) {
        this.offsetX_ = offsetX;
    };
    /**
     * Set the y offset.
     *
     * @param {number} offsetY Vertical text offset.
     * @api
     */
    Text.prototype.setOffsetY = function (offsetY) {
        this.offsetY_ = offsetY;
    };
    /**
     * Set the text placement.
     *
     * @param {import("./TextPlacement.js").default|string} placement Placement.
     * @api
     */
    Text.prototype.setPlacement = function (placement) {
        this.placement_ = placement;
    };
    /**
     * Set whether to rotate the text with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    Text.prototype.setRotateWithView = function (rotateWithView) {
        this.rotateWithView_ = rotateWithView;
    };
    /**
     * Set the fill.
     *
     * @param {import("./Fill.js").default} fill Fill style.
     * @api
     */
    Text.prototype.setFill = function (fill) {
        this.fill_ = fill;
    };
    /**
     * Set the rotation.
     *
     * @param {number|undefined} rotation Rotation.
     * @api
     */
    Text.prototype.setRotation = function (rotation) {
        this.rotation_ = rotation;
    };
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size|undefined} scale Scale.
     * @api
     */
    Text.prototype.setScale = function (scale) {
        this.scale_ = scale;
        this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(scale !== undefined ? scale : 1);
    };
    /**
     * Set the stroke.
     *
     * @param {import("./Stroke.js").default} stroke Stroke style.
     * @api
     */
    Text.prototype.setStroke = function (stroke) {
        this.stroke_ = stroke;
    };
    /**
     * Set the text.
     *
     * @param {string|Array<string>|undefined} text Text.
     * @api
     */
    Text.prototype.setText = function (text) {
        this.text_ = text;
    };
    /**
     * Set the text alignment.
     *
     * @param {string|undefined} textAlign Text align.
     * @api
     */
    Text.prototype.setTextAlign = function (textAlign) {
        this.textAlign_ = textAlign;
    };
    /**
     * Set the justification.
     *
     * @param {string|undefined} justify Justification.
     * @api
     */
    Text.prototype.setJustify = function (justify) {
        this.justify_ = justify;
    };
    /**
     * Set the text baseline.
     *
     * @param {string|undefined} textBaseline Text baseline.
     * @api
     */
    Text.prototype.setTextBaseline = function (textBaseline) {
        this.textBaseline_ = textBaseline;
    };
    /**
     * Set the background fill.
     *
     * @param {import("./Fill.js").default} fill Fill style.
     * @api
     */
    Text.prototype.setBackgroundFill = function (fill) {
        this.backgroundFill_ = fill;
    };
    /**
     * Set the background stroke.
     *
     * @param {import("./Stroke.js").default} stroke Stroke style.
     * @api
     */
    Text.prototype.setBackgroundStroke = function (stroke) {
        this.backgroundStroke_ = stroke;
    };
    /**
     * Set the padding (`[top, right, bottom, left]`).
     *
     * @param {Array<number>|null} padding Padding.
     * @api
     */
    Text.prototype.setPadding = function (padding) {
        this.padding_ = padding;
    };
    return Text;
}());
/* harmony default export */ __webpack_exports__["default"] = (Text);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_map_map_module_ts-es2020.js.map