import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
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
  TeamEmailForm: FormGroup;
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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private systemAdminSerive: SystemAdminService,
    private location: Location
  ) {
    this.authorityForm = this.formBuilder.group({
      unit: "",
      paymentTermApproval: "",
      PersonCharges: "",
      amount: "",
      approveBy: "",
      profitMargin: "",
      discount: "",
      cellingPriceAmount: "",
      cellingPriceApproval: "",
      priceApprovel : this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.getUserRole();
    this.dummyAuthorityData.forEach((value) => {
      value.created_at = new Date(value.created_at);
    });
    this.TeamEmailForm = this.formBuilder.group({
      priceApprovel : this.formBuilder.array([])
    })
    this.addPriceLevelApproval()
 
  }

  getUserRole() {
    this.systemAdminSerive.getQuery("/user-role").subscribe((res: any) => {
      console.log("user-role-data:", res);
      this.userList = res.data;
    });
  }
  addPriceLevelApproval() {
    this.getPriceApprovelForm().push(this.newPriceApprovelFields())

    // this.priceLevelApproval.push({
    //   amount: this.authorityForm.value.amount,
    //   approveBy: this.authorityForm.value.approveBy,
    // });
  }
  deletePriceLevelRow(index) {
    // if (this.priceLevelApproval.length > 1) {
    // this.getPriceApprovelForm().splice(index, 1);
    this.getPriceApprovelForm().removeAt(index)
    // }
  }
  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
  getPriceApprovelForm(): FormArray{
    return this.authorityForm.get('priceApprovel') as FormArray
  }
  newPriceApprovelFields(): FormGroup{
     return this.formBuilder.group({
      amount : '',
      approvedBy: ''
    })
  }

  dynamicForm(){
    console.log('array form ',  this.authorityForm.value)

  }
}
