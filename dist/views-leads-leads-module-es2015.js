(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-leads-leads-module"],{

/***/ "1Btx":
/*!**********************************************!*\
  !*** ./src/app/views/leads/leads.service.ts ***!
  \**********************************************/
/*! exports provided: LeadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsService", function() { return LeadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let LeadsService = class LeadsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["settings"].apiBaseUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    getAll(pageItems, search_text, sort) {
        let query = '/lead?page_items=' + pageItems + '&search_text=' + search_text;
        if (sort && sort['field'] != null) {
            query += '&field=' + sort.field + '&order=' + sort.order;
        }
        return this.httpClient.get(this.apiURL + query, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    store(data) {
        return this.httpClient.post(this.apiURL + '/lead', data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            console.log(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    update(data, id) {
        return this.httpClient.put(this.apiURL + '/lead/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    createProspect(lead_id) {
        return this.httpClient.post(this.apiURL + '/lead/create-prospect', lead_id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            console.log(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    find(id) {
        console.log(id);
        return this.httpClient.get(this.apiURL + '/lead/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getModificationLog(id) {
        return this.httpClient.get(this.apiURL + '/lead/modification-log/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    delete(id) {
        return this.httpClient.delete(this.apiURL + '/lead/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getPage(url, pageItems, search_text) {
        let query = '&page_items=' + pageItems + '&search_text=' + search_text;
        return this.httpClient.get(url + query, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    searchContact(contact) {
        console.log(contact);
        return this.httpClient.get(this.apiURL + '/lead/contact?contact_name=' + contact)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    searchCompany(company) {
        console.log(company);
        return this.httpClient.get(this.apiURL + '/lead/customer?company_name=' + company)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
LeadsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeadsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LeadsService);



/***/ }),

/***/ "1jgN":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js ***!
  \****************************************************************/
/*! exports provided: NgxCSVParserError, NgxCsvParser, NgxCsvParserComponent, NgxCsvParserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCSVParserError", function() { return NgxCSVParserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParser", function() { return NgxCsvParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParserComponent", function() { return NgxCsvParserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParserModule", function() { return NgxCsvParserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "5lcw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class NgxCSVParserError {
}

let NgxCsvParser = class NgxCsvParser {
    constructor() {
        this.defaultCSVParserConfig = {
            header: true,
            delimiter: ','
        };
    }
    parse(csvFile, config) {
        config = Object.assign(Object.assign({}, this.defaultCSVParserConfig), config);
        const ngxCSVParserObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            try {
                let csvRecords = null;
                if (this.isCSVFile(csvFile)) {
                    const reader = new FileReader();
                    reader.readAsText(csvFile);
                    reader.onload = () => {
                        const csvData = reader.result;
                        const csvRecordsArray = this.csvStringToArray(csvData.trim(), config.delimiter);
                        const headersRow = this.getHeaderArray(csvRecordsArray);
                        csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length, config);
                        observer.next(csvRecords);
                        observer.complete();
                    };
                    reader.onerror = () => {
                        this.badCSVDataFormatErrorHandler(observer);
                    };
                }
                else {
                    this.notCSVFileErrorHandler(observer);
                }
            }
            catch (error) {
                this.unknownCSVParserErrorHandler(observer);
            }
        });
        return ngxCSVParserObserver;
    }
    csvStringToArray(csvDataString, delimiter) {
        const regexPattern = new RegExp((`(\\${delimiter}|\\r?\\n|\\r|^)(?:\"((?:\\\\.|\"\"|[^\\\\\"])*)\"|([^\\${delimiter}\"\\r\\n]*))`), "gi");
        let matchedPatternArray = regexPattern.exec(csvDataString);
        const resultCSV = [[]];
        while (matchedPatternArray) {
            if (matchedPatternArray[1].length && matchedPatternArray[1] !== delimiter) {
                resultCSV.push([]);
            }
            const cleanValue = matchedPatternArray[2] ?
                matchedPatternArray[2].replace(new RegExp("[\\\\\"](.)", "g"), '$1') : matchedPatternArray[3];
            resultCSV[resultCSV.length - 1].push(cleanValue);
            matchedPatternArray = regexPattern.exec(csvDataString);
        }
        return resultCSV;
    }
    getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, config) {
        const dataArr = [];
        const headersArray = csvRecordsArray[0];
        const startingRowToParseData = config.header ? 1 : 0;
        for (let i = startingRowToParseData; i < csvRecordsArray.length; i++) {
            const data = csvRecordsArray[i];
            if (data.length === headerLength && config.header) {
                const csvRecord = {};
                for (let j = 0; j < data.length; j++) {
                    if ((data[j] === undefined) || (data[j] === null)) {
                        csvRecord[headersArray[j]] = "";
                    }
                    else {
                        csvRecord[headersArray[j]] = data[j].trim();
                    }
                }
                dataArr.push(csvRecord);
            }
            else {
                dataArr.push(data);
            }
        }
        return dataArr;
    }
    isCSVFile(file) {
        return file.name.toLowerCase().endsWith('.csv');
    }
    getHeaderArray(csvRecordsArr) {
        const headers = csvRecordsArr[0];
        const headerArray = [];
        for (const header of headers) {
            headerArray.push(header);
        }
        return headerArray;
    }
    notCSVFileErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('NOT_A_CSV_FILE', 'Selected file is not a csv File Type.', 2);
        observer.error(ngcCSVParserError);
    }
    unknownCSVParserErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('UNKNOWN_ERROR', 'Unknown error. Please refer to official documentation for library usage.', 404);
        observer.error(ngcCSVParserError);
    }
    badCSVDataFormatErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('BAD_CSV_DATA_FORMAT', 'Unable to parse CSV File.', 1);
        observer.error(ngcCSVParserError);
    }
    errorBuilder(type, message, code) {
        const ngcCSVParserError = new NgxCSVParserError();
        ngcCSVParserError.type = type;
        ngcCSVParserError.message = message;
        ngcCSVParserError.code = code;
        return ngcCSVParserError;
    }
};
NgxCsvParser.ɵfac = function NgxCsvParser_Factory(t) { return new (t || NgxCsvParser)(); };
NgxCsvParser.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxCsvParser_Factory() { return new NgxCsvParser(); }, token: NgxCsvParser, providedIn: "root" });
class CSVParserConfig {
    constructor() { }
}

let NgxCsvParserComponent = class NgxCsvParserComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxCsvParserComponent.ɵfac = function NgxCsvParserComponent_Factory(t) { return new (t || NgxCsvParserComponent)(); };
NgxCsvParserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxCsvParserComponent, selectors: [["lib-ngx-csv-parser"]], decls: 2, vars: 0, template: function NgxCsvParserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ngx-csv-parser works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });

let NgxCsvParserModule = class NgxCsvParserModule {
};
NgxCsvParserModule.ɵfac = function NgxCsvParserModule_Factory(t) { return new (t || NgxCsvParserModule)(); };
NgxCsvParserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxCsvParserModule });
NgxCsvParserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [NgxCsvParser], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'lib-ngx-csv-parser',
                template: `
    <p>
      ngx-csv-parser works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxCsvParserModule, { declarations: [NgxCsvParserComponent], exports: [NgxCsvParserComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NgxCsvParserComponent],
                imports: [],
                providers: [NgxCsvParser],
                exports: [NgxCsvParserComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-csv-parser
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-csv-parser.js.map

/***/ }),

/***/ "2xa7":
/*!********************************************************************!*\
  !*** ./src/app/views/leads/leads-import/leads-import.component.ts ***!
  \********************************************************************/
/*! exports provided: LeadsImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsImportComponent", function() { return LeadsImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leads_import_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leads-import.component.html */ "g/oW");
/* harmony import */ var _leads_import_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-import.component.scss */ "gpd2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "1jgN");
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../leads.service */ "1Btx");






let LeadsImportComponent = class LeadsImportComponent {
    constructor(ngxCsvParser, leadsService) {
        this.ngxCsvParser = ngxCsvParser;
        this.leadsService = leadsService;
        this.headers = [
            'Created Date',
            'Lead ID',
            'Company Name',
            'Contact Name',
            'Email',
            'Phone',
            'Prospect',
            'Source'
        ];
        this.displayData = 0;
        this.successCreate = 0;
        this.danger = 0;
        this.danger_number_of_record = 0;
        this.csvRecords = [];
        this.number_of_record = 0;
    }
    ngOnInit() {
        this.dragAreaClass = "dragarea";
    }
    onChange(files) {
        if (files[0]) {
            this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
                .pipe().subscribe((result) => {
                this.displayData = 1;
                this.csvRecords = result;
            }, (error) => {
                console.log('Error', error);
            });
        }
    }
    submit() {
        let stopCreate = false;
        for (var i = 0, len = this.csvRecords.length; i < len; i++) {
            this.csvRecords[i].mobile_number = this.csvRecords[i].phone;
            if (stopCreate) {
                this.danger = 1;
                this.successCreate = 0;
                break;
            }
            this.leadsService.store(this.csvRecords[i]).subscribe(res => {
                if (!res.success) {
                    stopCreate = true;
                }
                this.successCreate = 1;
                this.number_of_record += 1;
            }, errors => {
                this.danger_number_of_record = 1 + this.number_of_record;
                this.danger = 1;
            });
        }
    }
    onDragOver(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnd(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDrop(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files) {
            this.onChange(event.dataTransfer.files);
        }
    }
};
LeadsImportComponent.ctorParameters = () => [
    { type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"] },
    { type: _leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"] }
];
LeadsImportComponent.propDecorators = {
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["dragover", ["$event"],] }],
    onDragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["dragenter", ["$event"],] }],
    onDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["dragend", ["$event"],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["dragleave", ["$event"],] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["drop", ["$event"],] }]
};
LeadsImportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-import',
        template: _raw_loader_leads_import_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_import_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"],
        _leads_service__WEBPACK_IMPORTED_MODULE_5__["LeadsService"]])
], LeadsImportComponent);



/***/ }),

/***/ "5UYh":
/*!****************************************************************!*\
  !*** ./src/app/views/leads/leads-edit/leads-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: LeadsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsEditComponent", function() { return LeadsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leads_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leads-edit.component.html */ "UKjf");
/* harmony import */ var _leads_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-edit.component.scss */ "eIae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leads.service */ "1Btx");








let LeadsEditComponent = class LeadsEditComponent {
    constructor(formBuilder, leadsService, route, router) {
        this.formBuilder = formBuilder;
        this.leadsService = leadsService;
        this.route = route;
        this.router = router;
        this.autoResize = true;
        this.reasons = [
            'Customer Budget',
            'Low Budget',
            'Scam',
        ];
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
            modifiction_log: this.formBuilder.array([]),
        });
    }
    get form_controls() {
        // console.log(this.form.controls)
        return this.form.controls;
    }
    get getLog() {
        return this.form.get("modifiction_log");
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                this.id = params.get('id');
                this.getData(params.get('id'));
                this.getModificationLog(this.id);
            }
        });
    }
    getData(id) {
        this.leadsService.find(id).subscribe((data) => {
            this.form.patchValue(data.data);
            console.log(data);
        });
    }
    getModificationLog(id) {
        this.leadsService.getModificationLog(id).subscribe((data) => {
            let log = this.form.get('modifiction_log');
            for (let index = 0; index < data.data.length; ++index) {
                log.push(this.formBuilder.group(data.data[index]));
            }
            console.log(log);
        });
    }
    redirectPage() {
        this.router.navigateByUrl('leads/index');
    }
    CreateProspect() {
        this.leadsService.createProspect({ lead_id: this.id }).subscribe(res => {
            console.log(res);
            this.alertBody = res.message || 'Created Prospect Successfully';
            this.successModal.show();
        });
    }
    submit() {
        this.leadsService.update(this.form.value, this.id).subscribe(res => {
            console.log(res);
            this.alertBody = res.message || 'Updated Successfully';
            this.id = res.data.value;
            this.successModal.show();
        });
    }
};
LeadsEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LeadsEditComponent.propDecorators = {
    successModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['successModal',] }]
};
LeadsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-edit',
        template: _raw_loader_leads_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LeadsEditComponent);



/***/ }),

/***/ "67dG":
/*!******************************************************************!*\
  !*** ./src/app/views/leads/leads-index/leads-index.component.ts ***!
  \******************************************************************/
/*! exports provided: LeadsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsIndexComponent", function() { return LeadsIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leads_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leads-index.component.html */ "Ef/r");
/* harmony import */ var _leads_index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-index.component.scss */ "iOR9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../leads.service */ "1Btx");







let LeadsIndexComponent = class LeadsIndexComponent {
    constructor(leadService) {
        this.leadService = leadService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
        this.search_text = '';
        this.pageItems = 10;
        this.columns = [
            { 'header': 'Created Date', 'field': 'created_date', 'type': 'date' },
            { 'header': 'Lead ID', 'field': 'lead_id', 'type': 'text' },
            { 'header': 'Company Name', 'field': 'company_name', 'type': 'text' },
            { 'header': 'Individual Name', 'field': 'individual_name', 'type': 'text' },
            { 'header': 'Email', 'field': 'email', 'type': 'text' },
            { 'header': 'Phone', 'field': 'phone', 'type': 'text' },
            { 'header': 'Status', 'field': 'status', 'type': 'text' },
        ];
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.leadService.getAll(this.pageItems, this.search_text, this.sort).subscribe(data => {
            this.datasource = data['data']['data'];
            this.pages = data['data']['links'];
            this.totalRecords = data['data']['total'];
        });
    }
    getAll() {
        this.leadService.getAll(this.pageItems, this.search_text, this.sort)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((data) => {
            this.datasource = data['data']['data'];
            this.pages = data['data']['links'];
            this.totalRecords = data['data']['total'];
        });
    }
    SortColumn(event) {
        this.sort = { 'field': event['sortField'], 'order': event['sortOrder'] };
        this.getList();
    }
    paginate(event) {
        this.pageItems = event.rows;
        this.onClick(parseInt(event.page) + 1);
    }
    onClick(pageNo) {
        this.leadService.getPage(pageNo, this.pageItems, this.search_text)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((data) => {
            this.datasource = data['data']['data'];
            this.pages = data['data']['links'];
        });
    }
};
LeadsIndexComponent.ctorParameters = () => [
    { type: _leads_service__WEBPACK_IMPORTED_MODULE_6__["LeadsService"] }
];
LeadsIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-index',
        template: _raw_loader_leads_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_leads_service__WEBPACK_IMPORTED_MODULE_6__["LeadsService"]])
], LeadsIndexComponent);



/***/ }),

/***/ "Ef/r":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-index/leads-index.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-table #dt [value]=\"datasource\" styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [reorderableColumns]=\"true\"\n    responsiveLayout=\"scroll\" [filterDelay]=\"0\" [globalFilterFields]=\"['quote_id','company','amount','status']\"\n    [columns]=\"columns\">\n    <ng-template pTemplate=\"caption\">\n        <div class=\"table-header\">\n            <span class=\"p-input-icon-left\">\n                Lead Listing\n                <span class=\"dropdown\" dropdown>\n                    <a id=\"link-dropdown\" dropdownToggle class=\"dropdown-toggle\" aria-controls=\"your-dropdown\">\n                        <i class=\"icon-plus icons\" style=\"color: white;font-size: 24px;\"></i>\n                    </a>\n                    <div id=\"your-dropdown\"  class=\"dropdown-menu\" aria-labelledby=\"link-dropdown\" *dropdownMenu>\n                        <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/leads/create']\"><i class=\"pi pi-user-plus\"></i>Create Lead</a>\n                        <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/leads/import']\"><i class=\"pi pi-file-excel\"></i>Import Lead</a>\n                    </div>\n                </span>\n            </span>\n            <span class=\"p-input-icon-left\">\n                <i class=\"pi pi-search\"></i>\n                <input type=\"text\" pInputText placeholder=\"Global Search\" (input)=\"getAll()\" [(ngModel)]=\"search_text\" />\n            </span>\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let column of columns\" pSortableColumn=\"{{column.field}}\" class=\"text-center\"\n                pReorderableColumn>\n                <div class=\"p-d-flex p-jc-between p-ai-center\">\n                    {{column.header}}\n                    <p-sortIcon field=\"{{column.field}}\"></p-sortIcon>\n                    <p-columnFilter type=\"{{column.type}}\" field=\"{{column.field}}\" display=\"menu\" class=\"p-ml-auto\">\n                    </p-columnFilter>\n                </div>\n            </th>\n\n            <th [style]=\"{'width':'5%'}\">\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-data>\n        <tr class=\"p-selectable-row\">\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Created Date</span>\n                {{ data.created_at | date:'dd-MMM-yyyy' }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Lead ID</span>\n                {{ data.id }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Company Name</span>\n                {{ data.company_name }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Individual Name</span>\n                {{ data.contact_name }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Email</span>\n                {{ data.email }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Phone</span>\n                {{ data.mobile_number }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Status</span>\n                {{ data.lead_status }}\n            </td>\n            <td class=\"text-center\">\n                <span class=\"p-column-title\">Action</span>\n                <a href=\"#\" [routerLink]=\"['/leads/', data.id, 'edit']\" class=\"fa fa-edit\"></a>\n            </td>\n        </tr>\n    </ng-template>\n</p-table>\n<p-paginator (onPageChange)=\"paginate($event)\" [rows]=\"pageItems\" [totalRecords]=\"totalRecords\" [rowsPerPageOptions]=\"[10,25,50,{ showAll: 'All' }]\">\n</p-paginator>");

/***/ }),

