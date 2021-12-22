import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SystemAdminService } from "../system-admin.service";

@Component({
  selector: "app-system-admin",
  templateUrl: "./system-admin.component.html",
  styleUrls: ["./system-admin.component.scss"],
})
export class SystemAdminComponent implements OnInit {
  test: any;
  selectedValues: any;
  adminRole: any[] = [];

  constructor(
    private router: Router,
    private systemAdminSerive: SystemAdminService
  ) {}

  ngOnInit(): void {
    this.getAdminLists();
  }

  getAdminLists() {
    this.systemAdminSerive
      .postQuery("/auth/getRolesData", {
        // roles: "fss_malaysia,super-admin",
        roles: "admin,super-admin, system_admin",
      })
      .subscribe((res: any) => {
        console.log("admin-list:", res);
        this.adminRole = res.data
      });
  }
  addSystemAdmin() {
    this.router.navigate(["/systemadmin/add-system-admin"]);
  }

  onSubmit() {}

  resetForm() {}
}
