import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { SystemAdminService } from "../../system-admin.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  userList: any = [];
  first: number = 0;
  rows: number = 10;
  searchInput: string = "";

  constructor(
    private systemAdminSerive: SystemAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserRole();
    // this.fetchUserList();
  }

  getUserRole() {
    this.systemAdminSerive.getQuery("/user-role").subscribe((res: any) => {
      console.log("user-role-data:", res);
      this.userList = res.data;
    });
  }
  createUser() {
    this.router.navigate(["user/create-user"]);
  }

  getUserRoleDetail(userRoleId) {
    let navigate: NavigationExtras = {
      queryParams: {
        userRoleId: userRoleId,
      },
    };
    this.router.navigate(["user/create-user"], navigate);
  }
  fetchUserList() {
    this.userList = [
      {
        userName: "jack.lee@idsmed.com",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userName: "kim.tan@idsmed.com",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userName: "alex.tan@idsmed.com",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userName: "vicky.lee@idsmed.com",
        status: "Active",
        createdDate: "17-Jul-2021",
      },
      {
        userName: "albert.wong@idsmed.com",
        status: "Suspended",
        createdDate: "17-Jul-2021",
      },
      {
        userName: "shimi.ong@idsmed.com",
        status: "Suspended",
        createdDate: "17-Jul-2021",
      },
    ];
  }

  onSubmit() {}
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
    return this.userList
      ? this.first === this.userList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true;
  }
}
