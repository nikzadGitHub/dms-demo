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
	totalRecords:number;
  pageItems: number = 10;
  pages: any[];
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
    this.api.getList(1, this.pageItems).subscribe((response) => {
      console.log(response);
      // if (response as BookingList) {
      //   this.bookingList = response;
      // }
      this.bookingList = response['data'];
      this.totalRecords = response['total_rows'];
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
      this.api.getListSearch(this.search_text, 1, this.pageItems).subscribe((response) => {
        // if (response as BookingList) {
        //   this.bookingList = response;
        // }
        this.bookingList = response['data'];
        this.totalRecords = response['total_rows'];
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

  paginate(event){
    this.pageItems = event.rows;
    this.onPageClick(parseInt(event.page) + 1);
  }

  onPageClick(pageNo){
    this.api.getListSearch(this.search_text, pageNo, this.pageItems)
    .subscribe((data)=>{
      this.bookingList = data['data'];
      this.totalRecords = data['total_rows'];
    })  
  }


}
