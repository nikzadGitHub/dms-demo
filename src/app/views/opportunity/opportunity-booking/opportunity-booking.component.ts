import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


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
  show: boolean;
  constructor() { }
  ngOnInit(): void {
    this.show = false;
  }

  /**
 * This function is used for the show the booking on opportunity section
 */
  onShow(){
    this.show = true;
  }
}
