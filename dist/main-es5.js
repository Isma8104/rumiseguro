(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      94026);
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/login/login.component */
      24902);

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent // canActivate: [SessionInService]

      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
        // canActivate: [SessionOutService],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/home/home.module */
            57994)).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/profile/profile.module */
            88558)).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'teams',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_iplab_ngx-file-upload___ivy_ngcc___fesm2015_iplab-ngx-file-upload_js"), __webpack_require__.e("src_app_pages_teams_teams_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/teams/teams.module */
            38573)).then(function (m) {
              return m.TeamsModule;
            });
          }
        }, {
          path: 'operators',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("src_app_pages_operators_operators_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/operators/operators.module */
            63568)).then(function (m) {
              return m.OperatorsModule;
            });
          }
        }, {
          path: 'neighborhoods/:parameters',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_neighborhoods_neighborhoods_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/neighborhoods/neighborhoods.module */
            94677)).then(function (m) {
              return m.NeighborhoodsModule;
            });
          }
        }, {
          path: 'central',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("src_app_pages_central_central_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/central/central.module */
            24506)).then(function (m) {
              return m.CentralModule;
            });
          }
        }, {
          path: 'list-neighbour/:parameters',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_iplab_ngx-file-upload___ivy_ngcc___fesm2015_iplab-ngx-file-upload_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_list-neighbour_list-neighbour_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/list-neighbour/list-neighbour.module */
            9509)).then(function (m) {
              return m.ListNeighbourModule;
            });
          }
        }, {
          path: 'map',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/map/map.module */
            96016)).then(function (m) {
              return m.MapModule;
            });
          }
        }, {
          path: 'keys',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("src_app_pages_keys_keys_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/keys/keys.module */
            1391)).then(function (m) {
              return m.KeysModule;
            });
          }
        }, {
          path: 'operator-team/:parameters',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_team-operator_team-operator_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/team-operator/team-operator.module */
            15316)).then(function (m) {
              return m.TeamOperatorModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/reports/reports.module */
            82234)).then(function (m) {
              return m.ReportsModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: 'login'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          useHash: true,
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _AppComponent = /*#__PURE__*/_createClass(function AppComponent(router, dialog) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.dialog = dialog;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
            // Show loading indicator
            window.scrollTo(0, 0);
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {// Hide loading indicator
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
            // Hide loading indicator
            // Present error to user
            console.log(event.error);
          }
        });
      });

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      56416);
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      87762);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var ngx_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-chips */
      38375);
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      4837);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      34183);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      94026);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/login/login.component */
      24902);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/components.module */
      45642);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./material/material.module */
      95123);
      /* harmony import */


      var _pages_login_password_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/login/password/password.component */
      19385);
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-socket-io */
      75083); // ===================================================================
      // PASO 1: Importa las librerías necesarias para Socket.IO
      // ===================================================================
      // ===================================================================
      // PASO 2: Configura la URL de tu backend (Node.js)
      //         Asegúrate de que el puerto (ej: 3010) sea el correcto.
      // ===================================================================


      var config = {
        url: 'http://localhost:3010',
        options: {}
      };

      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule.forRoot(), ngx_chips__WEBPACK_IMPORTED_MODULE_19__.TagInputModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule, // ===================================================================
        // PASO 3: Agrega el módulo a los imports de tu aplicación
        // ===================================================================
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__.SocketIoModule.forRoot(config)],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__.AdminLayoutComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent, _pages_login_password_password_component__WEBPACK_IMPORTED_MODULE_10__.PasswordComponent],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    45642:
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
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


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      29150);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      49201);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      33252);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      64662);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      4837);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! devextreme-angular */
      46314);
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      56416);
      /* harmony import */


      var _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-card/map-card.component */
      63442);
      /* harmony import */


      var _images_preview_images_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./images-preview/images-preview.component */
      30644);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../material/material.module */
      95123);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var _ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      });

      _ComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__.CollapseModule.forRoot(), devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxVectorMapModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__.BsDropdownModule.forRoot(), _material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule],
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_5__.MapCardComponent, _images_preview_images_preview_component__WEBPACK_IMPORTED_MODULE_6__.ImagePreviewComponent],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_5__.MapCardComponent],
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }]
      })], _ComponentsModule);
      /***/
    },

    /***/
    64662:
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */
      34488);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date();
        }

        return _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _FooterComponent.ctorParameters = function () {
        return [];
      };

      _FooterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-footer',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _FooterComponent);
      /***/
    },

    /***/
    30644:
    /*!***********************************************************************!*\
      !*** ./src/app/components/images-preview/images-preview.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagePreviewComponent": function ImagePreviewComponent() {
          return (
            /* binding */
            _ImagePreviewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _ImagePreviewComponent = /*#__PURE__*/function () {
        function ImagePreviewComponent(dialogRef, dialog, data) {
          _classCallCheck(this, ImagePreviewComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this.imageUrl = "";
          this.sizeImg = 4;
          this.imageUrl = data.img;

          if (this.imageUrl) {
            switch (this.imageUrl.length) {
              case 1:
                this.imageUrl;
                this.sizeImg = 12;
                break;

              case 2:
                this.sizeImg = 6;
                break;

              case 3:
                this.sizeImg = 4;
                break;

              case 4:
                this.sizeImg = 3;
                break;
            }
          }
        }

        return _createClass(ImagePreviewComponent, [{
          key: "closeModal",
          value: function closeModal() {
            // Lógica para cerrar el modal (por ejemplo, emitir un evento)
            this.dialogRef.close();
          }
        }]);
      }();

      _ImagePreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogRef
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialog
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MAT_DIALOG_DATA]
          }]
        }];
      };

      _ImagePreviewComponent.propDecorators = {
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };
      _ImagePreviewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-preview-image',
        template: "\n    <mat-dialog-content class=\"mat-typography\" align=\"center\">\n      <div class=\"col-xs-12 col-sm-6 col-md-{{sizeImg}}\" *ngFor=\"let item of imageUrl\">\n        <div style=\"width: 200px; height: 200px;\">\n          <a href=\"{{item.img}}\" target=\"_blank\">\n            <img [src]=\"item.img\" style=\"width: 100%; height: 100%; object-fit: cover;\">\n          </a>\n        </div>\n      </div>\n    </mat-dialog-content>\n    <div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\n      <button class=\"btn btn-fill btn-info btn-md\" (click)=\"closeModal()\" type=\"button\">\n          Cerrar \n      </button>\n    </div>\n  "
      })], _ImagePreviewComponent);
      /***/
    },

    /***/
    63442:
    /*!***********************************************************!*\
      !*** ./src/app/components/map-card/map-card.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapCardComponent": function MapCardComponent() {
          return (
            /* binding */
            _MapCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./map-card.component.html */
      64233);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ol_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ol/Map */
      65835);
      /* harmony import */


      var ol_View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ol/View */
      83223);
      /* harmony import */


      var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ol/layer/Tile */
      25504);
      /* harmony import */


      var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ol/source/XYZ */
      95361);
      /* harmony import */


      var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ol/layer/Vector */
      81204);
      /* harmony import */


      var ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ol/source/Vector */
      49010);
      /* harmony import */


      var ol_Feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ol/Feature */
      33697);
      /* harmony import */


      var ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ol/geom/Point */
      32475);
      /* harmony import */


      var ol_style_Style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ol/style/Style */
      16274);
      /* harmony import */


      var ol_style_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ol/style/Icon */
      16212);
      /* harmony import */


      var ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ol/style/IconAnchorUnits */
      51953);
      /* harmony import */


      var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ol/proj */
      68565);
      /* harmony import */


      var ol_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ol/control.js */
      29046);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! typescript.events */
      25260);
      /* harmony import */


      var src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/configurations/url.service */
      96407);
      /* harmony import */


      var ol_geom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ol/geom */
      18570);
      /* harmony import */


      var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ol/style/Stroke */
      21049);

      var _MapCardComponent = /*#__PURE__*/function () {
        function MapCardComponent(events) {
          var _this = this;

          _classCallCheck(this, MapCardComponent);

          this.events = events;
          this.opt = "";
          this.coorsEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.isNew = true;
          this.zoom = 15;
          this.events.on('map-center', function (data) {
            _this.centerMap(data.lng, data.lat, 14);
          });
        }

        return _createClass(MapCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mapLoad();
          }
        }, {
          key: "mapLoad",
          value: function mapLoad() {
            var _this2 = this;

            if (this.lat === null && this.lng === null || this.lat === 'null' && this.lng === 'null') {
              this.lat = '-0.21542619772706928';
              this.lng = '-78.51745989941895';
              this.isNew = true;
              this.zoom = 7;
            } else {
              this.isNew = false;
              this.zoom = 15;
            }

            if (this.heightE) {
              var box = document.getElementById('mapC');

              if (box != null) {
                box.style.setProperty('width', '100%');
                box.style.setProperty('height', this.heightE);
              }
            }

            setTimeout(function () {
              _this2.map = new ol_Map__WEBPACK_IMPORTED_MODULE_5__["default"]({
                controls: (0, ol_control_js__WEBPACK_IMPORTED_MODULE_6__.defaults)({
                  zoom: false,
                  rotate: false
                }),
                target: 'mapC',
                layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_7__["default"]({
                  source: new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_8__["default"]({
                    // url: 'https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga'
                    // url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga'
                    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' // url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=${environment.tokenMap}`

                  })
                })],
                view: new ol_View__WEBPACK_IMPORTED_MODULE_9__["default"]({
                  center: (0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.fromLonLat)([_this2.lng, _this2.lat]),
                  zoom: _this2.zoom,
                  maxZoom: 18,
                  minZoom: 7
                })
              });

              _this2.map.on('rendercomplete', function (event) {
                _this2.map.updateSize();
              });

              if (_this2.opt === 'click') {
                _this2.clickMap();

                _this2.setMarker((0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)([_this2.lng, _this2.lat], 'EPSG:4326', 'EPSG:3857'));
              }
            }, 50);
          }
        }, {
          key: "clickMap",
          value: function clickMap() {
            var _this3 = this;

            this.map.on('click', function (event) {
              if (_this3.markerVectorLayer !== undefined) {
                _this3.clearMarker();
              }

              _this3.setMarker(event.coordinate);
            });
          }
        }, {
          key: "setMarker",
          value: function setMarker(coordinate) {
            var coors = (0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)(coordinate, 'EPSG:3857', 'EPSG:4326');
            this.coorsEmit.emit({
              lat: coors[1],
              lng: coors[0]
            });
            this.source = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__["default"]();
            this.point = new ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__["default"](coordinate);
            this.marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"]({
              geometry: this.point
            });
            this.marker.setStyle(this.iconStyle());
            this.source.addFeature(this.marker);
            this.markerVectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_13__["default"]({
              source: this.source
            });
            this.map.addLayer(this.markerVectorLayer);
          }
        }, {
          key: "iconStyle",
          value: function iconStyle() {
            return new ol_style_Style__WEBPACK_IMPORTED_MODULE_14__["default"]({
              image: new ol_style_Icon__WEBPACK_IMPORTED_MODULE_15__["default"]({
                crossOrigin: 'anonymous',
                anchor: [24, 48],
                anchorXUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_16__["default"].PIXELS,
                anchorYUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_16__["default"].PIXELS,
                src: "".concat(src_app_configurations_url_service__WEBPACK_IMPORTED_MODULE_3__.URL_SERVICES, "/view/pin") // src: `https://bee.com.ec/register/shop/assets/img/bee_location.png`

              })
            });
          }
        }, {
          key: "clearMarker",
          value: function clearMarker() {
            this.markerVectorLayer.getSource().clear();
          }
        }, {
          key: "centerMap",
          value: function centerMap(_long, lat, zoom) {
            this.map.getView().setCenter((0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)([Number(_long), Number(lat)], 'EPSG:4326', 'EPSG:3857'));
            this.map.getView().setZoom(zoom);

            if (this.markerVectorLayer !== undefined) {
              this.clearMarker();
            }

            this.setMarker((0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)([_long, lat], 'EPSG:4326', 'EPSG:3857'));
          }
        }, {
          key: "plotRoute",
          value: function plotRoute(coordinates) {
            var routeCoordinates = coordinates.map(function (coor) {
              return (0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)([parseFloat(coor.lng), parseFloat(coor.lat)], 'EPSG:4326', 'EPSG:3857');
            });
            var route = new ol_geom__WEBPACK_IMPORTED_MODULE_17__["default"](routeCoordinates);
            var routeFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"]({
              geometry: route
            });
            var routeStyle = new ol_style_Style__WEBPACK_IMPORTED_MODULE_14__["default"]({
              stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_18__["default"]({
                color: '#FF0000',
                width: 9
              })
            });
            routeFeature.setStyle(routeStyle);
            var routeSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__["default"]({
              features: [routeFeature]
            });
            this.routeVectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_13__["default"]({
              source: routeSource
            });
            this.map.addLayer(this.routeVectorLayer);
            var lastPosition = coordinates.length;

            if (this.markerVectorLayer !== undefined) {
              this.clearMarker();
            }

            this.setMarker((0, ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)([Number(coordinates[lastPosition - 1].lng), Number(coordinates[lastPosition - 1].lat)], 'EPSG:4326', 'EPSG:3857'));
            this.centerMap(Number(coordinates[lastPosition - 1].lng), Number(coordinates[lastPosition - 1].lat), 15);
          }
        }]);
      }();

      _MapCardComponent.ctorParameters = function () {
        return [{
          type: typescript_events__WEBPACK_IMPORTED_MODULE_2__.Event
        }];
      };

      _MapCardComponent.propDecorators = {
        mapa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: ['mapa', {
            "static": false
          }]
        }],
        lat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        opt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        lng: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        heightE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        coorsEmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _MapCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-map-card',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _MapCardComponent);
      /***/
    },

    /***/
    33252:
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./navbar.component.html */
      67653);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
        }

        return _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            localStorage.removeItem("token-shadow");
            localStorage.removeItem("id-sh");
            localStorage.removeItem("role");
            this.router.navigate(['/login']);
          }
        }]);
      }();

      _NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }];
      };

      _NavbarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navbar',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _NavbarComponent);
      /***/
    },

    /***/
    49201:
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar.component.html */
      20141);
      /* harmony import */


      var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar.component.scss */
      24300);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830); // import { AuthService } from '../../services/auth.service';


      var _SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(router, apiService) {
          _classCallCheck(this, SidebarComponent);

          this.router = router;
          this.apiService = apiService;
          this.role = '';
        }

        return _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = localStorage.getItem('role');
          }
        }]);
      }();

      _SidebarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _SidebarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sidebar',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SidebarComponent);
      /***/
    },

    /***/
    96407:
    /*!***********************************************!*\
      !*** ./src/app/configurations/url.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "URL_SERVICES": function URL_SERVICES() {
          return (
            /* binding */
            _URL_SERVICES
          );
        },

        /* harmony export */
        "URL_SOCKET": function URL_SOCKET() {
          return (
            /* binding */
            _URL_SOCKET
          );
        }
        /* harmony export */

      }); // Development
      // export const URL_SERVICES = 'http://localhost:3010';
      // export const URL_SOCKET = 'http://localhost:3010'
      // export const URL_SERVICES = 'http://167.99.54.98:8080';
      // export const URL_SOCKET = 'http://167.99.54.98:8080'
      //Production


      var _URL_SERVICES = 'https://cronosoft.net';
      var _URL_SOCKET = 'https://alarma.sistelcel.com.ec';
      /***/
    },

    /***/
    94026:
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLayoutComponent": function AdminLayoutComponent() {
          return (
            /* binding */
            _AdminLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin-layout.component.html */
      82677);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);

          if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
          } else {
            this.isMobileResolution = false;
          }
        }

        return _createClass(AdminLayoutComponent, [{
          key: "isMobile",
          value: function isMobile(event) {
            if (window.innerWidth < 1200) {
              this.isMobileResolution = true;
            } else {
              this.isMobileResolution = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _AdminLayoutComponent.ctorParameters = function () {
        return [];
      };

      _AdminLayoutComponent.propDecorators = {
        isMobile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['window:resize', ['$event']]
        }]
      };
      _AdminLayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-admin-layout',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _AdminLayoutComponent);
      /***/
    },

    /***/
    95123:
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);

      var _MaterialModule = /*#__PURE__*/_createClass(function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      });

      _MaterialModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule],
        declarations: []
      })], _MaterialModule);
      /***/
    },

    /***/
    24902:
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */
      19777);
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.scss */
      32236);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _password_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./password/password.component */
      19385);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);

      var _LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, fb, dialog, api) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.fb = fb;
          this.dialog = dialog;
          this.api = api;
          this.title = 'SHADOW  SISB';
          this.showPassword = false;
          this.createForm();
        }

        return _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createForm",
          value: function createForm() {
            this.form = this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this4 = this;

            this.api.login(this.form.value).subscribe(function (resp) {
              if (resp.status === 200) {
                _this4.router.navigate(['/home']);
              }
            }, function (err) {
              var _err$error;

              if (((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.status) === 401) {
                var _err$error2;

                (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', (_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.message, 'btn btn-info');
              } else {
                (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Credenciales incorrectas', 'btn btn-info');
              }
            });
          }
        }, {
          key: "openRecoverPassword",
          value: function openRecoverPassword() {
            this.dialog.open(_password_password_component__WEBPACK_IMPORTED_MODULE_2__.PasswordComponent, {
              width: '600px',
              data: this.form.value.email
            });
          }
        }, {
          key: "togglePasswordVisibility",
          value: function togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
          }
        }]);
      }();

      _LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _LoginComponent.propDecorators = {
        closebutton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ['closebutton', {
            "static": false
          }]
        }],
        closebuttonReg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ['closebuttonReg', {
            "static": false
          }]
        }]
      };
      _LoginComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _LoginComponent);
      /***/
    },

    /***/
    19385:
    /*!************************************************************!*\
      !*** ./src/app/pages/login/password/password.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PasswordComponent": function PasswordComponent() {
          return (
            /* binding */
            _PasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./password.component.html */
      65484);
      /* harmony import */


      var _password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./password.component.scss */
      48694);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);

      var _PasswordComponent = /*#__PURE__*/function () {
        function PasswordComponent(fb, api, dialogRef, data) {
          _classCallCheck(this, PasswordComponent);

          this.fb = fb;
          this.api = api;
          this.dialogRef = dialogRef;
          this.data = data;
          this.loading = false;
          this.submitted = false;
          this.email = '';
          this.email = data;
          this.createForm();
        }

        return _createClass(PasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createForm",
          value: function createForm() {
            this.form = this.fb.group({
              email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);
      }();

      _PasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA]
          }]
        }];
      };

      _PasswordComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-password',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_password_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _PasswordComponent);
      /***/
    },

    /***/
    5830:
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configurations/url.service */
      96407);
      /* harmony import */


      var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/constants */
      69526);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! xlsx */
      4126);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      98636);

      var _ApiService = /*#__PURE__*/function () {
        function ApiService(_http) {
          _classCallCheck(this, ApiService);

          this._http = _http;
        }

        return _createClass(ApiService, [{
          key: "getUser",
          value: function getUser() {
            return localStorage.getItem('id-sh');
          }
        }, {
          key: "buildHeadersWithToken",
          value: function buildHeadersWithToken() {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token-shadow')
            });
          } //**AUTH

        }, {
          key: "login",
          value: function login(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administrator/login";
            return this._http.post(url, body, {
              headers: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.headersWithoutToken,
              observe: 'response'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (response) {
              localStorage.setItem("token-shadow", response.body['token']);
              localStorage.setItem("id-sh", response.body['administrator']._id);
              localStorage.setItem("role", response.body['administrator'].role);
            }));
          } //**TEAMS

        }, {
          key: "getTeams",
          value: function getTeams() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var itemsPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            var word = arguments.length > 2 ? arguments[2] : undefined;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/teams";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('word', word).set('page', page).set('idUser', this.getUser()).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "postTeams",
          value: function postTeams(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/team";
            return this._http.post(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "putTeams",
          value: function putTeams(body, id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/team/update/" + id;
            return this._http.put(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          } //**Centrales

        }, {
          key: "getNeighborhoodByTeam",
          value: function getNeighborhoodByTeam(idTeam) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var itemsPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
            var word = arguments.length > 3 ? arguments[3] : undefined;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/neighbourhoodByTeam/".concat(idTeam);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('word', word).set('page', page).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "postNeighborhood",
          value: function postNeighborhood(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/neighborhood";
            return this._http.post(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "putNeighborhood",
          value: function putNeighborhood(body, id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/neighborhood/update/" + id;
            return this._http.put(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          } //**Vecinos

        }, {
          key: "getUserByNeighborhood",
          value: function getUserByNeighborhood(idNeigh) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var itemsPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
            var word = arguments.length > 3 ? arguments[3] : undefined;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/usersNeighbourhood";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('idNeighbourhood', idNeigh).set('word', word).set('page', page).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "postNeighbour",
          value: function postNeighbour(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/newuser";
            return this._http.post(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "putNeighbour",
          value: function putNeighbour(body, id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + '/admin/user/' + id;
            return this._http.put(url, body).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {}));
          }
        }, {
          key: "postNeighbourImport",
          value: function postNeighbourImport(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/newuser-import";
            return this._http.post(url, {
              data: body
            }, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getCentralInformation",
          value: function getCentralInformation(type, identifier) {
            var url = "https://cronosoft.net/box-stats/".concat(type, "/").concat(identifier);
            return this._http.get(url);
          }
        }, {
          key: "getCentralInformationLast",
          value: function getCentralInformationLast(type, identifier) {
            var url = "https://cronosoft.net/box-stats/".concat(type, "/").concat(identifier, "?last=true");
            return this._http.get(url);
          } //**Operators

        }, {
          key: "getOperatorsById",
          value: function getOperatorsById(id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administratorById/".concat(id);
            return this._http.get(url, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getOperators",
          value: function getOperators() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var itemsPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            var word = arguments.length > 2 ? arguments[2] : undefined;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administrator/list";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('word', word).set('page', page).set('userId', this.getUser()).set('role', localStorage.getItem('role')).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "postOperators",
          value: function postOperators(body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administrator/new";
            return this._http.post(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "putOperators",
          value: function putOperators(body, id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administrator/update/" + id;
            return this._http.put(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "resetPaswordOperator",
          value: function resetPaswordOperator(body, id) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/administrator/update/resetPassword/" + id;
            return this._http.put(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getOperatorsByTeam",
          value: function getOperatorsByTeam(idTeam) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var itemsPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
            var word = arguments.length > 3 ? arguments[3] : undefined;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/team/users";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('idTeam', idTeam).set('word', word).set('page', page).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "postOperatorTeam",
          value: function postOperatorTeam(idUser, idTeam) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/team/assing/user";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('idUser', idUser).set('idTeam', idTeam);
            return this._http.post(url, {}, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          } //**Codigos

        }, {
          key: "getKeys",
          value: function getKeys() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var itemsPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/keys";
            var httParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page).set('itemsPage', itemsPage);
            return this._http.get(url, {
              params: httParams,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "generateKeys",
          value: function generateKeys(quantity) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/keygenerator";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('quantity', quantity);
            return this._http.post(url, {}, {
              params: params,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getAlertsByTeam",
          value: function getAlertsByTeam(team) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/getAlertsByTeam/".concat(team);
            return this._http.get(url, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "putAlertHeeded",
          value: function putAlertHeeded(id, body) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/alert-heeded/".concat(id);
            return this._http.put(url, body, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "readExcelFile",
          value: function readExcelFile(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();

              reader.onload = function (e) {
                var binaryData = e.target.result;
                var workbook = xlsx__WEBPACK_IMPORTED_MODULE_4__.read(binaryData, {
                  type: 'binary'
                });
                var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
                  header: 1
                });
                resolve(jsonData);
              };

              reader.onerror = function (error) {
                reject(error);
              };

              reader.readAsBinaryString(file);
            });
          } //**Reports

        }, {
          key: "generateReport",
          value: function generateReport(idTeam, startDate, endDate) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/reports/alerts/getAlertsByTeam/";
            var httParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('idTeam', idTeam).set('startDate', startDate).set('endDate', endDate);
            return this._http.get(url, {
              params: httParams,
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getUserPosition",
          value: function getUserPosition(idUser) {
            var url = _configurations_url_service__WEBPACK_IMPORTED_MODULE_0__.URL_SERVICES + "/user/position/".concat(idUser);
            return this._http.get(url, {
              headers: this.buildHeadersWithToken(),
              observe: 'response'
            });
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(lat, lng) {
            var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(lat, "&lon=").concat(lng);
            return this._http.get(url);
          }
        }]);
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    69526:
    /*!************************************!*\
      !*** ./src/app/utils/constants.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "headersWithToken": function headersWithToken() {
          return (
            /* binding */
            _headersWithToken
          );
        },

        /* harmony export */
        "headersWithoutToken": function headersWithoutToken() {
          return (
            /* binding */
            _headersWithoutToken
          );
        },

        /* harmony export */
        "generateCode": function generateCode() {
          return (
            /* binding */
            _generateCode
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      function getToken() {
        return localStorage.getItem('token-shadow');
      }

      var _headersWithToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': getToken()
      });

      var _headersWithoutToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json'
      });

      function _generateCode() {
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ123467890";
        var contraseña = "";

        for (var i = 0; i < 10; i++) {
          contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return contraseña;
      }
      /***/

    },

    /***/
    22176:
    /*!*************************************!*\
      !*** ./src/app/utils/swal-alert.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "optionsWithDetails": function optionsWithDetails() {
          return (
            /* binding */
            _optionsWithDetails2
          );
        },

        /* harmony export */
        "showAlert": function showAlert() {
          return (
            /* binding */
            _showAlert2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);

      function _optionsWithDetails2(_x, _x2, _x3) {
        return _optionsWithDetails.apply(this, arguments);
      }

      function _optionsWithDetails() {
        _optionsWithDetails = (0, C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function (title, html, width) {
          var confirmButtonText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var cancelButtonText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          return /*#__PURE__*/_regenerator().m(function _callee() {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: title,
                    html: html,
                    type: 'info',
                    width: "".concat(width, "px"),
                    showCloseButton: true,
                    showCancelButton: true,
                    cancelButtonColor: '#2e2e2e',
                    confirmButtonColor: 'cyan',
                    confirmButtonText: confirmButtonText,
                    cancelButtonText: cancelButtonText
                  }).then(function (result) {
                    if (result.value == true) {
                      return true;
                    }

                    if (result.dismiss.toString() === 'cancel') {
                      return false;
                    }
                  });

                case 1:
                  return _context.a(2, _context.v);
              }
            }, _callee);
          })();
        });
        return _optionsWithDetails.apply(this, arguments);
      }

      function _showAlert2(_x4, _x5, _x6, _x7) {
        return _showAlert.apply(this, arguments);
      }

      function _showAlert() {
        _showAlert = (0, C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regenerator().m(function _callee2(type, title, text, classBtn) {
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: title,
                  text: text,
                  type: type,
                  buttonsStyling: false,
                  confirmButtonClass: classBtn,
                  allowOutsideClick: false
                }).then(function (_) {});

              case 1:
                return _context2.a(2, _context2.v);
            }
          }, _callee2);
        }));
        return _showAlert.apply(this, arguments);
      }
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /*!
      
      =========================================================
      * Argon Dashboard PRO Angular - v1.1.1
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      
      * Coded by www.creative-tim.com
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    34488:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/footer/footer.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer-big\">\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright pull-center\" style=\"text-align: center;\">\r\n            &copy;\r\n            <a href=\"http://www.physeter.net\" target=\"_blank\" >Physeter</a> {{date | date: 'yyyy'}}\r\n        </p>\r\n    </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    64233:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/map-card/map-card.component.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"mapC\" class=\"mapC\" #mapa></div>";
      /***/
    },

    /***/
    67653:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/navbar/navbar.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <div class=\"navbar-minimize\">\r\n            <button id=\"minimizeSidebar\" class=\"btn btn-info btn-fill btn-round btn-icon\">\r\n                <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\r\n                <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\r\n            </button>\r\n        </div> -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!-- <a class=\"navbar-brand\" href=\"#\">Dashboard</a> -->\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n\r\n            <!-- <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                </div>\r\n            </form> -->\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!--     <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-envelope \"></i>\r\n                        <span class=\"notification\">3</span>\r\n                        <p class=\"hidden-md hidden-lg\">\r\n                            Actions\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Create New Post</a></li>\r\n                        <li><a href=\"#\">Manage Something</a></li>\r\n                        <li><a href=\"#\">Do Nothing</a></li>\r\n                        <li><a href=\"#\">Submit to live</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Another Action</a></li>\r\n                    </ul>\r\n                </li> -->\r\n\r\n                <!-- <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-bell-o\"></i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-md hidden-lg\">\r\n                            Notifications\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                    </ul>\r\n                </li> -->\r\n\r\n                <!-- <li class=\"dropdown dropdown-with-icons\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-list\"></i>\r\n                        <p class=\"hidden-md hidden-lg\">\r\n                            More\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-with-icons\">\r\n                        <li>\r\n                            <a (click)=\"cerrarSesion()\" class=\"text-danger\">\r\n                                <i class=\"pe-7s-close-circle\"></i> Log out\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                    <a href=\"javascript:void(0)\" (click)=\"cerrarSesion()\" class=\"nav-link\">\r\n                        <!-- <span class=\"sidebar-mini\">CS</span> -->\r\n                        <!-- <span class=\"sidebar-mini\"><mat-icon matPrefix class=\"my-icon\">logout</mat-icon></span> -->\r\n                        <span class=\"sidebar-normal\">Cerrar Sesión</span>\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>";
      /***/
    },

    /***/
    20141:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/sidebar/sidebar.component.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sidebar\" data-color=\"bluetrack\" data-image=\"assets/img/full-screen-image-3.jpg\">\r\n  <div class=\"logo\">\r\n    <a class=\"simple-text\">\r\n      <img src=\"assets/img/icons/shadow_white.PNG\" height=\"150px\" style=\"margin-left: 50px;\">\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"sidebar-wrapper\">\r\n    <div class=\"user\">\r\n      <div class=\"info\">\r\n        <div class=\"photo\" style=\"margin-top: 10px;\">\r\n          <img src=\"assets/img/blue/avatar.png\" />\r\n        </div>\r\n\r\n        <a>\r\n          <span style=\"font-size: 12px;\">\r\n            {{ role }}\r\n            <!-- <b class=\"caret\"></b> -->\r\n          </span>\r\n          <span style=\"font-size: 10px;\">\r\n           Shadow\r\n          </span>\r\n        </a>\r\n\r\n        <!-- <div class=\"collapse\" id=\"collapseExample\">\r\n          <ul class=\"nav\">\r\n            <li routerLinkActive=\"active\">\r\n              <a routerLink=\"/profile\">\r\n                                <span class=\"sidebar-mini\">MP</span>\r\n                                <span class=\"sidebar-normal\">Mi Perfil</span>\r\n                            </a>\r\n            </li>\r\n          </ul>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"nav\" *ngIf=\"role === 'SUPER-ADMIN' || role === 'ADMINISTRATOR'\">\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/home\">\r\n          <i class=\"pe-7s-home\"></i>\r\n          <p>Inicio</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/teams\">\r\n          <i class=\"pe-7s-ribbon\"></i>\r\n          <p>Teams</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/central\">\r\n          <i class=\"pe-7s-ribbon\"></i>\r\n          <p>Centrales</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/operators\">\r\n          <i class=\"pe-7s-users\"></i>\r\n          <p>Operadores</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" *ngIf=\"role === 'SUPER-ADMIN'\">\r\n        <a routerLink=\"/keys\">\r\n          <i class=\"pe-7s-key\"></i>\r\n          <p>Códigos</p>\r\n        </a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/map\">\r\n          <i class=\"pe-7s-map-2\"></i>\r\n          <p>Monitoreo</p>\r\n        </a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/reports\">\r\n          <i class=\"pe-7s-copy-file\"></i>\r\n          <p>Reportes</p>\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <ul class=\"nav\" *ngIf=\"role !== 'SUPER-ADMIN' &&  role !== 'ADMINISTRATOR'\">\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/home\">\r\n          <i class=\"pe-7s-home\"></i>\r\n          <p>Inicio</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/teams\">\r\n          <i class=\"pe-7s-ribbon\"></i>\r\n          <p>Teams</p>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/map\">\r\n          <i class=\"pe-7s-map-2\"></i>\r\n          <p>Monitoreo</p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <hr>\r\n    <div class=\"sidebar-footer\">\r\n      <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/profile\">\r\n            <i class=\"pe-7s-user\"></i>\r\n            <p>Mi Perfil</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    82677:
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \*********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"loader\"></div>\r\n\r\n<div class=\"wrapper\">\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"main-panel\">\r\n      <app-navbar></app-navbar>\r\n      <router-outlet></router-outlet>\r\n      <app-footer></app-footer>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    19777:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand1\" href=\"#\">\r\n        <!-- <a></a>\r\n                <img src=\"assets/img/icons/shadow.png\" /> -->\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"full-page login-page\" data-color=\"bluetrack\" data-image=\"assets/img/loginBG.jpg\">\r\n\r\n    <div class=\"content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n            <form [formGroup]=\"form\" class=\"form-horizontal\">\r\n              <div class=\"card\">\r\n                <div class=\"form-group text-center\">\r\n                  <img style=\"height: 100px;\" src=\"assets/img/icons/shadow.PNG\" class=\"navbar-brand-img\" alt=\"...\" />\r\n                </div>\r\n                <div class=\"content\">\r\n                  <div class=\"col-xs-12  col-sm-12 col-md-12\">\r\n                    <div class=\"row\">\r\n                      <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Correo Electrónico</mat-label>\r\n                        <input matInput name=\"email\" formControlName=\"email\"\r\n                          oninput=\"javascript:this.value=this.value.toLowerCase();\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Contraseña</mat-label>\r\n                        <input matInput [type]=\"showPassword ? 'text' : 'password'\" name=\"password\"\r\n                          formControlName=\"password\">\r\n                        <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"togglePasswordVisibility()\">\r\n                          {{showPassword?'visibility_off':'visibility'}}\r\n                        </mat-icon>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12\">\r\n                        <a style=\"cursor: pointer;\" (click)=\"openRecoverPassword()\">¿Olvidaste\r\n                          tu contraseña?</a>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"footer text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-fill btn-info btn-wd\" (click)=\"login()\">Login</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    65484:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/password/password.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">Recupere su cuenta</h6>\r\n    <button type=\"button\" (click)=\"close()\" class=\"close mt--5 mr--2\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <strong>Ingrese su correo electrónico para buscar su cuenta</strong>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Correo</mat-label>\r\n                        <input matInput name=\"email\" formControlName=\"email\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\"  [disabled]=\"!form.valid || loading\" type=\"button\">\r\n        Aceptar \r\n        <img *ngIf=\"loading\" style=\"width: 18px; height: 18px;\" src=\"assets/img/icons/preloader2.gif\">\r\n    </button>\r\n</div>";
      /***/
    },

    /***/
    24300:
    /*!***********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.scss ***!
      \***********************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    32236:
    /*!**************************************************!*\
      !*** ./src/app/pages/login/login.component.scss ***!
      \**************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    48694:
    /*!**************************************************************!*\
      !*** ./src/app/pages/login/password/password.component.scss ***!
      \**************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map