/***/ "EqVw":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-create/leads-create.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"col-lg col-md-6\">\n        <div class=\"card rcorners\">\n            <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                <div style=\"padding-left: 20px;\">\n                    <h2>Create Lead</h2>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n                    <div class=\"form-group\">\n                        <div class=\"card-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Owner\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <input pInputText formControlName=\"lead_owner\" class=\"form-control\" placeholder=\"\" type=\"input\" readonly>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Company Name\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <span class=\"p-input-icon-right\" style=\"width: 100%;\">\n                                                <p-autoComplete class=\"search_field\" [inputStyle]=\"{'width':'100%'}\" [style]=\"{'width':'100%'}\" formControlName=\"company_name\" [suggestions]=\"filteredData\" (completeMethod)=\"searchCompanyName($event)\" (onSelect)=\"onSelectCompany($event, 'company_name')\">\n                                                    <ng-template let-item pTemplate=\"item\">\n                                                        <div class=\"item\">\n                                                            <div>{{item.label}}</div>\n                                                        </div>\n                                                    </ng-template>\n                                                </p-autoComplete>\n                                                <i class=\"pi pi-search\"></i>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Contact Name\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <span class=\"p-input-icon-right\" style=\"width: 100%;\">\n                                                <p-autoComplete class=\"search_field\" [inputStyle]=\"{'width':'100%'}\" [style]=\"{'width':'100%'}\" formControlName=\"contact_name\" [suggestions]=\"filteredData\" (completeMethod)=\"searchName($event)\" (onSelect)=\"onSelect($event)\">\n                                                    <ng-template let-item pTemplate=\"item\">\n                                                        <div class=\"item\">\n                                                            <div>{{item.full_name}} ({{item.mobile_phone}})</div>\n                                                        </div>\n                                                    </ng-template>\n                                                </p-autoComplete>\n                                                <i class=\"pi pi-search\"></i>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Department\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <input pInputText formControlName=\"department\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Email\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <input pInputText formControlName=\"email\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Mobile Number\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <input pInputText formControlName=\"mobile_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Office Phone Number\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <input pInputText formControlName=\"office_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5\">\n                                            Address\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <textarea [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"address\"></textarea>\n                                            <div class=\"d-inline-flex\">\n                                                <div style=\"margin-right: 5px;\">\n                                                    <input pInputText formControlName=\"postcode\" class=\"form-control\" placeholder=\"Zipcode\" type=\"input\">\n                                                </div>\n                                                <div style=\"margin-right: 5px;\">\n                                                    <p-dropdown [options]=\"states\" formControlName=\"state\" placeholder=\"Select State\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\" autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                                                </div>\n                                                <div>\n                                                    <input pInputText formControlName=\"country\" class=\"form-control\" placeholder=\"Country\" type=\"input\">\n                                                </div>\n                                            </div>\n                                            \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Prospect type\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p-radioButton name=\"prospect_type\" value=\"individual\" formControlName=\"prospect_type\" inputId=\"prospect_type1\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"prospect_type1\">Individual</label>\n                                            <p-radioButton name=\"prospect_type\" value=\"company\" formControlName=\"prospect_type\" inputId=\"prospect_type2\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"prospect_type2\">Company</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Source\n                                        </div>\n                                        <div class=\"col-md-6 d-inline-flex\">\n                                            <div class=\"col-md-5\" style=\"padding: 0px;\">\n                                                <p-dropdown [options]=\"source_items\" formControlName=\"source\" placeholder=\"Select Source\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\" autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                                            </div>\n                                            <div class=\"col-md-7\" style=\"padding: 0px 0px 0px 10px;\">\n                                                <input pInputText formControlName=\"other_source\" class=\"form-control\" placeholder=\"Others\" type=\"input\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-9 submit-button\" align=center>\n                        <div class=\"form-group\">\n                            <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"notFoundModal.show()\">Open</button> -->\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">SAVE</button>\n                            <button class=\"btn btn-secondary\" type=\"button\" [disabled]=\"!form.valid\" (click)=\"verify()\">VERIFY</button>\n                            <!-- <a routerLink=\"/leads/verify\" class=\"btn btn-secondary\">VERIFY</a> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div (onHide)=\"redirectPage()\" id=\"success\" bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{alertHeader}}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dangerModal.hide()\">Close</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #foundModal=\"bs-modal\" class=\"modal fade not-found-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" align=\"center\">\n          <h4 class=\"modal-title\">{{alertHeader}}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"foundModal.hide()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"skip(alretType)\">Yes</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "IuWb":
/*!*********************************************!*\
  !*** ./src/app/views/leads/leads.module.ts ***!
  \*********************************************/
/*! exports provided: LeadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsModule", function() { return LeadsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leads-routing.module */ "pIql");
/* harmony import */ var _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sharedModule/prime-ng.module */ "Wcfd");
/* harmony import */ var _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leads-index/leads-index.component */ "67dG");
/* harmony import */ var _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leads-create/leads-create.component */ "JyNP");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leads-import/leads-import.component */ "2xa7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leads-verify/leads-verify.component */ "j3Xq");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leads-edit/leads-edit.component */ "5UYh");












// import { NgxCsvParserModule } from 'ngx-csv-parser';


let LeadsModule = class LeadsModule {
};
LeadsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_5__["LeadsIndexComponent"],
            _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_6__["LeadsCreateComponent"],
            _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_8__["LeadsImportComponent"],
            _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_11__["LeadsVerifyComponent"],
            _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_13__["LeadsEditComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeadsRoutingModule"],
            _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__["PrimeNgModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
            // NgxCsvParserModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"]
        ]
    })
], LeadsModule);



/***/ }),

/***/ "JyNP":
/*!********************************************************************!*\
  !*** ./src/app/views/leads/leads-create/leads-create.component.ts ***!
  \********************************************************************/
/*! exports provided: LeadsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsCreateComponent", function() { return LeadsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leads_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leads-create.component.html */ "EqVw");
/* harmony import */ var _leads_create_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-create.component.scss */ "P4Pn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leads.service */ "1Btx");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../auth/auth.service */ "qXBG");









