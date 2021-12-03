import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { dataTool, number } from "echarts";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Term } from "../../quote/create/terms";
import { BillingList } from "../../quote/edit/billing-list";
import { Product } from "../../quote/products/products";
import { Quote } from "../../quote/quote";
import { QuoteService } from "../../quote/quote.service";
import { SociService } from "../soci.service";
import { SystemConfig } from "../../config/system-config";
import * as moment from "moment";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  moment: any = moment;
  @ViewChild("billingRemarkModal") billingRemarkModal: ModalDirective;
  @ViewChild("paymentRemarkModal") paymentRemarkModal: ModalDirective;
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("confirmationModal") confirmationModal: ModalDirective;
  @ViewChild("addStandardTermModal")
  public addStandardTermModal: ModalDirective;
  @ViewChild("updateProductModal") public updateProductModal: ModalDirective;
  @ViewChild("confirmationReleaseModal")
  public confirmationReleaseModal: ModalDirective;
  @ViewChild("confirmationApproveModal")
  public confirmationApproveModal: ModalDirective;
  @ViewChild("confirmationEscalateModal")
  public confirmationEscalateModal: ModalDirective;
  @ViewChild("confirmationRejectModal")
  public confirmationRejectModal: ModalDirective;
  @ViewChild("confirmationRemarksUpdatedModal")
  public confirmationRemarksUpdatedModal: ModalDirective;
  


  cost_item_id: any;
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
  form: FormGroup;
  billingList: BillingList[] = [];
  sub_total: number;
  soci_data: any;
  standerd_payment_term: any;
  is_payment_term_eidt = false;
  is_delivery_term_eidt = false;
  standard_term: any;
  total_additional_cost: any;
  default_delivery_term_from: Date;
  default_delivery_term_to: Date;
  standard_delivery_term: any;
  payment_term_to: Date;
  payment_term_from: string;
  default_payment_term: any;
  default_payment_term_from: Date;
  delivery_term_from: string;
  delivery_term_to: Date;
  default_delivery_term: any;
  quotation_validity_delivery_term_to: Date;
  quotation_validity_payment_term_to: Date;
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
  product_cost = "";
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
  product_index: any;
  product_amount: any;
  sociStatus: any;
  is_approval_view_check = false;
  productCostprice: any;
  productType: any;
  billing_percentage = 0;
  is_edited = false;
  is_released: boolean;
  external_id: any;
  productCheck: string;
  payment_schedules_date: Date;
  billing_instruction_date: Date;
  new_payment_schedule_date: string;
  new_billing_instruction_date: string;
  sociAttachment: any[] = [];
  fileType: any;
  token: any;
  url: any;
  selected_date: any;
  isCancelRemarks: boolean;
  sociDetailId: any;
  customer_id: any;
  isRemarksAdded: boolean = true;
  isRemarksUpdated: boolean;
  badgeColor ='';

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private sociService: SociService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
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
      margin: "",
      days: "",
      fromDate: "",
      delivery_days: "",
      delivery_fromDate: "",
      productName: "",
      floorPrice: "",
      otherCostCategory: "",
      listPrice: "",
      justification: "",
      principal: "",
      productManager: "",
      extendedWarranty: "",
      taxRate: "",
      taxCode: "",
      customerTaxRate: "",
      standardWarranty: "",
      sociRemarks: "",
      cancelled_remarks: "",
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.is_approval_view_check = params.is_approval_view_check;
      this.is_preview_check = params.is_preview_check;
    });
    this.route.params.subscribe((event) => {
      this.soci_id = event.sociId;
      this.getSociData(this.soci_id);
    });

    if (localStorage.getItem("auth-token")) {
      this.token = localStorage.getItem("auth-token");
    }

    this.url = SystemConfig.apiBaseUrl;
  }

  getSociData(soci_id) {
    this.sociService.getSpecificSoci(soci_id).subscribe(async (res) => {
      //PO Details
      this.soci_data = res["data"];
      this.form.patchValue({
        sociRemarks: this.soci_data?.remarks,
      });
      this.sociStatus = res["data"]["status"];
      if(this.sociStatus == 1){
        this.badgeColor = 'info'
      }else if(this.sociStatus == 2){
        this.badgeColor = 'warning'
      }
      else if(this.sociStatus == 7){
        this.badgeColor = 'danger'
      }
      else if(this.sociStatus == 4){
        this.badgeColor = 'success'
      }

      this.sociDetailId = res["data"]["soci_id"];
      this.is_edited = res["data"]["is_edited"];
      this.is_released = res["data"]["is_released"];
      this.external_id = res["data"]["external_id"];
      this.customer_id = res["data"]["quote"]["opportunity"]["customer_id"];
      // standard_term
      this.standard_term = res["data"]["standard_terms"];
      this.standerd_payment_term = res["data"]["standard_terms"]["payment_term"]
        ? res["data"]["standard_terms"]["payment_term"]
        : 0;
      this.payment_term_from =
        res["data"]["standard_terms"]["payment_term_from"];
      // quotation_validity_payment_term_to
      this.payment_term_to = new Date(this.payment_term_from);
      this.payment_term_to.setDate(
        this.payment_term_to.getDate() + this.standerd_payment_term
      );
      this.default_payment_term_from =
        res["data"]["standard_terms"]["default_payment_term_from"];
      this.default_payment_term =
        res["data"]["standard_terms"]["default_payment_term"];
      this.quotation_validity_payment_term_to = new Date(
        this.default_payment_term_from
      );
      this.quotation_validity_payment_term_to.setDate(
        this.quotation_validity_payment_term_to.getDate() +
          this.default_payment_term
      );
      // Delivery_terms
      this.default_delivery_term = res["data"]["standard_terms"][
        "default_delivery_term"
      ]
        ? res["data"]["standard_terms"]["default_delivery_term"]
        : 0;
      this.default_delivery_term_from =
        res["data"]["standard_terms"]["default_delivery_term_from"];
      this.delivery_term_from =
        res["data"]["standard_terms"]["delivery_term_from"];
      this.delivery_term_to = new Date(this.delivery_term_from);
      this.delivery_term_to.setDate(
        this.delivery_term_to.getDate() + this.default_delivery_term
      );
      this.standard_delivery_term = res["data"]["standard_terms"][
        "delivery_term"
      ]
        ? res["data"]["standard_terms"]["delivery_term"]
        : 0;

      // quotation_validity_delivery_term_to
      this.quotation_validity_delivery_term_to = new Date(
        this.default_delivery_term_from
      );
      this.quotation_validity_delivery_term_to.setDate(
        this.quotation_validity_delivery_term_to.getDate() +
          this.default_delivery_term
      );
      // billing_milestone
      this.billing_milestone = res["data"]["billing_milestones"];
      if (this.billing_milestone.length != 0) {
        this.billing_milestone.forEach((values) => {
          this.billing_id = values.billing_id;
          this.billing_percentage += values.percentage;
        });
        this.autoIncreaseBillingId(this.billing_id);
        this.calculateBillingPercentage();
      } else {
        this.form.patchValue({
          billing_id: this.sociDetailId + "_1",
        });
      }
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

      //SOCI Attachments
      this.sociAttachment = res["data"]["attachments"];
      this.sociAttachment.forEach((value) => {
        // this.fileType = value.file.split(".").pop();
        this.fileType = value.file;
      });
      this.additional_cost_and_charges =
        this.total_additional_charges_amount +
        this.total_additional_costs_amount;
      this.total_cost +=
        this.products_total_discount_values +
        this.product_subtotal_before_tax +
        this.additional_cost_and_charges;
    });
  }

  // Standard Term

  editStandardPaymentTerm() {
    // let selected_date
    this.is_payment_term_eidt = true;
    if ((this.is_payment_term_eidt = true)) {
      this.addStandardTermModal.show();
      this.form.patchValue({
        days: this.standerd_payment_term,
        fromDate: this.payment_term_from.split(" ")[0],
      });
    }
  }

  editStandardDeliveryTerm() {
    this.is_delivery_term_eidt = true;
    if (this.is_delivery_term_eidt) {
      this.addStandardTermModal.show();
      // let date = new Date(this.delivery_term_from).toISOString().split("T")[0];
      this.form.patchValue({
        delivery_days: this.standard_delivery_term,
        delivery_fromDate: this.delivery_term_from.split(" ")[0],
      });
    }
  }

  updatePaymentTerms() {
    this.sociService
      .postQuery("/soci/update-payment-term", {
        standard_payment_term: this.form.value.days,
        standard_payment_term_from: this.form.value.fromDate,
        is_edited: this.is_payment_term_eidt,
        soci_id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.addStandardTermModal.hide();
          this.is_edited = true;
          this.alertBody = data.message;
          this.standerd_payment_term = this.form.value.days;
          
          this.payment_term_from = this.form.value.fromDate;
          this.payment_term_to = new Date(this.payment_term_from);
          this.payment_term_to.setDate(
            this.payment_term_to.getDate() + parseInt(this.form.value.days)
          );

          
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("days").reset();
            this.form.get("fromDate").reset();
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
  updateDeliveryTerms() {
    this.sociService
      .postQuery("/soci/update-delivery-term", {
        delivery_term: this.form.value.delivery_days,
        delivery_term_from: this.form.value.delivery_fromDate,
        is_edited: this.is_delivery_term_eidt,
        soci_id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.addStandardTermModal.hide();
          this.standard_delivery_term = this.form.value.delivery_days;
          this.delivery_term_from = this.form.value.delivery_fromDate;
          this.delivery_term_to = new Date(this.delivery_term_from);
          this.delivery_term_to.setDate(
            this.delivery_term_to.getDate() +
              parseInt(this.form.value.delivery_days)
          );
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("delivery_days").reset();
            this.form.get("delivery_fromDate").reset();
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
  setTermsConditions() {
    this.is_payment_term_eidt = false;
    this.is_delivery_term_eidt = false;
  }
  // End Standard Term

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
          this.billing_percentage += this.form.value.percentage;
          this.calculateBillingPercentage();
          this.autoIncreaseBillingId(data["data"]["billing_id"]);
          this.billing_milestone.push(data["data"]);
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("stage").reset();
            this.form.get("amount").reset();
            this.form.get("remarks").reset();
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

  calculateBillingPercentage() {
    if (this.billing_percentage >= 100) {
      this.form.patchValue({
        percentage: 0,
      });
    } else {
      this.form.patchValue({
        percentage: 100 - this.billing_percentage,
      });
    }
  }
  autoIncreaseBillingId(billing_id) {
    if (billing_id) {
      var billin_id_array = billing_id.split("_");
      this.form.patchValue({
        billing_id:
          billin_id_array[0] + "_" + (parseInt(billin_id_array[1]) + 1),
      });
    }
  }

  updateBillingMilestone(index, billing_instruction_id) {
    this.sociService
      .putQuery(
        "/soci/billing-milestone/" + billing_instruction_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.billing_milestone[index] = data["data"];
          this.autoIncreaseBillingId(data["data"]["billing_id"]);
          this.editableRowIndex = null;
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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

  deleteBillingMilestone(index, billing_milestone_id) {
    this.sociService
      .deleteQuery("/soci/billing-milestone/" + billing_milestone_id)
      .subscribe(
        (data: any) => {
          this.billing_percentage -= data["data"]["percentage"];
          this.calculateBillingPercentage();
          this.form.patchValue({
            billing_id: data["data"]["billing_id"],
          });
          this.billing_milestone.splice(index, 1);
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          data["data"].soc_payment_term = this.form.value.soc_payment_term;
          data["data"].status = this.form.value.status;
          this.payment_schedules.push(data["data"]);
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("percentage").reset();
            this.form.get("schedule").reset();
            this.form.get("soc_payment_term").reset();
            this.form.get("status").reset();
            this.form.get("amount").reset();
            this.form.get("remarks").reset();
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
    this.sociService
      .putQuery(
        "/soci/payment-schedule/" + payment_schedule_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.payment_schedules[index] = data["data"];
          this.editableRowIndex = null;
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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

  changePaymentSchdule(value) {
    this.controller.schedule = value;
  }

  deletePaymentSchdule(index, payment_schedule_id) {
    this.sociService
      .deleteQuery("/soci/payment-schedule/" + payment_schedule_id)
      .subscribe(
        (data: any) => {
          this.payment_schedules.splice(index, 1);
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("description").reset();
            this.form.get("quantity").reset();
            this.form.get("unit_price").reset();
            this.form.get("total_price").reset();
            this.form.get("remarks").reset();
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
    if (value.quantity && value.unit_price) {
      value.total_price = value.quantity * value.unit_price;
    } else {
      value.total_price = 0;
    }
  }

  updateAdditionalCost(index, additiona_cost_id) {
    this.sociService
      .putQuery("/soci/additional-cost/" + additiona_cost_id, this.controller)
      .subscribe(
        (data: any) => {
          this.additional_costs[index] = data["data"];
          let total = 0;
          this.additional_costs.forEach((ele) => {
            total += ele.total_price;
          });
          this.total_additional_costs_amount = total; // data["data"]["total_price"];
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
          this.editableRowIndex = null;
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("schedule").reset();
            this.form.get("percentage").reset();
            this.form.get("amount").reset();
            this.form.get("remarks").reset();
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
  changeBillingInstructionAmount(value) {
    this.controller.amount = value;
  }
  updateBillingInstruction(index, billing_instruction_id) {
    this.sociService
      .putQuery(
        "/soci/billing-instruction/" + billing_instruction_id,
        this.controller
      )
      .subscribe(
        (data: any) => {
          this.billing_instruction[index] = data["data"];
          this.editableRowIndex = null;
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
  changeBillingSchdule(value) {
    this.controller.schedule = value;
  }
  deleteBillingInstruction(index, billing_instruction_id) {
    this.sociService
      .deleteQuery("/soci/billing-instruction/" + billing_instruction_id)
      .subscribe(
        (data: any) => {
          this.billing_instruction.splice(index, 1);
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("soci_title").reset();
            this.form.get("description").reset();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("cost_item_id").reset();
            this.form.get("description").reset();
            this.form.get("quantity").reset();
            this.form.get("unit_price").reset();
            this.form.get("total_price").reset();
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
  updateChargesQuantity(value) {
    if (value.quantity) {
      value.total_price = value.unit_price * value.quantity;
    }
  }
  updateChargesUnitPrice(value) {
    if (value.quantity && value.unit_price) {
      value.total_price = value.unit_price * value.quantity;
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
          let total = 0;
          this.additional_charges.forEach((ele) => {
            total += ele.total_price;
          });
          this.total_additional_charges_amount = total; //data["data"]["total_price"];
          this.additional_cost_and_charges += data["data"]["total_price"];
          this.total_cost += data["data"]["total_price"];
          this.editableRowIndex = null;
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
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
    this.sociService
      .getFilteredProducts(query, this.customer_id, this.external_id)
      .subscribe((data) => {
        this.filteredProducts = data["data"];
      });
  }

  addPrductData() {
    this.sociService
      .postQuery("/soci/product", {
        external_product_number: this.external_product_number,
        data_area_id: this.product_data_area_id,
        soci_id: this.soci_id,
        cost_price: this.productCostprice,
        unit_price: this.form.value.unit_price,
        quantity: this.form.value.quantity,
        cost: this.product_cost,
        margin: 2,
        total_price: this.form.value.quantity.total_price,
        product_id: this.product_id,
        discount: this.form.value.discount,
        amount: this.form.value.amount,
        product_type: this.productType,
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
          this.is_edited = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.form.get("name").reset();
            this.form.get("sku").reset();
            this.form.get("quantity").reset();
            this.form.get("unit_price").reset();
            this.form.get("total_price").reset();
            this.form.get("discount").reset();
            this.form.get("amount").reset();
          }, 2000);
        },
        (error) => {
          this.alertBody =
            error["error"]["data"]["errors"][0].message ||
            "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  productDetails(product, check) {
    this.productCheck = check;
    this.external_product_number = product.external_product_number;
    this.product_data_area_id = product.data_area_id;
    this.product_cost = product.cost;
    // this.productCostprice = product.cost_price;
    this.productType = product.product_type;
    if (check == "add_product") {
      this.productCostprice = product.cost_price;
      this.product_id = product.id;
      this.form.patchValue({
        sku: product["sku"],
        unit_price: product["amount"],
        amount: 0.0,
      });
    } else {
      this.productCostprice = product.cost_price;
      this.form.patchValue({
        // name: product.name,
        productName: product.name,
        sku: product.sku,
        quantity: product.quantity,
        discount: product.discount,
        listPrice: 0.0,
        unit_price: product.amount,
        floorPrice: 0.0,
        principal: product.principle,
        taxRate: product.tax_rate,
        standardWarranty: product.std_warranty,
        amount: product.amount,
      });
    }
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
  openUpdateProductModal(index, product) {
    this.controller = product;
    this.product_index = index;
    this.product_cost = product.cost;
    this.product_data_area_id = product.data_area_id;
    this.external_product_number = product.external_product_number;
    this.product_data_area_id = product.data_area_id;
    this.product_id = product.id;
    this.product_amount = product.amount;
    if (product.product_type) {
      this.productType = product.product_type;
    } else {
      this.productType = "";
    }
    this.updateProductModal.show();
    this.form.patchValue({
      // name: product.name,
      productName: product.name,
      sku: product.sku,
      quantity: product.quantity,
      discount: product.discount,
      listPrice: 0.0,
      unit_price: product.unit_price,
      floorPrice: 0.0,
      principal: product.principle,
      taxRate: product.tax_rate,
      standardWarranty: product.std_warranty,
      amount: product.amount,
    });
  }
  updateProduct() {
    this.sociService
      .putQuery("/soci/product/" + this.product_id, {
        // cost_price: this.productCostprice,
        external_product_number: this.external_product_number,
        discount: this.form.value.discount,
        unit_price: this.form.value.unit_price,
        data_area_id: this.product_data_area_id,
        soci_id: this.soci_id,
        quantity: this.form.value.quantity,
        cost:
          this.productCheck == "update_product"
            ? parseFloat(this.productCostprice)
            : this.product_cost,
        margin: 12.0,
        total_price: this.form.value.quantity.total_price,
        product_id: this.product_id,
        amount: this.form.value.amount,
        product_type: this.productType ? this.productType : "",
        // name: this.form.value.name,
        // productName: this.form.value.productName,
        // sku: this.form.value.sku,
        // list_price: this.form.value.listPrice,
        // floor_price: this.form.value.floorPrice,
        cas_justification: this.form.value.justification,
        principle: this.form.value.principal,
        product_manager: this.form.value.productManager,
        standard_warranty: this.form.value.standardWarranty,
        extended_warranty: this.form.value.extendedWarranty,
        tax_rate: this.form.value.taxRate,
        tax_code: this.form.value.taxCode,
        // customerTaxRate: this.form.value.customerTaxRate,

        // otherCostCategory: this.form.value.otherCostCategory,
      })
      .subscribe(
        (data: any) => {
          this.product[this.product_index] = data["data"];
          this.product_subtotal_before_tax += data["data"]["total_price"];
          this.product_total_net_amount += data["data"]["amount"];
          this.products_discount_values += data["data"]["discount"];
          this.products_total_discount_values =
            (this.products_discount_values / 100) *
            this.product_subtotal_before_tax;
          this.total_cost +=
            data["data"]["discount"] + data["data"]["total_price"];
          this.editableRowIndex = null;
          this.is_edited = true;
          this.updateProductModal.hide();
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
        },
        (error: any) => {
          this.alertBody =
            error["error"]["data"]["errors"][0].message ||
            "Please enter required fields";
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
        this.is_edited = true;
        this.alertBody = data.message;
        this.successModal.show();
        setTimeout(() => {
          this.successModal.hide();
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
  setEditProductForm() {
    this.form.get("name").reset();
    this.form.get("productName").reset();
    this.form.get("sku").reset();
    this.form.get("quantity").reset();
    this.form.get("discount").reset();
    this.form.get("listPrice").reset();
    this.form.get("unit_price").reset();
    this.form.get("floorPrice").reset();
    this.form.get("justification").reset();
    this.form.get("principal").reset();
    this.form.get("productManager").reset();
    this.form.get("standardWarranty").reset();
    this.form.get("extendedWarranty").reset();
    this.form.get("taxRate").reset();
    this.form.get("customerTaxRate").reset();
    this.form.get("otherCostCategory").reset();
    this.form.get("amount").reset();
  }

  // End product section

  // Approve Request

  applyForApproval() {
    this.confirmationModal.hide();
    this.sociService
      .postQuery("/soci/request-approval", {
        id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.is_edited = false;
          this.isRemarksAdded = true;
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
            this.router.navigate(["/soci/index"]);
          }, 2000);
        },
        (error: any) => {
          this.alertBody =
            error["error"]["data"]["value"] || "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  // Apply for release
  applyForRelease() {
    this.confirmationReleaseModal.hide();
    this.sociService
      .postQuery("/soci/release", {
        id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.alertBody = data.message + " Release Id " + data.data.id;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
            this.router.navigate(["/soci/index"]);
            this.is_released = false;
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

  // From Manager-view Approval
  approveSOCI() {
    this.confirmationApproveModal.hide();
    this.sociService
      .postQuery("/soci/approve", {
        id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          if (!this.is_released) {
            this.is_released = false;
          }
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
            this.managerViewAction();
            // this.router.navigate(["/managerview/approval"], navigate);
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
  escalateSCOI() {
    this.confirmationEscalateModal.hide();
    this.sociService
      .postQuery("/soci/escalate", {
        id: this.soci_id,
      })
      .subscribe(
        (data: any) => {
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
            this.managerViewAction();
            // this.router.navigate(["/managerview/approval"]);
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
  rejectSOCI() {
    this.confirmationRejectModal.hide();
    this.sociService
      .postQuery("/soci/reject", {
        id: this.soci_id,
        cancelled_remarks: this.form.value.cancelled_remarks,
      })
      .subscribe(
        (data: any) => {
          this.alertBody = data.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.request_approval = true;
            this.managerViewAction();
            // this.router.navigate(["/managerview/approval"]);
          }, 2000);
        },
        (error) => {
          this.alertBody = "Please enter required fields";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
            this.form.get("cancelled_remarks").reset();
          }, 2000);
        }
      );
  }
  private managerViewAction() {
    let navigate: NavigationExtras = {
      queryParams: {
        isManagerViewAction: true,
      },
    };
    this.successModal.hide();
    this.request_approval = true;
    this.router.navigate(["/managerview/approval"], navigate);
  }
  addCancelRemarks() {
    if (this.form.value.cancelled_remarks) {
      this.isCancelRemarks = true;
    } else {
      this.isCancelRemarks = false;
    }
  }
  // From Manager-view Approval

  enableEditMethod(index, control, type) {
    delete control["laravel_through_key"];
    if (type == "additionalCharges") {
      delete control["code_item"];
      delete control["code_item_id"];
    }
    if (type == "billingMilestone") {
      delete control["payment_schedule"];
    }
    this.selectedId = type;
    this.controller = control;
    if (type == "payment") {
      this.payment_schedules_date = new Date(this.controller.schedule);
      this.payment_schedules_date.setDate(
        this.payment_schedules_date.getDate() + 1
      );
      this.new_payment_schedule_date = new Date(this.payment_schedules_date)
        .toISOString()
        .split("T")[0];
      this.controller["schedule"] = this.new_payment_schedule_date;
    } else if (type == "addBillInstruction") {
      this.billing_instruction_date = new Date(this.controller.schedule);
      this.billing_instruction_date.setDate(
        this.billing_instruction_date.getDate() + 1
      );
      this.new_billing_instruction_date = new Date(
        this.billing_instruction_date
      )
        .toISOString()
        .split("T")[0];
      this.controller["schedule"] = this.new_billing_instruction_date;
    }
    this.enableEdit[type] = true;
    this.editableRowIndex = index;
  }
  disableEditMethod(control, type) {
    this.controller = control;
    this.enableEdit[type] = false;
    this.editableRowIndex = null;
  }
  //Update Remarks
  remarksAdded() {
    this.form.value.sociRemarks
      ? (this.isRemarksAdded = false)
      : (this.isRemarksAdded = true);
  }
  checkRamarksAdded() {
    if (this.isRemarksAdded) {
      this.confirmationModal.show();
    }
    else if(!this.isRemarksAdded){
      this.confirmationRemarksUpdatedModal.show();
    }
  }

  updateRemarks() {
    this.confirmationRemarksUpdatedModal.hide();
      this.sociService
        .postQuery("/soci/" + this.soci_id, {
          remarks: this.form.value.sociRemarks,
        })
        .subscribe(
          (data: any) => {
            this.is_edited = true;
            this.isRemarksUpdated = true;
            this.isRemarksAdded = true;
            this.alertBody = data.message;
            this.successModal.show();
            setTimeout(() => {
              // this.successModal.hide();
              this.confirmationModal.show();
            }, 2000);
          },
          (error) => {
            this.alertBody = "Please enter required fields";
            this.dangerModal.show();
            this.isRemarksAdded = false;
            setTimeout(() => {
              this.dangerModal.hide();
            }, 2000);
          }
        );
    
  }

  get form_controls() {
    return this.form.controls;
  }

  back() {
    this.location.back();
  }
}
