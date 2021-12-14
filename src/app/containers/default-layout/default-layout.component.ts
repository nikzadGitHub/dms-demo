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

  constructor(private router: Router, private authService: AuthService) {
    let userRole = JSON.parse(localStorage.getItem("userRole"));
    if (userRole) {
      this.userRoleName = userRole?.roles[0]?.name;
    }
    this.authService.getUserSession().then((res) => {
      if (res.fullname) {
        this.userFullname = res?.fullname || "";
      }
    });
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
      var index1 = this.navItems.findIndex((p) => p.name == "Manager View");
      if (index1 > 0) {
        this.navItems.splice(index1, 1);
      }
      this.navItems.splice(
        index + 1,
        0,
        {
          divider: true,
        },
        {
          name: 'Manager View',
          url: '/managerview',
          icon: 'cil-group',
          children: [
            {
              name: 'FPM',
              url: '/managerview',
              children: [
                {
                  name: 'Approval ',
                  url: '/managerview/approval',
                },
                {
                  name: 'Reassignment',
                  url: '/managerview/reassignment',
                },
                {
                  name: 'Deactivate/Active',
                  url: '/managerview/active',
                },
                {
                  name: 'Sales Target Setup',
                  url: '/managerview/salestargetsetup',
                },
              ]
            }, 
            {
              name: 'FPS',
              url: '/fps',
              children: [
                {
                  name: 'FPS Sku List',
                  url: '/fps/sku-listing',
                }
              ]
            }
          ]
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
      var index1 = this.navItems.findIndex((p) => p.name == "Manager View");
      if (index1 > 0) {
        this.navItems.splice(index1, 1);
      }
    }
    // else{
    //   var index1 = this.navItems.findIndex(p => p.name == "Manager View");
    //   if(index1 > 0 ){
    //     this.navItems.splice(index1,1)
    //   }
    // }
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
