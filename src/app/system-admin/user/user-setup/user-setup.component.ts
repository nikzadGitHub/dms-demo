import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-setup",
  templateUrl: "./user-setup.component.html",
  styleUrls: ["./user-setup.component.scss"],
})
export class UserSetupComponent implements OnInit {
  userSetupForm: FormGroup;
  parentUnitValue = [
    { name: "Hong Kong", key: "hong_kong" },
    { name: "Indonedia", key: "indonedia" },
    { name: "Malaysia", key: "malaysia" },
    { name: "Philippines", key: "philippines" },
    { name: "Singapore", key: "singapore" },
    { name: "Thailand", key: "Thailand" },
    { name: "Taiwan", key: "taiwan" },
    { name: "PO Date:", key: "po_date" },
    { name: "Vietnam", key: "vietnam" },
  ];

  menufacturerValue = [
    { name: "Hong Kong", key: "hong_kong" },
    { name: "Indonedia", key: "indonedia" },
    { name: "Malaysia", key: "malaysia" },
  ];
  dummyUserSetupData = [
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
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
}
