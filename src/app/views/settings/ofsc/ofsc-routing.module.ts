import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfscCreateComponent } from './ofsc-create/ofsc-create.component';
import { OfscEditComponent } from './ofsc-edit/ofsc-edit.component';
import { OfscIndexComponent } from './ofsc-index/ofsc-index.component';

const routes: Routes = [
  { path: 'index', component: OfscIndexComponent },
  { path: 'create', component: OfscCreateComponent },
  { path: ':id/edit', component: OfscEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfscRoutingModule { }
