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

  participateInDemoAns: any[] = [{ value: '1', ans: "Yes" }, { value: '0', ans: "No" }];

  initiatorValues: any[] = [
    { id: 1, ans: "FSS" },
    { id: 2, ans: "Customer" }
  ];

  sequenceOfDemoValues: any[] = [
    { value: 'first', ans: "First" },
    { value: 'middle', ans: "Middle" },
    { value: 'last', ans: "Last" }
  ];

  defaultPriorities:any[] = [
    {id:1,value:"High",name:"high"},
    {id:2,value:"Medium",name:"medium"},
    {id:3,value:'Low',name:"low"}
  ];

  selectedBooking: number = 1;

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
      this.selectedBooking = Number(this.bookingDetailList.booking_reason);
      this.showBmeLogSec = true;
    }
    

    this.apiCustomers.getList().subscribe(response => {
      this.customers = response;
    });
    this.duration = this.bookingDetailList.demo_duration;
    this.formBooking = this.fb.group({

      customer: new FormControl(this.bookingDetailList.customer_id),
      booking_reason: new FormControl(this.bookingDetailList.booking_reason),
      branch: new FormControl(this.bookingDetailList.branch),
      date_of_delivery: new FormControl(this.dateToHtmlString(new Date(this.bookingDetailList.preferred_date_of_delivery))),
      date_of_collection: new FormControl(this.dateToHtmlString(new Date(this.bookingDetailList.preferred_date_of_collection))),
      demo_duration : new FormControl(this.duration),
      department: new FormControl(this.bookingDetailList.department),
      location: new FormControl(this.bookingDetailList.location),
      contact_name: new FormControl(this.bookingDetailList.ship_to_contact_name),
      contact_number: new FormControl(this.bookingDetailList.ship_to_contact_number),
      remarks:new FormControl(this.bookingDetailList.remarks),
      wo_con_req:new FormControl(this.bookingDetailList.bme_con_req !== undefined ? this.bookingDetailList.bme_con_req : 1),
      wo_con_won:new FormControl(this.bookingDetailList.con_won),
      wo_pdi_req:new FormControl(this.bookingDetailList.bme_pdi_re !== undefined ? this.bookingDetailList.bme_pdi_re : 1),
      wo_pdi_won:new FormControl(this.bookingDetailList.pdi_won),
      wo_ins_req:new FormControl(this.bookingDetailList.bme_ins_req !== undefined ? this.bookingDetailList.bme_ins_req : 1),
      wo_ins_won:new FormControl(this.bookingDetailList.ins_won),
      wo_tnc_req:new FormControl(this.bookingDetailList.bme_tnc_won !== undefined ? this.bookingDetailList.bme_tnc_won : 1),
      wo_tnc_won:new FormControl(this.bookingDetailList.tnc_won),
      wo_trn_req:new FormControl(this.bookingDetailList.bme_trn_req !== undefined ? this.bookingDetailList.bme_trn_req : 1),
      wo_trn_won:new FormControl(this.bookingDetailList.trn_won),
      wo_wq_req:new FormControl(this.bookingDetailList.bme_war_req !== undefined ? this.bookingDetailList.bme_war_req : 1),
      wo_wq_won:new FormControl(this.bookingDetailList.war_won),
      wo_pdr_req:new FormControl(this.bookingDetailList.bme_pdr_req !== undefined ? this.bookingDetailList.bme_pdr_req : 1),
      wo_pdr_won:new FormControl(this.bookingDetailList.pdr_won),

      // Booking Opportunity section
      opportunity_code:new FormControl(this.bookingDetailList.opportunity_code),
      priority: new FormControl(this.bookingDetailList.priority) ,
      probability: new FormControl(this.bookingDetailList.probability) ,
      initiator: new FormControl(this.bookingDetailList.initiator) ,
      is_competitor_in_demo: new FormControl(this.bookingDetailList.is_competitor_in_demo) ,
      squence_of_demo: new FormControl(this.bookingDetailList.squence_of_demo) ,
      selling_points: new FormControl(this.bookingDetailList.selling_points) ,
      customer_feedback: new FormControl(this.bookingDetailList.customer_feedback) ,
      pain_points: new FormControl(this.bookingDetailList.pain_points)
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
      
      // Booking Opportunity Section by Hossainy
      priority: this.formBooking.get("priority").value,
      probability: this.formBooking.get("probability").value,
      initiator: this.formBooking.get("initiator").value,
      is_competitor_in_demo: this.formBooking.get("is_competitor_in_demo").value,
      squence_of_demo: this.formBooking.get("squence_of_demo").value,
      selling_points: this.formBooking.get("selling_points").value,
      customer_feedback: this.formBooking.get("customer_feedback").value,
      pain_points: this.formBooking.get("pain_points").value,
      
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

  dateToHtmlString(date: Date) : string {
    let month = date.getMonth()+1+''
    month = month.length < 2 ? '0'+month : month;

    let day = date.getDate()+''
    day = day.length < 2 ? '0'+day : day;

    let hours = date.getHours()+''
    hours = hours.length < 2 ? '0'+hours : hours;

    let minutes = date.getMinutes()+''
    minutes = minutes.length < 2 ? '0'+minutes : minutes;

    return date.getFullYear()+'-'+month+'-'+day+'T'+hours+':'+minutes;
  }

  durationChanged() {
    const date_of_delivery = this.formBooking.get("date_of_delivery").value;
    const demo_duration = this.formBooking.get('demo_duration').value;

    if(date_of_delivery != null && demo_duration > 0){
      var date1 = new Date(date_of_delivery);
      date1.setTime(date1.getTime() + (demo_duration*86400000))
      let new_collection_date: string = this.dateToHtmlString(date1);
      console.log(new_collection_date)
      this.formBooking.get("date_of_collection").setValue(new_collection_date);
    }
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
