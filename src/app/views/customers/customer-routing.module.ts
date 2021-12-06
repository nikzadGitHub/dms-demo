import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from '../customers/create/create.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id/edit', component: EditComponent },
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
