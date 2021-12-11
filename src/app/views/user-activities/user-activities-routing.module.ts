import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserActivitiesComponent } from "./user-activities.component";
const routes: Routes = [
  {
    path: "activities",
    redirectTo: "/activities",
    pathMatch: "full",
  },
  {
    path: "",
    component: UserActivitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserActivitiesRoutingModule {}
