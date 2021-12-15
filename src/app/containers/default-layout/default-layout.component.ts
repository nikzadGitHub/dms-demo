import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  showSideBar = true;
  userFullname: any;
  userRoleName: any;
  // userRole: any;

  constructor(private router: Router, private authService: AuthService) {
    let userRole = JSON.parse(localStorage.getItem("userRole"));
    if (userRole) {
      this.userRoleName = userRole?.roles[0]?.name;
    }
    this.authService.getUserSession().then((res) => {
      if (res?.fullname) {
        this.userFullname = res?.fullname || "";
      }
    });
    this.managerAndAdminViewAccess(userRole);
  }

  managerAndAdminViewAccess(userRole) {
    if (
      userRole?.is_fss == false ||
      userRole?.is_director == true ||
      userRole?.is_manager == true ||
      userRole?.is_md == true ||
      userRole?.is_product_manager == true ||
      userRole?.is_product_specialist == true ||
      userRole?.is_project_director == true
    ) {
      var index = this.navItems.findIndex((p) => p.name == "Contact");
      console.log("index:-->", index);
      var index1 = this.navItems.findIndex((p) => p.name == "Manager View");
      console.log("index1:-->", index1);

      if (index1 > 0) {
        this.navItems.splice(index1, 1);
      }
      var adminIndex = this.navItems.findIndex((p) => p.name == "System Admin");
      console.log("adminIndex:-->", adminIndex);
      if (adminIndex > 0) {
        this.navItems.splice(adminIndex, 1);
      }
      var accessIndex = this.navItems.findIndex(
        (p) => p.name == "User Access Setup"
      );
      console.log("accessIndex:-->", accessIndex);
      if (accessIndex > 0) {
        this.navItems.splice(accessIndex, 1);
      }
      var userIndex = this.navItems.findIndex((p) => p.name == "User");
      console.log("userIndex:-->", userIndex);
      if (userIndex > 0) {
        this.navItems.splice(userIndex, 1);
      }
      var unitIndex = this.navItems.findIndex((p) => p.name == "Unit Setup");
      console.log("unitIndex:-->", unitIndex);
      if (unitIndex > 0) {
        this.navItems.splice(unitIndex, 1);
      }

      this.navItems.splice(
        index + 1,
        0,

        // manager-view
        {
          name: "Manager View",
          url: "/managerview",
          icon: "cil-group",
          children: [
            {
              name: "FPM",
              url: "/managerview",
              children: [
                {
                  name: "Approval ",
                  url: "/managerview/approval",
                },
                {
                  name: "Reassignment",
                  url: "/managerview/reassignment",
                },
                {
                  name: "Deactivate/Active",
                  url: "/managerview/active",
                },
                {
                  name: "Sales Target Setup",
                  url: "/managerview/salestargetsetup",
                },
              ],
            },
            {
              name: "FPS",
              url: "/fps",
              children: [
                {
                  name: "FPS Sku List",
                  url: "/fps/sku-listing",
                },
              ],
            },
          ],
        }
      );

      // unit_setup
      this.navItems.splice(
        userIndex + 1,
        0,
        {
          name: "Unit Setup",
          url: "/user/unitsetup",
          icon: "cil-screen-smartphone",
        },
        {
          divider: true,
        }
      );
      // user
      this.navItems.splice(accessIndex + 1, 0, {
        name: "User",
        url: "/user",
        icon: "cil-voice-over-record",
        children: [
          {
            name: "User",
            url: "/user/adduser",
          },
          {
            name: "User LOA",
            url: "/user/userloa",
          },
        ],
      });

      // access-setup
      this.navItems.splice(
        adminIndex + 1,
        0,
        // user access
        {
          name: "User Access Setup",
          url: "/useraccess/user-access-setup",
          icon: "cil-user-plus",
        }
      );
      // system-admin
      this.navItems.splice(index1 + 1, 0, {
        name: "System Admin",
        url: "/systemadmin",
        icon: "cil-settings",
      });
    } else if (
      userRole?.is_fss == true &&
      userRole?.is_director == false &&
      userRole?.is_manager == false &&
      userRole?.is_md == false &&
      userRole?.is_product_manager == false &&
      userRole?.is_product_specialist == false &&
      userRole?.is_project_director == false
    ) {
      // manager-view
      var index1 = this.navItems.findIndex((p) => p.name == "Manager View");
      console.log("index1:-->", index1);
      if (index1 > 0) {
        this.navItems.splice(index1, 1);
      }
      // system-admin
      var indexAdmin = this.navItems.findIndex((p) => p.name == "System Admin");
      console.log("indexAdmin:-->", indexAdmin);
      if (indexAdmin > 0) {
        this.navItems.splice(indexAdmin, 1);
      }
      // User Access Setup
      var accessIndex = this.navItems.findIndex(
        (p) => p.name == "User Access Setup"
      );
      if (accessIndex > 0) {
        this.navItems.splice(accessIndex, 1);
      }
      // user
      var userIndex = this.navItems.findIndex((p) => p.name == "User");
      if (userIndex > 0) {
        this.navItems.splice(userIndex, 1);
      }
      // unit_setup
      var unitIndex = this.navItems.findIndex((p) => p.name == "Unit Setup");
      if (unitIndex > 0) {
        this.navItems.splice(unitIndex, 1);
      }
    }
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.authService
      .logoutUser()
      .toPromise()
      .then(() => {
        this.router.navigateByUrl("/login", { replaceUrl: true });
      });

    localStorage.removeItem("userRole");
    localStorage.removeItem("user-json");
    localStorage.removeItem("auth-token");
    localStorage.clear();
    return false;
  }
}
