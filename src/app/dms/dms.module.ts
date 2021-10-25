import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmsRoutingModule } from './dms-routing.module';
import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    DmsComponent,
    InventoryComponent,
    BookingsComponent,
    ApprovalsComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    DmsRoutingModule
  ]
})
export class DmsModule { }
