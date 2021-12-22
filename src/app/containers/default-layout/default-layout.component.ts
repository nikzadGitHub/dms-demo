import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { navItems } from "../../_nav";
import { version } from '../../../../package.json';

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnDestroy {
  public sidebarMinimized = false;
  public version: string = version;
  public navItems = JSON.parse(JSON.stringify(navItems));
  showSideBar = true;
  userFullname: any;
  userRoleName: any;
  allUnits: any[] = [];
  currentUnit: any;
  // userRole: any;

  constructor(private router: Router, private authService: AuthService) {
    console.log("version:", this.version);
    let userRole = JSON.parse(localStorage.getItem("userRole"));

    if (userRole) {
      this.userRoleName = userRole?.roles[0]?.name;
    }
    this.authService.getUserSession().then((res) => {
      if (res?.fullname) {
        this.userFullname = res?.fullname || "";
      }
    });
    this.managerViewAccess(userRole);
    this.adminViewAccess(userRole);
    this.getUserUnit(userRole);
  }
  ngOnDestroy(): void {
    this.navItems = JSON.parse(JSON.stringify(navItems));
  }

  managerViewAccess(userRole) {
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
              name: "FMP",
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
    }
  }

  adminViewAccess(userRole) {
    userRole?.roles.forEach((role) => {
      console.log("role:", role);
      // if (role.name == "admin" || role.name == "Admin")
      if (role.name.toLowerCase() == "admin" || role.slug == "admin") {
        let adminIndex = this.navItems.find((p) => p.name == "System Admin");
        if (adminIndex > 0) {
          this.navItems.push(adminIndex);
        }

        // access - setup;
        var accessIndex1 = this.navItems.find(
          (p) => p.name == "User Access Setup"
        );
        console.log("accessIndex:-->", accessIndex1);
        if (accessIndex1 > 0) {
          this.navItems.push(accessIndex1);
        }

        // user
        var userIndex1 = this.navItems.find((p) => p.name == "User");
        console.log("userIndex:-->", userIndex1);
        if (userIndex1 > 0) {
          this.navItems.push(userIndex1);
        }

        // unit_setup
        var unitIndex1 = this.navItems.find((p) => p.name == "Unit Setup");
        console.log("unitIndex:-->", unitIndex1);
        if (unitIndex1 > 0) {
          this.navItems.push(unitIndex1);
        }
      } else {
        // system-admin
        let adminIndex = this.navItems.findIndex(
          (p) => p.name == "System Admin"
        );
        console.log("adminIndex:-->", adminIndex);
        if (adminIndex > 0) {
          this.navItems.splice(adminIndex, 1);
        }

        // access - setup;
        var accessIndex = this.navItems.findIndex(
          (p) => p.name == "User Access Setup"
        );
        console.log("accessIndex:-->", accessIndex);
        if (accessIndex > 0) {
          this.navItems.splice(accessIndex, 1);
        }

        // user
        var userIndex = this.navItems.findIndex((p) => p.name == "User");
        console.log("userIndex:-->", userIndex);
        if (userIndex > 0) {
          this.navItems.splice(userIndex, 1);
        }

        // unit_setup
        var unitIndex = this.navItems.findIndex((p) => p.name == "Unit Setup");
        console.log("unitIndex:-->", unitIndex);
        if (unitIndex > 0) {
          this.navItems.splice(unitIndex, 1);
        }
      }
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  getUserUnit(userRole) {
    console.log("userRole:", userRole);

    this.authService.getQuery("/unit-users-listing").subscribe((res: any) => {
      console.log("unit-res:", res);

      this.allUnits = res.data;
      this.allUnits.push({ id: 2, title: "new" });
    });
  }

  changeUnit(event) {
    console.log("event:", event);
    this.authService
      .putQuery("/units/switch", {
        unit_id: event.value,
      })
      .subscribe((res: any) => {
        console.log("change-unit-res:", res);
      });
  }
  logout() {
    this.authService
      .logoutUser()
      .toPromise()
      .then(() => {
        // location.replace("/login")
        this.navItems = JSON.parse(JSON.stringify(navItems));
        this.router.navigateByUrl("/login", { replaceUrl: true });
      });

    localStorage.removeItem("userRole");
    localStorage.removeItem("user-json");
    localStorage.removeItem("auth-token");
    localStorage.clear();
    // window.location.reload();
    return false;
  }
}