let LeadsCreateComponent = class LeadsCreateComponent {
    constructor(formBuilder, leadsService, router, authService) {
        this.formBuilder = formBuilder;
        this.leadsService = leadsService;
        this.router = router;
        this.authService = authService;
        this.autoResize = true;
        this.alretType = 'company';
        this.filteredData = [];
        this.filteredCompanyData = [];
        this.source_items = [
            'Partner',
            'Partner 1',
            'Partner 2',
        ];
        this.states = [
            'Selangor',
            'Kuala Lumpur',
            'Perak',
            'aa'
        ];
        this.items = [
            { label: 'item 1' },
            { label: 'item 2' },
            { label: 'item 3' },
            { label: 'item 4' },
            { label: 'item 5' },
        ];
        this.message = 'Do you want to go to opportunity add page?';
        this.isSkipcompany = false;
        this.isSkipcontact = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            //hardcode
            company_id: '',
            contact_id: '1',
            company_name: ['aa', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contact_name: '',
            department: '',
            email: ['abc@hotmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
            mobile_number: ['aa', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            office_number: '',
            address: '',
            state: '',
            country: '',
            postcode: '',
            prospect_type: 'individual',
            source: '',
            other_source: '',
            lead_status: '',
            able_to_contact: '',
            do_we_sell_these_product: '',
            products_thats_not_selling: '',
            reason_for_disqualifying: '',
            remark: '',
            lead_owner: '',
            additional_notes: ''
        });
        this.form.get('prospect_type').valueChanges.subscribe(val => {
            this.form.controls['prospect_type'].setValue(val, { emitEvent: false });
        });
        this.form.get('other_source').valueChanges.subscribe(val => {
            if (val) {
                this.form.controls['source'].setValue(val, { emitEvent: false });
            }
        });
        this.authService.getUserSession().then(res => {
            if (res.fullname) {
                this.form.controls['lead_owner'].setValue(res.fullname, { emitEvent: false });
            }
        });
    }
    redirectPage() {
        this.router.navigateByUrl('leads/index');
    }
    skip(alretType) {
        if (alretType == 'company') {
            this.isSkipcompany = true;
            this.submit();
        }
    }
    submit() {
        let company_name = this.form.value.company_name;
        if (this.isSkipcompany) {
            this.create(true);
            this.router.navigateByUrl('opportunity/new');
        }
        else {
            this.leadsService.searchCompany(company_name).subscribe(res => {
                if (res.success) {
                    this.alertHeader = res.data;
                    this.alertBody = this.message;
                    this.alretType = 'company';
                    this.foundModal.show();
                    return;
                }
                else {
                    this.create();
                }
            });
        }
    }
    create(skipModal = false) {
        this.leadsService.store(this.form.value).subscribe(res => {
            if (!skipModal) {
                this.alertBody = res.message || 'Created Successfully';
                this.id = res.data.value;
                this.successModal.show();
            }
        });
    }
    verify() {
        this.leadsService.store(this.form.value).subscribe(res => {
            this.id = res.data.id;
        }, error => {
            this.alertBody = error.message || 'Failed';
            this.dangerModal.show();
        }, () => {
            this.router.navigateByUrl('leads/' + this.id + '/verify');
        });
    }
    searchName(event) {
        let query = event.query;
        this.leadsService.searchContact(query).subscribe(res => {
            console.log(res);
            if (res.success) {
                this.filteredData = res.data;
            }
        });
    }
    onSelect(event) {
        console.log(event);
        if (event) {
            let contact_name = this.form.get('contact_name');
            let mobile_number = this.form.get('mobile_number');
            let office_number = this.form.get('office_number');
            let postcode = this.form.get('postcode');
            let address = this.form.get('address');
            contact_name.patchValue(event.full_name);
            mobile_number.patchValue(event.mobile_phone);
            office_number.patchValue(event.business_phone);
            postcode.patchValue(event.zipcode);
            address.patchValue(event.address_1);
            this.form.patchValue(event);
        }
    }
    searchCompanyName(event) {
        let filtered = [];
        let query = event.query;
        for (let i = 0; i < this.items.length; i++) {
            let data = this.items[i];
            if (data.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.filteredCompanyData = filtered;
    }
    onSelectCompany(event, title) {
        console.log(event);
        if (event) {
            let selectedData = event.label;
            let control = this.form.get(title);
            control.patchValue(selectedData);
            this.form.patchValue(event);
        }
    }
};
LeadsCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
LeadsCreateComponent.propDecorators = {
    successModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['successModal',] }],
    dangerModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dangerModal',] }],
    foundModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['foundModal',] }]
};
LeadsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-create',
        template: _raw_loader_leads_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_create_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], LeadsCreateComponent);



/***/ }),

/***/ "P4Pn":
/*!**********************************************************************!*\
  !*** ./src/app/views/leads/leads-create/leads-create.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rcorners {\n  overflow: hidden;\n}\n\n.buttonColor {\n  background-color: #00538a;\n  border-color: #00538a;\n}\n\n.text-header {\n  align-self: center;\n}\n\n.invalid-feedback {\n  color: red;\n  font-size: inherit;\n}\n\n.required-field:after {\n  color: #d00;\n  content: \"*\";\n  margin-left: 3px;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.p-inputtext {\n  height: 100%;\n}\n\n.not-found-modal .modal-content {\n  padding: 20px;\n}\n\n.not-found-modal .modal-content .modal-header {\n  margin: 0 auto;\n  border-bottom: 0px;\n}\n\n.not-found-modal .modal-content .model-title {\n  font-weight: bold;\n}\n\n.not-found-modal .modal-content .modal-body {\n  margin: 0 auto;\n}\n\n.not-found-modal .modal-content .modal-footer {\n  border-top: 0px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKOztBQUlFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBS0U7RUFDRSxhQUFBO0FBRko7O0FBR0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFETjs7QUFJSTtFQUNFLGlCQUFBO0FBRk47O0FBS0k7RUFDRSxjQUFBO0FBSE47O0FBTUk7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFKTiIsImZpbGUiOiJsZWFkcy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmNvcm5lcnN7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXR0b25Db2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzOGE7XG4gIGJvcmRlci1jb2xvcjogIzAwNTM4YTtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnJlcXVpcmVkLWZpZWxkOmFmdGVyIHtcbiAgY29sb3I6ICNkMDA7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCU7XG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxufVxuXG4uY2FyZC1yb3cge1xuICAucm93IHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IDE7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogd2hpdGU7XG59XG4uY2FyZC1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wLWlucHV0dGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vdC1mb3VuZC1tb2RhbCB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5tb2RlbC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgXG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "UKjf":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-edit/leads-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <div class=\"col-lg col-md-6\">\n            <div class=\"card rcorners\">\n                <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                    <div style=\"padding-left: 20px;\">\n                        <h2>Lead Record</h2>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-row\">\n                        <div class=\"lead-data\">\n                            <div class=\"lead-header\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-auto\">\n                                        <h3 class=\"bold\">\n                                            {{ form_controls.company_name.value }}\n                                        </h3>\n                                    </div>\n                                    <div class=\"col-md-auto lead-id\">\n                                        <div>\n                                            <span>LEAD ID</span>\n                                            <span>{{ form_controls.id.value }}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"details grey\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Created Date</label>\n                                            <div>{{ form_controls.created_at.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Contact Name</label>\n                                            <div>{{ form_controls.contact_name.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Email</label>\n                                            <div>{{ form_controls.email.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Owner</label>\n                                            <div>{{ form_controls.lead_owner.value }}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"pi pi-info-circle\"></i>\n                            <span class=\"accordion-header\">Lead Information</span>\n                        </p-header>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Owner\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"lead_owner\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-5 text-header required-field\">\n                                          Company Name\n                                      </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"company_name\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Source\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"source\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Individual Name\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"contact_name\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Able to Contact\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <mat-slide-toggle formControlName=\"able_to_contact\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Department\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"department\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Do We Sell These Products\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <mat-slide-toggle formControlName=\"do_we_sell_these_product\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Email\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"email\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Products That Not Selling\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"products_thats_not_selling\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Mobile Number\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"mobile_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Status\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"lead_status\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Office Number\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"office_number\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Reason for Disqualifying\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <input pInputText formControlName=\"reason_for_disqualifying\" class=\"form-control\" placeholder=\"\" type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"lead-row\" style=\"border-bottom: none;\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Address\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"3\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"address\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Remark\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"3\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"remark\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"cil-clipboard\"></i>\n                            <span class=\"accordion-header\">Modification Log</span>\n                        </p-header>\n                        <div>\n                            <table class=\"table table-borderless table-striped\" formArrayName=\"modifiction_log\">\n                                <thead class=\"grey\">\n                                    <tr>\n                                        <th style=\"width: 20%;\">Date</th>\n                                        <th>Description</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let log of getLog.controls; let i=index\" [formGroupName]=\"i\">\n                                        <td style=\"width: 20%;\">\n                                            {{ log.value.created_at }}\n                                        </td>\n                                        <td>\n                                            {{ log.value.description }}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            <div class=\"form-group\">\n                <p-accordion>\n                    <p-accordionTab [selected]=\"true\">\n                        <p-header>\n                            <i class=\"cil-notes\"></i>\n                            <span class=\"accordion-header\">Additional Notes</span>\n                        </p-header>\n                        <div class=\"\">\n                            <div style=\"padding: 10px 20px 10px 20px;\">\n                                <textarea maxLength=\"250\" [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"additional_notes\" placeholder=\"Limit characters count 250\"></textarea>\n                            </div>\n                        </div>\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            <div class=\"col-xl-12 submit-button\" align=center>\n                <div class=\"form-group\">\n                    <a routerLink=\"/leads/index\" class=\"btn btn-secondary\">CANCEL</a>\n                    <button class=\"btn btn-primary\" type=\"submit\">SAVE</button>\n                    <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"CreateProspect()\">Create Prospect</button> -->\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div (onHide)=\"redirectPage()\" id=\"success\" bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "eIae":
/*!******************************************************************!*\
  !*** ./src/app/views/leads/leads-edit/leads-edit.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rcorners {\n  overflow: hidden;\n}\n\n.required-field:after {\n  color: #d00;\n  content: \"*\";\n  margin-left: 3px;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n  box-shadow: 0px 3px lightgrey;\n  margin-bottom: 10px;\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.grey {\n  background-color: whitesmoke;\n}\n\n:host ::ng-deep .mat-slide-toggle-bar {\n  height: 19px;\n  border-radius: 15px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb-container {\n  top: 0px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb {\n  height: 16px;\n  width: 15px;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #386fa4;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #386fa4;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.lead-id {\n  background-color: #5dbec0;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 4px;\n  padding-bottom: 3px;\n}\n\n::ng-deep .p-accordion p-accordiontab:last-child .p-accordion-content {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n::ng-deep .p-accordion p-accordiontab:last-child .p-accordion-content:first-child {\n  padding-top: 0px;\n}\n\n::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link {\n  text-decoration: none;\n}\n\n::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {\n  margin-top: -8px;\n  position: absolute;\n  right: 0.5em;\n  top: 50%;\n}\n\n.accordion-header {\n  font-weight: bold;\n  font-size: 20px;\n  padding-left: 5px;\n}\n\n.lead-row {\n  border-bottom: 1px solid lightgrey;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.lead-row .row {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: white;\n}\n\n.table-striped > tbody > tr:nth-child(even) > td,\n.table-striped > tbody > tr:nth-child(even) > th {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBR0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBRVI7O0FBRUE7O0VBRUcsdUJBQUE7QUFDSDs7QUFFQTs7RUFFRyx5QkFBQTtBQUNIIiwiZmlsZSI6ImxlYWRzLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmNvcm5lcnMge1xuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVxdWlyZWQtZmllbGQ6YWZ0ZXIge1xuICBjb2xvcjogI2QwMDtcbiAgY29udGVudDogXCIqXCI7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwJTtcbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG59XG5cbi5jYXJkLXJvdyB7XG4gIC5yb3cge1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICB9XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggbGlnaHRncmV5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IDE7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogd2hpdGU7XG59XG4uY2FyZC1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmFkaW8tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyIHtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG46Om5nLWRlZXBcbiAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODZmYTQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2ZmE0O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlYWQtaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiZWMwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIHAtYWNjb3JkaW9udGFiOmxhc3QtY2hpbGQgLnAtYWNjb3JkaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuOjpuZy1kZWVwIC5wLWFjY29yZGlvbiBwLWFjY29yZGlvbnRhYjpsYXN0LWNoaWxkIC5wLWFjY29yZGlvbi1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIC5wLWFjY29yZGlvbi1oZWFkZXIgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Om5nLWRlZXAgLnAtYWNjb3JkaW9uIC5wLWFjY29yZGlvbi1oZWFkZXIgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rIC5wLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNWVtO1xuICB0b3A6IDUwJTtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmxlYWQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQob2RkKT50ZCxcbi50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1jaGlsZChvZGQpPnRoIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyBDaG9vc2UgeW91ciBvd24gY29sb3IgaGVyZVxufVxuXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGQsXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiAyNDIgMjQyKTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcbn1cbiJdfQ== */");

/***/ }),

/***/ "fcJt":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-verify/leads-verify.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"col-lg col-md-6\">\n        <div class=\"card rcorners\">\n            <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                <div style=\"padding-left: 20px;\">\n                    <h2>Verify Lead</h2>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n                    <div class=\"card-row\">\n                        <div class=\"lead-data\">\n                            <div class=\"lead-header\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-auto\">\n                                        <h3 class=\"bold\">\n                                            {{ form_controls.company_name.value }}\n                                        </h3>\n                                    </div>\n                                    <div class=\"col-md-auto lead-id\">\n                                        <div>\n                                            <span>LEAD ID</span>\n                                            <span>{{ form_controls.id.value }}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"details grey\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Created Date</label>\n                                            <div>{{ form_controls.created_at.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Contact Name</label>\n                                            <div>{{ form_controls.contact_name.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Email</label>\n                                            <div>{{ form_controls.email.value }}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bold\">Owner</label>\n                                            <div>{{ form_controls.lead_owner.value }}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"verify-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Able to Contact\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-slide-toggle formControlName=\"able_to_contact\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Do We Sell These Products\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-slide-toggle formControlName=\"do_we_sell_these_product\" class=\"example-margin\">\n                                            </mat-slide-toggle>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Porducts That Not Selling\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"products_thats_not_selling\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Lead Status\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p-radioButton name=\"lead_status\" value=\"new\" formControlName=\"lead_status\" inputId=\"status1\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status1\">New</label>\n                                            <p-radioButton name=\"lead_status\" value=\"qualify\" formControlName=\"lead_status\" inputId=\"status2\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status2\">Qualify</label>\n                                            <p-radioButton name=\"lead_status\" value=\"disqualify\" formControlName=\"lead_status\" inputId=\"status3\"></p-radioButton>\n                                            <label class=\"radio-label\" for=\"status3\">Disqualify</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header required-field\">\n                                            Reason for Disqualifying\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p-dropdown [options]=\"reasons\" formControlName=\"reason_for_disqualifying\" placeholder=\"Select a Reason\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\" autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 text-header\">\n                                            Remark\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <textarea [rows]=\"5\" style=\"width: 100%;\" pInputTextarea [autoResize]=\"autoResize\" formControlName=\"remark\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-12 submit-button\" align=center>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-secondary\" type=\"submit\">SAVE</button>\n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"CreateProspect()\">Create Prospect</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div (onHide)=\"redirectPage()\" id=\"success\" bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{alertBody}}</p>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->");

/***/ }),

/***/ "g/oW":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/leads/leads-import/leads-import.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"col-lg col-md-6\">\n        <div class=\"card rcorners\">\n            <div class=\"card-header row\" style=\"background-color: #898485; color: white;\">\n                <div style=\"padding-left: 20px;\">\n                    <h2>Import Lead</h2>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div draggable=\"true\" ngClass=\"{{dragAreaClass}}\" class=\"card-row\" [ngClass]=\"(displayData == 1 ? 'hide' : 'show')\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            Drag and Drop your file here.\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            or\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            <span class=\"btn btn-primary\" (click)=\"uploads.click()\">BROWSE</span>\n                            <input id=\"files\" type=\"file\" name=\"files\" class=\"form-control\" #uploads  (change)=\"onChange(uploads.files)\" value=\"process\" style=\"display: none;\"/>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12\" align=center>\n                            <a>Download template file (.csv file)</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-table\" [ngClass]=\"(displayData == 1 ? 'show' : 'hide')\">\n                    <div class=\"alert alert-success\" role=\"alert\" [ngClass]=\"(successCreate == 1 ? 'show' : 'hide')\">\n                        <b>Success: </b>The {{number_of_record}} records have been updated into the system\n                    </div>\n                    <div class=\"alert alert-danger\" role=\"alert\" [ngClass]=\"(danger == 1 ? 'show' : 'hide')\">\n                        Something went wrong, kindly double check your No. {{danger_number_of_record}} record.\n                    </div>\n                    <table class=\"table table-striped table-inverse\">\n                        <thead>\n                            <tr>\n                                <ng-container *ngFor=\"let header of headers; let i=index; let last = last;\">\n                                    <th>{{ header }}</th>\n                                </ng-container>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let record of csvRecords\">\n                                <td> {{record.created_date}} </td>\n                                <td> {{record.lead_id}} </td>\n                                <td> {{record.company_name}} </td>\n                                <td> {{record.contact_name}} </td>\n                                <td> {{record.email}} </td>\n                                <td> {{record.phone}} </td>\n                                <td> {{record.prospect}} </td>\n                                <td> {{record.source}} </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"col-xl-12 submit-button\" align=center>\n                        <div class=\"form-group\">\n                            <a routerLink=\"/leads/index\" class=\"btn btn-secondary\">CANCEL</a>\n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"submit()\">SAVE</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "gpd2":
/*!**********************************************************************!*\
  !*** ./src/app/views/leads/leads-import/leads-import.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rcorners {\n  overflow: hidden;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row {\n  padding: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: white;\n}\n\n.table-striped > tbody > tr:nth-child(even) > td,\n.table-striped > tbody > tr:nth-child(even) > th {\n  background-color: #f2f2f2;\n}\n\n.alert {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFHQTtFQUNJLG1DQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBOztFQUVHLHVCQUFBO0FBQ0g7O0FBRUE7O0VBRUcseUJBQUE7QUFDSDs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImxlYWRzLWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yY29ybmVycyB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMCU7XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG59XG5cbi5jYXJkLXJvdyB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyOiAxO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHdoaXRlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHI6bnRoLWNoaWxkKG9kZCk+dGQsIFxuLnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHI6bnRoLWNoaWxkKG9kZCk+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXG59XG5cbi50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1jaGlsZChldmVuKT50ZCwgXG4udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQoZXZlbik+dGgge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiAyNDIgMjQyKTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcbn1cblxuLmFsZXJ0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "iOR9":
/*!********************************************************************!*\
  !*** ./src/app/views/leads/leads-index/leads-index.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tr {\n  border: hidden;\n}\n\n:host ::ng-deep {\n  /* Responsive */\n}\n\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  background-color: #898485;\n  color: white;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n.dropdown-menu {\n  min-width: auto;\n}\n\n.dropdown-toggle::after {\n  content: unset;\n}\n\n.dropdown-item i {\n  font-weight: bold;\n  color: black;\n  font-size: 17px;\n  margin-right: 5px;\n}\n\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUlBO0VBdURJLGVBQUE7QUF2REo7O0FBRVE7RUFDSSxpQkFBQTtBQUFaOztBQUlJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBRlI7O0FBSVE7RUFDSSx5QkFBQTtBQUZaOztBQU1JO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSlI7O0FBT0k7RUFDSSxnQkFBQTtBQUxSOztBQU9RO0VBQ0ksZ0JBQUE7QUFMWjs7QUFVUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUlo7O0FBV1E7RUFDSSxhQUFBO0FBVFo7O0FBWVE7RUFDSSxnQkFBQTtBQVZaOztBQWFRO0VBQ0ksWUFBQTtBQVhaOztBQWNRO0VBQ0kseUJBQUE7QUFaWjs7QUFpQkk7RUFDSSxhQUFBO0FBZlI7O0FBa0JBO0VBQ0ksZUFBQTtBQWZKOztBQWlCQTtFQUNJLGNBQUE7QUFkSjs7QUFrQkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFmUjs7QUFtQkE7RUFJZ0I7O0lBRUksd0JBQUE7RUFuQmxCO0VBc0JjO0lBQ0ksdUNBQUE7RUFwQmxCO0VBc0JrQjtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFwQnRCO0VBc0JzQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxvQ0FBQTtJQUNBLGlCQUFBO0VBcEIxQjtFQXVCc0I7SUFDSSxrQkFBQTtFQXJCMUI7QUFDRiIsImZpbGUiOiJsZWFkcy1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRyIHtcbiAgICBib3JkZXI6IGhpZGRlbjtcbn1cblxuLy8gbmV3IHNjc3NcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1wYWdpbmF0b3Ige1xuICAgICAgICAucC1wYWdpbmF0b3ItY3VycmVudCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucC1wcm9ncmVzc2JhciB7XG4gICAgICAgIGhlaWdodDogLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG4gICAgXG4gICAgICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG4gICAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XG4gICAgICAgIG1pbi13aWR0aDogMjVyZW07XG4gICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XG4gICAgICAgIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTg0ODU7IFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wLXBhZ2luYXRvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyogUmVzcG9uc2l2ZSAqL1xuICAgIC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgY29udGVudDogdW5zZXQ7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAgICAgLnAtZGF0YXRhYmxlIHtcbiAgICAgICAgICAgICYucC1kYXRhdGFibGUtY3VzdG9tZXJzIHtcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxheWVyLTIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtY29sdW1uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtLjRyZW0gMXJlbSAtLjRyZW0gLS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "j3Xq":
