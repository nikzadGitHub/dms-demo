import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTargetStructureComponent } from '../sales-target-structure/sales-target-structure.component';
import { SalesTargetComponent } from './sales-target.component';

const routes: Routes = [
  { path: '', component: SalesTargetComponent },
  { path: 'structure', component: SalesTargetStructureComponent },
  // { path: ':id/edit', component: ProspectsEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTargetRoutingModule { }
