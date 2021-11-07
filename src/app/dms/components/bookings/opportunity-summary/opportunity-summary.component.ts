import { Component, OnInit, Input } from '@angular/core';

import { OpportunitySummary } from '../../../services/booking-entity';


@Component({
  selector: 'app-opportunity-summary',
  templateUrl: './opportunity-summary.component.html',
  styleUrls: ['./opportunity-summary.component.scss']
})
export class OpportunitySummaryComponent implements OnInit{
  @Input() opportunitySummary: OpportunitySummary ;
  constructor() { }
  ngOnInit(): void {}
}
