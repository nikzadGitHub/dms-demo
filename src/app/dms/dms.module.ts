
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
import { providersForEnvironment } from './services/providers';
import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingFormComponent } from './components/bookings/booking-form/booking-form.component';
import { FormComponent } from './components/bookings/form/form.component';
import { MainAssetComponent } from './components/bookings/main-asset/main-asset.component';
import { BookingDemoComponent } from './components/bookings/booking-demo/booking-demo.component';
import { BookingDetailComponent } from './components/bookings/booking-demo/booking-detail/booking-detail.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    DmsComponent,
    InventoryComponent,
    BookingsComponent,
    ApprovalsComponent,
    CalendarComponent,
    BookingFormComponent,
    FormComponent,
    MainAssetComponent,
    BookingDemoComponent,
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    DmsRoutingModule,

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
