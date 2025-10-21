(function () {
  "use strict";

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["src_app_pages_neighborhoods_neighborhoods_module_ts"], {
    /***/
    244:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/neighborhoods/add-neighborhoods/add-neighborhoods.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNeighborhoodsComponent": function AddNeighborhoodsComponent() {
          return (
            /* binding */
            _AddNeighborhoodsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_neighborhoods_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-neighborhoods.component.html */
      12802);
      /* harmony import */


      var _add_neighborhoods_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-neighborhoods.component.scss */
      10765);
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


      var src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/loading/loader */
      81534);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! typescript.events */
      25260);

      var _AddNeighborhoodsComponent = /*#__PURE__*/function () {
        function AddNeighborhoodsComponent(dialogRef, dialog, data, fb, api, events) {
          _classCallCheck(this, AddNeighborhoodsComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this.fb = fb;
          this.api = api;
          this.events = events;
          this.title = '';
          this.idTeam = '';
          this.latE = null;
          this.lngE = null;
          this.heightE = '300px';
          this.files = [];
          dialogRef.disableClose = true;
          this.title = data.title;
          this.neighs = data.neighs;
          this.idTeam = data.idTeam;
        }

        return _createClass(AddNeighborhoodsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "clickMap",
          value: function clickMap() {
            this.mapCardRef.clickMap();
          }
        }, {
          key: "getUserLocation",
          value: function getUserLocation() {
            var _this = this;

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this.latE = position.coords.latitude;
                _this.lngE = position.coords.longitude;

                _this.form.patchValue({
                  lat: position.coords.latitude
                });

                _this.form.patchValue({
                  lng: position.coords.longitude
                });

                if (_this.mapCardRef.markerVectorLayer !== undefined) {
                  _this.mapCardRef.clearMarker();
                }

                _this.mapCardRef.setMarker(position.coords);

                _this.mapCardRef.centerMap(_this.lngE, _this.latE, 15); // this.mapCardRef.clickMap(position.coords);

              });
            } else {
              console.log('User not allow');
            }
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.latE = this.title === 'Agregar' ? '-2.8974172' : this.neighs.lat;
            this.lngE = this.title === 'Agregar' ? '-79.0070696' : this.neighs.lng;
            this.form = this.fb.group({
              name: [this.title === 'Agregar' ? '' : this.neighs.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              identifier: [this.title === 'Agregar' ? '' : this.neighs.identifier, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              description: [this.title === 'Agregar' ? '' : this.neighs.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              radius: [this.title === 'Agregar' ? '' : this.neighs.radius, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              team: [this.idTeam],
              lat: [this.title === 'Agregar' ? '-2.8974172' : this.neighs.lat],
              lng: [this.title === 'Agregar' ? '-79.0070696' : this.neighs.lng]
            });
            this.form.get('identifier').disable();
          }
        }, {
          key: "setLatLng",
          value: function setLatLng(coors) {
            this.form.patchValue({
              lat: coors.lat
            });
            this.form.patchValue({
              lng: coors.lng
            });
          }
        }, {
          key: "configNeighs",
          value: function configNeighs() {
            if (this.title === 'Editar') {
              this.putneighss();
            } else {
              this.postNeighborhood();
            }
          }
        }, {
          key: "postNeighborhood",
          value: function postNeighborhood() {
            var _this2 = this;

            (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.startLoading)();
            this.api.postNeighborhood(this.form.value).subscribe(function (resp) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Central creado correctamente', 'btn btn-fill btn-info').then(function (result) {
                _this2.close();
              });
            }, function (err) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          }
        }, {
          key: "putneighss",
          value: function putneighss() {
            var _this3 = this;

            (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.startLoading)();
            this.api.putNeighborhood(this.form.value, this.neighs._id).subscribe(function (resp) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('success', 'Correcto', 'Central actualizado correctamente', 'btn btn-fill btn-info').then(function (result) {
                _this3.close();
              });
            }, function (err) {
              (0, src_app_components_loading_loader__WEBPACK_IMPORTED_MODULE_2__.finishLoading)();
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          }
        }, {
          key: "errorsForm",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);
      }();

      _AddNeighborhoodsComponent.ctorParameters = function () {
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
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event
        }];
      };

      _AddNeighborhoodsComponent.propDecorators = {
        mapCardRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ['mapCardRef', {
            "static": false
          }]
        }]
      };
      _AddNeighborhoodsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-neighborhoods',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_neighborhoods_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_neighborhoods_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AddNeighborhoodsComponent);
      /***/
    },

    /***/
    69886:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/neighborhoods/centrals-info/centrals-info.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CentralsInfoComponent": function CentralsInfoComponent() {
          return (
            /* binding */
            _CentralsInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_centrals_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./centrals-info.component.html */
      68535);
      /* harmony import */


      var _centrals_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./centrals-info.component.scss */
      64061);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _CentralsInfoComponent = /*#__PURE__*/function () {
        function CentralsInfoComponent(dialogRef, data, fb, api) {
          _classCallCheck(this, CentralsInfoComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.fb = fb;
          this.api = api;
          this.title = '';
          this.central = null;
          this.centralName = '';
          this.options = ['Estado de la batería', 'Estado del sensor', 'Estado de corriente'];
          this.central = this.data.central;
          this.centralName = this.central.name;
        }

        return _createClass(CentralsInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            var actualDate = new Date();
            var lastWeekDate = new Date(actualDate);
            lastWeekDate.setDate(actualDate.getDate() - 7);
            this.form = this.fb.group({
              typeEvent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              startDate: [new Date(lastWeekDate.getFullYear(), lastWeekDate.getMonth(), lastWeekDate.getDate()).toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              endDate: [new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()).toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
          }
        }, {
          key: "identifyQueryType",
          value: function identifyQueryType(type) {
            var option;

            switch (type) {
              case 'Estado de la batería':
                option = 'battery-status';
                break;

              case 'Estado del sensor':
                option = 'sensor-status';
                break;

              case 'Estado de corriente':
                option = 'power-outage';
                break;

              default:
                option = '';
                break;
            }

            return option;
          }
        }, {
          key: "showInformation",
          value: function showInformation(queryType, resp) {
            var info;
            var strings = [];
            var field = [];

            if (queryType === 'Estado de la batería') {
              for (var i = 0; i < resp.boxStats.length; i++) {
                info = 'Estado de la batería';
                field.push(info);
                info = resp.boxStats[i].createdAt.split('T')[0];
                field.push(info);
                var date = new Date(resp.boxStats[i].createdAt);
                info = date.getHours() + ':' + date.getMinutes();
                field.push(info);
                info = resp.boxStats[i].batteryStatus + ' V';
                field.push(info);
                strings.push(field);
                info = '';
                field = [];
              }
            } else if (queryType === 'Estado del sensor') {
              for (var _i = 0; _i < resp.boxStats.length; _i++) {
                info = 'Estado del sensor';
                field.push(info);
                info = resp.boxStats[_i].createdAt.split('T')[0];
                field.push(info);

                var _date = new Date(resp.boxStats[_i].createdAt);

                info = _date.getHours() + ':' + _date.getMinutes();
                field.push(info);
                info = resp.boxStats[_i].sensorStatus === '0' ? 'Caja cerrada' : 'Caja abierta';
                field.push(info);
                strings.push(field);
                info = '';
                field = [];
              }
            } else if (queryType === 'Estado de corriente') for (var _i2 = 0; _i2 < resp.boxStats.length; _i2++) {
              info = 'Estado de corriente';
              field.push(info);
              info = resp.boxStats[_i2].createdAt.split('T')[0];
              field.push(info);

              var _date2 = new Date(resp.boxStats[_i2].createdAt);

              info = _date2.getHours() + ':' + _date2.getMinutes();
              field.push(info);
              info = resp.boxStats[_i2].powerOutage === '0' ? 'No conectado' : 'Conectado';
              field.push(info);
              strings.push(field);
              info = '';
              field = [];
            }

            return strings;
          }
        }, {
          key: "searchInfo",
          value: function searchInfo() {
            var _this4 = this;

            var queryType = this.identifyQueryType(this.form.get('typeEvent').value);
            this.api.getCentralInformation(queryType, this.central.identifier).subscribe(function (resp) {
              _this4.information = _this4.showInformation(_this4.form.get('typeEvent').value, resp);
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_3__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          }
        }, {
          key: "onSeleccionarOpcion",
          value: function onSeleccionarOpcion() {
            console.log('Opción seleccionada:', this.selectedOption); // Agrega aquí la lógica que necesites realizar cuando se seleccione una opción
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "errorsForm",
          get: function get() {
            return this.form.controls;
          }
        }]);
      }();

      _CentralsInfoComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _CentralsInfoComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-centrals-info',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_centrals_info_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_centrals_info_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CentralsInfoComponent);
      /***/
    },

    /***/
    38718:
    /*!****************************************************************!*\
      !*** ./src/app/pages/neighborhoods/neighborhoods.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeighborhoodsComponent": function NeighborhoodsComponent() {
          return (
            /* binding */
            _NeighborhoodsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_neighborhoods_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./neighborhoods.component.html */
      79834);
      /* harmony import */


      var _neighborhoods_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./neighborhoods.component.scss */
      82458);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var _add_neighborhoods_add_neighborhoods_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-neighborhoods/add-neighborhoods.component */
      244);
      /* harmony import */


      var src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/swal-alert */
      22176);
      /* harmony import */


      var _centrals_info_centrals_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./centrals-info/centrals-info.component */
      69886);

      var _NeighborhoodsComponent = /*#__PURE__*/function () {
        function NeighborhoodsComponent(api, route, fb, dialog, router) {
          _classCallCheck(this, NeighborhoodsComponent);

          this.api = api;
          this.route = route;
          this.fb = fb;
          this.dialog = dialog;
          this.router = router;
          this.neighborhoods = [];
          this.teams = [];
          this.selectTeam = false;
          this.pagination = {
            page: 1,
            pages: 1,
            itemsPage: 10,
            total: 1
          };
          this.wordToSearch = "";
          this.count = 0;
          this.countTeams = 0;
          this.role = '';
          var parameters = JSON.parse(atob(route.snapshot.paramMap.get('parameters')));
          this.team = parameters;
        }

        return _createClass(NeighborhoodsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = localStorage.getItem('role');
            this.createForm(); // this.getTeams();

            this.getNeighborhoodByTeam();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.searchForm = this.fb.group({
              value: ['']
            });
          }
        }, {
          key: "getNeighborhoodByTeam",
          value: function getNeighborhoodByTeam() {
            var _this5 = this;

            this.wordToSearch = this.searchForm.value.value;
            this.api.getNeighborhoodByTeam(this.team.id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(function (resp) {
              _this5.neighborhoods = resp.body['neighborhoods'];
              _this5.count = resp.body['pagination']['total'];
              _this5.pagination = resp.body['pagination'];
            }, function (err) {
              (0, src_app_utils_swal_alert__WEBPACK_IMPORTED_MODULE_4__.showAlert)('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
            });
          } // getTeams(){
          //   this.wordToSearch = this.searchForm.value.value;
          //   this.api.getTeams(this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
          //     this.teams = resp.body['teams'];
          //     this.countTeams = resp.body['pagination']['total'];
          //     // this.pagination = resp.body['pagination'];
          //   }, (err) => {
          //     console.log(err);
          //     console.log(this.teams.length);
          //     showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
          //   });
          // }
          // getNeighborhoodByTeam(team){
          //   this.selectTeam  = true;
          //   this.team = team;
          //   this.wordToSearch = this.searchForm.value.value;
          //   this.api.getNeighborhoodByTeam(this.team._id, this.pagination.page, this.pagination.itemsPage, this.wordToSearch).subscribe(resp => {
          //     this.neighborhoods = resp.body['neighborhoods'];
          //     this.count = resp.body['pagination']['total'];
          //     this.pagination = resp.body['pagination'];
          //   }, (err) => {
          //     showAlert('error', 'Error', 'Algo ha salido mal, intente más tarde!', 'btn btn-info');
          //   });
          // }

        }, {
          key: "changePage",
          value: function changePage(eventPage) {
            this.pagination.page = eventPage.pageIndex + 1;
            this.getNeighborhoodByTeam();
          }
        }, {
          key: "openModal",
          value: function openModal(opt, neighs) {
            var _this6 = this;

            var modal = this.dialog.open(_add_neighborhoods_add_neighborhoods_component__WEBPACK_IMPORTED_MODULE_3__.AddNeighborhoodsComponent, {
              width: '800px',
              data: {
                title: opt,
                neighs: neighs,
                idTeam: this.team.id
              }
            });
            modal.afterClosed().subscribe(function (result) {
              _this6.getNeighborhoodByTeam();
            });
          }
        }, {
          key: "openInfoModal",
          value: function openInfoModal(opt) {
            var modal = this.dialog.open(_centrals_info_centrals_info_component__WEBPACK_IMPORTED_MODULE_5__.CentralsInfoComponent, {
              width: '750px',
              data: {
                central: opt
              }
            });
            modal.afterClosed().subscribe(function (result) {// this.getTeams();
            });
          }
        }, {
          key: "showUsers",
          value: function showUsers(plant) {
            var data = {
              id: plant._id,
              name: plant.name,
              identifier: plant.identifier,
              team: this.team
            };
            var parameter = btoa(JSON.stringify(data));
            this.router.navigate(['list-neighbour/' + parameter]);
          }
        }]);
      }();

      _NeighborhoodsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _NeighborhoodsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-neighborhoods',
        template: _C_Users_Usuario_Documents_PHYSETER_Shadow_shadow_frontend_3_0_node_modules_ngtools_webpack_src_loaders_direct_resource_js_neighborhoods_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_neighborhoods_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _NeighborhoodsComponent);
      /***/
    },

    /***/
    94677:
    /*!*************************************************************!*\
      !*** ./src/app/pages/neighborhoods/neighborhoods.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeighborhoodsModule": function NeighborhoodsModule() {
          return (
            /* binding */
            _NeighborhoodsModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _neighborhoods_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./neighborhoods.routes */
      31009);
      /* harmony import */


      var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material/material.module */
      95123);
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-dropzone */
      54276);
      /* harmony import */


      var _neighborhoods_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./neighborhoods.component */
      38718);
      /* harmony import */


      var _add_neighborhoods_add_neighborhoods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-neighborhoods/add-neighborhoods.component */
      244);
      /* harmony import */


      var typescript_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! typescript.events */
      25260);
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/components.module */
      45642);
      /* harmony import */


      var _centrals_info_centrals_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./centrals-info/centrals-info.component */
      69886);

      var _NeighborhoodsModule = /*#__PURE__*/_createClass(function NeighborhoodsModule() {
        _classCallCheck(this, NeighborhoodsModule);
      });

      _NeighborhoodsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_neighborhoods_component__WEBPACK_IMPORTED_MODULE_3__.NeighborhoodsComponent, _add_neighborhoods_add_neighborhoods_component__WEBPACK_IMPORTED_MODULE_4__.AddNeighborhoodsComponent, _centrals_info_centrals_info_component__WEBPACK_IMPORTED_MODULE_7__.CentralsInfoComponent // MapCardComponent
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_neighborhoods_routes__WEBPACK_IMPORTED_MODULE_1__.NeighborhoodsRoutes), src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule],
        providers: [typescript_events__WEBPACK_IMPORTED_MODULE_5__.Event]
      })], _NeighborhoodsModule);
      /***/
    },

    /***/
    31009:
    /*!*************************************************************!*\
      !*** ./src/app/pages/neighborhoods/neighborhoods.routes.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeighborhoodsRoutes": function NeighborhoodsRoutes() {
          return (
            /* binding */
            _NeighborhoodsRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _neighborhoods_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./neighborhoods.component */
      38718);

      var _NeighborhoodsRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _neighborhoods_component__WEBPACK_IMPORTED_MODULE_0__.NeighborhoodsComponent
        }]
      }];
      /***/
    },

    /***/
    12802:
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/neighborhoods/add-neighborhoods/add-neighborhoods.component.html ***!
      \*******************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">{{title}} Central</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row mt-2\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                        <label class=\"form-control-label\">\r\n                            Ubicación\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                        <app-map-card [lat]=\"latE\" [lng]=\"lngE\" [opt]=\"'click'\" [heightE]=\"heightE\" (coorsEmit)=\"setLatLng($event)\" #mapCardRef></app-map-card>\r\n\r\n                        <button class=\"btn btn-primary map-button\" (click)=\"getUserLocation()\">\r\n                            <mat-icon id=\"icon-loc\">location_on</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\" *ngIf=\"false\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"form-control-label\">Latitud</label>\r\n                        <input class=\"form-control\" placeholder=\"Latitud\" type=\"text\"\r\n                                                                          formControlName=\"lat\" required=\"true\"\r\n                                                                                                (keypress)=\"validarCampoLngLat($event)\" />\r\n                        <small *ngIf=\"lat.errors && lat.touched\" class=\"text-danger\">\r\n                            * Latitud requerido\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"form-control-label\">Longitud</label>\r\n                        <input class=\"form-control\" placeholder=\"Longitud\" type=\"text\"\r\n                                                                           formControlName=\"lng\" required=\"true\"\r\n                                                                                                 (keypress)=\"validarCampoLngLat($event)\" />\r\n                        <small *ngIf=\"lng.errors && lng.touched\" class=\"text-danger\">\r\n                            * Longitud requerido\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\" *ngIf=\"title==='Editar'\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Identificador</mat-label>\r\n                        <input matInput name=\"identifier\" formControlName=\"identifier\">\r\n                        <mat-error *ngIf=\"(errorsForm.identifier.touched) && errorsForm.identifier.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Nombre</mat-label>\r\n                        <input matInput name=\"name\" formControlName=\"name\" oninput=\"javascript:this.value=this.value.toUpperCase();\">\r\n                        <mat-error *ngIf=\"(errorsForm.name.touched) && errorsForm.name.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Descripción</mat-label>\r\n                        <input matInput name=\"description\" formControlName=\"description\">\r\n                        <mat-error *ngIf=\"(errorsForm.description.touched) && errorsForm.description.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\" style=\"border: 2px #000000;\">\r\n                        <mat-label>Radio cobertura (m)</mat-label>\r\n                        <input matInput name=\"radius\" formControlName=\"radius\">\r\n                        <mat-error *ngIf=\"(errorsForm.radius.touched) && errorsForm.radius.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions align=\"end\" class=\"dialog-footer\">\r\n    <button class=\"btn btn-fill btn-info btn-md\" (click)=\"configNeighs()\" [disabled]=\"!form.valid\" type=\"button\">\r\n        Guardar \r\n    </button>\r\n</div>\r\n";
      /***/
    },

    /***/
    68535:
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/neighborhoods/centrals-info/centrals-info.component.html ***!
      \***********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header1 text-left row mb-1\">\r\n    <h6 class=\"modal-title\">{{centralName}}</h6>\r\n    <button type=\"button\" class=\"close mt--5 mr--2\" (click)=\"close()\">\r\n        <i class=\"fa fa-times icon-modal-close\"></i>\r\n    </button>\r\n</div>\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"row gx-3\">\r\n                    \r\n                    <mat-form-field class=\"col-xs-12 col-sm-3 col-md-3\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\" >\r\n                        <mat-label>Tipo de evento</mat-label>\r\n                        <mat-select formControlName=\"typeEvent\" required>\r\n                            <mat-option *ngFor=\"let opcion of options\" [value]=\"opcion\">{{ opcion }}</mat-option>\r\n                        </mat-select>\r\n                        <input matInput name=\"typeEvent\" formControlName=\"typeEvent\"\r\n                            oninput=\"javascript:this.value=this.value.toUpperCase();\">\r\n                        <mat-error *ngIf=\"(errorsForm.typeEvent.touched) && errorsForm.typeEvent.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-3 col-md-3\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Desde</mat-label>\r\n                        <input type=\"date\" matInput name=\"startDate\" formControlName=\"startDate\">\r\n                        <mat-error\r\n                            *ngIf=\"(errorsForm.startDate.touched) && errorsForm.startDate.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-xs-12 col-sm-3 col-md-3\" appearance=\"outline\"\r\n                        style=\"border: 2px #000000;\">\r\n                        <mat-label>Hasta</mat-label>\r\n                        <input type=\"date\" matInput name=\"endDate\" formControlName=\"endDate\">\r\n                        <mat-error *ngIf=\"(errorsForm.endDate.touched) && errorsForm.endDate.errors?.required\">\r\n                            Campo obligatorio\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                    \r\n                    <div class=\"d-flex justify-content-center align-items-center col-xs-12 col-sm-3 col-md-3\">\r\n\r\n                        <button class=\"btn btn-fill btn-info btn-md mt-2\" (click)=\"searchInfo()\" type=\"button\" [disabled]=\"form.invalid\">\r\n                            Filtrar\r\n                        </button>\r\n                    </div>\r\n                        \r\n                </div>\r\n                    \r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Tipo de evento</th>\r\n                <th>Fecha</th>\r\n                <th>Hora</th>\r\n                <th>Estado</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let info of information\">\r\n                <td *ngFor=\"let line of info\">\r\n                    {{ line }}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <!-- <div class=\"mat-card \" *ngFor=\"let info of information\">\r\n        <div class=\"row mb-3 card-padding\">\r\n            <p class=\"col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let line of info\">{{line}}</p>\r\n        </div>\r\n        \r\n    </div> -->\r\n    \r\n    <!-- <div mat-dialog-actions align=\"end\" class=\"dialog-footer\"> -->\r\n    <!-- </div> -->\r\n</mat-dialog-content>";
      /***/
    },

    /***/
    79834:
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/neighborhoods/neighborhoods.component.html ***!
      \*********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <div class=\"row\" *ngIf=\"countTeams > 1 && !selectTeam\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Teams asignados</h4>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-md-3\" *ngFor=\"let item of teams; let i=index\">\r\n                            <div class=\"card\" style=\"margin-right: 5px; margin-left: 5px;\" (click)=\"getNeighborhoodByTeam(item)\" >\r\n                                <article class=\"profile\">\r\n                                    <img src=\"data:image/png;base64,{{item.image}}\" class=\"contain\" />\r\n\r\n                                    <div class=\"name-event p-1\">\r\n                                        TEAM {{ item.name?.substring(0,87) + (item.name?.length > 87 ? '...' : '') }}\r\n                                    </div>\r\n        \r\n                                </article>\r\n                            </div>\r\n                        </div>\r\n    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n\r\n        <!-- *ngIf=\"selectTeam\" -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Centrales ({{team.name}}): {{ count }}</h4>\r\n                        <p class=\"category\"></p>\r\n                    </div>\r\n                    <br>\r\n                    <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-xs-12 col-sm-12 col-md-12\" appearance=\"outline\"\r\n                                    style=\"border: 2px #000000;\">\r\n                                    <mat-label>Buscar por nombre, identificador o descripción</mat-label>\r\n                                    <input matInput name=\"value\" (keyup)=\"getNeighborhoodByTeam()\"\r\n                                        formControlName=\"value\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <br>\r\n                    <div class=\"content table-responsive table-full-width\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Nombre</th>\r\n                                    <th>Identificador</th>\r\n                                    <th>Descripción</th>\r\n                                    <th class=\"text-right\">Acciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"neighborhoods.length > 0\">\r\n                                <tr *ngFor=\"let item of neighborhoods; let i=index;\">\r\n                                    <td class=\"td-size\">{{item.name}}</td>\r\n                                    <td class=\"td-size\">{{item.identifier}}</td>\r\n                                    <td class=\"td-size\">{{item.description}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <a (click)=\"openInfoModal(item)\" rel=\"tooltip\" title=\"Información\"\r\n                                            class=\"btn btn-danger btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-info\"></i>\r\n                                        </a>\r\n                                        <a (click)=\"showUsers(item)\" rel=\"tooltip\" title=\"Ver usuario\"\r\n                                            class=\"btn btn-primary btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-eye\"></i>\r\n                                        </a>\r\n                                        <a *ngIf=\"role === ('SUPER-ADMIN' || 'ADMINISTRATOR')\"\r\n                                            (click)=\"openModal('Editar', item)\" rel=\"tooltip\" title=\"Editar\"\r\n                                            class=\"btn btn-warning btn-simple btn-xs\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p class=\"msg-empty\" *ngIf=\"neighborhoods.length ===  0\">No existen registros</p>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"neighborhoods?.length !==0\" class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col d-flex justify-content-end\">\r\n                                <mat-paginator #paginator showFirstLastButtons [length]=\"pagination.total\"\r\n                                    [pageSize]=\"pagination.itemsPage\" (page)=\"changePage($event)\">\r\n                                </mat-paginator>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<caption>\r\n    <button *ngIf=\"role === 'SUPER-ADMIN' || role === 'ADMINISTRATOR'\" (click)=\"openModal('Agregar')\" id=\"addBtn\"\r\n        class=\"btn btn-icon btn-round btn-twitter\">\r\n        <img src=\"assets/img/icons/mas.png\">\r\n    </button>\r\n</caption>";
      /***/
    },

    /***/
    10765:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/neighborhoods/add-neighborhoods/add-neighborhoods.component.scss ***!
      \****************************************************************************************/

    /***/
    function _(module) {
      module.exports = "@charset \"UTF-8\";\n.custom-dropzone {\n  height: 80px;\n  width: auto;\n  background: #fff;\n  color: #000;\n  border: 5px dashed #fff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n  padding-top: 30px;\n}\nngx-dropzone,\n.custom-dropzone {\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.custom-dropzone {\n  height: 200px;\n  width: auto;\n  background: #fff;\n  color: #000;\n  border: 5px dashed #fff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n  padding-top: 30px;\n}\n.custom-dropzone-p {\n  height: 150px;\n  background: #fff;\n  color: #000;\n  border: 2px dashed #000;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 1px #ced4da;\n  font-size: 20px;\n}\n.custom-dropzone-p.ngx-dz-hovered {\n  border: 5px solid #eb4f4f;\n}\n.custom-dropzone.ngx-dz-hovered {\n  border: 5px solid black;\n}\n#preview {\n  display: flex;\n  height: 100px;\n  min-height: 100px;\n  min-width: 200px;\n  max-width: 200px;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  margin: 10px;\n  border-radius: 5px;\n  position: relative;\n}\n.center {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block;\n}\n.map-container {\n  position: relative;\n}\n.map-button {\n  position: absolute;\n  border: 1px solid #007bff;\n  background-color: #007bff;\n  border-top-left-radius: 70%;\n  color: white;\n  width: 5vh !important;\n  height: 5vh !important;\n  bottom: 0px;\n  right: 15px;\n  z-index: 1000;\n  /* Asegura que el botón esté por encima del mapa */\n}\n#icon-loc {\n  font-size: 25px;\n  position: absolute;\n  /* Asegura que el icono tenga posición absoluta */\n  top: 12px;\n  /* Ajusta la posición vertical */\n  left: 12px;\n  /* Ajusta la posición horizontal */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZWlnaGJvcmhvb2RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJQTs7RUFHSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7QUFLQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBSEo7QUFNQTtFQUNJLHlCQUFBO0FBSEo7QUFNQTtFQUNJLHVCQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1BO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFISjtBQU9BO0VBQ0ksa0JBQUE7QUFKSjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUFlLGtEQUFBO0FBSG5CO0FBTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFBb0IsaURBQUE7RUFDcEIsU0FBQTtFQUFXLGdDQUFBO0VBQ1gsVUFBQTtFQUFZLGtDQUFBO0FBQWhCIiwiZmlsZSI6ImFkZC1uZWlnaGJvcmhvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmN1c3RvbS1kcm9wem9uZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDVweCBkYXNoZWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggI2NlZDRkYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxubmd4LWRyb3B6b25lLFxuLmN1c3RvbS1kcm9wem9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWRyb3B6b25lIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDVweCBkYXNoZWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggI2NlZDRkYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmN1c3RvbS1kcm9wem9uZS1wIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDFweCAjY2VkNGRhO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jdXN0b20tZHJvcHpvbmUtcC5uZ3gtZHotaG92ZXJlZCB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlYjRmNGY7XG59XG5cbi5jdXN0b20tZHJvcHpvbmUubmd4LWR6LWhvdmVyZWQge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbn1cblxuI3ByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXAtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDV2aCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDV2aCAhaW1wb3J0YW50O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIEFzZWd1cmEgcXVlIGVsIGJvdMOzbiBlc3TDqSBwb3IgZW5jaW1hIGRlbCBtYXBhICovXG59XG5cbiNpY29uLWxvYyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBBc2VndXJhIHF1ZSBlbCBpY29ubyB0ZW5nYSBwb3NpY2nDs24gYWJzb2x1dGEgKi9cbiAgdG9wOiAxMnB4O1xuICAvKiBBanVzdGEgbGEgcG9zaWNpw7NuIHZlcnRpY2FsICovXG4gIGxlZnQ6IDEycHg7XG4gIC8qIEFqdXN0YSBsYSBwb3NpY2nDs24gaG9yaXpvbnRhbCAqL1xufSJdfQ== */";
      /***/
    },

    /***/
    64061:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/neighborhoods/centrals-info/centrals-info.component.scss ***!
      \********************************************************************************/

    /***/
    function _(module) {
      module.exports = ".card-padding {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWxzLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVBO0VBQ0UsYUFBQTtBQTFFRiIsImZpbGUiOiJjZW50cmFscy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9JbWFnZXNcclxuXHJcbi8vIC5jdXN0b20tZHJvcHpvbmUge1xyXG4vLyAgIGhlaWdodCAgICAgICA6IDgwcHg7XHJcbi8vICAgd2lkdGggICAgICAgIDogYXV0bztcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiAjY2VkNGRhO1xyXG4vLyAgIGJhY2tncm91bmQgICA6ICNmZmY7XHJcbi8vICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuLy8gICBib3JkZXIgICAgICAgOiA1cHggZGFzaGVkICNmZmY7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIGJveC1zaGFkb3cgICA6IDBweCAxcHggM3B4IDFweCAjY2VkNGRhO1xyXG4vLyAgIGZvbnQtc2l6ZSAgICA6IDIwcHg7XHJcbi8vICAgcGFkZGluZy10b3AgIDogMzBweDtcclxuLy8gfVxyXG5cclxuLy8gbmd4LWRyb3B6b25lLFxyXG4vLyAuY3VzdG9tLWRyb3B6b25lIHtcclxuLy8gICAvLyBtYXJnaW46IDIwcHg7XHJcbi8vICAgbWFyZ2luLXRvcCAgOiAyMHB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0IDogYXV0bztcclxuLy8gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vICAgZGlzcGxheSAgICAgOiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1kcm9wem9uZSB7XHJcbi8vICAgaGVpZ2h0ICAgICAgIDogMjAwcHg7XHJcbi8vICAgd2lkdGggICAgICAgIDogYXV0bztcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiAjY2VkNGRhO1xyXG4vLyAgIGJhY2tncm91bmQgICA6ICNmZmY7XHJcbi8vICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuLy8gICBib3JkZXIgICAgICAgOiA1cHggZGFzaGVkICNmZmY7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIGJveC1zaGFkb3cgICA6IDBweCAxcHggM3B4IDFweCAjY2VkNGRhO1xyXG4vLyAgIGZvbnQtc2l6ZSAgICA6IDIwcHg7XHJcbi8vICAgcGFkZGluZy10b3AgIDogMzBweDtcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1kcm9wem9uZS1wIHtcclxuLy8gICBoZWlnaHQgICAgICAgOiAxNTBweDtcclxuLy8gICBiYWNrZ3JvdW5kICAgOiAjZmZmO1xyXG4vLyAgIGNvbG9yICAgICAgICA6ICMwMDA7XHJcbi8vICAgYm9yZGVyICAgICAgIDogMnB4IGRhc2hlZCAjMDAwO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBib3gtc2hhZG93ICAgOiAwcHggMXB4IDNweCAxcHggI2NlZDRkYTtcclxuLy8gICBmb250LXNpemUgICAgOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuY3VzdG9tLWRyb3B6b25lLXAubmd4LWR6LWhvdmVyZWQge1xyXG4vLyAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMzUsIDc5LCA3OSk7XHJcbi8vIH1cclxuXHJcbi8vIC5jdXN0b20tZHJvcHpvbmUubmd4LWR6LWhvdmVyZWQge1xyXG4vLyAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuLy8gfVxyXG5cclxuLy8gI3ByZXZpZXcge1xyXG4vLyAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuLy8gICBoZWlnaHQgICAgICAgICA6IDEwMHB4O1xyXG4vLyAgIG1pbi1oZWlnaHQgICAgIDogMTAwcHg7XHJcbi8vICAgbWluLXdpZHRoICAgICAgOiAyMDBweDtcclxuLy8gICBtYXgtd2lkdGggICAgICA6IDIwMHB4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHRleHQtYWxpZ24gICAgIDogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zICAgIDogY2VudGVyO1xyXG4vLyAgIG1hcmdpbiAgICAgICAgIDogMTBweDtcclxuLy8gICBib3JkZXItcmFkaXVzICA6IDVweDtcclxuLy8gICBwb3NpdGlvbiAgICAgICA6IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAuY2VudGVyIHtcclxuLy8gICBtYXJnaW4tbGVmdCA6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gICBkaXNwbGF5ICAgICA6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4uY2FyZC1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    82458:
    /*!******************************************************************!*\
      !*** ./src/app/pages/neighborhoods/neighborhoods.component.scss ***!
      \******************************************************************/

    /***/
    function _(module) {
      module.exports = "article {\n  background-color: #1E1E1E;\n}\n\n.profile:hover {\n  border: 1.5px solid #1DA1F2;\n}\n\n.profile {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 6px;\n  position: relative;\n  border: 3px solid transparent;\n  background-clip: padding-box;\n  text-align: center;\n  color: #f1f3f3;\n  transition: transform 0.2s;\n  border: 0.4px solid #0101018b;\n}\n\n.profile:after {\n  content: \"\";\n  display: block;\n  top: -3px;\n  left: -3px;\n  bottom: -3px;\n  right: -3px;\n  z-index: -1;\n  position: absolute;\n  border-radius: 16px;\n}\n\n.profile img {\n  width: 100% !important;\n  min-height: 222px;\n  max-height: 222px;\n  border-radius: 5px 5px 0 0;\n}\n\n.profile p {\n  font-size: 48%;\n}\n\n.profile .name-event {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5laWdoYm9yaG9vZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBR0k7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQURSOztBQUlJO0VBQ0ksY0FBQTtBQUZSOztBQUtJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFIUiIsImZpbGUiOiJuZWlnaGJvcmhvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFydGljbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcclxufVxyXG5cclxuLnByb2ZpbGU6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMURBMUYyO1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICBjdXJzb3IgICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgIDogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zICAgICAgICAgICA6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uICAgICAgICA6IGNvbHVtbjtcclxuICAgIHdpZHRoICAgICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciAgICAgIDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICA6IDZweDtcclxuICAgIHBvc2l0aW9uICAgICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgIDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwICAgICAgIDogcGFkZGluZy1ib3g7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgICAgOiAjZjFmM2YzO1xyXG4gICAgdHJhbnNpdGlvbiAgICAgICAgICAgIDogdHJhbnNmb3JtIC4ycztcclxuICAgIGJvcmRlcjogMC40cHggc29saWQgIzAxMDEwMThiO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQgICAgICA6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheSAgICAgIDogYmxvY2s7XHJcbiAgICAgICAgdG9wICAgICAgICAgIDogLTNweDtcclxuICAgICAgICBsZWZ0ICAgICAgICAgOiAtM3B4O1xyXG4gICAgICAgIGJvdHRvbSAgICAgICA6IC0zcHg7XHJcbiAgICAgICAgcmlnaHQgICAgICAgIDogLTNweDtcclxuICAgICAgICB6LWluZGV4ICAgICAgOiAtMTtcclxuICAgICAgICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGggICAgICAgIDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQgICA6IDIyMnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQgICA6IDIyMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDglO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lLWV2ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplICA6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_neighborhoods_neighborhoods_module_ts-es5.js.map