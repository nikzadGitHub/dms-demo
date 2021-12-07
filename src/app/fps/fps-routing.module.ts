import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/fps-form/index/index.component';
import { CreateComponent } from './components/fps-form/create/create.component';
import { SkuIndexComponent } from './components/sku/sku-index/sku-index.component';
import { SkuCreateComponent } from './components/sku/sku-create/sku-create.component';

const routes: Routes = [
  { path: 'fps-listing', component: IndexComponent },
  { path: 'fps-create', component: CreateComponent },
  { path: 'sku-listing', component: SkuIndexComponent },
  { path: 'sku-create', component: SkuCreateComponent },
  { path: '**', redirectTo: 'fps-listing' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FpsRoutingModule { }
