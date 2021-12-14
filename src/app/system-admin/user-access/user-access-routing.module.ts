import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditRoleComponent } from "./edit-role/edit-role.component";
import { UserAccessSetupComponent } from "./user-access-setup.component";

const routes: Routes = [
  {
    path: "useraccess",
    redirectTo: "useraccess/user-access-setup",
    pathMatch: "full",
  },
  {
    path: "user-access-setup",
    component: UserAccessSetupComponent,
    data: {
      title: "User Access Setup",
    },
  },
  {
    path: "edit",
    component: EditRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccessRoutingModule {}
