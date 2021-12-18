import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking
import { Router, NavigationEnd } from "@angular/router";

import { IconSetService } from "@coreui/icons-angular";
import { freeSet } from "@coreui/icons";
import { LocalStorageService } from "./_services/local-storage.service";
import { filter } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { navItems } from "./_nav";

@Component({
  // tslint:disable-next-line

  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  isLoading = false;
  public navItems = JSON.parse(JSON.stringify(navItems));
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private authService: AuthService,
    private loaderService: LocalStorageService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  // console(str);

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    weekends: false,
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: "event 1", date: "2019-04-01" },
      { title: "event 2", date: "2019-04-02" },
    ],
  };

  handleDateClick(arg) {
    alert("date click! " + arg.dateStr);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.loaderService.loaderGet().subscribe((state) => {
      console.log("state------>", state);

      this.isLoading = state;
    });
    this.getDataOnpageReferesh();
  }
  // ngOnDestroy(): void {
  //   this.navItems = JSON.parse(JSON.stringify(navItems));
  // }

  getDataOnpageReferesh() {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
          console.log("Page is Refreshing");
          let userRole = JSON.parse(localStorage.getItem("userRole"));

          console.log("User-role:", userRole);

          this.authService.getProfile().subscribe(async (res: any) => {
            console.log("peofile-res:", res);
            userRole.user.country = res.data.country;
            userRole.user.currency_code = res.data.currency_code;
            userRole.user.current_unit_id = res.data.current_unit_id;
            userRole.user.data_area_id = res.data.data_area_id;
            userRole.user.email = res.data.email;
            userRole.user.full_name = res.data.full_name;
            userRole.user.id = res.data.id;
            userRole.user.is_active = res.data.is_active;
            userRole.user.is_locked = res.data.is_locked;
            userRole.user.permissions = res?.data?.permissions;
            userRole.user.roles = res?.data?.roles;
            userRole.permissions = res?.data?.permissions;
            userRole.roles = res?.data?.roles;
            await localStorage.setItem("userRole", JSON.stringify(userRole));
            await this.authService.saveUserSession(JSON.stringify(res.data));
            // this.adminViewAccess(userRole);
          });
        }
      });
  }

  // adminViewAccess(userRole) {
  //   console.log("sidemenu-Working");
  //   this.navItems = JSON.parse(JSON.stringify(navItems));
  //   userRole?.roles.forEach((role) => {
  //     console.log("role:", role);
  //     if (role.name == "admin") {
  //       let adminIndex = this.navItems.find((p) => p.name == "System Admin");
  //       if (adminIndex > 0) {
  //         this.navItems.push(adminIndex);
  //       }

  //       // access - setup;
  //       var accessIndex1 = this.navItems.find(
  //         (p) => p.name == "User Access Setup"
  //       );
  //       console.log("accessIndex:-->", accessIndex1);
  //       if (accessIndex1 > 0) {
  //         this.navItems.push(accessIndex1);
  //       }

  //       // user
  //       var userIndex1 = this.navItems.find((p) => p.name == "User");
  //       console.log("userIndex:-->", userIndex1);
  //       if (userIndex1 > 0) {
  //         this.navItems.push(userIndex1);
  //       }

  //       // unit_setup
  //       var unitIndex1 = this.navItems.find((p) => p.name == "Unit Setup");
  //       console.log("unitIndex:-->", unitIndex1);
  //       if (unitIndex1 > 0) {
  //         this.navItems.push(unitIndex1);
  //       }
  //     } else {
  //       // system-admin
  //       let adminIndex = this.navItems.findIndex(
  //         (p) => p.name == "System Admin"
  //       );
  //       console.log("adminIndex:-->", adminIndex);
  //       if (adminIndex > 0) {
  //         this.navItems.splice(adminIndex, 1);
  //       }

  //       // access - setup;
  //       var accessIndex = this.navItems.findIndex(
  //         (p) => p.name == "User Access Setup"
  //       );
  //       console.log("accessIndex:-->", accessIndex);
  //       if (accessIndex > 0) {
  //         this.navItems.splice(accessIndex, 1);
  //       }

  //       // user
  //       var userIndex = this.navItems.findIndex((p) => p.name == "User");
  //       console.log("userIndex:-->", userIndex);
  //       if (userIndex > 0) {
  //         this.navItems.splice(userIndex, 1);
  //       }

  //       // unit_setup
  //       var unitIndex = this.navItems.findIndex((p) => p.name == "Unit Setup");
  //       console.log("unitIndex:-->", unitIndex);
  //       if (unitIndex > 0) {
  //         this.navItems.splice(unitIndex, 1);
  //       }
  //     }
  //   });
  // }
}
