import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SystemAdminService } from "../../system-admin.service";

@Component({
  selector: "app-edit-role",
  templateUrl: "./edit-role.component.html",
  styleUrls: ["./edit-role.component.scss"],
})
export class EditRoleComponent implements OnInit {
  roleDetail: any;
  rolePermissions: any[] = [];
  roleId: any;

  constructor(
    private systemAdminSerive: SystemAdminService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((event) => {
      this.roleId = event.roleId;
      this.getRoleDetail(this.roleId);
    });

   
  }

  getRoleDetail(roleId) {
    this.systemAdminSerive
      .getQuery("/role/" + roleId + "/edit")
      .subscribe((res: any) => {
        console.log("Roles-detail:", res);
        this.roleDetail = res.data;
        this.rolePermissions = res.data.permissions
      });
  }
}
