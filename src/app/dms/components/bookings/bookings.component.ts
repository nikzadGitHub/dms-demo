import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookingList: [];
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

  constructor() { }

  ngOnInit(): void {
  }

}
