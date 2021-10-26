import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components/calendar/calendar.component';

export const mainChildren = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full',
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: {
      title: 'Inventory',
    },
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: {
      title: 'Bookings',
    },
  },
  {
    path: 'approvals',
    component: ApprovalsComponent,
    data: {
      title: 'Approvals',
    },
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: 'Calendar',
    },
  },
  {
    path: '**',
    redirectTo: 'inventory',
  },
];

export const routes: Routes = [{
  path: '',
  component: DmsComponent,
  data: {
    title: 'DMS'
  },
  children: mainChildren,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmsRoutingModule { }
