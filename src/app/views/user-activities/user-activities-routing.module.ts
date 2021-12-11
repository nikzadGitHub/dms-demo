import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserActivitiesComponent } from "./user-activities.component";
import { CreateActivityComponent } from "./create-activity/create-activity.component";
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
  { path: 'create', component: CreateActivityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserActivitiesRoutingModule {}
