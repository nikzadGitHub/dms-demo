import { Component, OnInit } from '@angular/core';
import { OpportunitySummary } from '../../../services/booking-entity';
import { MainAsset } from '../../../services/asset-entity';


@Component({
  selector: 'dms-opportunity-booking-form',
  templateUrl: './opportunity-booking-form.component.html',
  styleUrls: ['./opportunity-booking-form.component.scss']
})
export class OpportunityBookingFormComponent implements OnInit{
  opportunitySummary: OpportunitySummary;
  mainAsset: MainAsset;
  constructor() { }
  ngOnInit(): void {
    this.mainAsset = {
      main: [],
      compatibles: [],
      peripherals: [],
      consumables: [],
      packing: [],
      accessories: []
    };
    this.opportunitySummary = {
        customer: "test",
        opportunity_id: "test",
        initiator:"test",
        opportunity_amount:"10000",
        opportunity_no: "test",
        winning_probability: "test",
    }
  }
}
