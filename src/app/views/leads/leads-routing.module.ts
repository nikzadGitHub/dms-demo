import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsCreateComponent } from './leads-create/leads-create.component';
import { LeadsEditComponent } from './leads-edit/leads-edit.component';
import { LeadsImportComponent } from './leads-import/leads-import.component';
import { LeadsIndexComponent } from './leads-index/leads-index.component';
import { LeadsVerifyComponent } from './leads-verify/leads-verify.component';

const routes: Routes = [
  { path: 'index', component: LeadsIndexComponent },
  { path: 'create', component: LeadsCreateComponent },
  { path: ':id/edit', component: LeadsEditComponent },
  { path: ':id/verify', component: LeadsVerifyComponent },
  { path: 'import', component: LeadsImportComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
