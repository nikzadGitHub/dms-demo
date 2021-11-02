import { Component, OnInit, Input, Output } from '@angular/core';

import { BookingDetail } from '../../../../services/booking-entity';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit{
  @Input() bookingDetailList: BookingDetail ;
  constructor() {}
  ngOnInit(): void {}
}
