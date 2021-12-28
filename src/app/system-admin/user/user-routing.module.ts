import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoaComponent } from "./user-loa/user-loa.component";
import { UserSetupComponent } from "./user-unit/user-setup.component";
import { UserComponent } from "./add-user/user.component";
import { SystemAdminComponent } from "../admin/system-admin.component";
import { CreateUserComponent } from "./add-user/create-user/create-user.component";

// export const fallbackPath = 'user';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:,
  //   pathMatch: 'full',
  // },
  { path: "adduser", component: UserComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "userloa", component: UserLoaComponent },
  { path: "unitsetup", component: UserSetupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
