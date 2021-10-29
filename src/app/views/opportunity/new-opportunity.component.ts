import { Component, ViewChild, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { filter, map, startWith } from "rxjs/operators";
import { AppService } from "./app.service";
import { Router, ActivatedRoute } from "@angular/router";

// export interface Product {
//   id: any;
//   uuid: string;
//   name: any;
//   data_area_id: any;
//   sku: any;
//   external_product_number: any;
//   amount: any;
//   principle: any;
//   group: any;
//   tax_code: any;
// }
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
  company_id = "";
  topic = "";
  company_id_from_lead = "";
  company_is_from_lead = false;
  company_name_from_lead = "";
  product_options = [];
  care_areas = [];
  preferred_vendor_types = [];
  funding_source = [];
  funding_status = [];
  competitors = [];
  forecast_category = 0;
  detail: OpportunityDetail;
  tabs = ["Option"];
  opportunity_id = "";
  addLine: boolean;
  statuses = [];
  data_area_id: any;
  external_id: any;
  name: any;
  customerId: any;
  status_id: any;

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

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
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

    this.filteredCompanies = this.companyControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.companies.slice()))
    );
  }

  addOption() {
    this.tabs.push("Option");
    console.log("tabs-->", this.tabs);
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
            console.log();

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
  openAddProductModal(check) {
    this.addLine = check;
    this.addProductModal.show();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
 }
}
