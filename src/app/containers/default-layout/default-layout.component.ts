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
  userFullname:any;

  constructor(private router: Router, private authService: AuthService) {
    let userRole = localStorage.getItem('userRole')
    this.authService.getUserSession().then((res) => {
      if (res.fullname) {
        this.userFullname = res.fullname || '';
      }
    });
    if(userRole == 'false'){
      var index = this.navItems.findIndex(p => p.name == "Contact");
      var index1 = this.navItems.findIndex(p => p.name == "Manager View");
      if(index1 > 0 ){
        this.navItems.splice(index1,1)
      }
      this.navItems.splice(index+1 , 0, {
        divider: true,
        },
        {
        name: 'Manager View',
        url: '/managerview',
        icon: 'cil-group',
        children: [
          {
            name: 'Approval',
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
      },);
    }else{
      var index1 = this.navItems.findIndex(p => p.name == "Manager View");
      if(index1 > 0 ){
        this.navItems.splice(index1,1)
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

    return false;
  }
}
