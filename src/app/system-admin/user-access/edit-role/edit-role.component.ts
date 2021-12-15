import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { SystemAdminService } from "../../system-admin.service";

@Component({
  selector: "app-edit-role",
  templateUrl: "./edit-role.component.html",
  styleUrls: ["./edit-role.component.scss"],
})
export class EditRoleComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  permissionValue = [
    { name: "Read", key: "read", check: true },
    { name: "Create", key: "create", check: true },
    { name: "Bulk Import", key: "bulk_import", check: true },
    { name: "Edit/ Update", key: "edit/update", check: true },
    { name: "Delete", key: "delete", check: false },
    {
      name: "Verify Qualified/ Disqualified",
      key: "verify_qualified/disqualified",
      check: false,
    },
    { name: "Assignment", key: "assignment", check: false },
    { name: "Transfer", key: "transfer", check: false },
  ];
  alertBody: string;
  selectedRolePermission: any[] = [];
  roleDetail: any;
  rolePermissionsList: any[] = [];
  roleId: any;

  constructor(
    private systemAdminSerive: SystemAdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        this.roleId = params.roleId;
        this.getRoleDetail(this.roleId);
    });
    // this.route.params.subscribe((event) => {
    //   this.roleId = event.roleId;
    //   this.getRoleDetail(this.roleId);
    // });
  }

  getRoleDetail(roleId) {
    this.systemAdminSerive
      .getQuery("/role/" + roleId + "/edit")
      .subscribe((res: any) => {
        console.log("Roles-detail:", res);
        this.roleDetail = res.data;
        this.rolePermissionsList = res.data.role_permissions;
        this.selectedRolePermission = this.rolePermissionsList.filter(
          (value) => value.assigned
        );
        console.log("rolePermissionsList:", this.rolePermissionsList);
      });
  }

  updateRolePermission() {
    this.systemAdminSerive
      .putQuery("/role/" + this.roleId, {
        slugs: this.rolePermissionsList,
      })
      .subscribe(
        (res: any) => {
          console.log("update-res:", res);
          this.alertBody = res.message;
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
        },
        (error) => {
          console.log("error:", error);
          this.alertBody = error.error.message;
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }
  updatePermissionArray(event, permission) {
    permission.assigned = event.checked;
    this.rolePermissionsList.forEach((value) => {
      console.log("value:", value);

      if (value.id == permission.id) {
        value.assigned = permission.assigned;
      }
    });
    console.log("edit:-->", this.rolePermissionsList);
  }
}
