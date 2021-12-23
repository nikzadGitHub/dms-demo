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
        // if (event.id === 1 && event.url === event.urlAfterRedirects) {
        //   console.log("Page is Refreshing");
        //   let userRole = JSON.parse(localStorage.getItem("userRole"));

        //   console.log("User-role:", userRole);

        //   this.authService.getProfile().subscribe(async (res: any) => {
        //     console.log("peofile-res:", res);
        //     userRole.user.country = res.data.country;
        //     userRole.user.currency_code = res.data.currency_code;
        //     userRole.user.current_unit_id = res.data.current_unit_id;
        //     userRole.user.data_area_id = res.data.data_area_id;
        //     userRole.user.email = res.data.email;
        //     userRole.user.full_name = res.data.full_name;
        //     userRole.user.id = res.data.id;
        //     userRole.user.is_active = res.data.is_active;
        //     userRole.user.is_locked = res.data.is_locked;
        //     userRole.user.permissions = res?.data?.permissions;
        //     userRole.user.roles = res?.data?.roles;
        //     userRole.permissions = res?.data?.permissions;
        //     userRole.roles = res?.data?.roles;
        //     await localStorage.setItem("userRole", JSON.stringify(userRole));
        //     await this.authService.saveUserSession(JSON.stringify(res.data));
        //     // this.adminViewAccess(userRole);
        //   });
        // }
      });
  }


  getAppVersion(){

  }
}
