import { Component, OnInit } from "@angular/core";
import { dataTool } from "echarts";
import { ProspectsService } from "../prospects.service";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-prospect-create",
  templateUrl: "./prospect-create.component.html",
  styleUrls: ["./prospect-create.component.scss"],
})
export class ProspectCreateComponent implements OnInit {
  departmentList: any[] = [];
  prospectForm: FormGroup;
  constructor(
    public prospectsService: ProspectsService,
    private formBuilder: FormBuilder
  ) {
    this.prospectForm = this.formBuilder.group({
      prospect_owner: "",
      company_name: "",
      contact_name: "",
      department: "",
      email: "",
      mobile_number: "",
      office_phone_number: "",
      address: "",
      postcode: "",
      state: "",
      country: "",
      prospect_type: "",
      source: "",
      hospital_class: "",
      segment: "",
      customer_category: "",
      customer_subcategory: "",
      hospital_bed: "",
      hospital_bed_exact: "",
      region_id: "",
      customer_tax_code: "",
    });
  }

  ngOnInit(): void {
    this.createProspect();
  }
  createProspect() {
    this.prospectsService.getProspectCreate().subscribe((res: any) => {
      console.log("this is res", res);
      this.departmentList = res.data;
      this.departmentList.forEach((data) => {
        this.prospectForm.patchValue({
          prospect_owner: data.lead_owner,
          company_name: data.company_name,
          contact_name: "",
          department: "",
          email: "",
          mobile_number: "",
          office_phone_number: "",
          address: "",
          postcode: "",
          state: "",
          country: "",
          prospect_type: "",
          source: "",
          hospital_class: "",
          segment: "",
          customer_category: "",
          customer_subcategory: "",
          hospital_bed: "",
          hospital_bed_exact: "",
          region_id: "",
          customer_tax_code: "",
        });
      });
    });
  }

  saveProspect() {
    let data = {
      lead_owner: this.prospectForm.value.prospect_owner,
      prospect_type: this.prospectForm.value.prospect_type,
      company_name: this.prospectForm.value.company_name,
      contact_name: this.prospectForm.value.contact_name,
      department: this.prospectForm.value.department,
      email: this.prospectForm.value.email,
      mobile_number: this.prospectForm.value.mobile_number,
      office_number: this.prospectForm.value.office_phone_number,
      address: this.prospectForm.value.address,
      postcode: this.prospectForm.value.postcode,
      state: this.prospectForm.value.state,
      country: this.prospectForm.value.country,
      source: this.prospectForm.value.source,
      other_source: this.prospectForm.value,
      hospital_class_code: this.prospectForm.value.hospital_class,
      segment_code: this.prospectForm.value.segment,
      category_code: this.prospectForm.value.customer_category,
      subcategory_code: this.prospectForm.value.customer_subcategory,
      hospital_bed_value: this.prospectForm.value.hospital_bed,
      range_code: this.prospectForm.value.region_id,
      region_id: this.prospectForm.value.region_id,
      customer_tax_code: this.prospectForm.value.customer_tax_code,
      lead_customer_id: this.prospectForm.value,
      customer_code: this.prospectForm.value.customer_category,
      contact_id: this.prospectForm.value.contact_name,
    };
    this.prospectsService.storeProspect(data).subscribe((res: any) => {
      console.log(res, "this is save prospect");
    });
  }
}
