(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
var LeadsService_1;






let LeadsService = LeadsService_1 = class LeadsService {
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
    getPage(url, pageItems, search_text) {
        let query = '&page_items=' + pageItems + '&search_text=' + search_text;
        return this.httpClient.get(url + query, this.httpOptions)
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
    createProspect(id) {
        return this.httpClient.post(this.apiURL + '/lead/create-prospect', id, this.httpOptions)
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
        var _a;
        let errorMessage = '';
        LeadsService_1.leadErrorMessage = '';
        LeadsService_1.leadErrorMessage = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
LeadsService.leadErrorMessage = '';
LeadsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeadsService = LeadsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LeadsService);



/***/ }),

/***/ "DUZZ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/coming-soon/coming-soon.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-row align-items-center\" style=\"display:flex; min-height: 85vh;\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n          <div class=\"clearfix\">\n            <h1 class=\"float-left display-3 mr-4\">Coming Soon</h1>\n         \n          </div>\n          <div class=\"input-prepend input-group\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "aMa8":
/*!************************************************************!*\
  !*** ./src/app/views/coming-soon/coming-soon.component.ts ***!
  \************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coming_soon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coming-soon.component.html */ "DUZZ");
/* harmony import */ var _coming_soon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon.component.scss */ "h7E3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ComingSoonComponent = class ComingSoonComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComingSoonComponent.ctorParameters = () => [];
ComingSoonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coming-soon',
        template: _raw_loader_coming_soon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coming_soon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ComingSoonComponent);



/***/ }),

/***/ "h7E3":
/*!**************************************************************!*\
  !*** ./src/app/views/coming-soon/coming-soon.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmctc29vbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map