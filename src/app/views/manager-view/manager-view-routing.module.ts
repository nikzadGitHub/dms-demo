import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerViewActiveComponent } from "./manager-view-active/manager-view-active.component";
import { ManagerViewReassignmentComponent } from "./manager-view-reassignment/manager-view-reassignment.component";
import { ManagerviewApprovalComponent } from "./managerview-approval/managerview-approval.component";
import { SalesTargetSetupComponent } from "./sales-target-setup/sales-target-setup.component";

const routes: Routes = [
 
  { path: "salestargetsetup", component: SalesTargetSetupComponent },
  {
    path: "approval",
    component: ManagerviewApprovalComponent,
  },
  // { path: '**', redirectTo: 'approval' },
  
  {path: 'reassignment', component:ManagerViewReassignmentComponent},
  {path: 'active', component:ManagerViewActiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerViewRoutingModule {}
