import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote/quote';
import { Column } from '../column';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  search_text:string;
  pageItems: number = 10;
  quotes: Quote[] = [];
  columns: Column[] = [
    {'header':'Created Date','field':'created_date','type':'date'},
    {'header':'SOCI ID','field':'soci_id','type':'text'},
    {'header':'Quotation ID','field':'quote_id','type':'text'},
    {'header':'Quote Date','field':'quote_date','type':'date'},
    {'header':'Amount (MYR)','field':'amount','type':'number'},
    {'header':'PO No','field':'po_no','type':'text'},
    {'header':'PO Date','field':'po_date','type':'date'},
    {'header':'Status','field':'status','type':'text'},
  ];

  constructor(public sociService: SociService) { }

  ngOnInit(): void {
    this.sociService.getAll(1,1).subscribe(data => {
      console.log(data);
    })
  }

}