/*!********************************************************************!*\
  !*** ./src/app/views/leads/leads-verify/leads-verify.component.ts ***!
  \********************************************************************/
/*! exports provided: LeadsVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsVerifyComponent", function() { return LeadsVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leads_verify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leads-verify.component.html */ "fcJt");
/* harmony import */ var _leads_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-verify.component.scss */ "uAun");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leads.service */ "1Btx");








let LeadsVerifyComponent = class LeadsVerifyComponent {
    constructor(formBuilder, leadsService, route, router) {
        this.formBuilder = formBuilder;
        this.leadsService = leadsService;
        this.route = route;
        this.router = router;
        this.autoResize = true;
        this.reasons = [
            'Customer Budget',
            'Low Budget',
            'Scam',
        ];
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
            additional_notes: ''
        });
    }
    get form_controls() {
        // console.log(this.form.controls)
        return this.form.controls;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                this.id = params.get('id');
                this.getData(params.get('id'));
            }
        });
    }
    getData(id) {
        this.leadsService.find(id).subscribe((data) => {
            this.form.patchValue(data.data);
            console.log(data);
        });
    }
    redirectPage() {
        this.router.navigateByUrl('leads/index');
    }
    CreateProspect() {
        this.leadsService.createProspect({ lead_id: this.id }).subscribe(res => {
            console.log(res);
            this.alertBody = res.message || 'Created Prospect Successfully';
            this.successModal.show();
        });
    }
    submit() {
        this.leadsService.update(this.id, this.form.value).subscribe(res => {
            console.log(res);
            this.alertBody = res.message || 'Updated Successfully';
            this.id = res.data.value;
            this.successModal.show();
        });
    }
};
LeadsVerifyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LeadsVerifyComponent.propDecorators = {
    successModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['successModal',] }]
};
LeadsVerifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads-verify',
        template: _raw_loader_leads_verify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leads_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _leads_service__WEBPACK_IMPORTED_MODULE_7__["LeadsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LeadsVerifyComponent);



/***/ }),

/***/ "pIql":
/*!*****************************************************!*\
  !*** ./src/app/views/leads/leads-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LeadsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsRoutingModule", function() { return LeadsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leads-create/leads-create.component */ "JyNP");
/* harmony import */ var _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leads-edit/leads-edit.component */ "5UYh");
/* harmony import */ var _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leads-import/leads-import.component */ "2xa7");
/* harmony import */ var _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leads-index/leads-index.component */ "67dG");
/* harmony import */ var _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leads-verify/leads-verify.component */ "j3Xq");








const routes = [
    { path: 'index', component: _leads_index_leads_index_component__WEBPACK_IMPORTED_MODULE_6__["LeadsIndexComponent"] },
    { path: 'create', component: _leads_create_leads_create_component__WEBPACK_IMPORTED_MODULE_3__["LeadsCreateComponent"] },
    { path: ':id/edit', component: _leads_edit_leads_edit_component__WEBPACK_IMPORTED_MODULE_4__["LeadsEditComponent"] },
    { path: ':id/verify', component: _leads_verify_leads_verify_component__WEBPACK_IMPORTED_MODULE_7__["LeadsVerifyComponent"] },
    { path: 'import', component: _leads_import_leads_import_component__WEBPACK_IMPORTED_MODULE_5__["LeadsImportComponent"] },
    { path: '**', redirectTo: 'index' }
];
let LeadsRoutingModule = class LeadsRoutingModule {
};
LeadsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LeadsRoutingModule);



/***/ }),

/***/ "uAun":
/*!**********************************************************************!*\
  !*** ./src/app/views/leads/leads-verify/leads-verify.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rcorners {\n  overflow: hidden;\n}\n\n.card-body {\n  padding: 0%;\n}\n\n.card-body .submit-button {\n  padding-top: 50px;\n}\n\n.card-row .row {\n  padding: 8px 15px;\n}\n\n.card {\n  background-color: var(--body-color);\n}\n\n.card-header {\n  border: 1;\n}\n\n.card-body {\n  padding: 0%;\n  background-color: white;\n  border: white;\n}\n\n.card-footer {\n  opacity: 1;\n  border: none;\n  padding: 0%;\n  padding-top: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.radio-label {\n  margin-bottom: 0px;\n  margin-right: 15px;\n  margin-left: 5px;\n}\n\n.grey {\n  background-color: whitesmoke;\n}\n\n:host ::ng-deep .mat-slide-toggle-bar {\n  height: 19px;\n  border-radius: 15px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb-container {\n  top: 0px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n:host ::ng-deep .mat-slide-toggle-thumb {\n  height: 16px;\n  width: 15px;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #386FA4;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #386FA4;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.lead-id {\n  background-color: #5dbec0;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 4px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlYWRzLXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKOztBQUlFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUYiLCJmaWxlIjoibGVhZHMtdmVyaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJjb3JuZXJzIHtcbiAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAlO1xuICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbn1cblxuLmNhcmQtcm93IHtcbiAgLnJvdyB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gIH1cbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiAxO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHdoaXRlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5ncmV5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyIHtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODZGQTQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2RkE0O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlYWQtaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiZWMwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=views-leads-leads-module-es2015.js.map