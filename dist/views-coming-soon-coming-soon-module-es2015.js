(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-coming-soon-coming-soon-module"],{

/***/ "3x0d":
/*!*********************************************************!*\
  !*** ./src/app/views/coming-soon/coming-soon.module.ts ***!
  \*********************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "y1st");
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coming-soon-routing.module */ "R8eI");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coming-soon.component */ "aMa8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "ZRSf");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "c/fn");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/organizationchart */ "O5h+");










let ComingSoonModule = class ComingSoonModule {
};
ComingSoonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _coming_soon_component__WEBPACK_IMPORTED_MODULE_5__["ComingSoonComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_9__["OrganizationChartModule"],
            _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_4__["ComingSoonRoutingModule"]
        ]
    })
], ComingSoonModule);



/***/ }),

/***/ "O5h+":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-organizationchart.js ***!
  \********************************************************************/
/*! exports provided: OrganizationChart, OrganizationChartModule, OrganizationChartNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChart", function() { return OrganizationChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartModule", function() { return OrganizationChartModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function() { return OrganizationChartNode; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "hhfa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");









const _c0 = ["pOrganizationChartNode", ""];
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.node.label);
} }
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.chart.getTemplateForNode(ctx_r2.node))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.node));
} }
const _c2 = function (a0, a1) { return { "pi-chevron-down": a0, "pi-chevron-up": a1 }; };
function OrganizationChartNode_tbody_0_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationChartNode_tbody_0_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.toggleNode($event, ctx_r8.node); })("keydown.enter", function OrganizationChartNode_tbody_0_a_6_Template_a_keydown_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.toggleNode($event, ctx_r10.node); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, ctx_r3.node.expanded, !ctx_r3.node.expanded));
} }
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r4.colspan);
} }
const _c3 = function (a0) { return { "p-organizationchart-line-top": a0 }; };
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const first_r13 = ctx.first;
    const last_r14 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, !first_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, !last_r14));
} }
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 6, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.node.children);
} }
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", child_r15);
} }
const _c4 = function (a1, a2) { return { "p-organizationchart-node-content": true, "p-organizationchart-selectable-node": a1, "p-highlight": a2 }; };
function OrganizationChartNode_tbody_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onNodeClick($event, ctx_r16.node); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrganizationChartNode_tbody_0_a_6_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrganizationChartNode_tbody_0_td_14_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.node.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c4, ctx_r0.chart.selectionMode && ctx_r0.node.selectable !== false, ctx_r0.isSelected()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.leaf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.node.children && ctx_r0.node.children.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.node.children && ctx_r0.node.children.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.node.children);
} }
function OrganizationChart_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r0.root);
} }
const _c5 = function (a1) { return { "p-organizationchart p-component": true, "p-organizationchart-preservespace": a1 }; };
class OrganizationChartNode {
    constructor(chart, cd) {
        this.cd = cd;
        this.chart = chart;
        this.subscription = this.chart.selectionSource$.subscribe(() => {
            this.cd.markForCheck();
        });
    }
    get leaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    get colspan() {
        return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
    }
    onNodeClick(event, node) {
        this.chart.onNodeClick(event, node);
    }
    toggleNode(event, node) {
        node.expanded = !node.expanded;
        if (node.expanded)
            this.chart.onNodeExpand.emit({ originalEvent: event, node: this.node });
        else
            this.chart.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        event.preventDefault();
    }
    isSelected() {
        return this.chart.isSelected(this.node);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OrganizationChartNode.ɵfac = function OrganizationChartNode_Factory(t) { return new (t || OrganizationChartNode)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => OrganizationChart)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OrganizationChartNode.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationChartNode, selectors: [["", "pOrganizationChartNode", ""]], inputs: { node: "node", root: "root", first: "first", last: "last" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngClass", "click"], ["tabindex", "0", "class", "p-node-toggler", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-organizationchart-lines", 3, "ngClass"], [1, "p-organizationchart-line-down"], [1, "p-organizationchart-nodes", 3, "ngClass"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "p-node-toggler", 3, "click", "keydown.enter"], [1, "p-node-toggler-icon", "pi", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "p-organizationchart-line-left", 3, "ngClass"], [1, "p-organizationchart-line-right", 3, "ngClass"], ["colspan", "2"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChartNode_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrganizationChartNode_tbody_0_Template, 15, 20, "tbody", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], OrganizationChartNode], styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('childState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
OrganizationChartNode.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => OrganizationChart),] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
OrganizationChartNode.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    first: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    last: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationChartNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[pOrganizationChartNode]',
                template: `
        <tbody *ngIf="node">
            <tr>
                <td [attr.colspan]="colspan">
                    <div [class]="node.styleClass" [ngClass]="{'p-organizationchart-node-content': true, 'p-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'p-highlight':isSelected()}"
                        (click)="onNodeClick($event,node)">
                        <div *ngIf="!chart.getTemplateForNode(node)">{{node.label}}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: {$implicit: node}"></ng-container>
                        </div>
                        <a *ngIf="!leaf" tabindex="0" class="p-node-toggler" (click)="toggleNode($event, node)" (keydown.enter)="toggleNode($event, node)">
                            <i class="p-node-toggler-icon pi" [ngClass]="{'pi-chevron-down': node.expanded, 'pi-chevron-up': !node.expanded}"></i>
                        </a>
                    </div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <td [attr.colspan]="colspan">
                    <div class="p-organizationchart-line-down"></div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [attr.colspan]="colspan">
                        <div class="p-organizationchart-line-down"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                        <td class="p-organizationchart-line-left" [ngClass]="{'p-organizationchart-line-top':!first}">&nbsp;</td>
                        <td class="p-organizationchart-line-right" [ngClass]="{'p-organizationchart-line-top':!last}">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-nodes" [@childState]="'in'">
                <td *ngFor="let child of node.children" colspan="2">
                    <table class="p-organizationchart-table" pOrganizationChartNode [node]="child"></table>
                </td>
            </tr>
        </tbody>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('childState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => OrganizationChart)]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], root: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], first: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], last: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class OrganizationChart {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.preserveSpace = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectionSource$ = this.selectionSource.asObservable();
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
        if (this.initialized)
            this.selectionSource.next();
    }
    get root() {
        return this.value && this.value.length ? this.value[0] : null;
    }
    ngAfterContentInit() {
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach((item) => {
            this.templateMap[item.getType()] = item.template;
        });
        this.initialized = true;
    }
    getTemplateForNode(node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    }
    onNodeClick(event, node) {
        let eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
                if (selected) {
                    this.selection = this.selection.filter((val, i) => i != index);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = [...this.selection || [], node];
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            this.selectionChange.emit(this.selection);
            this.selectionSource.next();
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
}
OrganizationChart.ɵfac = function OrganizationChart_Factory(t) { return new (t || OrganizationChart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OrganizationChart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationChart, selectors: [["p-organizationChart"]], contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, inputs: { preserveSpace: "preserveSpace", selection: "selection", value: "value", style: "style", styleClass: "styleClass", selectionMode: "selectionMode" }, outputs: { selectionChange: "selectionChange", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse" }, decls: 2, vars: 7, consts: [[3, "ngStyle", "ngClass"], ["class", "p-organizationchart-table", "pOrganizationChartNode", "", 3, "node", 4, "ngIf"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationChart_table_1_Template, 1, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c5, ctx.preserveSpace));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.root);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], OrganizationChartNode], encapsulation: 2, changeDetection: 0 });
OrganizationChart.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
OrganizationChart.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preserveSpace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onNodeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onNodeUnselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onNodeExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onNodeCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationChart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-organizationChart',
                template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-organizationchart p-component': true, 'p-organizationchart-preservespace': preserveSpace}">
            <table class="p-organizationchart-table" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { preserveSpace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onNodeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onNodeUnselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onNodeExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onNodeCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]]
        }] }); })();
class OrganizationChartModule {
}
OrganizationChartModule.ɵfac = function OrganizationChartModule_Factory(t) { return new (t || OrganizationChartModule)(); };
OrganizationChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrganizationChartModule });
OrganizationChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrganizationChartModule, { declarations: function () { return [OrganizationChart, OrganizationChartNode]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [OrganizationChart, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [OrganizationChart, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [OrganizationChart, OrganizationChartNode]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-organizationchart.js.map

/***/ }),

/***/ "R8eI":
/*!*****************************************************************!*\
  !*** ./src/app/views/coming-soon/coming-soon-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonRoutingModule", function() { return ComingSoonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon.component */ "aMa8");




const routes = [
    { path: '', component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_3__["ComingSoonComponent"] },
    { path: '**', redirectTo: '' }
];
let ComingSoonRoutingModule = class ComingSoonRoutingModule {
};
ComingSoonRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComingSoonRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-coming-soon-coming-soon-module-es2015.js.map