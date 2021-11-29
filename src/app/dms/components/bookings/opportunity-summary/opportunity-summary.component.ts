import { Component, OnInit, Input } from '@angular/core';

import {emptyOpportunitySummary, OpportunitySummary} from '../../../services/booking-entity';


@Component({
  selector: 'app-opportunity-summary',
  templateUrl: './opportunity-summary.component.html',
  styleUrls: ['./opportunity-summary.component.scss']
})

/**
 *This class is used for the opportunity list component
 * @class
 */
export class OpportunitySummaryComponent implements OnInit{
  @Input() opportunitySummary: OpportunitySummary = emptyOpportunitySummary;
  constructor() { }
  ngOnInit(): void {}
}
