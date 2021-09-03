import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfstCreateComponent } from './ofst-create/ofst-create.component';
import { OfstEditComponent } from './ofst-edit/ofst-edit.component';
import { OfstIndexComponent } from './ofst-index/ofst-index.component';

const routes: Routes = [
  { path: 'index', component: OfstIndexComponent },
  { path: 'create', component: OfstCreateComponent },
  { path: ':id/edit', component: OfstEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfstRoutingModule { }
