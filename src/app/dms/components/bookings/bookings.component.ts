import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookingService } from './services/booking.service';
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
  id="#"
  loading: boolean;
  searchTimerId: number;

  constructor(
    private api: BookingService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.api.getList().subscribe((response) => {
      if (response as BookingList) {
        this.bookingList = response;
      }
      this.loading=false;
    }, err => {
      this.loading = false;
    });

  }

  onSearch() {
    if (this.searchTimerId) {
      clearTimeout(this.searchTimerId)
    }
    this.searchTimerId = window.setTimeout(() => {
      console.log('once runs');
      this.api.getListSearch(this.search_text).subscribe((response) => {
        if (response as BookingList) {
          this.bookingList = response;
        }
      })
    },1000)
  }

  onCreate(event) {
    event.preventDefault()
    this.api.create("booking").subscribe((response) => {
      this.router.navigate(['/dms/bookings', response]);
    });
    return false;
  }
}
