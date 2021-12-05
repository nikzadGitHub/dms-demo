import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { MockBookingService } from "../services/mock-booking.service";
import { CustomerList } from "../../../services/customers/customer-entity";
import { MockCustomersService } from "../../../services/customers/mock-customers.service";
import { BookingService } from "../services/booking.service";
import { CustomersService } from "../../../services/customers/customers.service";

/**
 * For submit the booking form
 * @class
 */
@Component({
  selector: "app-booking-form-submit",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  alertBody: string;
  alertHeader: string;
  formBooking: FormGroup;
  curDate = new Date(Date.now()).toLocaleDateString();
  customers: CustomerList;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private apiCustomers: CustomersService
  ) {}

  defaultInputValue: number = 1;
  winningPercentageDefautl: any = 30;
  PriorityDefaultValue: number = 1;

  // bookingReasons:any[]  = [
  //     {id:1,name:'events'},
  //     {id:2,name:'demo'},
  //     {id:3,name:'Contigencies'},
  //     {id:4,name:'training'}
  // ];

  // selectedReason:number = 1;

  bookingReasons: any[] = [
    { id: 1, name: "event" },
    { id: 2, name: "demo" },
    { id: 3, name: "training" },
    { id: 4, name: "buyin" }
  ];

  defaultPercentages: any[] = [
    { id: 1, value: "30%" },
    { id: 2, value: "40%" },
    { id: 3, value: "50%" }
  ];

  defaultAnswers: any[] = [{ id: 1, ans: "Yes" }, { id: 2, ans: "No" }];

  defaultPriorities:any[] = [ 
    {id:1,value:"High"}, 
    {id:2,value:"Mid"},
    {id:3,value:'Low'}
  ];

  defaultPriority:number= 1;
  defaultAnswer: number = 1;
  selectedBooking: number = 1;
  selectedPercentage: number = 1;

changePrioritye(id:number){
  this.defaultPriority = id;
}

  changeAnswer(id: number) {
    this.defaultAnswer = id; 
  }

  changePercentage(id: number) {
    this.selectedPercentage = id;
    console.log(id);
  }

  changeReason(id: number) {
    //getted from event
    this.selectedBooking = id;
    // console.log(id);
    // console.log('compare');
    // console.log(this.selectedBooking);

    //getted from binding
    // console.log(this.selectedBooking)
  }

  // toggleOpportunity(id:number)  {
  //   console.log('changed'+id);
  // }

  ngOnInit(): void {
    this.apiCustomers.getList().subscribe(response => {
      this.customers = response;
    });
    this.formBooking = this.fb.group({
      status: "Draft",
      customer: new FormControl(""),
      booking_reason: new FormControl(""),
      branch: new FormControl(""),
      date_of_delivery: new FormControl(""),
      date_of_collection: new FormControl(""),
      demo_duration: new FormControl(""),
      department: new FormControl(""),
      contact_name: new FormControl(""),
      contact_number: new FormControl(""),
      remarks: new FormControl("")
    });
  }
  onSave(): void {
    this.bookingService
      .saveBooking({
        status: "Draft",
        customer: this.formBooking.get("customer").value + "",
        curDate: this.curDate,
        booking_reason: this.formBooking.get("booking_reason").value + "",
        branch: this.formBooking.get("branch").value + "",
        date_of_delivery: this.formBooking.get("date_of_delivery").value + "",
        date_of_collection:
          this.formBooking.get("date_of_collection").value + "",
        demo_duration: this.formBooking.get("demo_duration").value + "",
        department: this.formBooking.get("department").value + "",
        contact_name: this.formBooking.get("contact_name").value + "",
        contact_number: this.formBooking.get("contact_number").value + "",
        remarks: this.formBooking.get("remarks").value + ""
      })
      .subscribe(
        res => {
          if (res.id) {
            this.alertBody = "Booking saved successfully.";
            this.successModal.show();
            setTimeout(() => {
              this.successModal.hide();
            }, 2000);
            this.formBooking.reset();
          }
        },
        err => {
          console.log(err);
          this.alertBody = "The booking can't save";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
  }
}
