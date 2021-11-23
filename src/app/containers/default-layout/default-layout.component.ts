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

    this.authService.getUserSession().then((res) => {
      if (res.fullname) {
        this.userFullname=  res.fullname || '';
      }
    });
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
