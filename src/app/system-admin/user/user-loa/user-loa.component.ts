import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SystemAdminService } from "../../system-admin.service";

@Component({
  selector: "app-user-loa",
  templateUrl: "./user-loa.component.html",
  styleUrls: ["./user-loa.component.scss"],
})
export class UserLoaComponent implements OnInit {
  userList: any = [];
  priceLevelApproval = [{ amount: "", approveBy: "" }];
  authorityForm: FormGroup;
  dummy_data = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  dummyAuthorityData = [
    {
      created_at: new Date("2021-12-02 00:37:32"),
      name: "Jack Lee",
      rate: "FSS",
      country: "Malaysia",
      main_unit: "Care Area",
      sub_unit: "West Malaysia",
      report_to: "Methew Chan",
    },

    {
      created_at: new Date("2021-10-05 00:37:32"),
      name: "Lee Chain",
      rate: "FSS-2",
      country: "Singapre",
      main_unit: "Agancy",
      sub_unit: "GE Healtcare",
      report_to: "Mr C",
    },
  ];
  allUnits: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private systemAdminSerive: SystemAdminService,
    private location: Location
  ) {
    this.authorityForm = this.formBuilder.group({
      unit: "",
      paymentTermApproval: "",
      personCharges: "",
      amount: "",
      approveBy: "",
      profitMargin: "",
      discount: "",
      cellingPriceAmount: "",
      cellingPriceApproval: "",
    });
  }

  ngOnInit(): void {
    this.getUserRole();
    this.getAllUnits();
    this.dummyAuthorityData.forEach((value) => {
      value.created_at = new Date(value.created_at);
    });
  }

  createUserLoa() {
    let data = {
      code: this.authorityForm.value.unit,
      payment_approval: this.authorityForm.value.paymentTermApproval,
      profit_margin: this.authorityForm.value.profitMargin,
      approval_discount: this.authorityForm.value.discount,
      celling_price_amount: this.authorityForm.value.cellingPriceAmount,
      celling_price_approval: this.authorityForm.value.cellingPriceApproval,
      person_charges: this.authorityForm.value.personCharges,
      price_level_approva: this.priceLevelApproval,
    };
    this.systemAdminSerive
      .postQuery("/user-loa", data)
      .subscribe((res: any) => {
        console.log("user-loa-res:", res);
      });
  }

  getUserRole() {
    this.systemAdminSerive.getQuery("/user-role").subscribe((res: any) => {
      console.log("user-role-data:", res);
      this.userList = res.data;
    });
  }
  addPriceLevelApproval() {
    this.priceLevelApproval.push({
      amount: this.authorityForm.value.amount,
      approveBy: this.authorityForm.value.approveBy,
    });
    console.log("priceLevelApproval:", this.priceLevelApproval);
  }

  getAllUnits() {
    this.systemAdminSerive.getQuery("/units").subscribe((res: any) => {
      console.log("Unit-res:", res);
      this.allUnits = res.data;
    });
  }
  deletePriceLevelRow(index) {
    // if (this.priceLevelApproval.length > 1) {
    this.priceLevelApproval.splice(index, 1);
    // }
  }
  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
}
