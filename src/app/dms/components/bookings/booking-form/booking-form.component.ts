import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit{
  curDate =  new Date(Date.now()).toLocaleDateString();
  constructor() { }
  ngOnInit(): void {}
}
