import { Component, ViewChild, OnInit } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { filter, map, startWith } from "rxjs/operators";
import { AppService } from "./app.service";
import { number } from "echarts";

export interface Product {
  id: any;
  uuid: string;
  name: any;
  data_area_id: any;
  sku: any;
  external_product_number: any;
  amount: any;
  principle: any;
  group: any;
  tax_code: any;
}

export interface OpportunityDetail {
  company_name: any;
  opportunity_code: any;
  created_at: any;
  currency_code: any;
  customer: any;
  data_area_id;
}

@Component({
  templateUrl: "edit-opportunity.component.html",
  styleUrls: ["./opportunity.component.scss"],
  providers: [AppService],
})
export class EditOpportunityComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  // @ViewChild("foundModal") foundModal: ModalDirective;
  @ViewChild("addProductModal") public addProductModal: ModalDirective;
  @ViewChild("editProductModal") public editProductModal: ModalDirective;
  @ViewChild("deleteOptionModal") public deleteOptionModal: ModalDirective;
  @ViewChild("cloneOptionModal") public cloneOptionModal: ModalDirective;
  @ViewChild("setDefaultOptionSuccessModal")
  public setDefaultOptionSuccessModal: ModalDirective;

  alertBody: string;
  alertHeader: string;
  alretType: string;
  color = "#00538a";
  productQuantity = 1;
  default_active_option_tab = 0;
  product_name: any[] = [];
  external_product_id: any[] = [];
  sku: any[] = [];
  quantity: any[] = [];
  unit_price: any[] = [];
  total_price: any[] = [];
  discount: any[] = [];
  amount: any[] = [];
  // final_sub_total_before_tax:any[] = [];
  // final_discount:any[] = [];
  // final_total_amount:any[] = [];
  tax: any[] = [];
  opportunity_id = "";
  product_options = [];
  icons = [];
  detail: OpportunityDetail;
  competitors = [];
  competitor_name = "";
  competitor_amount = 0;
  active_option_id = 0;
  search_product_name = "";
  delete_option_id = 0;
  delete_option_index = 0;
  clone_option_id = 0;
  statuses = [];
  stages = [];
  customer_contacts: any = [];
  funding_source = [];
  funding_status = [];
  care_areas = [];
  preferred_vendor_types = [];
  forecast_category = 0;
  productList: Product[] = [];
  filteredProductList: Observable<Product[]>;
  productControl = new FormControl();
  editing_product = 0;
  editing_product_index1 = 0;
  editing_product_index2 = 0;
  detail_not_editable = false;
  addLine: boolean;
  active = 1;
  is_dummy_sku = 0;

  addProductForm = this.formBuilder.group({
    is_dummy_sku: this.is_dummy_sku,
    external_product_id: "",
    product_name: "",
    sku: "",
    productQuantity: 1,
    quantity: "1",
    discount: "",
    list_price: "",
    floor_price: "",
    principle: "",
    product_manager: "",
    standard_warranty: "",
    extended_warranty: "",
    tax_rate: "",
    customer_tax_code: "",
    tax_code: "",
    category: "",
    local_distribution: "",
  });

  editProductForm = this.formBuilder.group({
    product_name: "",
    sku: "",
    quantity: "",
    discount: "",
    list_price: "",
    floor_price: "",
    principle: "",
    product_manager: "",
    standard_warranty: "",
    extended_warranty: "",
    tax_rate: "",
    customer_tax_code: "",
    tax_code: "",
    category: "",
    local_distribution: "",
  });

  opportunityDetailForm1 = this.formBuilder.group({
    topic: "",
    customer_contact_id: "",
    customer_contact2_id: "",
    status_id: "",
    stages_id: "",
    is_include_in_forecast: "",
  });

  opportunityDetailForm2 = this.formBuilder.group({
    credit_term: 0,
    credit_limit: 0,
    hospital_bed_value: 0,
    hospital_class_code: 0,
    category_code: 0,
    subcategory_code: 0,
    geographical_zone: 0,
    segment_code: 0,
    bed_range: 0,
    tax_code: 0,
    sold_to: "",
    ship_to: "",
    bill_to: "",
    request_delivery_date: "",
    estimated_delivery_date: "",
    estimated_po_date: "",
    estimated_invoice_date: "",
    care_area: 0,
    hospital_department: 0,
  });

  forecastForm = this.formBuilder.group({
    preferred_vendor: "",
    funding_status: "",
    funding_source: "",
    reason: "",
    competitor_id: "",
  });

  productId: any;
  primaryContact: any[] = [];
  primaryContactId: any;
  is_edit_competitor: boolean;
  competitor_id: any;
  data_area_id: any;
  company_name: any;
  external_id: any;
  quote_id: any;
  quotation_detail: any;
  quotations: any[] = [];
  is_quotation_id_selected: boolean;
  quotation_product: any[] = [];
  sub_total: any;
  quotation_product_tax: any;
  quotation_product_discount: any;
  quotation_total: any;
  terms: any;
  quotation_mile_stone: any[] = [];
  quotation_payment_schedules: any[] = [];
  quotation_additional_costs: any;

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.icons = this.appService.getIconsView("cil");

    this.filteredProductList = this.productControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.productList.slice()))
    );

    this.route.params.subscribe((event) => {
      this.opportunity_id = event.opportunityId;
    });

    this.appService
      .getQuery("/opportunity/detail/" + this.opportunity_id, null)
      .subscribe((data: any) => {
        this.detail = data["data"];
        this.external_id = this.detail.customer.external_id;
        this.data_area_id = this.detail.data_area_id;
        // this.data_area_id = this.detail.customer.data_area_id;
        this.company_name = this.detail.customer.company_name;
        this.opportunityDetailForm1.patchValue({
          topic: data["data"]["topic"],
          customer_contact_id: data["data"]["customer_contact_id"],
          customer_contact2_id: data["data"]["customer_contact2_id"],
          status_id: data["data"]["status_id"],
          stages_id: data["data"]["stage_id"],
          is_include_in_forecast: data["data"]["is_include_in_forecast"],
        });
        if (
          this.detail.customer &&
          (data["data"]["sold_to"] != null ||
            data["data"]["ship_to"]["address"] != null ||
            data["data"]["bill_to"]["address"] != null)
        ) {
          this.detail_not_editable = true;
          this.opportunityDetailForm2.patchValue({
            credit_term: data["data"]["customer"]["credit_term"],
            credit_limit: data["data"]["customer"]["credit_limit"],
            hospital_bed_value: data["data"]["customer"]["hospital_bed_value"],
            hospital_class_code:
              data["data"]["customer"]["hospital_class_code"],
            category_code: data["data"]["customer"]["category_code"],
            subcategory_code: data["data"]["customer"]["subcategory_code"],
            geographical_zone: data["data"]["customer"]["geographical_zone"],
            segment_code: data["data"]["customer"]["segment_code"],
            tax_code: data["data"]["customer"]["tax_code"],
            bed_range: data["data"]["customer"]["range_code"],
            sold_to: data["data"]["sold_to"]["address"],
            ship_to: data["data"]["ship_to"]["address"],
            bill_to: data["data"]["bill_to"]["address"],
            request_delivery_date: data["data"]["request_delivery_date"],
            estimated_delivery_date: data["data"]["estimated_delivery_date"],
            estimated_po_date: data["data"]["estimated_po_date"],
            estimated_invoice_date: data["data"]["estimated_invoice_date"],
            care_area: data["data"]["care_area"],
            hospital_department: data["data"]["hospital_department"],
          });
        }

        // customer-contacts
        this.appService
          // company_name
          // this.detail["data_area_id"]
          // external_id=" +
          //       this.detail["customer"]["external_id"]
          .getQuery(
            "/opportunity/get-customer-contacts?data_area_id=" +
              this.detail["data_area_id"] +
              "&&external_id=" +
              this.detail["customer"]["external_id"],
            null
          )
          .subscribe((data) => {
            this.primaryContact =
              data["data"]["primary_contact"]["primary_customer"];
            this.primaryContactId = data["data"]["primary_contact"]["id"];
            this.customer_contacts = data["data"]["contacts"];
          });
      });

    // Forecast
    this.appService
      .getQuery("/opportunity/forecast/" + this.opportunity_id, null)
      .subscribe((data) => {
        this.forecastForm.patchValue({
          preferred_vendor: data["data"]["preferred_vendor"],
          funding_status: data["data"]["funding_status"],
          funding_source: data["data"]["funding_source"],
          reason: data["data"]["reason"],
          competitor_id: data["data"]["competitor_id"],
        });
        this.forecast_category = data["data"]["forecast_category"];
      });

    // product-list
    this.appService
      .getQuery("/opportunity/product-list/" + this.opportunity_id, null)
      .subscribe((data) => {
        this.product_options = data["data"];
        // let products = data["data"].products;
      });

    // competitor
    this.getCompetitorList();

    // status
    this.appService.getQuery("/opportunity-status", null).subscribe((data) => {
      this.statuses = data["data"];
    });
    //stages
    this.appService.getQuery("/opportunity/stages", null).subscribe((data) => {
      this.stages = data["data"];
    });
    // funding-source
    this.appService
      .getQuery("/opportunity-funding-source", null)
      .subscribe((data) => {
        this.funding_source = data["data"];
      });

    // funding-status
    this.appService
      .getQuery("/opportunity-funding-status", null)
      .subscribe((data) => {
        this.funding_status = data["data"];
      });

    // pre-vendor-type
    this.appService
      .getQuery("/opportunity-pre-vendor-type", null)
      .subscribe((data) => {
        this.preferred_vendor_types = data["data"];
      });

    // active-list
    this.appService
      .getQuery("/care-area/active-list", null)
      .subscribe((data) => {
        this.care_areas = data["data"];
      });

    //quotation-list
    // if (this.quote_id) {
    this.getOppertunityQuotationList(this.opportunity_id);
    // this.getOppertunityQuotationList(9);
    // }
  }
  getCompetitorList() {
    this.appService
      .getQuery("/opportunity/competitor/" + this.opportunity_id, null)
      .subscribe((data) => {
        this.competitors = data["data"];
      });
  }

  setDummySku() {
    this.is_dummy_sku = 1;
  }

  updateDetail() {
    this.appService
      .postQuery("/opportunity/update", {
        id: this.opportunity_id,
        topic: this.opportunityDetailForm1.value.topic,
        customer_contact_id:
          this.opportunityDetailForm1.value.customer_contact_id,
        customer_contact2_id:
          this.opportunityDetailForm1.value.customer_contact2_id,
        status_id: this.opportunityDetailForm1.value.status_id,
        stages_id: this.opportunityDetailForm1.value.stages_id,
        is_include_in_forecast:
          this.opportunityDetailForm1.value.is_include_in_forecast,
        credit_term: this.opportunityDetailForm2.value.credit_term,
        credit_limit: this.opportunityDetailForm2.value.credit_limit,
        hospital_bed_value:
          this.opportunityDetailForm2.value.hospital_bed_value,
        hospital_class_code:
          this.opportunityDetailForm2.value.hospital_class_code,
        category_code: this.opportunityDetailForm2.value.category_code,
        subcategory_code: this.opportunityDetailForm2.value.subcategory_code,
        geographical_zone: this.opportunityDetailForm2.value.geographical_zone,
        segment_code: this.opportunityDetailForm2.value.segment_code,
        tax_code: this.opportunityDetailForm2.value.tax_code,
        sold_to: this.opportunityDetailForm2.value.sold_to,
        ship_to: this.opportunityDetailForm2.value.ship_to,
        bill_to: this.opportunityDetailForm2.value.bill_to,
        request_delivery_date:
          this.opportunityDetailForm2.value.request_delivery_date,
        estimated_delivery_date:
          this.opportunityDetailForm2.value.estimated_delivery_date,
        estimated_po_date: this.opportunityDetailForm2.value.estimated_po_date,
        estimated_invoice_date:
          this.opportunityDetailForm2.value.estimated_invoice_date,
        care_area: this.opportunityDetailForm2.value.care_area,
        hospital_department:
          this.opportunityDetailForm2.value.hospital_department,
      })
      .subscribe((data) => {});
  }

  updateForecast() {
    this.appService
      .postQuery("/opportunity/forecast", {
        opportunity_id: this.opportunity_id,
        reason: this.forecastForm.value.reason,
        preferred_vendor: this.forecastForm.value.preferred_vendor,
        funding_status: this.forecastForm.value.funding_status,
        funding_source: this.forecastForm.value.funding_source,
        competitor_id: this.forecastForm.value.competitor_id,
      })
      .subscribe((data) => {
        this.forecast_category = data["data"]["forecast_category"];
      });
  }

  updateProduct() {
    this.appService
      .postQuery("/opportunity/update-product", {
        opportunity_product_id: this.editing_product,
        quantity: this.editProductForm.value.quantity,
        discount: this.editProductForm.value.discount,
        unit_price: this.editProductForm.value.list_price,
        floor_price: this.editProductForm.value.floor_price,
        principle: this.editProductForm.value.principle,
        product_manager: this.editProductForm.value.product_manager,
        standard_warranty: this.editProductForm.value.standard_warranty,
        extended_warranty: this.editProductForm.value.extended_warranty,
        tax_rate: this.editProductForm.value.tax_rate,
        customer_tax_code: this.editProductForm.value.customer_tax_code,
        tax_code: this.editProductForm.value.tax_code,
        category: this.editProductForm.value.category,
        local_distribution: this.editProductForm.value.local_distribution,
      })
      .subscribe((data) => {
        this.editProductModal.hide();
      });
  }

  productSelectedRadio(product) {
    this.is_dummy_sku = 0;

    this.addProductForm.patchValue({
      is_dummy_sku: this.is_dummy_sku,
      external_product_id: product.id,
      product_name: product.name,
      sku: product.sku,
      quantity: "",
      discount: "",
      list_price: product.amount,
      floor_price: product.amount,
      principle: product.principle,
      product_manager: "",
      standard_warranty: product.std_warranty,
      extended_warranty: "",
      tax_rate: product.tax_rate,
      customer_tax_code: "",
      tax_code: product.tax_code,
      category: "",
      local_distribution: "",
    });
  }
  productSelected(value, index) {
    this.productId = value.id;
    this.sku[index] = value.sku;
    this.product_name[index] = value.name;
    this.external_product_id[index] = value.id;
  }

  addOption() {
    this.appService
      .postQuery("/opportunity/create-product-option", {
        opportunity_id: this.opportunity_id,
      })
      .subscribe((data) => {
        this.product_options.push(data["data"]);
      });
  }
  productById(id) {
    this.appService
      .getQuery("/opportunity/get-opportunity-product?id=" + id)
      .subscribe((data) => {
        this.editProductForm.patchValue({
          product_name: data["data"][0]["name"],
          sku: data["data"][0]["sku"],
          quantity: data["data"][0]["quantity"],
          discount: data["data"][0]["discount"],
          list_price: data["data"][0]["unit_price"],
          floor_price: data["data"][0]["floor_price"],
          principle: data["data"][0]["principle"],
          product_manager: data["data"][0]["product_manager"],
          standard_warranty: data["data"][0]["standard_warranty"],
          extended_warranty: data["data"][0]["extended_warranty"],
          tax_rate: data["data"][0]["tax_rate"],

          customer_tax_code: data["data"][0]["customer_tax_code"],
          tax_code: data["data"][0]["tax_code"],
          category: data["data"][0]["category"],
          local_distribution: data["data"][0]["local_distribution"],
        });
      });
  }

  addProduct(index, option_id, check) {
    if (
      this.quantity[index] ||
      this.unit_price[index] ||
      this.discount[index]
    ) {
      this.appService
        .postQuery("/opportunity/create-product", {
          is_dummy_sku: this.is_dummy_sku,
          opportunity_product_group_id: option_id,
          name: this.product_name[index],
          sku: this.sku[index],
          product_id: this.external_product_id[index],
          quantity: this.quantity[index],
          unit_price: this.unit_price[index],
          total_price: this.total_price[index],
          discount: this.discount[index],
          amount: this.amount[index],
        })
        .subscribe(
          (data) => {
            this.product_options[index].products.push(data["data"]);
          },
          (error) => {
            this.alertBody = "Please enter required fields";
            this.dangerModal.show();
          }
        );
    } else {
      this.alertBody = "Please enter required fields";
      this.dangerModal.show();
    }
  }

  addFullProduct() {
    this.appService
      .postQuery("/opportunity/create-product", {
        is_dummy_sku: this.is_dummy_sku,
        product_id: this.addProductForm.value.external_product_id,
        opportunity_product_group_id: this.active_option_id,
        name: this.addProductForm.value.product_name,
        sku: this.addProductForm.value.sku,
        quantity: this.addProductForm.value.productQuantity,
        // quantity: this.addProductForm.value.quantity,
        unit_price: this.addProductForm.value.list_price,
        total_price:
          this.addProductForm.value.quantity *
          this.addProductForm.value.list_price,
        discount: this.addProductForm.value.discount,
        amount:
          this.addProductForm.value.quantity *
            this.addProductForm.value.list_price -
          this.addProductForm.value.discount,
        product_manager: this.addProductForm.value.product_manager,
        standard_warranty: this.addProductForm.value.standard_warranty,
        extended_warranty: this.addProductForm.value.extended_warranty,
        tax_rate: this.addProductForm.value.tax_rate,
        tax_code: this.addProductForm.value.tax_code,
        customer_tax_code: this.addProductForm.value.customer_tax_code,
        local_distribution: this.addProductForm.value.local_distribution,
        category: this.addProductForm.value.category,
      })
      .subscribe((data) => {
        this.product_options[this.default_active_option_tab].products.push(
          data["data"]
        );
        this.addProductForm.reset();
        this.addProductModal.hide();
      });
  }
  convertToQuotation(index, option_id) {
    // company: this.company_name,
    // external_id: this.external_id,
    // data_area_id: this.data_area_id,

    this.active_option_id = option_id;
    // let group_id = option_id

    this.appService
      .postQuery("/opportunity/convert-product-to-quote", {
        company_name: this.company_name,
        external_id: this.external_id,
        data_area_id: this.data_area_id,
        opportunity_id: this.opportunity_id,
        product_option_id: this.active_option_id,
      })
      .subscribe((data) => {
        this.quote_id = data["data"]["quote_id"];

        this.getOppertunityQuotationList(this.quote_id);
        // this.getOppertunityQuotationList(this.quote_id);
      });
  }

  cloneProduct(index, product_id) {
    this.appService
      .postQuery("/opportunity/clone-product", {
        opportunity_product_id: product_id,
      })
      .subscribe((data) => {
        this.product_options[index].products.push(data["data"]);
        this.product_name[index] =
          this.sku[index] =
          this.quantity[index] =
          this.unit_price[index] =
          this.total_price[index] =
          this.discount[index] =
          this.amount[index] =
            "";
      });
  }

  deleteProduct(index1, index2, product_id) {
    this.appService
      .postQuery("/opportunity/delete-product", {
        opportunity_product_id: product_id,
      })
      .subscribe((data) => {
        this.product_options[index1].products.splice(index2, 1);
      });
  }

  openAddProductModal(option, index, check) {
    this.addLine = check;
    this.active_option_id = option.id;
    this.default_active_option_tab = index;
    this.productList.splice(0, this.productList.length); //clear search
    this.addProductModal.show();
  }

  openEditProductModal(index1, index2, product_id) {
    this.editProductModal.show();
    this.editing_product = product_id;
    this.editing_product_index1 = index1;
    this.editing_product_index2 = index2;

    this.productById(product_id);
  }

  openDeleteOptionModal(index, option_id) {
    this.deleteOptionModal.show();
    this.delete_option_index = index;
    this.delete_option_id = option_id;
  }

  openCloneOptionModal(index, option_id) {
    this.cloneOptionModal.show();
    this.clone_option_id = option_id;
  }

  cloneOption() {
    this.appService
      .postQuery("/opportunity/clone-product-option", {
        id: this.clone_option_id,
      })
      .subscribe((data) => {
        this.product_options.push(data["data"]);
        this.cloneOptionModal.hide();
      });
  }

  setDefaultOption(index, option_id) {
    this.appService
      .postQuery("/opportunity/set-as-default-product-option", {
        id: option_id,
      })
      .subscribe((data) => {
        this.setDefaultOptionSuccessModal.show();

        for (let i = 0; i < this.product_options.length; i++) {
          this.product_options[i].is_default = 0;
        }

        this.product_options[index].is_default = 1;
      });
  }

  deleteOption() {
    this.appService
      .postQuery("/opportunity/delete-product-option", {
        id: this.delete_option_id,
      })
      .subscribe((data) => {
        this.product_options.splice(this.delete_option_index, 1);
        this.deleteOptionModal.hide();
      });
  }

  addCompetitor() {
    if (this.is_edit_competitor == true) {
      this.appService
        .putQuery("/opportunity-competitor/" + this.competitor_id, {
          amount: this.competitor_amount,
        })
        .subscribe((data: any) => {
          this.alertBody = data.code;
          this.successModal.show();
          this.getCompetitorList();
          setTimeout(() => {
            this.successModal.hide();
            this.is_edit_competitor = false;
            this.competitor_name = "";
            this.competitor_amount = 0;
          }, 2000);
        });
    } else {
      this.appService
        .postQuery("/opportunity/create-competitor", {
          opportunity_id: this.opportunity_id,
          name: this.competitor_name,
          amount: this.competitor_amount,
        })
        .subscribe((data) => {
          this.competitors.push(data["data"]);
          // this.competitor_name = this.competitor_amount = "";
        });
    }
  }
  // opportunityCompetitorSpecificUpdate
  editCompetitor(index, competitorAmount, competitorName, competitorId, check) {
    this.is_edit_competitor = check;
    this.competitor_amount = competitorAmount;
    this.competitor_name = competitorName;
    this.competitor_id = competitorId;
  }

  getOppertunityQuotationList(quotation_id) {
    this.appService
      .getQuery("/quote/" + quotation_id + "/edit")
      .subscribe((data) => {
        this.quotation_detail = data["data"]["quotation"];

        this.quotation_product = data["data"]["quotation"]["products"];

        this.quotation_product.forEach((value) => {
          this.sub_total = value.amount;
          this.quotation_product_tax = value.tax_rate;
          this.quotation_product_discount = value.discount;
          this.quotation_total = value.amount;
          this.terms = value.terms_and_conditions;
        });
        this.quotation_mile_stone =
          data["data"]["quotation"]["billing_milestones"];

        this.quotation_payment_schedules =
          data["data"]["quotation"]["payment_schedules"];

        this.quotation_additional_costs =
          data["data"]["quotation"]["additional_costs"];
      });
  }
  requestQuotationApproval() {
    this.appService
      .postQuery("/quote/request-approval/", {
        id: 9,
      })
      .subscribe((data) => {
        console.log("approval-data: ", data);
      });
  }

  calculateSubTotal(index) {
    let sum = 0;

    for (let i = 0; i < this.product_options[index].products.length; i++) {
      sum += this.product_options[index].products[i].total_price;
    }

    return sum;
  }

  calculateDiscount(index) {
    let sum = 0;

    for (let i = 0; i < this.product_options[index].products.length; i++) {
      sum +=
        this.product_options[index].products[i].total_price *
        (this.product_options[index].products[i].discount / 100);
    }

    return sum;
  }

  calculateNetAmount(index) {
    let sum = 0;

    for (let i = 0; i < this.product_options[index].products.length; i++) {
      sum +=
        this.product_options[index].products[i].total_price *
        ((100 - this.product_options[index].products[i].discount) / 100);
    }

    return sum;
  }

  calculateAmount(index) {
    this.total_price[index] =
      (this.unit_price[index] ? this.unit_price[index] : 0) *
      (this.quantity[index] ? this.quantity[index] : 0);
    this.discount[index] = this.discount[index] ? this.discount[index] : 0;
    this.amount[index] =
      (this.total_price[index] ? this.total_price[index] : 0) *
      ((100 - (this.discount[index] ? this.discount[index] : 0)) / 100);
  }

  //product filter functions
  displayFn(product: Product): string {
    return product && product.name ? product.name : "";
  }

  //product filter functions
  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();

    return this.productList.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  //product filter functions
  productSearch(keyword): void {
    if (keyword.length >= 2) {
      this.appService
        .getQuery("/opportunity/get-product?product_name=" + keyword)
        .subscribe((data) => {
          if (data["data"].length > 0) {
            this.productList.splice(0, this.productList.length);

            data["data"].forEach((value) => {
              this.productList.push(value);
            });
          }
        });
    }
  }

  productSearch2(): void {
    this.appService
      .getQuery(
        "/opportunity/get-product?product_name=" + this.search_product_name
      )
      .subscribe((data) => {
        if (data["data"].length > 0) {
          this.productList.splice(0, this.productList.length);

          data["data"].forEach((value) => {
            this.productList.push(value);
          });
        }
      });
  }

  increaseProductQuantity() {
    this.productQuantity++;
  }
  decrementProductQuantity() {
    this.productQuantity--;
  }
}
