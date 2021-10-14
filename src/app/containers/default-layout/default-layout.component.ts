import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  showSideBar = true

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.match(/iPhone/i)) {
      console.log("Ios");
      this.showSideBar = false
      return 'iOS';

    }
    else if (userAgent.match(/Android/i)) {
      console.log("android");
      this.showSideBar = false
      return 'Android';
    }
    else {
      console.log("unknown");
      this.showSideBar = true
      return 'unknown';
    }
  }

  logout() {
    this.authService.logoutUser().toPromise().then(() => {
      this.router.navigateByUrl("/login",{replaceUrl: true});
    })

    return false;
  }
}
