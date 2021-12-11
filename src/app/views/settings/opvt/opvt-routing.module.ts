import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpvtCreateComponent } from './opvt-create/opvt-create.component';
import { OpvtEditComponent } from './opvt-edit/opvt-edit.component';
import { OpvtIndexComponent } from './opvt-index/opvt-index.component';

const routes: Routes = [
  { path: 'index', component: OpvtIndexComponent },
  { path: 'create', component: OpvtCreateComponent },
  { path: ':id/edit', component: OpvtEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpvtRoutingModule { }
