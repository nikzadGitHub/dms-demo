import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmsComponent } from './dms.component';

const routes: Routes = [{ path: '', component: DmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmsRoutingModule { }
