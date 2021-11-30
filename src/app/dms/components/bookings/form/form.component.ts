import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import {MockBookingService} from '../services/mock-booking.service';
import {CustomerList} from '../../../services/customers/customer-entity';
import {MockCustomersService} from '../../../services/customers/mock-customers.service';
import { BookingService } from '../services/booking.service';
import { CustomersService } from '../../../services/customers/customers.service';
import { BookingDetail } from '../../../services/booking-entity';

/**
 * For submit the booking form
 * @class
 */
@Component({
  selector: 'app-booking-form-submit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @Input() bookingDetailList: BookingDetail;
  alertBody: string;
  alertHeader: string;
  formBooking : FormGroup;
  curDate =  new Date(Date.now()).toLocaleDateString();
  customers: CustomerList;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private apiCustomers: CustomersService,
  ) {}

  ngOnInit(): void {
    this.apiCustomers.getList().subscribe((response) => {
      this.customers = response;
    });
    this.formBooking = this.fb.group({
      customer: new FormControl(this.bookingDetailList.customer),
      booking_reason: new FormControl(this.bookingDetailList.booking_reason),
      branch: new FormControl(this.bookingDetailList.branch),
      date_of_delivery: new FormControl(this.bookingDetailList.preferred_date_of_delivery),
      date_of_collection: new FormControl(this.bookingDetailList.preferred_date_of_collection),
      demo_duration : new FormControl(this.bookingDetailList.demo_duration),
      department: new FormControl(this.bookingDetailList.department),
      location: new FormControl(this.bookingDetailList.location),
      contact_name: new FormControl(this.bookingDetailList.ship_to_contact_name),
      contact_number: new FormControl(this.bookingDetailList.ship_to_contact_number),
      remarks:new FormControl(this.bookingDetailList.remarks),
    });
  }
  onSave(): void {
    this.bookingService.updateBooking({
      customer: this.formBooking.get("customer").value,
      booking_reason: this.formBooking.get("booking_reason").value,
      branch: this.formBooking.get("branch").value,
      date_of_delivery: this.formBooking.get("date_of_delivery").value ,
      date_of_collection: this.formBooking.get("date_of_collection").value,
      demo_duration : this.formBooking.get("demo_duration").value,
      department: this.formBooking.get("department").value,
      location: this.formBooking.get("location").value,
      contact_name: this.formBooking.get("contact_name").value,
      contact_number: this.formBooking.get("contact_number").value,
      remarks: this.formBooking.get("remarks").value
    }, this.bookingDetailList.id).subscribe((res) => {
        if (res.id) {
          this.alertBody = "Booking saved successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
        }
      },
      err => {
        console.log(err);
          this.alertBody = "The booking can't save";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
      });
  }
}
