import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dms-opportunity-booking-form-submit',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.scss']
})
export class OpportunityFormComponent implements OnInit{
  curDate =  new Date(Date.now()).toLocaleDateString();
  constructor() { }
  ngOnInit(): void {}
}
