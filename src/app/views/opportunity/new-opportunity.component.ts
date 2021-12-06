import { Component, ViewChild, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { filter, map, startWith } from "rxjs/operators";
import { AppService } from "./app.service";
import { Router, ActivatedRoute } from "@angular/router";

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
export interface Company {
  id: any;
  name: string;
  external_id: any;
  data_area_id: any;
}

export interface OpportunityDetail {
  company_name: any;
  opportunity_code: any;
  created_at: any;
  currency_code: any;
  customer: any;
}

@Component({
  templateUrl: "new-opportunity.component.html",
  styleUrls: ["./opportunity.component.scss"],
  providers: [AppService],
})
export class NewOpportunityComponent implements OnInit {
  @ViewChild("addProductModal") public addProductModal: ModalDirective;
  @ViewChild("editProductModal") public editProductModal: ModalDirective;
  @ViewChild("deleteOptionModal") public deleteOptionModal: ModalDirective;
  @ViewChild("cloneOptionModal") public cloneOptionModal: ModalDirective;
  @ViewChild("setDefaultOptionSuccessModal")
  public setDefaultOptionSuccessModal: ModalDirective;

  companyControl = new FormControl();
  companies: Company[] = [];
  filteredCompanies: Observable<Company[]>;

  //submission data
  color = "#00538a";
  company_id = "";
  topic = "";
  company_id_from_lead = "";
  company_is_from_lead = false;
  company_name_from_lead = "";
  product_name: any[] = [];
  external_product_id: any[] = [];
  sku: any[] = [];
  quantity: any[] = [];
  productQuantity = 1;
  unit_price: any[] = [];
  total_price: any[] = [];
  discount: any[] = [];
  amount: any[] = [];
  product_options = [];
  care_areas = [];
  preferred_vendor_types = [];
  funding_source = [];
  funding_status = [];
  competitors = [];
  forecast_category = 0;
  detail: OpportunityDetail;
  productControl = new FormControl();
  filteredProductList: Observable<Product[]>;
  productList: Product[] = [];
  tabs = ["Option"];
  opportunity_id = "";
  addLine: boolean;
  statuses = [];
  data_area_id: any;
  external_id: any;
  name: any;
  customerId: any;
  status_id: any;
  clone_option_id = 0;
  is_dummy_sku = 0;
  delete_option_index = 0;
  delete_option_id = 0;
  active_option_id = 0;
  default_active_option_tab = 0;
  editing_product = 0;
  editing_product_index1 = 0;
  editing_product_index2 = 0;

  createOppertunityForm1 = this.formBuilder.group({
    topic: "",
    customer_contact_id: "",
    customer_contact2_id: "",
    status_id: "",
    include_in_forecast: "",
    company_name_from_lead: "",
  });

  trackingInfoDetailForm = this.formBuilder.group({
    request_delivery_date: "",
    estimated_delivery_date: "",
    estimated_po_date: "",
    estimated_invoice_date: "",
    care_area: "",
    hospital_department: "",
  });

  forecastForm = this.formBuilder.group({
    preferred_vendor: "",
    funding_status: "",
    funding_source: "",
    reason: "",
    competitor_id: "",
  });

  addProductForm = this.formBuilder.group({
    is_dummy_sku: this.is_dummy_sku,
    external_product_id: "",
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

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.filteredProductList = this.productControl.valueChanges.pipe(
    //   startWith(""),
    //   map((value) => (typeof value === "string" ? value : value.name)),
    //   map((name) => (name ? this._filter(name) : this.productList.slice()))
    // );

    this.route.queryParams.subscribe((params) => {
      this.company_id_from_lead = params.company;
      if (
        this.company_id_from_lead != "" &&
        this.company_id_from_lead !== undefined
      ) {
        console.log("company_id_from_lead: " + this.company_id_from_lead);
        this.company_is_from_lead = true;
        this.customerSearchById(this.company_id_from_lead);
      }
    });

    // primary-contact
    // this.getCustomerPrimaryContact();
    // Status
    this.getStatusList();
    this.getCareArea();
    this.getPreferedVendor();
    this.getFundingStatus();
    this.getFundingSource();
    // if(this.opportunity_id){
    // this.getProductList();
    // }
    this.filteredCompanies = this.companyControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.companies.slice()))
    );
  }

  //company filter functions
  displayFn(company: Company): string {
    return company && company.name ? company.name : "";
  }

  //company filter functions
  private _filter(name: string): Company[] {
    const filterValue = name.toLowerCase();
    if (filterValue.length >= 2) {
      this.customerSearch(filterValue);
    }

    return this.companies.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  //company filter functions
  customerSearch(keyword): void {
    this.appService
      .getQuery("/opportunity/get-customer?company_name=" + keyword)
      .subscribe((data) => {
        console.log("Customer-name: ", data["data"]);

        if (data["data"].length > 0) {
          this.companies.splice(0, this.companies.length);
          data["data"].forEach((value) => {
            console.log("value:", value);

            this.customerId = value.id;
            this.data_area_id = value.data_area_id;
            this.external_id = value.external_id;
            this.name = value.company_name;
            this.companies.push({
              id: value.id,
              name: value.company_name,
              external_id: value.external_id,
              data_area_id: value.data_area_id,
            });

            // this.getCustomerPrimaryContact();
          });
        }
      });
  }

  customerSearchById(id) {
    // console.log('in company search by id');
    this.appService
      .getQuery("/opportunity/get-customer/" + id)
      .subscribe((data) => {
        this.companies.push(data["data"]);
        this.company_id = data["data"]["id"];
        this.company_name_from_lead = data["data"]["company_name"];
        // console.log(this.companies);
      });
  }

  createOpportunity() {
    this.topic = this.createOppertunityForm1.value.topic;
    this.status_id = this.createOppertunityForm1.value.status_id;

    this.appService
      .postQuery("/opportunity/new", {
        customer_id: this.customerId,
        topic: this.topic,
        status_id: this.status_id,
        // reason: this.forecastForm.value.reason,
        // preferred_vendor: this.forecastForm.value.preferred_vendor,
        // funding_status: this.forecastForm.value.funding_status,
        // funding_source: this.forecastForm.value.funding_source,
        // competitor_id: this.forecastForm.value.competitor_id,
      })
      .subscribe((data) => {
        console.log("create-company:", data);
        this.router.navigate(["/opportunity/edit/" + data["data"].id]);
      });
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

  companySelected(value) {
    this.company_id = value.id;
  }

  getCustomerPrimaryContact() {
    // this.appService
    //   .getQuery(
    //     "/api/opportunity/get-customer-contacts?data_area_id=" +
    //       this.data_area_id +
    //       "&&external_id=" +
    //       this.external_id +
    //       "&&company_name" +
    //       this.name
    //   )
    //   .subscribe((data) => {
    //     console.log("customer-data: ", data);
    //   });
  }
  getStatusList() {
    this.appService.getQuery("/opportunity-status", null).subscribe((data) => {
      this.statuses = data["data"];
    });
  }
  getCareArea() {
    this.appService
      .getQuery("/care-area/active-list", null)
      .subscribe((data) => {
        this.care_areas = data["data"];
      });
  }

  getPreferedVendor() {
    this.appService
      .getQuery("/opportunity-pre-vendor-type", null)
      .subscribe((data) => {
        this.preferred_vendor_types = data["data"];
      });
  }

  getFundingStatus() {
    this.appService
      .getQuery("/opportunity-funding-status", null)
      .subscribe((data) => {
        this.funding_status = data["data"];
      });
  }

  getFundingSource() {
    this.appService
      .getQuery("/opportunity-funding-source", null)
      .subscribe((data) => {
        this.funding_source = data["data"];
      });
  }

  addOption() {
    this.tabs.push("Option");
    console.log("tabs-->", this.tabs);
  }

  // addOption() {
  //   this.appService
  //     .postQuery("/opportunity/create-product-option", {
  //       opportunity_id: this.opportunity_id,
  //     })
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.product_options.push(data["data"]);
  //     });
  // }

  // getProductList() {
  //   this.appService
  //     .getQuery("/opportunity/product-list/" + this.opportunity_id, null)
  //     .subscribe((data) => {
  //       console.log("product-list:", data);
  //       if(data){
  //       this.product_options = data["data"];
  //       console.log("product-data-->", this.product_options);
  //       }
  //     });
  // }

  addProduct(index, option_id) {
    this.appService
      .postQuery("/opportunity/create-product", {
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
      .subscribe((data) => {
        this.product_options[index].products.push(data["data"]);
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

  addFullProduct() {
    this.appService
      .postQuery("/opportunity/create-product", {
        is_dummy_sku: this.is_dummy_sku,
        product_id: this.addProductForm.value.external_product_id,
        opportunity_product_group_id: this.active_option_id,
        name: this.addProductForm.value.product_name,
        sku: this.addProductForm.value.sku,
        quantity: this.addProductForm.value.quantity,
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

    console.log(this.addProductForm.value);
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

  cloneOption() {
    this.appService
      .postQuery("/opportunity/clone-product-option", {
        id: this.clone_option_id,
      })
      .subscribe((data) => {
        console.log(data);
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
        console.log(data["data"]);
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

  productById(id) {
    this.appService
      .getQuery("/opportunity/get-opportunity-product?id=" + id)
      .subscribe((data) => {
        console.log(data["data"]);

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

  openAddProductModal(check) {
    this.addLine = check;
    this.addProductModal.show();
  }

  openEditProductModal(index1, index2, product_id) {
    this.editProductModal.show();
    this.editing_product = product_id;
    this.editing_product_index1 = index1;
    this.editing_product_index2 = index2;

    this.productById(product_id);
    console.log("edit product: " + product_id);
  }

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

  productSelected(value, index) {
    console.log("product SELECTED:");
    console.log(value);
    this.sku[index] = value.sku;
    this.product_name[index] = value.name;
    this.external_product_id[index] = value.id;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  increaseProductQuantity(){
    this.productQuantity++;
  }
  decrementProductQuantity(){
    this.productQuantity--;
  }
}
