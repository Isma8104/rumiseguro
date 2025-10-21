(function () {
  "use strict";

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_profile_profile_module_ts"], {
    /***/
    61810:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/profile/chage-password/chage-password.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChagePasswordComponent": function ChagePasswordComponent() {
          return (
            /* binding */
            _ChagePasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chage_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chage-password.component.html */
      30150);
      /* harmony import */


      var _chage_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chage-password.component.scss */
      49859);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);
      /* harmony import */


      var src_app_utils_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/validations */
      84290);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! typescript.events */
      25260);

      var _ChagePasswordComponent = /*#__PURE__*/function () {
        function ChagePasswordComponent(dialogRef, dialog, data, fb, api, events) {
          _classCallCheck(this, ChagePasswordComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this.fb = fb;
          this.api = api;
          this.events = events;
          this.showPasswordAnt = false;
          this.showPassword = false;
          this.showRepPassword = false;
        }

        return _createClass(ChagePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.passwordForm = this.fb.group({
              passwordAnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, src_app_utils_validations__WEBPACK_IMPORTED_MODULE_4__.noWhitespaceValidator]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, src_app_utils_validations__WEBPACK_IMPORTED_MODULE_4__.noWhitespaceValidator]],
              repPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, src_app_utils_validations__WEBPACK_IMPORTED_MODULE_4__.noWhitespaceValidator]]
            }, {
              validator: (0, src_app_utils_validations__WEBPACK_IMPORTED_MODULE_4__.matchValues)('password', 'repPassword')
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this = this;

            delete this.passwordForm.value.repPassword;
            var idUser = this.api.getUser();
            this.api.resetPaswordOperator(this.passwordForm.value, idUser).subscribe(function (resp) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('success', 'Correcto', 'Contraseña actualizada', 'btn  btn-primary').then(function () {
                _this.close();
              });
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);
      }();

      _ChagePasswordComponent.ctorParameters = function () {
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
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event
        }];
      };

      _ChagePasswordComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chage-password',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chage_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chage_password_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ChagePasswordComponent);
      /***/
    },

    /***/
    58220:
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */
      65379);
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component.scss */
      56718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);
      /* harmony import */


      var _chage_password_chage_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chage-password/chage-password.component */
      61810);

      var _ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(_api, _fb, dialog) {
          _classCallCheck(this, ProfileComponent);

          this._api = _api;
          this._fb = _fb;
          this.dialog = dialog;
        }

        return _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
            this.getProfile();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.operator = this._fb.group({
              ci: [''],
              fullName: [''],
              email: [''],
              role: ['']
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this2 = this;

            var id = this._api.getUser();

            this._api.getOperatorsById(id).subscribe(function (resp) {
              var operatorSelected = resp.body['administrator'];
              _this2.operator = _this2._fb.group({
                ci: [operatorSelected.ci || ''],
                fullName: [operatorSelected.fullName],
                email: [operatorSelected.email],
                role: [operatorSelected.role]
              });

              if (operatorSelected.role !== 'SUPER-ADMIN') {
                var _this2$operator$get;

                (_this2$operator$get = _this2.operator.get('role')) === null || _this2$operator$get === void 0 ? void 0 : _this2$operator$get.disable();
              }
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-primary');
            });
          }
        }, {
          key: "updateAdmin",
          value: function updateAdmin() {
            var id = this._api.getUser();

            this._api.putOperators(this.operator.value, id).subscribe(function (resp) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('success', 'Correcto', 'Usuario modificado correctamente', 'btn btn-primary').then(function () {
                window.location.reload();
              });
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-primary');
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var openModal = this.dialog.open(_chage_password_chage_password_component__WEBPACK_IMPORTED_MODULE_4__.ChagePasswordComponent, {
              width: '400px'
            });
          }
        }]);
      }();

      _ProfileComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog
        }];
      };

      _ProfileComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProfileComponent);
      /***/
    },

    /***/
    88558:
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileModule": function ProfileModule() {
          return (
            /* binding */
            _ProfileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.component */
      58220);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      87762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _profile_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.routes */
      23391);
      /* harmony import */


      var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/material/material.module */
      95123);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! typescript.events */
      25260);
      /* harmony import */


      var _chage_password_chage_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chage-password/chage-password.component */
      61810);

      var _ProfileModule = /*#__PURE__*/_createClass(function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      });

      _ProfileModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _chage_password_chage_password_component__WEBPACK_IMPORTED_MODULE_5__.ChagePasswordComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_profile_routes__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutes), src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule],
        providers: [typescript_events__WEBPACK_IMPORTED_MODULE_4__.Event]
      })], _ProfileModule);
      /***/
    },

    /***/
    23391:
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.routes.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRoutes": function ProfileRoutes() {
          return (
            /* binding */
            _ProfileRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.component */
      58220);

      var _ProfileRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
        }]
      }];
      /***/
    },

    /***/
    84290:
    /*!**************************************!*\
      !*** ./src/app/utils/validations.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dateValidator": function dateValidator() {
          return (
            /* binding */
            _dateValidator
          );
        },

        /* harmony export */
        "noWhitespaceValidator": function noWhitespaceValidator() {
          return (
            /* binding */
            _noWhitespaceValidator
          );
        },

        /* harmony export */
        "onlyNumberKey": function onlyNumberKey() {
          return (
            /* binding */
            _onlyNumberKey
          );
        },

        /* harmony export */
        "onlyDecimalKey": function onlyDecimalKey() {
          return (
            /* binding */
            _onlyDecimalKey
          );
        },

        /* harmony export */
        "ciValidate": function ciValidate() {
          return (
            /* binding */
            _ciValidate
          );
        },

        /* harmony export */
        "rucValidate": function rucValidate() {
          return (
            /* binding */
            _rucValidate
          );
        },

        /* harmony export */
        "validarCedula": function validarCedula() {
          return (
            /* binding */
            _validarCedula
          );
        },

        /* harmony export */
        "checkDateEnd": function checkDateEnd() {
          return (
            /* binding */
            _checkDateEnd
          );
        },

        /* harmony export */
        "matchValues": function matchValues() {
          return (
            /* binding */
            _matchValues
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      function _dateValidator(control) {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('yyyy/MM/DD');
        var date = moment__WEBPACK_IMPORTED_MODULE_0__(control.value, 'yyyy/MM/DD');

        if (date.isAfter(startDate) || date.isSame(startDate)) {
          return null;
        } else {
          return {
            dateError: 'Fecha incorrecta'
          };
        }
      }

      function _noWhitespaceValidator(control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : {
          'whitespace': true
        };
      }

      function _onlyNumberKey(control) {
        if (control.value) {
          var _String;

          // const numbers = control?.value;
          var numbers = (_String = String(control === null || control === void 0 ? void 0 : control.value)) === null || _String === void 0 ? void 0 : _String.split('');
          var contSuccess = 0;

          for (var i = 0; i < numbers.length; i++) {
            if (Number(numbers[i]) >= 0 && Number(numbers[i]) <= 9) {
              contSuccess += 1;
            }
          }

          if (Number(contSuccess) === Number(numbers.length)) {
            return false;
          } else {
            return {
              numberError: 'Campo no válido'
            };
          }
        } else {
          return false;
        }
      }

      function _onlyDecimalKey(control) {
        if (control.value) {
          var numbers = control.value.split('');
          var contSuccess = 0;

          for (var i = 0; i < numbers.length; i++) {
            if (Number(numbers[i]) >= 0 && Number(numbers[i]) <= 9 || numbers[i] === '.') {
              contSuccess += 1;
            }
          }

          if (Number(contSuccess) === Number(numbers.length)) {
            return null;
          } else {
            return {
              decimalError: 'Campo no válido'
            };
          }
        } else {
          return null;
        }
      } // ! VALIDAR EN FORMULARIO


      function _ciValidate(control) {
        var _control$value, _control$value2;

        if (((_control$value = control.value) === null || _control$value === void 0 ? void 0 : _control$value.length) > 10 || ((_control$value2 = control.value) === null || _control$value2 === void 0 ? void 0 : _control$value2.length) < 10) {
          return {
            error: 'Identificación no válida'
          };
        } else {
          var _control$value3;

          var ci = (_control$value3 = control.value) === null || _control$value3 === void 0 ? void 0 : _control$value3.split('');
          var digitoRegion = Number(ci[0] + ci[1]);

          if (digitoRegion < 1 || digitoRegion > 24) {
            return {
              error: 'Cédula no válida'
            };
          }

          var tercerDigito = Number(ci[2]);

          if (tercerDigito < 0 || tercerDigito > 6) {
            return {
              error: 'Cédula no válida'
            };
          }

          var suma = 0;
          var val = 0;

          for (var i = 0; i < 9; i++) {
            if (i & 1) {
              val = ci[i] * 1;

              if (val >= 10) {
                val = val - 9;
              }
            } else {
              val = ci[i] * 2;

              if (val >= 10) {
                val = val - 9;
              }
            }

            suma += val;
          }

          suma = suma % 10 ? 10 - suma % 10 : 0;

          if (suma === Number(ci[(ci === null || ci === void 0 ? void 0 : ci.length) - 1])) {
            return null;
          } else {
            return {
              error: 'Cédula no válida'
            };
          }
        }
      }

      function _rucValidate(control) {
        var COEFICIENTES6 = [3, 2, 7, 6, 5, 4, 3, 2];
        var COEFICIENTES9 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        var rucPub = [8];
        var rucPri = [9];
        var multi = 0;
        var residuo = 0;
        var novDig = 0;
        var decDig = 0;

        if (control.value.length > 13 || control.value.length < 13) {
          return {
            error: 'Ruc no válido'
          };
        } else {
          var ruc = control.value.split('');
          var prov = Number(ruc[0] + ruc[1]);
          var tercerDigito = Number(ruc[3]);
          var tresUltimos = ruc[10] + ruc[11] + ruc[12];
          var cuatroUlt = ruc[9] + ruc[10] + ruc[11] + ruc[12];

          if (prov >= 1 && prov <= 24) {
            if (tercerDigito < 6) {
              //Personas Naturales
              // let ced = ruc.toString().substring(0, 10);
              var ced = control.value.substring(0, 10);

              if (_validarCedula(ced) === true && tresUltimos == "001") {
                return null;
              } else {
                return {
                  rucError: 'Ruc no válido'
                };
              }
            } else if (tercerDigito == 6 && cuatroUlt == "0001") {
              //Empresas Publicas
              novDig = parseFloat(ruc.substring(8, 9));

              for (var i = 0; i < 8; i++) {
                rucPub[i] = parseInt(ruc.substring(i, i + 1));
                multi = multi + rucPub[i] * COEFICIENTES6[i];
              } //Fin for
              // let div = multi / 11;


              residuo = multi % 11;

              if (residuo == 0 && decDig == 0) {
                return null;
              } else {
                var res = 11 - residuo;

                if (res == novDig) {
                  return null;
                } else {
                  return {
                    error: 'Ruc no válido'
                  };
                } //Fin if(res == novDig)

              } //Fin if if(residuo == 0 && decDig == 0)

            } else if (tercerDigito == 9 && tresUltimos == "001") {
              //Empresas Privadas
              decDig = parseFloat(ruc.substring(9, 10));

              for (var _i = 0; _i < 9; _i++) {
                rucPri[_i] = parseInt(ruc.substring(_i, _i + 1));
                multi = multi + rucPri[_i] * COEFICIENTES9[_i];
              } //Fin for
              // let div = multi / 11;


              residuo = multi % 11;

              if (residuo == 0 && decDig == 0) {
                return null;
              } else {
                var _res = 11 - residuo;

                if (_res == decDig) {
                  return null;
                } else {
                  return {
                    error: 'Ruc no válido'
                  };
                } //Fin if(res == novDig)

              } //Fin if(residuo == 0 && decDig == 0)

            } else {
              return {
                error: 'Ruc no válido'
              };
            } //Fin if(tercerDigito == 6){

          } else {
            return {
              error: 'Ruc no válido'
            };
          } //Fin if(prov>=1 && prov<=24)

        }
      } //Fin metodo ruc


      function _validarCedula(cedula) {
        var ci = cedula.toString().split('');

        if (ci.length > 10 || ci.length < 10) {
          return false;
        }

        var digitoRegion = Number(ci[0] + ci[1]);

        if (digitoRegion < 1 || digitoRegion > 24) {
          return false;
        }

        var tercerDigito = Number(ci[2]);

        if (tercerDigito < 0 || tercerDigito > 6) {
          return false;
        }

        var suma = 0;
        var val = 0;

        for (var i = 0; i < 9; i++) {
          if (i & 1) {
            val = ci[i] * 1;

            if (val >= 10) {
              val = val - 9;
            }
          } else {
            val = ci[i] * 2;

            if (val >= 10) {
              val = val - 9;
            }
          }

          suma += val;
        }

        suma = suma % 10 ? 10 - suma % 10 : 0;

        if (suma === Number(ci[ci.length - 1])) {
          return true;
        } else {
          return false;
        }
      }

      function _checkDateEnd(group) {
        var dateStart = group.controls.from.value;
        var dateEnd = group.controls.to.value;
        return new Date(dateEnd).valueOf() >= new Date(dateStart).valueOf() ? null : {
          notSame: true
        };
      }

      function _matchValues(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.matchValues) {
            // Devolver si ya existe un error en el control de comparación
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              matchValues: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    30150:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/chage-password/chage-password.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">Cambiar Contraseña</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form [formGroup]=\"passwordForm\" autocomplete=\"off\" class=\"form-horizontal\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                    <mat-label>Contraseña actual</mat-label>\r\n                    <input matInput [type]=\"showPasswordAnt ? 'text' : 'password'\" name=\"passwordAnt\" formControlName=\"passwordAnt\">\r\n                    <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"showPasswordAnt = !showPasswordAnt;\">\r\n                        {{showPasswordAnt?'visibility_off':'visibility'}}\r\n                    </mat-icon>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                    <mat-label>Nueva Contraseña</mat-label>\r\n                    <input matInput [type]=\"showPassword ? 'text' : 'password'\" name=\"password\" formControlName=\"password\">\r\n                    <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"showPassword = !showPassword;\">\r\n                        {{showPassword?'visibility_off':'visibility'}}\r\n                    </mat-icon>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                    <mat-label>Confirmar Contraseña</mat-label>\r\n                    <input matInput [type]=\"showRepPassword ? 'text' : 'password'\" name=\"repPassword\" formControlName=\"repPassword\">\r\n                    <mat-icon style=\"cursor: pointer;\" matSuffix (click)=\"showRepPassword = !showRepPassword;\">\r\n                        {{showRepPassword?'visibility_off':'visibility'}}\r\n                    </mat-icon>\r\n                    <mat-error *ngIf=\"passwordForm.hasError('matchValues', ['repPassword'])\">\r\n                        Las contraseñas no coinciden\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n       \r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"changePassword()\" [disabled]=\"!passwordForm.valid\" type=\"button\">\r\n        Guardar \r\n    </button>\r\n</div>\r\n";
      /***/
    },

    /***/
    65379:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/profile.component.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"header\">\r\n\t\t\t\t\t\t\t<h4 class=\"title\">Mi Perfil</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12\"> \r\n\t\t\t\t\t\t<div class=\"content table-responsive table-full-width\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"operator\" class=\"form-horizontal\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Cédula</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput name=\"ci\" formControlName=\"ci\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"col-md-6\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Nombre</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput name=\"fullName\" formControlName=\"fullName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"col-md-6\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Correo</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput name=\"email\" formControlName=\"email\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"col-md-6\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Rol</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput name=\"role\" formControlName=\"role\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-fill\" id=\"btnPassword\" (click)=\"changePassword()\">Cambiar Contraseña</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-fill\" id=\"btnGuardar\" (click)=\"updateAdmin()\">Modificar</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    49859:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/profile/chage-password/chage-password.component.scss ***!
      \****************************************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFnZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    56718:
    /*!******************************************************!*\
      !*** ./src/app/pages/profile/profile.component.scss ***!
      \******************************************************/

    /***/
    function _(module) {
      module.exports = "#btnPassword {\n  cursor: pointer;\n  margin-left: 35%;\n}\n\n#btnGuardar {\n  cursor: pointer;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidG5QYXNzd29yZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcbiNidG5HdWFyZGFye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es5.js.map