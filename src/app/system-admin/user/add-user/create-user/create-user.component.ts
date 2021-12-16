import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SystemAdminService } from "../../../system-admin.service";
import { SociService } from "./../../../../soci/soci.service";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  userform: FormGroup;
  unitUserForm: FormGroup;
  userList: any = [];
  userRoleList: any[] = [];
  status = [
    { status: "Active", code: 1 },
    { status: "Suspend", code: 0 },
  ];
  selectedCities: string[];
  userRoleId: any;
  isEdit: boolean;
  companies: Array<any> = [];
  units: Array<any>;
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  alertBody: string;
  userRole: any;

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
      // discount_percentage: "",
      approvedBy: "",
      // profit_margin: "",
      // unit: "",
      status: "",
    });

    this.unitUserForm = this.formBuilder.group({
      unitUserArray: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userRoleId = params.userRoleId;
      if (this.userRoleId) {
        this.isEdit = true;
        this.getListOfRolePermission();
        this.getUserRole();
        this.getUserRoleDetail(this.userRoleId);
      } else {
        this.getUserRole();
        this.getListOfRolePermission();
      }
    });
    this.systemAdminSerive.getAllCompamanies().subscribe((res: any) => {
      res.data.forEach((ele) => {
        this.companies.push(ele);
      });
    });
    this.systemAdminSerive.getUnits().subscribe((res: any) => {
      this.units = res.data;
      console.log("units", res.data);
    });
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
      .getQuery("/auth/user/" + userRoleId + "/edit")
      .subscribe(
        (res: any) => {
          console.log("detail-user:", res);
          setTimeout(() => {
            this.userform.patchValue({
              name: res?.data?.full_name,
              email: res?.data?.email,
              phoneNumber: res?.data?.phone_number,
              discountMargin: res?.data?.discount_margin_percent,
              profit: res?.data?.profit_percent,
              status: res?.data?.is_active,
              userAccess: res?.data?.user_access_id,
              approvedBy: Number(res?.data?.approved_by),
              unit: Number(res?.data?.unit_id),
              companyName: res?.data?.data_area_id,
            });
          }, 300);
        },
        (err) => {
          this.dangerModal.show();
          // this.alertBody = err.error.message;
          this.alertBody = "Try to get undefined data";
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
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
    this.systemAdminSerive
      .postQuery("/auth/create-user", {
        full_name: this.userform.value.name,
        phone_number: this.userform.value.phoneNumber,
        data_area_id: this.userform.value.companyName,
        user_access_id: this.userform.value.userAccess,
        email: this.userform.value.email,
        is_active: this.userform.value.status,
        unit_user: this.unitUserForm.value.unitUserArray,
        // approved_by: this.userform.value.approvedBy,
        // profit_percent: this.userform.value.profit,
        // unit_id: this.userform.value.unit,
        // discount_margin_percent: this.userform.value.discountMargin,
      })
      .subscribe(
        (res: any) => {
          console.log("add-user-res:", res);
          if (res.success) {
            // let item = this.selectedAllUnits.find(x => x.id == res.data.id)
            this.alertBody = "User Created successfully.";
            this.successModal.show();

            setTimeout(() => {
              this.successModal.hide();
              this.router.navigate(["/user/adduser"]);
              this.resetForm();
            }, 2000);
          }
        },
        (err) => {
          console.log("error:", err);
          // this.alertBody = "Error";
          this.dangerModal.show();
          this.alertBody = err.error.message;
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }

  updateUser() {
    console.log(this.userform.value, "user form");
    this.systemAdminSerive
      .putQuery("/auth/update-user/" + this.userRoleId, {
        full_name: this.userform.value.name,
        phone_number: this.userform.value.phoneNumber,
        data_area_id: this.userform.value.companyName,
        user_access_id: this.userform.value.userAccess,
        email: this.userform.value.email,
        is_active: this.userform.value.status,
        unit_user: this.unitUserForm.value.unitUserArray,
        // discount_margin_percent: this.userform.value.discountMargin,
        // approved_by: this.userform.value.approvedBy,
        // profit_percent: this.userform.value.profit,
        // unit_id: this.userform.value.unit,
      })
      .subscribe(
        (res: any) => {
          if (res.success) {
            console.log("update-user-res:", res);
            this.alertBody = "User Updated successfully.";
            this.successModal.show();
            this.resetForm();

            setTimeout(() => {
              this.successModal.hide();
              this.router.navigate(["/user/adduser"]);
            }, 2000);
          }
        },
        (err) => {
          console.log("error:", err);
          this.dangerModal.show();
          this.alertBody = err.error.message;
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }
  // userUnit() {
  //   const tmpData = JSON.parse(JSON.stringify(this.userform.value))
  //   this.addUserUnit.push({
  //     profit_margin: tmpData.profit_margin,
  //     discount_percentage: tmpData.discount_percentage,
  //     unit: tmpData.unit,
  //   });
  // }
  // deleteUserUnitRow(index) {
  //   this.addUserUnit.splice(index, 1);
  // }
  resetForm() {
    this.userform.reset();
    this.userform.markAsPristine();
    this.userform.markAsUntouched();
  }
  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }

  ////
  unitUser(): FormArray {
    return this.unitUserForm.get("unitUserArray") as FormArray;
  }

  newUnitUser(): FormGroup {
    return this.formBuilder.group({
      discount_percentage: "",
      profit_margin: "",
      unit: "",
    });
  }

  addUserUnit() {
    console.log("Adding a employee");
    this.unitUser().push(this.newUnitUser());
    console.log("form:", this.unitUserForm.value);
  }

  removeEmployee(index: number) {
    this.unitUser().removeAt(index);
  }
}
