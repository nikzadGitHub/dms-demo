import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { number } from "echarts";
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
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;

  alertBody: string;
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
  total_additional_cost: any;
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
  billing_instruction: any[] = [];
  product: any[] = [];
  additional_instructions: any[] = [];
  additional_charges: any[] = [];
  product_id: any;
  total_additional_charges_amount = 0;
  total_additional_costs_amount = 0;
  is_preview_check = false;
  billing_id: any;
  external_product_number: any;
  product_data_area_id: any;
  product_cost: any;

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
      new_billing_id: "",
      stage: "",
      percentage: "",
      amount: 0,
      quantity: number,
      status: "",
      remarks: "",
      schedule: "",
      soc_payment_term: "",
      description: "",
      unit_price: "",
      total_price: "",
      discount: "",
      bill_to: "",
      ship_to: "",
      soci_title: "",
      tender: "",
      cost_item: "",
      cost_item_id: "",
      contract_start_date: "",
      contract_cxpiry_date: "",
      sku: "",
      name: "",
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log("params", params);
      this.is_preview_check = params.is_preview_check;
    });
    this.route.params.subscribe((event) => {
      console.log("event: ", event);

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
      //PO Details
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
      this.billing_milestone.forEach((values) => {
        console.log("billing_id:", values.billing_id);
        this.billing_id = values.billing_id;
      });
      this.autoIncreaseBillingId(this.billing_id);
      // payment_schedules
      this.payment_schedules = res["data"]["payment_schedules"];
      // additional_costs
      this.additional_costs = res["data"]["additional_costs"];
      this.additional_costs.forEach((values) => {
        this.total_additional_costs_amount += values["total_price"];
      });
      // billing_instruction
      if (res["data"]["billing_instruction"]) {
        this.billing_instruction.push(res["data"]["billing_instruction"]);
      }
      // additional_instruction
      this.additional_instructions = res["data"]["additional_instructions"];
      console.log(
        "additional-data-->: ",
        res["data"]["additional_instructions"]
      );
      console.log("additional-instr: ", this.additional_instructions);

      // additional_charges
      this.additional_charges = res["data"]["additional_charges"];
      this.additional_charges.forEach((values) => {
        this.total_additional_charges_amount += values["total_price"];
      });
      // products
      this.product = res["data"]["products"];
      this.form.patchValue({
        standard_payment_term: this.standerd_payment_term,
        standard_delivery_term: this.standard_delivery_term,
      });
      // this.quotations = res["data"]["quotes"];
      // this.setInitialValue();
      // this.initData();
    });
  }

  // ADD Billing_Milestone
  addBillingMileStone() {
    this.sociService
      .postQuery("/soci/billing-milestone", {
        soci_id: this.soci_id,
        billing_id: this.form.value.billing_id,
        stage: this.form.value.stage,
        percentage: this.form.value.percentage,
        amount: this.form.value.amount,
        remarks: this.form.value.remarks,
      })
      .subscribe(
        (data: any) => {
          console.log("billing-data:", data);
          this.autoIncreaseBillingId(data["data"]["billing_id"]);
          this.billing_milestone.push(data["data"]);
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            // this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }
  autoIncreaseBillingId(billing_id) {
    var billin_id_array = billing_id.split("_");
    this.form.patchValue({
      new_billing_id:
        billin_id_array[0] + "_" + (parseInt(billin_id_array[1]) + 1),
    });
  }
  enableEditMethod(control, type) {
    // this.controller = control;
    // this.enableEdit[type] = true;
    // if (type == "product") {
    //   control["controls"]["name"].enable();
    //   control["controls"]["quantity"].enable();
    //   control["controls"]["discount"].enable();
    // } else {
    //   control.enable();
    // }
  }
  // End billing milestone

  // ADD payment_schedule
  addPaymentSchedule() {
    this.sociService
      .postQuery("/soci/payment-schedule", {
        soci_id: this.soci_id,
        billing_id: this.form.value.billing_id,
        percentage: this.form.value.percentage,
        schedule: this.form.value.schedule,
        soc_payment_term: this.form.value.soc_payment_term,
        status: this.form.value.status,
        amount: this.form.value.amount,
        remarks: this.form.value.remarks,
      })
      .subscribe(
        (data: any) => {
          this.payment_schedules.push(data["data"]);
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  // ADD additional_cost
  addAdditionalCost() {
    this.sociService
      .postQuery("/soci/additional-cost", {
        soci_id: this.soci_id,
        description: this.form.value.description,
        quantity: this.form.value.quantity,
        unit_price: this.form.value.unit_price,
        total_price: this.form.value.total_price,
        remarks: this.form.value.remarks,
      })
      .subscribe(
        (data: any) => {
          this.additional_costs.push(data["data"]);
          this.total_additional_costs_amount += data["data"]["total_price"];
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }
  costUnitValue() {
    if (this.form.value.quantity) {
      this.form.patchValue({
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
    // this.form.setValue
  }

  // ADD Billing Instruction
  addBillingInstruction() {
    this.sociService
      .postQuery("/soci/billing-instruction", {
        soci_id: this.soci_id,
        schedule: this.form.value.schedule,
        percentage: this.form.value.percentage,
        amount: this.form.value.amount,
        remarks: this.form.value.remarks,
        soc_payment_term: this.form.value.soc_payment_term,
        status: this.form.value.status,
      })
      .subscribe(
        (data: any) => {
          this.billing_instruction.push(data["data"]);
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  // ADD Additional Instruction
  addAdditionalInstruction() {
    this.sociService
      .postQuery("/soci/additional-instruction", {
        soci_id: this.soci_id,
        soci: this.form.value.soci_title,
        description: this.form.value.description,
      })
      .subscribe(
        (data: any) => {
          console.log("AdditionalInstruction: ", data);
          this.additional_instructions.push(data["data"]);
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  // ADD additional charges

  addAdditionalCharges() {
    this.sociService
      .postQuery("/soci/additional-charges", {
        soci_id: this.soci_id,
        cost_item_id: this.form.value.cost_item_id,
        description: this.form.value.description,
        quantity: this.form.value.quantity,
        unit_price: this.form.value.unit_price,
        total_price: this.form.value.amount,
      })
      .subscribe(
        (data: any) => {
          this.additional_charges.push(data["data"]);

          this.total_additional_charges_amount += data["data"]["total_price"];

          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  chargesUnitValue() {
    if (this.form.value.quantity) {
      this.form.patchValue({
        // total_price: this.form.value.unit_price,
        amount: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }

  // ADD Product
  addPrductData() {
    this.sociService
      .postQuery("/soci/product", {
        external_product_number: this.external_product_number,
        data_area_id: this.product_data_area_id,
        product_id: this.product_id,
        soci_id: this.soci_id,
        quantity: this.form.value.quantity,
        cost: this.product_cost,
        margin: 12,
        total_price: this.form.value.quantity.total_price,
        discount: this.form.value.discount,
        amount: this.form.value.amount,
      })
      .subscribe(
        (data: any) => {
          console.log("add-product: ", data);
          this.product.push(data["data"]);

          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.reset();
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  productDetails(product) {
    console.log("selected-product: ", product);

    this.external_product_number = product.external_product_number;
    this.product_data_area_id = product.data_area_id;
    this.product_id = product.id;
    this.product_cost = product.cost;
    // this.product_id = product["id"];
    this.form.patchValue({
      sku: product["sku"],
      unit_price: product["amount"],
      total_price: product["amount"],
      amount: product["amount"],
    });
  }
  addProductQuantity() {
    console.log("prodcut-qunaity:", this.form.value.quantity);
    console.log("prodcut-discount-value:", this.form.value.discount);
    if (this.form.value.quantity && this.form.value.discount) {
      let discount_value =
        this.form.value.amount -
        (this.form.value.amount * this.form.value.discount) / 100;
      console.log(
        "discount_value: ",
        discount_value * this.form.value.quantity
      );

      this.form.patchValue({
        amount: discount_value * this.form.value.quantity,
      });
    } else {
      this.form.patchValue({
        amount: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }
  addDiscount() {
    console.log("qunaity:", this.form.value.quantity);
    console.log("discount-value:", this.form.value.discount);
    if (this.form.value.quantity && this.form.value.discount) {
      let discount_value =
        this.form.value.amount -
        (this.form.value.amount * this.form.value.discount) / 100;
      console.log(
        "discount_value: ",
        discount_value * this.form.value.quantity
      );

      this.form.patchValue({
        amount: discount_value * this.form.value.quantity,
      });
    } else {
      this.form.patchValue({
        amount: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }

  // End product section

  // totalAdditionalCost() {
  //   this.total_additional_cost = this.form.value
  // }
  changeQuantity() {
    console.log(this.form.value.quantity);
    if (this.form.value.quantity) {
      this.form.patchValue({
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }

  editPaymentTerm() {
    this.is_payment_term_eidt = true;
  }
  editDefaultPaymentTerm() {
    this.is_delivery_payment_term_eidt = true;
  }
  get form_controls() {
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

  // newBillings(): FormGroup {
  //   return this.formBuilder.group({
  //     billing_id: [{ value: "", disabled: true }],
  //     stage: [{ value: "", disabled: true }],
  //     percentage: [{ value: "", disabled: true }],
  //     amount: [{ value: "", disabled: true }],
  //     status: [{ value: "", disabled: true }],
  //     remarks: [{ value: "", disabled: true }],
  //   });
  // }

  removeBillings(i: number) {
    this.billings().removeAt(i);
  }

  // addBillingMilestone() {
  //   var billing_id = this.billings().controls;
  //   this.billingList = [];
  //   billing_id.forEach((test) => {
  //     // var data = test['controls']['billing_id'].value;
  //     let bill = new BillingList();
  //     bill["billing_id"] = test["controls"]["billing_id"].value;
  //     bill["amount"] = test["controls"]["amount"].value;
  //     this.billingList.push(bill);
  //   });

  //   this.billingList = this.billingList
  //     .map((item) => item)
  //     .filter((item, index, self) => self.indexOf(item) === index);
  // }

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

  // productDetails(product, productControl) {
  //   productControl.controls.sku.setValue(product["sku"]);
  //   productControl.controls.unit_price.setValue(product["amount"]);
  // }

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

    this.quoteService.getFilteredProducts(query).subscribe((data) => {
      this.filteredProducts = data["data"];
      console.log("product:", data);
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

  submit() {}

  get f() {
    return this.form.controls;
  }
}
