import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap/modal";
import { BookingService } from './services/booking.service';
import { BookingList } from './services/booking.interface';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  @ViewChild("dangerModal") dangerModal: ModalDirective;

  bookingList: BookingList;
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];
  id="#"
  loading: boolean;
  alertBody: string;
  searchTimerId: number;
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
    this.searchTimerId = setTimeout(() => {
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
    }, err => {
      console.log(err)
      this.alertBody = "Unable to create new booking draft!";
      this.dangerModal.show();
      setTimeout(() => {
        this.dangerModal.hide();
      }, 2000);
    });
    return false;
  }
}
