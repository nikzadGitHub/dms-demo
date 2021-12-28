import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-add-system-admin",
  templateUrl: "./add-system-admin.component.html",
  styleUrls: ["./add-system-admin.component.scss"],
})
export class AddSystemAdminComponent implements OnInit {
  dummy_data = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  selectedCities: string[];
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }

  resetForm() {}
}
