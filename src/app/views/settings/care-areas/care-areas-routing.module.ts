import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareAreasCreateComponent } from './care-areas-create/care-areas-create.component';
import { CareAreasEditComponent } from './care-areas-edit/care-areas-edit.component';
import { CareAreasIndexComponent } from './care-areas-index/care-areas-index.component';

const routes: Routes = [
  { path: 'index', component: CareAreasIndexComponent },
  { path: 'create', component: CareAreasCreateComponent },
  { path: ':id/edit', component: CareAreasEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareAreasRoutingModule { }
