import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss']
})
export class BookingTableComponent {
  bookingList: [];
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

	constructor() { }
	
	ngOnInit(): void {}
}
