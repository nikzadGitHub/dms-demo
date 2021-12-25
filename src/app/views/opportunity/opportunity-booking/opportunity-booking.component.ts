import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BookingService } from '../../../dms/components/bookings/services/booking.service';
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: 'opp-opportunity-booking',
  templateUrl: './opportunity-booking.component.html',
  styleUrls: ['./opportunity-booking.component.scss']
})

/**
 * This class is used for the add booking to the opportunity section
 * @class
 */
export class OpportunityBookingComponent implements OnInit{
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @Input() opp_id: number;

  show: boolean;
  alertBody: string;

  constructor(
    private api: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.show = false;
  }

  /**
 * This function is used for the show the booking on opportunity section
 */
  onShow(){
    this.show = true;
  }

  navToBooking(event) {
    event.preventDefault()
    if (this.opp_id !== undefined){
      this.api.createFromOpp(this.opp_id).subscribe((response) => {
        if (response) {
          this.router.navigate(['/dms/bookings', response]);
        }else {
          console.log("Unable to create new booking draft!");
          return false;
        }
      }, err => {
        console.log(err)
        this.alertBody = "Unable to create new booking draft!";
        this.dangerModal.show();
        setTimeout(() => {
          this.dangerModal.hide();
        }, 2000);
      });
    }
    return false;
  }

}
