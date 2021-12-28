import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
const routes: Routes = [
  {
    path: "profile",
    redirectTo: "/profile",
    pathMatch: "full",
  },
  {
    path: "",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
