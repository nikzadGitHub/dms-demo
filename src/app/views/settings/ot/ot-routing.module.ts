import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtCreateComponent } from './ot-create/ot-create.component';
import { OtEditComponent } from './ot-edit/ot-edit.component';
import { OtIndexComponent } from './ot-index/ot-index.component';

const routes: Routes = [
  { path: 'index', component: OtIndexComponent },
  { path: 'create', component: OtCreateComponent },
  { path: ':id/edit', component: OtEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtRoutingModule { }
