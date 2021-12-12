import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SystemAdminService } from "../../../system-admin.service";
import { SociService } from './../../../../soci/soci.service'

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  filtereduser: any[];
  userform: FormGroup;
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
  userList: any = [];
  userRoleList: any[] = [];
  status = [
    { status: "Active", code: "1" },
    { status: "Suspend", code: "2" },
  ];
  selectedCities: string[];
  userRoleId: any;
  isEdit: boolean;
  companies:Array<any>=[];
  units:Array<any>;
  constructor(
    private systemAdminSerive: SystemAdminService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.userform = this.formBuilder.group({
      companyName: "",
      dataAreaId: "",
      name: "",
      userAccess: "",
      email: "",
      phoneNumber: "",
      discountMargin: "",
      approvedBy: "",
      profit: "",
      unit: "",
      status: "",
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userRoleId = params.userRoleId;
      if (this.userRoleId) {
        this.isEdit = true;
        this.getUserRoleDetail(this.userRoleId);
      } else {
        this.getUserRole();
        this.getListOfRolePermission();
      }
    });
    this.systemAdminSerive
      .getAllCompamanies().subscribe((res:any) => {
        res.data.soci.forEach(ele => {
          this.companies.push(ele.customer)
        });
      });
      this.systemAdminSerive.getUnits().subscribe((res:any)=>{
        this.units = res.data
      })
  }

  getListOfRolePermission() {
    this.systemAdminSerive.getQuery("/role").subscribe((res: any) => {
      console.log("permission-role-data:", res);
      this.userRoleList = res.data;
    });
  }
  getUserRole() {
    this.systemAdminSerive.getQuery("/user-role").subscribe((res: any) => {
      console.log("user-role-data:", res);
      this.userList = res.data;
    });
  }

  getUserRoleDetail(userRoleId) {
    this.systemAdminSerive
      .getQuery("/user-role/" + userRoleId + "/edit")
      .subscribe((res: any) => {
        console.log("detail-user:", res);
        this.userRoleList = res?.data?.roles;
        this.userform.patchValue({
          name: res?.data?.full_name,
          email: res?.data?.email,
          phoneNumber: res?.data?.phone_number,
        });
      });
  }

  addUser() {
    this.systemAdminSerive
      .postQuery("/auth/create-user", {
        full_name: "saad bin abid cc",
        phone_number: "+61281234567",
        discount_margin_percent: "0.50",
        companyName: "",
        dataAreaId: "",
        name: "",
        userAccess: "",
        email: "",
        phoneNumber: "",
        discountMargin: "",
        approvedBy: "",
        profit: "",
        unit: "",
        status: "",
      })
      .subscribe((res) => {
        console.log("add-user-res:", res);
      });
  }
  filterProduct(event) {}

  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
}
