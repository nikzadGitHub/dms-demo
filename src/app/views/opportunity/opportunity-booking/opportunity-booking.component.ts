import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BookingService } from '../../../dms/components/bookings/services/booking.service';
import { BookingList } from '../../../dms/components/bookings/services/booking.interface';

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
  @Input() opp_id: number;

  bookingList: BookingList;
  show: boolean = false;
  alertBody: string;

  bookingReasonsNames = [
    'event',
    'demo',
    'training',
    'buyin'
  ];
  bookingStatusNames = [
    'approval request',
    'approve',
    'review',
    'endorse',
    'provision-ally approve',
    'decline',
    'conflict',
    'extension request',
    'demo item availability'
  ]

  constructor(
    private api: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.opp_id !== undefined) {
      this.show = true;
      this.api.getListForOpp(this.opp_id).subscribe((response) => {
        if (response as BookingList) {
          this.bookingList = response;
          console.log(this.bookingList);
        }
      }, err => {
        console.log('error in loading bookings list');
      });
    }
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
        console.log("Unable to create new booking draft!");
      });
    }else {
      console.log("should to save first !");
    }
    return false;
  }

}
