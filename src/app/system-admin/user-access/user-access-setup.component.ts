import { Component, OnInit, HostListener } from "@angular/core";
import { SystemAdminService } from "../system-admin.service";

@Component({
  selector: "app-user-access-setup",
  templateUrl: "./user-access-setup.component.html",
  styleUrls: ["./user-access-setup.component.scss"],
})
export class UserAccessSetupComponent implements OnInit {
  userGroupList: any = [];
  userRoleList: any = [];
  first: number = 0;
  rows: number = 10;
  searchInput: string = "";

  constructor(private systemAdminSerive: SystemAdminService) {}

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

  addRolePermission() {
    this.systemAdminSerive
      .postQuery("/role", {
        name: "seion",
      })
      .subscribe((res: any) => {
        console.log("role-added: ", res);
      });
  }

  // getUserRole() {
  //   this.systemAdminSerive.getQuery("/user-role").subscribe((res:any) => {
  //     console.log("user-role-data:", res);
  //   });
  // }
  onSubmit() {}

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
