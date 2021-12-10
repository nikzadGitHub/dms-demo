(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dms-dms-module"],{

/***/ "+4Sx":
/*!*********************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/status-log/status-log.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMtbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "+IR6":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/opportunity-summary/opportunity-summary.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--/.col-->\n\n  <!--/.col-->\n  <div class=\"form-group\" *ngIf=\"opportunitySummary\">\n    <p-accordion class=\"p-accordion\">\n        <p-accordionTab class=\"p-accordionTab\" [selected]=\"true\">\n            <p-header class=\"p-header\">\n                <i class=\"cil-info\"></i>\n                <span class=\"accordion-header\">Opportunity Summary</span>\n            </p-header>\n                  <div>\n                    <table class=\"table table-borderless\">\n                      <tbody>\n                        <tr>\n                          <td>Customer & Code</td>\n                          <td>{{ opportunitySummary.customer }}</td>\n                          <td>Opportunity Amount (RM)</td>\n                          <td>{{ opportunitySummary.opportunity_amount }}</td>\n                        </tr>\n                        <tr>\n                            <td>Opportunity ID</td>\n                            <td>{{ opportunitySummary.opportunity_id }}</td>\n                            <td>Opportunity no.-Version</td>\n                            <td>{{ opportunitySummary.opportunity_no }}</td>\n                          </tr>\n                        <tr>\n                          <td>Initiator</td>\n                          <td>{{ opportunitySummary.initiator }}</td>\n                          <td>Winning Probability</td>\n                          <td>{{ opportunitySummary.winning_probability }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n          <ng-template #empty>\n            <p>Summary not set...</p>\n          </ng-template>\n        </p-accordionTab>\n    </p-accordion>\n  </div>\n");

/***/ }),

/***/ "/YYf":
/*!********************************************!*\
  !*** ./src/app/dms/services/api-client.ts ***!
  \********************************************/
/*! exports provided: parameterize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameterize", function() { return parameterize; });
/**
 * Serializes object's fields, into string parameter.
 *
 * @param obj key and value map.
 * @return URL Parameter formatted-text.
 */
function parameterize(obj) {
    const result = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return result.join('&');
}


/***/ }),

/***/ "/j1+":
/*!********************************************************!*\
  !*** ./src/app/dms/services/equipment-purpose.enum.ts ***!
  \********************************************************/
/*! exports provided: EquipmentPurpose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentPurpose", function() { return EquipmentPurpose; });
var EquipmentPurpose;
(function (EquipmentPurpose) {
    EquipmentPurpose["demo"] = "DEMO";
    EquipmentPurpose["loan"] = "LOAN";
})(EquipmentPurpose || (EquipmentPurpose = {}));


/***/ }),

/***/ "2Sje":
/*!****************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/main-asset.component.ts ***!
  \****************************************************************************/
/*! exports provided: MainAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAssetComponent", function() { return MainAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_asset_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-asset.component.html */ "EOxg");
/* harmony import */ var _main_asset_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-asset.component.scss */ "hNOO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




/**
 * View/Picking-form for equipments and/or assets.
 */
let MainAssetComponent = class MainAssetComponent {
    constructor() {
        this.isAddable = false;
        this.isAssignable = true;
    }
    ngOnInit() { }
    /**
     * Pipe callback, preventing original-order change.
     */
    onSortIgnore() {
        return -1;
    }
};
MainAssetComponent.ctorParameters = () => [];
MainAssetComponent.propDecorators = {
    mainAsset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isAddable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isAssignable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MainAssetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-form-main-asset',
        template: _raw_loader_main_asset_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_asset_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * This class is used to add the main asset to different parts of DMS
     * @class
     */
    ,
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MainAssetComponent);



/***/ }),

/***/ "2f3j":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-booking-form/opportunity-form/opportunity-form.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: OpportunityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityFormComponent", function() { return OpportunityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_opportunity_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./opportunity-form.component.html */ "mNTC");
/* harmony import */ var _opportunity_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunity-form.component.scss */ "ur9H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/booking.service */ "behN");
/* harmony import */ var _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/customers/customers.service */ "wsQf");








let OpportunityFormComponent = class OpportunityFormComponent {
    constructor(fb, bookingService, apiCustomers) {
        this.fb = fb;
        this.bookingService = bookingService;
        this.apiCustomers = apiCustomers;
        this.curDate = new Date(Date.now()).toLocaleDateString();
    }
    ngOnInit() {
        this.apiCustomers.getList().subscribe((response) => {
            this.customers = response;
        });
        this.formBooking = this.fb.group({
            status: "Draft",
            customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            booking_reason: "Demo",
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            date_of_delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            date_of_collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            demo_duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            contact_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    onSave() {
        this.bookingService.updateBooking({
            customer: this.formBooking.get("customer").value + "",
            curDate: this.curDate,
            booking_reason: "Demo",
            branch: this.formBooking.get("branch").value + "",
            date_of_delivery: this.formBooking.get("date_of_delivery").value + "",
            date_of_collection: this.formBooking.get("date_of_collection").value + "",
            demo_duration: this.formBooking.get("demo_duration").value + "",
            department: this.formBooking.get("department").value + "",
            contact_name: this.formBooking.get("contact_name").value + "",
            contact_number: this.formBooking.get("contact_number").value + "",
            remarks: this.formBooking.get("remarks").value + ""
        }, 8).subscribe((res) => {
            if (res.id) {
                this.alertBody = "Booking saved successfully.";
                this.successModal.show();
                setTimeout(() => {
                    this.successModal.hide();
                }, 2000);
                this.formBooking.reset();
            }
        }, err => {
            console.log(err);
            this.alertBody = "The booking can't save";
            this.dangerModal.show();
            setTimeout(() => {
                this.dangerModal.hide();
            }, 2000);
        });
    }
};
OpportunityFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"] },
    { type: _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"] }
];
OpportunityFormComponent.propDecorators = {
    successModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["successModal",] }],
    dangerModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["dangerModal",] }],
    foundModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["foundModal",] }]
};
OpportunityFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-opportunity-booking-form-submit',
        template: _raw_loader_opportunity_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_opportunity_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"],
        _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
], OpportunityFormComponent);



/***/ }),

/***/ "2vsr":
/*!***********************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/identify/identify.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IdentifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyComponent", function() { return IdentifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_identify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./identify.component.html */ "Lfcg");
/* harmony import */ var _identify_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identify.component.scss */ "91YJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_equipment_purpose_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/equipment-purpose.enum */ "/j1+");
/* harmony import */ var _services_equipment_kind_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/equipment-kind.enum */ "jPgE");
/* harmony import */ var _services_equipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/equipments.service */ "4/i7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








/**
 * Form/View for finding and saving resulted equipments.
 */
let IdentifyComponent = class IdentifyComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        /**
         * Items currently visible on view,
         * which should be saved, once {@link bySave} is triggered.
         */
        this.list = [];
        /**
         * Inputting kind of Equipment/Asset to find.
         */
        this.kind = 'unknown';
        /**
         * Maximum allowed count/number of result, but zero means is unlimited.
         */
        this.maxPick = 0;
        /**
         * Inputting default value for search-field.
         */
        this.filter = '';
        /**
         * Event triggered by Closing component.
         */
        this.byClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event triggered by Saving form (IoC).
         */
        this.bySave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.searchListener) {
            this.searchListener.unsubscribe();
        }
    }
    /**
     * Shorthand for {@link isEquipmentMain}.
     */
    get isMain() {
        return Object(_services_equipment_kind_enum__WEBPACK_IMPORTED_MODULE_5__["isEquipmentMain"])(this.kind);
    }
    /**
     * View listener for Search start, subscribes on API-service,
     * and updates list based on response.
     */
    onSearch() {
        // Notify existing changes.
        for (const item of this.list) {
            if (item.isPicked || item.newSku !== '') {
                const msg = 'You have unsaved Changes, or selection.'
                    + '\n\nDo you want to continue?';
                if (confirm(msg)) {
                    break;
                }
                return;
            }
        }
        // Prepare.
        if (this.searchListener) {
            this.searchListener.unsubscribe();
        }
        // Actual search.
        const query = {
            search_text: this.filter,
            purposes: this.isMain ? [
                _services_equipment_purpose_enum__WEBPACK_IMPORTED_MODULE_4__["EquipmentPurpose"].demo, _services_equipment_purpose_enum__WEBPACK_IMPORTED_MODULE_4__["EquipmentPurpose"].loan
            ] : []
        };
        this.searchListener = this.api.findEquipments(query).subscribe({
            next: (response) => {
                if (response) {
                    this.list = response.map((item) => {
                        return Object.assign(Object.assign({}, item), { newSku: '', isPicked: false });
                    });
                }
                else {
                    this.list = [];
                }
            },
            error: () => {
                this.list = [];
            }
        });
    }
    /**
     * View listener for Saving form, emits {@link bySave}.
     */
    onSave() {
        this.api.saveInventoryBooking({
            bookingId: this.route.snapshot.params.id,
            equipmentId: this.equipmentId,
            type: "main",
        }).subscribe((res) => {
            if (res) {
                this.bySave.emit(this);
            }
        }, err => {
            console.log(err);
            alert("not added");
        });
    }
    /**
     * View listener for Closing form, emits {@link byClose}.
     */
    onClose() {
        this.byClose.emit(this);
    }
    /**
     * Marks given index with {@link EquipmentWithEdit#isPicked},
     * and deselects everything else.
     */
    onSelect(selectedIndex, id) {
        this.equipmentId = id;
        this.list.forEach((entry, index) => {
            entry.isPicked = index === selectedIndex;
        });
    }
};
IdentifyComponent.ctorParameters = () => [
    { type: _services_equipments_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
IdentifyComponent.propDecorators = {
    kind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    maxPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    byClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    bySave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
IdentifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-identify',
        template: _raw_loader_identify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_identify_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_equipments_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], IdentifyComponent);



/***/ }),

/***/ "3F9r":
/*!***************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/booking-detail/booking-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BookingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailComponent", function() { return BookingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-detail.component.html */ "rHfp");
/* harmony import */ var _booking_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-detail.component.scss */ "xCpw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BookingDetailComponent = class BookingDetailComponent {
    constructor() { }
    ngOnInit() { }
};
BookingDetailComponent.ctorParameters = () => [];
BookingDetailComponent.propDecorators = {
    bookingDetailList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BookingDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-detail',
        template: _raw_loader_booking_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BookingDetailComponent);



/***/ }),

/***/ "4/i7":
/*!****************************************************!*\
  !*** ./src/app/dms/services/equipments.service.ts ***!
  \****************************************************/
/*! exports provided: EquipmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsService", function() { return EquipmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-client.service */ "gdhP");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-client */ "/YYf");




let EquipmentsService = class EquipmentsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    findEquipments(query) {
        return this.apiClient.get('equipments/search?' + Object(_api_client__WEBPACK_IMPORTED_MODULE_3__["parameterize"])(query));
    }
    saveInventoryBooking(request) {
        return this.apiClient.post('inventory-booking/store', request);
    }
};
EquipmentsService.ctorParameters = () => [
    { type: _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }
];
EquipmentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]])
], EquipmentsService);



/***/ }),

/***/ "4hCS":
/*!**********************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-summary/opportunity-summary.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OpportunitySummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitySummaryComponent", function() { return OpportunitySummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_opportunity_summary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./opportunity-summary.component.html */ "+IR6");
/* harmony import */ var _opportunity_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunity-summary.component.scss */ "EHan");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_booking_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/booking-entity */ "O43I");





let OpportunitySummaryComponent = class OpportunitySummaryComponent {
    constructor() {
        this.opportunitySummary = _services_booking_entity__WEBPACK_IMPORTED_MODULE_4__["emptyOpportunitySummary"];
    }
    ngOnInit() { }
};
OpportunitySummaryComponent.ctorParameters = () => [];
OpportunitySummaryComponent.propDecorators = {
    opportunitySummary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OpportunitySummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-opportunity-summary',
        template: _raw_loader_opportunity_summary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_opportunity_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     *This class is used for the opportunity list component
     * @class
     */
    ,
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OpportunitySummaryComponent);



/***/ }),

/***/ "5E5Q":
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.js ***!
  \*************************************************/
/*! exports provided: default, ListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "Ek7K");
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ "1hAE");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var ListViewHeaderRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ListViewHeaderRow, _super);
    function ListViewHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            textId: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getUniqueDomId"])(),
        };
        return _this;
    }
    ListViewHeaderRow.prototype.render = function () {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options, viewApi = _a.viewApi;
        var _b = this.props, cellId = _b.cellId, dayDate = _b.dayDate, todayRange = _b.todayRange;
        var textId = this.state.textId;
        var dayMeta = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getDateMeta"])(dayDate, todayRange);
        // will ever be falsy?
        var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        var hookProps = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ date: dateEnv.toDate(dayDate), view: viewApi, textId: textId,
            text: text,
            sideText: sideText, navLinkAttrs: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkAttrs"])(this.context, dayDate), sideNavLinkAttrs: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkAttrs"])(this.context, dayDate, 'day', false) }, dayMeta);
        var classNames = ['fc-list-day'].concat(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getDayClassNames"])(dayMeta, theme));
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["formatDayString"])(dayDate) },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: 'fc-list-day-cushion ' + theme.getClass('tableCellShaded'), ref: innerElRef }, innerContent)))); }));
    };
    return ListViewHeaderRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function renderInnerContent(props) {
    return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        props.text && (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
        props.sideText && ( /* not keyboard tabbable */Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
}

var DEFAULT_TIME_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
var ListViewEventRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ListViewEventRow, _super);
    function ListViewEventRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewEventRow.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg, timeHeaderId = props.timeHeaderId, eventHeaderId = props.eventHeaderId, dateHeaderId = props.dateHeaderId;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["EventRoot"], { seg: seg, timeText: "" // BAD. because of all-day content
            , disableDragging: true, disableResizing: true, defaultContent: function () { return renderEventInnerContent(seg, context); } /* weird */, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, isSelected: props.isSelected, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { className: ['fc-list-event', hookProps.event.url ? 'fc-event-forced-url' : ''].concat(classNames).join(' '), ref: rootElRef },
            buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })),
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { ref: innerElRef, headers: eventHeaderId + " " + dateHeaderId, className: "fc-list-event-title" }, innerContent))); }));
    };
    return ListViewEventRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function renderEventInnerContent(seg, context) {
    var interactiveAttrs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegAnchorAttrs"])(seg, context);
    return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, interactiveAttrs), seg.eventRange.def.title));
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
    var options = context.options;
    if (options.displayEventTime !== false) {
        var eventDef = seg.eventRange.def;
        var eventInstance = seg.eventRange.instance;
        var doAllDay = false;
        var timeText = void 0;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["isMultiDayRange"])(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegTimeText"])(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegTimeText"])(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegTimeText"])(seg, timeFormat, context);
        }
        if (doAllDay) {
            var hookProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { ref: rootElRef, headers: timeHeaderId + " " + dateHeaderId, className: ['fc-list-event-time'].concat(classNames).join(' ') }, innerContent)); }));
        }
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.computeDateVars = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(computeDateVars);
        _this.eventStoreToSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(_this._eventStoreToSegs);
        _this.state = {
            timeHeaderId: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getUniqueDomId"])(),
            eventHeaderId: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getUniqueDomId"])(),
            dateHeaderIdRoot: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getUniqueDomId"])(),
        };
        _this.setRootEl = function (rootEl) {
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    ListView.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var extraClassNames = [
            'fc-list',
            context.theme.getClass('table'),
            context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : '',
        ];
        var _b = this.computeDateVars(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
        var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], { viewSpec: context.viewSpec, elRef: this.setRootEl }, function (rootElRef, classNames) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: rootElRef, className: extraClassNames.concat(classNames).join(' ') },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Scroller"], { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                _this.renderSegList(eventSegs, dayDates) :
                _this.renderEmptyMessage()))); }));
    };
    ListView.prototype.renderEmptyMessage = function () {
        var _a = this.context, options = _a.options, viewApi = _a.viewApi;
        var hookProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: ['fc-list-empty'].concat(classNames).join(' '), ref: rootElRef },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent))); }));
    };
    ListView.prototype.renderSegList = function (allSegs, dayDates) {
        var _a = this.context, theme = _a.theme, options = _a.options;
        var _b = this.state, timeHeaderId = _b.timeHeaderId, eventHeaderId = _b.eventHeaderId, dateHeaderIdRoot = _b.dateHeaderIdRoot;
        var segsByDay = groupSegsByDay(allSegs); // sparse array
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], { unit: "day" }, function (nowDate, todayRange) {
            var innerNodes = [];
            for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                var daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    var dayStr = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["formatDayString"])(dayDates[dayIndex]);
                    var dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                    // append a day header
                    innerNodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"])(daySegs, options.eventOrder);
                    for (var _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
                        var seg = daySegs_1[_i];
                        innerNodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ListViewEventRow, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange, nowDate))));
                    }
                }
            }
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", { className: 'fc-list-table ' + theme.getClass('table') },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("thead", null,
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null,
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { scope: "col", "aria-hidden": true }),
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, innerNodes)));
        }));
    };
    ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sliceEventStore"])(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    };
    ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    };
    ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
        var dateEnv = this.context.dateEnv;
        var nextDayThreshold = this.context.options.nextDayThreshold;
        var range = eventRange.range;
        var allDay = eventRange.def.allDay;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["intersectRanges"])(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange: eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex: dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    return ListView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]));
function renderNoEventsInner(hookProps) {
    return hookProps.text;
}
function computeDateVars(dateProfile) {
    var dayStart = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(dateProfile.renderRange.start);
    var viewEnd = dateProfile.renderRange.end;
    var dayDates = [];
    var dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(dayStart, 1),
        });
        dayStart = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(dayStart, 1);
    }
    return { dayDates: dayDates, dayRanges: dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    var segsByDay = []; // sparse array
    var i;
    var seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
    noEventsContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
    noEventsDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
    noEventsWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
    // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
    return input === false ? null : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])(input);
}

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
    },
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ "6SsL":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/inventory/inventory.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p-tabMenu [model]=\"menuItems\"\n    [activeItem]=\"activeItem\"></p-tabMenu>\n\n<p-table  [loading]=\"loading\" #dt [value]=\"inventoryList\" styleClass=\"p-datatable-table\" [rowHover]=\"true\" [filterDelay]=\"0\"\n    [globalFilterFields]=\"['serial_no','stock_keep_unit','product_name']\">\n    <ng-template pTemplate=\"caption\">\n        <div class=\"table-header d-flex\">\n            <div class=\"d-flex\">\n                <div>Inventory Listing</div>\n                <div class=\"ml-2 mt-1\"><a routerLink=\"/inventory/new\" routerLinkActive=\"router-link-active\"><i\n                            class=\"icon-plus icons\" style=\"color: #FFFFFF\"></i></a></div>\n            </div>\n            <div class=\"p-input-icon-left\">\n                <i class=\"pi pi-search\"></i>\n                <input type=\"text\" pInputText placeholder=\"Global Search\" [(ngModel)]=\"search_text\"\n                    (input)=\"onSearch()\" />\n            </div>\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th pSortableColumn=\"serial_no\" class=\"text-center\">\n                <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Serial No\n                    <div class=\"th-icons\">\n                        <p-sortIcon field=\"serial_no\"></p-sortIcon>\n                        <p-columnFilter type=\"numeric\" field=\"serial_no\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                    </div>\n                   \n                </div>\n            </th>\n            <th pSortableColumn=\"stock_keep_unit\" class=\"text-center\">\n                <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    SKU\n                    <div class=\"sku-icons\">\n                        <p-sortIcon field=\"stock_keep_unit\"></p-sortIcon>\n                        <p-columnFilter type=\"text\" field=\"stock_keep_unit\" display=\"menu\" class=\"p-ml-auto\">\n                        </p-columnFilter>\n                    </div>\n                   \n                </div>\n            </th>\n            <th pSortableColumn=\"product_name\" class=\"text-center\">\n                <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Product Name\n                    <div class=\"product-icons\">\n                        <p-sortIcon field=\"product_name\"></p-sortIcon>\n                        <p-columnFilter type=\"text\" field=\"product_name\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                    </div>\n                   \n                </div>\n            </th>\n            <th pSortableColumn=\"agency\" class=\"text-center\">\n                <div style=\"display:flex;white-space: nowrap; flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Agency/ Principal\n                    <div class=\"agency-icons\">\n                        <p-sortIcon field=\"agency\"></p-sortIcon>\n                        <p-columnFilter type=\"text\" field=\"agency\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                    </div>\n                   \n                </div>\n            </th>\n            <th pSortableColumn=\"description\" class=\"text-center\">\n                <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Description\n                    <div class=\"desc-icons\">\n                        <p-sortIcon field=\"description\"></p-sortIcon>\n                        <p-columnFilter type=\"text\" field=\"description\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                    </div>\n                  \n                </div>\n            </th>\n            <th pSortableColumn=\"status\" class=\"text-center\">\n                <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Status\n                    <div class=\"status-icons\">\n                        <p-sortIcon field=\"status\"></p-sortIcon>\n                    <p-columnFilter type=\"text\" field=\"status\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                    </div>\n                    \n                </div>\n            </th>\n            <th pSortableColumn=\"booking_id\" class=\"text-center\">\n                <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                    Current Booking\n                    <div class=\"booking-icons\">\n                        <p-sortIcon field=\"booking_id\"></p-sortIcon>\n                        <p-columnFilter type=\"numeric\" field=\"booking_id\" display=\"menu\" class=\"p-ml-auto\">\n                        </p-columnFilter>\n                    </div>\n                  \n                </div>\n            </th>\n\n            <th [style]=\"{'width':'5%'}\">\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-inventoryItem>\n        <tr class=\"p-selectable-row\">\n            <td class=\"text-center\">\n                {{ inventoryItem.serial_no | number:'5.' }}\n            </td>\n            <td class=\"text-center\">\n                {{ inventoryItem.stock_keep_unit }}\n            </td>\n            <td class=\"text-center\">\n                {{ inventoryItem.product_name }}\n            </td>\n            <td class=\"text-center\">\n                {{ inventoryItem.agency_name }}\n            </td>\n            <td class=\"text-center\">\n                {{ inventoryItem.description }}\n            </td>\n            <td class=\"text-center\">\n                {{ inventoryItem.status }}\n            </td>\n            <td class=\"text-center\">\n                {{ formatBooking(inventoryItem.booking_id) }}\n            </td>\n        </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr>\n            <td style=\"text-align: center;\" [attr.colspan]=\"columns.length\">\n                No records found\n            </td>\n        </tr>\n    </ng-template>\n</p-table>\n<p-paginator [rows]=\"pageItems\" [rowsPerPageOptions]=\"[10,25,50,{ showAll: 'All' }]\">\n</p-paginator>\n");

