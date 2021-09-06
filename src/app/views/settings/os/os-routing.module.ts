import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsCreateComponent } from './os-create/os-create.component';
import { OsEditComponent } from './os-edit/os-edit.component';
import { OsIndexComponent } from './os-index/os-index.component';

const routes: Routes = [
  { path: 'index', component: OsIndexComponent },
  { path: 'create', component: OsCreateComponent },
  { path: ':id/edit', component: OsEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsRoutingModule { }
