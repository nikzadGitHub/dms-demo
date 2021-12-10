(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fps-fps-module"], {
    /***/
    "++FJ":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/fps-form/edit/edit.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>edit works!</p>\n";
      /***/
    },

    /***/
    "+PIh":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/sku/sku-index/sku-index.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PIh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>sku-index works!</p>\n\n<a class=\"btn btn-custom form-group\" [routerLink]=\"['/fps/sku-create']\">\n    <i class=\"cil-plus c-icon\"></i> &nbsp;New FPS SKU\n</a>";
      /***/
    },

    /***/
    "1Hbi":
    /*!*******************************************!*\
      !*** ./src/app/fps/api-client.service.ts ***!
      \*******************************************/

    /*! exports provided: ApiClientService */

    /***/
    function Hbi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiClientService", function () {
        return ApiClientService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /**
       * Manages requests to Backend's API.
       */


      var ApiClientService = /*#__PURE__*/function () {
        function ApiClientService(httpClient) {
          _classCallCheck(this, ApiClientService);

          this.httpClient = httpClient;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["settings"].apiBaseUrl + '/fps/';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          /**
           * Handler for any {@link HttpClient} failures.
           */

          this.errorHandler = function (response) {
            var errorMessage = '';

            if (response.error instanceof ErrorEvent) {
              errorMessage = response.error.message;
            } else {
              errorMessage = "Error Code: ".concat(response.status, "\nMessage: ").concat(response.message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
          };
        }
        /**
         * Sends a request with Get-method to Backend's API.
         *
         * @param path URL-encoded (Sub-route and optional parameters).
         */


        _createClass(ApiClientService, [{
          key: "get",
          value: function get(path) {
            return this.map(this.httpClient.get(this.baseUrl + path, this.httpOptions));
          }
          /**
           * Sends a request with Post-method to Backend's API.
           */

        }, {
          key: "post",
          value: function post(path, data) {
            return this.map(this.httpClient.post(this.baseUrl + path, data, this.httpOptions));
          }
          /**
           * Casts input {@link ApiJsonResponse} to given type {@link T}.
           */

        }, {
          key: "map",
          value: function map(json) {
            return json.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
              return e.data;
            }));
          }
        }]);

        return ApiClientService;
      }();

      ApiClientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        // FIXME: not even a single module-service should be provided directly in Root-App.
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiClientService);
      /***/
    },

    /***/
    "1P3P":
    /*!**********************************************************************!*\
      !*** ./src/app/fps/components/fps-form/create/create.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function P3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .p-dropdown .p-dropdown-label {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24gLnAtZHJvcGRvd24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "3cdH":
    /*!*********************************************!*\
      !*** ./src/app/fps/services/sku.service.ts ***!
      \*********************************************/

    /*! exports provided: SkuService */

    /***/
    function cdH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkuService", function () {
        return SkuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_fps_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/fps/api-client.service */
      "1Hbi");

      var SkuService = /*#__PURE__*/function () {
        function SkuService(apiClient) {
          _classCallCheck(this, SkuService);

          this.apiClient = apiClient;
        }

        _createClass(SkuService, [{
          key: "getList",
          value: function getList() {
            return this.apiClient.get('sku');
          }
        }, {
          key: "saveSku",
          value: function saveSku(data) {
            return this.apiClient.post('sku/createDraft', data);
          }
        }, {
          key: "saveRates",
          value: function saveRates(data) {
            return this.apiClient.post('rate/store', data);
          }
        }]);

        return SkuService;
      }();

      SkuService.ctorParameters = function () {
        return [{
          type: _app_fps_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]
        }];
      };

      SkuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_fps_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]])], SkuService);
      /***/
    },

    /***/
    "4wXG":
    /*!*******************************************!*\
      !*** ./src/app/fps/fps-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: FpsRoutingModule */

    /***/
    function wXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FpsRoutingModule", function () {
        return FpsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_fps_form_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/fps-form/index/index.component */
      "tUjy");
      /* harmony import */


      var _components_fps_form_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/fps-form/create/create.component */
      "DWIE");
      /* harmony import */


      var _components_sku_sku_index_sku_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/sku/sku-index/sku-index.component */
      "bKbt");
      /* harmony import */


      var _components_sku_sku_create_sku_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sku/sku-create/sku-create.component */
      "6/Gb");

      var routes = [{
        path: 'fps-listing',
        component: _components_fps_form_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
      }, {
        path: 'fps-create',
        component: _components_fps_form_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
      }, {
        path: 'sku-listing',
        component: _components_sku_sku_index_sku_index_component__WEBPACK_IMPORTED_MODULE_5__["SkuIndexComponent"]
      }, {
        path: 'sku-create',
        component: _components_sku_sku_create_sku_create_component__WEBPACK_IMPORTED_MODULE_6__["SkuCreateComponent"]
      }, {
        path: '**',
        redirectTo: 'fps-listing'
      }];

      var FpsRoutingModule = function FpsRoutingModule() {
        _classCallCheck(this, FpsRoutingModule);
      };

      FpsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FpsRoutingModule);
      /***/
    },

    /***/
    "5mmE":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/sku/sku-create/sku-create.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n\n    <div class=\"row\" #skuAddFormContainer>\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"mb-4\">\n                    <h2>Create FPS SKU Management</h2>\n                </div>\n\n                <hr>\n               \n                <form [formGroup]=\"skuAddForm\" id=\"skuAddForm\" (ngSubmit)=\"onSave()\"  class=\"form-horizontal\">\n                \n                    <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            FPS SKU No <span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <input type=\"text\" [readonly]=\"true\" formControlName=\"uuid\" id=\"uuid\" class=\"form-control\">\n                            <app-form-error-presentation [displayError]=\"isFieldValid('uuid')\" errorMsg=\"Uuid is rquired.\">\n                            </app-form-error-presentation>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Validity Start Date<span class=\"asterisk\"> * </span> \n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-calendar [showTime]=\"false\" dateFormat='yy-mm-dd' formControlName=\"validity_start_at\"></p-calendar>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            FPS Type  <span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-dropdown formControlName=\"package_type_id\" id=\"package_type_id\" [options]=\"fpsTypeList\" optionLabel=\"title\"\n                                optionValue=\"id\" styleClass=\"form-control\" \n                                placeholder=\"Select FPS Type\" emptyMessage=\"No FPS Type Available\">\n                            </p-dropdown>\n                            <app-form-error-presentation [displayError]=\"isFieldValid('package_type_id')\" errorMsg=\"FPS Type is rquired.\">\n                            </app-form-error-presentation>\n                            \n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Validity End Date \n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-calendar [showTime]=\"false\" dateFormat='yy-mm-dd' formControlName=\"validity_end_at\"></p-calendar>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\" >\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Country<span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-dropdown formControlName=\"country_code\" id=\"country_code\" [options]=\"countryList\" optionLabel=\"official_name\"\n                                optionValue=\"code\" styleClass=\"form-control\" \n                                placeholder=\"Select Country\" emptyMessage=\"No Country Available\">\n                            </p-dropdown>\n                            <app-form-error-presentation [displayError]=\"isFieldValid('country_code')\" errorMsg=\"Country is rquired.\">\n                            </app-form-error-presentation>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Interest\n                        </label>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group row\" > \n                                <div class=\"col-md-3\">\n                                    <mat-slide-toggle formControlName=\"has_interest\"  class=\"form-control\" #has_interest class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <input type=\"number\" step=\"0.1\" id=\"interest_rate\" *ngIf=\"has_interest.checked\" formControlName=\"interest_rate\"  class=\"form-control\">\n                                    <app-form-error-presentation [displayError]=\"isFieldValid('interest_rate')\" errorMsg=\"Interest Rate is rquired.\">\n                                    </app-form-error-presentation>\n                                </div>\n                            </div> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\" > \n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Financial Instititue<span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-dropdown formControlName=\"financier_id\" id=\"financier_id\" [options]=\"institutions_list\"  optionLabel=\"title\"\n                                optionValue=\"id\" styleClass=\"form-control\" \n                                placeholder=\"Select Institution\" emptyMessage=\"No Institution Available\">\n                            </p-dropdown>\n                            <app-form-error-presentation [displayError]=\"isFieldValid('financier_id')\" errorMsg=\"Financial Institution is rquired.\">\n                            </app-form-error-presentation>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Payment Frequency\n                        </label>\n                        <div class=\"col-md-4\">\n                            <div class=\"d-flex justify-content-between\">\n                                \n                                <div class=\"d-flex\">\n                                  <p-checkbox name=\"monthly_payment\" [binary]=\"true\" formControlName=\"monthly_payment\" inputId=\"status1\"></p-checkbox>\n                                  <label class=\"radio-label\" for=\"status1\">Monthly</label>\n                                </div>\n\n                                <div class=\"d-flex\">\n                                    <p-checkbox name=\"quarterly_payment\" [binary]=\"true\" formControlName=\"quarterly_payment\" inputId=\"status2\"></p-checkbox>\n                                    <label class=\"radio-label\" for=\"status2\">Quarterly</label>\n                                </div>\n\n                                <div class=\"d-flex\">\n                                    <p-checkbox name=\"half_yearly_payment\" [binary]=\"true\" formControlName=\"half_yearly_payment\" inputId=\"status3\"></p-checkbox>\n                                    <label class=\"radio-label\" for=\"status3\">Half-Yearly</label>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Mininumum Payment Amount\n                        </label>\n                        <div class=\"col-md-4\">\n                            <input type=\"number\" [readonly]=\"!min_payment.checked\" formControlName=\"min_payment_amount\"  class=\"form-control\">\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\" >\n                                <label class=\"col-md-8 col-form-label\" for=\"booking-reason\">\n                                    Mininumum Payment Amount\n                                </label>\n\n                                <div class=\"col-md-4\">\n                                    <mat-slide-toggle  #min_payment class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                    Min Payment Amount Currency\n                                </label>\n                                <div class=\"col-md-8\">\n                                    <p-dropdown  [disabled]=\"!min_payment.checked\" formControlName=\"currency_code\" [options]=\"currencies_list\" optionLabel=\"currency_code\"\n                                        optionValue=\"id\" styleClass=\"form-control\"\n                                        placeholder=\"$\" emptyMessage=\"No Currency Available\">\n                                    </p-dropdown>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-8 col-form-label\" for=\"booking-reason\">\n                                    Minimum Usage<span class=\"asterisk\"> * </span>\n                                </label>\n\n                                <div class=\"col-md-4\">\n                                    <mat-slide-toggle #min_usage class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n                            </div>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Minimum Usage<span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <input type=\"number\" [readonly]=\"!min_usage.checked\" formControlName=\"min_usage\" class=\"form-control\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-8 col-form-label\" for=\"booking-reason\">\n                                    Procedure Per Month<span class=\"asterisk\"> * </span>\n                                </label>\n    \n                                <div class=\"col-md-4\">\n                                    <mat-slide-toggle #min_procedure class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n                            </div>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            Minimum Procedure<span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <input type=\"number\" [readonly]=\"!min_procedure.checked\" formControlName=\"procedure_per_month\"  class=\"form-control\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\" >\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-8 col-form-label\" for=\"booking-reason\">\n                                    Consumable Usage<span class=\"asterisk\"> * </span>\n                                </label>\n\n                                <div class=\"col-md-4\">\n                                    <mat-slide-toggle #min_usage class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\" >\n                            Required Tenure<span class=\"asterisk\"> * </span>\n                        </label>\n                        <div class=\"col-md-4\">\n                            <p-inputNumber id=\"required_tenure\" formControlName=\"required_tenure\"></p-inputNumber>\n                            <app-form-error-presentation [displayError]=\"isFieldValid('required_tenure')\" errorMsg=\"Tenure is rquired.\">\n                            </app-form-error-presentation>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-8 col-form-label\" for=\"booking-reason\">\n                                    Agreement Number Mandatory<span class=\"asterisk\"> * </span>\n                                </label>\n\n                                <div class=\"col-md-4\">\n                                    <mat-slide-toggle formControlName=\"agreement_mandatory\"  class=\"example-margin\">\n                                    </mat-slide-toggle>\n                                </div>\n                            </div>\n                        </div>\n\n                        <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                            List of Document Required\n                        </label>\n\n                        <div class=\"col-md-4\">\n                            <textarea formControlName=\"required_docs\" data-lpignore=\"true\" rows=\"9\" class=\"form-control\"></textarea>\n                        </div>\n                    </div>                \n                </form>\n            </div>\n            </div>\n        </div>\n\n        <br>\n\n        <div class=\"col-sm-12 col-md-12 form-group\">\n            <form [formGroup]=\"rateAddForm\">\n                <p-accordion [multiple]=\"true\" styleClass=\"customColor\" activeIndex=\"0\">\n                    <!-- FPS SKU Rate -->\n                    <p-accordionTab header=\"FPS SKU Rate\">\n                        <div class=\"row\">\n                            <table class=\"table table-borderless\" id=\"sku_rate\" formArrayName=\"addRates\">\n                                <thead>\n                                    <tr>\n                                        <th>Rate No</th>\n                                        <th>Validity Start Date</th>\n                                        <th>Validity End Date</th>\n                                        <th>Status</th>\n                                        <th>Type</th>\n                                        <th></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let cost of addRates().controls; let i=index\" [formGroupName]=\"i\"\n                                        align=\"center\">\n                                        <td style=\"width: 15%;\">\n                                            <input formControlName=\"rate_no\" size=\"1\" class=\"form-control\" type=\"number\">\n                                        </td>\n                                        <td style=\"width: 15%;\">\n                                            <input formControlName=\"validity_start_at\" class=\"form-control\" type=\"date\"\n                                                min=\"0\">\n                                        </td>\n                                        <td style=\"width: 10%;\">\n                                            <input formControlName=\"validity_end_at\" class=\"form-control\" type=\"date\" min=\"0\" step=\".01\">\n                                        </td>\n                                        <td style=\"width: 20%;\">\n                                            <p-dropdown  formControlName=\"status\" [options]=\"rateStatusList\" optionLabel=\"title\"\n                                                optionValue=\"id\" styleClass=\"form-control\" emptyMessage=\"No Status Available\">\n                                            </p-dropdown>\n                                        </td>\n                                        <td style=\"width: 15%;\">\n                                            <p-dropdown  formControlName=\"rate_type\" [options]=\"rateTypeOptions\" optionLabel=\"label\"\n                                                optionValue=\"value\" styleClass=\"form-control\" >\n                                            </p-dropdown>\n                                        </td>\n                                        <td class=\"td-actions\" style=\"width: 10%;\">\n                                            <a [routerLink]=\"\" routerLinkActive=\"router-link-active\"><i\n                                                    class=\"fa fa-edit\"></i></a> &nbsp;\n                                            <a [routerLink]=\"\" (click)=\"removeAddRates(i)\"\n                                                routerLinkActive=\"router-link-active\"><i class=\"fa fa-trash\"></i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tfoot align=\"center\">\n                                    <tr>\n                                        <td class=\"td-actions\" colspan=\"9\" align=\"center\">\n                                            <a [routerLink]=\"\" (click)=\"addAddRates()\"\n                                                routerLinkActive=\"router-link-active\">\n                                                <i class=\"icon-plus icons\"></i>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </tfoot>\n                            </table>\n                        </div>\n                    </p-accordionTab>\n                    <!-- End of FPS SKU Rate Accordion -->\n                </p-accordion>\n            </form>\n        </div>\n    </div><!--/.row-->\n\n    <div class=\"col-sm-12 col-md-12 form-group\">\n        <div class=\"custom-footer d-flex justify-content-center\">\n            <button type=\"button\" (click)=\"cancelSkuForm()\" class=\"btn btn-sm btn-light\"> CANCEL</button>\n            <button type=\"submit\" form=\"skuAddForm\" class=\"btn btn-sm btn-primary\">Save</button>\n        </div>\n    </div>\n  </div>\n  <div\n    id=\"success\"\n    bsModal\n    #successModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{ alertBody }}</p>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n\n  <div\n  bsModal\n  #dangerModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Error</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->";
      /***/
    },

    /***/
    "5yTj":
    /*!*****************************************************!*\
      !*** ./src/app/_services/shared/country.service.ts ***!
      \*****************************************************/

    /*! exports provided: CountryService */

    /***/
    function yTj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _config_system_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config/system-config */
      "Hva9");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(httpClient) {
          _classCallCheck(this, CountryService);

          this.httpClient = httpClient;
        }

        _createClass(CountryService, [{
          key: "getCountry",
          value: function getCountry() {
            return this.httpClient.get(_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/countries-list").pipe();
          }
        }]);

        return CountryService;
      }();

      CountryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CountryService);
      /***/
    },

    /***/
    "6/Gb":
    /*!***********************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-create/sku-create.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SkuCreateComponent */

    /***/
    function Gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkuCreateComponent", function () {
        return SkuCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sku_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sku-create.component.html */
      "5mmE");
      /* harmony import */


      var _sku_create_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sku-create.component.scss */
      "xsI2");
      /* harmony import */


      var _common_shared_styles_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/shared.styles.component.scss */
      "Tb7i");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/common/dialog/dialog.service */
      "hLZb");
      /* harmony import */


      var _app_fps_services_sku_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/fps/services/sku.service */
      "3cdH");
      /* harmony import */


      var _app_services_shared_country_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/_services/shared/country.service */
      "5yTj");
      /* harmony import */


      var _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @app/_services/shared/finantial-institution.service */
      "xt7q");
      /* harmony import */


      var _app_services_shared_currency_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/_services/shared/currency.service */
      "u6Xs");
      /* harmony import */


      var _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @app/fps/fps.service */
      "EE25");

      var SkuCreateComponent = /*#__PURE__*/function () {
        function SkuCreateComponent(countryService, currencyService, institutionService, dialogService, zone, fb, SkuService, datePipe, router, fpsService) {
          _classCallCheck(this, SkuCreateComponent);

          this.countryService = countryService;
          this.currencyService = currencyService;
          this.institutionService = institutionService;
          this.dialogService = dialogService;
          this.zone = zone;
          this.fb = fb;
          this.SkuService = SkuService;
          this.datePipe = datePipe;
          this.router = router;
          this.fpsService = fpsService;
          this.rate_counter = 0;
          this.countryList = [];
          this.currencies_list = [];
          this.institutions_list = [];
          this.countryCode = 'MY';
          this.fpsTypeList = this.fpsService.getTransSactionTypeList();
          this.rateStatusList = this.fpsService.getrateStatusList();
          this.rateTypeOptions = [{
            'value': 'normal',
            'label': 'Normal'
          }, {
            'value': 'promotion',
            'label': 'Promotion'
          }];
        }

        _createClass(SkuCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.skuAddForm = this.fb.group({
              uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              validity_start_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](new Date()),
              package_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              validity_end_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](new Date()),
              country_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              interest_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              financier_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              has_interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              monthly_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              quarterly_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              half_yearly_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              currency_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              min_payment_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
              min_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
              consumable_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              procedure_per_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              required_tenure: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
              required_docs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              agreement_mandatory: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0')
            });
            this.rateAddForm = this.fb.group({
              addRates: this.fb.array([])
            });
            this.institutionService.getSkuAutoGeneratedKey().subscribe({
              next: function next(response) {
                if (response.success) {
                  _this.zone.run(function () {
                    _this.skuAddForm.controls.uuid.setValue('FPS-' + (response.data[0].id + 1));
                  });
                } else {
                  _this.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error) {
                if (_error.error.message != undefined) {
                  _this.dialogService.showErrorDialog(_error.error.message);
                } else {
                  _this.dialogService.showErrorDialog("Error retrieve institutions list");
                }
              }
            });
            this.countryService.getCountry().subscribe({
              next: function next(response) {
                if (response.success) {
                  _this.zone.run(function () {
                    _this.countryList = response.data.countries;
                  });
                } else {
                  _this.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error2) {
                if (_error2.error.message != undefined) {
                  _this.dialogService.showErrorDialog(_error2.error.message);
                } else {
                  _this.dialogService.showErrorDialog("Error retrieve country list");
                }
              }
            });
            this.institutionService.getFinancialInstition(this.countryCode).subscribe({
              next: function next(response) {
                if (response.success) {
                  _this.zone.run(function () {
                    _this.institutions_list = response.data.institutions;
                  });
                } else {
                  _this.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error3) {
                if (_error3.error.message != undefined) {
                  _this.dialogService.showErrorDialog(_error3.error.message);
                } else {
                  _this.dialogService.showErrorDialog("Error retrieve institutions list");
                }
              }
            });
            this.currencyService.getCurrencyList().subscribe({
              next: function next(response) {
                if (response.success) {
                  _this.zone.run(function () {
                    _this.currencies_list = response.data;
                  });
                } else {
                  _this.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error4) {
                if (_error4.error.message != undefined) {
                  _this.dialogService.showErrorDialog(_error4.error.message);
                } else {
                  _this.dialogService.showErrorDialog("Error retrieve currencies list");
                }
              }
            });
            this.setConditionalValidators();
          }
        }, {
          key: "setConditionalValidators",
          value: function setConditionalValidators() {
            var interest_rate = this.skuAddForm.get('interest_rate');
            this.skuAddForm.get('has_interest').valueChanges.subscribe(function (has_interest) {
              if (has_interest == 1) {
                interest_rate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
              } else {
                interest_rate.clearValidators();
              }
            });
          } // initData()
          // {
          //   this.sku.forEach(element => {
          //     element.additional_costs.forEach(addCost => {
          //       this.addRates().push(this.existingRates(addCost));
          //     });
          //   });
          // }

        }, {
          key: "onSave",
          value: function onSave() {
            var _this2 = this;

            if (!this.skuAddForm.valid) {
              this.fpsService.validateAllFormFields(this.skuAddForm);
              this.skuAddFormContainerRef.nativeElement.scrollIntoView({
                behavior: 'smooth'
              });
              return;
            }

            this.SkuService.saveSku({
              uuid: this.skuAddForm.get("uuid").value + "",
              country_code: this.skuAddForm.get("country_code").value + "",
              financier_id: this.skuAddForm.get("financier_id").value + "",
              monthly_payment: this.skuAddForm.get("monthly_payment").value ? 1 : 0,
              quarterly_payment: this.skuAddForm.get("quarterly_payment").value ? 1 : 0,
              half_yearly_payment: this.skuAddForm.get("half_yearly_payment").value ? 1 : 0,
              package_type_id: this.skuAddForm.get("package_type_id").value + "",
              interest_rate: (this.skuAddForm.get("interest_rate").value ? this.skuAddForm.get("interest_rate").value : 0) + "",
              currency_code: this.skuAddForm.get("currency_code").value + "",
              validity_start_at: this.datePipe.transform(this.skuAddForm.get("validity_start_at").value, "yyyy-MM-dd"),
              validity_end_at: this.datePipe.transform(this.skuAddForm.get("validity_end_at").value, "yyyy-MM-dd"),
              required_docs: this.skuAddForm.get("required_docs").value + "",
              procedure_per_month: this.skuAddForm.get("procedure_per_month").value + "",
              min_usage: this.skuAddForm.get("min_usage").value + "",
              required_tenure: this.skuAddForm.get("required_tenure").value + "",
              agreement_mandatory: this.skuAddForm.get("agreement_mandatory").value + ""
            }).subscribe(function (res) {
              if (res.id) {
                _this2.alertBody = "FPS saved successfully.";

                _this2.successModal.show();

                setTimeout(function () {
                  _this2.successModal.hide();

                  var rates = _this2.rateAddForm.value.addRates;

                  for (var x = 0; x < rates.length; x++) {
                    var rate = {
                      'financial_package_id': res.id,
                      'validity_start_at': rates[x].validity_start_at,
                      'validity_end_at': rates[x].validity_end_at,
                      'status': rates[x].status,
                      'type': rates[x].rate_type
                    }; // Store rate.

                    _this2.storeRates(rate);
                  } // 

                }, 2000);
              }
            }, function (err) {
              console.log(err);
              _this2.alertBody = "The FPS can't save <br>" + err;

              _this2.dangerModal.show();

              setTimeout(function () {
                _this2.dangerModal.hide();
              }, 2000);
            });
          }
        }, {
          key: "triggerFalseClick",
          value: function triggerFalseClick() {
            var el = this.submitSkuAdd.nativeElement;
            el.click();
          }
        }, {
          key: "cancelSkuForm",
          value: function cancelSkuForm() {
            this.router.navigateByUrl('/fps/sku-listing', {
              replaceUrl: true
            });
          } //---------------- SKU Rate  -------------------

        }, {
          key: "addRates",
          value: function addRates() {
            return this.rateAddForm.get("addRates");
          } // existingCosts(addRates): FormGroup {
          //   return this.fb.group({
          //     id: addRates.id,
          //     description: addRates.description,
          //     quantity: addRates.quantity,
          //     unit_price: addRates.unit_price,
          //     total_price: addRates.total_price,
          //     remarks: addRates.remarks,
          //   });
          // }

        }, {
          key: "newAddRates",
          value: function newAddRates() {
            return this.fb.group({
              rate_no: ++this.rate_counter,
              validity_start_at: 0,
              validity_end_at: 0.0,
              status: 1,
              rate_type: 'normal'
            });
          }
        }, {
          key: "addAddRates",
          value: function addAddRates() {
            this.addRates().push(this.newAddRates());
          }
        }, {
          key: "removeAddRates",
          value: function removeAddRates(i) {
            this.addRates().removeAt(i);
          } //---------------- End of  SKU Rate -------------------

        }, {
          key: "storeRates",
          value: function storeRates(rate) {
            this.SkuService.saveRates(rate).subscribe(function (res) {
              if (res.id) {
                console.log("Rates Stored successfully.");
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.skuAddForm.get(field).valid && this.skuAddForm.get(field).touched;
          }
        }]);

        return SkuCreateComponent;
      }();

      SkuCreateComponent.ctorParameters = function () {
        return [{
          type: _app_services_shared_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"]
        }, {
          type: _app_services_shared_currency_service__WEBPACK_IMPORTED_MODULE_13__["CurrencyService"]
        }, {
          type: _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_12__["FinancialInstitutionService"]
        }, {
          type: _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _app_fps_services_sku_service__WEBPACK_IMPORTED_MODULE_10__["SkuService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_14__["FpsService"]
        }];
      };

      SkuCreateComponent.propDecorators = {
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ["successModal"]
        }],
        dangerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ["dangerModal"]
        }],
        foundModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ["foundModal"]
        }],
        submitSkuAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['submitSkuAdd']
        }],
        skuAddFormContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['skuAddFormContainer']
        }]
      };
      SkuCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-sku-create',
        template: _raw_loader_sku_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sku_create_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _common_shared_styles_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_services_shared_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"], _app_services_shared_currency_service__WEBPACK_IMPORTED_MODULE_13__["CurrencyService"], _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_12__["FinancialInstitutionService"], _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _app_fps_services_sku_service__WEBPACK_IMPORTED_MODULE_10__["SkuService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_14__["FpsService"]])], SkuCreateComponent);
      /***/
    },

    /***/
    "DWIE":
    /*!********************************************************************!*\
      !*** ./src/app/fps/components/fps-form/create/create.component.ts ***!
      \********************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function DWIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
        return CreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create.component.html */
      "osIi");
      /* harmony import */


      var _create_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create.component.scss */
      "1P3P");
      /* harmony import */


      var _common_shared_styles_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/shared.styles.component.scss */
      "Tb7i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/common/dialog/dialog.service */
      "hLZb");
      /* harmony import */


      var _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/fps/fps.service */
      "EE25");
      /* harmony import */


      var _app_services_shared_app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/_services/shared/app.service */
      "m9/w");
      /* harmony import */


      var _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/_services/shared/finantial-institution.service */
      "xt7q");

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(fb, fpsService, appService, institutionService, zone, dialogService, activatedRoute) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.fpsService = fpsService;
          this.appService = appService;
          this.institutionService = institutionService;
          this.zone = zone;
          this.dialogService = dialogService;
          this.activatedRoute = activatedRoute;
          this.agreement_mandatory = false;
          this.payment_frequency_list = [{
            'value': 'monthly_payment',
            'label': 'Monthly'
          }, {
            'value': 'quarterly_payment',
            'label': 'Quarterly'
          }, {
            'value': 'half_yearly_payment',
            'label': 'Half-yearly'
          }];
          this.tenure_list = [];
          this.countryCode = 'MY';
          this.oppt_details = {
            opportunity_code: '',
            created_at: '',
            currency_code: '',
            amount: '',
            bill_to: ''
          };
          this.fpsTypeList = this.fpsService.getTransSactionTypeList();
          this.fpsStatusList = this.fpsService.getFpsStatusList();
        }

        _createClass(CreateComponent, [{
          key: "form_controls",
          get: function get() {
            return this.fpsAddForm.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.fpsAddForm = this.fb.group({
              fps_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              fps_opportunity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_quote_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_soci_uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_transaction_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_financier_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              fps_payment_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              fps_status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_tenure_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              fps_adv_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_adv_payment_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_net_financing_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_monthly_payment_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_interest_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_validated_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_approved_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_leas_aggr_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_internal_aggr_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_currency_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_total_financial_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_min_payment_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_required_docs: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
              fps_data_area_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
            });
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this3.current_apportunity_id = params['opport_id'];

              _this3.fpsAddForm.controls.fps_opportunity_id.setValue(_this3.current_apportunity_id);
            }); // Get the opportity which PFS is going to be added to.

            this.appService.getQuery('/opportunity/detail/' + this.current_apportunity_id, null).subscribe(function (data) {
              _this3.oppt_details = data['data'];
              console.log('opptDetiasl', _this3.oppt_details);

              _this3.fpsAddForm.controls.fps_currency_code.setValue(_this3.oppt_details.currency_code);

              _this3.fpsAddForm.controls.fps_total_financial_amount.setValue(_this3.oppt_details.amount);

              _this3.fpsAddForm.controls.fps_data_area_id.setValue(_this3.oppt_details.bill_to.data_area_id);
            }); // Get list of users.

            this.fpsService.getUsersList().subscribe(function (res) {
              _this3.fps_user_list = res.data;
            });
            this.institutionService.getFPSAutoGeneratedKey().subscribe({
              next: function next(response) {
                if (response.success) {
                  _this3.zone.run(function () {
                    _this3.fpsAddForm.controls.fps_no.setValue('FPS' + (response.data[0].id + 1) + '-' + _this3.oppt_details.opportunity_code);
                  });
                } else {
                  _this3.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error5) {
                if (_error5.error.message != undefined) {
                  _this3.dialogService.showErrorDialog(_error5.error.message);
                } else {
                  _this3.dialogService.showErrorDialog("Error retrieve institutions list");
                }
              }
            });
            this.institutionService.getFinancialInstition(this.countryCode).subscribe({
              next: function next(response) {
                if (response.success) {
                  _this3.zone.run(function () {
                    _this3.institutions_list = response.data.institutions;
                  });
                } else {
                  _this3.dialogService.showErrorDialog(response.message);
                }
              },
              error: function error(_error6) {
                if (_error6.error.message != undefined) {
                  _this3.dialogService.showErrorDialog(_error6.error.message);
                } else {
                  _this3.dialogService.showErrorDialog("Error retrieve institutions list");
                }
              }
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            if (!this.fpsAddForm.valid) {
              this.fpsService.validateAllFormFields(this.fpsAddForm);
              this.fpsAddFormContainerRef.nativeElement.scrollIntoView({
                behavior: 'smooth'
              });
              return;
            }

            console.log('data', this.fpsAddForm);
            this.fpsService.saveFps({
              fps_no: this.fpsAddForm.get("fps_no").value + "",
              fps_opportunity_id: this.fpsAddForm.get("fps_opportunity_id").value + "",
              fps_quote_id: this.fpsAddForm.get("fps_quote_id").value + "",
              fps_payment_frequency: this.fpsAddForm.get("fps_no").value + ""
            }).subscribe(function (res) {
              if (res.id) {
                _this4.alertBody = "FPS saved successfully.";

                _this4.successModal.show();

                setTimeout(function () {
                  _this4.successModal.hide();
                }, 2000);

                _this4.fpsAddForm.reset();
              }
            }, function (err) {
              console.log(err);
              _this4.alertBody = "The FPS can't save";

              _this4.dangerModal.show();

              setTimeout(function () {
                _this4.dangerModal.hide();
              }, 2000);
            });
          }
        }, {
          key: "onChangeAdvancePayment",
          value: function onChangeAdvancePayment() {
            var totalAmount = this.fpsAddForm.controls.fps_total_financial_amount.value;
            var percentage = this.fpsAddForm.controls.fps_adv_payment_percentage.value;
            var adv_payment = totalAmount / 100 * percentage;
            this.fpsAddForm.controls.fps_net_financing_amount.setValue(totalAmount - adv_payment);
          }
        }, {
          key: "updateInterestRate",
          value: function updateInterestRate() {
            var rateID = this.fpsAddForm.controls.fps_tenure_id.value;
            var result = this.getFilteredCodes(this.tenure_list, "id", rateID);
            this.fpsAddForm.controls.fps_interest_rate.setValue(result[0].details_interest_rate);
            this.fpsAddForm.controls.fps_min_payment_amount.setValue(result[0].min_payment_amount);
            this.fpsAddForm.controls.fps_required_docs.setValue(result[0].required_docs);

            if (result[0].agreement_mandatory == 0) {
              this.agreement_mandatory = false;
            } else {
              this.agreement_mandatory = true;
            }

            this.updateMontlyPayment();
          }
        }, {
          key: "updateMontlyPayment",
          value: function updateMontlyPayment() {
            var totalPayment = parseFloat(this.fpsAddForm.controls.fps_total_financial_amount.value);
            var interestRate = parseFloat(this.fpsAddForm.controls.fps_interest_rate.value);
            var tenure = parseFloat(this.fpsAddForm.controls.fps_tenure_id.value);
            var calculatedVal = totalPayment * (1 + interestRate / 12 * tenure) / tenure;
            this.fpsAddForm.controls.fps_monthly_payment_amount.setValue(calculatedVal.toFixed(2));
          }
        }, {
          key: "updateTenure",
          value: function updateTenure() {
            var _this5 = this;

            var financial_id = this.fpsAddForm.controls.fps_financier_id.value;
            var payment_frequency = this.fpsAddForm.controls.fps_payment_frequency.value;
            var fps_transaction_type = this.fpsAddForm.controls.fps_transaction_type_id.value;
            fps_transaction_type = fps_transaction_type < 1 ? 1 : fps_transaction_type;
            financial_id = financial_id < 1 ? null : financial_id;
            this.fpsService.getTenureList(fps_transaction_type, financial_id, payment_frequency).subscribe(function (res) {
              if (res.length > 0) {
                res.unshift({
                  'id': '',
                  'details_tenure': 'Select Tenure'
                });
              } else {
                res.unshift({
                  'id': '',
                  'details_tenure': 'No Tenure Available'
                });
              }

              _this5.tenure_list = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getFilteredCodes",
          value: function getFilteredCodes(array, key, value) {
            return array.filter(function (e) {
              return e[key] == value;
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.fpsAddForm.get(field).valid && this.fpsAddForm.get(field).touched;
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_9__["FpsService"]
        }, {
          type: _app_services_shared_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]
        }, {
          type: _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_11__["FinancialInstitutionService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      CreateComponent.propDecorators = {
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ["successModal"]
        }],
        dangerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ["dangerModal"]
        }],
        foundModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ["foundModal"]
        }],
        fpsAddFormContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['fpsAddFormContainer']
        }]
      };
      CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_app_services_shared_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]],
        styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _common_shared_styles_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _app_fps_fps_service__WEBPACK_IMPORTED_MODULE_9__["FpsService"], _app_services_shared_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"], _app_services_shared_finantial_institution_service__WEBPACK_IMPORTED_MODULE_11__["FinancialInstitutionService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _app_common_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], CreateComponent);
      /***/
    },

    /***/
    "EE25":
    /*!************************************!*\
      !*** ./src/app/fps/fps.service.ts ***!
      \************************************/

    /*! exports provided: FpsService */

    /***/
    function EE25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FpsService", function () {
        return FpsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api-client.service */
      "1Hbi");
      /* harmony import */


      var _app_config_system_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/config/system-config */
      "Hva9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var FpsService = /*#__PURE__*/function () {
        function FpsService(httpClient, apiClient) {
          _classCallCheck(this, FpsService);

          this.httpClient = httpClient;
          this.apiClient = apiClient;
        }

        _createClass(FpsService, [{
          key: "getList",
          value: function getList() {
            return this.apiClient.get('fps');
          }
        }, {
          key: "saveFps",
          value: function saveFps(data) {
            return this.apiClient.post('fps/createDraft', data);
          }
        }, {
          key: "getTransSactionTypeList",
          value: function getTransSactionTypeList() {
            return [{
              'id': 1,
              'title': 'Non-Recourse Finance Lease/operating Lease'
            }, {
              'id': 2,
              'title': 'Bank Equipment Financing'
            }, {
              'id': 3,
              'title': 'Non-Recourse Variable Equipment Lease'
            }, {
              'id': 4,
              'title': 'Placement Instalment'
            }, {
              'id': 5,
              'title': 'Credit Card Instalment'
            }, {
              'id': 6,
              'title': 'New Office Physician'
            }, {
              'id': 7,
              'title': 'Short Term Equipment Rental'
            }, {
              'id': 8,
              'title': 'Company Instalment'
            }, {
              'id': 9,
              'title': 'Recourse Leases'
            }];
          }
        }, {
          key: "getFpsStatusList",
          value: function getFpsStatusList() {
            return [{
              'id': 1,
              'title': 'New'
            }, {
              'id': 2,
              'title': 'Submitted'
            }, {
              'id': 3,
              'title': 'Validated'
            }, {
              'id': 4,
              'title': 'Awaiting Quotation'
            }, {
              'id': 5,
              'title': 'Pending Customer Documents'
            }, {
              'id': 6,
              'title': 'Processing at Leasing Company'
            }, {
              'id': 7,
              'title': 'Internal Approval at Idsmeds'
            }, {
              'id': 8,
              'title': 'Approved at Leasing Company'
            }, {
              'id': 9,
              'title': 'Agreement signed'
            }, {
              'id': 10,
              'title': 'Closed'
            }, {
              'id': 11,
              'title': 'Cancelled'
            }];
          }
        }, {
          key: "getrateStatusList",
          value: function getrateStatusList() {
            return [{
              'id': 1,
              'title': 'Not Started'
            }, {
              'id': 2,
              'title': 'Active'
            }, {
              'id': 3,
              'title': 'Obsolete'
            }];
          }
        }, {
          key: "getTenureList",
          value: function getTenureList(fps_type_id, financial_id, payment_frequency) {
            return this.httpClient.get(_app_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/tenure-list/" + fps_type_id + "/" + financial_id + "/" + payment_frequency).pipe();
          }
        }, {
          key: "getUsersList",
          value: function getUsersList() {
            return this.httpClient.get(_app_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/user-list").pipe();
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this6 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                _this6.validateAllFormFields(control);
              }
            });
          }
        }]);

        return FpsService;
      }();

      FpsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]
        }];
      };

      FpsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]])], FpsService);
      /***/
    },

    /***/
    "LFMZ":
    /*!***********************************!*\
      !*** ./src/app/fps/fps.module.ts ***!
      \***********************************/

    /*! exports provided: FpsModule */

    /***/
    function LFMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FpsModule", function () {
        return FpsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sharedModule/prime-ng.module */
      "Wcfd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/table */
      "ZRSf");
      /* harmony import */


      var _fps_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./fps-routing.module */
      "4wXG");
      /* harmony import */


      var _components_fps_form_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/fps-form/create/create.component */
      "DWIE");
      /* harmony import */


      var _components_fps_form_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/fps-form/edit/edit.component */
      "UWs8");
      /* harmony import */


      var _components_sku_sku_create_sku_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/sku/sku-create/sku-create.component */
      "6/Gb");
      /* harmony import */


      var _components_sku_sku_edit_sku_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/sku/sku-edit/sku-edit.component */
      "kOxK");
      /* harmony import */


      var _components_sku_sku_index_sku_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/sku/sku-index/sku-index.component */
      "bKbt");
      /* harmony import */


      var _components_common_form_error_presentation_form_error_presentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/common/form-error-presentation/form-error-presentation.component */
      "NSvJ");

      var FpsModule = function FpsModule() {
        _classCallCheck(this, FpsModule);
      };

      FpsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_fps_form_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"], _components_fps_form_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"], _components_sku_sku_create_sku_create_component__WEBPACK_IMPORTED_MODULE_12__["SkuCreateComponent"], _components_sku_sku_edit_sku_edit_component__WEBPACK_IMPORTED_MODULE_13__["SkuEditComponent"], _components_sku_sku_index_sku_index_component__WEBPACK_IMPORTED_MODULE_14__["SkuIndexComponent"], _components_common_form_error_presentation_form_error_presentation_component__WEBPACK_IMPORTED_MODULE_15__["FormErrorPresentationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fps_routing_module__WEBPACK_IMPORTED_MODULE_9__["FpsRoutingModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__["PrimeNgModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"]]
      })], FpsModule);
      /***/
    },

    /***/
    "M1sz":
    /*!***********************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-index/sku-index.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function M1sz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza3UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "NSvJ":
    /*!****************************************************************************************************!*\
      !*** ./src/app/fps/components/common/form-error-presentation/form-error-presentation.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: FormErrorPresentationComponent */

    /***/
    function NSvJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormErrorPresentationComponent", function () {
        return FormErrorPresentationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_error_presentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-error-presentation.component.html */
      "jikh");
      /* harmony import */


      var _form_error_presentation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-error-presentation.component.scss */
      "qQbb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormErrorPresentationComponent = /*#__PURE__*/function () {
        function FormErrorPresentationComponent() {
          _classCallCheck(this, FormErrorPresentationComponent);
        }

        _createClass(FormErrorPresentationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormErrorPresentationComponent;
      }();

      FormErrorPresentationComponent.ctorParameters = function () {
        return [];
      };

      FormErrorPresentationComponent.propDecorators = {
        errorMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        displayError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FormErrorPresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-error-presentation',
        template: _raw_loader_form_error_presentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_error_presentation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormErrorPresentationComponent);
      /***/
    },

    /***/
    "Tb7i":
    /*!********************************************************************!*\
      !*** ./src/app/fps/components/common/shared.styles.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function Tb7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "opp-opportunity-booking {\n  width: 100%;\n}\n\n.card {\n  border-radius: 0;\n}\n\n.card-header {\n  background-color: #898485;\n  color: #FFFFFF;\n  border-radius: 0;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header {\n  font-size: 24px;\n  font-weight: bolder;\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header span.pi {\n  margin-top: -8px;\n  position: absolute;\n  right: 0.5em;\n  top: 50%;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header .p-accordion-header-link {\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-content {\n  padding: 0px;\n  overflow-x: hidden;\n}\n\ntd {\n  text-align: center;\n}\n\n::ng-deep .nav-link.active {\n  background: #2297e6 !important;\n  color: #FFFFFF !important;\n}\n\n::ng-deep .nav-tabs .nav-link {\n  border: none !important;\n  border-left: 1px solid !important;\n}\n\n.bg-lightgrey {\n  background: #fcfcfc;\n}\n\n.no-outline tr:first-child td {\n  border-top: none !important;\n}\n\n.no-outline tr:first-child th {\n  border-top: none !important;\n}\n\n.no-outline tr:last-child th {\n  border-bottom: none !important;\n}\n\n.no-outline tr:last-child td {\n  border-bottom: none !important;\n}\n\n.no-outline tr td:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr td:last-child {\n  border-right: none !important;\n}\n\n.no-outline tr th:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr th:last-child {\n  border-right: none !important;\n}\n\n.btn-custom {\n  background-color: #00538a;\n  border-color: #00538a;\n  color: #FFFFFF;\n}\n\n.chead {\n  font-size: 24px;\n  line-height: 34px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.btn-icon {\n  height: 2rem;\n  line-height: 1rem;\n  padding: 0 !important;\n  width: 2rem;\n  font-size: 1.2rem !important;\n  font-weight: bold;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.btn-in-tab {\n  position: absolute;\n  right: -3.5rem;\n  height: 1.5rem !important;\n  line-height: 0.75rem;\n  width: 1.5rem !important;\n  font-size: 0.9rem;\n}\n\n.btn-white {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n\n.btn-white i {\n  margin-top: 0.2rem;\n}\n\n.p-relative {\n  position: relative;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-125 {\n  padding: 1.25rem;\n}\n\n.b-btm-green {\n  border-bottom: solid 3px #5DBEC0;\n}\n\n.bg-opp {\n  background-color: #5DBEC0;\n}\n\n.table-price {\n  border-radius: 30px;\n}\n\n:host ::ng-deep {\n  /* Responsive */\n}\n\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  background-color: #898485;\n  color: white;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-paginator {\n  padding: 1rem;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-thead > tr > th {\n  text-align: left;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n:host ::ng-deep .p-datatable-opportunity .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n:host ::ng-deep .p-inputnumber, :host ::ng-deep .p-calendar {\n  width: 100%;\n}\n\n:host ::ng-deep p-checkbox + label {\n  display: inline-block;\n  margin-bottom: 0;\n  padding-left: 5px;\n}\n\n:host ::ng-deep .p-disabled {\n  background-color: #e4e7ea;\n  opacity: 1;\n}\n\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-opportunity .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC5zdHlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFFRTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ047O0FBQU07RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFFVjs7QUFBTTtFQUNJLGlCQUFBO0FBRVY7O0FBQ0U7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFFSSw4QkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLGlDQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7QUFIRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQ0FBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUF1REUsZUFBQTtBQTFERjs7QUFLTTtFQUNJLGlCQUFBO0FBSFY7O0FBT0U7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFMTjs7QUFPTTtFQUNJLHlCQUFBO0FBTFY7O0FBU0U7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFQTjs7QUFVRTtFQUNJLGdCQUFBO0FBUk47O0FBVU07RUFDSSxnQkFBQTtBQVJWOztBQWFNO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFYVjs7QUFjTTtFQUNJLGFBQUE7QUFaVjs7QUFlTTtFQUNJLGdCQUFBO0FBYlY7O0FBZ0JNO0VBQ0ksWUFBQTtBQWRWOztBQWlCTTtFQUNJLHlCQUFBO0FBZlY7O0FBb0JFO0VBQ0ksYUFBQTtBQWxCTjs7QUF1QkU7RUFDRSxXQUFBO0FBcEJKOztBQXVCRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXJCSjs7QUF1QkU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFyQko7O0FBMEJBO0VBSWM7O0lBRUksd0JBQUE7RUExQmhCO0VBNkJZO0lBQ0ksdUNBQUE7RUEzQmhCO0VBNkJnQjtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUEzQnBCO0VBNkJvQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxvQ0FBQTtJQUNBLGlCQUFBO0VBM0J4QjtFQThCb0I7SUFDSSxrQkFBQTtFQTVCeEI7QUFDRiIsImZpbGUiOiJzaGFyZWQuc3R5bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsib3BwLW9wcG9ydHVuaXR5LWJvb2tpbmcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjA7XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODQ4NTtcbiAgY29sb3I6I0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czowO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbUNvbG9yLnAtYWNjb3JkaW9uIHtcbiAgLnAtYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDI0cHg7IFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgc3Bhbi5waXtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMC41ZW07XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICB9XG4gICAgICAucC1hY2NvcmRpb24taGVhZGVyLWxpbmt7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gIH1cbiAgLnAtYWNjb3JkaW9uLWNvbnRlbnR7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbn1cblxudGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5uYXYtbGluay5hY3RpdmUgeyAgICBcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjMjI5N2U2ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0Z3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xufVxuXG4ubm8tb3V0bGluZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5vLW91dGxpbmUgdHI6Zmlyc3QtY2hpbGQgdGgge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uby1vdXRsaW5lIHRyOmxhc3QtY2hpbGQgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uby1vdXRsaW5lIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uby1vdXRsaW5lIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5vLW91dGxpbmUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm8tb3V0bGluZSB0ciB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uby1vdXRsaW5lIHRyIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUzOGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA1MzhhO1xuICAgIGNvbG9yOiNGRkZGRkY7ICAgIFxufVxuXG4uY2hlYWR7XG4gICAgZm9udC1zaXplOiAyNHB4OyAgICBcbiAgICBsaW5lLWhlaWdodDogMzRweDsgICAgXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4taWNvbntcbiAgaGVpZ2h0OiAycmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OyAgXG4gIHdpZHRoOiAycmVtOyAgXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7ICBcbiAgLy8gY29sb3I6IHdoaXRlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1pbi10YWJ7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICByaWdodDotMy41cmVtO1xuICBoZWlnaHQ6MS41cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xuICB3aWR0aDogMS41cmVtICFpbXBvcnRhbnQ7ICBcbiAgZm9udC1zaXplOjAuOXJlbTtcbn1cblxuLmJ0bi13aGl0ZXtcbiAgY29sb3I6I0ZGRkZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuLXdoaXRlIGl7XG4gIG1hcmdpbi10b3A6MC4ycmVtO1xufVxuXG4ucC1yZWxhdGl2ZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucC0we1xuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbn1cblxuLnAtMTI1e1xuICBwYWRkaW5nOjEuMjVyZW07XG59XG5cbi5iLWJ0bS1ncmVlbntcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICM1REJFQzA7XG59XG5cbi5iZy1vcHB7XG4gIGJhY2tncm91bmQtY29sb3I6IzVEQkVDMDtcbn1cblxuLnRhYmxlLXByaWNle1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAucC1wYWdpbmF0b3Ige1xuICAgICAgLnAtcGFnaW5hdG9yLWN1cnJlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuICB9XG4gIFxuICAucC1wcm9ncmVzc2JhciB7XG4gICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcbiAgXG4gICAgICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgICAgIH1cbiAgfVxuICBcbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIFxuICAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcbiAgICAgIG1pbi13aWR0aDogMjVyZW07XG4gIFxuICAgICAgdGQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gIH1cbiAgXG4gIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1vcHBvcnR1bml0eSB7XG4gICAgICAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODQ4NTsgXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICBcbiAgICAgIC5wLXBhZ2luYXRvciB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgXG4gICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICBcbiAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIH1cbiAgXG4gICAgICAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICB9XG4gIFxuICAvKiBSZXNwb25zaXZlICovXG4gIC5wLWRhdGF0YWJsZS1vcHBvcnR1bml0eSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7IFxuICAucC1pbnB1dG51bWJlciwgIC5wLWNhbGVuZGFye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgcC1jaGVja2JveCArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfSBcbiAgLnAtZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWE7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCB7XG4gICAgICAucC1kYXRhdGFibGUge1xuICAgICAgICAgICYucC1kYXRhdGFibGUtb3Bwb3J0dW5pdHkge1xuICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxheWVyLTIpO1xuICBcbiAgICAgICAgICAgICAgICAgID4gdGQge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAucC1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtLjRyZW0gMXJlbSAtLjRyZW0gLS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "UWs8":
    /*!****************************************************************!*\
      !*** ./src/app/fps/components/fps-form/edit/edit.component.ts ***!
      \****************************************************************/

    /*! exports provided: EditComponent */

    /***/
    function UWs8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit.component.html */
      "++FJ");
      /* harmony import */


      var _edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.component.scss */
      "msmA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent() {
          _classCallCheck(this, EditComponent);
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditComponent;
      }();

      EditComponent.ctorParameters = function () {
        return [];
      };

      EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EditComponent);
      /***/
    },

    /***/
    "bKbt":
    /*!*********************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-index/sku-index.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SkuIndexComponent */

    /***/
    function bKbt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkuIndexComponent", function () {
        return SkuIndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sku_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sku-index.component.html */
      "+PIh");
      /* harmony import */


      var _sku_index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sku-index.component.scss */
      "M1sz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SkuIndexComponent = /*#__PURE__*/function () {
        function SkuIndexComponent() {
          _classCallCheck(this, SkuIndexComponent);
        }

        _createClass(SkuIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkuIndexComponent;
      }();

      SkuIndexComponent.ctorParameters = function () {
        return [];
      };

      SkuIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sku-index',
        template: _raw_loader_sku_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sku_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SkuIndexComponent);
      /***/
    },

    /***/
    "ePxU":
    /*!*********************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-edit/sku-edit.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function ePxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza3UtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jikh":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/common/form-error-presentation/form-error-presentation.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jikh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"displayError\" >\n    <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\n    <span class=\"sr-only\">(error)</span>\n    <div class=\"error-msg\">\n      {{ errorMsg }}\n    </div>\n  </div>";
      /***/
    },

    /***/
    "kOxK":
    /*!*******************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-edit/sku-edit.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SkuEditComponent */

    /***/
    function kOxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkuEditComponent", function () {
        return SkuEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sku_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sku-edit.component.html */
      "nAPM");
      /* harmony import */


      var _sku_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sku-edit.component.scss */
      "ePxU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SkuEditComponent = /*#__PURE__*/function () {
        function SkuEditComponent() {
          _classCallCheck(this, SkuEditComponent);
        }

        _createClass(SkuEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkuEditComponent;
      }();

      SkuEditComponent.ctorParameters = function () {
        return [];
      };

      SkuEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sku-edit',
        template: _raw_loader_sku_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sku_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SkuEditComponent);
      /***/
    },

    /***/
    "m9/w":
    /*!*************************************************!*\
      !*** ./src/app/_services/shared/app.service.ts ***!
      \*************************************************/

    /*! exports provided: AppService */

    /***/
    function m9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var AppService = /*#__PURE__*/function () {
        function AppService(httpClient) {
          _classCallCheck(this, AppService);

          this.httpClient = httpClient;
          this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["settings"].apiBaseUrl;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(AppService, [{
          key: "getQuery",
          value: function getQuery(url) {
            var pageItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var query = url;

            if (pageItems != null) {
              query += '?page_items=' + pageItems;
            }

            return this.httpClient.get(this.apiURL + query, this.httpOptions);
          }
        }, {
          key: "postQuery",
          value: function postQuery(url, req) {
            var query = url; // this.httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');

            return this.httpClient.post(this.apiURL + query, JSON.stringify(req), this.httpOptions);
          }
        }]);

        return AppService;
      }();

      AppService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AppService);
      /***/
    },

    /***/
    "msmA":
    /*!******************************************************************!*\
      !*** ./src/app/fps/components/fps-form/edit/edit.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function msmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "nAPM":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/sku/sku-edit/sku-edit.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>sku-edit works!</p>\n";
      /***/
    },

    /***/
    "osIi":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fps/components/fps-form/create/create.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function osIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n\n    <form [formGroup]=\"fpsAddForm\" (ngSubmit)=\"onSave()\"  class=\"form-horizontal\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header d-flex b-btm-green\">\n                        <div class=\"chead\">Create FPS Request Form</div>\t\t\t\t\t\t\n                    </div>\n                    \n                    <div class=\"card-body\">\n                        <div class=\"card-row\">\n                            <div class=\"lead-data\">\n                                <div class=\"lead-header\">\n                                    <div class=\"row\">\n                                        <!-- Opportunity Detail help -->\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <h3 class=\"bold\">\n                                                    {{ oppt_details.bill_to.company_name }}\n                                                </h3>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3 lead-id\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">FPS Request No.</label>\n                                                <div class=\"bg-opp text-white p-1\">{{form_controls.fps_no.value}}</div>\n                                                <span> \n                                                    <input type=\"hidden\" formControlName=\"fps_no\"  class=\"form-control\">\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">Transaction Type</label>\n                                                <p-dropdown formControlName=\"fps_transaction_type_id\" (onChange)=\"updateTenure()\" [options]=\"fpsTypeList\" optionLabel=\"title\"\n                                                    optionValue=\"id\" styleClass=\"form-control\" \n                                                    emptyMessage=\"No FPS Type Available\">\n                                                </p-dropdown>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">Status</label>\n                                                 <p-dropdown formControlName=\"fps_status_id\" [options]=\"fpsStatusList\" optionLabel=\"title\"\n                                                    optionValue=\"id\" styleClass=\"form-control\" \n                                                    emptyMessage=\"No FPS Status Available\">\n                                                </p-dropdown>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"details grey\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">Created Date</label>\n                                                <div>\n                                                    {{ oppt_details.created_at | date: \"dd-MMM-yyyy\" }}\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">Opportunity ID </label>\n                                                <div>\n                                                    {{current_apportunity_id}}\n                                                    <input type=\"hidden\" formControlName=\"fps_opportunity_id\"  class=\"form-control\">\n\n                                                    <input type=\"hidden\" formControlName=\"fps_data_area_id\" title=\"fps_data_area_id\"  class=\"form-control\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">Quote ID (Version)</label>\n                                                <div>\n                                                    ...\n                                                    <!-- <input type=\"text\" formControlName=\"fps_no\"  class=\"form-control\"> -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group\">\n                                                <label class=\"bold\">SOCI No.</label>\n                                                <div>\n                                                    ... \n                                                    <!-- <input type=\"text\" formControlName=\"fps_no\"  class=\"form-control\"> -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" #fpsAddFormContainer>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"mb-4\">\n                            <h2>General</h2>\n                        </div>\n    \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Payment Frequency<span class=\"asterisk\"> * </span>\n                            </label>\n                            <div class=\"col-md-4\">\n                                <p-dropdown formControlName=\"fps_payment_frequency\" [options]=\"payment_frequency_list\" optionLabel=\"label\"\n                                    optionValue=\"value\" styleClass=\"form-control\" (onChange)=\"updateTenure()\"\n                                    placeholder=\"Select Frequency\" id=\"fps_payment_frequency\" emptyMessage=\"No Payment Frequency Available\">\n                                </p-dropdown>\n                                <app-form-error-presentation [displayError]=\"isFieldValid('fps_payment_frequency')\" errorMsg=\"Payment Frequency is rquired.\">\n                                </app-form-error-presentation>\n                            </div>\n    \n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Tenure \n                            </label>\n                            <div class=\"col-md-4\">                                \n                                <p-dropdown formControlName=\"fps_tenure_id\" id=\"fps_tenure_id\" [options]=\"tenure_list\" optionLabel=\"details_tenure\"\n                                    optionValue=\"id\" styleClass=\"form-control\" (onChange)=\"updateInterestRate()\">\n                                </p-dropdown>\n                                <app-form-error-presentation [displayError]=\"isFieldValid('fps_tenure_id')\" errorMsg=\"Tenure is rquired.\">\n                                </app-form-error-presentation>\n                            </div>\n                        </div>\n    \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\" >\n                                Financial Instititue<span class=\"asterisk\"> * </span>\n                            </label>\n                            <div class=\"col-md-4\">\n                                <p-dropdown formControlName=\"fps_financier_id\" id=\"fps_financier_id\" [options]=\"institutions_list\"  optionLabel=\"title\"\n                                    optionValue=\"id\" styleClass=\"form-control\" (onChange)=\"updateTenure()\"\n                                    placeholder=\"Select Institution\" emptyMessage=\"No Institution Available\">\n                                </p-dropdown>\n                                <app-form-error-presentation [displayError]=\"isFieldValid('fps_financier_id')\" errorMsg=\"Financial Instititue is rquired.\">\n                                </app-form-error-presentation>\n                                \n                            </div>\n    \n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Interest %\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" step=\"0.1\"  (change)=\"updateMontlyPayment()\" formControlName=\"fps_interest_rate\"  class=\"form-control\">\n                            </div>\n                        </div>\n    \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Currency<span class=\"asterisk\"> * </span>\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" formControlName=\"fps_currency_code\" [readonly]=\"true\" class=\"form-control\">\n                            </div>\n    \n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Monthly Payment Amount\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" formControlName=\"fps_monthly_payment_amount\"  class=\"form-control\">\n                            </div>\n                        </div>\n    \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Total Financial Amount<span class=\"asterisk\"> * </span>\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" formControlName=\"fps_total_financial_amount\"  class=\"form-control\">\n                            </div>\n    \n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Min Payment Amount\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"number\" formControlName=\"fps_min_payment_amount\"  class=\"form-control\">\n                            </div>\n                        </div>\n    \n                        <div class=\"form-group row\">\n    \n                            <div class=\"col-md-6\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Advance Payment (%)\n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <input type=\"number\" step=\"0.1\" (change)=\"onChangeAdvancePayment()\"  formControlName=\"fps_adv_payment_percentage\"  class=\"form-control\">\n                                    </div>\n                                </div>\n    \n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Advance Payment\n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <!-- percentage field -->\n                                        <input type=\"number\" formControlName=\"fps_adv_payment\"  class=\"form-control\">\n                                    </div>\n                                </div>\n    \n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Net Financing Amount\n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <!-- percentage field -->\n                                        <input type=\"number\" formControlName=\"fps_net_financing_amount\"  class=\"form-control\">\n                                    </div>\n                                </div>\n    \n                            </div>\n    \n                            <div class=\"col-md-6\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Remark\n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <textarea formControlName=\"fps_remarks\" rows=\"9\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div>\n                        \n                        <!-- Separate form fields  -->\n                        <hr>\n    \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Validated By\n                            </label>\n                            <div class=\"col-md-4\">\n                                <p-dropdown formControlName=\"fps_validated_by\" [options]=\"fps_user_list\" optionLabel=\"full_name\"\n                                    optionValue=\"id\" styleClass=\"form-control\" \n                                    placeholder=\"Select User\" emptyMessage=\"No User Available\">\n                                </p-dropdown>\n                            </div>\n    \n                            <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">\n                                Argeement No.\n                            </label>\n                            <div class=\"col-md-4\">\n                                <input type=\"text\"  [readonly]=\"this.fpsAddForm.controls.fps_status_id.value != 9\" formControlName=\"fps_leas_aggr_no\"  class=\"form-control\">\n                            </div> \n                        </div>\n                        \n                        <div class=\"form-group row\">\n    \n                            <div class=\"col-md-6\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Approved By \n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <p-dropdown formControlName=\"fps_approved_by\" [options]=\"fps_user_list\" optionLabel=\"full_name\"\n                                            optionValue=\"id\" styleClass=\"form-control\" \n                                            placeholder=\"Select User\" emptyMessage=\"No User Available\">\n                                        </p-dropdown>\n                                    </div>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-6\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-4 col-form-label\" for=\"booking-reason\">\n                                        Required Documents\n                                    </label>\n                                    <div class=\"col-md-8\">\n                                        <textarea formControlName=\"fps_required_docs\" rows=\"9\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div>\n    \n                        <div class=\"custom-footer d-flex justify-content-center\">\n                            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-plus\"></i> Save</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n            <br>\n    \n            <div class=\"col-sm-12 col-md-12 form-group\">\n                <h3>Consumable Usage</h3>\n                <!-- Here the fps list related to current opportunity is displayed -->\n                <!-- <app-fps-list></app-fps-list> -->\n                <p>Work on this section will be done later</p>\n            </div>\n    \n            <br>\n    \n            <div class=\"col-sm-12 col-md-12 form-group\">\n                <h3>File Library</h3>\n                <!-- Here the fps list related to current opportunity is displayed -->\n                <!-- <app-fps-list></app-fps-list> -->\n                <p>Work on this section will be done later</p>\n            </div>\n\n        </div>\n    </form>\n  </div>\n  <div\n    id=\"success\"\n    bsModal\n    #successModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{ alertBody }}</p>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n\n  <div\n  bsModal\n  #dangerModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Error</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n";
      /***/
    },

    /***/
    "qQbb":
    /*!******************************************************************************************************!*\
      !*** ./src/app/fps/components/common/form-error-presentation/form-error-presentation.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qQbb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error-msg {\n  color: #ff1814;\n}\n\n.fix-error-icon {\n  top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Zvcm0tZXJyb3ItcHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtBQUVKIiwiZmlsZSI6ImZvcm0tZXJyb3ItcHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1zZyB7XG4gICAgY29sb3I6ICNmZjE4MTQ7XG59XG4uZml4LWVycm9yLWljb24ge1xuICAgIHRvcDogMjdweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "u6Xs":
    /*!******************************************************!*\
      !*** ./src/app/_services/shared/currency.service.ts ***!
      \******************************************************/

    /*! exports provided: CurrencyService */

    /***/
    function u6Xs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrencyService", function () {
        return CurrencyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _config_system_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config/system-config */
      "Hva9");

      var CurrencyService = /*#__PURE__*/function () {
        function CurrencyService(httpClient) {
          _classCallCheck(this, CurrencyService);

          this.httpClient = httpClient;
        }

        _createClass(CurrencyService, [{
          key: "getCurrencyList",
          value: function getCurrencyList() {
            return this.httpClient.get(_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/currencies-list").pipe();
          }
        }]);

        return CurrencyService;
      }();

      CurrencyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CurrencyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CurrencyService);
      /***/
    },

    /***/
    "xsI2":
    /*!*************************************************************************!*\
      !*** ./src/app/fps/components/sku/sku-create/sku-create.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function xsI2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .p-dropdown .p-dropdown-label {\n  padding: 0px;\n}\n:host ::ng-deep table#sku_rate {\n  width: 95%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NrdS1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQVIiLCJmaWxlIjoic2t1LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtZHJvcGRvd24gLnAtZHJvcGRvd24tbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIHRhYmxlI3NrdV9yYXRlIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "xt7q":
    /*!*******************************************************************!*\
      !*** ./src/app/_services/shared/finantial-institution.service.ts ***!
      \*******************************************************************/

    /*! exports provided: FinancialInstitutionService */

    /***/
    function xt7q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinancialInstitutionService", function () {
        return FinancialInstitutionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_config_system_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/config/system-config */
      "Hva9");

      var FinancialInstitutionService = /*#__PURE__*/function () {
        function FinancialInstitutionService(httpClient) {
          _classCallCheck(this, FinancialInstitutionService);

          this.httpClient = httpClient;
        }

        _createClass(FinancialInstitutionService, [{
          key: "getFinancialInstition",
          value: function getFinancialInstition(countryCode) {
            return this.httpClient.get(_app_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/institutions-list/" + countryCode).pipe();
          }
        }, {
          key: "getSkuAutoGeneratedKey",
          value: function getSkuAutoGeneratedKey() {
            return this.httpClient.get(_app_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/get-last-fps-sku-id").pipe();
          }
        }, {
          key: "getFPSAutoGeneratedKey",
          value: function getFPSAutoGeneratedKey() {
            return this.httpClient.get(_app_config_system_config__WEBPACK_IMPORTED_MODULE_3__["SystemConfig"].apiBaseUrl + "/get-last-fps-id").pipe();
          }
        }]);

        return FinancialInstitutionService;
      }();

      FinancialInstitutionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      FinancialInstitutionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], FinancialInstitutionService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=fps-fps-module-es5.js.map