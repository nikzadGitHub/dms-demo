import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.scss']
})
export class CompanyHeaderComponent implements OnInit {
  @Input() company_name:string;

  constructor() { }

  ngOnInit(): void {
  }

}
