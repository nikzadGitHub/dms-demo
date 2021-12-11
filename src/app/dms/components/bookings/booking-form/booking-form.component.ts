import { Component, OnInit } from '@angular/core';
import { MainAsset } from '../../../services/asset-entity';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit{
  mainAsset: MainAsset;
  constructor() { }
  ngOnInit(): void {
    this.mainAsset = {
      main: [],
      compatibles: null,
      peripherals: null,
      consumables: null,
      packing: null,
      accessories: []
    };
  }
}
