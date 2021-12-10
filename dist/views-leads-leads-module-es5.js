(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-leads-leads-module"], {
    /***/
    "1jgN":
    /*!****************************************************************!*\
      !*** ./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js ***!
      \****************************************************************/

    /*! exports provided: NgxCSVParserError, NgxCsvParser, NgxCsvParserComponent, NgxCsvParserModule */

    /***/
    function jgN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCSVParserError", function () {
        return NgxCSVParserError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCsvParser", function () {
        return NgxCsvParser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCsvParserComponent", function () {
        return NgxCsvParserComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCsvParserModule", function () {
        return NgxCsvParserModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "5lcw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NgxCSVParserError = function NgxCSVParserError() {
        _classCallCheck(this, NgxCSVParserError);
      };

      var NgxCsvParser = /*#__PURE__*/function () {
        function NgxCsvParser() {
          _classCallCheck(this, NgxCsvParser);

          this.defaultCSVParserConfig = {
            header: true,
            delimiter: ','
          };
        }

        _createClass(NgxCsvParser, [{
          key: "parse",
          value: function parse(csvFile, config) {
            var _this = this;

            config = Object.assign(Object.assign({}, this.defaultCSVParserConfig), config);
            var ngxCSVParserObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              try {
                var csvRecords = null;

                if (_this.isCSVFile(csvFile)) {
                  var reader = new FileReader();
                  reader.readAsText(csvFile);

                  reader.onload = function () {
                    var csvData = reader.result;

                    var csvRecordsArray = _this.csvStringToArray(csvData.trim(), config.delimiter);

                    var headersRow = _this.getHeaderArray(csvRecordsArray);

                    csvRecords = _this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length, config);
                    observer.next(csvRecords);
                    observer.complete();
                  };

                  reader.onerror = function () {
                    _this.badCSVDataFormatErrorHandler(observer);
                  };
                } else {
                  _this.notCSVFileErrorHandler(observer);
                }
              } catch (error) {
                _this.unknownCSVParserErrorHandler(observer);
              }
            });
            return ngxCSVParserObserver;
          }
        }, {
          key: "csvStringToArray",
          value: function csvStringToArray(csvDataString, delimiter) {
            var regexPattern = new RegExp("(\\".concat(delimiter, "|\\r?\\n|\\r|^)(?:\"((?:\\\\.|\"\"|[^\\\\\"])*)\"|([^\\").concat(delimiter, "\"\\r\\n]*))"), "gi");
            var matchedPatternArray = regexPattern.exec(csvDataString);
            var resultCSV = [[]];

            while (matchedPatternArray) {
              if (matchedPatternArray[1].length && matchedPatternArray[1] !== delimiter) {
                resultCSV.push([]);
              }

              var cleanValue = matchedPatternArray[2] ? matchedPatternArray[2].replace(new RegExp("[\\\\\"](.)", "g"), '$1') : matchedPatternArray[3];
              resultCSV[resultCSV.length - 1].push(cleanValue);
              matchedPatternArray = regexPattern.exec(csvDataString);
            }

            return resultCSV;
          }
        }, {
          key: "getDataRecordsArrayFromCSVFile",
          value: function getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, config) {
            var dataArr = [];
            var headersArray = csvRecordsArray[0];
            var startingRowToParseData = config.header ? 1 : 0;

            for (var i = startingRowToParseData; i < csvRecordsArray.length; i++) {
              var data = csvRecordsArray[i];

              if (data.length === headerLength && config.header) {
                var csvRecord = {};

                for (var j = 0; j < data.length; j++) {
                  if (data[j] === undefined || data[j] === null) {
                    csvRecord[headersArray[j]] = "";
                  } else {
                    csvRecord[headersArray[j]] = data[j].trim();
                  }
                }

                dataArr.push(csvRecord);
              } else {
                dataArr.push(data);
              }
            }

            return dataArr;
          }
        }, {
          key: "isCSVFile",
          value: function isCSVFile(file) {
            return file.name.toLowerCase().endsWith('.csv');
          }
        }, {
          key: "getHeaderArray",
          value: function getHeaderArray(csvRecordsArr) {
            var headers = csvRecordsArr[0];
            var headerArray = [];

            var _iterator = _createForOfIteratorHelper(headers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var header = _step.value;
                headerArray.push(header);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return headerArray;
          }
        }, {
          key: "notCSVFileErrorHandler",
          value: function notCSVFileErrorHandler(observer) {
            var ngcCSVParserError = this.errorBuilder('NOT_A_CSV_FILE', 'Selected file is not a csv File Type.', 2);
            observer.error(ngcCSVParserError);
          }
        }, {
          key: "unknownCSVParserErrorHandler",
          value: function unknownCSVParserErrorHandler(observer) {
            var ngcCSVParserError = this.errorBuilder('UNKNOWN_ERROR', 'Unknown error. Please refer to official documentation for library usage.', 404);
            observer.error(ngcCSVParserError);
          }
        }, {
          key: "badCSVDataFormatErrorHandler",
          value: function badCSVDataFormatErrorHandler(observer) {
            var ngcCSVParserError = this.errorBuilder('BAD_CSV_DATA_FORMAT', 'Unable to parse CSV File.', 1);
            observer.error(ngcCSVParserError);
          }
        }, {
          key: "errorBuilder",
          value: function errorBuilder(type, message, code) {
            var ngcCSVParserError = new NgxCSVParserError();
            ngcCSVParserError.type = type;
            ngcCSVParserError.message = message;
            ngcCSVParserError.code = code;
            return ngcCSVParserError;
          }
        }]);

        return NgxCsvParser;
      }();

      NgxCsvParser.ɵfac = function NgxCsvParser_Factory(t) {
        return new (t || NgxCsvParser)();
      };

      NgxCsvParser.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function NgxCsvParser_Factory() {
          return new NgxCsvParser();
        },
        token: NgxCsvParser,
        providedIn: "root"
      });

      var CSVParserConfig = function CSVParserConfig() {
        _classCallCheck(this, CSVParserConfig);
      };

      var NgxCsvParserComponent = /*#__PURE__*/function () {
        function NgxCsvParserComponent() {
          _classCallCheck(this, NgxCsvParserComponent);
        }

        _createClass(NgxCsvParserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NgxCsvParserComponent;
      }();

      NgxCsvParserComponent.ɵfac = function NgxCsvParserComponent_Factory(t) {
        return new (t || NgxCsvParserComponent)();
      };

      NgxCsvParserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NgxCsvParserComponent,
        selectors: [["lib-ngx-csv-parser"]],
        decls: 2,
        vars: 0,
        template: function NgxCsvParserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ngx-csv-parser works! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      var NgxCsvParserModule = function NgxCsvParserModule() {
        _classCallCheck(this, NgxCsvParserModule);
      };

      NgxCsvParserModule.ɵfac = function NgxCsvParserModule_Factory(t) {
        return new (t || NgxCsvParserModule)();
      };

      NgxCsvParserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgxCsvParserModule
      });
      NgxCsvParserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [NgxCsvParser],
        imports: [[]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParser, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'lib-ngx-csv-parser',
            template: "\n    <p>\n      ngx-csv-parser works!\n    </p>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxCsvParserModule, {
          declarations: [NgxCsvParserComponent],
          exports: [NgxCsvParserComponent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [NgxCsvParserComponent],
            imports: [],
            providers: [NgxCsvParser],
            exports: [NgxCsvParserComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-csv-parser
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-csv-parser.js.map

      /***/

    },

    /***/
    "2xa7":
    /*!********************************************************************!*\
      !*** ./src/app/views/leads/leads-import/leads-import.component.ts ***!
      \********************************************************************/

    /*! exports provided: LeadsImportComponent */

    /***/
    function xa7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsImportComponent", function () {
        return LeadsImportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leads_import_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leads-import.component.html */
      "g/oW");
      /* harmony import */


      var _leads_import_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leads-import.component.scss */
      "gpd2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-csv-parser */
      "1jgN");
      /* harmony import */


      var _leads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../leads.service */
      "1Btx");

      var LeadsImportComponent = /*#__PURE__*/function () {
        function LeadsImportComponent(ngxCsvParser, leadsService) {
          _classCallCheck(this, LeadsImportComponent);

          this.ngxCsvParser = ngxCsvParser;
          this.leadsService = leadsService;
          this.headers = ['Created Date', 'Lead ID', 'Company Name', 'Contact Name', 'Email', 'Phone', 'Prospect', 'Source'];
          this.errorList = [];
          this.displayData = 0;
          this.successCreate = 0;
          this.danger = 0;
          this.danger_number_of_record = 0;
          this.csvRecords = [];
          this.number_of_record = 0;
        }

        _createClass(LeadsImportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dragAreaClass = "dragarea";
          }
        }, {
          key: "onChange",
          value: function onChange(files) {
            var _this2 = this;

            if (files[0]) {
              this.ngxCsvParser.parse(files[0], {
                header: true,
                delimiter: ','
              }).pipe().subscribe(function (result) {
                _this2.displayData = 1;
                _this2.csvRecords = result;
              }, function (error) {
                console.log('Error', error);
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            var stopCreate = false;

            var _loop = function _loop(i, len) {
              _this3.csvRecords[i].mobile_number = _this3.csvRecords[i].phone;

              if (stopCreate) {
                _this3.danger = 1;
                _this3.successCreate = 0;
                return "break";
              }

              _this3.leadsService.store(_this3.csvRecords[i]).subscribe(function (res) {
                if (!res.success) {
                  stopCreate = true;
                }

                _this3.successCreate = 1;
                _this3.number_of_record += 1;
              }, function (errors) {
                if (_leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"].leadErrorMessage) {
                  _this3.errorList.push({
                    'row': i + 1,
                    'message': _leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"].leadErrorMessage
                  });
                }

                _this3.danger_number_of_record = 1 + _this3.number_of_record;
                _this3.danger = 1;
              });
            };

            for (var i = 0, len = this.csvRecords.length; i < len; i++) {
              var _ret = _loop(i, len);

              if (_ret === "break") break;
            }
          }
        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            this.dragAreaClass = "droparea";
            event.preventDefault();
          }
        }, {
          key: "onDragEnter",
          value: function onDragEnter(event) {
            this.dragAreaClass = "droparea";
            event.preventDefault();
          }
        }, {
          key: "onDragEnd",
          value: function onDragEnd(event) {
            this.dragAreaClass = "dragarea";
            event.preventDefault();
          }
        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            this.dragAreaClass = "dragarea";
            event.preventDefault();
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            this.dragAreaClass = "dragarea";
            event.preventDefault();
            event.stopPropagation();

            if (event.dataTransfer.files) {
              this.onChange(event.dataTransfer.files);
            }
          }
        }]);

        return LeadsImportComponent;
      }();

      LeadsImportComponent.ctorParameters = function () {
        return [{
          type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"]
        }, {
          type: _leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"]
        }];
      };

      LeadsImportComponent.propDecorators = {
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["dragover", ["$event"]]
        }],
        onDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["dragenter", ["$event"]]
        }],
        onDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["dragend", ["$event"]]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["dragleave", ["$event"]]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["drop", ["$event"]]
        }]
      };
      LeadsImportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-import',
        template: _raw_loader_leads_import_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_import_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"], _leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"]])], LeadsImportComponent);
      /***/
    },

    /***/
    "5UYh":
    /*!****************************************************************!*\
      !*** ./src/app/views/leads/leads-edit/leads-edit.component.ts ***!
      \****************************************************************/

    /*! exports provided: LeadsEditComponent */

    /***/
    function UYh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsEditComponent", function () {
        return LeadsEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leads_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leads-edit.component.html */
      "UKjf");
      /* harmony import */


      var _leads_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leads-edit.component.scss */
      "eIae");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../leads.service */
      "1Btx");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var LeadsEditComponent = /*#__PURE__*/function () {
        function LeadsEditComponent(formBuilder, leadsService, route, router) {
          _classCallCheck(this, LeadsEditComponent);

          this.formBuilder = formBuilder;
          this.leadsService = leadsService;
          this.route = route;
          this.router = router;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_8__;
          this.autoResize = true;
          this.reasons = ['Customer Budget', 'Low Budget', 'Scam'];
          this.form = this.formBuilder.group({
            id: '',
            created_at: '',
            company_name: '',
            contact_name: '',
            department: '',
            email: '',
            mobile_number: '',
            office_number: '',
            address: '',
            state: '',
            country: '',
            postcode: '',
            prospect_type: '',
            source: '',
            other_source: '',
            lead_status: '',
            able_to_contact: false,
            do_we_sell_these_product: false,
            products_thats_not_selling: '',
            reason_for_disqualifying: '',
            remark: '',
            lead_owner: '',
            additional_notes: '',
            modifiction_log: this.formBuilder.array([])
          });
        }

        _createClass(LeadsEditComponent, [{
          key: "form_controls",
          get: function get() {
            // console.log(this.form.controls)
            return this.form.controls;
          }
        }, {
          key: "getLog",
          get: function get() {
            return this.form.get("modifiction_log");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.route.paramMap.subscribe(function (params) {
              if (params.get('id')) {
                _this4.id = params.get('id');

                _this4.getData(params.get('id'));

                _this4.getModificationLog(_this4.id);
              }
            });
          }
        }, {
          key: "getData",
          value: function getData(id) {
            var _this5 = this;

            this.leadsService.find(id).subscribe(function (data) {
              _this5.form.patchValue(data.data);

              console.log(data);
            });
          }
        }, {
          key: "getModificationLog",
          value: function getModificationLog(id) {
            var _this6 = this;

            this.leadsService.getModificationLog(id).subscribe(function (data) {
              var log = _this6.form.get('modifiction_log');

              for (var index = 0; index < data.data.length; ++index) {
                log.push(_this6.formBuilder.group(data.data[index]));
              }

              console.log(log);
            });
          }
        }, {
          key: "redirectPage",
          value: function redirectPage() {
            this.router.navigateByUrl('leads/index');
          }
        }, {
          key: "CreateProspect",
          value: function CreateProspect() {
            var _this7 = this;

            this.leadsService.createProspect({
              lead_id: this.id
            }).subscribe(function (res) {
              console.log(res);
              _this7.alertBody = res.message || 'Created Prospect Successfully';

              _this7.successModal.show();
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this8 = this;

            this.leadsService.update(this.form.value, this.id).subscribe(function (res) {
              console.log(res);
              _this8.alertBody = res.message || 'Updated Successfully';
              _this8.id = res.data.value;

              _this8.successModal.show();
            });
          }
        }]);

        return LeadsEditComponent;
      }();

      LeadsEditComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LeadsEditComponent.propDecorators = {
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['successModal']
        }]
      };
      LeadsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-edit',
        template: _raw_loader_leads_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LeadsEditComponent);
      /***/
    },

    /***/
    "67dG":
    /*!******************************************************************!*\
      !*** ./src/app/views/leads/leads-index/leads-index.component.ts ***!
      \******************************************************************/

    /*! exports provided: LeadsIndexComponent */

    /***/
    function dG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsIndexComponent", function () {
        return LeadsIndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leads_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leads-index.component.html */
      "Ef/r");
      /* harmony import */


      var _leads_index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leads-index.component.scss */
      "iOR9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _leads_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../leads.service */
      "1Btx");

      var LeadsIndexComponent = /*#__PURE__*/function () {
        function LeadsIndexComponent(leadService) {
          _classCallCheck(this, LeadsIndexComponent);

          this.leadService = leadService;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.search_text = '';
          this.pageItems = 10;
          this.columns = [{
            'header': 'Created Date',
            'field': 'created_date',
            'type': 'date'
          }, {
            'header': 'Lead ID',
            'field': 'lead_id',
            'type': 'text'
          }, {
            'header': 'Company Name',
            'field': 'company_name',
            'type': 'text'
          }, {
            'header': 'Individual Name',
            'field': 'individual_name',
            'type': 'text'
          }, {
            'header': 'Email',
            'field': 'email',
            'type': 'text'
          }, {
            'header': 'Phone',
            'field': 'phone',
            'type': 'text'
          }, {
            'header': 'Status',
            'field': 'status',
            'type': 'text'
          }];
        }

        _createClass(LeadsIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this9 = this;

            this.loading = true;
            this.leadService.getAll(this.pageItems, this.search_text, this.sort).subscribe(function (data) {
              _this9.datasource = data['data']['data'];
              _this9.pages = data['data']['links'];
              _this9.totalRecords = data['data']['total'];
              _this9.loading = false;
            }, function (err) {
              _this9.loading = false;
            });
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var _this10 = this;

            this.leadService.getAll(this.pageItems, this.search_text, this.sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (data) {
              _this10.datasource = data['data']['data'];
              _this10.pages = data['data']['links'];
              _this10.totalRecords = data['data']['total'];
            });
          } // SortColumn(event: LazyLoadEvent){
          //   this.sort = {'field':event['sortField'],'order':event['sortOrder']}
          //   this.getList();
          // }

        }, {
          key: "paginate",
          value: function paginate(event) {
            this.pageItems = event.rows;
            this.onClick(parseInt(event.page) + 1);
          }
        }, {
          key: "onClick",
          value: function onClick(pageNo) {
            var _this11 = this;

            var url = this.pages[pageNo].url;
            this.leadService.getPage(url, this.pageItems, this.search_text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (data) {
              _this11.datasource = data['data']['data'];
              _this11.pages = data['data']['links'];
            });
          }
        }]);

        return LeadsIndexComponent;
      }();

      LeadsIndexComponent.ctorParameters = function () {
        return [{
          type: _leads_service__WEBPACK_IMPORTED_MODULE_6__["LeadsService"]
        }];
      };

      LeadsIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-index',
        template: _raw_loader_leads_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_leads_service__WEBPACK_IMPORTED_MODULE_6__["LeadsService"]])], LeadsIndexComponent);
      /***/
    },

    /***/
    "Ef/r":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-index/leads-index.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p-table  [loading]=\"loading\" class=\"table table-hover table-striped\"\n  #dt\n  [value]=\"datasource\"\n  styleClass=\"p-datatable-customers\"\n  [rowHover]=\"true\"\n  [reorderableColumns]=\"true\"\n  responsiveLayout=\"scroll\"\n  [filterDelay]=\"0\"\n  [globalFilterFields]=\"['quote_id', 'company', 'amount', 'status']\"\n  [columns]=\"columns\"\n>\n  <ng-template pTemplate=\"caption\">\n    <div class=\"table-header\">\n      <span class=\"p-input-icon-left\">\n        Lead Listing\n        <span class=\"dropdown\" dropdown>\n          <a\n            id=\"link-dropdown\"\n            dropdownToggle\n            class=\"dropdown-toggle\"\n            aria-controls=\"your-dropdown\"\n          >\n            <i\n              class=\"icon-plus icons\"\n              style=\"color: white; font-size: 24px\"\n            ></i>\n          </a>\n          <div\n            id=\"your-dropdown\"\n            class=\"dropdown-menu\"\n            aria-labelledby=\"link-dropdown\"\n            *dropdownMenu\n          >\n            <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/leads/create']\"\n              ><i class=\"pi pi-user-plus\"></i>Create Lead</a\n            >\n            <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/leads/import']\"\n              ><i class=\"pi pi-file-excel\"></i>Import Lead</a\n            >\n          </div>\n        </span>\n      </span>\n      <div>\n        <span class=\"p-input-icon-left\">\n          <i class=\"pi pi-search\"></i>\n          <input\n            type=\"text\"\n            pInputText\n            placeholder=\"Global Search\"\n            (input)=\"getAll()\"\n            [(ngModel)]=\"search_text\"\n          />\n        </span>\n        <img\n          style=\"width: 22px; margin: 0px 8px 0px 0px\"\n          src=\"../../../../assets/img/icons/Vector (2).svg\"\n        />\n        <img\n          style=\"width: 22px\"\n          src=\"../../../../assets/img/icons/Vector (1).svg\"\n        />\n        <img\n          style=\"width: 22px; margin: 7px\"\n          src=\"../../../../assets/img/icons/vertcalLines.svg\"\n        />\n      </div>\n    </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th\n        *ngFor=\"let column of columns\"\n        pSortableColumn=\"{{ column.field }}\"\n        class=\"text-center\"\n        pReorderableColumn\n      >\n        <div style=\"width:100% ;white-space: nowrap;display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n          {{ column.header }}\n          <div class=\"icon-div\">\n            <p-sortIcon field=\"{{ column.field }}\"></p-sortIcon>\n            <p-columnFilter\n              type=\"{{ column.type }}\"\n              field=\"{{ column.field }}\"\n              display=\"menu\"\n              class=\"p-ml-auto\"\n            >\n            </p-columnFilter>\n          </div>\n         \n        </div>\n      </th>\n\n      <th [style]=\"{ width: '5%' }\"></th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-data>\n    <tr class=\"p-selectable-row\">\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Created Date</span>\n        {{ data.created_at | date: \"dd-MMM-yyyy\" }}\n      </td>\n      <td  class=\"text-center\">\n        <span class=\"p-column-title\">Lead ID</span>\n        {{ data.id }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Company Name</span>\n        {{ data.company_name }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Individual Name</span>\n        {{ data.contact_name }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Email</span>\n        {{ data.email }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Phone</span>\n        {{ data.mobile_number }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Status</span>\n        {{ data.lead_status }}\n      </td>\n      <td class=\"text-center\">\n        <span class=\"p-column-title\">Action</span>\n        <a\n          href=\"#\"\n          [routerLink]=\"['/leads/', data.id, 'edit']\"\n          class=\"fa fa-edit\"\n        ></a>\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"emptymessage\" let-columns>\n    <tr>\n        <td style=\"text-align: center;\" [attr.colspan]=\"columns.length\">\n            No records found\n        </td>\n    </tr>\n</ng-template>\n\n</p-table>\n\n<p-paginator\n  (onPageChange)=\"paginate($event)\"\n  [rows]=\"pageItems\"\n  [totalRecords]=\"totalRecords\"\n  [rowsPerPageOptions]=\"[10, 25, 50, { showAll: 'All' }]\"\n>\n</p-paginator>\n";
      /***/
    },

    /***/
    "EqVw":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-create/leads-create.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EqVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"col-lg col-md-6\">\n    <div class=\"card rcorners\">\n      <div\n        class=\"card-header row\"\n        style=\"background-color: #898485; color: white\"\n      >\n        <div style=\"padding-left: 20px\">\n          <h2>Create Lead</h2>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <div class=\"form-group\">\n            <div class=\"card-row\">\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Lead Owner</div>\n                    <div class=\"col-md-6\">\n                      <input\n                        pInputText\n                        formControlName=\"lead_owner\"\n                        class=\"form-control\"\n                        placeholder=\"\"\n                        type=\"input\"\n                        readonly\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header required-field\">\n                      Company Name\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"p-input-icon-right\" style=\"width: 100%\">\n                        <!-- (onSelect)=\"onSelectCompany($event, 'company_name')\" -->\n                        <!-- (completeMethod)=\"searchCompanyName($event)\" -->\n                        <p-autoComplete\n                          class=\"search_field\"\n                          [inputStyle]=\"{ width: '100%' }\"\n                          [style]=\"{ width: '100%' }\"\n                          formControlName=\"company_name\"\n                          [suggestions]=\"filteredCompanyData\"\n                        >\n                          <ng-template let-item pTemplate=\"item\">\n                            <div class=\"item\">\n                              <div>{{ item.label }}</div>\n                            </div>\n                          </ng-template>\n                        </p-autoComplete>\n                        <!-- (click)=\"searchCompanyName($event)\" -->\n\n                        <i\n                          class=\"pi pi-search search-country-name-icon\"\n                          (click)=\"searchCompanyName(form.value.company_name)\"\n                        ></i>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Contact Name</div>\n                    <div class=\"col-md-6\">\n                      <span class=\"p-input-icon-right\" style=\"width: 100%\">\n                        <p-autoComplete\n                          class=\"search_field\"\n                          [inputStyle]=\"{ width: '100%' }\"\n                          [style]=\"{ width: '100%' }\"\n                          formControlName=\"contact_name\"\n                          [suggestions]=\"filteredData\"\n                          (completeMethod)=\"searchName($event)\"\n                          (onSelect)=\"onSelect($event)\"\n                        >\n                          <ng-template let-item pTemplate=\"item\">\n                            <div class=\"item\">\n                              <div>\n                                {{ item.full_name }} ({{\n                                  item.mobile_phone\n                                }})\n                              </div>\n                            </div>\n                          </ng-template>\n                        </p-autoComplete>\n                        <i class=\"pi pi-search\"></i>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Department</div>\n                    <div class=\"col-md-6\">\n                      <input\n                        pInputText\n                        formControlName=\"department\"\n                        class=\"form-control\"\n                        placeholder=\"\"\n                        type=\"input\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Email</div>\n                    <div class=\"col-md-6\">\n                      <input\n                        pInputText\n                        formControlName=\"email\"\n                        class=\"form-control\"\n                        placeholder=\"\"\n                        type=\"input\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header required-field\">\n                      Mobile Number\n                    </div>\n                    <div class=\"col-md-6\">\n                      <input\n                        pInputText\n                        formControlName=\"mobile_number\"\n                        class=\"form-control\"\n                        placeholder=\"\"\n                        type=\"input\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Office Phone Number</div>\n                    <div class=\"col-md-6\">\n                      <input\n                        pInputText\n                        formControlName=\"office_number\"\n                        class=\"form-control\"\n                        placeholder=\"\"\n                        type=\"input\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5\">Address</div>\n                    <div class=\"col-md-6\">\n                      <textarea\n                        [rows]=\"5\"\n                        style=\"width: 100%\"\n                        pInputTextarea\n                        [autoResize]=\"autoResize\"\n                        formControlName=\"address\"\n                      ></textarea>\n                      <div class=\"d-inline-flex\">\n                        <div style=\"margin-right: 5px\">\n                          <input\n                            pInputText\n                            formControlName=\"postcode\"\n                            class=\"form-control\"\n                            placeholder=\"Zipcode\"\n                            type=\"input\"\n                          />\n                        </div>\n                        <div style=\"margin-right: 5px\">\n                          <p-dropdown\n                            [options]=\"states\"\n                            formControlName=\"state\"\n                            placeholder=\"Select State\"\n                            [virtualScroll]=\"true\"\n                            [itemSize]=\"31\"\n                            [filter]=\"false\"\n                            autoWidth=\"false\"\n                            [style]=\"{ width: '100%' }\"\n                          ></p-dropdown>\n                        </div>\n                        <div>\n                          <input\n                            pInputText\n                            formControlName=\"country\"\n                            class=\"form-control\"\n                            placeholder=\"Country\"\n                            type=\"input\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Prospect type</div>\n                    <div class=\"col-md-6\">\n                      <p-radioButton\n                        name=\"prospect_type\"\n                        value=\"individual\"\n                        formControlName=\"prospect_type\"\n                        inputId=\"prospect_type1\"\n                      ></p-radioButton>\n                      <label class=\"radio-label\" for=\"prospect_type1\"\n                        >Individual</label\n                      >\n                      <p-radioButton\n                        name=\"prospect_type\"\n                        value=\"company\"\n                        formControlName=\"prospect_type\"\n                        inputId=\"prospect_type2\"\n                      ></p-radioButton>\n                      <label class=\"radio-label\" for=\"prospect_type2\"\n                        >Company</label\n                      >\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xl-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 text-header\">Source</div>\n                    <div class=\"col-md-6 d-inline-flex\">\n                      <div class=\"col-md-5\" style=\"padding: 0px\">\n                        <p-dropdown\n                          [options]=\"source_items\"\n                          formControlName=\"source\"\n                          placeholder=\"Select Source\"\n                          [virtualScroll]=\"true\"\n                          [itemSize]=\"31\"\n                          [filter]=\"false\"\n                          autoWidth=\"false\"\n                          [style]=\"{ width: '100%' }\"\n                        ></p-dropdown>\n                      </div>\n                      <div class=\"col-md-7\" style=\"padding: 0px 0px 0px 10px\">\n                        <input\n                          pInputText\n                          formControlName=\"other_source\"\n                          class=\"form-control\"\n                          placeholder=\"Others\"\n                          type=\"input\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 submit-button\" align=\"center\">\n            <div class=\"form-group\">\n              <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"notFoundModal.show()\">Open</button> -->\n              <button\n                class=\"btn btn-primary mr-2 pr-5 pl-5\"\n                type=\"submit\"\n                [disabled]=\"!form.valid\"\n              >\n                <i class=\"cil-save mt-1 mr-1\"></i>SAVE\n              </button>\n              <button\n                class=\"btn btn-secondary pr-5 pl-5\"\n                type=\"button\"\n                [disabled]=\"!form.valid\"\n                (click)=\"verify()\"\n              >\n                <i class=\"cil-check-alt mt-1 mr-1\"></i>VERIFY\n              </button>\n              <!-- <a routerLink=\"/leads/verify\" class=\"btn btn-secondary\">VERIFY</a> -->\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer bg-transparent\"></div>\n    </div>\n  </div>\n</div>\n<!-- Models-D -->\n<!-- (onHide)=\"redirectPage()\" -->\n<div\n  id=\"success\"\n  bsModal\n  #successModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-success\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Success</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div\n  bsModal\n  #dangerModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Error</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"dangerModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div\n  bsModal\n  #foundModal=\"bs-modal\"\n  class=\"modal fade not-found-modal\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" align=\"center\">\n        <h4 class=\"modal-title\">{{ alertHeader }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"foundModal.hide()\"\n        >\n          Cancel\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"gotoOpertunityPage()\"\n        >\n          Yes\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n";
      /***/
    },

    /***/
    "IuWb":
    /*!*********************************************!*\
      !*** ./src/app/views/leads/leads.module.ts ***!
      \*********************************************/

    /*! exports provided: LeadsModule */

    /***/
    function IuWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsModule", function () {
        return LeadsModule;
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


      var _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leads-routing.module */
      "pIql");
      /* harmony import */


      var _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../sharedModule/prime-ng.module */
      "Wcfd");
      /* harmony import */


      var _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leads-index/leads-index.component */
      "67dG");
      /* harmony import */


      var _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leads-create/leads-create.component */
      "JyNP");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./leads-import/leads-import.component */
      "2xa7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./leads-verify/leads-verify.component */
      "j3Xq");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./leads-edit/leads-edit.component */
      "5UYh"); // import { NgxCsvParserModule } from 'ngx-csv-parser';


      var LeadsModule = function LeadsModule() {
        _classCallCheck(this, LeadsModule);
      };

      LeadsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_5__["LeadsIndexComponent"], _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_6__["LeadsCreateComponent"], _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_8__["LeadsImportComponent"], _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_11__["LeadsVerifyComponent"], _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_13__["LeadsEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeadsRoutingModule"], _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__["PrimeNgModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], // NgxCsvParserModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"]]
      })], LeadsModule);
      /***/
    },

    /***/
    "JyNP":
    /*!********************************************************************!*\
      !*** ./src/app/views/leads/leads-create/leads-create.component.ts ***!
      \********************************************************************/

    /*! exports provided: LeadsCreateComponent */

    /***/
    function JyNP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsCreateComponent", function () {
        return LeadsCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leads_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leads-create.component.html */
      "EqVw");
      /* harmony import */


      var _leads_create_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leads-create.component.scss */
      "P4Pn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../leads.service */
      "1Btx");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../auth/auth.service */
      "qXBG");

      var LeadsCreateComponent = /*#__PURE__*/function () {
        function LeadsCreateComponent(formBuilder, leadsService, router, authService) {
          _classCallCheck(this, LeadsCreateComponent);

          this.formBuilder = formBuilder;
          this.leadsService = leadsService;
          this.router = router;
          this.authService = authService;
          this.autoResize = true;
          this.alretType = "company";
          this.filteredData = [];
          this.filteredCompanyData = [];
          this.source_items = ["Partner", "Partner 1", "Partner 2"];
          this.states = ["Selangor", "Kuala Lumpur", "Perak", "aa"];
          this.items = [{
            label: "item 1"
          }, {
            label: "item 2"
          }, {
            label: "item 3"
          }, {
            label: "item 4"
          }, {
            label: "item 5"
          }];
          this.message = "Do you want to go to opportunity add page?";
          this.errorMessage = "Customer already exist";
          this.isSkipcompany = false;
          this.isSkipcontact = false;
          this.isCheck = false;
        }

        _createClass(LeadsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.form = this.formBuilder.group({
              //hardcode
              company_id: "",
              contact_id: "1",
              company_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              contact_name: "",
              department: "",
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
              mobile_number: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              office_number: "",
              address: "",
              state: "",
              country: "",
              postcode: "",
              prospect_type: "individual",
              source: "",
              other_source: "",
              lead_status: "",
              able_to_contact: "",
              do_we_sell_these_product: "",
              products_thats_not_selling: "",
              reason_for_disqualifying: "",
              remark: "",
              lead_owner: "",
              additional_notes: ""
            });
            this.form.get("prospect_type").valueChanges.subscribe(function (val) {
              _this12.form.controls["prospect_type"].setValue(val, {
                emitEvent: false
              });
            });
            this.form.get("other_source").valueChanges.subscribe(function (val) {
              if (val) {
                _this12.form.controls["source"].setValue(val, {
                  emitEvent: false
                });
              }
            });
            this.authService.getUserSession().then(function (res) {
              if (res.fullname) {
                _this12.form.controls["lead_owner"].setValue(res.fullname, {
                  emitEvent: false
                });
              }
            });
          }
        }, {
          key: "redirectPage",
          value: function redirectPage() {
            this.router.navigateByUrl("leads/index");
          }
        }, {
          key: "gotoOpertunityPage",
          value: function gotoOpertunityPage() {
            this.router.navigateByUrl("opportunity/new");
          }
        }, {
          key: "submit",
          value: function submit() {
            this.isCheck = true;
            var company_name = this.form.value.company_name;
            this.searchCompany(company_name);
          }
        }, {
          key: "searchCompany",
          value: function searchCompany(company_name) {
            var _this13 = this;

            this.leadsService.searchCompany(company_name).subscribe(function (res) {
              if (res.success) {
                if (res.data.id != 0) {
                  _this13.alertHeader = _this13.errorMessage;
                  _this13.alertBody = _this13.message;

                  _this13.foundModal.show();
                } else {
                  _this13.create();
                }
              }
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this14 = this;

            this.leadsService.store(this.form.value).subscribe(function (res) {
              if (_this14.isCheck == true) {
                _this14.alertBody = res.message || "Created Successfully";
                _this14.id = res.data.value;

                _this14.successModal.show();

                setTimeout(function () {
                  _this14.successModal.hide();

                  _this14.form.reset();
                }, 2000);
              } else {
                _this14.alertBody = res.message || "Created Successfully";
                _this14.id = res.data.value;

                _this14.successModal.show();

                setTimeout(function () {
                  _this14.router.navigate(["/leads/", res.data.id, "verify"]);
                }, 1000);
              }
            }, function (error) {
              _this14.alertHeader = "Customer already exist";
              _this14.alertBody = "Do you want to go to add opportunity page?";

              _this14.foundModal.show();
            });
          }
        }, {
          key: "verify",
          value: function verify() {
            this.isCheck = false;
            var company_name = this.form.value.company_name;
            this.searchCompany(company_name);
          }
        }, {
          key: "searchName",
          value: function searchName(event) {
            var _this15 = this;

            var query = event.query;
            this.leadsService.searchContact(query).subscribe(function (res) {
              if (res.success) {
                if (res.data.length == 0) {
                  setTimeout(function () {
                    _this15.alertBody = "Name is not Correct";

                    _this15.dangerModal.show();
                  }, 2000);
                } else {
                  _this15.filteredData = res.data;
                }
              }
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            if (event) {
              var contact_name = this.form.get("contact_name");
              var mobile_number = this.form.get("mobile_number");
              var office_number = this.form.get("office_number");
              var postcode = this.form.get("postcode");
              var address = this.form.get("address");
              contact_name.patchValue(event.full_name);
              mobile_number.patchValue(event.mobile_phone);
              office_number.patchValue(event.business_phone);
              postcode.patchValue(event.zipcode);
              address.patchValue(event.address_1);
              this.form.patchValue(event);
            }
          }
        }, {
          key: "searchCompanyName",
          value: function searchCompanyName(event) {
            var _this16 = this;

            var query = event;

            if (event) {
              this.leadsService.searchCompany(query).subscribe(function (res) {
                if (res.success) {
                  if (res.data.id != 0) {
                    _this16.alertBody = "Company already exist.";

                    _this16.dangerModal.show();
                  } else {
                    _this16.alertBody = "Company name is available to use.";

                    _this16.successModal.show();
                  }
                }
              });
            } else {
              this.alertBody = "Please enter company name.";
              this.dangerModal.show();
            }
          }
        }, {
          key: "onSelectCompany",
          value: function onSelectCompany(event, title) {
            if (event) {
              var selectedData = event.label;
              var control = this.form.get(title);
              control.patchValue(selectedData);
              this.form.patchValue(event);
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.form.reset();
          }
        }]);

        return LeadsCreateComponent;
      }();

      LeadsCreateComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }];
      };

      LeadsCreateComponent.propDecorators = {
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["successModal"]
        }],
        dangerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["dangerModal"]
        }],
        foundModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["foundModal"]
        }]
      };
      LeadsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-leads-create",
        template: _raw_loader_leads_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_create_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])], LeadsCreateComponent);
      /***/
    },

    /***/
    "P4Pn":
    /*!**********************************************************************!*\
      !*** ./src/app/views/leads/leads-create/leads-create.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function P4Pn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rcorners {\n  overflow: hidden;\n}\n\n.search-country-name-icon {\n  cursor: pointer;\n}\n\n.buttonColor {\n  background-color: #00538a;\n  border-color: #00538a;\n}\n\n.text-header {\n  align-self: center;\n}\n\n.invalid-feedback {\n  color: red;\n  font-size: inherit;\n}\n\n.required-field:after {\n  color: #d00;\n  content: \"*\";\n  margin-left: 3px;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.p-inputtext {\n  height: 100%;\n}\n\n.not-found-modal .modal-content {\n  padding: 20px;\n}\n\n.not-found-modal .modal-content .modal-header {\n  margin: 0 auto;\n  border-bottom: 0px;\n}\n\n.not-found-modal .modal-content .model-title {\n  font-weight: bold;\n}\n\n.not-found-modal .modal-content .modal-body {\n  margin: 0 auto;\n}\n\n.not-found-modal .modal-content .modal-footer {\n  border-top: 0px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUtFO0VBQ0UsaUJBQUE7QUFGSjs7QUFNQTtFQUNFLG1DQUFBO0FBSEY7O0FBTUE7RUFDRSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSEY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBTUU7RUFDRSxhQUFBO0FBSEo7O0FBSUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFLSTtFQUNFLGlCQUFBO0FBSE47O0FBTUk7RUFDRSxjQUFBO0FBSk47O0FBT0k7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFMTiIsImZpbGUiOiJsZWFkcy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmNvcm5lcnMge1xuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLy8gaS51aS1hdXRvY29tcGxldGUtbG9hZGVye1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuLnNlYXJjaC1jb3VudHJ5LW5hbWUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b25Db2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzOGE7XG4gIGJvcmRlci1jb2xvcjogIzAwNTM4YTtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnJlcXVpcmVkLWZpZWxkOmFmdGVyIHtcbiAgY29sb3I6ICNkMDA7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCU7XG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxufVxuXG4uY2FyZC1yb3cge1xuICAucm93IHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IDE7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogd2hpdGU7XG59XG4uY2FyZC1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wLWlucHV0dGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vdC1mb3VuZC1tb2RhbCB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLm1vZGVsLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "UKjf":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-edit/leads-edit.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UKjf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <div class=\"col-lg col-md-6\">\n            <div class=\"card rcorners\">\n                <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                    <div style=\"padding-left: 20px;\">\n                        <h2>Lead Record</h2>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-row\">\n                        <div class=\"lead-data\">\n                            <div class=\"lead-header\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <h3 class=\"bold\">\n                                            {{ form_controls.company_name.value }}\n                                        </h3>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"lead-id\">\n                                            <span>Lead ID:</span>\n                                            <span>{{ form_controls.id.value }}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"details grey\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Created Date</label>\n                                            <div>{{ moment(form_controls.created_at.value).format('DD-MMM-YYYY') }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Contact Name</label>\n                                            <div>{{ form_controls.contact_name.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Email</label>\n                                            <div>{{ form_controls.email.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Owner</label>\n                                            <div>{{ form_controls.lead_owner.value }}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"pi pi-info-circle\"></i>\n                            <span class=\"accordion-header\">Lead Information</span>\n                        </p-header>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Owner\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"lead_owner\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-5 text-header required-field\">\n                                          Company Name\n                                      </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"company_name\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Source\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"source\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Individual Name\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"contact_name\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Able to Contact\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <mat-slide-toggle formControlName=\"able_to_contact\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Department\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"department\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Do We Sell These Products\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <mat-slide-toggle formControlName=\"do_we_sell_these_product\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Email\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"email\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Products That Not Selling\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"products_thats_not_selling\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Mobile Number\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"mobile_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Status\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"lead_status\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Office Number\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"office_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Reason for Disqualifying\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"reason_for_disqualifying\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\" style=\"border-bottom: none;\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Address\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"3\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"address\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Remark\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"3\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"remark\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"cil-clipboard\"></i>\n                            <span class=\"accordion-header\">Modification Log</span>\n                        </p-header>\n                        <div>\n                            <table class=\"table table-borderless table-striped\" formArrayName=\"modifiction_log\">\n                                <thead class=\"grey\">\n                                    <tr>\n                                        <th style=\"width: 20%; padding-left: 50px;\">Date</th>\n                                        <th style=\"padding-left: 50px;\">Description</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let log of getLog.controls; let i=index\" [formGroupName]=\"i\">\n                                        <td style=\"width: 20%; padding-left: 50px;\">\n                                            {{ moment(log.value.created_at).format('DD-MMM-YYYY') }}\n                                        </td>\n                                        <td style=\"padding-left: 50px;\">\n                                            {{ log.value.description }}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"cil-notes\"></i>\n                            <span class=\"accordion-header\">Additional Notes</span>\n                        </p-header>\n                        <div class=\"\">\n                            <div style=\"padding: 10px 20px 10px 20px;\">\n                                <textarea maxLength=\"250\" [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"additional_notes\" placeholder=\"Limit characters count 250\"></textarea>\n                            </div>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n                \n            </div>\n            <div class=\"col-xl-12 submit-button\" align=center>\n                <div class=\"form-group\">\n                    <a routerLink=\"/leads/index\" class=\"btn btn-secondary pr-5 pl-5 mr-2\"><i class=\"cil-arrow-left mr-1 mt-1\"></i>CANCEL</a>\n                    <button class=\"btn btn-primary pr-5 pl-5\" type=\"submit\"><i class=\"cil-save mr-1 mt-1\"></i>SAVE</button>\n                    <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"CreateProspect()\">Create Prospect</button> -->\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div (onHide)=\"redirectPage()\" id=\"success\" bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
      /***/
    },

    /***/
    "eIae":
    /*!******************************************************************!*\
      !*** ./src/app/views/leads/leads-edit/leads-edit.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function eIae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rcorners {\n  overflow: hidden;\n}\n\n.required-field:after {\n  color: #d00;\n  content: \"*\";\n  margin-left: 3px;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n  box-shadow: 0px 3px lightgrey;\n  margin-bottom: 10px;\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.grey {\n  background-color: whitesmoke;\n}\n\n:host ::ng-deep .mat-slide-toggle-bar {\n  height: 19px;\n  border-radius: 15px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb-container {\n  top: 0px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb {\n  height: 16px;\n  width: 15px;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #386fa4;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #386fa4;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.lead-id {\n  background-color: #5dbec0;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 4px;\n  padding-bottom: 3px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n::ng-deep .p-accordion p-accordiontab:last-child .p-accordion-content {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n::ng-deep .p-accordion p-accordiontab:last-child .p-accordion-content:first-child {\n  padding-top: 0px;\n}\n\n::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link {\n  text-decoration: none;\n}\n\n::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {\n  margin-top: -8px;\n  position: absolute;\n  right: 0.5em;\n  top: 50%;\n}\n\n.accordion-header {\n  font-weight: bold;\n  font-size: 20px;\n  padding-left: 5px;\n}\n\n.lead-row {\n  border-bottom: 1px solid lightgrey;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.lead-row .row {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: white;\n}\n\n.table-striped > tbody > tr:nth-child(even) > td,\n.table-striped > tbody > tr:nth-child(even) > th {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBR0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUVBOztFQUVHLHVCQUFBO0FBQ0g7O0FBRUE7O0VBRUcseUJBQUE7QUFDSCIsImZpbGUiOiJsZWFkcy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJjb3JuZXJzIHtcbiAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlcXVpcmVkLWZpZWxkOmFmdGVyIHtcbiAgY29sb3I6ICNkMDA7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCU7XG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxufVxuXG4uY2FyZC1yb3cge1xuICAucm93IHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xuICBib3gtc2hhZG93OiAwcHggM3B4IGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiAxO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHdoaXRlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lciB7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuOjpuZy1kZWVwXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKVxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2ZmE0O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NmZhNDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sZWFkLWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkYmVjMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIHAtYWNjb3JkaW9udGFiOmxhc3QtY2hpbGQgLnAtYWNjb3JkaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuOjpuZy1kZWVwIC5wLWFjY29yZGlvbiBwLWFjY29yZGlvbnRhYjpsYXN0LWNoaWxkIC5wLWFjY29yZGlvbi1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIC5wLWFjY29yZGlvbi1oZWFkZXIgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIC5wLWFjY29yZGlvbi1oZWFkZXIgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rIC5wLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNWVtO1xuICB0b3A6IDUwJTtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmxlYWQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQob2RkKT50ZCxcbi50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1jaGlsZChvZGQpPnRoIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyBDaG9vc2UgeW91ciBvd24gY29sb3IgaGVyZVxufVxuXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGQsXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiAyNDIgMjQyKTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "fcJt":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-verify/leads-verify.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fcJt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n    <div class=\"col-lg col-md-6\">\n        <div class=\"card rcorners\">\n            <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                <div style=\"padding-left: 20px;\">\n                    <h2>Verify Lead</h2>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n                    <div class=\"card-row\">\n                        <div class=\"lead-data\">\n                            <div class=\"lead-header\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <h3 class=\"bold\">\n                                            {{ form_controls.company_name.value }}\n                                        </h3>\n                                    </div>\n                                    <div class=\"col-md-3 \">\n                                        <div class=\"lead-id\">\n                                            <span>Lead ID: </span>\n                                            <span>{{ form_controls.id.value }}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"details grey\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Created Date</label>\n                                            <div>{{ moment(form_controls.created_at.value).format('DD-MMM-YYYY') }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Contact Name</label>\n                                            <div>{{ form_controls.contact_name.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Email</label>\n                                            <div>{{ form_controls.email.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Owner</label>\n                                            <div>{{ form_controls.lead_owner.value }}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"verify-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Able to Contact\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-slide-toggle formControlName=\"able_to_contact\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Do We Sell These Products\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-slide-toggle formControlName=\"do_we_sell_these_product\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Products That Not Selling\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"products_thats_not_selling\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Status\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p-radioButton name=\"lead_status\" value=\"new\" formControlName=\"lead_status\" inputId=\"status1\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status1\">New</label>\n                                            <p-radioButton name=\"lead_status\" value=\"qualify\" formControlName=\"lead_status\" inputId=\"status2\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status2\">Qualify</label>\n                                            <p-radioButton name=\"lead_status\" value=\"disqualify\" formControlName=\"lead_status\" inputId=\"status3\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status3\">Disqualify</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Reason for Disqualifying\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p-dropdown [options]=\"reasons\" formControlName=\"reason_for_disqualifying\" placeholder=\"Select a Reason\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\" autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Remark\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"remark\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-12 submit-button\" align=center>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-secondary pr-5 pl-5 mr-2\" type=\"submit\"><i class=\"cil-save mr-1 mt-1\"></i>SAVE</button>\n                            <button class=\"btn btn-primary pr-4 pl-4\" type=\"button\" (click)=\"CreateProspect()\"><i class=\"cil-money mt-1 mr-1\"></i>Create Prospect</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div (onHide)=\"redirectPage()\" id=\"success\" bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
      /***/
    },

    /***/
    "g/oW":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-import/leads-import.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n    <div class=\"col-lg col-md-6\">\n        <div class=\"card rcorners\">\n            <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                <div style=\"padding-left: 20px;\">\n                    <h2>Import Lead</h2>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div draggable=\"true\" ngClass=\"{{dragAreaClass}}\" class=\"card-row\" [ngClass]=\"(displayData == 1 ? 'hide' : 'show')\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            Drag and Drop your file here.\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            or\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            <span class=\"btn btn-primary\" (click)=\"uploads.click()\">BROWSE</span>\n                            <input id=\"files\" type=\"file\" name=\"files\" class=\"form-control\" #uploads  (change)=\"onChange(uploads.files)\" value=\"process\" style=\"display: none;\"/>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            <a href=\"../../../../assets/img/template/lead_template.csv\">Download template file (.csv file)</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-table\" [ngClass]=\"(displayData == 1 ? 'show' : 'hide')\">\n                    <div class=\"alert alert-success\" role=\"alert\" [ngClass]=\"(successCreate == 1 ? 'show' : 'hide')\">\n                        <b>Success: </b>The {{number_of_record}} records have been updated into the system\n                    </div>\n                    <div  class=\"alert alert-danger\" role=\"alert\" [ngClass]=\"(danger == 1 ? 'show' : 'hide')\">\n                        Something went wrong, kindly double check your file <br>\n                        <div *ngFor=\"let error of errorList; \"> Row {{error.row}}: {{error.message}}</div>\n                    </div>\n\n                    <table class=\"table table-striped table-inverse\">\n                        <thead>\n                            <tr>\n                                <ng-container *ngFor=\"let header of headers; let i=index; let last = last;\">\n                                    <th>{{ header }}</th>\n                                </ng-container>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let record of csvRecords\">\n                                <td> {{record.created_date}} </td>\n                                <td> {{record.lead_id}} </td>\n                                <td> {{record.company_name}} </td>\n                                <td> {{record.contact_name}} </td>\n                                <td> {{record.email}} </td>\n                                <td> {{record.phone}} </td>\n                                <td> {{record.prospect}} </td>\n                                <td> {{record.source}} </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"col-xl-12 submit-button\" align=center>\n                        <div class=\"form-group\">\n                            <a routerLink=\"/leads/index\" class=\"btn btn-secondary\">CANCEL</a>\n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"submit()\">SAVE</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "gpd2":
    /*!**********************************************************************!*\
      !*** ./src/app/views/leads/leads-import/leads-import.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function gpd2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rcorners {\n  overflow: hidden;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row {\n  padding: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: white;\n}\n\n.table-striped > tbody > tr:nth-child(even) > td,\n.table-striped > tbody > tr:nth-child(even) > th {\n  background-color: #f2f2f2;\n}\n\n.alert {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFHQTtFQUNJLG1DQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBOztFQUVHLHVCQUFBO0FBQ0g7O0FBRUE7O0VBRUcseUJBQUE7QUFDSDs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImxlYWRzLWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yY29ybmVycyB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMCU7XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG59XG5cbi5jYXJkLXJvdyB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyOiAxO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHdoaXRlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHI6bnRoLWNoaWxkKG9kZCk+dGQsIFxuLnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHI6bnRoLWNoaWxkKG9kZCk+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXG59XG5cbi50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1jaGlsZChldmVuKT50ZCwgXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiAyNDIgMjQyKTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcbn1cblxuLmFsZXJ0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "iOR9":
    /*!********************************************************************!*\
      !*** ./src/app/views/leads/leads-index/leads-index.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function iOR9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "tr {\n  border: hidden;\n}\n\n:host ::ng-deep .p-datatable {\n  min-height: 500px !important;\n}\n\n.icon-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n:host ::ng-deep {\n  /* Responsive */\n}\n\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  background-color: #898485;\n  color: white;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n.dropdown-menu {\n  min-width: auto;\n}\n\n.dropdown-toggle::after {\n  content: unset;\n}\n\n.dropdown-item i {\n  font-weight: bold;\n  color: black;\n  font-size: 17px;\n  margin-right: 5px;\n}\n\n.icon-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVJO0VBQ0ksNEJBQUE7QUFDUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQXdESSxlQUFBO0FBeERKOztBQUVRO0VBQ0ksaUJBQUE7QUFBWjs7QUFJSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUZSOztBQUlRO0VBQ0kseUJBQUE7QUFGWjs7QUFNSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSlI7O0FBT0k7RUFDSSxnQkFBQTtBQUxSOztBQU9RO0VBQ0ksZ0JBQUE7QUFMWjs7QUFVUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUlo7O0FBV1E7RUFDSSxhQUFBO0FBVFo7O0FBWVE7RUFDSSxnQkFBQTtBQVZaOztBQWFRO0VBQ0ksWUFBQTtBQVhaOztBQWNRO0VBQ0kseUJBQUE7QUFaWjs7QUFpQkk7RUFDSSxhQUFBO0FBZlI7O0FBa0JBO0VBQ0ksZUFBQTtBQWZKOztBQWlCQTtFQUNJLGNBQUE7QUFkSjs7QUFrQkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFmUjs7QUFrQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JBO0VBSWdCOztJQUVJLHdCQUFBO0VBbEJsQjtFQXNCYztJQUNJLHVDQUFBO0VBcEJsQjtFQXNCa0I7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBcEJ0QjtFQXNCc0I7SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQXBCMUI7RUF1QnNCO0lBQ0ksa0JBQUE7RUFyQjFCO0FBQ0YiLCJmaWxlIjoibGVhZHMtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ciB7XG4gICAgYm9yZGVyOiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5wLWRhdGF0YWJsZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uaWNvbi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8vIG5ldyBzY3NzXG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtcGFnaW5hdG9yIHtcbiAgICAgICAgLnAtcGFnaW5hdG9yLWN1cnJlbnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuICAgIFxuICAgICAgICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xuICAgICAgICBtaW4td2lkdGg6IDI1cmVtO1xuICAgIFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xuICAgICAgICAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4NDg1OyBcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucC1wYWdpbmF0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICAucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4uZHJvcGRvd24tbWVudSB7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xufVxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVuc2V0O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgaSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuLmljb24tZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAge1xuICAgICAgICAucC1kYXRhdGFibGUge1xuICAgICAgICAgICAgJi5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxheWVyLTIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtY29sdW1uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtLjRyZW0gMXJlbSAtLjRyZW0gLS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il19 */";
      /***/
    },

    /***/
    "j3Xq":
    /*!********************************************************************!*\
      !*** ./src/app/views/leads/leads-verify/leads-verify.component.ts ***!
      \********************************************************************/

    /*! exports provided: LeadsVerifyComponent */

    /***/
    function j3Xq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsVerifyComponent", function () {
        return LeadsVerifyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leads_verify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leads-verify.component.html */
      "fcJt");
      /* harmony import */


      var _leads_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leads-verify.component.scss */
      "uAun");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../leads.service */
      "1Btx");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var LeadsVerifyComponent = /*#__PURE__*/function () {
        function LeadsVerifyComponent(formBuilder, leadsService, route, router) {
          _classCallCheck(this, LeadsVerifyComponent);

          this.formBuilder = formBuilder;
          this.leadsService = leadsService;
          this.route = route;
          this.router = router;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_8__;
          this.autoResize = true;
          this.reasons = ["Customer Budget", "Low Budget", "Scam"];
          this.form = this.formBuilder.group({
            id: "",
            created_at: "",
            company_name: "",
            contact_name: "",
            department: "",
            email: "",
            mobile_number: "",
            office_number: "",
            address: "",
            state: "",
            country: "",
            postcode: "",
            prospect_type: "",
            source: "",
            other_source: "",
            lead_status: "",
            able_to_contact: false,
            do_we_sell_these_product: false,
            products_thats_not_selling: "",
            reason_for_disqualifying: "",
            remark: "",
            lead_owner: "",
            additional_notes: ""
          });
        }

        _createClass(LeadsVerifyComponent, [{
          key: "form_controls",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.route.paramMap.subscribe(function (params) {
              if (params.get("id")) {
                _this17.id = params.get("id");

                _this17.getData(params.get("id"));
              }
            });
          }
        }, {
          key: "getData",
          value: function getData(id) {
            var _this18 = this;

            this.leadsService.find(id).subscribe(function (data) {
              _this18.form.patchValue(data.data);
            });
          }
        }, {
          key: "redirectPage",
          value: function redirectPage() {
            this.router.navigateByUrl("leads/index");
          }
        }, {
          key: "CreateProspect",
          value: function CreateProspect() {
            var _this19 = this;

            this.leadsService.createProspect({
              id: this.id
            }).subscribe(function (res) {
              _this19.alertBody = res.message || "Created Prospect Successfully";

              _this19.successModal.show();
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this20 = this;

            this.leadsService.update(this.id, this.form.value).subscribe(function (res) {
              _this20.alertBody = res.message || "Updated Successfully";
              _this20.id = res.data.value;

              _this20.successModal.show();
            });
          }
        }]);

        return LeadsVerifyComponent;
      }();

      LeadsVerifyComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LeadsVerifyComponent.propDecorators = {
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["successModal"]
        }]
      };
      LeadsVerifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-leads-verify",
        template: _raw_loader_leads_verify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LeadsVerifyComponent);
      /***/
    },

    /***/
    "pIql":
    /*!*****************************************************!*\
      !*** ./src/app/views/leads/leads-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LeadsRoutingModule */

    /***/
    function pIql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadsRoutingModule", function () {
        return LeadsRoutingModule;
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


      var _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leads-create/leads-create.component */
      "JyNP");
      /* harmony import */


      var _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./leads-edit/leads-edit.component */
      "5UYh");
      /* harmony import */


      var _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leads-import/leads-import.component */
      "2xa7");
      /* harmony import */


      var _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leads-index/leads-index.component */
      "67dG");
      /* harmony import */


      var _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./leads-verify/leads-verify.component */
      "j3Xq");

      var routes = [{
        path: 'index',
        component: _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_6__["LeadsIndexComponent"]
      }, {
        path: 'create',
        component: _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_3__["LeadsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_4__["LeadsEditComponent"]
      }, {
        path: ':id/verify',
        component: _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_7__["LeadsVerifyComponent"]
      }, {
        path: 'import',
        component: _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_5__["LeadsImportComponent"]
      }, {
        path: '**',
        redirectTo: 'index'
      }];

      var LeadsRoutingModule = function LeadsRoutingModule() {
        _classCallCheck(this, LeadsRoutingModule);
      };

      LeadsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeadsRoutingModule);
      /***/
    },

    /***/
    "uAun":
    /*!**********************************************************************!*\
      !*** ./src/app/views/leads/leads-verify/leads-verify.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function uAun(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rcorners {\n  overflow: hidden;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.grey {\n  background-color: whitesmoke;\n}\n\n:host ::ng-deep .mat-slide-toggle-bar {\n  height: 19px;\n  border-radius: 15px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb-container {\n  top: 0px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb {\n  height: 16px;\n  width: 15px;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #386FA4;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #386FA4;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.lead-id {\n  background-color: #5dbec0;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 4px;\n  padding-bottom: 3px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKOztBQUlFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6ImxlYWRzLXZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yY29ybmVycyB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwJTtcbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG59XG5cbi5jYXJkLXJvdyB7XG4gIC5yb3cge1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICB9XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogMTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB3aGl0ZTtcbn1cbi5jYXJkLWZvb3RlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yYWRpby1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZ3JleXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lciB7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2RkE0O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NkZBNDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sZWFkLWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkYmVjMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-leads-leads-module-es5.js.map