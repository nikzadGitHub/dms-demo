import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectsEditComponent } from './prospects-edit/prospects-edit.component';
import { ProspectsIndexComponent } from './prospects-index/prospects-index.component';

const routes: Routes = [
  { path: 'index', component: ProspectsIndexComponent },
  { path: ':id/edit', component: ProspectsEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsRoutingModule { }
