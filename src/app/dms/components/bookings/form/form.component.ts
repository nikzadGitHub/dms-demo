import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import { BookingService } from '../services/booking.service';

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
  formBooking : FormGroup;
  curDate =  new Date(Date.now()).toLocaleDateString();
  customers: [];
  constructor(private fb: FormBuilder, private bookingService: BookingService) {}
  ngOnInit(): void {
    this.bookingService.getCustomerList().subscribe((response) => {
      this.customers = response;
      console.log(response)
    });
    this.formBooking = this.fb.group({
      status: "Draft",
      customer: new FormControl(''),
      booking_reason: new FormControl(''),
      branch: new FormControl(''),
      date_of_delivery: new FormControl(''),
      date_of_collection: new FormControl(''),
      demo_duration : new FormControl(''),
      department: new FormControl(''),
      contact_name: new FormControl(''),
      contact_number: new FormControl(''),
      remarks:new FormControl(''),
    });
  }
  onSave(): void {
    this.bookingService.saveBooking({
      status: "Draft",
      customer: this.formBooking.get("customer").value + "",
      curDate: this.curDate,
      booking_reason: this.formBooking.get("booking_reason").value + "",
      branch: this.formBooking.get("branch").value + "",
      date_of_delivery: this.formBooking.get("date_of_delivery").value + "",
      date_of_collection: this.formBooking.get("date_of_collection").value + "",
      demo_duration : this.formBooking.get("demo_duration").value + "",
      department: this.formBooking.get("department").value + "",
      contact_name: this.formBooking.get("contact_name").value + "",
      contact_number: this.formBooking.get("contact_number").value + "",
      remarks: this.formBooking.get("remarks").value + ""
    }).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
