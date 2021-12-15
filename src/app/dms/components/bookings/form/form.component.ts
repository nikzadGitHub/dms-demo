import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import {MockBookingService} from '../services/mock-booking.service';
import {CustomerList} from '../../../services/customers/customer-entity';
import {MockCustomersService} from '../../../services/customers/mock-customers.service';
import { BookingService } from '../services/booking.service';
import { CustomersService } from '../../../services/customers/customers.service';
import { BookingDetail } from '../../../services/booking-entity';

@Component({
  selector: "app-booking-form-submit",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})

export class FormComponent implements OnInit{
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @Input() bookingDetailList: BookingDetail;

  alertBody: string;
  alertHeader: string;
  formBooking: FormGroup;
  curDate = new Date(Date.now()).toLocaleDateString();
  customers: CustomerList;
  duration: any;
  editable: boolean;
  showBmeLogSec: boolean = false;

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
    this.showBmeLogSec = id == 2 ? true : false;
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
    if (this.bookingDetailList.booking_reason == '2') {
      this.editable =  true;
      this.showBmeLogSec = true;
    }


    this.apiCustomers.getList().subscribe(response => {
      this.customers = response;
    });
    this.duration = this.bookingDetailList.demo_duration;
    this.formBooking = this.fb.group({

      customer: new FormControl(this.bookingDetailList.customer),
      booking_reason: new FormControl(this.bookingDetailList.booking_reason),
      branch: new FormControl(this.bookingDetailList.branch),
      date_of_delivery: new FormControl(this.bookingDetailList.preferred_date_of_delivery),
      date_of_collection: new FormControl(this.bookingDetailList.preferred_date_of_collection),
      demo_duration : new FormControl(this.duration),
      department: new FormControl(this.bookingDetailList.department),
      location: new FormControl(this.bookingDetailList.location),
      contact_name: new FormControl(this.bookingDetailList.ship_to_contact_name),
      contact_number: new FormControl(this.bookingDetailList.ship_to_contact_number),
      remarks:new FormControl(this.bookingDetailList.remarks),
      wo_con_req:new FormControl(this.bookingDetailList.bme_con_req ? 1 : 0),
      wo_con_won:new FormControl(this.bookingDetailList.con_won),
      wo_pdi_req:new FormControl(this.bookingDetailList.bme_pdi_re ? 1 : 0),
      wo_pdi_won:new FormControl(this.bookingDetailList.pdi_won),
      wo_ins_req:new FormControl(this.bookingDetailList.bme_ins_req ? 1 : 0),
      wo_ins_won:new FormControl(this.bookingDetailList.ins_won),
      wo_tnc_req:new FormControl(this.bookingDetailList.bme_tnc_won ? 1 : 0),
      wo_tnc_won:new FormControl(this.bookingDetailList.tnc_won),
      wo_trn_req:new FormControl(this.bookingDetailList.bme_trn_req ? 1 : 0),
      wo_trn_won:new FormControl(this.bookingDetailList.trn_won),
      wo_wq_req:new FormControl(this.bookingDetailList.bme_war_req ? 1 : 0),
      wo_wq_won:new FormControl(this.bookingDetailList.war_won),
      wo_pdr_req:new FormControl(this.bookingDetailList.bme_pdr_req ? 1 : 0),
      wo_pdr_won:new FormControl(this.bookingDetailList.pdr_won),
      opportunity_code:new FormControl(),
      customer_feedback:new FormControl(),
      selling_points:new FormControl(),
      initiator:new FormControl(),
      probability:new FormControl(),
      is_competitor_in_demo:new FormControl(),
      priority:new FormControl(),
      squence_of_demo:new FormControl()
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
      remarks: this.formBooking.get("remarks").value,
      booking_save: true,

      wo_con_req: this.formBooking.get("wo_con_req").value,
      wo_con_won: this.formBooking.get("wo_con_won").value,
      wo_pdi_req: this.formBooking.get("wo_pdi_req").value,
      wo_pdi_won: this.formBooking.get("wo_pdi_won").value,
      wo_ins_req: this.formBooking.get("wo_ins_req").value,
      wo_ins_won: this.formBooking.get("wo_ins_won").value,
      wo_tnc_req: this.formBooking.get("wo_tnc_req").value,
      wo_tnc_won: this.formBooking.get("wo_tnc_won").value,
      wo_trn_req: this.formBooking.get("wo_trn_req").value,
      wo_trn_won: this.formBooking.get("wo_trn_won").value,
      wo_wq_req: this.formBooking.get("wo_wq_req").value,
      wo_wq_won: this.formBooking.get("wo_wq_won").value,
      wo_pdr_req: this.formBooking.get("wo_pdr_req").value,
      wo_pdr_won: this.formBooking.get("wo_pdr_won").value
    }, this.bookingDetailList.id).subscribe((res) => {
        if (res.id) {
          this.editable = true;
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
        }
      );
  }

  onDuration(){
    const date_of_delivery = this.formBooking.get("date_of_delivery").value;
    const date_of_collection = this.formBooking.get("date_of_collection").value;
    console.log(date_of_collection);
    if(date_of_delivery != null && date_of_collection != null){
      var date1 = new Date(date_of_delivery);
      var date2 = new Date(date_of_collection);
      var Time = date2.getTime() - date1.getTime();
      var Days = Time / (1000 * 3600 * 24);
      this.duration =  Days;
    }
  }
}
