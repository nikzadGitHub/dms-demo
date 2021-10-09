import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTargetSetupComponent } from './sales-target-setup/sales-target-setup.component';

const routes: Routes = [
  { path: 'salestargetsetup', component: SalesTargetSetupComponent },
  { path: '**', redirectTo: 'salestargetsetup' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerViewRoutingModule { }
