import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OctCreateComponent } from './oct-create/oct-create.component';
import { OctEditComponent } from './oct-edit/oct-edit.component';
import { OctIndexComponent } from './oct-index/oct-index.component';

const routes: Routes = [
  { path: 'index', component: OctIndexComponent },
  { path: 'create', component: OctCreateComponent },
  { path: ':id/edit', component: OctEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OctRoutingModule { }
