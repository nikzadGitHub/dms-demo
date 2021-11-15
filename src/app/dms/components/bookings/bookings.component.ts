import { Component, OnInit } from '@angular/core';

import { MockBookingService } from './services/mock-booking.service';
import { BookingList } from './services/booking.interface';
import { BookingService } from './services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookingList: any;
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

  constructor(private api: BookingService) { }

  ngOnInit(): void {
    this.api.getList().subscribe((response) => {
      // if (response as BookingList) {
        this.bookingList = response['data'];
      // }
			console.log(response);
		});
  }

  onSearch() {
    console.log('searching for:', this.search_text);
  }
}