/***/ }),

/***/ "80P3":
/*!********************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-booking-form/opportunity-booking-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: OpportunityBookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityBookingFormComponent", function() { return OpportunityBookingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_opportunity_booking_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./opportunity-booking-form.component.html */ "C9UX");
/* harmony import */ var _opportunity_booking_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunity-booking-form.component.scss */ "LmCP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_booking_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/booking-entity */ "O43I");





let OpportunityBookingFormComponent = class OpportunityBookingFormComponent {
    constructor() {
        this.opportunitySummary = _services_booking_entity__WEBPACK_IMPORTED_MODULE_4__["emptyOpportunitySummary"];
    }
    ngOnInit() {
        this.mainAsset = {
            main: [],
            compatibles: [],
            peripherals: [],
            consumables: [],
            packing: [],
            accessories: []
        };
        this.opportunitySummary = {
            customer: "test",
            opportunity_id: "test",
            initiator: "test",
            opportunity_amount: "10000",
            opportunity_no: "test",
            winning_probability: "test",
        };
    }
};
OpportunityBookingFormComponent.ctorParameters = () => [];
OpportunityBookingFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-opportunity-booking-form',
        template: _raw_loader_opportunity_booking_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_opportunity_booking_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OpportunityBookingFormComponent);



/***/ }),

/***/ "8u6V":
/*!**************************************!*\
  !*** ./src/app/dms/dms.component.ts ***!
  \**************************************/
/*! exports provided: DmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmsComponent", function() { return DmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dms.component.html */ "OyPn");
/* harmony import */ var _dms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dms.component.scss */ "p9Jp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let DmsComponent = class DmsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DmsComponent.ctorParameters = () => [];
DmsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dms',
        template: _raw_loader_dms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DmsComponent);



/***/ }),

/***/ "91YJ":
/*!*************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/identify/identify.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".identify-header {\n  padding: 20px 20px 0px 20px;\n}\n\n.row .card {\n  float: none;\n  margin: auto;\n}\n\n.picker {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2lkZW50aWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQWEsV0FBQTtBQUVmIiwiZmlsZSI6ImlkZW50aWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkZW50aWZ5LWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHggMjBweDtcbn1cblxuLnJvdyAuY2FyZCB7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5waWNrZXIge1xuICBoZWlnaHQ6MjVweDsgd2lkdGg6MjVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "C9UX":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/opportunity-booking-form/opportunity-booking-form.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dms-opportunity-booking-form-submit></dms-opportunity-booking-form-submit>\n<app-opportunity-summary [opportunitySummary]=\"opportunitySummary\"></app-opportunity-summary>\n<app-booking-form-main-asset\n  [mainAsset]=\"mainAsset\"\n  [isAddable]=\"true\">\n</app-booking-form-main-asset>\n");

/***/ }),

/***/ "CuDr":
/*!*******************************************************************************!*\
  !*** ./src/app/dms/components/widgets/expand-panel/expand-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpandPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandPanelComponent", function() { return ExpandPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_expand_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./expand-panel.component.html */ "NWTH");
/* harmony import */ var _expand_panel_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expand-panel.component.scss */ "lR47");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ExpandPanelComponent = class ExpandPanelComponent {
    constructor() {
        this.title = '';
        this.icon = 'cil-cart';
        this.open = false;
    }
    ngOnInit() {
    }
};
ExpandPanelComponent.ctorParameters = () => [];
ExpandPanelComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExpandPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-expand-panel',
        template: _raw_loader_expand_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expand_panel_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExpandPanelComponent);



/***/ }),

/***/ "DC6m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/calendar/calendar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body row\">\n    <div class=\"col-md-12\">\n      <label for=\"search\">\n        <h5>Assign Asset for SKU 0000</h5>\n      </label>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <form action=\"\">\n          <div class=\"bookingForm\"> \n\n            <div class=\"form-group start-date\">\n              <label for=\"start_date\">From</label>\n              <input\n                type=\"datetime-local\"\n                name=\"start_date\"\n                class=\"form-control\"\n              />\n            </div>\n\n            <div class=\"form-group destination\">\n              To\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"end_date\"></label>\n              <input\n                type=\"datetime-local\"\n                name=\"end_date\"\n                class=\"form-control\"\n              />\n            </div>\n\n            <div class=\"form-group getBookingButton\">\n              <button class=\"btn btn-info btn-md\">submit</button>\n            </div>\n          </div>\n        </form>\n\n        <!-- <div class=\"col-md-4 container\">\n                <input type=\"text\">\n            </div>\n            <div class=\"col-md-4 pt-1 pb-1\"> \n                <b>From</b>\n                <span>10/11/2021</span>\n                <b>To</b>\n                <span>20/11/2021</span>\n            </div> \n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" value=\"TOGGLE LIST VIEW\"/>\n            </div> -->\n      </div>\n    </div> \n  </div>\n</div>\n\n<div class=\"main-container\">\n  <div class=\"calendar-view\">\n    <div class=\"customcalenderwrapper\">\n      <div class=\"\" class=\"myinventories\">\n        <!-- <div class=\"invertories_header\">\n                            List Of Inventories \n                        </div>  -->\n        <table class=\"\">\n          <thead>\n            <tr>\n              <th scope=\"5\">\n                List Of Inventories\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let int of inventories\">\n              <td>{{ int.id }}</td>\n            </tr> \n          </tbody>\n        </table>\n      </div> \n\n      <div class=\"\">\n        <full-calendar\n          class=\"custsomFreeCalender\"\n          [options]=\"calendarOptions\"\n        ></full-calendar>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "E6ta":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/bookings.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-table  [loading]=\"loading\" #dt [value]=\"bookingList\" styleClass=\"p-datatable-table\" [rowHover]=\"true\" [filterDelay]=\"0\" [globalFilterFields]=\"['code','request_date','requester']\">\n    <ng-template pTemplate=\"caption\">\n      <div class=\"table-header d-flex\">\n          <div class=\"d-flex\">\n                <div>Booking Listing</div>\n                <div class=\"ml-2 mt-1\"><a href (click)=\"onCreate($event)\" routerLinkActive=\"router-link-active\" ><i class=\"icon-plus icons\" style=\"color: #FFFFFF\"></i></a></div>\n          </div>\n          <div class=\"p-input-icon-left\">\n              <label for=\"search-input\"><i class=\"pi pi-search\"></i></label>\n              <input id=\"search-input\" type=\"text\" pInputText placeholder=\"Global Search\"\n                     [(ngModel)]=\"search_text\"\n                     (input)=\"onSearch()\"/>\n          </div>\n      </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th pSortableColumn=\"code\" class=\"text-center\">\n            <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                Booking No\n                <div class=\"booking-icons\">\n                  <p-sortIcon field=\"code\"></p-sortIcon>\n                  <p-columnFilter type=\"text\" field=\"code\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                </div>\n               \n            </div>\n          </th>\n        <th pSortableColumn=\"request_date\" class=\"text-center\">\n          <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n              Request Date\n              <div class=\"request-date\">\n                <p-sortIcon field=\"request_date\"></p-sortIcon>\n                <p-columnFilter type=\"date\" field=\"request_date\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n              </div>\n             \n          </div>\n        </th>\n        <th pSortableColumn=\"requester\" class=\"text-center\">\n          <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n               Requester\n               <div class=\"req-icons\">\n                <p-sortIcon field=\"requester\"></p-sortIcon>\n                <p-columnFilter type=\"text\" field=\"requester\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n               </div>\n             \n          </div>\n        </th>\n        <th pSortableColumn=\"sku\" class=\"text-center\">\n          <div  style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                SKU\n                <div class=\"sku-icons\">\n                  <p-sortIcon field=\"sku\"></p-sortIcon>\n              <p-columnFilter type=\"text\" field=\"sku\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                </div>\n              \n          </div>\n        </th>\n        <th pSortableColumn=\"product_desc\" class=\"text-center\">\n          <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n              Product Desc\n              <div class=\"prod-icons\">\n                <p-sortIcon field=\"product_desc\"></p-sortIcon>\n                <p-columnFilter type=\"text\" field=\"product_desc\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n              </div>\n            \n          </div>\n        </th>\n        <th pSortableColumn=\"customer\" class=\"text-center\">\n          <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n              Customer\n              <div class=\"cust-icons\">\n                <p-sortIcon field=\"customer\"></p-sortIcon>\n                <p-columnFilter type=\"text\" field=\"customer\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n              </div>\n             \n          </div>\n        </th>\n        <th pSortableColumn=\"booking_reason\" class=\"text-center\">\n          <div style=\"display: flex;white-space: nowrap; flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n              Booking Reason\n              <div class=\"booking-icons\">\n                <p-sortIcon field=\"booking_reason\"></p-sortIcon>\n                <p-columnFilter type=\"numeric\" field=\"booking_reason\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n              </div>\n             \n          </div>\n        </th>\n        <th pSortableColumn=\"status\" class=\"text-center\">\n            <div style=\"display: flex;flex-direction: column; align-items: center;\" class=\"p-d-flex p-jc-between p-ai-center\">\n                Status\n                <div class=\"status-icons\">\n                  <p-sortIcon field=\"status\"></p-sortIcon>\n                  <p-columnFilter type=\"numeric\" field=\"status\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n                </div>\n               \n            </div>\n          </th>\n\n        <th [style]=\"{'width':'5%'}\">\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bookingItem>\n      <tr class=\"p-selectable-row\">\n        <td class=\"text-center\">\n            <a routerLink=\"{{ bookingItem.id }}\" routerLinkActive=\"router-link-active\">{{ bookingItem.booking_no }}</a>\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.request_date }}\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.requester }}\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.sku }}\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.product_desc }}\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.customer }}\n        </td>\n        <td class=\"text-center\">\n            {{ bookingItem.booking_reason }}\n        </td>\n        <td class=\"text-center\">\n          {{ bookingItem.status }}\n        </td>\n    </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"emptymessage\" let-columns>\n      <tr>\n          <td style=\"text-align: center;\" [attr.colspan]=\"columns.length\">\n              No records found\n          </td>\n      </tr>\n  </ng-template>\n\n  </p-table>\n  <p-paginator [rows]=\"pageItems\" [rowsPerPageOptions]=\"[10,25,50,{ showAll: 'All' }]\">\n  </p-paginator>\n");

/***/ }),

/***/ "EHan":
/*!************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-summary/opportunity-summary.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHBvcnR1bml0eS1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "EOxg":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/main-asset/main-asset.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dms-expand-panel\n  class=\"p-0\"\n  title=\"Main Demo Asset\" icon=\"cil-cart\"\n  [open]=\"true\"\n>\n  <div *ngFor=\"let entry of mainAsset | keyvalue:onSortIgnore; let i=index\">\n    <dms-equipment-table\n      *ngIf=\"entry.value\"\n      [kind]=\"entry.key\"\n      [(data)]=\"entry.value\"\n      [isAddable]=\"isAddable && (i > 0 || mainAsset.main.length == 0)\"\n      [isAssignable]=\"isAssignable\">\n    </dms-equipment-table>\n  </div>\n</dms-expand-panel>\n");

/***/ }),

/***/ "Ek7K":
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc {\n\n  /* only exists for aria reasons, hide for non-screen-readers */\n\n}\n.fc .fc-list-table thead {\n    position: absolute;\n    left: -10000px;\n  }\n.fc {\n\n  /* the table's border-style:hidden gets confused by hidden thead. force-hide top border of first cell */\n\n}\n.fc .fc-list-table tbody > tr:first-child th {\n    border-top: 0;\n  }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: \"\";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQix1Q0FBdUM7QUFDekM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7RUFDaEQ7QUFDRjs7RUFFRSwyQkFBMkI7O0FBRTdCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsc0VBQXNFO0lBQ3RFLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFFLDBDQUEwQztFQUNqRTtBQUNGO0lBQ0ksYUFBYTtFQUNmO0FBQ0Y7O0VBRUUsOEJBQThCO0VBQzlCLHlHQUF5Rzs7QUFFM0c7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0IsRUFBRSwrQkFBK0I7RUFDdkQ7QUFDRjtJQUNJLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0YsdUNBQXVDLGNBQWM7TUFDL0MsZ0JBQWdCO01BQ2hCLE1BQU07TUFDTixnQkFBZ0I7TUFDaEIseUNBQXlDLEVBQUUsNkRBQTZEO0lBQzFHO0FBQ0o7O0VBRUUsOERBQThEOztBQUVoRTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFDRjs7RUFFRSx1R0FBdUc7O0FBRXpHO0FBQ0E7SUFDSSxhQUFhO0VBQ2Y7QUFDRjtJQUNJLFVBQVUsRUFBRSxxQ0FBcUM7RUFDbkQ7QUFDRjs7SUFFSSxpQkFBaUI7RUFDbkI7QUFDRjs7O0VBR0Usc0JBQXNCO0VBQ3RCLHlHQUF5Rzs7QUFFM0c7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFFLG1CQUFtQjtJQUNqQztBQUNKO0lBQ0ksMENBQTBDO0lBQzFDLHNFQUFzRTtFQUN4RTtBQUNGOztFQUVFLFdBQVc7QUFDYjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBLDJDQUEyQztBQUMzQywwREFBMEQsaUJBQWlCO0FBQzNFLDBEQUEwRCxnQkFBZ0I7QUFDMUU7SUFDSSxlQUFlLEVBQUUsa0NBQWtDO0VBQ3JEO0FBQ0Y7SUFDSSx5QkFBeUI7SUFDekIsOERBQThEO0VBQ2hFO0FBQ0Y7O0VBRUUsd0JBQXdCOztBQUUxQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsa0dBQWtHO0lBQ2xHLGtCQUFrQjtJQUNsQiw2REFBNkQ7RUFDL0Q7QUFDRjs7RUFFRSxzQkFBc0I7O0FBRXhCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0VBRUUsc0RBQXNEOztBQUV4RDtBQUNBO0lBQ0ksMEJBQTBCO0VBQzVCIiwiZmlsZSI6Im1haW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46cm9vdCB7XG4gIC0tZmMtbGlzdC1ldmVudC1kb3Qtd2lkdGg6IDEwcHg7XG4gIC0tZmMtbGlzdC1ldmVudC1ob3Zlci1iZy1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ib3JkZXItY29sb3IsICNkZGQpO1xuICB9XG4uZmMge1xuXG4gIC8qIG1lc3NhZ2Ugd2hlbiBubyBldmVudHMgKi9cblxufVxuLmZjIC5mYy1saXN0LWVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtbmV1dHJhbC1iZy1jb2xvciwgcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiB2ZXJ0aWNhbGx5IGFsaWducyBmYy1saXN0LWVtcHR5LWlubmVyICovXG4gIH1cbi5mYyAuZmMtbGlzdC1lbXB0eS1jdXNoaW9uIHtcbiAgICBtYXJnaW46IDVlbSAwO1xuICB9XG4uZmMge1xuXG4gIC8qIHRhYmxlIHdpdGhpbiB0aGUgc2Nyb2xsZXIgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG59XG4uZmMgLmZjLWxpc3QtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuOyAvKiBraWxsIG91dGVyIGJvcmRlciBvbiB0aGVtZSAqL1xuICB9XG4uZmMgLmZjLWxpc3QtdGFibGUgdHIgPiAqIHtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gIH1cbi5mYyAuZmMtbGlzdC1zdGlja3kgLmZjLWxpc3QtZGF5ID4gKiB7IC8qIHRoZSBjZWxscyAqL1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1wYWdlLWJnLWNvbG9yLCAjZmZmKTsgLyogZm9yIHdoZW4gaGVhZGVycyBhcmUgc3R5bGVkIHRvIGJlIHRyYW5zcGFyZW50IGFuZCBzdGlja3kgKi9cbiAgICB9XG4uZmMge1xuXG4gIC8qIG9ubHkgZXhpc3RzIGZvciBhcmlhIHJlYXNvbnMsIGhpZGUgZm9yIG5vbi1zY3JlZW4tcmVhZGVycyAqL1xuXG59XG4uZmMgLmZjLWxpc3QtdGFibGUgdGhlYWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTAwMDBweDtcbiAgfVxuLmZjIHtcblxuICAvKiB0aGUgdGFibGUncyBib3JkZXItc3R5bGU6aGlkZGVuIGdldHMgY29uZnVzZWQgYnkgaGlkZGVuIHRoZWFkLiBmb3JjZS1oaWRlIHRvcCBib3JkZXIgb2YgZmlyc3QgY2VsbCAqL1xuXG59XG4uZmMgLmZjLWxpc3QtdGFibGUgdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB0aCB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuLmZjIC5mYy1saXN0LXRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAwOyAvKiB1c2VzIGFuIGlubmVyLXdyYXBwZXIgaW5zdGVhZC4uLiAqL1xuICB9XG4uZmMgLmZjLWxpc3QtdGFibGUgdGQsXG4gIC5mYyAuZmMtbGlzdC1kYXktY3VzaGlvbiB7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gIH1cbi5mYyB7XG5cblxuICAvKiBkYXRlIGhlYWRpbmcgcm93cyAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbn1cbi5mYyAuZmMtbGlzdC1kYXktY3VzaGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTsgLyogY2xlYXIgZmxvYXRpbmcgKi9cbiAgICB9XG4uZmMtdGhlbWUtc3RhbmRhcmQgLmZjLWxpc3QtZGF5LWN1c2hpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1uZXV0cmFsLWJnLWNvbG9yLCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMykpO1xuICB9XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtbGlzdC1kYXktdGV4dCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1saXN0LWRheS1zaWRlLXRleHQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1saXN0LWRheS1zaWRlLXRleHQsXG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtbGlzdC1kYXktdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi8qIG1ha2UgdGhlIGRvdCBjbG9zZXIgdG8gdGhlIGV2ZW50IHRpdGxlICovXG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtbGlzdC10YWJsZSAuZmMtbGlzdC1ldmVudC1ncmFwaGljIHsgcGFkZGluZy1yaWdodDogMCB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtbGlzdC10YWJsZSAuZmMtbGlzdC1ldmVudC1ncmFwaGljIHsgcGFkZGluZy1sZWZ0OiAwIH1cbi5mYyAuZmMtbGlzdC1ldmVudC5mYy1ldmVudC1mb3JjZWQtdXJsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIHdob2xlIHJvdyB3aWxsIHNlZW0gY2xpY2thYmxlICovXG4gIH1cbi5mYyAuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1saXN0LWV2ZW50LWhvdmVyLWJnLWNvbG9yLCAjZjVmNWY1KTtcbiAgfVxuLmZjIHtcblxuICAvKiBzaHJpbmsgY2VydGFpbiBjb2xzICovXG5cbn1cbi5mYyAuZmMtbGlzdC1ldmVudC1ncmFwaGljLFxuICAuZmMgLmZjLWxpc3QtZXZlbnQtdGltZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMXB4O1xuICB9XG4uZmMgLmZjLWxpc3QtZXZlbnQtZG90IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzNzg4ZDg7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLWZjLWxpc3QtZXZlbnQtZG90LXdpZHRoLCAxMHB4KSAvIDIpIHNvbGlkIHZhcigtLWZjLWV2ZW50LWJvcmRlci1jb2xvciwgIzM3ODhkOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZmMtbGlzdC1ldmVudC1kb3Qtd2lkdGgsIDEwcHgpIC8gMik7XG4gIH1cbi5mYyB7XG5cbiAgLyogcmVzZXQgPGE+IHN0eWxpbmcgKi9cblxufVxuLmZjIC5mYy1saXN0LWV2ZW50LXRpdGxlIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuLmZjIHtcblxuICAvKiB1bmRlcmxpbmUgbGluayB3aGVuIGhvdmVyaW5nIG92ZXIgYW55IHBhcnQgb2Ygcm93ICovXG5cbn1cbi5mYyAuZmMtbGlzdC1ldmVudC5mYy1ldmVudC1mb3JjZWQtdXJsOmhvdmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "FZkX":
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: 8px;\n      height: var(--fc-event-resizer-thickness, 8px);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: -4px;\n      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: -4px;\n      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: -4px;\n      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n\n.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n    }\n\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* bg */\n\n}\n\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n\n.fc {\n\n  /* now indicator */\n\n}\n\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n\n.fc-timegrid-event-harness {\n  position: absolute /* top/left/right/bottom will all be set by JS */\n}\n\n.fc-timegrid-event-harness > .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0; /* for when not yet positioned */\n    bottom: 0; /* \" */\n    left: 0;\n    right: 0;\n  }\n\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror,\n.fc-timegrid-more-link {\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);\n}\n\n.fc-timegrid-event,\n.fc-timegrid-more-link { /* events need to be root */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n  border-radius: 3px;\n}\n\n.fc-timegrid-event { /* events need to be root */\n  margin-bottom: 1px /* give some space from bottom */\n}\n\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em);\n    margin-bottom: 1px;\n  }\n\n.fc-timegrid-event-short .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n\n.fc-timegrid-event-short .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n\n.fc-timegrid-event-short .fc-event-title {\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em)\n  }\n\n.fc-timegrid-more-link { /* does NOT inherit from fc-timegrid-event */\n  position: absolute;\n  z-index: 9999; /* hack */\n  color: inherit;\n  color: var(--fc-more-link-text-color, inherit);\n  background: #d0d0d0;\n  background: var(--fc-more-link-bg-color, #d0d0d0);\n  cursor: pointer;\n  margin-bottom: 1px; /* match space below fc-timegrid-event */\n}\n\n.fc-timegrid-more-link-inner { /* has fc-sticky */\n  padding: 3px 2px;\n  top: 0;\n}\n\n.fc-direction-ltr .fc-timegrid-more-link {\n    right: 0;\n  }\n\n.fc-direction-rtl .fc-timegrid-more-link {\n    left: 0;\n  }\n\n.fc {\n\n  /* line */\n\n}\n\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n    border-width: 1px 0 0;\n  }\n\n.fc {\n\n  /* arrow */\n\n}\n\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n  }\n\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQzs7QUFFRCxjQUFjLDRCQUE0QjtFQUN4QyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVEQUF1RDtFQUN2RCx5QkFBeUI7RUFDekI7O0FBRUY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFlBQVk7RUFDZDs7QUFFRjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztBQUVGLHdDQUF3Qyx1Q0FBdUM7SUFDM0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhLEVBQUUsaURBQWlEO0VBQ2xFOztBQUVGLDhCQUE4Qiw4QkFBOEI7SUFDeEQsTUFBTTtJQUNOLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtFQUMvQjs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVGOztFQUVFLDhCQUE4Qjs7QUFFaEM7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7O0VBRUUsc0JBQXNCOztBQUV4Qjs7QUFFQTtNQUNNLFdBQVc7TUFDWCw4Q0FBOEM7TUFDOUMsT0FBTztNQUNQLFFBQVE7SUFDVjs7QUFFSjtNQUNNLFNBQVM7TUFDVCxzREFBc0Q7SUFDeEQ7O0FBRUo7TUFDTSxZQUFZO01BQ1oseURBQXlEO0lBQzNEOztBQUVKOztFQUVFLGlEQUFpRDs7QUFFbkQ7O0FBRUE7TUFDTSxTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLG9FQUFvRTtJQUN0RTs7QUFFSjtNQUNNLFNBQVM7TUFDVCw0REFBNEQ7SUFDOUQ7O0FBRUo7TUFDTSxZQUFZO01BQ1osK0RBQStEO0lBQ2pFOztBQUNKLG9DQUFvQyxpREFBaUQ7SUFDakYsVUFBVSxFQUFFLGdHQUFnRztFQUM5Rzs7QUFDRjtJQUNJLGdCQUFnQixFQUFFLG1FQUFtRTtFQUN2Rjs7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsMENBQTBDO0lBQ3RELGdCQUFnQixFQUFFLDBEQUEwRDtFQUM5RTs7QUFDRiw4QkFBOEIsNEJBQTRCO0lBQ3RELGlCQUFpQixFQUFFLDhDQUE4Qzs7RUFFbkU7O0FBQ0Y7TUFDTSxrQkFBa0I7TUFDbEIsVUFBVSxFQUFFLHNDQUFzQztJQUNwRDs7QUFDSjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBQ0Ysd0JBQXdCLFdBQVc7SUFDL0IsYUFBYTtJQUNiLGVBQWUsRUFBRSxrQ0FBa0M7RUFDckQ7O0FBQ0Y7TUFDTSxnQkFBZ0IsRUFBRSxrRkFBa0Y7SUFDdEc7O0FBQ0o7SUFDSSx3QkFBd0I7RUFDMUI7O0FBQ0Y7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztBQUNGO0lBQ0ksc0JBQXNCLEVBQUUsNkJBQTZCO0VBQ3ZEOztBQUNGOzs7RUFHRSxnRkFBZ0Y7O0FBRWxGOztBQUNBOztJQUVJLGNBQWM7RUFDaEI7O0FBQ0Y7OztFQUdFLHNFQUFzRTtFQUN0RSxxREFBcUQ7O0FBRXZEOztBQUNBO0lBQ0ksWUFBWSxFQUFFLGdDQUFnQztFQUNoRDs7QUFDRjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CLEVBQUUsbUJBQW1CO0lBQ3hDLHlCQUF5QixFQUFFLCtDQUErQztFQUM1RTs7QUFDRjtJQUNJLGVBQWUsRUFBRSwyQ0FBMkM7SUFDNUQsY0FBYyxFQUFFLGlGQUFpRjtFQUNuRzs7QUFDRjtJQUNJLGlCQUFpQjtFQUNuQjs7QUFDRjtJQUNJLGdCQUFnQjtFQUNsQjs7QUFDRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQOztBQUNGO01BQ00sMENBQTBDO01BQzFDLG9FQUFvRTtJQUN0RTs7QUFDSjtJQUNJLGdCQUFnQixFQUFFLHlCQUF5QjtJQUMzQyxrQkFBa0I7RUFDcEI7O0FBQ0Y7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87SUFDTDs7QUFDSjtJQUNJLGtCQUFrQixFQUFFLHdEQUF3RDtJQUM1RSxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUjtFQUNGOztBQUNGO01BQ00sWUFBWTtJQUNkOztBQUNKOzs7SUFHSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBQ0Y7O0VBRUUsT0FBTzs7QUFFVDs7QUFDQTtJQUNJLFVBQVUsRUFBRSxlQUFlO0VBQzdCOztBQUNGLDJDQUEyQyxXQUFXOztBQUN0RCx1Q0FBdUMsV0FBVzs7QUFDbEQsd0NBQXdDLFdBQVc7O0FBQ25EO0lBQ0ksa0JBQWtCLEVBQUUsaUNBQWlDO0lBQ3JELE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBQ0Y7O0VBRUUsY0FBYztFQUNkLDRFQUE0RTtFQUM1RSxtRkFBbUY7O0FBRXJGOztBQUNBO0lBQ0ksVUFBVTtJQUNWLG9FQUFvRTtFQUN0RTs7QUFDRjs7RUFFRSxrQkFBa0I7O0FBRXBCOztBQUNBO0lBQ0ksU0FBUztJQUNULGdCQUFnQixFQUFFLG1FQUFtRTtJQUNyRiw4Q0FBOEM7RUFDaEQ7O0FBQ0Y7SUFDSSxvQkFBb0I7RUFDdEI7O0FBQ0Y7SUFDSSxvQkFBb0I7RUFDdEI7O0FBQ0Y7RUFDRSxpQkFBaUIsRUFBRSxnREFBZ0Q7QUFDckU7O0FBQ0E7SUFDSSxrQkFBa0IsRUFBRSxnQ0FBZ0M7SUFDcEQsTUFBTSxFQUFFLGdDQUFnQztJQUN4QyxTQUFTLEVBQUUsTUFBTTtJQUNqQixPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUNGOzs7RUFHRSxnQ0FBZ0M7RUFDaEMseURBQXlEO0FBQzNEOztBQUNBO3lCQUN5QiwyQkFBMkI7RUFDbEQsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxrQkFBa0I7QUFDcEI7O0FBQ0EscUJBQXFCLDJCQUEyQjtFQUM5QyxpQkFBaUIsRUFBRSxnQ0FBZ0M7QUFDckQ7O0FBQ0E7SUFDSSxrQkFBa0I7RUFDcEI7O0FBQ0Y7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxrQkFBa0I7RUFDcEI7O0FBQ0Y7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztBQUNGO0lBQ0ksc0JBQXNCLEVBQUUsMkNBQTJDO0VBQ3JFOztBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCO0VBQ0Y7O0FBQ0YseUJBQXlCLDRDQUE0QztFQUNuRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFFLFNBQVM7RUFDeEIsY0FBYztFQUNkLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixrQkFBa0IsRUFBRSx3Q0FBd0M7QUFDOUQ7O0FBQ0EsK0JBQStCLGtCQUFrQjtFQUMvQyxnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSOztBQUNBO0lBQ0ksUUFBUTtFQUNWOztBQUNGO0lBQ0ksT0FBTztFQUNUOztBQUNGOztFQUVFLFNBQVM7O0FBRVg7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQscUJBQXFCO0VBQ3ZCOztBQUNGOztFQUVFLFVBQVU7O0FBRVo7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdEQUFnRDtFQUNsRDs7QUFDRjtJQUNJLE9BQU87O0lBRVAseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDOztBQUNGO0lBQ0ksUUFBUTs7SUFFUix3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG5BIFZFUlRJQ0FMIGV2ZW50XG4qL1xuXG4uZmMtdi1ldmVudCB7IC8qIGFsbG93ZWQgdG8gYmUgdG9wLWxldmVsICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzc4OGQ4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ldmVudC1ib3JkZXItY29sb3IsICMzNzg4ZDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4OGQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1ldmVudC1iZy1jb2xvciwgIzM3ODhkOClcblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLWZjLWV2ZW50LXRleHQtY29sb3IsICNmZmYpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbi1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGl0bGUtY29udGFpbmVyIHsgLyogYSBjb250YWluZXIgZm9yIHRoZSBzdGlja3kgY3VzaGlvbiAqL1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4taGVpZ2h0OiAwOyAvKiBpbXBvcnRhbnQgZm9yIGFsbG93aW5nIHRvIHNocmluayBhbGwgdGhlIHdheSAqL1xuICB9XG5cbi5mYy12LWV2ZW50IC5mYy1ldmVudC10aXRsZSB7IC8qIHdpbGwgaGF2ZSBmYy1zdGlja3kgb24gaXQgKi9cbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IC8qIGNsaXAgb3ZlcmZsb3cgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5mYy12LWV2ZW50Om5vdCguZmMtZXZlbnQtc3RhcnQpIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1lbmQpIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAvKiBleHBhbmQgaGl0IGFyZWEgKi9cbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgKG1vdXNlIEFORCB0b3VjaCkgKi9cblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1zdGFydCB7XG4gICAgY3Vyc29yOiBuLXJlc2l6ZTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1lbmQge1xuICAgIGN1cnNvcjogcy1yZXNpemU7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgZm9yIE1PVVNFICovXG5cbn1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBoZWlnaHQ6IHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItc3RhcnQge1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgdG9wOiBjYWxjKHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpIC8gLTIpO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItZW5kIHtcbiAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgIGJvdHRvbTogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLXRoaWNrbmVzcywgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50IHtcblxuICAvKiByZXNpemVyIGZvciBUT1VDSCAod2hlbiBldmVudCBpcyBcInNlbGVjdGVkXCIpICovXG5cbn1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLXN0YXJ0IHtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIHRvcDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLWVuZCB7XG4gICAgICBib3R0b206IC00cHg7XG4gICAgICBib3R0b206IGNhbGModmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkgLyAtMik7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZCAuZmMtZGF5Z3JpZC1ib2R5IHsgLyogdGhlIGFsbC1kYXkgZGF5Z3JpZCB3aXRoaW4gdGhlIHRpbWVncmlkIHZpZXcgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBwdXQgYWJvdmUgdGhlIHRpbWVncmlkLWJvZHkgc28gdGhhdCBtb3JlLXBvcG92ZXIgaXMgYWJvdmUgZXZlcnl0aGluZy4gVE9ETzogYmV0dGVyIHNvbHV0aW9uICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAwIDJweDsgLyogYnJvd3NlcnMgZ2V0IGNvbmZ1c2VkIHdoZW4geW91IHNldCBoZWlnaHQuIHVzZSBwYWRkaW5nIGluc3RlYWQgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTsgLyogc2NvcGUgdGhlIHotaW5kZXhlcyBvZiBzbG90cyBhbmQgY29scyAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGZpbGwgaGVpZ2h0IGFsd2F5cywgZXZlbiB3aGVuIHNsYXQgdGFibGUgZG9lc24ndCBncm93ICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtYXhpcy1jaHVuayB7IC8qIGZvciBhZHZhbmNlZCBTY3JvbGxHcmlkICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIC8qIG9mZnNldCBwYXJlbnQgZm9yIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG5cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWNodW5rID4gdGFibGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTsgLyogYWJvdmUgdGhlIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1zbG90cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdCB7IC8qIGEgPHRkPiAqL1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMCAvKiBlYWNoIGNlbGwgb3ducyBpdHMgdG9wIGJvcmRlciAqL1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3Q6ZW1wdHk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyAvKiBtYWtlIHN1cmUgdGhlcmUncyBhdCBsZWFzdCBhbiBlbXB0eSBzcGFjZSB0byBjcmVhdGUgaGVpZ2h0IGZvciBoZWlnaHQgc3luY2luZyAqL1xuICAgIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1taW5vciB7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZG90dGVkO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtY3VzaGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1sYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogdmVydGljYWwgYWxpZ24gdGhlIHNsb3RzICovXG4gIH1cbi5mYyB7XG5cblxuICAvKiBzbG90cyBBTkQgYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLWF4aXMtY3VzaGlvbixcbiAgLmZjIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWN1c2hpb24ge1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICB9XG4uZmMge1xuXG5cbiAgLyogYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuICAvKiB2ZXJ0aWNhbCBhbGlnbiBpcyBtb3JlIGNvbXBsaWNhdGVkLCB1c2VzIGZsZXhib3ggKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lLWxpcXVpZCB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiB3aWxsIG5lZWQgbGlxdWlkLWhhY2sgaW4gRkYgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogdmVydGljYWwgYWxpZ24gKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBob3Jpem9udGFsIGFsaWduLiBtYXRjaGVzIHRleHQtYWxpZ24gYmVsb3cgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWN1c2hpb24ge1xuICAgIG1heC13aWR0aDogNjBweDsgLyogbGltaXRzIHRoZSB3aWR0aCBvZiB0aGUgXCJhbGwtZGF5XCIgdGV4dCAqL1xuICAgIGZsZXgtc2hyaW5rOiAwOyAvKiBhbGxvd3MgdGV4dCB0byBleHBhbmQgaG93IGl0IG5vcm1hbGx5IHdvdWxkLCByZWdhcmRsZXNzIG9mIGNvbnN0cmFpbmVkIHdpZHRoICovXG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWZyYW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtZnJhbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtdGltZWdyaWQtYXhpcy1mcmFtZS1saXF1aWQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLWNvbC5mYy1kYXktdG9kYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgNDAsIDAuMTUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtdG9kYXktYmctY29sb3IsIHJnYmEoMjU1LCAyMjAsIDQwLCAwLjE1KSk7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGxpcXVpZC1oYWNrIGlzIGJlbG93ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4uZmMtbWVkaWEtc2NyZWVuLmZjLWxpcXVpZC1oYWNrIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAgIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogbm8gei1pbmRleC4gY2hpbGRyZW4gd2lsbCBkZWNpZGUgYW5kIGdvIGFib3ZlIHNsb3RzICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwXG4gIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMgPiB0YWJsZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuLmZjLW1lZGlhLXNjcmVlbiAuZmMtdGltZWdyaWQtY29sLWJnLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGJnICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIHtcbiAgICB6LWluZGV4OiAyOyAvKiBUT0RPOiBraWxsICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1ub24tYnVzaW5lc3MgeyB6LWluZGV4OiAxIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1iZy1ldmVudCB7IHotaW5kZXg6IDIgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtYmcgLmZjLWhpZ2hsaWdodCB7IHotaW5kZXg6IDMgfVxuLmZjIC5mYy10aW1lZ3JpZC1iZy1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHRvcC9ib3R0b20gd2lsbCBiZSBzZXQgYnkgSlMgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGZnIGV2ZW50cyAqL1xuICAvKiAodGhlIG1pcnJvciBzZWdzIGFyZSBwdXQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciB3aXRoIHNhbWUgY2xhc3NuYW1lLCAqL1xuICAvKiBhbmQgdGhleSBtdXN0IGJlIGFmdGVyIHRoZSBub3JtYWwgc2VnIGNvbnRhaW5lciB0byBhcHBlYXIgYXQgYSBoaWdoZXIgei1pbmRleCkgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIC8qIGNoaWxkIGV2ZW50IHNlZ3MgaGF2ZSB6LWluZGV4ZXMgdGhhdCBhcmUgc2NvcGVkIHdpdGhpbiB0aGlzIGRpdiAqL1xuICB9XG4uZmMge1xuXG4gIC8qIG5vdyBpbmRpY2F0b3IgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIGRvbid0IGxldCBvdmVyZmxvdyBvZiBsaW5lcy9hcnJvd3MgY2F1c2UgdW5uZWNlc3Nhcnkgc2Nyb2xsaW5nICovXG4gICAgLyogei1pbmRleCBpcyBzZXQgb24gdGhlIGluZGl2aWR1YWwgZWxlbWVudHMgKi9cbiAgfVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLXRpbWVncmlkLWNvbC1ldmVudHMge1xuICAgIG1hcmdpbjogMCAyLjUlIDAgMnB4O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtY29sLWV2ZW50cyB7XG4gICAgbWFyZ2luOiAwIDJweCAwIDIuNSU7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlIC8qIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSB3aWxsIGFsbCBiZSBzZXQgYnkgSlMgKi9cbn1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzID4gLmZjLXRpbWVncmlkLWV2ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGFic29sdXRlIFdJVEhJTiB0aGUgaGFybmVzcyAqL1xuICAgIHRvcDogMDsgLyogZm9yIHdoZW4gbm90IHlldCBwb3NpdGlvbmVkICovXG4gICAgYm90dG9tOiAwOyAvKiBcIiAqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzLWluc2V0IC5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1ldmVudC5mYy1ldmVudC1taXJyb3IsXG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCB2YXIoLS1mYy1wYWdlLWJnLWNvbG9yLCAjZmZmKTtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1tb3JlLWxpbmsgeyAvKiBldmVudHMgbmVlZCB0byBiZSByb290ICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCB7IC8qIGV2ZW50cyBuZWVkIHRvIGJlIHJvb3QgKi9cbiAgbWFyZ2luLWJvdHRvbTogMXB4IC8qIGdpdmUgc29tZSBzcGFjZSBmcm9tIGJvdHRvbSAqL1xufVxuLmZjLXRpbWVncmlkLWV2ZW50IC5mYy1ldmVudC1tYWluIHtcbiAgICBwYWRkaW5nOiAxcHggMXB4IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB9XG4uZmMtdGltZWdyaWQtZXZlbnQtc2hvcnQgLmZjLWV2ZW50LW1haW4tZnJhbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuLmZjLXRpbWVncmlkLWV2ZW50LXNob3J0IC5mYy1ldmVudC10aW1lOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGEwLVxcMDBhMCc7IC8qIGRhc2ggc3Vycm91bmRlZCBieSBub24tYnJlYWtpbmcgc3BhY2VzICovXG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1zaG9ydCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgZm9udC1zaXplOiB2YXIoLS1mYy1zbWFsbC1mb250LXNpemUsIC44NWVtKVxuICB9XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHsgLyogZG9lcyBOT1QgaW5oZXJpdCBmcm9tIGZjLXRpbWVncmlkLWV2ZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTsgLyogaGFjayAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWZjLW1vcmUtbGluay10ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgYmFja2dyb3VuZDogI2QwZDBkMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmMtbW9yZS1saW5rLWJnLWNvbG9yLCAjZDBkMGQwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7IC8qIG1hdGNoIHNwYWNlIGJlbG93IGZjLXRpbWVncmlkLWV2ZW50ICovXG59XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rLWlubmVyIHsgLyogaGFzIGZjLXN0aWNreSAqL1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICB0b3A6IDA7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgICByaWdodDogMDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLW1vcmUtbGluayB7XG4gICAgbGVmdDogMDtcbiAgfVxuLmZjIHtcblxuICAvKiBsaW5lICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mYy1ub3ctaW5kaWNhdG9yLWNvbG9yLCByZWQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgfVxuLmZjIHtcblxuICAvKiBhcnJvdyAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLW5vdy1pbmRpY2F0b3ItYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIG1hcmdpbi10b3A6IC01cHg7IC8qIHZlcnRpY2FsbHkgY2VudGVyIG9uIHRvcCBjb29yZGluYXRlICovXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZjLW5vdy1pbmRpY2F0b3ItY29sb3IsIHJlZCk7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWFycm93IHtcbiAgICBsZWZ0OiAwO1xuXG4gICAgLyogdHJpYW5nbGUgcG9pbnRpbmcgcmlnaHQuIFRPRE86IG1peGluICovXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNnB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1hcnJvdyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAvKiB0cmlhbmdsZSBwb2ludGluZyBsZWZ0LiBUT0RPOiBtaXhpbiAqL1xuICAgIGJvcmRlci13aWR0aDogNXB4IDZweCA1cHggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "GNnL":
/*!*****************************************************************!*\
  !*** ./src/app/dms/components/calendar/calendar.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.filler {\n  flex: 1 1 1px;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n.calendar-view {\n  flex: 1 1 1px;\n  padding-bottom: 3em;\n}\n\n.fc {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.fc.fc-button-primary:disabled {\n  margin-bottom: 5px !important;\n  margin-left: 8px !important;\n  width: 77px !important;\n}\n\n.invertories_header {\n  padding-top: 91px;\n  margin-left: -22px;\n}\n\n.customcalenderwrapper {\n  display: grid;\n  grid-template-columns: 250px auto;\n}\n\n.bookingForm {\n  display: grid;\n  grid-template-columns: repeat(4, 250px);\n  align-items: center;\n}\n\n.destination {\n  justify-self: center;\n}\n\n.getBookingButton {\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBREE7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0FBSEYiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZpbGxlciB7XG4gIGZsZXg6IDEgMSAxcHg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiBcbi5jYWxlbmRhci12aWV3IHtcbiAgZmxleDogMSAxIDFweDtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcbn1cblxuLy8gQ2FsZW5kYXIncyByb290IGVsZW1lbnQuXG4uZmMge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59IFxuXG5cbi5mYy5mYy1idXR0b24tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzdweCAhaW1wb3J0YW50O1xufSAgXG5cbi5pbnZlcnRvcmllc19oZWFkZXIgeyBcbiAgcGFkZGluZy10b3A6IDkxcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjJweDtcbn0gICAgXG5cbi5jdXN0b21jYWxlbmRlcndyYXBwZXIge1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggYXV0bzsgIFxuICBcbn1cblxuLmJvb2tpbmdGb3JtIHtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDI1MHB4KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59IFxuXG4uZGVzdGluYXRpb24geyBcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5nZXRCb29raW5nQnV0dG9uIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "HCep":
/*!*************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/equipment-table/equipment-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: applyEdit, EquipmentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdit", function() { return applyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentTableComponent", function() { return EquipmentTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_equipment_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./equipment-table.component.html */ "loo8");
/* harmony import */ var _equipment_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipment-table.component.scss */ "NPnW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_equipment_kind_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/equipment-kind.enum */ "jPgE");





/**
 * Applies {@edit} on top of {@entity}.
 * @param edit List of changes.
 * @param entity Destination to store changes.
 */
function applyEdit(edit, entity) {
    if (edit.newSku !== '') {
        entity.sku = edit.newSku;
    }
}
/**
 * View showing table (header and rows), for each entry in {@link data}.
 */
let EquipmentTableComponent = class EquipmentTableComponent {
    constructor() {
        this.isAdding = false;
        this.kind = 'unknown';
        this.data = [];
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isAddable = false;
        this.isRemovable = false;
        this.isAssignable = true;
    }
    ngOnInit() { }
    get isRoot() {
        return this.kind === 'main';
    }
    get isMain() {
        return Object(_services_equipment_kind_enum__WEBPACK_IMPORTED_MODULE_4__["isEquipmentMain"])(this.kind);
    }
    get title() {
        return Object(_services_equipment_kind_enum__WEBPACK_IMPORTED_MODULE_4__["equipmentKindToTitle"])(this.kind);
    }
    /**
     * Maximum count of Equipment's list, for set {@link kind}.
     */
    get maxPick() {
        return this.isRoot ? 1 : 0;
    }
    /**
     * Checks if maximum item-count limit is reached.
     */
    get isLimitReached() {
        const max = this.maxPick;
        return max ? this.data.length >= max : false;
    }
    /**
     * Listens for addition-form's submit, and updates data.
     */
    onSave(form) {
        if (form.list.length > 0) {
            const newList = [];
            // Handles duplicates.
            for (const entry of form.list) {
                if (entry.isPicked) {
                    const id = entry.id;
                    let isNew = true;
                    for (const existing of this.data) {
                        if (existing.id === id) {
                            applyEdit(entry, existing);
                            isNew = false;
                            break;
                        }
                    }
                    if (isNew) {
                        applyEdit(entry, entry);
                        newList.push(entry);
                    }
                }
            }
            // Adds new entries.
            console.log('Saved, with new count:', newList.length);
            for (const entry of newList) {
                this.data.push(entry);
            }
            this.dataChange.emit(this.data);
            // Hides addition-form.
            this.isAdding = false;
        }
    }
    /**
     * Listen's for removal of rows, and updates {@link data} accordingly.
     * @param index Row-index.
     */
    onRemove(index) {
        this.data.splice(index, 1);
        this.dataChange.emit(this.data);
    }
};
EquipmentTableComponent.ctorParameters = () => [];
EquipmentTableComponent.propDecorators = {
    kind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isAddable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isRemovable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isAssignable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EquipmentTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-equipment-table',
        template: _raw_loader_equipment_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equipment_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EquipmentTableComponent);



/***/ }),

/***/ "IQvn":
/*!***************************************************************!*\
  !*** ./src/app/dms/services/get-inventory-booking.service.ts ***!
  \***************************************************************/
/*! exports provided: GetInventoryBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInventoryBookingService", function() { return GetInventoryBookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let GetInventoryBookingService = class GetInventoryBookingService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getInventories() {
        // console.log('hello, I am running');
        return this.httpclient.get('http://localhost:8000/api/dms/enventories');
    }
};
GetInventoryBookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetInventoryBookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GetInventoryBookingService);



/***/ }),

/***/ "IWx3":
/*!*******************************************************************!*\
  !*** ./src/app/dms/components/inventory/inventory.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 0;\n}\n\n.card-header {\n  background-color: #898485;\n  color: #FFFFFF;\n  border-radius: 0;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header {\n  font-size: 24px;\n  font-weight: bolder;\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header span.pi {\n  margin-top: -8px;\n  position: absolute;\n  right: 0.5em;\n  top: 50%;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header .p-accordion-header-link {\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-content {\n  padding: 0px;\n  overflow-x: hidden;\n}\n\ntd {\n  text-align: center;\n}\n\n::ng-deep .nav-link.active {\n  background: #2297e6 !important;\n  color: #FFFFFF !important;\n}\n\n::ng-deep .nav-tabs .nav-link {\n  border: none !important;\n  border-left: 1px solid !important;\n}\n\n.bg-lightgrey {\n  background: #fcfcfc;\n}\n\n.no-outline tr:first-child td {\n  border-top: none !important;\n}\n\n.no-outline tr:first-child th {\n  border-top: none !important;\n}\n\n.no-outline tr:last-child th {\n  border-bottom: none !important;\n}\n\n.no-outline tr:last-child td {\n  border-bottom: none !important;\n}\n\n.no-outline tr td:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr td:last-child {\n  border-right: none !important;\n}\n\n.no-outline tr th:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr th:last-child {\n  border-right: none !important;\n}\n\n.btn-custom {\n  background-color: #00538a;\n  border-color: #00538a;\n  color: #FFFFFF;\n}\n\n.chead {\n  font-size: 24px;\n  line-height: 34px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.btn-icon {\n  height: 2rem;\n  line-height: 1rem;\n  padding: 0 !important;\n  width: 2rem;\n  font-size: 1.2rem !important;\n  font-weight: bold;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.btn-in-tab {\n  position: absolute;\n  right: -3.5rem;\n  height: 1.5rem !important;\n  line-height: 0.75rem;\n  width: 1.5rem !important;\n  font-size: 0.9rem;\n}\n\n.btn-white {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n\n.btn-white i {\n  margin-top: 0.2rem;\n}\n\n.p-relative {\n  position: relative;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-125 {\n  padding: 1.25rem;\n}\n\n.b-btm-green {\n  border-bottom: solid 3px #5DBEC0;\n}\n\n.bg-opp {\n  background-color: #5DBEC0;\n}\n\n.table-price {\n  border-radius: 30px;\n}\n\n:host ::ng-deep {\n  /* Responsive */\n}\n\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  background-color: #898485;\n  color: white;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-paginator {\n  padding: 1rem;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-thead > tr > th {\n  text-align: left;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n:host ::ng-deep .p-datatable-table .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n\n.th-icons {\n  display: flex;\n  align-items: center;\n}\n\n.sku-icons {\n  display: flex;\n  align-items: center;\n}\n\n.product-icons {\n  display: flex;\n  align-items: center;\n}\n\n.agency-icons {\n  display: flex;\n  align-items: center;\n}\n\n.desc-icons {\n  display: flex;\n  align-items: center;\n}\n\n.status-icons {\n  display: flex;\n  align-items: center;\n}\n\n.booking-icons {\n  display: flex;\n  align-items: center;\n}\n\n:host ::ng-deep .p-datatable {\n  min-height: 500px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fZGF0YWJhc2VfdGFibGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURDUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQ0NaOztBRENRO0VBQ0ksaUJBQUE7QUNDWjs7QURFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElFO0VBQ0ksa0JBQUE7QUNETjs7QURJRTtFQUVJLDhCQUFBO0VBQ0EseUJBQUE7QUNGTjs7QURLRTtFQUNJLHVCQUFBO0VBQ0EsaUNBQUE7QUNGTjs7QURLRTtFQUNJLG1CQUFBO0FDRk47O0FES0U7RUFDRSwyQkFBQTtBQ0ZKOztBREtFO0VBQ0UsMkJBQUE7QUNGSjs7QURLRTtFQUNFLDhCQUFBO0FDRko7O0FES0U7RUFDRSw4QkFBQTtBQ0ZKOztBREtFO0VBQ0UsNEJBQUE7QUNGSjs7QURLRTtFQUNFLDZCQUFBO0FDRko7O0FES0U7RUFDRSw0QkFBQTtBQ0ZKOztBREtFO0VBQ0UsNkJBQUE7QUNGSjs7QURLRTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRk47O0FES0U7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRk47O0FES0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FES0U7RUFDRSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGdDQUFBO0FDRko7O0FES0U7RUFDRSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0UsbUJBQUE7QUNGSjs7QURLRTtFQXVERSxlQUFBO0FDeERKOztBREdRO0VBQ0ksaUJBQUE7QUNEWjs7QURLSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0hSOztBREtRO0VBQ0kseUJBQUE7QUNIWjs7QURPSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0xSOztBRFFJO0VBQ0ksZ0JBQUE7QUNOUjs7QURRUTtFQUNJLGdCQUFBO0FDTlo7O0FEV1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1RaOztBRFlRO0VBQ0ksYUFBQTtBQ1ZaOztBRGFRO0VBQ0ksZ0JBQUE7QUNYWjs7QURjUTtFQUNJLFlBQUE7QUNaWjs7QURlUTtFQUNJLHlCQUFBO0FDYlo7O0FEa0JJO0VBQ0ksYUFBQTtBQ2hCUjs7QURvQkU7RUFJYzs7SUFFSSx3QkFBQTtFQ3BCbEI7RUR1QmM7SUFDSSx1Q0FBQTtFQ3JCbEI7RUR1QmtCO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ3JCdEI7RUR1QnNCO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUJBQUE7RUNyQjFCO0VEd0JzQjtJQUNJLGtCQUFBO0VDdEIxQjtBQUNGOztBQXpOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTJORjs7QUF6TkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE0TkY7O0FBMU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBNk5GOztBQTNOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQThORjs7QUE1TkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUErTkY7O0FBN05BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZ09GOztBQTlOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWlPRjs7QUE5TkU7RUFDSSw0QkFBQTtBQWlPTiIsImZpbGUiOiJpbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOjA7XG4gIH1cblxuICAuY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODQ4NTtcbiAgICBjb2xvcjojRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tQ29sb3IucC1hY2NvcmRpb24ge1xuICAgIC5wLWFjY29yZGlvbi1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBzcGFuLnBpe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5wLWFjY29yZGlvbi1oZWFkZXItbGlua3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wLWFjY29yZGlvbi1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICB0ZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgLm5hdi1saW5rLmFjdGl2ZSB7XG5cbiAgICAgIGJhY2tncm91bmQ6ICMyMjk3ZTYgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiNGRkZGRkYgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iZy1saWdodGdyZXl7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICB9XG5cbiAgLm5vLW91dGxpbmUgdHI6Zmlyc3QtY2hpbGQgdGQge1xuICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyOmZpcnN0LWNoaWxkIHRoIHtcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubm8tb3V0bGluZSB0cjpsYXN0LWNoaWxkIHRoIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubm8tb3V0bGluZSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubm8tb3V0bGluZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vLW91dGxpbmUgdHIgdGg6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubm8tb3V0bGluZSB0ciB0aDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4tY3VzdG9tIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUzOGE7XG4gICAgICBib3JkZXItY29sb3I6ICMwMDUzOGE7XG4gICAgICBjb2xvcjojRkZGRkZGO1xuICB9XG5cbiAgLmNoZWFke1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmJ0bi1pY29ue1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJ0bi1pbi10YWJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgcmlnaHQ6LTMuNXJlbTtcbiAgICBoZWlnaHQ6MS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAuNzVyZW07XG4gICAgd2lkdGg6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTowLjlyZW07XG4gIH1cblxuICAuYnRuLXdoaXRle1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgLmJ0bi13aGl0ZSBpe1xuICAgIG1hcmdpbi10b3A6MC4ycmVtO1xuICB9XG5cbiAgLnAtcmVsYXRpdmV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnAtMHtcbiAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLTEyNXtcbiAgICBwYWRkaW5nOjEuMjVyZW07XG4gIH1cblxuICAuYi1idG0tZ3JlZW57XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICM1REJFQzA7XG4gIH1cblxuICAuYmctb3Bwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzVEQkVDMDtcbiAgfVxuXG4gIC50YWJsZS1wcmljZXtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1wYWdpbmF0b3Ige1xuICAgICAgICAucC1wYWdpbmF0b3ItY3VycmVudCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcblxuICAgICAgICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyNXJlbTtcblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLXRhYmxlIHtcbiAgICAgICAgLnAtZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODQ4NTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wLXBhZ2luYXRvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBSZXNwb25zaXZlICovXG4gICAgLnAtZGF0YXRhYmxlLXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIDpob3N0IDo6bmctZGVlcCB7XG4gICAgICAgIC5wLWRhdGF0YWJsZSB7XG4gICAgICAgICAgICAmLnAtZGF0YXRhYmxlLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGF5ZXItMik7XG5cbiAgICAgICAgICAgICAgICAgICAgPiB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtY29sdW1uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtLjRyZW0gMXJlbSAtLjRyZW0gLS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucC1wcm9ncmVzc2JhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgfVxuIiwiQGltcG9ydCBcIi4uL3N0eWxlcy9kYXRhYmFzZV90YWJsZVwiO1xuLnRoLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5za3UtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFnZW5jeS1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGVzYy1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib29raW5nLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5wLWRhdGF0YWJsZSB7XG4gICAgICBtaW4taGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "Lfcg":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/main-asset/identify/identify.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group dms-identify\">\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"card col-md-6\">\n        <div class=\"identify-header\">\n          <label for=\"search-pattern\">\n            <strong>Identify {{ title }}</strong>\n          </label>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-9 m-auto pr-0\">\n                <input type=\"text\" class=\"form-control\"\n                       id=\"search-pattern\" name=\"pattern\"\n                       [(ngModel)]=\"filter\">\n              </div>\n              <div class=\"col-3 p-0\">\n                <button class=\"btn btn-sm btn-primary button-style\"\n                        (click)=\"onSearch()\">SEARCH\n                </button>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <table class=\"table col-12\">\n                <thead>\n                <tr>\n                  <th class=\"col-1\"></th>\n                  <th class=\"col-2\">No</th>\n                  <th class=\"col-3\">Product Name</th>\n                  <th class=\"col-3\">SKU ID</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let equipment of list; let i = index\">\n                  <td><label>\n                    <input *ngIf=\"maxPick === 1\" type=\"radio\" class=\"picker\"\n                           name=\"picker\" [value]=\"i+1\"\n                           [checked]=\"equipment.isPicked\"\n                           (change)=\"$event.target.checked && onSelect(i, equipment.id)\">\n                    <input *ngIf=\"!maxPick || (maxPick > 1 && list.length < maxPick)\"\n                           type=\"checkbox\" class=\"picker\"\n                           [(ngModel)]=\"equipment.isPicked\">\n                  </label></td>\n                  <td>{{ equipment.id }}</td>\n                  <td>{{ equipment.name }}</td>\n                  <td>{{ equipment.sku }}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"\n                  (click)=\"onSave()\"><i class=\"fa fa-plus\"></i> Save\n          </button>\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"\n                  (click)=\"onClose()\">Close\n          </button>\n        </div>\n      </div>\n    </div><!--/.row-->\n  </div>\n</div>\n");

/***/ }),

/***/ "LmCP":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-booking-form/opportunity-booking-form.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHBvcnR1bml0eS1ib29raW5nLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "MSqG":
/*!*******************************************!*\
  !*** ./src/app/dms/dms-routing.module.ts ***!
  \*******************************************/
/*! exports provided: fallbackPath, bookingsChildren, mainChildren, routes, DmsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackPath", function() { return fallbackPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingsChildren", function() { return bookingsChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainChildren", function() { return mainChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmsRoutingModule", function() { return DmsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dms.component */ "8u6V");
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inventory/inventory.component */ "rotC");
/* harmony import */ var _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bookings/bookings.component */ "NX/O");
/* harmony import */ var _components_bookings_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bookings/booking-form/booking-form.component */ "oez7");
/* harmony import */ var _components_bookings_booking_entity_booking_entity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bookings/booking-entity/booking-entity.component */ "fENq");
/* harmony import */ var _components_bookings_opportunity_booking_form_opportunity_booking_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bookings/opportunity-booking-form/opportunity-booking-form.component */ "80P3");
/* harmony import */ var _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/coming-soon/coming-soon.component */ "aMa8");










const fallbackPath = 'inventory';
const bookingsChildren = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_5__["BookingsComponent"],
    },
    {
        path: 'new',
        component: _components_bookings_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_6__["BookingFormComponent"],
        data: {
            title: 'Bookings Form',
        },
    },
    {
        path: 'opportunity',
        component: _components_bookings_opportunity_booking_form_opportunity_booking_form_component__WEBPACK_IMPORTED_MODULE_8__["OpportunityBookingFormComponent"],
        data: {
            title: 'Booking Opportunity Booking',
        },
    },
    {
        path: ':id',
        component: _components_bookings_booking_entity_booking_entity_component__WEBPACK_IMPORTED_MODULE_7__["BookingEntityComponent"],
        data: {
            title: 'Booking view',
        },
    },
];
const mainChildren = [
    {
        path: '',
        redirectTo: fallbackPath,
        pathMatch: 'full',
    },
    {
        path: 'inventory',
        component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"],
        data: {
            title: 'Inventory',
        },
    },
    {
        path: 'bookings',
        data: {
            title: 'Bookings',
        },
        children: bookingsChildren,
    },
    {
        path: 'approvals',
        component: _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_9__["ComingSoonComponent"],
        data: {
            title: 'Approvals',
        },
    },
    {
        path: 'calendar',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/calendar/calendar.module */ "wzZd"))
            .then(m => m.CalendarModule),
    },
    {
        path: '**',
        redirectTo: fallbackPath,
    },
];
const routes = [{
        path: '',
        component: _dms_component__WEBPACK_IMPORTED_MODULE_3__["DmsComponent"],
        data: {
            title: 'DMS'
        },
        children: mainChildren,
    }];
let DmsRoutingModule = class DmsRoutingModule {
};
DmsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DmsRoutingModule);



/***/ }),

/***/ "N7hL":
/*!********************************************************!*\
  !*** ./src/app/dms/services/mock-inventory.service.ts ***!
  \********************************************************/
/*! exports provided: MockInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockInventoryService", function() { return MockInventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let MockInventoryService = class MockInventoryService {
    constructor() {
        this.mockData = [
            {
                serial_no: 1,
                stock_keep_unit: 'ZY2332',
                product_name: 'xxxxxxx',
                agency_name: 'trxt',
                description: 'trxt',
                status: 'Approved',
                booking_id: BigInt(92),
            }, {
                serial_no: 2,
                stock_keep_unit: 'CX32312',
                product_name: 'xxxxxxx',
                agency_name: 'trxt',
                description: 'trxt',
                status: 'Provisionally accepted',
                booking_id: BigInt(292),
            }, {
                serial_no: 234,
                stock_keep_unit: 'UY4234',
                product_name: 'xxxxxxx',
                agency_name: 'trxt',
                description: 'trxt',
                status: 'Available',
                booking_id: BigInt(192),
            }, {
                serial_no: 412,
                stock_keep_unit: 'XY2568',
                product_name: 'xxxxxxx',
                agency_name: 'trxt',
                description: 'trxt',
                status: 'Draft',
                booking_id: BigInt(692),
            },
        ];
    }
    getList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.mockData);
    }
};
MockInventoryService.ctorParameters = () => [];
MockInventoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MockInventoryService);



/***/ }),

/***/ "NPnW":
/*!***************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/equipment-table/equipment-table.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grey {\n  background-color: whitesmoke;\n}\n\n.btn-assign {\n  font-size: 15px;\n  font-weight: 400;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2VxdWlwbWVudC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJlcXVpcG1lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xufVxuXG4uYnRuLWFzc2lnbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxcHggMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "NWTH":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/widgets/expand-panel/expand-panel.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-accordion>\n  <p-accordionTab class=\"p-accordionTab \" [selected]=\"open\">\n    <p-header class=\"p-header\">\n      <i class=\"{{icon}}\"></i>\n      <span class=\"accordion-header\">{{title}}</span>\n    </p-header>\n    <ng-content></ng-content>\n  </p-accordionTab>\n</p-accordion>\n");

/***/ }),

/***/ "NX/O":
/*!***************************************************************!*\
  !*** ./src/app/dms/components/bookings/bookings.component.ts ***!
  \***************************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookings.component.html */ "E6ta");
/* harmony import */ var _bookings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings.component.scss */ "nven");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/booking.service */ "behN");






let BookingsComponent = class BookingsComponent {
    constructor(api, router, route) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.pageItems = 10;
        this.search_text = '';
        this.icons = [];
        this.id = "#";
    }
    ngOnInit() {
        this.loading = true;
        this.api.getList().subscribe((response) => {
            if (response) {
                this.bookingList = response;
            }
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
    onSearch() {
        // console.log('searching for:', this.search_text);
    }
    onCreate(event) {
        event.preventDefault();
        this.api.create("booking").subscribe((response) => {
            this.router.navigate(['/dms/bookings', response]);
        });
        return false;
    }
};
BookingsComponent.ctorParameters = () => [
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
BookingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings',
        template: _raw_loader_bookings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], BookingsComponent);



/***/ }),

/***/ "O43I":
/*!************************************************!*\
  !*** ./src/app/dms/services/booking-entity.ts ***!
  \************************************************/
/*! exports provided: emptyOpportunitySummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyOpportunitySummary", function() { return emptyOpportunitySummary; });
const emptyOpportunitySummary = {
    customer: 'Unknown',
    opportunity_id: '',
    initiator: '',
    opportunity_amount: '',
    opportunity_no: '0',
    winning_probability: '',
};


/***/ }),

/***/ "OyPn":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/dms.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n<!-- <button (click)=\"toggleWeekends()\">{{ str }}</button> -->\n<!-- <div class=\"\">  -->\n    <!-- <div class=\"row\">\n        <div class=\"col-lg-4\" class=\"inventoriesList\">\n            This is the four column part  \n        </div>  \n\n        <div class=\"col-lg-8\"> \n                <full-calendar [options]=\"calendarOptions\"></full-calendar> \n        </div>  \n    </div>    -->\n<!-- </div>       -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "PY0J":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/booking-form/booking-form.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-booking-form-submit></app-booking-form-submit>\n<app-booking-form-main-asset\n  [mainAsset]=\"mainAsset\"\n  [isAddable]=\"true\">\n</app-booking-form-main-asset>\n");

/***/ }),

/***/ "PjKf":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.js ***!
  \*****************************************************/
/*! exports provided: default, DayTimeCols, DayTimeColsSlicer, DayTimeColsView, TimeCols, TimeColsSlatsCoords, TimeColsView, buildDayRanges, buildSlatMetas, buildTimeColsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeCols", function() { return DayTimeCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeColsSlicer", function() { return DayTimeColsSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeColsView", function() { return DayTimeColsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCols", function() { return TimeCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColsSlatsCoords", function() { return TimeColsSlatsCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColsView", function() { return TimeColsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayRanges", function() { return buildDayRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSlatMetas", function() { return buildSlatMetas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTimeColsModel", function() { return buildTimeColsModel; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "FZkX");
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ "1hAE");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/






var AllDaySplitter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {},
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["hasBgRendering"])(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    };
    return AllDaySplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Splitter"]));

var DEFAULT_SLAT_LABEL_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    var classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewContextType"].Consumer, null, function (context) {
        if (!props.isLabeled) {
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        var dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
        var labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])(options.slotLabelFormat[0]) :
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])(options.slotLabelFormat);
        var hookProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": props.isoTimeStr },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)))); }));
    }));
}
function renderInnerContent(props) {
    return props.text;
}

var TimeBodyAxis = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeBodyAxis, _super);
    function TimeBodyAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeBodyAxis.prototype.render = function () {
        return this.props.slatMetas.map(function (slatMeta) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { key: slatMeta.key },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsAxisCell, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, slatMeta)))); });
    };
    return TimeBodyAxis;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

var DEFAULT_WEEK_NUM_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({ week: 'short' });
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsView, _super);
    function TimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        _this.headerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this.scrollerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this.state = {
            slatCoords: null,
        };
        _this.handleScrollTopRequest = function (scrollTop) {
            var scrollerEl = _this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        _this.renderHeadAxis = function (rowKey, frameHeight) {
            if (frameHeight === void 0) { frameHeight = ''; }
            var options = _this.context.options;
            var dateProfile = _this.props.dateProfile;
            var range = dateProfile.renderRange;
            var dayCnt = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["diffDays"])(range.start, range.end);
            var navLinkAttrs = (dayCnt === 1) // only do in day views (to avoid doing in week views that dont need it)
                ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkAttrs"])(_this.context, range.start, 'week')
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["WeekNumberRoot"], { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { ref: rootElRef, "aria-hidden": true, className: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ].concat(classNames).join(' ') },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)))); }));
            }
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        _this.renderTableRowAxis = function (rowHeight) {
            var _a = _this.context, options = _a.options, viewApi = _a.viewApi;
            var hookProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { ref: rootElRef, "aria-hidden": true, className: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ].concat(classNames).join(' ') },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''), style: { height: rowHeight } },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)))); }));
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
        };
        return _this;
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
        var _a = this, context = _a.context, props = _a.props;
        var sections = [];
        var stickyHeaderDates = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["SimpleScrollGrid"], { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections }))); }));
    };
    TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        var _this = this;
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, context = _a.context, props = _a.props;
        var stickyHeaderDates = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);
        var stickyFooterScrollbar = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyFooterScrollbar"])(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (arg) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { role: "presentation" }, _this.renderHeadAxis('day', arg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (contentArg) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { role: "presentation" }, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        var isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: function (arg) { return (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-axis-chunk" },
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null,
                                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeBodyAxis, { slatMetas: slatMetas }))),
                        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-now-indicator-container" },
                            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, function (nowDate) {
                                var nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], { isAxis: true, date: nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); }));
                                }
                                return null;
                            })))); },
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"],
                    },
                    {
                        key: 'cols',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"],
                    },
                ],
            });
        }
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections }))); }));
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    TimeColsView.prototype.getAllDayMaxEventProps = function () {
        var _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows };
    };
    return TimeColsView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]));
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

var TimeColsSlatsCoords = /** @class */ (function () {
    function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
        var dateProfile = this.dateProfile;
        if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["rangeContainsMarker"])(dateProfile.currentRange, date)) {
            var startOfDayDate = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(date);
            var timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMinTime) &&
                timeMs < Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMaxTime)) {
                return this.computeTimeTop(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(timeMs));
            }
        }
        return null;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(when);
        }
        return this.computeTimeTop(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
        var _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
        var len = positions.els.length;
        // floating-point value of # of slots covered
        var slatCoverage = (duration.milliseconds - Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMinTime)) / Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(this.slotDuration);
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    };
    return TimeColsSlatsCoords;
}());

var TimeColsSlatsBody = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsSlatsBody, _super);
    function TimeColsSlatsBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColsSlatsBody.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var slatElRefs = props.slatElRefs;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, props.slatMetas.map(function (slatMeta, i) {
            var hookProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            var classNames = [
                'fc-timegrid-slot',
                'fc-timegrid-slot-lane',
                slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
            ];
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsAxisCell, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, slatMeta))),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], { hookProps: hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": slatMeta.isoTimeStr }, innerContent)); })));
        })));
    };
    return TimeColsSlatsBody;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
var TimeColsSlats = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsSlats, _super);
    function TimeColsSlats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this.slatElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
        return _this;
    }
    TimeColsSlats.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    };
    TimeColsSlats.prototype.componentDidMount = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentDidUpdate = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentWillUnmount = function () {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    };
    TimeColsSlats.prototype.updateSizing = function () {
        var _a = this, context = _a.context, props = _a.props;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            var rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    };
    return TimeColsSlats;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map(function (slatMeta) { return elMap[slatMeta.key]; });
}

function splitSegsByCol(segs, colCnt) {
    var segsByCol = [];
    var i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

var TimeColMoreLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColMoreLink, _super);
    function TimeColMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        return _this;
    }
    TimeColMoreLink.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["MoreLinkRoot"], { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function () { return renderPlainFgSegs(props.hiddenSegs, props); } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", { ref: function (el) {
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(rootElRef, el);
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.rootElRef, el);
            }, className: ['fc-timegrid-more-link'].concat(classNames).join(' '), style: { top: props.top, bottom: props.bottom }, onClick: handleClick, title: title, "aria-expanded": isExpanded, "aria-controls": popoverId },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent))); }));
    };
    return TimeColMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
    var hierarchy = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["SegHierarchy"]();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var hiddenGroups = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["groupIntersectingEntries"])(hiddenEntries);
    var web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    var segRects = webToRects(web);
    return { segRects: segRects, hiddenGroups: hiddenGroups };
}
function buildWeb(hierarchy) {
    var entriesByLevel = hierarchy.entriesByLevel;
    var buildNode = cacheable(function (level, lateral) { return level + ':' + lateral; }, function (level, lateral) {
        var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        var nextLevelRes = buildNodes(siblingRange, buildNode);
        var entry = entriesByLevel[level][lateral];
        return [
            Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1], // the pressure builds
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    var level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
    var lateral = lateralStart;
    var pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1], // first item's pressure
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    var levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
    var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    var levelCnt = levelCoords.length;
    var level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        var entries = entriesByLevel[level];
        var entry = void 0;
        var searchIndex = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["binarySearch"])(entries, subjectEntry.span.start, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getEntrySpanEnd"]);
        var lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        var lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.span.start < subjectEntry.span.end) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level: level, lateralStart: lateralStart, lateralEnd: lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    var stretchNode = cacheable(function (node, startCoord, prevThickness) { return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEntryKey"])(node); }, function (node, startCoord, prevThickness) {
        var nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
        var allThickness = thickness + prevThickness;
        var thicknessFraction = thickness / allThickness;
        var endCoord;
        var newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (var _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
                var childNode = nextLevelNodes_1[_i];
                if (endCoord === undefined) {
                    var res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    var res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        var newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map(function (node) { return stretchNode(node, 0, 0)[1]; });
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    var rects = [];
    var processNode = cacheable(function (node, levelCoord, stackDepth) { return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEntryKey"])(node); }, function (node, levelCoord, stackDepth) {
        var rect = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { levelCoord: levelCoord,
            stackDepth: stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        var stackForward = 0;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = keyFunc.apply(void 0, args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc.apply(void 0, args));
    };
}

function computeSegVCoords(segs, colDate, slatCoords, eventMinHeight) {
    if (slatCoords === void 0) { slatCoords = null; }
    if (eventMinHeight === void 0) { eventMinHeight = 0; }
    var vcoords = [];
    if (slatCoords) {
        for (var i = 0; i < segs.length; i += 1) {
            var seg = segs[i];
            var spanStart = slatCoords.computeDateTop(seg.start, colDate);
            var spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
            slatCoords.computeDateTop(seg.end, colDate));
            vcoords.push({
                start: Math.round(spanStart),
                end: Math.round(spanEnd), //
            });
        }
    }
    return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
eventOrderStrict, eventMaxStack) {
    var segInputs = [];
    var dumbSegs = []; // segs without coords
    for (var i = 0; i < segs.length; i += 1) {
        var vcoords = segVCoords[i];
        if (vcoords) {
            segInputs.push({
                index: i,
                thickness: 1,
                span: vcoords,
            });
        }
        else {
            dumbSegs.push(segs[i]);
        }
    }
    var _a = buildPositioning(segInputs, eventOrderStrict, eventMaxStack), segRects = _a.segRects, hiddenGroups = _a.hiddenGroups;
    var segPlacements = [];
    for (var _i = 0, segRects_1 = segRects; _i < segRects_1.length; _i++) {
        var segRect = segRects_1[_i];
        segPlacements.push({
            seg: segs[segRect.index],
            rect: segRect,
        });
    }
    for (var _b = 0, dumbSegs_1 = dumbSegs; _b < dumbSegs_1.length; _b++) {
        var dumbSeg = dumbSegs_1[_b];
        segPlacements.push({ seg: dumbSeg, rect: null });
    }
    return { segPlacements: segPlacements, hiddenGroups: hiddenGroups };
}

var DEFAULT_TIME_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
var TimeColEvent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColEvent, _super);
    function TimeColEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColEvent.prototype.render = function () {
        var classNames = [
            'fc-timegrid-event',
            'fc-v-event',
        ];
        if (this.props.isShort) {
            classNames.push('fc-timegrid-event-short');
        }
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["StandardEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT, extraClassNames: classNames })));
    };
    return TimeColEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

var TimeColMisc = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColMisc, _super);
    function TimeColMisc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColMisc.prototype.render = function () {
        var props = this.props;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (innerElRef, innerContent) { return (innerContent &&
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent)); }));
    };
    return TimeColMisc;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

var TimeCol = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeCol, _super);
    function TimeCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"]);
        return _this;
    }
    // TODO: memoize event-placement?
    TimeCol.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var isSelectMirror = context.options.selectMirror;
        var mirrorSegs = (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        var interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (rootElRef, classNames, dataAttrs) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ ref: rootElRef, role: "gridcell", className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ') }, dataAttrs, props.extraDataAttrs),
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-frame" },
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-bg" },
                    _this.renderFillSegs(props.businessHourSegs, 'non-business'),
                    _this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                    _this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })))); }));
    };
    TimeCol.prototype.renderFgSegs = function (sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var props = this.props;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
    };
    TimeCol.prototype.renderPositionedFgSegs = function (segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var _this = this;
        var _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict, eventMinHeight = _a.eventMinHeight;
        var _b = this.props, date = _b.date, slatCoords = _b.slatCoords, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
        var _c = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack), segPlacements = _c.segPlacements, hiddenGroups = _c.hiddenGroups;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segPlacements.map(function (segPlacement) {
                var seg = segPlacement.seg, rect = segPlacement.rect;
                var instanceId = seg.eventRange.instance.instanceId;
                var isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                var vStyle = computeSegVStyle(rect && rect.span);
                var hStyle = (!isMirror && rect) ? _this.computeSegHStyle(rect) : { left: 0, right: 0 };
                var isInset = Boolean(rect) && rect.stackForward > 0;
                var isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: 'fc-timegrid-event-harness' +
                        (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange, nowDate)))));
            })));
    };
    // will already have eventMinHeight applied because segInputs already had it
    TimeCol.prototype.renderHiddenGroups = function (hiddenGroups, segs) {
        var _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hiddenGroups.map(function (hiddenGroup) {
            var positionCss = computeSegVStyle(hiddenGroup.span);
            var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColMoreLink, { key: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildIsoString"])(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["computeEarliestSegStart"])(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    };
    TimeCol.prototype.renderFillSegs = function (segs, fillType) {
        var _a = this, props = _a.props, context = _a.context;
        var segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
        var children = segVCoords.map(function (vcoords, i) {
            var seg = segs[i];
            return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { key: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEventRangeKey"])(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BgEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ seg: seg }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, props.todayRange, props.nowDate))) :
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderFill"])(fillType)));
        });
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children);
    };
    TimeCol.prototype.renderNowIndicator = function (segs) {
        var _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
        if (!slatCoords) {
            return null;
        }
        return segs.map(function (seg, i) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], { isAxis: false, date: date, 
            // key doesn't matter. will only ever be one
            key: i }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent)); })); });
    };
    TimeCol.prototype.computeSegHStyle = function (segHCoords) {
        var _a = this.context, isRtl = _a.isRtl, options = _a.options;
        var shouldOverlap = options.slotEventOverlap;
        var nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        var farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        var props = {
            zIndex: segHCoords.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segHCoords.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeCol;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function renderPlainFgSegs(sortedFgSegs, _a) {
    var todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
    var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, sortedFgSegs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange, nowDate)))));
    })));
}
function computeSegVStyle(segVCoords) {
    if (!segVCoords) {
        return { top: '', bottom: '' };
    }
    return {
        top: segVCoords.start,
        bottom: -segVCoords.end,
    };
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map(function (segEntry) { return allSegs[segEntry.index]; });
}

var TimeColsContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsContent, _super);
    function TimeColsContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitFgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
        _this.splitBgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
        _this.splitBusinessHourSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
        _this.splitNowIndicatorSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
        _this.splitDateSelectionSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
        _this.splitEventDrag = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByCol);
        _this.splitEventResize = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByCol);
        _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
        return _this;
    }
    TimeColsContent.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        var colCnt = props.cells.length;
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", { role: "presentation", style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", { role: "presentation" },
                    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", { role: "row" },
                        props.axis && (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-col-frame" },
                                Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], { isAxis: true, date: props.nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); })))))),
                        props.cells.map(function (cell, i) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint })); }))))));
    };
    TimeColsContent.prototype.componentDidMount = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.componentDidUpdate = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.updateCoords = function () {
        var props = this.props;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    };
    return TimeColsContent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
function collectCellEls(elMap, cells) {
    return cells.map(function (cell) { return elMap[cell.key]; });
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
var TimeCols = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeCols, _super);
    function TimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processSlotOptions = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(processSlotOptions);
        _this.state = {
            slatCoords: null,
        };
        _this.handleRootEl = function (el) {
            if (el) {
                _this.context.registerInteractiveComponent(_this, {
                    el: el,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        _this.handleScrollRequest = function (request) {
            var onScrollTopRequest = _this.props.onScrollTopRequest;
            var slatCoords = _this.state.slatCoords;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    var top_1 = slatCoords.computeTimeTop(request.time);
                    top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top_1) {
                        top_1 += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top_1);
                }
                return true;
            }
            return false;
        };
        _this.handleColCoords = function (colCoords) {
            _this.colCoords = colCoords;
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
            if (_this.props.onSlatCoords) {
                _this.props.onSlatCoords(slatCoords);
            }
        };
        return _this;
    }
    TimeCols.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    };
    TimeCols.prototype.componentDidMount = function () {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    };
    TimeCols.prototype.componentDidUpdate = function (prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    };
    TimeCols.prototype.componentWillUnmount = function () {
        this.scrollResponder.detach();
    };
    TimeCols.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var colCoords = this.colCoords;
        var dateProfile = this.props.dateProfile;
        var slatCoords = this.state.slatCoords;
        var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
        var colIndex = colCoords.leftToIndex(positionLeft);
        var slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var cell = this.props.cells[colIndex];
            var slatTop = slatCoords.positions.tops[slatIndex];
            var slatHeight = slatCoords.positions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(dateProfile.slotMinTime, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["multiplyDuration"])(snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, snapDuration);
            return {
                dateProfile: dateProfile,
                dateSpan: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ range: { start: start, end: end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    };
    return TimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]));
function processSlotOptions(slotDuration, snapDurationOverride) {
    var snapDuration = snapDurationOverride || slotDuration;
    var snapsPerSlot = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration: snapDuration, snapsPerSlot: snapsPerSlot };
}

var DayTimeColsSlicer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeColsSlicer, _super);
    function DayTimeColsSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col += 1) {
            var segRange = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["intersectRanges"])(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col,
                });
            }
        }
        return segs;
    };
    return DayTimeColsSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Slicer"]));

var DayTimeCols = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeCols, _super);
    function DayTimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayRanges = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildDayRanges);
        _this.slicer = new DayTimeColsSlicer();
        _this.timeColsRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        return _this;
    }
    DayTimeCols.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
        var isNowIndicator = context.options.nowIndicator;
        var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], { unit: isNowIndicator ? 'minute' : 'day' }, function (nowDate, todayRange) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeCols, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }))); }));
    };
    return DayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]));
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    var dayStart = new Date(0);
    var slatTime = slotMinTime;
    var slatIterator = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(0);
    var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    var metas = [];
    while (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(slatTime) < Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(slotMaxTime)) {
        var date = dateEnv.add(dayStart, slatTime);
        var isLabeled = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(slatIterator, labelInterval) !== null;
        metas.push({
            date: date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["formatIsoTimeString"])(date),
            isLabeled: isLabeled,
        });
        slatTime = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(slatTime, slotDuration);
        slatIterator = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    var i;
    var labelInterval;
    var slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

var DayTimeColsView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeColsView, _super);
    function DayTimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildTimeColsModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildTimeColsModel);
        _this.buildSlatMetas = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildSlatMetas);
        return _this;
    }
    DayTimeColsView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dateProfile = props.dateProfile;
        var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        var splitProps = this.allDaySplitter.splitProps(props);
        var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        var dayMinWidth = options.dayMinWidth;
        var hasAttachedAxis = !dayMinWidth;
        var hasDetachedAxis = dayMinWidth;
        var headerContent = options.dayHeaders && (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayHeader"], { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        var allDayContent = (options.allDaySlot !== false) && (function (contentArg) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["DayTable"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()))); });
        var timeGridContent = function (contentArg) { return (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DayTimeCols, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }))); };
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    };
    return DayTimeColsView;
}(TimeColsView));
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DaySeriesModel"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayTableModel"](daySeries, false);
}

var OPTION_REFINERS = {
    allDaySlot: Boolean,
};

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS,
    views: {
        timeGrid: {
            component: DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true, // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ "TY9X":
/*!**********************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-form/booking-form.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "TnqV":
/*!*******************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/status-log/status-log.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StatusLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusLogComponent", function() { return StatusLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_log_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-log.component.html */ "t24s");
/* harmony import */ var _status_log_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-log.component.scss */ "+4Sx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let StatusLogComponent = class StatusLogComponent {
    constructor() { }
    ngOnInit() { }
};
StatusLogComponent.ctorParameters = () => [];
StatusLogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-status-log',
        template: _raw_loader_status_log_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_log_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatusLogComponent);



/***/ }),

/***/ "Ushe":
/*!******************************************************************!*\
  !*** ./src/app/dms/components/bookings/form/form.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".opportunity {\n  display: none;\n}\n\n.opportunityAppear {\n  display: block;\n}\n\n.opportunityBoxes {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 2fr));\n  column-gap: 65px;\n  row-gap: 10px;\n}\n\n.opportunityBoxesSame {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));\n  grid-template-columns: auto;\n}\n\n.opportunityBoxesSameFirst {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));\n  justify-content: space-between;\n}\n\n.opportunityBoxesLabel {\n  align-self: start;\n  justify-self: start;\n}\n\n.opportunitiesText {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: 150px auto;\n}\n\n.opportunitiesText div textarea {\n  width: 100%;\n  outline: none;\n  border: 1.5px solid lightgray;\n}\n\n.oppoturiniIdIput {\n  background-color: lightgray;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1REFBQTtFQUVBLDJCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFFQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGSjs7QUFLQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUZBIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vcHBvcnR1bml0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0gXG5cbi5vcHBvcnR1bml0eUFwcGVhciB7IFxuICAgIGRpc3BsYXk6YmxvY2s7XG59ICBcblxuLm9wcG9ydHVuaXR5Qm94ZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyOTBweCwgMmZyKSk7XG4gICAgY29sdW1uLWdhcDogNjVweDsgXG4gICAgcm93LWdhcDogMTBweDtcbn0gICBcbiBcbi5vcHBvcnR1bml0eUJveGVzU2FtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsNTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xufSBcblxuLm9wcG9ydHVuaXR5Qm94ZXNTYW1lRmlyc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMmZyKSk7XG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMzBweCAxNTBweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ub3Bwb3J0dW5pdHlCb3hlc0xhYmVse1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG4gXG4ub3Bwb3J0dW5pdGllc1RleHR7IFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IGF1dG87XG59IFxuXG4ub3Bwb3J0dW5pdGllc1RleHQgZGl2IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lOyBcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGxpZ2h0Z3JheTsgIFxufVxuXG4ub3Bwb3R1cmluaUlkSXB1dHtcbmJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbm91dGxpbmU6IG5vbmU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "XQqK":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/booking-entity/booking-entity.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-booking-detail *ngIf=\"status > 1\"\n  [bookingDetailList]=\"bookingDetailList\">\n</app-booking-detail>\n\n<app-booking-form-submit *ngIf=\"status <= 1\"\n[bookingDetailList]=\"bookingDetailList\">\n</app-booking-form-submit>\n\n<br>\n\n<app-opportunity-summary [opportunitySummary]=\"opportunitySummary\"></app-opportunity-summary>\n\n<br>\n\n<dms-booking-approval\n  [status]=\"status\"\n  [access]=\"access\"\n  [list]=\"approvalList\"\n  (buttonAction)=\"onApprovalAction($event)\">\n</dms-booking-approval>\n\n<br>\n\n<app-booking-form-main-asset\n  [mainAsset]=\"mainAsset\"\n  [isAddable]=\"true\">\n</app-booking-form-main-asset>\n<br>\n<app-status-log></app-status-log>\n");

/***/ }),

/***/ "YoGc":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/booking-approval/booking-approval.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dms-expand-panel title=\"Approval Workflow\" [open]=\"true\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-4 col-form-label\">Status</div>\n          <div class=\"col-md-8\">\n            <p class=\"form-control-static\"><b>{{ statusText }}</b></p>\n          </div>\n        </div>\n\n        <div *ngFor=\"let approval of list; let i = index\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              {{ approval.description }}\n            </div>\n            <div class=\"col-md-2\">\n              {{ approval.status }}\n            </div>\n            <div class=\"col-md-6\">\n              <span *ngFor=\"let user of approval.user_list; let i=index\">\n                {{ i ? ',' : '' }} {{ user.name }}\n              </span>\n            </div>\n          </div>\n          <br>\n        </div>\n      </form>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <div *ngIf=\"isConfirmed\" class=\"animated fadeIn card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  Main Asset Serial No\n                </div>\n                <div class=\"col-md-7\">\n                  2\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label class=\"col-md-5\" for=\"warehouse_from\">\n                  From Warehouse\n                </label>\n                <div class=\"col-md-7\">\n                  <input id=\"warehouse_from\" type=\"text\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label class=\"col-md-5\" for=\"ward_from\">\n                  From Ward/ Department\n                </label>\n                <div class=\"col-md-7\">\n                  <input id=\"ward_from\" type=\"text\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label class=\"col-md-5\" for=\"destination\">\n                  To Ward / Department\n                </label>\n                <div class=\"col-md-7\">\n                  <input id=\"destination\" type=\"text\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <div class=\"col-2\"></div>\n                <div class=\"col-10\">\n                  <div class=\"d-flex justify-content-center\">\n                    <button type=\"button\" class=\"btn btn-primary mr-3\">SUBMIT</button>\n                    <br>\n                    <button type=\"button\" class=\"btn btn-primary\">CANCEL</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <br>\n      <div class=\"d-flex justify-content-center\" *ngIf=\"access\">\n        <div *ngFor=\"let button of buttons; let i=index\" class=\"pr-2\">\n          <button type=\"submit\" class=\"btn btn-md btn-primary\"\n                  (click)=\"onButtonClick(button.status)\">{{ button.title | uppercase }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</dms-expand-panel>\n");

/***/ }),

/***/ "YyA0":
/*!***************************************************************!*\
  !*** ./src/app/dms/components/calendar/calendar.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar.component.html */ "DC6m");
/* harmony import */ var _calendar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component.scss */ "GNnL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "fKmb");
/* harmony import */ var _services_get_inventory_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/get-inventory-booking.service */ "IQvn");






let CalendarComponent = class CalendarComponent {
    constructor(getinventorybookingservice) {
        this.getinventorybookingservice = getinventorybookingservice;
        this.calendarOptions = {
        // headerToolbar: {
        //   left: 'prev,next today',
        //   center: 'title',
        //   right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        // },
        // initialView: 'dayGridMonth',
        // TODO: maybe set `events`, instead of `initialEvents` (to auto fetch).
        // initialEvents: INITIAL_EVENTS,
        // weekends: true,
        // editable: true,
        // selectable: true,
        // selectMirror: true,
        // dayMaxEvents: true,
        // select: this.handleDateSelect.bind(this),
        // eventClick: this.handleEventClick.bind(this),
        // eventsSet: this.handleEvents.bind(this),
        // Database-edit helper callbacks.
        /*
        eventAdd:
        eventChange:
        eventRemove:
        */
        };
        this.currentEvents = [];
    }
    ngOnInit() {
        // console.log("we are initializing")
        this.getInventories();
        // console.log("after init")
    }
    getInventories() {
        this.getinventorybookingservice.getInventories().subscribe((res) => {
            this.inventories = res;
        });
        console.log("INV", this.inventories);
    }
    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }
    handleDateSelect(selectInfo) {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: Object(_events__WEBPACK_IMPORTED_MODULE_4__["createEventId"])(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }
    handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }
    handleEvents(events) {
        this.currentEvents = events;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _services_get_inventory_booking_service__WEBPACK_IMPORTED_MODULE_5__["GetInventoryBookingService"] }
];
CalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "dms-calendar",
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_get_inventory_booking_service__WEBPACK_IMPORTED_MODULE_5__["GetInventoryBookingService"]])
], CalendarComponent);



/***/ }),

/***/ "Z7j3":
/*!********************************************************************!*\
  !*** ./src/app/dms/components/calendar/calendar-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.component */ "YyA0");




const routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"],
        data: {
            title: 'Calendar',
        },
    }
];
let CalendarRoutingModule = class CalendarRoutingModule {
};
CalendarRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalendarRoutingModule);



/***/ }),

/***/ "behN":
/*!*********************************************************************!*\
  !*** ./src/app/dms/components/bookings/services/booking.service.ts ***!
  \*********************************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api-client.service */ "gdhP");



let BookingService = class BookingService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getList() {
        return this.apiClient.get('booking');
    }
    create(data) {
        return this.apiClient.post('booking/createDraft', data);
    }
    updateBooking(data, id) {
        return this.apiClient.put('booking/update/' + id, data);
    }
};
BookingService.ctorParameters = () => [
    { type: _services_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }
];
BookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]])
], BookingService);



/***/ }),

/***/ "c2xB":
/*!*******************************************************************!*\
  !*** ./src/app/dms/components/approvals/approvals.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dygD":
/*!****************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-approval/booking-approval.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ButtonEvent, BookingApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonEvent", function() { return ButtonEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingApprovalComponent", function() { return BookingApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_approval_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-approval.component.html */ "YoGc");
/* harmony import */ var _booking_approval_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-approval.component.scss */ "zOhK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/booking-entity.service */ "iFlU");
/* harmony import */ var _services_booking_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/booking-status.enum */ "uhYt");







class ButtonEvent {
}
let BookingApprovalComponent = class BookingApprovalComponent {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this._status = _services_booking_status_enum__WEBPACK_IMPORTED_MODULE_6__["BookingStatus"].unknown;
        this.statusText = 'Unknown';
        this.isConfirmed = false;
        this.buttons = [];
        this.list = [];
        this.access = false;
        this.buttonAction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
        this.statusText = Object(_services_booking_status_enum__WEBPACK_IMPORTED_MODULE_6__["statusToText"])(value);
        // Defaults.
        this.isConfirmed = false;
        this.buttons = [];
        // Update buttons.
        switch (value) {
            case '1':
                this.buttons = [{ title: 'Submit for Approval', id: 0, status: '2' }];
                break;
            case '2':
                this.buttons = [
                    { title: 'MSC Reviewed', id: 0, status: '3' },
                    { title: 'Decline', id: 1, status: '5' }
                ];
                break;
            case '3':
                this.buttons = [
                    { title: 'Endorse', id: 0, status: '6' },
                    { title: 'Decline', id: 1, status: '5' }
                ];
                break;
            case '4':
                this.buttons = [
                    { title: 'Approve', id: 0, status: '7' },
                    { title: 'Conflict', id: 1, status: '4' },
                    { title: 'Decline', id: 2, status: '5' },
                ];
                break;
            case '7':
                this.buttons = [
                    { title: 'Confirm', id: 0, status: '8' },
                    { title: 'Decline', id: 1, status: '5' },
                ];
                break;
            case '8':
                this.isConfirmed = true;
                break;
        }
    }
    onButtonClick(status) {
        this.api.updateStatus({
            bookingId: this.route.snapshot.params.id,
            status: status,
        }).subscribe((res) => {
            if (res) {
                this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/dms/bookings', this.route.snapshot.params.id]);
                });
            }
        }, err => {
            console.log(err);
            alert("error");
        });
    }
};
BookingApprovalComponent.ctorParameters = () => [
    { type: _services_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__["BookingEntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BookingApprovalComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    access: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    buttonAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BookingApprovalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-booking-approval',
        template: _raw_loader_booking_approval_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_approval_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__["BookingEntityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BookingApprovalComponent);



/***/ }),

/***/ "fENq":
/*!************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/booking-entity.component.ts ***!
  \************************************************************************************/
/*! exports provided: BookingEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEntityComponent", function() { return BookingEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_entity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-entity.component.html */ "XQqK");
/* harmony import */ var _booking_entity_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-entity.component.scss */ "fOl9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_booking_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/booking-status.enum */ "uhYt");
/* harmony import */ var _services_booking_entity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/booking-entity.service */ "iFlU");







/**
 * Provides View for single Booking-Entity (in Demo-Bookings table).
 * @class
 */
let BookingEntityComponent = class BookingEntityComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.statusText = 'Draft';
        this.bookingId = BigInt(0);
        this.approvalList = [];
    }
    ngOnInit() {
        this.routeListener = this.route.params.subscribe(paramList => {
            if (this.apiListener) {
                this.apiListener.unsubscribe();
            }
            let param = paramList['id'] + '';
            const id = BigInt(param);
            this.bookingId = id;
            // Updates anything related to ID.
            if (id !== BigInt(0)) {
                this.apiListener = this.api.getEntity(id)
                    .subscribe((response) => {
                    if (response) {
                        this.status = response.status;
                        this.approvalList = response.approvalList;
                        this.bookingDetailList = response.bookingDetailList;
                        this.bookingDetailList.status = this.statusName(this.bookingDetailList.status);
                        this.opportunitySummary = response.opportunitySummary;
                        this.mainAsset = response.mainAsset;
                        this.access = response.access;
                    }
                    console.log('api: entity', this.bookingId, response);
                });
            }
        });
    }
    ngOnDestroy() {
        this.routeListener.unsubscribe();
        if (this.apiListener) {
            this.apiListener.unsubscribe();
        }
    }
    onApprovalAction(event) {
        // TODO: do actual approval API requests (instead below demo).
        if (event.index === 0) {
            const lastStatus = this.status;
            this.status = Object(_services_booking_status_enum__WEBPACK_IMPORTED_MODULE_5__["statusIncrement"])(this.status);
            console.log('Status changed from ', lastStatus, 'to', this.status);
        }
        console.log('Approval onAction', event);
    }
    statusName(status) {
        const statusList = [
            'Draft',
            '1 Raising Booking Request - Draft',
            '2 Raising Booking Request - Submitted',
            '3 Raising Booking Request - MSC Reviewed',
            '4 Raising Booking Request - conflict',
            '5 Raising Booking Request - declined',
            '6 Raising Booking Request - Provisionally Accepted',
            '7 Raising Booking Request - Confirmed'
        ];
        if (status != '' && status != null) {
            return statusList[status];
        }
        return statusList[0];
    }
};
BookingEntityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_booking_entity_service__WEBPACK_IMPORTED_MODULE_6__["BookingEntityService"] }
];
BookingEntityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-booking-entity',
        template: _raw_loader_booking_entity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_entity_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_booking_entity_service__WEBPACK_IMPORTED_MODULE_6__["BookingEntityService"]])
], BookingEntityComponent);



/***/ }),

/***/ "fKmb":
/*!***************************************************!*\
  !*** ./src/app/dms/components/calendar/events.ts ***!
  \***************************************************/
/*! exports provided: INITIAL_EVENTS, createEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_EVENTS", function() { return INITIAL_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventId", function() { return createEventId; });
let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00'
    }
];
function createEventId() {
    return String(eventGuid++);
}


/***/ }),

/***/ "fOl9":
/*!**************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/booking-entity.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWVudGl0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gdhP":
/*!****************************************************!*\
  !*** ./src/app/dms/services/api-client.service.ts ***!
  \****************************************************/
/*! exports provided: ApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClient", function() { return ApiClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






/**
 * Manages requests to Backend's API.
 */
let ApiClient = class ApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["settings"].apiBaseUrl + '/dms/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        /**
         * Handler for any {@link HttpClient} failures.
         */
        this.errorHandler = (response) => {
            let errorMessage = '';
            if (response.error instanceof ErrorEvent) {
                errorMessage = response.error.message;
            }
            else {
                errorMessage = `Error Code: ${response.status}\nMessage: ${response.message}`;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        };
    }
    /**
     * Sends a request with Get-method to Backend's API.
     *
     * @param path URL-encoded (Sub-route and optional parameters).
     */
    get(path) {
        return this.map(this.httpClient.get(this.baseUrl + path, this.httpOptions));
    }
    /**
     * Sends a request with Post-method to Backend's API.
     */
    post(path, data) {
        return this.map(this.httpClient.post(this.baseUrl + path, data, this.httpOptions));
    }
    /**
     * Sends a request with Put-method to Backend's API.
     */
    put(path, data) {
        return this.map(this.httpClient.put(this.baseUrl + path, data, this.httpOptions));
    }
    /**
     * Casts input {@link ApiJsonResponse} to given type {@link T}.
     */
    map(json) {
        return json.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.data;
        }));
    }
};
ApiClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        // FIXME: not even a single module-service should be provided directly in Root-App.
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiClient);



/***/ }),

/***/ "h0cs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/approvals/approvals.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>approvals works!</p>");

/***/ }),

/***/ "hNOO":
/*!******************************************************************************!*\
  !*** ./src/app/dms/components/bookings/main-asset/main-asset.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWFzc2V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "i6HL":
/*!***************************************************!*\
  !*** ./src/app/dms/services/inventory.service.ts ***!
  \***************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-client.service */ "gdhP");



let InventoryService = class InventoryService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getList() {
        return this.apiClient.get('inventory');
    }
};
InventoryService.ctorParameters = () => [
    { type: _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }
];
InventoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]])
], InventoryService);



/***/ }),

/***/ "iFlU":
/*!********************************************************!*\
  !*** ./src/app/dms/services/booking-entity.service.ts ***!
  \********************************************************/
/*! exports provided: BookingEntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEntityService", function() { return BookingEntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-client.service */ "gdhP");



let BookingEntityService = class BookingEntityService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getEntity(bookingId) {
        return this.apiClient.get('booking/show/' + bookingId.toString());
    }
    updateStatus(data) {
        return this.apiClient.post('booking/status/update', data);
    }
};
BookingEntityService.ctorParameters = () => [
    { type: _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }
];
BookingEntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]])
], BookingEntityService);



/***/ }),

/***/ "ipmJ":
/*!****************************************************************!*\
  !*** ./src/app/dms/components/bookings/form/form.component.ts ***!
  \****************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form.component.html */ "te49");
/* harmony import */ var _form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component.scss */ "Ushe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/booking.service */ "behN");
/* harmony import */ var _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/customers/customers.service */ "wsQf");








/**
 * For submit the booking form
 * @class
 */
let FormComponent = class FormComponent {
    constructor(fb, bookingService, apiCustomers) {
        this.fb = fb;
        this.bookingService = bookingService;
        this.apiCustomers = apiCustomers;
        this.curDate = new Date(Date.now()).toLocaleDateString();
        this.defaultInputValue = 1;
        this.winningPercentageDefautl = 30;
        this.PriorityDefaultValue = 1;
        // bookingReasons:any[]  = [
        //     {id:1,name:'events'},
        //     {id:2,name:'demo'},
        //     {id:3,name:'Contigencies'},
        //     {id:4,name:'training'}
        // ];
        // selectedReason:number = 1;
        this.bookingReasons = [
            { id: 1, name: "event" },
            { id: 2, name: "demo" },
            { id: 3, name: "training" },
            { id: 4, name: "buyin" }
        ];
        this.defaultPercentages = [
            { id: 1, value: "30%" },
            { id: 2, value: "40%" },
            { id: 3, value: "50%" }
        ];
        this.defaultAnswers = [{ id: 1, ans: "Yes" }, { id: 2, ans: "No" }];
        this.defaultPriorities = [
            { id: 1, value: "High" },
            { id: 2, value: "Mid" },
            { id: 3, value: 'Low' }
        ];
        this.defaultPriority = 1;
        this.defaultAnswer = 1;
        this.selectedBooking = 1;
        this.selectedPercentage = 1;
    }
    changePrioritye(id) {
        this.defaultPriority = id;
    }
    changeAnswer(id) {
        this.defaultAnswer = id;
    }
    changePercentage(id) {
        this.selectedPercentage = id;
        console.log(id);
    }
    changeReason(id) {
        //getted from event
        this.selectedBooking = id;
        // console.log(id);
        // console.log('compare');
        // console.log(this.selectedBooking);
        //getted from binding
        // console.log(this.selectedBooking)
    }
    // toggleOpportunity(id:number)  {
    //   console.log('changed'+id);
    // }
    ngOnInit() {
        this.apiCustomers.getList().subscribe(response => {
            this.customers = response;
        });
        this.duration = this.bookingDetailList.demo_duration;
        this.formBooking = this.fb.group({
            customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.customer),
            booking_reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.booking_reason),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.branch),
            date_of_delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.preferred_date_of_delivery),
            date_of_collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.preferred_date_of_collection),
            demo_duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.duration),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.department),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.location),
            contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.ship_to_contact_name),
            contact_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.ship_to_contact_number),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.bookingDetailList.remarks),
        });
    }
    onSave() {
        this.bookingService.updateBooking({
            customer: this.formBooking.get("customer").value,
            booking_reason: this.formBooking.get("booking_reason").value,
            branch: this.formBooking.get("branch").value,
            date_of_delivery: this.formBooking.get("date_of_delivery").value,
            date_of_collection: this.formBooking.get("date_of_collection").value,
            demo_duration: this.formBooking.get("demo_duration").value,
            department: this.formBooking.get("department").value,
            location: this.formBooking.get("location").value,
            contact_name: this.formBooking.get("contact_name").value,
            contact_number: this.formBooking.get("contact_number").value,
            remarks: this.formBooking.get("remarks").value
        }, this.bookingDetailList.id).subscribe((res) => {
            if (res.id) {
                this.alertBody = "Booking saved successfully.";
                this.successModal.show();
                setTimeout(() => {
                    this.successModal.hide();
                }, 2000);
            }
        }, err => {
            console.log(err);
            this.alertBody = "The booking can't save";
            this.dangerModal.show();
            setTimeout(() => {
                this.dangerModal.hide();
            }, 2000);
        });
    }
    onDuration() {
        const date_of_delivery = this.formBooking.get("date_of_delivery").value;
        const date_of_collection = this.formBooking.get("date_of_collection").value;
        if (date_of_delivery != "" && date_of_collection != "") {
            var date1 = new Date(date_of_delivery);
            var date2 = new Date(date_of_collection);
            var Time = date2.getTime() - date1.getTime();
            var Days = Time / (1000 * 3600 * 24);
            this.duration = Days;
        }
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"] },
    { type: _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"] }
];
FormComponent.propDecorators = {
    successModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["successModal",] }],
    dangerModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["dangerModal",] }],
    foundModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["foundModal",] }],
    bookingDetailList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-booking-form-submit",
        template: _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"],
        _services_customers_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
], FormComponent);



/***/ }),

/***/ "jPgE":
/*!*****************************************************!*\
  !*** ./src/app/dms/services/equipment-kind.enum.ts ***!
  \*****************************************************/
/*! exports provided: mapEquipmentKindTitles, equipmentKindToTitle, isEquipmentMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEquipmentKindTitles", function() { return mapEquipmentKindTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equipmentKindToTitle", function() { return equipmentKindToTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEquipmentMain", function() { return isEquipmentMain; });
/**
 * Mappings from {@link kind} to appropriate titles.
 */
const mapEquipmentKindTitles = {
    unknown: 'Unknown',
    main: 'Demo Asset',
    compatibles: 'Compatible Accessories',
    peripherals: 'Peripheral Accessories',
    consumables: 'Consumables',
    packing: 'Packing during shipment',
    accessories: 'Accessories / Consumables'
};
/**
 * Finds matching title, based on equipment-kind.
 */
function equipmentKindToTitle(kind) {
    const keyList = Object.keys(mapEquipmentKindTitles);
    const key = kind.trim().toLowerCase();
    const index = keyList.indexOf(key);
    return index > 0 && index < keyList.length
        ? mapEquipmentKindTitles[key] : 'Unknown';
}
/**
 * Checks whether given {@param kind} consists of main-equipments
 * (an equipment with serial-field).
 *
 * @param kind state to check.
 * @return Truthy for main-equipment.
 */
function isEquipmentMain(kind) {
    return kind === 'main' || kind === 'compatibles';
}


/***/ }),

/***/ "l9ch":
/*!*******************************************!*\
  !*** ./src/app/dms/services/providers.ts ***!
  \*******************************************/
/*! exports provided: providersForDevelopment, providersForProduction, providersForEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providersForDevelopment", function() { return providersForDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providersForProduction", function() { return providersForProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providersForEnvironment", function() { return providersForEnvironment; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-client.service */ "gdhP");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.service */ "i6HL");
/* harmony import */ var _mock_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-inventory.service */ "N7hL");
/* harmony import */ var _booking_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-entity.service */ "iFlU");
/* harmony import */ var _mock_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock-booking-entity.service */ "r1Hc");
/* harmony import */ var _equipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipments.service */ "4/i7");
/* harmony import */ var _mock_equipments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock-equipments.service */ "vNf9");








const providersForDevelopment = [
    _api_client_service__WEBPACK_IMPORTED_MODULE_1__["ApiClient"],
    _mock_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__["MockBookingEntityService"],
    _mock_inventory_service__WEBPACK_IMPORTED_MODULE_3__["MockInventoryService"],
    _mock_equipments_service__WEBPACK_IMPORTED_MODULE_7__["MockEquipmentsService"],
];
/**
 * Replaces our Mock-services, to use Real-Service classes for Production.
 */
const providersForProduction = [
    _api_client_service__WEBPACK_IMPORTED_MODULE_1__["ApiClient"],
    { provide: _mock_booking_entity_service__WEBPACK_IMPORTED_MODULE_5__["MockBookingEntityService"], useClass: _booking_entity_service__WEBPACK_IMPORTED_MODULE_4__["BookingEntityService"] },
    { provide: _mock_inventory_service__WEBPACK_IMPORTED_MODULE_3__["MockInventoryService"], useClass: _inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"] },
    { provide: _mock_equipments_service__WEBPACK_IMPORTED_MODULE_7__["MockEquipmentsService"], useClass: _equipments_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentsService"] },
];
const providersForEnvironment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? providersForProduction : providersForDevelopment;


/***/ }),

/***/ "lR47":
/*!*********************************************************************************!*\
  !*** ./src/app/dms/components/widgets/expand-panel/expand-panel.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBhbmQtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "loo8":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/main-asset/equipment-table/equipment-table.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\n  <div *ngIf=\" ! isRoot\" class=\"bold-header pl-3\">{{ title }}</div>\n  <table class=\"table table-striped\">\n    <thead class=\"grey\">\n    <tr>\n      <th>No.</th>\n      <th>Product Name</th>\n      <th>SKU ID</th>\n      <th>Quantity</th>\n      <th>UOM</th>\n      <th>Availability</th>\n      <th>Expected Sales Price (RM)</th>\n      <th *ngIf=\"isMain\">Serial No</th>\n      <th>Available Qty</th>\n      <th>Cost (RM)</th>\n      <th *ngIf=\"isRemovable\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let asset of data; let i = index\">\n      <td>{{ asset.id }}</td>\n      <td> {{ asset.name }} </td>\n      <td> {{ asset.sku }} </td>\n      <td> {{ asset.quantity }} </td>\n      <td> {{ asset.uom }} </td>\n      <td> {{ asset.availability }} </td>\n      <td> {{ asset.expected_sale_price }} </td>\n      <td *ngIf=\"isMain\">\n        <div *ngIf=\"asset.serial_no\">{{ asset.serial_no }}</div>\n        <div *ngIf=\" ! asset.serial_no\">\n          <button class=\"btn btn-assign btn-primary\">Assign</button>\n        </div>\n      </td>\n      <td> {{ asset.available_quantity }} </td>\n      <td> {{ asset.cost }} </td>\n      <td *ngIf=\"isRemovable\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"\n                (click)=\"onRemove(i)\"><i class=\"fa fa-minus\"></i>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"isAddable\" class=\"custom-footer\">\n    <dms-identify\n      *ngIf=\"isAdding\"\n      [kind]=\"kind\" [title]=\"title\"\n      [maxPick]=\"maxPick\"\n      (bySave)=\"onSave($event)\"\n      (byClose)=\"isAdding = false\">\n    </dms-identify>\n    <div *ngIf=\"!isAdding && !isLimitReached\" class=\"d-flex justify-content-center\">\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"isAdding = true\"><i\n        class=\"fa fa-plus\"></i> ADD\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "mNTC":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/opportunity-booking-form/opportunity-form/opportunity-form.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form [formGroup]=\"formBooking\" (ngSubmit)=\"onSave()\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\">Status</label>\n                <div class=\"col-md-9\">\n                  <p class=\"form-control-static\">DRAFT</p>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"booking-reason\">Booking reason</label>\n                <div class=\"col-md-4\">\n                  Demo\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\">Request Date</label>\n                <div class=\"col-md-9\">\n                  <p class=\"form-control-static\">{{ curDate }}</p>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\">Customer</label>\n                <div class=\"col-md-4\">\n                  <select formControlName=\"customer\" class=\"form-control\" >\n                    <option value=\"\">Please select</option>\n                    <option *ngFor=\"let customer of customers\" value=\"{{customer.id}}\">{{customer.company_name}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"branch\">Branch/site</label>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" formControlName=\"branch\"  class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"date-of-delivery\">Preferred Date of Delivery </label>\n                        <div class=\"col-md-4\">\n                          <input class=\"form-control\" formControlName=\"date_of_delivery\" type=\"datetime-local\" name=\"date-of-delivery\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"date-of-collection\">Preferred Date of Collection </label>\n                        <div class=\"col-md-6\">\n                          <input class=\"form-control\" formControlName=\"date_of_collection\" type=\"datetime-local\" name=\"date-of-collection\">\n                        </div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"demo-duration\">Demo Duration *</label>\n                <div class=\"col-md-2\">\n                  <input type=\"number\" formControlName=\"demo_duration\" class=\"form-control\">\n                </div>\n                <div class=\"col-md-2\">\n                    months\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"department\">Ship-to Department/ Warde</label>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" formControlName=\"department\" class=\"form-control\" >\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"contact-name\">Ship to Contact Name </label>\n                        <div class=\"col-md-8\">\n                          <input class=\"form-control\" formControlName=\"contact_name\" type=\"text\" name=\"contact-name\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"contact-number\">Ship-To Contact Number </label>\n                        <div class=\"col-md-6\">\n                          <input class=\"form-control\" formControlName=\"contact_number\" type=\"text\" name=\"contact-number\">\n                        </div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"remarks\">Remarks</label>\n                <div class=\"col-md-9\">\n                  <textarea formControlName=\"remarks\" rows=\"9\" class=\"form-control\"></textarea>\n                </div>\n              </div>\n              <div class=\"custom-footer d-flex justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-plus\"></i> Save</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div><!--/.row-->\n  </div>\n  <div\n    id=\"success\"\n    bsModal\n    #successModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Success</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{ alertBody }}</p>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n\n  <div\n  bsModal\n  #dangerModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Error</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{ alertBody }}</p>\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n  ");

/***/ }),

/***/ "nSyl":
/*!*****************************************************************!*\
  !*** ./src/app/dms/components/approvals/approvals.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsComponent", function() { return ApprovalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approvals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approvals.component.html */ "h0cs");
/* harmony import */ var _approvals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approvals.component.scss */ "c2xB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ApprovalsComponent = class ApprovalsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApprovalsComponent.ctorParameters = () => [];
ApprovalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approvals',
        template: _raw_loader_approvals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approvals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ApprovalsComponent);



/***/ }),

/***/ "nven":
/*!*****************************************************************!*\
  !*** ./src/app/dms/components/bookings/bookings.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 0;\n}\n\n.card-header {\n  background-color: #898485;\n  color: #FFFFFF;\n  border-radius: 0;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header {\n  font-size: 24px;\n  font-weight: bolder;\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header span.pi {\n  margin-top: -8px;\n  position: absolute;\n  right: 0.5em;\n  top: 50%;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-header .p-accordion-header-link {\n  background: white;\n}\n\n:host ::ng-deep .customColor.p-accordion .p-accordion-content {\n  padding: 0px;\n  overflow-x: hidden;\n}\n\ntd {\n  text-align: center;\n}\n\n::ng-deep .nav-link.active {\n  background: #2297e6 !important;\n  color: #FFFFFF !important;\n}\n\n::ng-deep .nav-tabs .nav-link {\n  border: none !important;\n  border-left: 1px solid !important;\n}\n\n.bg-lightgrey {\n  background: #fcfcfc;\n}\n\n.no-outline tr:first-child td {\n  border-top: none !important;\n}\n\n.no-outline tr:first-child th {\n  border-top: none !important;\n}\n\n.no-outline tr:last-child th {\n  border-bottom: none !important;\n}\n\n.no-outline tr:last-child td {\n  border-bottom: none !important;\n}\n\n.no-outline tr td:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr td:last-child {\n  border-right: none !important;\n}\n\n.no-outline tr th:first-child {\n  border-left: none !important;\n}\n\n.no-outline tr th:last-child {\n  border-right: none !important;\n}\n\n.btn-custom {\n  background-color: #00538a;\n  border-color: #00538a;\n  color: #FFFFFF;\n}\n\n.chead {\n  font-size: 24px;\n  line-height: 34px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.btn-icon {\n  height: 2rem;\n  line-height: 1rem;\n  padding: 0 !important;\n  width: 2rem;\n  font-size: 1.2rem !important;\n  font-weight: bold;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.btn-in-tab {\n  position: absolute;\n  right: -3.5rem;\n  height: 1.5rem !important;\n  line-height: 0.75rem;\n  width: 1.5rem !important;\n  font-size: 0.9rem;\n}\n\n.btn-white {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n\n.btn-white i {\n  margin-top: 0.2rem;\n}\n\n.p-relative {\n  position: relative;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-125 {\n  padding: 1.25rem;\n}\n\n.b-btm-green {\n  border-bottom: solid 3px #5DBEC0;\n}\n\n.bg-opp {\n  background-color: #5DBEC0;\n}\n\n.table-price {\n  border-radius: 30px;\n}\n\n:host ::ng-deep {\n  /* Responsive */\n}\n\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  background-color: #898485;\n  color: white;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-paginator {\n  padding: 1rem;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-thead > tr > th {\n  text-align: left;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n\n:host ::ng-deep .p-datatable.p-datatable-table .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n:host ::ng-deep .p-datatable-table .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-table .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n\n.sku-icons {\n  display: flex;\n  align-items: center;\n}\n\n.booking-icons {\n  display: flex;\n  align-items: center;\n}\n\n.request-date {\n  display: flex;\n  align-items: center;\n}\n\n.prod-icons {\n  display: flex;\n  align-items: center;\n}\n\n.cust-icons {\n  display: flex;\n  align-items: center;\n}\n\n.booking-icons {\n  display: flex;\n  align-items: center;\n}\n\n.status-icons {\n  display: flex;\n  align-items: center;\n}\n\n.req-icons {\n  display: flex;\n  align-items: center;\n}\n\n:host ::ng-deep .p-datatable {\n  min-height: 500px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fZGF0YWJhc2VfdGFibGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRENRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDQ1o7O0FEQ1E7RUFDSSxpQkFBQTtBQ0NaOztBREVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQVI7O0FESUU7RUFDSSxrQkFBQTtBQ0ROOztBRElFO0VBRUksOEJBQUE7RUFDQSx5QkFBQTtBQ0ZOOztBREtFO0VBQ0ksdUJBQUE7RUFDQSxpQ0FBQTtBQ0ZOOztBREtFO0VBQ0ksbUJBQUE7QUNGTjs7QURLRTtFQUNFLDJCQUFBO0FDRko7O0FES0U7RUFDRSwyQkFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNGSjs7QURLRTtFQUNFLDhCQUFBO0FDRko7O0FES0U7RUFDRSw0QkFBQTtBQ0ZKOztBREtFO0VBQ0UsNkJBQUE7QUNGSjs7QURLRTtFQUNFLDRCQUFBO0FDRko7O0FES0U7RUFDRSw2QkFBQTtBQ0ZKOztBREtFO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNGTjs7QURLRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0NBQUE7QUNGSjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FES0U7RUFDRSxtQkFBQTtBQ0ZKOztBREtFO0VBdURFLGVBQUE7QUN4REo7O0FER1E7RUFDSSxpQkFBQTtBQ0RaOztBREtJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDSFI7O0FES1E7RUFDSSx5QkFBQTtBQ0haOztBRE9JO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDTFI7O0FEUUk7RUFDSSxnQkFBQTtBQ05SOztBRFFRO0VBQ0ksZ0JBQUE7QUNOWjs7QURXUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDVFo7O0FEWVE7RUFDSSxhQUFBO0FDVlo7O0FEYVE7RUFDSSxnQkFBQTtBQ1haOztBRGNRO0VBQ0ksWUFBQTtBQ1paOztBRGVRO0VBQ0kseUJBQUE7QUNiWjs7QURrQkk7RUFDSSxhQUFBO0FDaEJSOztBRG9CRTtFQUljOztJQUVJLHdCQUFBO0VDcEJsQjtFRHVCYztJQUNJLHVDQUFBO0VDckJsQjtFRHVCa0I7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDckJ0QjtFRHVCc0I7SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQ3JCMUI7RUR3QnNCO0lBQ0ksa0JBQUE7RUN0QjFCO0FBQ0Y7O0FBek5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBMk5GOztBQXpOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTRORjs7QUExTkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE2TkY7O0FBM05BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBOE5GOztBQTVOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQStORjs7QUE3TkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFnT0Y7O0FBOU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaU9GOztBQS9OQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWtPRjs7QUEvTkU7RUFDSSw0QkFBQTtBQWtPTiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4NDg1O1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czowO1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21Db2xvci5wLWFjY29yZGlvbiB7XG4gICAgLnAtYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHNwYW4ucGl7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDAuNWVtO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5re1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnAtYWNjb3JkaW9uLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gIHRkIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCAubmF2LWxpbmsuYWN0aXZlIHtcblxuICAgICAgYmFja2dyb3VuZDogIzIyOTdlNiAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJnLWxpZ2h0Z3JleXtcbiAgICAgIGJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIH1cblxuICAubm8tb3V0bGluZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vLW91dGxpbmUgdHI6Zmlyc3QtY2hpbGQgdGgge1xuICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyOmxhc3QtY2hpbGQgdGgge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyOmxhc3QtY2hpbGQgdGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vLW91dGxpbmUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubm8tb3V0bGluZSB0ciB0aDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uby1vdXRsaW5lIHRyIHRoOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1jdXN0b20ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTM4YTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNTM4YTtcbiAgICAgIGNvbG9yOiNGRkZGRkY7XG4gIH1cblxuICAuY2hlYWR7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuYnRuLWljb257XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnRuLWluLXRhYntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICByaWdodDotMy41cmVtO1xuICAgIGhlaWdodDoxLjVyZW0gIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMC43NXJlbTtcbiAgICB3aWR0aDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjAuOXJlbTtcbiAgfVxuXG4gIC5idG4td2hpdGV7XG4gICAgY29sb3I6I0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuICAuYnRuLXdoaXRlIGl7XG4gICAgbWFyZ2luLXRvcDowLjJyZW07XG4gIH1cblxuICAucC1yZWxhdGl2ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucC0we1xuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtMTI1e1xuICAgIHBhZGRpbmc6MS4yNXJlbTtcbiAgfVxuXG4gIC5iLWJ0bS1ncmVlbntcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzVEQkVDMDtcbiAgfVxuXG4gIC5iZy1vcHB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNURCRUMwO1xuICB9XG5cbiAgLnRhYmxlLXByaWNle1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5wLXBhZ2luYXRvciB7XG4gICAgICAgIC5wLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuXG4gICAgICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xuICAgICAgICBtaW4td2lkdGg6IDI1cmVtO1xuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtdGFibGUge1xuICAgICAgICAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4NDg1O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtcGFnaW5hdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wLWRyb3Bkb3duLWxhYmVsOm5vdCgucC1wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICAucC1kYXRhdGFibGUtdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAgICAgLnAtZGF0YXRhYmxlIHtcbiAgICAgICAgICAgICYucC1kYXRhdGFibGUtdGFibGUge1xuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1sYXllci0yKTtcblxuICAgICAgICAgICAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAucC1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0uNHJlbSAxcmVtIC0uNHJlbSAtLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICB9XG4iLCJAaW1wb3J0IFwiLi4vc3R5bGVzL2RhdGFiYXNlX3RhYmxlXCI7XG4uc2t1LWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib29raW5nLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yZXF1ZXN0LWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2QtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmN1c3QtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvb2tpbmctaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXR1cy1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVxLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5wLWRhdGF0YWJsZSB7XG4gICAgICBtaW4taGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "oez7":
/*!********************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-form/booking-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return BookingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-form.component.html */ "PY0J");
/* harmony import */ var _booking_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-form.component.scss */ "TY9X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BookingFormComponent = class BookingFormComponent {
    constructor() { }
    ngOnInit() {
        this.mainAsset = {
            main: [],
            compatibles: null,
            peripherals: null,
            consumables: null,
            packing: null,
            accessories: []
        };
    }
};
BookingFormComponent.ctorParameters = () => [];
BookingFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-form',
        template: _raw_loader_booking_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BookingFormComponent);



/***/ }),

/***/ "p9Jp":
/*!****************************************!*\
  !*** ./src/app/dms/dms.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoiZG1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "r1Hc":
/*!*************************************************************!*\
  !*** ./src/app/dms/services/mock-booking-entity.service.ts ***!
  \*************************************************************/
/*! exports provided: MockBookingEntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBookingEntityService", function() { return MockBookingEntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _booking_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-status.enum */ "uhYt");





const mockApproval = [
    {
        description: 'MSC SKU & accessories review',
        status: 'Pending',
        user_list: [
            { name: 'Mark', id: BigInt(700) }
        ],
    }, {
        description: 'Country MD endorsement for > 14 days deployment',
        status: 'Pending',
        user_list: [
            { name: 'John', id: BigInt(800) }
        ],
    }, {
        description: 'Demo Coordinator accept booking',
        status: 'Pending',
        user_list: [
            { name: 'Kelly', id: BigInt(120) },
            { name: 'Reesha', id: BigInt(130) }
        ],
    }, {
        description: 'Demo Coordinator confirm booking',
        status: 'Pending',
        user_list: [
            { name: 'Kelly', id: BigInt(120) },
            { name: 'Reesha', id: BigInt(130) }
        ],
    },
];
const mockBookingDetail = {
    id: BigInt(1),
    status: "2 Raising Booking Request - Submitted",
    booking_no: 'BK-00992',
    branch: "XXXX",
    booking_reason: "Demo",
    request_date: "9/3/2021",
    customer: "Parkway Singapore",
    preferred_date_of_delivery: "10/13/2021",
    preferred_date_of_collection: "12/13/2021",
    demo_duration: "2 months",
    department: "Ward 1, ",
    location: "Malaya",
    ship_to_contact_name: "XXXXXX",
    ship_to_contact_number: "XXXXXXXX",
    remarks: "",
    loan_start_date: "",
    loan_end_date: ""
};
const mockOpportunitySummary = {
    customer: "Parkway Singapore",
    opportunity_id: "00123456",
    initiator: "Jane Doe (BK-0092)",
    opportunity_amount: "35,000.00",
    opportunity_no: "123567.01",
    winning_probability: "65%"
};
const mockMain = [
    {
        id: BigInt(1),
        name: 'Product 1',
        sku: 'ZY2332',
        quantity: 1,
        uom: 'pc',
        availability: '-',
        expected_sale_price: 80000.00,
        serial_no: null,
        available_quantity: 1,
        cost: 80000.00
    }
];
const mockCompatibleAccessories = [
    {
        id: BigInt(1),
        name: 'Product 1',
        sku: 'ZY2332',
        quantity: 1,
        uom: 'pc',
        availability: '-',
        expected_sale_price: 80000.00,
        serial_no: null,
        available_quantity: 1,
        cost: 80000.00
    }
];
const mockPeripheralAccessories = [
    {
        id: BigInt(1),
        name: 'Product 1',
        sku: 'ZY2332',
        quantity: 1,
        uom: 'pc',
        availability: '-',
        expected_sale_price: 80000.00,
        available_quantity: 1,
        cost: 80000.00
    }
];
const mockConsumables = [
    {
        id: BigInt(1),
        name: 'Product 1',
        sku: 'ZY2332',
        quantity: 1,
        uom: 'pc',
        availability: '-',
        expected_sale_price: 80000.00,
        available_quantity: 1,
        cost: 80000.00
    }
];
const mockPackingDuringShipment = [
    {
        id: BigInt(1),
        name: 'Product 1',
        sku: 'ZY2332',
        quantity: 1,
        uom: 'pc',
        availability: '-',
        expected_sale_price: 80000.00,
        available_quantity: 1,
        cost: 80000.00
    }
];
const mockMainAsset = {
    main: mockMain,
    compatibles: mockCompatibleAccessories,
    peripherals: mockPeripheralAccessories,
    consumables: mockConsumables,
    packing: mockPackingDuringShipment,
    accessories: null
};
let MockBookingEntityService = class MockBookingEntityService {
    constructor() {
        this.mockData = [
            {
                status: _booking_status_enum__WEBPACK_IMPORTED_MODULE_4__["BookingStatus"].draft,
                approvalList: mockApproval,
                bookingDetailList: mockBookingDetail,
                opportunitySummary: mockOpportunitySummary,
                mainAsset: mockMainAsset,
                access: false
            }
        ];
    }
    getEntity(bookingId) {
        const data = this.mockData[+bookingId.toString()];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data || this.mockData[0]);
    }
    getApprovals(bookingId) {
        return this.getEntity(bookingId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.approvalList;
        }));
    }
    getBookingDetail(bookingId) {
        return this.getEntity(bookingId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.bookingDetailList;
        }));
    }
    getOpportunitySummary(bookingId) {
        return this.getEntity(bookingId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.opportunitySummary;
        }));
    }
    getMainAsset(bookingId) {
        return this.getEntity(bookingId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.mainAsset;
        }));
    }
};
MockBookingEntityService.ctorParameters = () => [];
MockBookingEntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MockBookingEntityService);



/***/ }),

/***/ "rErh":
/*!*******************************************!*\
  !*** ./src/app/dms/services/inventory.ts ***!
  \*******************************************/
/*! exports provided: bookingIdFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingIdFormat", function() { return bookingIdFormat; });
function bookingIdFormat(booking_id) {
    let id = '' + booking_id;
    while (id.length < 4) {
        id = '0' + id;
    }
    return 'BK-' + id;
}


/***/ }),

/***/ "rHfp":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/booking-entity/booking-detail/booking-detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--/.col-->\n\n  <!--/.col-->\n  <div class=\"form-group\">\n    <p-accordion class=\"p-accordion\">\n        <p-accordionTab class=\"p-accordionTab\" [selected]=\"true\">\n            <p-header class=\"p-header\">\n                <i class=\"cil-info\"></i>\n                <span class=\"accordion-header\">Booking Details</span>\n            </p-header>\n                  <div *ngIf=\"bookingDetailList; else empty\">\n                    <table class=\"table table-borderless\">\n                      <tbody>\n                        <tr>\n                          <td>Status</td>\n                          <td>{{ bookingDetailList.status }}</td>\n                          <td>Request Date</td>\n                          <td>{{ bookingDetailList.request_date }}</td>\n                        </tr>\n                        <tr>\n                          <td>Booking Reason</td>\n                          <td>{{ bookingDetailList.booking_reason }}</td>\n                            <td>Branch/ Site</td>\n                            <td>{{ bookingDetailList.branch }}</td>\n                          </tr>\n                        <tr>\n                          <td>Booking No</td>\n                          <td>{{ bookingDetailList.booking_no }}</td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                            <td>Customer</td>\n                            <td>{{ bookingDetailList.customer }}</td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td>Preferred Date of Delivery </td>\n                            <td>{{ bookingDetailList.preferred_date_of_delivery }}</td>\n                            <td>Preferred Date of Collection </td>\n                            <td>{{ bookingDetailList.preferred_date_of_collection }}</td>\n                          </tr>\n                          <tr>\n                            <td>Demo Duration</td>\n                            <td>{{ bookingDetailList.demo_duration }}</td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td>Ship-to Department/ Ward</td>\n                            <td>{{ bookingDetailList.department }}</td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td>Shipment to Contact Name</td>\n                            <td>{{ bookingDetailList.ship_to_contact_name }}</td>\n                            <td>Ship to Contact Number</td>\n                            <td>{{ bookingDetailList.ship_to_contact_number }}</td>\n                          </tr>\n                          <tr>\n                            <td>Remarks</td>\n                            <td>{{ bookingDetailList.remarks }}</td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td>Loan start date</td>\n                            <td>{{ bookingDetailList.loan_start_date }}</td>\n                            <td>Loan end date</td>\n                            <td>{{ bookingDetailList.loan_end_date }}</td>\n                          </tr>\n                      </tbody>\n                    </table>\n                  </div>\n          <ng-template #empty>\n            <p>Details not set...</p>\n          </ng-template>\n        </p-accordionTab>\n    </p-accordion>\n  </div>\n");

/***/ }),

/***/ "rotC":
/*!*****************************************************************!*\
  !*** ./src/app/dms/components/inventory/inventory.component.ts ***!
  \*****************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventory.component.html */ "6SsL");
/* harmony import */ var _inventory_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component.scss */ "IWx3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_mock_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mock-inventory.service */ "N7hL");
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/inventory */ "rErh");






let InventoryComponent = class InventoryComponent {
    constructor(api) {
        this.api = api;
        this.menuItems = [
            {
                label: 'On-Hand',
                icon: 'pi pi-home',
            }, {
                label: 'Incoming',
                icon: 'pi pi-clock',
            }, {
                label: 'Archived',
                icon: 'pi pi-file-excel',
            }
        ];
        this.activeItem = this.menuItems[0];
        this.pageItems = 10;
        this.search_text = '';
        this.formatBooking = _services_inventory__WEBPACK_IMPORTED_MODULE_5__["bookingIdFormat"];
    }
    ngOnInit() {
        this.loading = true;
        this.api.getList().subscribe((response) => {
            if (response) {
                this.inventoryList = response;
            }
            console.log(response);
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
    onSearch() {
        // console.log('searching for:', this.search_text);
    }
};
InventoryComponent.ctorParameters = () => [
    { type: _services_mock_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MockInventoryService"] }
];
InventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dms-inventory',
        template: _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_mock_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MockInventoryService"]])
], InventoryComponent);



/***/ }),

