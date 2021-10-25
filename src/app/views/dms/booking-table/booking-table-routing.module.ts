import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingTableComponent } from './booking-table.component';

const routes: Routes = [
  { path: '', component: BookingTableComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingTableRoutingModule { }
