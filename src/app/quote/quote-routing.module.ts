import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { QuoteTemplateComponent } from './quote-template/quote-template.component';
import { RevisionComponent } from './revision/revision.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'quote', redirectTo: 'quote/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: ':quoteId/view', component: ViewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/product', component: ProductsComponent },
  { path: ':quoteId/edit', component: EditComponent },
  { path: 'revision', component:RevisionComponent },
  { path: 'revision/:quoteId', component:EditComponent },
  {path: 'view/quote', component: QuoteTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
