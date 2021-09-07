import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGroupsCreateComponent } from './product-groups-create/product-groups-create.component';
import { ProductGroupsEditComponent } from './product-groups-edit/product-groups-edit.component';
import { ProductGroupsIndexComponent } from './product-groups-index/product-groups-index.component';

const routes: Routes = [
  { path: 'index', component: ProductGroupsIndexComponent },
  { path: 'create', component: ProductGroupsCreateComponent },
  { path: ':id/edit', component: ProductGroupsEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductGroupsRoutingModule { }
