import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-user-access",
  templateUrl: "./add-user-access.component.html",
  styleUrls: ["./add-user-access.component.scss"],
})
export class AddUserAccessComponent implements OnInit {
  leadValue = [
    { name: "Read", key: "read" },
    { name: "Create", key: "create" },
    { name: "Bulk Import", key: "bulk_import" },
    { name: "Edit/ Update", key: "edit/update" },
    { name: "Delete", key: "delete" },
    {
      name: "Verify Qualified/ Disqualified",
      key: "verify_qualified/disqualified",
    },
    { name: "Assignment", key: "assignment" },
    { name: "Transfer", key: "transfer" },
  ];

  oppertunityValue = [
    { name: "Product", key: "product" },
    { name: "Dummy SKU", key: "dummy_sku" },
    { name: "Costing", key: "costing" },
    { name: "Credit Limit", key: "credit_limit" },
    { name: "Submission", key: "submission" },
    { name: "Oppertunity", key: "oppertunity" },
  ];

  QuoteValues = [
    { name: "Quote Listing", key: "quote_listing" },
    { name: "Product", key: "product" },
    { name: "Revision", key: "revision" },
    { name: "Billing Milestone", key: "billing_Milestone" },
    { name: "Payment Schedule", key: "payemnt_schedule" },
    { name: "Confirmation", key: "confirmation" },
    {
      name: "Discount & Exceptional Pricing",
      key: "discount_and_exception_pricing",
    },
  ];

  DMS = []

  cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  selectedCities: string[];
  constructor() {}

  ngOnInit(): void {}
}
