import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturersCreateComponent } from './manufacturers-create/manufacturers-create.component';
import { ManufacturersEditComponent } from './manufacturers-edit/manufacturers-edit.component';
import { ManufacturersIndexComponent } from './manufacturers-index/manufacturers-index.component';

const routes: Routes = [
  { path: 'index', component: ManufacturersIndexComponent },
  { path: 'create', component: ManufacturersCreateComponent },
  { path: ':id/edit', component: ManufacturersEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturersRoutingModule { }
