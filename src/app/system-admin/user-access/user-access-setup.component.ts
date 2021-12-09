import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { SystemAdminService } from "../system-admin.service";

@Component({
  selector: "app-user-access-setup",
  templateUrl: "./user-access-setup.component.html",
  styleUrls: ["./user-access-setup.component.scss"],
})
export class UserAccessSetupComponent implements OnInit {
  @ViewChild("addRoleModel")
  public addRoleModel: ModalDirective;
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;

  userGroupList: any = [];
  userRoleList: any[] = [];
  first: number = 0;
  rows: number = 10;
  searchInput: string = "";
  roleName = "";
  alertBody = "";
  dataIsSelected: boolean;
  selectedRole: any[] = [];
  selectAllRoleList: any[] = [];

  constructor(
    private systemAdminSerive: SystemAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListOfRolePermission();
    // this.fetchUserList();
  }

  getListOfRolePermission() {
    this.systemAdminSerive.getQuery("/role").subscribe((res: any) => {
      console.log("permission-role-data:", res);
      this.userRoleList = res.data;
    });
  }

  // addRolePermission() {
  //   this.router.navigate(["useraccess/add-user-access"]);
  // }
  addRole() {
    this.addRoleModel.hide();
    this.systemAdminSerive
      .postQuery("/role", {
        name: this.roleName,
      })
      .subscribe(
        (res: any) => {
          console.log("add-role-res:", res);
          this.userRoleList.unshift(res.data);
          this.alertBody = res.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
        },
        (error) => {
          this.alertBody = error.error.message;
          this.dangerModal.show();
        }
      );
  }
  selectData(event, user) {
    this.dataIsSelected = true
    console.log("Event", event);
    console.log("user", user);
  }

  selectAllData(event, user){
    console.log("Event", event);
    console.log("user", user);
    this.selectedRole = user
    // this.selectAllRoleList = this.selectedRole.slice(0,75)
  }

  fetchUserList() {
    this.userGroupList = [
      {
        userGroup: "FSS Malaysia",
        status: "Inactive",
        createdDate: "29-Oct-2021",
      },
      {
        userGroup: "FSS Singapore",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userGroup: "FSS Vietnam",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userGroup: "FSS Thailand",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userGroup: "FSS Malaysia",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userGroup: "FSS Indonesia",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
    ];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.userGroupList
      ? this.first === this.userGroupList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.userGroupList ? this.first === 0 : true;
  }
}
