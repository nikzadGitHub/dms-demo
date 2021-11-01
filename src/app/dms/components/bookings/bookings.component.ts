import { Component, OnInit } from '@angular/core';

import { MockBookingService } from './services/mock-booking.service';
import { BookingList } from './services/booking.interface';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookingList: BookingList;
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

  constructor(private api: MockBookingService) { }

  ngOnInit(): void {
    this.api.getList().subscribe((response) => {
      if (response as BookingList) {
        this.bookingList = response;
      }
			console.log(response);
		});
  }

}
