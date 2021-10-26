import { NgModule } from '@angular/core';
import { BookingFormRoutingModule } from './booking-form-routing.module';
import { BookingFormComponent } from './booking-form.component';

@NgModule({
  declarations: [
    BookingFormComponent,
  ],
  imports: [
    BookingFormRoutingModule
  ]
})
export class BookingFormModule { }
