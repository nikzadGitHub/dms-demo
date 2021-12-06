import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingFormComponent } from './components/bookings/booking-form/booking-form.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { BookingEntityComponent } from './components/bookings/booking-entity/booking-entity.component';
import { OpportunityBookingFormComponent } from './components/bookings/opportunity-booking-form/opportunity-booking-form.component';
import { ComingSoonComponent } from '../views/coming-soon/coming-soon.component';

export const fallbackPath = 'inventory';

export const bookingsChildren: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookingsComponent,
  },
  {
    path: 'new',
    component: BookingFormComponent,
    data: {
      title: 'Bookings Form',
    },
  },
  {
    path: 'opportunity',
    component: OpportunityBookingFormComponent,
    data: {
      title: 'Booking Opportunity Booking',
    },
  },
  {
    path: ':id',
    component: BookingEntityComponent,
    data: {
      title: 'Booking view',
    },
  },
];

export const mainChildren: Routes = [
  {
    path: '',
    redirectTo: fallbackPath,
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
    data: {
      title: 'Bookings',
    },
    children: bookingsChildren,
  },
  {
    path: 'approvals',
    component: ComingSoonComponent,
    data: {
      title: 'Approvals',
    },
  },
  {
    path: 'calendar',
    loadChildren: () => import('./components/calendar/calendar.module')
      .then(m => m.CalendarModule),
  },
  {
    path: '**',
    redirectTo: fallbackPath,
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
