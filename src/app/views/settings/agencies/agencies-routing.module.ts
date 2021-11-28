import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesCreateComponent } from './agencies-create/agencies-create.component';
import { AgenciesEditComponent } from './agencies-edit/agencies-edit.component';
import { AgenciesIndexComponent } from './agencies-index/agencies-index.component';

const routes: Routes = [
  { path: 'index', component: AgenciesIndexComponent },
  { path: 'create', component: AgenciesCreateComponent },
  { path: ':id/edit', component: AgenciesEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
