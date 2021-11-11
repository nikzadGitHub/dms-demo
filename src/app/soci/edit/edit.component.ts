import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Term } from "../../quote/create/terms";
import { BillingList } from "../../quote/edit/billing-list";
import { Product } from "../../quote/products/products";
import { Quote } from "../../quote/quote";
import { QuoteService } from "../../quote/quote.service";
import { SociService } from "../soci.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  @ViewChild("billingRemarkModal") billingRemarkModal: ModalDirective;
  @ViewChild("paymentRemarkModal") paymentRemarkModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;

  paymentCurrentIndex: number;
  billingRemarks: string;
  paymentRemarks: string;
  remarkIndex: number;
  dangerBody: string;
  modal_type: string = "";
  show: boolean;
  filteredProducts: Product[];
  controller: any;
  selectedProductAdvanced: Product[] = [];
  enableEdit: boolean[] = [];
  termSelected: number;
  quotations: Quote[];
  terms: Term[];
  soci_id: number;
  company_details: string[] = [];
  fromDate: Date;
  toDate: Date;
  form: FormGroup;
  billingList: BillingList[] = [];
  sub_total: number;
  soci_data: any;
  standerd_payment_term: any;
  is_payment_term_eidt = false;
  is_delivery_payment_term_eidt = false;
  standard_term: any;
  default_delivery_term_from: Date;
  default_delivery_term_to: Date;
  standard_delivery_term: any;
  payment_term_from: Date;
  default_payment_term_from: Date;
  delivery_term_from: Date;
  default_delivery_term = 0;
  billing_milestone: any[] = [];
  payment_schedules: any[] = [];
  additional_costs: any[] = [];
  billing_instruction: any;
  product: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private sociService: SociService,
    private formBuilder: FormBuilder
  ) {
    // this.quoteService.create("3630").subscribe((data) => {
    //   this.terms = data["data"];
    // });
    this.form = this.formBuilder.group({
      standard_payment_term: 0,
      standard_delivery_term: 0,
      billing_id: "",
      stage: "",
      percentage: "",
      amount: "",
      quantity: 0,
      status: "",
      remarks: "",
      schedule: "",
      soc_payment_term: "",
      description: "",
      unit_price: "",
      total_price: "",
      discount: "",
      sku: "",
      name: "",
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((event) => {
      this.soci_id = event.sociId;
      this.getSociData(this.soci_id);
      // this.form = this.formBuilder.group({
      //   standard_payment_term: this.termSelected,
      //   fromDate: this.fromDate,
      //   toDate: this.toDate,
      //   billings: this.formBuilder.array([]),
      //   payments: this.formBuilder.array([]),
      //   addCosts: this.formBuilder.array([]),
      //   products: this.formBuilder.array([]),
      // });
      // this.form.get("products").disable();
    });
  }

  getSociData(soci_id) {
    this.sociService.getSpecificSoci(soci_id).subscribe((res) => {
      console.log("res:", res);
      this.soci_data = res["data"];
      // standard_term
      this.standard_term = res["data"]["standard_terms"];
      this.standerd_payment_term =
        res["data"]["standard_terms"]["payment_term"];
      this.payment_term_from =
        res["data"]["standard_terms"]["payment_term_from"];
      this.default_payment_term_from =
        res["data"]["standard_terms"]["default_payment_term_from"];
      this.default_delivery_term =
        res["data"]["standard_terms"]["default_delivery_term"];
      this.default_delivery_term_from =
        res["data"]["standard_terms"]["default_delivery_term_from"];
      this.delivery_term_from =
        res["data"]["standard_terms"]["delivery_term_from"];
      this.standard_delivery_term =
        res["data"]["standard_terms"]["delivery_term"];
        // billing_milestone
      this.billing_milestone = res["data"]["billing_milestones"];
      // payment_schedules
      this.payment_schedules = res["data"]["payment_schedules"];
      // additional_costs
      this.additional_costs = res["data"]["additional_costs"];
      // billing_instruction
      this.billing_instruction = res["data"]["billing_instruction"];
      // products
      this.product = res["data"]["products"]
      this.form.patchValue({
        standard_payment_term: this.standerd_payment_term,
        standard_delivery_term: this.standard_delivery_term,
      });
      // this.quotations = res["data"]["quotes"];
      // this.setInitialValue();
      // this.initData();
    });
  }
  editPaymentTerm() {
    this.is_payment_term_eidt = true;
  }
  editDefaultPaymentTerm() {
    this.is_delivery_payment_term_eidt = true;
  }
  get form_controls() {
    // console.log(this.form.controls)
    return this.form.controls;
  }

  setInitialValue() {
    this.enableEdit["billing"] = false;
    this.enableEdit["payment"] = false;
    this.enableEdit["product"] = false;
    this.enableEdit["addCost"] = false;
    this.company_details["company_name"] = this.quotations[0].company;
    this.company_details["quote_id"] = this.quotations[0].quote_id;
    this.f.standard_payment_term.setValue(
      this.quotations[0].standard_payment_term
    );
    this.f.fromDate.setValue(this.quotations[0].fromDate);
    this.f.toDate.setValue(this.quotations[0].toDate);
    this.fromDate = this.quotations[0].fromDate;
    this.toDate = this.quotations[0].toDate;
    this.termSelected = this.terms.find(
      (x) => x.id == this.quotations[0].standard_payment_term
    ).no_of_days;
    this.dateInit();
  }

  initData() {
    this.quotations.forEach((element) => {
      element.billing_milestones.forEach((billing) => {
        this.billings().push(this.existingBillings(billing));
      });
      element.payment_schedules.forEach((payment) => {
        this.payments().push(this.existingPayments(payment));
      });
      element.additional_costs.forEach((addCost) => {
        this.addCosts().push(this.existingCosts(addCost));
      });
      element.products.forEach((product) => {
        this.products().push(this.existingProducts(product));
        this.selectedProductAdvanced.push(product);
      });
      this.subTotal(this.addCosts().controls);
    });
  }

  dateInit() {
    this.fromDate = new Date(this.quotations[0].fromDate);
    this.toDate = new Date(this.quotations[0].toDate);
  }

  //---------------- Billings Milestone -------------------

  billings(): FormArray {
    return this.form.get("billings") as FormArray;
  }

  existingBillings(billing) {
    let bill = new BillingList();
    bill["billing_id"] = billing["billing_id"];
    bill["amount"] = billing["amount"];
    this.billingList.push(bill);

    return this.formBuilder.group({
      id: billing.id,
      billing_id: [{ value: billing.billing_id, disabled: true }],
      stage: [{ value: billing.stage, disabled: true }],
      percentage: [{ value: billing.percentage, disabled: true }],
      amount: [{ value: billing.amount, disabled: true }],
      status: [{ value: billing.status, disabled: true }],
      remarks: [{ value: billing.remarks, disabled: true }],
      quote_id: billing.quote_id,
    });
  }

  newBillings(): FormGroup {
    return this.formBuilder.group({
      billing_id: [{ value: "", disabled: true }],
      stage: [{ value: "", disabled: true }],
      percentage: [{ value: "", disabled: true }],
      amount: [{ value: "", disabled: true }],
      status: [{ value: "", disabled: true }],
      remarks: [{ value: "", disabled: true }],
    });
  }

  addBillings() {
    this.billings().push(this.newBillings());
  }

  removeBillings(i: number) {
    this.billings().removeAt(i);
  }

  addBillingMilestone() {
    var billing_id = this.billings().controls;
    this.billingList = [];
    billing_id.forEach((test) => {
      // var data = test['controls']['billing_id'].value;
      let bill = new BillingList();
      bill["billing_id"] = test["controls"]["billing_id"].value;
      bill["amount"] = test["controls"]["amount"].value;
      this.billingList.push(bill);
    });

    this.billingList = this.billingList
      .map((item) => item)
      .filter((item, index, self) => self.indexOf(item) === index);
  }

  //---------------- End of Billings Milestone -------------------

  //---------------- Payment Schedules -------------------

  payments(): FormArray {
    return this.form.get("payments") as FormArray;
  }

  existingPayments(payment): FormGroup {
    return this.formBuilder.group({
      id: payment.id,
      billing_id: [{ value: payment.billing_id, disabled: true }],
      percentage: [{ value: payment.percentage, disabled: true }],
      schedule: [{ value: payment.schedule, disabled: true }],
      soc_payment_term: [{ value: payment.soc_payment_term, disabled: true }],
      amount: [{ value: payment.amount, disabled: true }],
      status: [{ value: payment.status, disabled: true }],
      remarks: [{ value: payment.remarks, disabled: true }],
    });
  }

  newPayments(): FormGroup {
    return this.formBuilder.group({
      billing_id: [{ value: "", disabled: true }],
      percentage: [{ value: "", disabled: true }],
      schedule: [{ value: "", disabled: true }],
      soc_payment_term: [{ value: "", disabled: true }],
      amount: [{ value: "", disabled: true }],
      status: [{ value: "", disabled: true }],
      remarks: [{ value: "", disabled: true }],
    });
  }

  addPayments() {
    this.payments().push(this.newPayments());
  }

  removePayments(i: number) {
    this.payments().removeAt(i);
  }

  //---------------- End of Payment Schedules -------------------

  //---------------- Additional Cost -------------------

  addCosts(): FormArray {
    return this.form.get("addCosts") as FormArray;
  }

  existingCosts(addCosts): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(
        { value: addCosts.id, disabled: true },
        Validators.required
      ),
      description: new FormControl(
        { value: addCosts.description, disabled: true },
        Validators.required
      ),
      quantity: new FormControl(
        { value: addCosts.quantity, disabled: true },
        Validators.required
      ),
      unit_price: new FormControl(
        { value: addCosts.unit_price, disabled: true },
        Validators.required
      ),
      total_price: new FormControl(
        { value: addCosts.total_price, disabled: true },
        Validators.required
      ),
      remarks: new FormControl(
        { value: addCosts.remarks, disabled: true },
        Validators.required
      ),
    });
  }

  newAddCosts(): FormGroup {
    return this.formBuilder.group({
      description: new FormControl(
        { value: "", disabled: true },
        Validators.required
      ),
      quantity: new FormControl(
        { value: 0, disabled: true },
        Validators.required
      ),
      unit_price: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
      total_price: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
      remarks: new FormControl(
        { value: "", disabled: true },
        Validators.required
      ),
    });
  }

  addAddCosts() {
    this.addCosts().push(this.newAddCosts());
  }

  removeAddCosts(i: number) {
    this.addCosts().removeAt(i);
  }

  addTotal(costControl) {
    costControl.total_price.setValue(
      <number>costControl.quantity.value * <number>costControl.unit_price.value
    );
  }

  subTotal(costs) {
    this.sub_total = 0.0;
    costs.forEach((element) => {
      this.sub_total += parseInt(element.controls.total_price.value);
    });
  }

  allTotal(costControl, costs) {
    this.addTotal(costControl);
    this.subTotal(costs);
  }

  //---------------- End of Additional Cost -------------------

  //---------------- Quotation Producs -------------------

  products(): FormArray {
    return this.form.get("products") as FormArray;
  }

  newProduct() {
    return this.formBuilder.group({
      name: new FormControl({ value: "", disabled: true }, Validators.required),
      sku: new FormControl({ value: "", disabled: true }, Validators.required),
      quantity: new FormControl(
        { value: "", disabled: true },
        Validators.required
      ),
      unit_price: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
      total_price: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
      discount: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
      amount: new FormControl(
        { value: 0.0, disabled: true },
        Validators.required
      ),
    });
  }

  existingProducts(product) {
    return this.formBuilder.group({
      id: product.id,
      external_product_number: product.external_product_number,
      data_area_id: product.data_area_id,
      quote_id: product.quote_id,
      name: new FormControl(
        { value: product.name, disabled: true },
        Validators.required
      ),
      sku: new FormControl(
        { value: product.sku, disabled: true },
        Validators.required
      ),
      quantity: new FormControl(
        { value: product.quantity, disabled: true },
        Validators.required
      ),
      unit_price: new FormControl(
        { value: product.unit_price, disabled: true },
        Validators.required
      ),
      total_price: new FormControl(
        { value: product.quantity * product.unit_price, disabled: true },
        Validators.required
      ),
      discount: new FormControl(
        { value: product.discount, disabled: true },
        Validators.required
      ),
      amount: new FormControl(
        { value: product.amount, disabled: true },
        Validators.required
      ),
    });
  }

  addNewProduct() {
    this.products().push(this.newProduct());
  }

  removeProduct(i: number) {
    this.products().removeAt(i);
  }

  //---------------- End of Quotation Products -------------------

  dateChange() {
    let tempDate = new Date(this.fromDate);
    tempDate = new Date(
      tempDate.setDate(tempDate.getDate() + this.termSelected)
    );
    this.toDate = new Date(tempDate);
    this.f.fromDate.setValue(this.fromDate);
    this.f.toDate.setValue(this.toDate);
  }

  termSelect(term) {
    this.termSelected = this.terms.find((x) => x.id == term).no_of_days;
  }

  enableEditMethod(control, type) {
    console.log(type);
    this.controller = control;
    this.enableEdit[type] = true;
    if (type == "product") {
      control["controls"]["name"].enable();
      control["controls"]["quantity"].enable();
      control["controls"]["discount"].enable();
    } else {
      control.enable();
    }
  }

  disableEditMethod(control, type) {
    this.controller = null;
    this.enableEdit[type] = false;
    if (type == "product") {
      control["controls"]["name"].disable();
      control["controls"]["quantity"].disable();
      control["controls"]["discount"].disable();
    } else {
      control.disable();
    }
  }

  productDetails(product, productControl) {
    productControl.controls.sku.setValue(product["sku"]);
    productControl.controls.unit_price.setValue(product["amount"]);
  }

  countNetAmount(product) {
    let quantity = product.controls.quantity.value;
    let unit_price = product.controls.unit_price.value;
    let total_price = quantity * unit_price;
    let discount = product.controls.discount.value;
    discount = (100 - discount) / 100;

    product.controls.total_price.setValue(total_price);
    product.controls.amount.setValue((total_price * discount).toFixed(2));
  }

  filterProduct(event) {
    let query = event.query;
    console.log(query);
    this.quoteService.getFilteredProducts(query).subscribe((data) => {
      console.log(data);
      this.filteredProducts = data["data"];
    });
  }

  changePaymentPercent(index) {
    this.paymentCurrentIndex = index;
    let maxPercentage = 100;
    let currentPercentage = 0;

    let payments = this.payments().controls;
    let billing_id = payments[index]["controls"].billing_id.value;
    let fullAmount = this.billingList.find(
      (x) => x.billing_id == billing_id
    ).amount;

    let filteredPayments = payments.filter(
      (x) => x["controls"].billing_id.value == billing_id
    );

    filteredPayments.forEach((payment) => {
      currentPercentage += parseFloat(payment["controls"].percentage.value);
      if (currentPercentage > maxPercentage) {
        this.dangerBody =
          "You have entered more than 100% for the payment schedule for billing ID: " +
          billing_id;
        this.modal_type = "paymentPercentage";
        this.dangerModal.show();
      } else {
        payment["controls"].amount.setValue(
          (fullAmount * (payment["controls"].percentage.value / 100)).toFixed(2)
        );
      }
    });
  }

  changePaymentValue(index) {
    this.paymentCurrentIndex = index;

    let payments = this.payments().controls;
    let billing_id = payments[index]["controls"].billing_id.value;
    let fullAmount = this.billingList.find(
      (x) => x.billing_id == billing_id
    ).amount;
    let currentAmount = 0;

    let filteredPayments = payments.filter(
      (x) => x["controls"].billing_id.value == billing_id
    );

    filteredPayments.forEach((payment) => {
      currentAmount += parseFloat(payment["controls"].amount.value);
      if (currentAmount > fullAmount) {
        this.dangerBody =
          "You have entered excessive amount of " +
          (currentAmount - fullAmount) +
          " for the payment schedule for " +
          "billing ID: " +
          billing_id;
        this.modal_type = "paymentValue";
        this.dangerModal.show();
      } else {
        payment["controls"].percentage.setValue(
          ((currentAmount / fullAmount) * 100).toFixed(2)
        );
      }
    });
  }

  billingRemarkModalOpen(index) {
    let billings = this.billings().controls;
    this.billingRemarks = billings[index]["controls"].remarks.value;
    this.remarkIndex = index;
    this.billingRemarkModal.show();
  }

  billingRemarkModalClose() {
    let billings = this.billings().controls;
    billings[this.remarkIndex]["controls"].remarks.setValue(
      this.billingRemarks
    );
    this.billingRemarkModal.hide();
  }

  paymentRemarkModalOpen(index) {
    let payments = this.payments().controls;
    this.paymentRemarks = payments[index]["controls"].remarks.value;
    this.remarkIndex = index;
    this.paymentRemarkModal.show();
  }

  paymentRemarkModalClose() {
    let payments = this.payments().controls;
    payments[this.remarkIndex]["controls"].remarks.setValue(
      this.paymentRemarks
    );
    this.paymentRemarkModal.hide();
  }

  setDefaultPayment() {
    this.payments().clear();
    this.quotations.forEach((element) => {
      element.payment_schedules.forEach((payment) => {
        this.payments().push(this.existingPayments(payment));
      });
    });
  }

  setPaymentAutoAssignPercentage() {
    let index = this.paymentCurrentIndex;
    let maxPercentage = 100;

    let payments = this.payments().controls;
    let billing_id = payments[index]["controls"].billing_id.value;
    let fullAmount = this.billingList.find(
      (x) => x.billing_id == billing_id
    ).amount;

    let filteredPayments = payments.filter(
      (x) => x["controls"].billing_id.value == billing_id
    );

    filteredPayments.forEach((payment) => {
      maxPercentage -= parseFloat(payment["controls"].percentage.value);
      if (maxPercentage < 0) {
        payment["controls"].percentage.setValue(
          parseFloat(payment["controls"].percentage.value) + maxPercentage
        );
        payment["controls"].amount.setValue(
          (fullAmount * (payment["controls"].percentage.value / 100)).toFixed(2)
        );
      } else if (maxPercentage == 0) {
        payment["controls"].percentage.setValue(0);
        payment["controls"].amount.setValue(0);
      } else {
        payment["controls"].amount.setValue(
          (fullAmount * (payment["controls"].percentage.value / 100)).toFixed(2)
        );
      }
    });
  }

  setPaymentAutoAssignValue() {
    let index = this.paymentCurrentIndex;

    let payments = this.payments().controls;
    let billing_id = payments[index]["controls"].billing_id.value;
    let fullAmount = this.billingList.find(
      (x) => x.billing_id == billing_id
    ).amount;
    let fixFullAmount = fullAmount;

    let filteredPayments = payments.filter(
      (x) => x["controls"].billing_id.value == billing_id
    );

    filteredPayments.forEach((payment) => {
      fullAmount -= parseFloat(payment["controls"].amount.value);
      console.log(fullAmount);
      if (fullAmount < 0) {
        payment["controls"].amount.setValue(
          parseFloat(payment["controls"].amount.value) + fullAmount
        );
        payment["controls"].percentage.setValue(
          ((payment["controls"].amount.value / fixFullAmount) * 100).toFixed(2)
        );
      } else {
        let percentage =
          (payment["controls"].amount.value / fixFullAmount) * 100;
        payment["controls"].percentage.setValue(percentage.toFixed(2));
      }
    });
  }

  submit() {
    console.log(this.form.value);
  }

  get f() {
    return this.form.controls;
  }
}
