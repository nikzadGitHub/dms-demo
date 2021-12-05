import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { LeadsService } from "../leads.service";
import * as moment from 'moment';

@Component({
  selector: "app-leads-verify",
  templateUrl: "./leads-verify.component.html",
  styleUrls: ["./leads-verify.component.scss"],
})
export class LeadsVerifyComponent implements OnInit {
  moment: any = moment;
  public autoResize: boolean = true;
  @ViewChild("successModal") successModal: ModalDirective;
  id: any;
  alertBody: string;
  form: FormGroup;
  reasons: any = ["Customer Budget", "Low Budget", "Scam"];

  get form_controls() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    public leadsService: LeadsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: "",
      created_at: "",
      company_name: "",
      contact_name: "",
      department: "",
      email: "",
      mobile_number: "",
      office_number: "",
      address: "",
      state: "",
      country: "",
      postcode: "",
      prospect_type: "",
      source: "",
      other_source: "",
      lead_status: "",
      able_to_contact: false,
      do_we_sell_these_product: false,
      products_thats_not_selling: "",
      reason_for_disqualifying: "",
      remark: "",
      lead_owner: "",
      additional_notes: "",
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get("id")) {
        this.id = params.get("id");
        this.getData(params.get("id"));
      }
    });
  }

  getData(id) {
    this.leadsService.find(id).subscribe((data) => {
      this.form.patchValue(data.data);
    });
  }

  redirectPage() {
    this.router.navigateByUrl("leads/index");
  }

  CreateProspect() {
    this.leadsService.createProspect({ id: this.id }).subscribe((res) => {
      this.alertBody = res.message || "Created Prospect Successfully";
      this.successModal.show();
    });
  }

  submit() {
    this.leadsService.update(this.id, this.form.value).subscribe((res) => {
      this.alertBody = res.message || "Updated Successfully";
      this.id = res.data.value;
      this.successModal.show();
    });
  }
}
