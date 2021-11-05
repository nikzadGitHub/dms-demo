import { Component, OnInit } from '@angular/core';
import { MainAsset } from '../../../services/main-asset-service/main-asset-entity';


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
      main: null,
      compatibleAccessories: false,
      peripheralAccessories: false,
      consumables: false,
      packingDuringShipment: false,
      accessoriesList: null,
      addBtn: true
    }
  }
}
