import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcsCreateComponent } from './opcs-create/opcs-create.component';
import { OpcsEditComponent } from './opcs-edit/opcs-edit.component';
import { OpcsIndexComponent } from './opcs-index/opcs-index.component';

const routes: Routes = [
  { path: 'index', component: OpcsIndexComponent },
  { path: 'create', component: OpcsCreateComponent },
  { path: ':id/edit', component: OpcsEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpcsRoutingModule { }
