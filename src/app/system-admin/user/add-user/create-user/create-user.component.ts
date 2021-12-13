import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SystemAdminService } from "../../../system-admin.service";
import { SociService } from "./../../../../soci/soci.service";

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
  companies: Array<any> = [];
  units: Array<any>;
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
      }
      //  else {
      //   this.getUserRole();
      //   this.getListOfRolePermission();
      // }
    });

    // all user-roles
    this.getUserRole();
    // all user-role permission
    this.getListOfRolePermission();
    // all companies
    this.getAllCompany();

    // all units
    this.getAllUnit();
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

  getAllCompany() {
    this.systemAdminSerive
      .getQuery("/data-area-id/all")
      .subscribe((res: any) => {
        console.log("Company-res:", res);
        this.companies = res.data;
      });
  }

  getAllUnit() {
    this.systemAdminSerive.getQuery("/units").subscribe((res: any) => {
      this.units = res.data;
    });
  }

  addUser() {
    // companyName: this.userform.value.companyName,
    this.systemAdminSerive
      .postQuery("/auth/create-user", {
        full_name: this.userform.value.name,
        phone_number: this.userform.value.phoneNumber,
        discount_margin_percent: this.userform.value.discountMargin,
        data_area_id: this.userform.value.companyName,
        user_access_id: this.userform.value.userAccess,
        email: this.userform.value.email,
        approved_by: this.userform.value.approvedBy,
        profit_percent: this.userform.value.profit,
        unit_id: this.userform.value.unit,
        is_active: this.userform.value.status,
        status: this.userform.value.status,
      })
      .subscribe((res) => {
        console.log("add-user-res:", res);
      });
  }

  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
}
