import { Component, ViewChild, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { filter, map, startWith } from "rxjs/operators";
import { AppService } from "./app.service";
import { Router, ActivatedRoute } from "@angular/router";

export interface Company {
  id: any;
  name: string;
  external_id: any;
  data_area_id: any;
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
  tabs = ["Option"];
  opportunity_id = "";
  addLine: boolean;
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
        this.companySearchById(this.company_id_from_lead);
      }
    });

    this.filteredCompanies = this.companyControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.companies.slice()))
    );
  }

  addOption() {
    // this.tabs = [ ...this.tabs[''], (this.tabs.length + 1) ];
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
      this.companySearch(filterValue);
    }

    return this.companies.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  //company filter functions
  companySearch(keyword): void {
    this.appService
      .getQuery("/opportunity/get-customer?company_name=" + keyword)
      .subscribe((data) => {
        console.log("Company-name: ", data);

        if (data["data"].length > 0) {
          this.companies.splice(0, this.companies.length);

          data["data"].forEach((value) => {
            this.companies.push({
              id: value.id,
              name: value.company_name,
              external_id: value.external_id,
              data_area_id: value.data_area_id,
            });
          });
        }
      });
  }

  companySearchById(id) {
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
    // console.log(this.companies);
    // console.log('posted company id: '+this.company_id);
    this.appService
      .postQuery("/opportunity/new", {
        customer_id: this.company_id,
        topic: this.topic,
      })
      .subscribe((data) => {
        this.router.navigate(["/opportunity/edit/" + data["data"].id]);
      });
  }

  companySelected(value) {
    this.company_id = value.id;
  }

  openAddProductModal(check) {
    this.addLine = check;
    this.addProductModal.show();
  }
}
