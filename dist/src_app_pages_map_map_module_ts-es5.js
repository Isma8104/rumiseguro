(function () {
  "use strict";

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_map_map_module_ts"], {
    /***/
    76082:
    /*!***********************************************!*\
      !*** ./node_modules/timeago.js/esm/format.js ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "format": function format() {
          return (
            /* binding */
            _format
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils/date */
      1929);
      /* harmony import */


      var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register */
      43983);
      /**
       * format a TDate into string
       * @param date
       * @param locale
       * @param opts
       */


      var _format = function _format(date, locale, opts) {
        // diff seconds
        var sec = (0, _utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate); // format it with locale

        return (0, _utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0, _register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));
      };
      /***/

    },

    /***/
    96274:
    /*!**********************************************!*\
      !*** ./node_modules/timeago.js/esm/index.js ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "format": function format() {
          return (
            /* reexport safe */
            _format__WEBPACK_IMPORTED_MODULE_3__.format
          );
        },

        /* harmony export */
        "render": function render() {
          return (
            /* reexport safe */
            _realtime__WEBPACK_IMPORTED_MODULE_4__.render
          );
        },

        /* harmony export */
        "cancel": function cancel() {
          return (
            /* reexport safe */
            _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel
          );
        },

        /* harmony export */
        "register": function register() {
          return (
            /* reexport safe */
            _register__WEBPACK_IMPORTED_MODULE_2__.register
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lang/en_US */
      94921);
      /* harmony import */


      var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lang/zh_CN */
      56937);
      /* harmony import */


      var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register */
      43983);
      /* harmony import */


      var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./format */
      76082);
      /* harmony import */


      var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./realtime */
      88080);
      /**
       * Created by hustcc on 18/5/20.
       * Contract: i@hust.cc
       */


      (0, _register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);
      (0, _register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /***/
    },

    /***/
    94921:
    /*!***************************************************!*\
      !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });

      var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
      /* harmony default export */

      function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
        if (idx === 0) return ['just now', 'right now'];
        var unit = EN_US[Math.floor(idx / 2)];
        if (diff > 1) unit += 's';
        return [diff + " " + unit + " ago", "in " + diff + " " + unit];
      }
      /***/

    },

    /***/
    56937:
    /*!***************************************************!*\
      !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });

      var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
      /* harmony default export */

      function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
        if (idx === 0) return ['刚刚', '片刻后'];
        var unit = ZH_CN[~~(idx / 2)];
        return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
      }
      /***/

    },

    /***/
    88080:
    /*!*************************************************!*\
      !*** ./node_modules/timeago.js/esm/realtime.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cancel": function cancel() {
          return (
            /* binding */
            _cancel
          );
        },

        /* harmony export */
        "render": function render() {
          return (
            /* binding */
            _render
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils/dom */
      91268);
      /* harmony import */


      var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils/date */
      1929);
      /* harmony import */


      var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register */
      43983); // all realtime timer


      var TIMER_POOL = {};
      /**
       * clear a timer from pool
       * @param tid
       */

      var clear = function clear(tid) {
        clearTimeout(tid);
        delete TIMER_POOL[tid];
      }; // run with timer(setTimeout)


      function run(node, date, localeFunc, opts) {
        // clear the node's exist timer
        clear((0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
        var relativeDate = opts.relativeDate,
            minInterval = opts.minInterval; // get diff seconds

        var diff = (0, _utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate); // render

        node.innerText = (0, _utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);
        var tid = setTimeout(function () {
          run(node, date, localeFunc, opts);
        }, Math.min(Math.max((0, _utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff)); // there is no need to save node in object. Just save the key

        TIMER_POOL[tid] = 0;
        (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);
      }
      /**
       * cancel a timer or all timers
       * @param node - node hosting the time string
       */


      function _cancel(node) {
        // cancel one
        if (node) clear((0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node)); // cancel all
        // @ts-ignore
        else Object.keys(TIMER_POOL).forEach(clear);
      }
      /**
       * render a dom realtime
       * @param nodes
       * @param locale
       * @param opts
       */


      function _render(nodes, locale, opts) {
        // by .length
        // @ts-ignore
        var nodeList = nodes.length ? nodes : [nodes];
        nodeList.forEach(function (node) {
          run(node, (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0, _register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});
        });
        return nodeList;
      }
      /***/

    },

    /***/
    43983:
    /*!*************************************************!*\
      !*** ./node_modules/timeago.js/esm/register.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "register": function register() {
          return (
            /* binding */
            _register
          );
        },

        /* harmony export */
        "getLocale": function getLocale() {
          return (
            /* binding */
            _getLocale
          );
        }
        /* harmony export */

      });
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

      var _register = function _register(locale, func) {
        Locales[locale] = func;
      };
      /**
       * get a locale, default is en_US
       * @param locale
       * @returns {*}
       */


      var _getLocale = function _getLocale(locale) {
        return Locales[locale] || Locales['en_US'];
      };
      /***/

    },

    /***/
    1929:
    /*!***************************************************!*\
      !*** ./node_modules/timeago.js/esm/utils/date.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "toDate": function toDate() {
          return (
            /* binding */
            _toDate
          );
        },

        /* harmony export */
        "formatDiff": function formatDiff() {
          return (
            /* binding */
            _formatDiff
          );
        },

        /* harmony export */
        "diffSec": function diffSec() {
          return (
            /* binding */
            _diffSec
          );
        },

        /* harmony export */
        "nextInterval": function nextInterval() {
          return (
            /* binding */
            _nextInterval
          );
        }
        /* harmony export */

      });
      /**
       * Created by hustcc on 18/5/20.
       * Contract: i@hust.cc
       */


      var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
      /**
       * format Date / string / timestamp to timestamp
       * @param input
       * @returns {*}
       */

      function _toDate(input) {
        if (input instanceof Date) return input; // @ts-ignore

        if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
        input = (input || '' // @ts-ignore
        ).trim().replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/').replace(/-/, '/').replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400

        return new Date(input);
      }
      /**
       * format the diff second to *** time ago, with setting locale
       * @param diff
       * @param localeFunc
       * @returns
       */


      function _formatDiff(diff, localeFunc) {
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
        if (diff > (idx === 0 ? 9 : 1)) idx += 1;
        return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
      }
      /**
       * calculate the diff second between date to be formatted an now date.
       * @param date
       * @param relativeDate
       * @returns {number}
       */


      function _diffSec(date, relativeDate) {
        var relDate = relativeDate ? _toDate(relativeDate) : new Date();
        return (+relDate - +_toDate(date)) / 1000;
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


      function _nextInterval(diff) {
        var rst = 1,
            i = 0,
            d = Math.abs(diff);

        for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
          diff /= SEC_ARRAY[i];
          rst *= SEC_ARRAY[i];
        }

        d = d % rst;
        d = d ? rst - d : rst;
        return Math.ceil(d);
      }
      /***/

    },

    /***/
    91268:
    /*!**************************************************!*\
      !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getDateAttribute": function getDateAttribute() {
          return (
            /* binding */
            _getDateAttribute
          );
        },

        /* harmony export */
        "setTimerId": function setTimerId() {
          return (
            /* binding */
            _setTimerId
          );
        },

        /* harmony export */
        "getTimerId": function getTimerId() {
          return (
            /* binding */
            _getTimerId
          );
        }
        /* harmony export */

      });

      var ATTR_TIMEAGO_TID = 'timeago-id';
      /**
       * get the datetime attribute, `datetime` are supported.
       * @param node
       * @returns {*}
       */

      function _getDateAttribute(node) {
        return node.getAttribute('datetime');
      }
      /**
       * set the node attribute, native DOM
       * @param node
       * @param timerId
       * @returns {*}
       */


      function _setTimerId(node, timerId) {
        // @ts-ignore
        node.setAttribute(ATTR_TIMEAGO_TID, timerId);
      }
      /**
       * get the timer id
       * @param node
       */


      function _getTimerId(node) {
        return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
      }
      /***/

    },

    /***/
    84801:
    /*!************************************************!*\
      !*** ./node_modules/timeago.js/lib/lang/es.js ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function default_1(number, index) {
        return [['justo ahora', 'en un rato'], ['hace %s segundos', 'en %s segundos'], ['hace 1 minuto', 'en 1 minuto'], ['hace %s minutos', 'en %s minutos'], ['hace 1 hora', 'en 1 hora'], ['hace %s horas', 'en %s horas'], ['hace 1 día', 'en 1 día'], ['hace %s días', 'en %s días'], ['hace 1 semana', 'en 1 semana'], ['hace %s semanas', 'en %s semanas'], ['hace 1 mes', 'en 1 mes'], ['hace %s meses', 'en %s meses'], ['hace 1 año', 'en 1 año'], ['hace %s años', 'en %s años']][index];
      }

      exports["default"] = default_1;
      /***/
    },

    /***/
    73384:
    /*!********************************************************!*\
      !*** ./src/app/pages/map/actions/actions.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsComponent": function ActionsComponent() {
          return (
            /* binding */
            _ActionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_actions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./actions.component.html */
      47094);
      /* harmony import */


      var _actions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions.component.scss */
      33325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/socket.service */
      15383);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! typescript.events */
      25260);
      /* harmony import */


      var timeago_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! timeago.js */
      96274);
      /* harmony import */


      var timeago_js_lib_lang_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! timeago.js/lib/lang/es */
      84801); // ELIMINA: import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';
      // AGREGA:


      var _ActionsComponent = /*#__PURE__*/function () {
        function ActionsComponent(dialogRef, dialog, data, events, // ELIMINA: private mqttService: MqttServiceService,
        // AGREGA:
        socketService, apiService) {
          _classCallCheck(this, ActionsComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this.events = events;
          this.socketService = socketService;
          this.apiService = apiService;
          this.name = '';
          this.identifier = '';
          this.alerts = [{
            text: 'SOS',
            value: '1'
          }, {
            text: 'SOSPECHOSO',
            value: '2'
          }, {
            text: 'INUNDACIÓN',
            value: '6'
          }, {
            text: 'TERREMOTO',
            value: '7'
          }, {
            text: 'DISUASIVA',
            value: '10'
          }, {
            text: 'LIBADORES',
            value: '11'
          }, {
            text: 'EXTORSIONADOR',
            value: '12'
          }, {
            text: 'P0',
            value: '13'
          }, {
            text: 'P1',
            value: '14'
          }, {
            text: 'P2',
            value: '15'
          }];
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
          (0, timeago_js__WEBPACK_IMPORTED_MODULE_5__.register)('es', timeago_js_lib_lang_es__WEBPACK_IMPORTED_MODULE_6__["default"]);
          this.name = data.name;
          this.identifier = data.identifier;
        }

        return _createClass(ActionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLastStats(); // CONECTA EL SOCKET AL INICIAR EL COMPONENTE

            this.socketService.socketConnect("actions-".concat(this.identifier));
          }
        }, {
          key: "getLastStats",
          value: function getLastStats() {
            var _this2 = this;

            this.apiService.getCentralInformationLast('battery-status', this.identifier).subscribe(function (res) {
              _this2.batteryStatus = res.boxStats[0].batteryStatus;
              _this2.batteryStatusAt = new Date(res.boxStats[0].createdAt);
              _this2.batteryStatusTimeAgo = (0, timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(_this2.batteryStatusAt, 'es');
            });
            this.apiService.getCentralInformationLast('sensor-status', this.identifier).subscribe(function (res) {
              console.log('sensor status', res);
            });
            this.apiService.getCentralInformationLast('power-outage', this.identifier).subscribe(function (res) {
              _this2.powerOutage = res.boxStats[0].powerOutage;
              _this2.powerOutageAt = new Date(res.boxStats[0].createdAt);
              _this2.powerOutageTimeAgo = (0, timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(_this2.powerOutageAt, 'es');
            });
            this.apiService.getCentralInformationLast('connected', this.identifier).subscribe(function (res) {
              _this2.connected = res.boxStats[0].connected;
              _this2.connectedAt = new Date(res.boxStats[0].createdAt);
              _this2.connectedTimeAgo = (0, timeago_js__WEBPACK_IMPORTED_MODULE_5__.format)(_this2.connectedAt, 'es');
            });
          }
        }, {
          key: "sendCommand",
          value: function sendCommand(payload) {
            // REEMPLAZA LA PUBLICACIÓN DIRECTA MQTT POR SOCKET.IO
            // this.mqttService.publishToTopic(`alarma/${this.identifier}`, payload.value);
            // USA EL SOCKET SERVICE PARA PUBLICAR A TRAVÉS DEL BACKEND
            this.socketService.publishMqttMessage("alarma/".concat(this.identifier), payload.value, {
              qos: 1,
              retain: true
            });
            console.log("Comando enviado: alarma/".concat(this.identifier, " = ").concat(payload.value)); // this.close('alert');
          }
        }, {
          key: "close",
          value: function close(opt) {
            this.dialogRef.close({
              opt: opt
            });
          }
        }]);
      }();

      _ActionsComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA]
          }]
        }, {
          type: typescript_events__WEBPACK_IMPORTED_MODULE_4__.Event
        }, {
          type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _ActionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-actions',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_actions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ActionsComponent);
      /***/
    },

    /***/
    28990:
    /*!**************************************************************!*\
      !*** ./src/app/pages/map/info-alert/info-alert.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoAlertsComponent": function InfoAlertsComponent() {
          return (
            /* binding */
            _InfoAlertsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info-alert.component.html */
      17957);
      /* harmony import */


      var _info_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./info-alert.component.scss */
      51028);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/loading/loader */
      81534);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/socket.service */
      15383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__); // MEJORADO: Se añade OnDestroy para la limpieza de suscripciones


      var _InfoAlertsComponent = /*#__PURE__*/function () {
        function InfoAlertsComponent(dialogRef, dialog, data, fb, api, _socket) {
          _classCallCheck(this, InfoAlertsComponent);

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

        return _createClass(InfoAlertsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
            this.getUserPosition(this.user._id); // SOLUCIÓN: Conectar solo el socket principal (ya que ambos eventos vienen por el mismo socket)

            this._socket.socketConnect(this.user._id); // Empezamos a escuchar los datos en tiempo real


            this.listenForRealtimeData();
          } // MEJORADO: Un solo método para manejar todas las suscripciones de datos en tiempo real

        }, {
          key: "listenForRealtimeData",
          value: function listenForRealtimeData() {
            var _this3 = this;

            // 1. Escuchar actualizaciones de posición
            this.positionSubscription = this._socket.listenForPositions().subscribe(function (data) {
              console.log("RECIBO DATA DE POSICIÓN:", data);

              if (data && data.positions && data.positions.length > 0) {
                _this3.coordinates.push({
                  lat: data.positions[0].lat,
                  lng: data.positions[0].lng
                });

                if (_this3.mapCard) {
                  _this3.mapCard.plotRoute(_this3.coordinates);
                }
              }
            }); // 2. Escuchar mensajes MQTT

            this.mqttSubscription = this._socket.listenForMqttMessages().subscribe(function (data) {
              console.log("RECIBO DATA DE MQTT:", data); // Aquí puedes reaccionar a mensajes MQTT específicos

              if (data.topic === "alarma/".concat(_this3.user.access) && data.message === 'F') {
                _this3.showAlert('info', 'Alarma Desactivada', 'El usuario ha desactivado la alarma remotamente.', 'btn btn-info');
              }
            });
          }
        }, {
          key: "postComment",
          value: function postComment() {
            var _this4 = this;

            (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.startLoading)();
            this.api.putAlertHeeded(this.idAlert, {
              description: this.form.value.comment,
              administrator: this.getUser(),
              replyDate: new Date()
            }).subscribe(function (_) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.finishLoading)();

              _this4.showAlert('success', 'Correcto', 'Alerta atendida correctamente', 'btn btn-info'); // Publicar mensaje MQTT para apagar alarma


              var topic = "alarma/".concat(_this4.user.access);
              var message = 'F';

              _this4._socket.publishMqttMessage(topic, message, {
                qos: 2,
                retain: true
              });
            }, function (_) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_3__.finishLoading)();

              _this4.showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Limpiar suscripciones
            if (this.positionSubscription) {
              this.positionSubscription.unsubscribe();
            }

            if (this.mqttSubscription) {
              this.mqttSubscription.unsubscribe();
            }
          }
        }, {
          key: "convertCoordsToAddress",
          value: function convertCoordsToAddress() {
            var _this5 = this;

            if (this.lastPosition && this.lastPosition.lat && this.lastPosition.lng) {
              this.api.getAddressFromCoords(Number(this.lastPosition.lat), Number(this.lastPosition.lng)).subscribe(function (resp) {
                _this5.user['current_position'] = resp.address['road'];
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "sendWhatsAppMessage",
          value: function sendWhatsAppMessage(event) {
            event.preventDefault();
            var googleMapsLink = "https://www.google.com/maps/search/?api=1&query=".concat(this.lastPosition.lat, ",").concat(this.lastPosition.lng);
            var message = "Informaci\xF3n:\n\nNombre: ".concat(this.user.name, "\nC\xE9dula: ").concat(this.user.ci, "\nTel\xE9fono: ").concat(this.user.phone, "\nDirecci\xF3n: ").concat(this.user.address, "\nUbicaci\xF3n: ").concat(googleMapsLink);
            var whatsappUrl = "https://wa.me/?text=".concat(encodeURIComponent(message));
            window.open(whatsappUrl, '_blank');
          }
        }, {
          key: "getUserPosition",
          value: function getUserPosition(user) {
            var _this6 = this;

            this.api.getUserPosition(user).subscribe(function (resp) {
              var position = resp.body['position'];
              _this6.lastPosition = position;

              _this6.convertCoordsToAddress();
            }, function (err) {
              console.log("ERR UP: ", err);
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.form = this.fb.group({
              comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
            });
          }
        }, {
          key: "close",
          value: function close() {
            var dialogResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.dialogRef.close(dialogResult);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return localStorage.getItem('id-sh');
          }
        }, {
          key: "handleCoordinates",
          value: function handleCoordinates(event) {
            console.log('Received coordinates:', event);
          }
        }, {
          key: "showAlert",
          value: function showAlert(type, title, text, classBtn) {
            var _this = this;

            return (0, C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                      title: title,
                      text: text,
                      type: type,
                      buttonsStyling: false,
                      confirmButtonClass: classBtn,
                      allowOutsideClick: false
                    }).then(function (data) {
                      if (data.value) {
                        if (type !== 'info' && type !== 'warning') {
                          _this.close('close');
                        }
                      }
                    });

                  case 1:
                    return _context.a(2, _context.v);
                }
              }, _callee);
            }))();
          }
        }]);
      }();

      _InfoAlertsComponent.ctorParameters = function () {
        return [{
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
      };

      _InfoAlertsComponent.propDecorators = {
        mapCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['mapCard']
        }]
      };
      _InfoAlertsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-info-alerts',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__]
      })], _InfoAlertsComponent);
      /***/
    },

    /***/
    51846:
    /*!********************************************!*\
      !*** ./src/app/pages/map/map.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapComponent": function MapComponent() {
          return (
            /* binding */
            _MapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./map.component.html */
      92867);
      /* harmony import */


      var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./map.component.scss */
      97916);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ol_Map__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ol/Map */
      65835);
      /* harmony import */


      var ol_View__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ol/View */
      83223);
      /* harmony import */


      var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ol/layer/Tile */
      25504);
      /* harmony import */


      var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ol/source/XYZ */
      95361);
      /* harmony import */


      var ol_control_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ol/control.js */
      29046);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ol/layer/Vector */
      81204);
      /* harmony import */


      var ol_source_Vector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ol/source/Vector */
      49010);
      /* harmony import */


      var ol_Feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ol/Feature */
      33697);
      /* harmony import */


      var ol_geom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ol/geom */
      32475);
      /* harmony import */


      var ol_style_Style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ol/style/Style */
      16274);
      /* harmony import */


      var ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ol/style/Fill */
      49040);
      /* harmony import */


      var ol_style_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ol/style/Text */
      6888);
      /* harmony import */


      var ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ol/style/IconAnchorUnits */
      51953);
      /* harmony import */


      var src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/configurations/url.service */
      96407);
      /* harmony import */


      var ol_style_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ol/style/Icon */
      16212);
      /* harmony import */


      var ol_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ol/proj */
      68565);
      /* harmony import */


      var _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-alert/info-alert.component */
      28990);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);
      /* harmony import */


      var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/socket.service */
      15383);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      79744);
      /* harmony import */


      var _actions_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./actions/actions.component */
      73384);
      /* harmony import */


      var ol_Observable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ol/Observable */
      82146);
      /** OpenLayers Map Imports */
      //import { MqttServiceService } from 'src/app/services/mqtt/mqtt-service.service';


      var _MapComponent = /*#__PURE__*/function () {
        function MapComponent(_api, fb, dialog, notifyService, socketService) {
          _classCallCheck(this, MapComponent);

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
          this.pagination = {
            page: 1,
            pages: 1,
            itemsPage: 500,
            total: 1
          };
          this.wordToSearch = '';
          this.teamsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
          this.layerRegistry = {};
          this.isSound = false;
          this.isBouncing = false;
          this.singleClickListener = null;
          this.topicMessageCount = {};
        }

        return _createClass(MapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.loadOpenStreet();
            this.createForm();
            this.getTeams();
            this.listenMqttMessages();
            this.map.getView().on('change:resolution', function () {
              var zoomLevel = _this7.map.getView().getZoom();

              _this7.updateMarkerStyles(zoomLevel);
            });
          }
        }, {
          key: "updateMarkerStyles",
          value: function updateMarkerStyles(zoomLevel) {
            for (var markerId in this.markers) {
              if (this.markers.hasOwnProperty(markerId)) {
                var marker = this.markers[markerId];
                var style = marker.getStyle();
                var textStyle = style.getText();

                if (!textStyle) {
                  textStyle = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__["default"]({});
                }

                textStyle.setText(marker.get('name'));
                textStyle.setFont(10 + 'px sans-serif');
                style.setText(textStyle);
                marker.setStyle(style); // if (style && style.getText()) {
                //   style.getText().setText(zoomLevel > 15 ? marker.get('name') : '');
                // }
                // marker.setStyle(style);
              }
            }
          }
        }, {
          key: "listenMqttMessages",
          value: function listenMqttMessages() {
            var _this8 = this;

            // Conecta el socket primero
            this.socketService.socketConnect('map-component'); // Escucha mensajes MQTT a través de Socket.IO

            this.socketService.listenForMqttMessages().subscribe(function (data) {
              var topic = data.topic;
              var message = data.message;
              var topico = topic.split('/')[1];

              if (topic.includes('alarma')) {
                console.log('ENTRA EN TOPIC ALARMA:', topic, message);

                if (message.toString().includes('0')) {
                  return;
                }

                _this8.manageAlarms(topico, message);
              }

              console.log('MENSAJE MQTT RECIBIDO:', topic, message);

              var central = _this8.neighborhoods.find(function (item) {
                return item.identifier === topico;
              });

              var alert = message.toString().substring(0, 1);
              var status = message.toString().substring(1, message.toString().length);

              if (central) {
                _this8.typesAlert(central, alert, status);
              }
            });
          }
        }, {
          key: "manageAlarms",
          value: function manageAlarms(topic, message) {
            if (!this.topicMessageCount[topic]) {
              this.topicMessageCount[topic] = 0;
            }

            console.log('SUENA: ', this.topicMessageCount);
            this.topicMessageCount[topic]++;

            if (this.topicMessageCount[topic] > 1) {
              this.getAlerts();
              var data = message.toString('utf-8');
              console.log('ESTO 1: ', data);

              if (data.includes('out')) {
                console.log('ENTRA EN OUT');
                var user = JSON.parse(data.split('*')[1]);
                this.notifyService.showError('Fuera de cobertura', "".concat(user.name, " - Emiti\xF3 una alerta"));

                if (!this.markers[user._id]) {
                  var marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"]({
                    geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_13__["default"]([parseFloat(user.lng), parseFloat(user.lat)]).transform('EPSG:4326', 'EPSG:3857'),
                    name: user.name,
                    id: user._id
                  });
                  this.markers[user._id] = marker; // TODO: agregar marcador al mapa
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
        }, {
          key: "typesAlert",
          value: function typesAlert(central, alert, status) {
            // C0 corte de corriente solo batería
            // C1 no hay corte de corriente
            // P1 abierta caja
            // P0 caja cerrada
            // B11.5 estado de la batería
            var mensaje = '';

            switch (alert) {
              case 'C':
                //Estado Bateria
                if (status === '0') {
                  mensaje = 'Central corte de corriente';
                } else {
                  mensaje = 'Revisión estado corriente correcto';
                }

                break;

              case 'D':
                if (status === '0') {
                  mensaje = 'Central fuera de línea';
                  this.setMarkerStyle(this.markers[central.identifier], 'pin-disconnect');
                } else {
                  mensaje = 'Central central en línea';
                  this.setMarkerStyle(this.markers[central.identifier], 'pin');
                }

                break;

              case 'P':
                //Estado Caja
                if (status === '0') {
                  mensaje = 'Puerta central abierta';
                } else {
                  mensaje = 'Puerta central cerrada';
                }

                break;

              case 'B':
                //Estado bateria
                mensaje = "Estado de la bateria ".concat(status);
                break;

              default:
                break;
            }
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.searchForm = this.fb.group({
              value: [this.teams[0]]
            });
          }
        }, {
          key: "centerMap",
          value: function centerMap() {
            var coordinates = this.neighborhoods.map(function (point) {
              return [parseFloat(point.lng), parseFloat(point.lat)];
            }); // Calcular el centro de todas las coordenadas

            var center = coordinates.reduce(function (accumulator, current) {
              return [accumulator[0] + current[0], accumulator[1] + current[1]];
            }, [0, 0]);
            center[0] /= coordinates.length;
            center[1] /= coordinates.length; // Configurar la vista del mapa para centrarse en el punto calculado

            this.map.getView().setCenter((0, ol_proj__WEBPACK_IMPORTED_MODULE_4__.fromLonLat)(center));
            var zoom = this.calculateZoomForPoints(this.neighborhoods);
            this.map.getView().setZoom(zoom);
          }
        }, {
          key: "clearMapState",
          value: function clearMapState() {
            this.markers = {};
            this.topicMessageCount = {}; // Ya no necesitas desuscribirte de temas MQTT directamente
            // porque eso lo maneja el backend
            // Remover todas las capas del mapa

            for (var layerId in this.layerRegistry) {
              if (this.layerRegistry.hasOwnProperty(layerId)) {
                this.map.removeLayer(this.layerRegistry[layerId]);
              }
            }

            this.layerRegistry = {};
            this.neighborhoods = [];

            if (this.singleClickListener) {
              (0, ol_Observable__WEBPACK_IMPORTED_MODULE_14__.unByKey)(this.singleClickListener);
              this.singleClickListener = null;
            }
          }
        }, {
          key: "setMarker",
          value: function setMarker(incomingMarker, neighborhood) {
            if (!incomingMarker) {
              var marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"]({
                geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_13__["default"]([parseFloat(neighborhood.lng), parseFloat(neighborhood.lat)]).transform('EPSG:4326', 'EPSG:3857'),
                name: neighborhood.name,
                connected: neighborhood.connected,
                identifier: neighborhood.identifier
              });
              this.markers[neighborhood.identifier] = marker;
              this.setMarkerStyle(marker, neighborhood.connected ? 'pin' : 'pin-disconnect');
            } else {
              incomingMarker.set('connected', neighborhood.connected);
              this.setMarkerStyle(incomingMarker, neighborhood.connected ? 'pin' : 'pin-disconnect');
            }
          }
        }, {
          key: "setMarkerStyle",
          value: function setMarkerStyle(marker, iconType) {
            var text = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__["default"]({
              // text: marker.get('name'),
              text: '',
              offsetY: 12,
              fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__["default"]({
                color: 'black'
              }),
              font: 'bold 14px Arial',
              backgroundFill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__["default"]({
                color: 'white'
              }),
              padding: [3, 3, 3, 3]
            });
            this.markerStyle = new ol_style_Style__WEBPACK_IMPORTED_MODULE_16__["default"]({
              image: new ol_style_Icon__WEBPACK_IMPORTED_MODULE_17__["default"]({
                crossOrigin: 'anonymous',
                anchor: [24, 48],
                anchorXUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__["default"].PIXELS,
                anchorYUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_18__["default"].PIXELS,
                src: "".concat(src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__.URL_SERVICES, "/view/").concat(iconType)
              }),
              text: text
            });
            var textStyle = this.markerStyle.getText();

            if (!textStyle) {
              textStyle = new ol_style_Text__WEBPACK_IMPORTED_MODULE_11__["default"]({});
            }

            textStyle.setText(marker.get('name'));
            textStyle.setFont(10 + 'px sans-serif');
            this.markerStyle.setText(textStyle); // const zoomLevel = this.map.getView().getZoom();
            // if (zoomLevel < 16) {
            //   this.markerStyle.setText(null);
            // }

            marker.setStyle(this.markerStyle);
          }
        }, {
          key: "getNeighborhoodByTeam",
          value: function getNeighborhoodByTeam(teamSelected) {
            var _this9 = this;

            this.clearMapState();

            this._api.getNeighborhoodByTeam(teamSelected, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(function (resp) {
              _this9.neighborhoods = resp.body['neighborhoods'];

              _this9.centerMap();

              _this9.neighborhoods.forEach(function (neighborhood) {
                // En lugar de suscribirte directamente a MQTT, envía una petición al backend
                // para que él se suscriba y te reenvíe los mensajes via Socket.IO
                console.log('Monitoring neighborhood:', neighborhood.identifier);

                _this9.setMarker(_this9.markers[neighborhood.identifier], neighborhood);

                var vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_19__["default"]({
                  features: [_this9.markers[neighborhood.identifier]]
                });
                var vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_20__["default"]({
                  source: vectorSource
                });
                vectorLayer.set('layerId', neighborhood._id);
                _this9.layerRegistry[neighborhood._id] = vectorLayer;

                _this9.map.addLayer(vectorLayer);
              }); // ---> INICIO: CÓDIGO AÑADIDO PARA INTEGRAR ACTIONSCOMPONENT <---
              // 🗺️ Primero, nos aseguramos de limpiar cualquier listener anterior para evitar duplicados.


              if (_this9.singleClickListener) {
                (0, ol_Observable__WEBPACK_IMPORTED_MODULE_14__.unByKey)(_this9.singleClickListener);
              } // Creamos el nuevo listener para el evento 'singleclick'


              _this9.singleClickListener = _this9.map.on('singleclick', function (evt) {
                _this9.map.forEachFeatureAtPixel(evt.pixel, function (feature, _) {
                  // Si se hizo clic sobre un marcador (feature)
                  if (feature) {
                    var name = feature.get('name');
                    var connected = feature.get('connected');
                    var identifier = feature.get('identifier'); // Abrimos el diálogo del ActionsComponent con los datos del marcador

                    _this9.dialog.open(_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__.ActionsComponent, {
                      width: '60%',
                      data: {
                        name: name,
                        connected: connected,
                        identifier: identifier
                      }
                    });
                  }
                });
              }); // ---> FIN: CÓDIGO AÑADIDO <---
            }); // Cierre de la suscripción de _api.getNeighborhoodByTeam

          }
        }, {
          key: "calculateZoomForPoints",
          value: function calculateZoomForPoints(points) {
            if (points.length === 0) {
              return 2; // Valor predeterminado si no hay puntos
            } // Obtener las coordenadas extremas (mínima y máxima) de los puntos


            var minX = Math.min.apply(Math, _toConsumableArray(points.map(function (point) {
              return parseFloat(point.lng);
            })));
            var minY = Math.min.apply(Math, _toConsumableArray(points.map(function (point) {
              return parseFloat(point.lat);
            })));
            var maxX = Math.max.apply(Math, _toConsumableArray(points.map(function (point) {
              return parseFloat(point.lng);
            })));
            var maxY = Math.max.apply(Math, _toConsumableArray(points.map(function (point) {
              return parseFloat(point.lat);
            }))); // Calcular el centro y el ancho/alto de la extensión geográfica

            var centerX = (minX + maxX) / 2;
            var centerY = (minY + maxY) / 2;
            var extentWidth = maxX - minX;
            var extentHeight = maxY - minY; // Obtener el tamaño del contenedor del mapa

            var mapContainer = document.getElementById('map'); // Ajusta el ID según tu estructura HTML

            var containerWidth = mapContainer.clientWidth;
            var containerHeight = mapContainer.clientHeight; // Calcular el zoom necesario para que la extensión geográfica sea completamente visible

            var resolutionX = extentWidth / containerWidth;
            var resolutionY = extentHeight / containerHeight;
            var resolution = Math.max(resolutionX, resolutionY); // Calcular el zoom basado en la resolución y el tamaño del contenedor

            var zoom = Math.log2(360 / (resolution * 256)) - 1;
            return zoom;
          }
        }, {
          key: "loadOpenStreet",
          value: function loadOpenStreet() {
            this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_21__["default"]({
              controls: (0, ol_control_js__WEBPACK_IMPORTED_MODULE_22__.defaults)({
                zoom: false,
                rotate: false
              }),
              target: 'map',
              layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_23__["default"]({
                source: new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_24__["default"]({
                  // url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga'
                  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              })],
              view: new ol_View__WEBPACK_IMPORTED_MODULE_25__["default"]({
                center: [0, 0],
                zoom: 2,
                maxZoom: 19,
                minZoom: 2
              })
            });
          }
        }, {
          key: "getTeams",
          value: function getTeams() {
            var _this0 = this;

            this._api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(function (resp) {
              _this0.teams = resp.body.teams;

              if (_this0.teams.length > 0) {
                _this0.searchForm.patchValue({
                  value: _this0.teams[0]._id
                });

                _this0.selected(_this0.searchForm.value.value);
              }
            });
          } // Cuando se cambia el dropdown de teams se pasa como parametro el team y se ejecuta esto.

        }, {
          key: "selected",
          value: function selected(teamId) {
            this.markers = {};
            this.neighborhoods = [];
            this.getNeighborhoodByTeam(teamId);
            this.teamSelectedId = teamId;
            this.alerts = [];
            this.getAlerts();
          }
        }, {
          key: "getAlerts",
          value: function getAlerts() {
            var _this1 = this;

            this.isLoadingAlerts = true;

            this._api.getAlertsByTeam(this.teamSelectedId).subscribe(function (resp) {
              _this1.alerts = resp.body.alerts;
              _this1.isLoadingAlerts = false;
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_6__.showAlert)('error', 'Error', "Algo ha salido mal, intente m\xE1s tarde!\n".concat(err), 'btn btn-info');
            });
          }
        }, {
          key: "changePinColor",
          value: function changePinColor(identifier) {
            var _this10 = this;

            if (!identifier || !this.markers[identifier]) {
              return;
            }

            var _loop = function _loop(i) {
              setTimeout(function () {
                if (i === 19) {
                  _this10.setMarkerStyle(_this10.markers[identifier], 'pin');

                  _this10.stopSound();
                }

                if (i % 2 === 0) {
                  _this10.setMarkerStyle(_this10.markers[identifier], 'pin4');
                } else {
                  _this10.setMarkerStyle(_this10.markers[identifier], _this10.markers[identifier].get('connected') ? 'pin' : 'pin-disconnect');
                }
              }, i * 500);
            };

            for (var i = 0; i < 20; i++) {
              _loop(i);
            }

            if (!this.isSound) {
              this.playSound();
            }
          }
        }, {
          key: "getTypeAlert",
          value: function getTypeAlert(alert) {
            var notificationMessage;
            var imgAlert;
            var imgDefault = 'assets/img/icons/shadow.png';

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
        }, {
          key: "playSound",
          value: function playSound() {
            this.isSound === true;
            var audio = this.audioPlayer.nativeElement;
            audio.play();
          }
        }, {
          key: "stopSound",
          value: function stopSound() {
            this.isSound === false;
            var audio = this.audioPlayer.nativeElement;
            audio.pause();
            audio.currentTime = 0;
          }
        }, {
          key: "showAlertInfo",
          value: function showAlertInfo(data) {
            var _this11 = this;

            var modal = this.dialog.open(_info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__.InfoAlertsComponent, {
              width: '60%',
              data: {
                user: data.user,
                idAlert: data._id
              }
            });
            modal.afterClosed().subscribe(function (infoData) {
              if (infoData === undefined) {
                return;
              }

              _this11.alerts = [];

              _this11.getAlerts();
            });
          }
        }]);
      }();

      _MapComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService
        }, {
          type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService
        }];
      };

      _MapComponent.propDecorators = {
        audioPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild,
          args: ['audioPlayer']
        }]
      };
      _MapComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'app-map',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _MapComponent);
      /***/
    },

    /***/
    96016:
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapModule": function MapModule() {
          return (
            /* binding */
            _MapModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      87762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/material/material.module */
      95123);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! typescript.events */
      25260);
      /* harmony import */


      var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map.component */
      51846);
      /* harmony import */


      var _map_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./map.routes */
      12687);
      /* harmony import */


      var _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-alert/info-alert.component */
      28990);
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/components.module */
      45642);
      /* harmony import */


      var _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./actions/actions.component */
      73384);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      83315);

      var _MapModule = /*#__PURE__*/_createClass(function MapModule() {
        _classCallCheck(this, MapModule);
      });

      _MapModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent, _info_alert_info_alert_component__WEBPACK_IMPORTED_MODULE_5__.InfoAlertsComponent, _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__.ActionsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_map_routes__WEBPACK_IMPORTED_MODULE_4__.MapRoutes), src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule],
        providers: [typescript_events__WEBPACK_IMPORTED_MODULE_2__.Event]
      })], _MapModule);
      /***/
    },

    /***/
    12687:
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.routes.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapRoutes": function MapRoutes() {
          return (
            /* binding */
            _MapRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./map.component */
      51846);

      var _MapRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent
        }]
      }];
      /***/
    },

    /***/
    79744:
    /*!***************************************************!*\
      !*** ./src/app/services/notifications.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* binding */
            _NotificationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-toastr */
      83315);

      var _NotificationService = /*#__PURE__*/function () {
        function NotificationService(toastr) {
          _classCallCheck(this, NotificationService);

          this.toastr = toastr;
        }

        return _createClass(NotificationService, [{
          key: "showSuccess",
          value: function showSuccess(message, title) {
            this.toastr.success(message, title, {
              positionClass: 'toast-top-left'
            });
          }
        }, {
          key: "showError",
          value: function showError(message, title) {
            this.toastr.error(message, title, {
              positionClass: 'toast-top-left'
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message, title) {
            this.toastr.info(message, title, {
              positionClass: 'toast-top-left'
            });
          }
        }, {
          key: "showWarning",
          value: function showWarning(message, title) {
            this.toastr.warning(message, title, {
              positionClass: 'toast-top-left'
            });
          }
        }]);
      }();

      _NotificationService.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService
        }];
      };

      _NotificationService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _NotificationService);
      /***/
    },

    /***/
    15383:
    /*!********************************************!*\
      !*** ./src/app/services/socket.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocketService": function SocketService() {
          return (
            /* binding */
            _SocketService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! socket.io-client */
      80381);
      /* harmony import */


      var _configurations_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../configurations/url.service */
      96407);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      5830);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441); // En src/app/services/socket.service.ts


      var _SocketService = /*#__PURE__*/function () {
        function SocketService(_api) {
          _classCallCheck(this, SocketService);

          this._api = _api;
          this.mqttMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.positionSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }
        /**
         * Conecta el socket principal para eventos generales y MQTT.
         * Lo ideal es llamar a esta función una vez que el usuario ha iniciado sesión.
         * @param id Un identificador único, como el ID del usuario.
         */


        return _createClass(SocketService, [{
          key: "socketConnect",
          value: function socketConnect(id) {
            var _this12 = this;

            var user = this._api.getUser();

            if (this.socket && this.socket.connected) {
              return;
            } // QUITAR EL NAMESPACE '/angular' - conectar al root


            this.socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)("".concat(_configurations_url_service__WEBPACK_IMPORTED_MODULE_1__.URL_SOCKET), {
              query: {
                id: id,
                user: user
              }
            }); // Escucha el evento 'mqttMessage' del backend y lo emite a través del Observable

            this.socket.on('mqttMessage', function (data) {
              console.log('Mensaje MQTT recibido en frontend:', data);

              _this12.mqttMessageSource.next(data);
            }); // Agregar listeners para depuración

            this.socket.on('connect', function () {
              console.log('Conectado al servidor Socket.IO');
            });
            this.socket.on('disconnect', function () {
              console.log('Desconectado del servidor Socket.IO');
            });
            this.socket.on('error', function (error) {
              console.error('Error en Socket.IO:', error);
            });
          }
          /**
           * Conecta el socket secundario, específico para posiciones.
           * @param id Un identificador único, como el ID del usuario o del seguimiento.
           */

        }, {
          key: "socketPositionConnect",
          value: function socketPositionConnect(id) {
            var _this13 = this;

            if (this.socketPosition && this.socketPosition.connected) {
              return;
            } // QUITAR EL NAMESPACE '/positions' - conectar al root


            this.socketPosition = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)("".concat(_configurations_url_service__WEBPACK_IMPORTED_MODULE_1__.URL_SOCKET), {
              query: {
                id: id
              }
            }); // Escucha el evento 'user-position' y lo emite a través del Observable

            this.socketPosition.on('user-position', function (data) {
              _this13.positionSource.next(data);
            });
          } // --- MÉTODOS PÚBLICOS PARA USAR EN LOS COMPONENTES ---

          /**
           * Permite a los componentes suscribirse para recibir mensajes MQTT en tiempo real.
           */

        }, {
          key: "listenForMqttMessages",
          value: function listenForMqttMessages() {
            return this.mqttMessageSource.asObservable();
          }
          /**
           * Permite a los componentes suscribirse para recibir actualizaciones de posición en tiempo real.
           */

        }, {
          key: "listenForPositions",
          value: function listenForPositions() {
            return this.positionSource.asObservable();
          }
          /**
           * Permite a los componentes enviar una petición al backend para publicar un mensaje MQTT.
           * @param topic El tópico MQTT al que se publicará.
           * @param message El mensaje que se enviará.
           * @param options Opciones adicionales de MQTT (ej: { qos: 2, retain: true }).
           */

        }, {
          key: "publishMqttMessage",
          value: function publishMqttMessage(topic, message, options) {
            if (this.socket) {
              console.log('Enviando mensaje MQTT:', {
                topic: topic,
                message: message
              });
              this.socket.emit('publishToMqtt', {
                topic: topic,
                message: message,
                options: options
              });
            }
          }
          /**
           * Método genérico para emitir cualquier otro evento al socket principal.
           * @param eventName Nombre del evento.
           * @param data Datos a enviar.
           */

        }, {
          key: "emitEvent",
          value: function emitEvent(eventName, data) {
            if (this.socket) {
              this.socket.emit(eventName, data);
            }
          }
          /**
           * Desconectar sockets
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            if (this.socket) {
              this.socket.disconnect();
            }

            if (this.socketPosition) {
              this.socketPosition.disconnect();
            }
          }
        }]);
      }();

      _SocketService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _SocketService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _SocketService);
      /***/
    },

    /***/
    47094:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/actions/actions.component.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 mat-dialog-title class=\"mat-typography\">{{name}}</h2>\r\n<mat-dialog-content>\r\n  <div class=\"status-container\">\r\n    <div *ngIf=\"connected == null || connected == ''\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"connected == '1'\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">wifi</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>En línea</div>\r\n        <div>{{ connectedTimeAgo }}</div>\r\n        <div>{{ connectedAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"connected != '1' && connected != null && connected != ''\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">wifi</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Fuera de línea</div>\r\n        <div>{{ connectedTimeAgo }}</div>\r\n        <div>{{ connectedAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"powerOutage == null || powerOutage == ''\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"powerOutage == '1'\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">power</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Revisión conectado</div>\r\n        <div>{{ powerOutageTimeAgo }}</div>\r\n        <div>{{ powerOutageAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"powerOutage != '1' && powerOutage != null && powerOutage != ''\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">power</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>Revisión desconectado</div>\r\n        <div>{{ powerOutageTimeAgo }}</div>\r\n        <div>{{ powerOutageAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus == null\" class=\"loading-spinner\">\r\n      <i class=\"fas fa-spinner fa-spin\"></i>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus <= threshold && batteryStatus != null\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'red'}\">battery_alert</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>{{ batteryStatus }}V</div>\r\n        <div>{{ batteryStatusTimeAgo }}</div>\r\n        <div>{{ batteryStatusAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"batteryStatus > threshold && batteryStatus != null\" class=\"status-item\">\r\n      <div class=\"icon-container\">\r\n        <mat-icon [ngStyle]=\"{color: 'green'}\">battery_alert</mat-icon>\r\n      </div>\r\n      <div class=\"text-container\">\r\n        <div>{{ batteryStatus }}V</div>\r\n        <div>{{ batteryStatusTimeAgo }}</div>\r\n        <div>{{ batteryStatusAt | date:'dd/MM/yy HH:mm' }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"grid-container\">\r\n    <div class=\"grid-item\" *ngFor=\"let alert of alerts\">\r\n      <button mat-button class=\"custom-mat-button\" (click)=\"sendCommand(alert)\">{{ alert.text }}</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"center-button-container\">\r\n    <button mat-button class=\"custom-mat-button-red\" (click)=\"sendCommand({'value': '0'})\">Apagar</button>\r\n  </div>\r\n</mat-dialog-content>\r\n<div tabindex=\"-1\" cdkFocusInitial></div>\r\n";
      /***/
    },

    /***/
    17957:
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/info-alert/info-alert.component.html ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"modal-header1 text-left row mb-1\"> -->\r\n<!--     <h6 class=\"modal-title\">Información alerta</h6> -->\r\n<!--     <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\"> -->\r\n<!--         <i class=\"fa fa-times icon-modal-close\"></i> -->\r\n<!--     </button> -->\r\n<!-- </div> -->\r\n<!--  -->\r\n<!-- <mat-dialog-content class=\"mat-typography\"> -->\r\n<!--     <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\"> -->\r\n<!--         <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> -->\r\n<!--             <div class=\"row\"> -->\r\n<!--                 <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" > -->\r\n<!--                  -->\r\n<!--                     <strong>Usuario</strong><br> -->\r\n<!--                     <p> -->\r\n<!--                         <small>Nombre: <strong>{{ user.name }}</strong></small><br> -->\r\n<!--                         <small>Cédula: <strong>{{ user.ci }}</strong></small><br> -->\r\n<!--                         <small>Teléfono: <strong>{{ user.phone }}</strong></small><br> -->\r\n<!--                         <small>Dirección: <strong>{{ user.address }}</strong></small><br> -->\r\n<!--                     </p> -->\r\n<!--                 </div> -->\r\n<!--                 <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\" style=\"height: 55vh;\" > -->\r\n<!--                     <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [heightE]=\"heightE\" #mapCard></app-map-card> -->\r\n<!--                 </div> -->\r\n<!--             </div> -->\r\n<!--  -->\r\n<!--         </div> -->\r\n<!--          -->\r\n<!--         <div class=\"row\"> -->\r\n<!--             <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" > -->\r\n<!--                 <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\"> -->\r\n<!--                     <mat-label>Motivo de alerta</mat-label> -->\r\n<!--                     <input matInput name=\"comment\" formControlName=\"comment\"> -->\r\n<!--                 </mat-form-field> -->\r\n<!--             </div> -->\r\n<!--  -->\r\n<!--         </div> -->\r\n<!--     </form> -->\r\n<!-- </mat-dialog-content> -->\r\n<!--  -->\r\n<!-- <div mat-dialog-actions align=\"end\" class=\"dialog-footer\"> -->\r\n<!--     <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postComment()\" [disabled]=\"!form.valid\" type=\"button\"> -->\r\n<!--         Guardar  -->\r\n<!--     </button> -->\r\n<!-- </div> -->\r\n\r\n<div class=\"modal-header1 text-left row mb-1\">\r\n  <h6 class=\"modal-title\">Información alerta</h6>\r\n  <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n    <i class=\"fa fa-times icon-modal-close\"></i>\r\n  </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"map-container\">\r\n            <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [heightE]=\"heightE\" #mapCard></app-map-card>\r\n            <div class=\"info-card\">\r\n              <strong>Usuario</strong><br>\r\n              <p>\r\n                <small>Nombre: <strong>{{ user.name }}</strong></small><br>\r\n                <small>Cédula: <strong>{{ user.ci }}</strong></small><br>\r\n                <small>Teléfono: <strong>{{ user.phone }}</strong></small><br>\r\n                <small>Dirección: <strong>{{ user.address }}</strong></small><br>\r\n                <small>Dirección Actual: <strong>{{ user.current_position }}</strong></small><br>\r\n                <a href=\"#\" (click)=\"sendWhatsAppMessage($event)\">\r\n                  <i class=\"fab fa-whatsapp\"></i> Compartir\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n          <mat-label>Motivo de alerta</mat-label>\r\n          <input matInput name=\"comment\" formControlName=\"comment\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n  <button class=\"btn btn-fill btn-info btn-md\" (click)=\"postComment()\" [disabled]=\"!form.valid\" type=\"button\">\r\n    Guardar\r\n  </button>\r\n</div>\r\n";
      /***/
    },

    /***/
    92867:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/map/map.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\" >\r\n                        <strong class=\"h4 title\">SALA DE MONITOREO</strong>\r\n                            <mat-icon title=\"Centrar\" style=\"float: right; cursor: pointer;\" (click)=\"centerMap()\">center_focus_strong</mat-icon>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <div class=\"row\">\r\n                          <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                            <div id=\"map\" class=\"map\">\r\n                                <mat-form-field class=\"col-xs-3 col-sm-3 col-md-3 custom-input\"  appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                                    <mat-label> Teams</mat-label>\r\n                                    <mat-select name=\"value\" formControlName=\"value\" (selectionChange)=\"selected($event.value)\">\r\n                                      <mat-option *ngFor=\"let item of teams\" [value]=\"item._id\">\r\n                                        TEAM - {{ item.name }}\r\n                                      </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n\r\n                                <div id=\"card-alert\" class=\"card\">\r\n                                  <div class=\"card-header\">\r\n                                    <h5 class=\"h6 mb-0 text-center\" style=\"font-weight: bold;\">\r\n                                      Alertas Pendientes\r\n                                      <i *ngIf=\"isLoadingAlerts\" class=\"fas fa-spinner fa-spin\"></i>\r\n                                    </h5>\r\n                                  </div>\r\n\r\n                                  <div class=\"card-body\" >\r\n                                    <div\r\n                                      class=\"timeline timeline-one-side\"\r\n                                      data-timeline-axis-style=\"dashed\"\r\n                                      data-timeline-content=\"axis\"\r\n                                    >\r\n                                      <div class=\"timeline-block\" *ngFor=\"let item of alerts\" style=\"margin-top: -2vh !important;\">\r\n                                        <span class=\"timeline-step badge-warning\" style=\"cursor: pointer;\" title=\"Ver más\" (click)=\"showAlertInfo(item)\">\r\n                                          <mat-icon>notifications_active</mat-icon>\r\n                                          <!-- <img src=\"{{ getTypeAlert(item.type).img }}\" style=\"height: 4vh; width: 4vh;\" alt=\"\"> -->\r\n                                        </span>\r\n              \r\n                                        <div class=\"timeline-content\">\r\n                                          <div class=\"d-flex justify-content-between\">\r\n                                            <div>\r\n                                              <span class=\"text-sm font-weight-bold\">\r\n                                                {{ getTypeAlert(item.type).type }} - \r\n                                                {{ item.access.name }}\r\n                                              </span>\r\n                                              <br>\r\n                                              <small style=\"font-weight: 500;\">{{ item.user.name }}</small>\r\n                                              <!-- <small style=\"font-weight: 500;\">{{ getTypeAlert(item.type).type }}</small> -->\r\n                                            </div>\r\n                          \r\n                                            <div class=\"text-right\">\r\n                                              <small class=\"text-muted\">\r\n                                                <i class=\"fas fa-clock mr-1\"> </i> \r\n                                                {{ item.date | date:'HH:mm' }}\r\n                                              </small>\r\n                                            </div>\r\n                                          </div>\r\n                          \r\n                                         \r\n                                        </div>\r\n                                      </div>\r\n                          \r\n                                    </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n                          </form>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"row\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <h6 class=\"h2 mb-0\">Alertas</h6>\r\n                    </div>\r\n      \r\n                    <div class=\"card-body\" id=\"card-alert\">\r\n                      <div\r\n                        class=\"timeline timeline-one-side\"\r\n                        data-timeline-axis-style=\"dashed\"\r\n                        data-timeline-content=\"axis\"\r\n                      >\r\n                        <div class=\"timeline-block\" *ngFor=\"let item of alerts\">\r\n                          <span class=\"timeline-step badge-success\" style=\"cursor: pointer;\" title=\"Ver más\" (click)=\"showAlertInfo(item)\">\r\n                            <img src=\"{{ getTypeAlert(item.type).img }}\" style=\"height: 4vh; width: 4vh;\" alt=\"\">\r\n                          </span>\r\n\r\n                          <div class=\"timeline-content\">\r\n                            <div class=\" d-flex justify-content-between pt-1\">\r\n                              <div>\r\n                                <span class=\" text-muted text-sm font-weight-bold\">\r\n                                  {{ item.access.name }}\r\n                                </span>\r\n                              </div>\r\n            \r\n                              <div class=\"text-right\">\r\n                                <small class=\"text-muted\">\r\n                                  <i class=\"fas fa-clock mr-1\"> </i> \r\n                                  {{ item.date | date:'HH:mm' }}\r\n                                </small>\r\n                              </div>\r\n                            </div>\r\n            \r\n                            <p class=\" text-sm mt-1 mb-0\">\r\n                              <strong>{{ item.user.name }}</strong><br>\r\n                              <small>{{ getTypeAlert(item.type).type }}</small>\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n            \r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n        </div>\r\n\r\n        <audio #audioPlayer>\r\n          <source src=\"assets/notification.mp3\" type=\"audio/mp3\">\r\n          Tu navegador no soporta la reproducción de audio.\r\n        </audio>\r\n    </div>\r\n</div>\r\n\r\n<!-- <caption>\r\n  <button id=\"addBtn\" class=\"btn btn-icon btn-round btn-twitter\">\r\n      <i  class=\"fa fa-chevron-up\"></i>\r\n  </button>\r\n</caption> -->\r\n";
      /***/
    },

    /***/
    33325:
    /*!**********************************************************!*\
      !*** ./src/app/pages/map/actions/actions.component.scss ***!
      \**********************************************************/

    /***/
    function _(module) {
      module.exports = "@charset \"UTF-8\";\n.btn-actions {\n  height: 100% !important;\n  width: 120%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center !important;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  gap: 10px;\n}\n.grid-item {\n  display: flex;\n  justify-content: center;\n}\nbutton[mat-button] {\n  width: 100%;\n}\n.custom-mat-button {\n  border: 2px solid #ADD8E6 !important;\n  border-radius: 8px !important;\n  background-color: transparent !important;\n}\n.custom-mat-button:hover {\n  background-color: #ADD8E6 !important;\n  color: white !important;\n}\n.custom-mat-button-red {\n  border: 2px solid #E57373 !important;\n  border-radius: 8px !important;\n  background-color: transparent !important;\n}\n.custom-mat-button-red:hover {\n  background-color: #E57373 !important;\n  color: white !important;\n}\n.center-button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.status-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 10px;\n  gap: 10px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.status-item {\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  /* Ajusta el ancho según tus necesidades */\n}\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0FBRUY7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUVGO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBRUY7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUVGO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUFhLDBDQUFBO0FBR2Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHRiIsImZpbGUiOiJhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1hY3Rpb25zIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTBweDtcbn1cblxuLmdyaWQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b25bbWF0LWJ1dHRvbl0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0FERDhFNiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FERDhFNiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1tYXQtYnV0dG9uLXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNTczNzMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tbWF0LWJ1dHRvbi1yZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU3MzczICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5zdGF0dXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnN0YXR1cy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    51028:
    /*!****************************************************************!*\
      !*** ./src/app/pages/map/info-alert/info-alert.component.scss ***!
      \****************************************************************/

    /***/
    function _(module) {
      module.exports = ".map-container {\n  position: relative;\n  width: 100%;\n  height: 55vh;\n}\n\n.info-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: white;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJpbmZvLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    97916:
    /*!**********************************************!*\
      !*** ./src/app/pages/map/map.component.scss ***!
      \**********************************************/

    /***/
    function _(module) {
      module.exports = "@charset \"UTF-8\";\n#map {\n  width: 100%;\n  height: 75vh !important;\n  position: relative;\n}\n#card-alert {\n  width: 35vh;\n  height: 30vh;\n  position: absolute;\n  background-color: #fff;\n  opacity: 0.8;\n  right: 2vh;\n  bottom: -2vh;\n  /* ajusta la posición vertical según tu preferencia */\n  z-index: 1000;\n  /* ajusta el índice z para que el input esté encima del mapa */\n}\n#card-alert > .card-body {\n  height: 10vh !important;\n  overflow-y: auto !important;\n}\n.custom-input {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  right: 10px;\n  top: 10px;\n  /* ajusta la posición vertical según tu preferencia */\n  z-index: 1000;\n  /* ajusta el índice z para que el input esté encima del mapa */\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n  border: none !important;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFBYyxxREFBQTtFQUVkLGFBQUE7RUFBZSw4REFBQTtBQUNqQjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUFXLHFEQUFBO0VBRVgsYUFBQTtFQUFlLDhEQUFBO0FBQWpCO0FBR0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjYXJkLWFsZXJ0IHtcbiAgd2lkdGg6IDM1dmg7XG4gIGhlaWdodDogMzB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIHJpZ2h0OiAydmg7XG4gIGJvdHRvbTogLTJ2aDtcbiAgLyogYWp1c3RhIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbCBzZWfDum4gdHUgcHJlZmVyZW5jaWEgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogYWp1c3RhIGVsIMOtbmRpY2UgeiBwYXJhIHF1ZSBlbCBpbnB1dCBlc3TDqSBlbmNpbWEgZGVsIG1hcGEgKi9cbn1cbiNjYXJkLWFsZXJ0ID4gLmNhcmQtYm9keSB7XG4gIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIC8qIGFqdXN0YSBsYSBwb3NpY2nDs24gdmVydGljYWwgc2Vnw7puIHR1IHByZWZlcmVuY2lhICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGFqdXN0YSBlbCDDrW5kaWNlIHogcGFyYSBxdWUgZWwgaW5wdXQgZXN0w6kgZW5jaW1hIGRlbCBtYXBhICovXG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59Il19 */";
      /***/
    },

    /***/
    6888:
    /*!***************************************!*\
      !*** ./node_modules/ol/style/Text.js ***!
      \***************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Fill.js */
      49040);
      /* harmony import */


      var _TextPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./TextPlacement.js */
      46982);
      /* harmony import */


      var _size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../size.js */
      41666);
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

      var Text =
      /** @class */
      function () {
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

          this.scaleArray_ = (0, _size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(options.scale !== undefined ? options.scale : 1);
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

          this.fill_ = options.fill !== undefined ? options.fill : new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            color: DEFAULT_FILL_COLOR
          });
          /**
           * @private
           * @type {number}
           */

          this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;
          /**
           * @private
           * @type {import("./TextPlacement.js").default|string}
           */

          this.placement_ = options.placement !== undefined ? options.placement : _TextPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"].POINT;
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

          this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
          /**
           * @private
           * @type {import("./Stroke.js").default}
           */

          this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
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
            backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : undefined,
            backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : undefined,
            padding: this.getPadding() || undefined
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
          this.scaleArray_ = (0, _size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(scale !== undefined ? scale : 1);
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
      }();
      /* harmony default export */


      __webpack_exports__["default"] = Text;
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_map_map_module_ts-es5.js.map