/***/ "t24s":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/booking-entity/status-log/status-log.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--/.col-->\n\n  <!--/.col-->\n  <div class=\"form-group\">\n    <p-accordion class=\"p-accordion\">\n        <p-accordionTab class=\"p-accordionTab\" [selected]=\"true\">\n            <p-header class=\"p-header\">\n                <i class=\"cil-briefcase\"></i>\n                <span class=\"accordion-header\">Status Log</span>\n            </p-header>\n                  <div>\n                    \n                  </div>\n        </p-accordionTab>\n    </p-accordion>\n  </div>");

/***/ }),

/***/ "te49":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dms/components/bookings/form/form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form\n            [formGroup]=\"formBooking\"\n            (ngSubmit)=\"onSave()\"\n            class=\"form-horizontal\"\n          >\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 col-form-label\">Status</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">DRAFT</p>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 col-form-label\" for=\"booking-reason\"\n                >Booking reason</label\n              >\n\n              <div class=\"col-md-4\">\n                <select\n                  formControlName=\"booking_reason\"\n                  (change)=\"changeReason($event.target.value)\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"selectedBooking\"\n                >\n                  <option\n                    [value]=\"reason.id\"\n                    *ngFor=\"let reason of bookingReasons\"\n                  >\n                    {{ reason.name }}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 col-form-label\">Request Date</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">{{ curDate }}</p>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <form\n                          [formGroup]=\"formBooking\"\n                          (ngSubmit)=\"onSave()\"\n                          class=\"form-horizontal\"\n                        >\n                          <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\"\n                                  >Status</label\n                                >\n                                <div class=\"col-md-8\">\n                                  <p class=\"form-control-static\">\n                                    {{ bookingDetailList.status }}\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                              <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\"\n                                  >Request Date</label\n                                >\n                                <div class=\"col-md-8\">\n                                  <p class=\"form-control-static\">\n                                    {{ bookingDetailList.request_date }}\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </form>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                              <label\n                                class=\"col-md-4 col-form-label\"\n                                for=\"booking-reason\"\n                                >Booking reason</label\n                              >\n                              <div class=\"col-md-8\">\n                                <select\n                                  formControlName=\"booking_reason\"\n                                  class=\"form-control\"\n                                >\n                                  <option value=\"\">Please select</option>\n                                  <option value=\"demo\">Demo</option>\n                                  <option value=\"events\">Events</option>\n                                  <option value=\"training\">Training</option>\n                                  <option value=\"contigencies\">\n                                    Contigencies\n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-4 col-form-label\"\n                                >Booking No</label\n                              >\n                              <div class=\"col-md-8\">\n                                <p class=\"form-control-static\">\n                                  {{ bookingDetailList.booking_no }}\n                                </p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\">Customer</label>\n                        <div class=\"col-md-4\">\n                          <select\n                            formControlName=\"customer\"\n                            class=\"form-control\"\n                          >\n                            <option value=\"\">Please select</option>\n                            <option\n                              *ngFor=\"let customer of customers\"\n                              value=\"{{ customer.id }}\"\n                            >\n                              {{ customer.company_name }}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"branch\"\n                          >Branch/site</label\n                        >\n                        <div class=\"col-md-4\">\n                          <input\n                            type=\"text\"\n                            formControlName=\"branch\"\n                            class=\"form-control\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group row\">\n                            <label\n                              class=\"col-md-4 col-form-label\"\n                              for=\"date-of-delivery\"\n                              >Preferred Date of Delivery\n                            </label>\n                            <div class=\"col-md-4\">\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"date_of_delivery\"\n                                type=\"datetime-local\"\n                                name=\"date-of-delivery\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group row\">\n                            <label\n                              class=\"col-md-4 col-form-label\"\n                              for=\"date-of-collection\"\n                              >Preferred Date of Collection\n                            </label>\n                            <div class=\"col-md-6\">\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"date_of_collection\"\n                                type=\"datetime-local\"\n                                name=\"date-of-collection\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label\n                          class=\"col-md-2 col-form-label\"\n                          for=\"demo-duration\"\n                          >Demo Duration *</label\n                        >\n                        <div class=\"col-md-2\">\n                          <input\n                            type=\"number\"\n                            formControlName=\"demo_duration\"\n                            class=\"form-control\"\n                          />\n                        </div>\n                        <div class=\"col-md-2\">months</div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"department\"\n                          >Ship-to Department/ Warde</label\n                        >\n                        <div class=\"col-md-4\">\n                          <input\n                            type=\"text\"\n                            formControlName=\"department\"\n                            class=\"form-control\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group row\">\n                            <label\n                              class=\"col-md-4 col-form-label\"\n                              for=\"contact-name\"\n                              >Ship to Contact Name\n                            </label>\n                            <div class=\"col-md-8\">\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"contact_name\"\n                                type=\"text\"\n                                name=\"contact-name\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group row\">\n                            <label\n                              class=\"col-md-4 col-form-label\"\n                              for=\"contact-number\"\n                              >Ship-To Contact Number\n                            </label>\n                            <div class=\"col-md-6\">\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"contact_number\"\n                                type=\"text\"\n                                name=\"contact-number\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div\n                        [ngClass]=\"\n                          selectedBooking == 2\n                            ? 'opportunityAppear'\n                            : 'opportunity'\n                        \"\n                        [(ngModel)]=\"selectedBooking\"\n                      >\n                        <p>\n                          <strong class=\"opportunityTitle\">Opportunity</strong>\n                        </p>\n\n                        <hr />\n\n                        <div class=\"opportunityBoxes\">\n                          <div class=\"opportunityBoxesSame\">\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\"\n                                >Opportunity ID-Version</label\n                              >\n                              <div>\n                                <input\n                                  type=\"text\"\n                                  class=\"form-control oppoturiniIdIput\"\n                                />\n                              </div>\n                            </div>\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\"\n                                >Initiator</label\n                              >\n                              <select\n                                formControlName=\"default_initiator\"\n                                (change)=\"changeAnswer($event.target.value)\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"defaultAnswer\"\n                              >\n                                <option\n                                  [value]=\"answer.id\"\n                                  *ngFor=\"let answer of defaultAnswers\"\n                                >\n                                  {{ answer.ans }}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n\n                          <div class=\"opportunityBoxesSame\">\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\">\n                                Winning Probability\n                              </label>\n\n                              <select\n                                formControlName=\"default_percentage\"\n                                (change)=\"changePercentage($event.target.value)\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"selectedPercentage\"\n                              >\n                                <option\n                                  [value]=\"percentage.id\"\n                                  *ngFor=\"let percentage of defaultPercentages\"\n                                >\n                                  {{ percentage.value }}\n                                </option>\n                              </select>\n                            </div>\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\"\n                                >Competitor participate in Demo?</label\n                              >\n                              <select\n                                formControlName=\"default_answer\"\n                                (change)=\"changeAnswer($event.target.value)\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"defaultAnswer\"\n                              >\n                                <option\n                                  [value]=\"answer.id\"\n                                  *ngFor=\"let answer of defaultAnswers\"\n                                >\n                                  {{ answer.ans }}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n\n                          <div class=\"opportunityBoxesSame\">\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\"\n                                >Priority</label\n                              >\n                              <select\n                                formControlName=\"default_priority\"\n                                (change)=\"changePrioritye($event.target.value)\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"defaultPriority\"\n                              >\n                                <option\n                                  [value]=\"priority.id\"\n                                  *ngFor=\"let priority of defaultPriorities\"\n                                >\n                                  {{ priority.value }}\n                                </option>\n                              </select>\n                            </div>\n                            <div class=\"opportunityBoxesSameFirst\">\n                              <label for=\"\" class=\"opportunityBoxesLabel\"\n                                >IdsMed Sequence of Demo</label\n                              >\n                              <select\n                                formControlName=\"default_sequence\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"defaultPriority\"\n                              >\n                                <option\n                                  [value]=\"priority.id\"\n                                  *ngFor=\"let priority of defaultPriorities\"\n                                >\n                                  {{ priority.value }}\n                                </option>\n                              </select>\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <div class=\"form-group row\">\n                                    <label\n                                      class=\"col-md-4 col-form-label\"\n                                      for=\"date-of-delivery\"\n                                      >Preferred Date of Delivery\n                                    </label>\n                                    <div class=\"col-md-6\">\n                                      <input\n                                        class=\"form-control\"\n                                        formControlName=\"date_of_delivery\"\n                                        type=\"datetime-local\"\n                                      />\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <div class=\"form-group row\">\n                                    <label\n                                      class=\"col-md-4 col-form-label\"\n                                      for=\"date-of-collection\"\n                                      >Preferred Date of Collection\n                                    </label>\n                                    <div class=\"col-md-6\">\n                                      <input\n                                        class=\"form-control\"\n                                        formControlName=\"date_of_collection\"\n                                        type=\"datetime-local\"\n                                        (change)=\"onDuration()\"\n                                      />\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                <label\n                                  class=\"col-md-2 col-form-label\"\n                                  for=\"demo-duration\"\n                                  >Demo Duration *</label\n                                >\n                                <div class=\"col-md-2\">\n                                  <input\n                                    type=\"number\"\n                                    formControlName=\"demo_duration\"\n                                    class=\"form-control\"\n                                    [value]=\"duration\"\n                                  />\n                                </div>\n                                <div class=\"col-md-2\">Days</div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <div class=\"form-group row\">\n                                    <label\n                                      class=\"col-md-4 col-form-label\"\n                                      for=\"department\"\n                                      >Ship-to Department/ Warde</label\n                                    >\n                                    <div class=\"col-md-8\">\n                                      <input\n                                        type=\"text\"\n                                        formControlName=\"department\"\n                                        class=\"form-control\"\n                                      />\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <div class=\"form-group row\">\n                                    <label\n                                      class=\"col-md-4 col-form-label\"\n                                      for=\"location\"\n                                      >Ship-to location</label\n                                    >\n                                    <div class=\"col-md-8\">\n                                      <input\n                                        type=\"text\"\n                                        formControlName=\"location\"\n                                        class=\"form-control\"\n                                      />\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class=\"opportunitiesText\">\n                                <div><label for=\"\">Point Point</label></div>\n                                <div>\n                                  <textarea\n                                    name=\"\"\n                                    id=\"\"\n                                    cols=\"30\"\n                                    rows=\"4\"\n                                    style=\"resize: none\"\n                                  ></textarea>\n                                </div>\n                              </div>\n\n                              <div class=\"opportunitiesText\">\n                                <div>\n                                  <label for=\"\">Features To highlight</label>\n                                </div>\n                                <div>\n                                  <textarea\n                                    name=\"\"\n                                    id=\"\"\n                                    cols=\"30\"\n                                    rows=\"4\"\n                                    style=\"resize: none\"\n                                  ></textarea>\n                                </div>\n                              </div>\n\n                              <div class=\"opportunitiesText\">\n                                <div><label for=\"\">users Feedback</label></div>\n                                <div>\n                                  <textarea\n                                    name=\"\"\n                                    id=\"\"\n                                    cols=\"30\"\n                                    rows=\"4\"\n                                    style=\"resize: none\"\n                                  ></textarea>\n                                </div>\n                              </div>\n                            </div>\n\n                            <div\n                              class=\"\n                                custom-footer\n                                d-flex\n                                justify-content-center\n                              \"\n                            >\n                              <button\n                                type=\"submit\"\n                                class=\"btn btn-sm btn-primary\"\n                              >\n                                <i class=\"fa fa-plus\"></i> Save\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!--/.row-->\n                  </div>\n                  <div\n                    id=\"success\"\n                    bsModal\n                    #successModal=\"bs-modal\"\n                    class=\"modal fade\"\n                    tabindex=\"-1\"\n                    role=\"dialog\"\n                    aria-labelledby=\"myModalLabel\"\n                    aria-hidden=\"true\"\n                  >\n                    <div class=\"modal-dialog modal-success\" role=\"document\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <h4 class=\"modal-title\">Success</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                          <p>{{ alertBody }}</p>\n                        </div>\n                      </div>\n                      <!-- /.modal-content -->\n                    </div>\n                    <!-- /.modal-dialog -->\n                  </div>\n                  <!-- /.modal -->\n\n                  <div\n                    bsModal\n                    #dangerModal=\"bs-modal\"\n                    class=\"modal fade\"\n                    tabindex=\"-1\"\n                    role=\"dialog\"\n                    aria-labelledby=\"myModalLabel\"\n                    aria-hidden=\"true\"\n                  >\n                    <div class=\"modal-dialog modal-danger\" role=\"document\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <h4 class=\"modal-title\">Error</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                          <p>{{ alertBody }}</p>\n                        </div>\n                        <div class=\"modal-footer\"></div>\n                      </div>\n                      <!-- /.modal-content -->\n                    </div>\n                    <!-- /.modal-dialog -->\n                  </div>\n                  <!-- /.modal -->\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "uhYt":
/*!*****************************************************!*\
  !*** ./src/app/dms/services/booking-status.enum.ts ***!
  \*****************************************************/
/*! exports provided: BookingStatus, statusFromNumber, statusToNumber, statusToText, statusIncrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingStatus", function() { return BookingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusFromNumber", function() { return statusFromNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusToNumber", function() { return statusToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusToText", function() { return statusToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusIncrement", function() { return statusIncrement; });
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["unknown"] = "Unknown";
    BookingStatus["draft"] = "Draft";
    BookingStatus["submitted"] = "Submitted";
    BookingStatus["reviewed"] = "MSC Reviewed";
    BookingStatus["conflicted"] = "Conflicted";
    BookingStatus["declined"] = "Declined";
    BookingStatus["endorsed"] = "MSC Reviewed (+Country)";
    BookingStatus["accepted"] = "Provisionally Accepted";
    BookingStatus["confirmed"] = "Confirmed";
    BookingStatus["archived"] = "Archived";
})(BookingStatus || (BookingStatus = {}));
function statusFromNumber(input) {
    const list = Object.values(BookingStatus);
    return input >= 0 && input < list.length
        ? list[input] : BookingStatus.unknown;
}
function statusToNumber(input) {
    const keys = Object.keys(BookingStatus);
    if (isNaN(+input)) {
        let index = keys.indexOf(input);
        if (index < 0) {
            index = Object.values(BookingStatus).indexOf(input);
        }
        return index;
    }
    return input;
}
/**
 * Converts given status-key to textual-description.
 *
 * @param input Booking's status key.
 * @return Status's textual description.
 */
function statusToText(input) {
    const number = statusToNumber(input);
    return number
        + ' Raising Booking Request - ' + statusFromNumber(number);
}
function statusIncrement(input) {
    return statusFromNumber(statusToNumber(input) + 1);
}


/***/ }),

/***/ "ur9H":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/opportunity-booking-form/opportunity-form/opportunity-form.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHBvcnR1bml0eS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vNf9":
/*!*********************************************************!*\
  !*** ./src/app/dms/services/mock-equipments.service.ts ***!
  \*********************************************************/
/*! exports provided: MockEquipmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockEquipmentsService", function() { return MockEquipmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let MockEquipmentsService = class MockEquipmentsService {
    constructor() {
        this.mockData = [
            {
                id: BigInt(123),
                name: 'First Product',
                sku: 'd-sku',
                quantity: 7,
                uom: 'd-uom',
                availability: 'd-avail',
                expected_sale_price: 200.5,
                available_quantity: 7,
                cost: 100.50,
                serial_no: 'd-serial',
            },
            {
                id: BigInt(321),
                name: 'Another Product',
                sku: 'd-sku',
                quantity: 7,
                uom: 'd-uom',
                availability: 'd-avail',
                expected_sale_price: 150.5,
                available_quantity: 3,
                cost: 70.50,
                serial_no: 'd-serial',
            },
            {
                id: BigInt(1),
                name: 'Last Product',
                sku: 'd-sku',
                quantity: 7,
                uom: 'd-uom',
                availability: 'd-avail',
                expected_sale_price: 200.5,
                available_quantity: 50,
                cost: 100.50,
                serial_no: 'd-serial',
            }
        ];
    }
    findEquipments(query) {
        const result = [];
        const filter = query.search_text.toLowerCase();
        for (const equipment of this.mockData) {
            if (equipment.name.toLowerCase().match(filter)) {
                result.push(equipment);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result.length > 0 ? result : this.mockData);
    }
};
MockEquipmentsService.ctorParameters = () => [];
MockEquipmentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MockEquipmentsService);



/***/ }),

/***/ "wsQf":
/*!*************************************************************!*\
  !*** ./src/app/dms/services/customers/customers.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-client.service */ "gdhP");



let CustomersService = class CustomersService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getList() {
        return this.apiClient.get('customer-list');
    }
};
CustomersService.ctorParameters = () => [
    { type: _api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }
];
CustomersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]])
], CustomersService);



/***/ }),

/***/ "wzZd":
/*!************************************************************!*\
  !*** ./src/app/dms/components/calendar/calendar.module.ts ***!
  \************************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sharedModule/prime-ng.module */ "Wcfd");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/angular */ "UUxd");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ "PjKf");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ "5E5Q");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-routing.module */ "Z7j3");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar.component */ "YyA0");

// Framework.


// Dependencies.

// FullCalendar must be imported before it's plugins, else runtime-error occurs.





// Local.


_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__["default"]
]);
let CalendarModule = class CalendarModule {
};
CalendarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_9__["CalendarRoutingModule"],
            // Dependencies.
            _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__["PrimeNgModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"]
        ],
        exports: [
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"]
        ]
    })
], CalendarModule);



/***/ }),

/***/ "xCpw":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-entity/booking-detail/booking-detail.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zOhK":
/*!******************************************************************************************!*\
  !*** ./src/app/dms/components/bookings/booking-approval/booking-approval.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zzSa":
/*!***********************************!*\
  !*** ./src/app/dms/dms.module.ts ***!
  \***********************************/
/*! exports provided: DmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmsModule", function() { return DmsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedModule/prime-ng.module */ "Wcfd");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _dms_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dms-routing.module */ "MSqG");
/* harmony import */ var _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calendar/calendar.module */ "wzZd");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/providers */ "l9ch");
/* harmony import */ var _dms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dms.component */ "8u6V");
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inventory/inventory.component */ "rotC");
/* harmony import */ var _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bookings/bookings.component */ "NX/O");
/* harmony import */ var _components_bookings_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bookings/booking-form/booking-form.component */ "oez7");
/* harmony import */ var _components_bookings_form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/bookings/form/form.component */ "ipmJ");
/* harmony import */ var _components_bookings_main_asset_main_asset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/bookings/main-asset/main-asset.component */ "2Sje");
/* harmony import */ var _components_bookings_main_asset_identify_identify_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/bookings/main-asset/identify/identify.component */ "2vsr");
/* harmony import */ var _components_bookings_booking_entity_booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bookings/booking-entity/booking-detail/booking-detail.component */ "3F9r");
/* harmony import */ var _components_bookings_booking_entity_status_log_status_log_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bookings/booking-entity/status-log/status-log.component */ "TnqV");
/* harmony import */ var _components_bookings_opportunity_summary_opportunity_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bookings/opportunity-summary/opportunity-summary.component */ "4hCS");
/* harmony import */ var _components_bookings_booking_entity_booking_entity_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/bookings/booking-entity/booking-entity.component */ "fENq");
/* harmony import */ var _components_bookings_booking_approval_booking_approval_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/bookings/booking-approval/booking-approval.component */ "dygD");
/* harmony import */ var _components_approvals_approvals_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/approvals/approvals.component */ "nSyl");
/* harmony import */ var _components_widgets_expand_panel_expand_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widgets/expand-panel/expand-panel.component */ "CuDr");
/* harmony import */ var _components_bookings_main_asset_equipment_table_equipment_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/bookings/main-asset/equipment-table/equipment-table.component */ "HCep");
/* harmony import */ var _components_bookings_opportunity_booking_form_opportunity_booking_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/bookings/opportunity-booking-form/opportunity-booking-form.component */ "80P3");
/* harmony import */ var _components_bookings_opportunity_booking_form_opportunity_form_opportunity_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/bookings/opportunity-booking-form/opportunity-form/opportunity-form.component */ "2f3j");

// Framework.
//


// Dependencies.
//




// Local.
//




















let DmsModule = class DmsModule {
};
DmsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dms_component__WEBPACK_IMPORTED_MODULE_10__["DmsComponent"],
            _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__["InventoryComponent"],
            _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"],
            _components_bookings_booking_entity_booking_entity_component__WEBPACK_IMPORTED_MODULE_20__["BookingEntityComponent"],
            _components_bookings_booking_approval_booking_approval_component__WEBPACK_IMPORTED_MODULE_21__["BookingApprovalComponent"],
            _components_approvals_approvals_component__WEBPACK_IMPORTED_MODULE_22__["ApprovalsComponent"],
            _components_bookings_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__["BookingFormComponent"],
            _components_bookings_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"],
            _components_bookings_main_asset_main_asset_component__WEBPACK_IMPORTED_MODULE_15__["MainAssetComponent"],
            _components_bookings_booking_entity_booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_17__["BookingDetailComponent"],
            _components_bookings_opportunity_summary_opportunity_summary_component__WEBPACK_IMPORTED_MODULE_19__["OpportunitySummaryComponent"],
            _components_bookings_booking_entity_status_log_status_log_component__WEBPACK_IMPORTED_MODULE_18__["StatusLogComponent"],
            _components_bookings_main_asset_main_asset_component__WEBPACK_IMPORTED_MODULE_15__["MainAssetComponent"],
            _components_widgets_expand_panel_expand_panel_component__WEBPACK_IMPORTED_MODULE_23__["ExpandPanelComponent"],
            _components_bookings_main_asset_equipment_table_equipment_table_component__WEBPACK_IMPORTED_MODULE_24__["EquipmentTableComponent"],
            _components_bookings_main_asset_identify_identify_component__WEBPACK_IMPORTED_MODULE_16__["IdentifyComponent"],
            _components_bookings_opportunity_booking_form_opportunity_booking_form_component__WEBPACK_IMPORTED_MODULE_25__["OpportunityBookingFormComponent"],
            _components_bookings_opportunity_booking_form_opportunity_form_opportunity_form_component__WEBPACK_IMPORTED_MODULE_26__["OpportunityFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dms_routing_module__WEBPACK_IMPORTED_MODULE_7__["DmsRoutingModule"],
            _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
            // Dependencies.
            _sharedModule_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__["PrimeNgModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        providers: [
            ..._services_providers__WEBPACK_IMPORTED_MODULE_9__["providersForEnvironment"]
        ]
    })
], DmsModule);



/***/ })

}]);
//# sourceMappingURL=dms-dms-module-es2015.js.map