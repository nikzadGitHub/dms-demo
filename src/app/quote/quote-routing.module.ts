import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'quote', redirectTo: 'quote/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: ':quoteId/view', component: ViewComponent },
  { path: 'create', component: CreateComponent },
  { path: ':quoteId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
