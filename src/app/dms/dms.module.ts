
// Framework.
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies.
//
import { PrimeNgModule } from '../sharedModule/prime-ng.module';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

// Local.
//
import { DmsRoutingModule } from './dms-routing.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { providersForEnvironment } from './services/providers';
import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingEntityComponent } from './components/bookings/booking-entity/booking-entity.component';
import { BookingApprovalComponent } from './components/bookings/booking-approval/booking-approval.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ExpandPanelComponent } from './components/widgets/expand-panel/expand-panel.component';


@NgModule({
  declarations: [
    DmsComponent,
    InventoryComponent,
    BookingsComponent,
    BookingEntityComponent,
    BookingApprovalComponent,
    ApprovalsComponent,
    CalendarComponent,
    ExpandPanelComponent

  ],
  imports: [
    CommonModule,
    DmsRoutingModule,
    CalendarModule,

    // Dependencies.
    PrimeNgModule,
    IconModule,
    ModalModule
  ],
  providers: [
    ...providersForEnvironment
  ]
})
export class DmsModule { }
