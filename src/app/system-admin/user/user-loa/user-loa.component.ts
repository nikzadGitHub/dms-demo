import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-loa",
  templateUrl: "./user-loa.component.html",
  styleUrls: ["./user-loa.component.scss"],
})
export class UserLoaComponent implements OnInit {
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
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.authorityForm = this.formBuilder.group({
      unit: "",
      paymentTermApproval: "",
      PersonCharges: "",
      amount: "",
      approveBy: "",
      profitMargin: "",
      discount: "",
    });
  }

  ngOnInit(): void {
    this.dummyAuthorityData.forEach((value) => {
      value.created_at = new Date(value.created_at);
    });
  }

  addPriceLevelApproval() {
    this.priceLevelApproval.push({
      amount: this.authorityForm.value.amount,
      approveBy: this.authorityForm.value.approveBy,
    });
  }
  deletePriceLevelRow(index) {
    // if (this.priceLevelApproval.length > 1) {
      this.priceLevelApproval.splice(index, 1);
    // }
  }
}
