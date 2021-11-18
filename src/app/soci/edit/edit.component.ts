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
  @ViewChild("confirmationModal") confirmationModal: ModalDirective;

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
  readonly: any;
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
  is_preview_check: boolean;
  billing_id: any;
  external_product_number: any;
  product_data_area_id: any;
  product_cost: any;
  product_subtotal_before_tax = 0;
  product_total_net_amount = 0;
  tax_rate = 0;
  additional_cost_and_charges = 0;
  products_total_discount_values = 0;
  products_discount_values = 0;
  total_cost = 0;
  request_approval: boolean;
  payemntData = {
    billing_id: "",
    percentage: "",
    schedule: "",
    amount: "",
    remarks: "",
  };
  editableRowIndex: any;
  selectedId: any;

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
      amount: "",
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
      this.is_preview_check = params.is_preview_check;
    });
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
        this.billing_id = values.billing_id;
      });
      this.autoIncreaseBillingId(this.billing_id);
      // payment_schedules
      this.payment_schedules = res["data"]["payment_schedules"];
      // this.getPaymentSchdule()
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

      // additional_charges
      this.additional_charges = res["data"]["additional_charges"];
      this.additional_charges.forEach((values) => {
        this.total_additional_charges_amount += values["total_price"];
      });
      // products
      this.product = res["data"]["products"];
      this.product.forEach((values) => {
        this.products_discount_values += values["discount"];
        this.product_subtotal_before_tax += values["total_price"];
        this.product_total_net_amount += values["amount"];
        this.tax_rate = values["tax_rate"];
      });
      this.products_total_discount_values +=
        (this.products_discount_values / 100) *
        this.product_subtotal_before_tax;
      //
      this.form.patchValue({
        standard_payment_term: this.standerd_payment_term,
        standard_delivery_term: this.standard_delivery_term,
      });

      this.additional_cost_and_charges =
        this.total_additional_charges_amount +
        this.total_additional_costs_amount;
      this.total_cost +=
        this.products_total_discount_values +
        this.product_subtotal_before_tax +
        this.additional_cost_and_charges;
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

  updatePaymentSchdule(index, payment_schedule_id) {
    //  let oldData = this.payment_schedules[index]
    //   this.payemntData.billing_id = oldData.billing_id
    this.sociService
      .putQuery(
        "/soci/payment-schedule/" + payment_schedule_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.payment_schedules[index] = data["data"];
          this.editableRowIndex = null;
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
  deletePaymentSchdule(index, payment_schedule_id) {
    this.sociService
      .deleteQuery("/soci/payment-schedule/" + payment_schedule_id)
      .subscribe(
        (data: any) => {
          this.payment_schedules.splice(index, 1);
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
  // End Payment Schdule

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
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
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

  changeCostvalues(value) {
    console.log("cost-values: ", value);
    value.total_price = value.quantity * value.unit_price;
    console.log("total_price: ", value.total_price);

    // this.form.patchValue({
    //   total_price: value.quantity * value.unit_price,
    // });
    // this.payemntData[column] = value;
  }

  updateAdditionalCost(index, additiona_cost_id) {
    this.sociService
      .putQuery("/soci/additional-cost/" + additiona_cost_id, this.controller)
      .subscribe(
        (data: any) => {
          this.additional_costs[index] = data["data"];
          this.total_additional_costs_amount += data["data"]["total_price"];
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
          this.editableRowIndex = null;
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
  deleteAdditionalCost(index, additional_cost_id) {
    this.sociService
      .deleteQuery("/soci/additional-cost/" + additional_cost_id)
      .subscribe(
        (data: any) => {
          this.additional_costs.splice(index, 1);
          this.total_additional_costs_amount -= data["data"]["total_price"];
          this.additional_cost_and_charges -= data["data"]["total_price"];
          this.total_cost -= data["data"]["total_price"];
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
  // End Additional Cost

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

  updateBillingInstruction(index, billing_instruction_id) {
    // /soci/billing-instruction/
    this.sociService
      .putQuery(
        "/soci/billing-instruction/" + billing_instruction_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.billing_instruction[index] = data["data"];
          this.editableRowIndex = null;
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

  deleteBillingInstruction(index, billing_instruction_id) {
    this.sociService
      .deleteQuery("/soci/billing-instruction/" + billing_instruction_id)
      .subscribe(
        (data: any) => {
          this.billing_instruction.splice(index, 1);
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
  // End Billing Instruction

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

  updateAdditionalInstruction(index, additional_instruction_id) {
    this.sociService
      .putQuery(
        "/soci/additional-instruction/" + additional_instruction_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.additional_instructions[index] = data["data"];
          this.editableRowIndex = null;
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
  deleteAdditionalInstruction(index, addiitonal_instruction_id) {
    this.sociService
      .deleteQuery("/soci/additional-instruction/" + addiitonal_instruction_id)
      .subscribe(
        (data: any) => {
          this.additional_instructions.splice(index, 1);
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
  // End Additional Instruction

  // ADD additional charges

  addAdditionalCharges() {
    this.sociService
      .postQuery("/soci/additional-charges", {
        soci_id: this.soci_id,
        cost_item_id: this.form.value.cost_item_id,
        description: this.form.value.description,
        quantity: this.form.value.quantity,
        unit_price: this.form.value.unit_price,
        total_price: this.form.value.total_price,
      })
      .subscribe(
        (data: any) => {
          this.additional_charges.push(data["data"]);

          this.total_additional_charges_amount += data["data"]["total_price"];
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
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
  changeQuantity() {
    if (this.form.value.quantity) {
      this.form.patchValue({
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }

  chargesUnitValue() {
    if (this.form.value.quantity) {
      this.form.patchValue({
        // total_price: this.form.value.unit_price,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }

  updateAdditionalCharges(index, additional_charges_id) {
    this.sociService
      .putQuery(
        "/soci/additional-charges/" + additional_charges_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.additional_charges[index] = data["data"];
          this.total_additional_charges_amount += data["data"]["total_price"];
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
          this.editableRowIndex = null;
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

  deleteAdditionalCharges(index, additional_charges_id) {
    this.sociService
      .deleteQuery("/soci/additional-charges/" + additional_charges_id)
      .subscribe(
        (data: any) => {
          this.additional_charges.splice(index, 1);
          this.total_additional_charges_amount -= data["data"]["total_price"];
          this.additional_cost_and_charges -= data["data"]["total_price"];
          this.total_cost -= data["data"]["total_price"];
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
  // End additional changes

  // ADD Product
  filterProduct(event) {
    let query = event.query;

    this.sociService.getFilteredProducts(query).subscribe((data) => {
      this.filteredProducts = data["data"];
    });
  }

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
          this.product.push(data["data"]);
          this.product_subtotal_before_tax += data["data"]["total_price"];

          this.product_total_net_amount += data["data"]["amount"];

          this.products_discount_values += data["data"]["discount"];

          this.products_total_discount_values =
            (this.products_discount_values / 100) *
            this.product_subtotal_before_tax;
          this.total_cost +=
            data["data"]["discount"] + data["data"]["total_price"];
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
    this.external_product_number = product.external_product_number;
    this.product_data_area_id = product.data_area_id;
    this.product_id = product.id;
    this.product_cost = product.cost;
    // this.product_id = product["id"];
    this.form.patchValue({
      sku: product["sku"],
      unit_price: product["amount"],
      // total_price: product["amount"],
      // product["amount"]
      amount: 0.0,
    });
  }
  addProductQuantity() {
    if (this.form.value.quantity && this.form.value.discount) {
      let discount_value =
        this.form.value.unit_price -
        (this.form.value.unit_price * this.form.value.discount) / 100;

      this.form.patchValue({
        amount: discount_value * this.form.value.quantity,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    } else if (this.form.value.quantity) {
      this.form.patchValue({
        // amount: this.form.value.unit_price * this.form.value.quantity,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    } else {
      this.form.patchValue({
        amount: this.form.value.unit_price * this.form.value.quantity,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }
  addDiscount() {
    if (this.form.value.quantity && this.form.value.discount) {
      let discount_value =
        this.form.value.unit_price -
        (this.form.value.unit_price * this.form.value.discount) / 100;

      this.form.patchValue({
        amount: discount_value * this.form.value.quantity,
      });
    } else if (this.form.value.quantity) {
      this.form.patchValue({
        // amount: this.form.value.unit_price * this.form.value.quantity,
        amount: 0.0,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    } else {
      this.form.patchValue({
        amount: this.form.value.unit_price * this.form.value.quantity,
        total_price: this.form.value.unit_price * this.form.value.quantity,
      });
    }
  }
  updateProduct(index, product_id) {
    this.sociService
      .putQuery("/soci/product/" + product_id, {
        data_area_id: this.controller.data_area_id,
        external_product_number: this.controller.external_product_number,
        soci_id: this.soci_id
      })
      .subscribe(
        (data: any) => {
          this.product[index] = data["data"];
          this.product_subtotal_before_tax += data["data"]["total_price"];
          this.product_total_net_amount += data["data"]["amount"];
          this.products_discount_values += data["data"]["discount"];
          this.products_total_discount_values =
            (this.products_discount_values / 100) *
            this.product_subtotal_before_tax;
          this.total_cost +=
            data["data"]["discount"] + data["data"]["total_price"];
          this.editableRowIndex = null;
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
  deleteProduct(index, id) {
    this.sociService.deleteQuery("/soci/product/" + id).subscribe(
      (data: any) => {
        this.product.splice(index, 1);
        this.product_subtotal_before_tax -= data["data"]["total_price"];
        this.product_total_net_amount -= data["data"]["amount"];
        this.products_discount_values -= data["data"]["discount"];
        this.products_total_discount_values =
          (this.products_discount_values / 100) *
          this.product_subtotal_before_tax;
        this.total_cost -=
          data["data"]["discount"] + data["data"]["total_price"];
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

  // End product section

  // Approve Request

  applyForApproval() {
    this.sociService
      .postQuery("/soci/request-approval", {
        id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
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

  enableEditMethod(index, control, type) {
    // && selectedId !== payment.id
    console.log("control: ", control);
    console.log("control_id: ", control.id);
    console.log("type: ", type);
    delete control["laravel_through_key"];

    delete control["code_item_id"];
    delete control["code_item"];
    this.selectedId = type;
    this.controller = control;
    this.enableEdit[type] = true;
    this.editableRowIndex = index;
  }
  disableEditMethod(control, type) {
    this.controller = control;
    this.enableEdit[type] = false;
    this.editableRowIndex = null;
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
}
