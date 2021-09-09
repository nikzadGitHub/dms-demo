import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Quote } from '../../quote/quote';
import { Column } from '../column';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private ngUnsubscribe = new Subject;

  sort: any;
  search_text:string;
  pageItems: number = 10;
  quotes: Quote[] = [];
  columns: Column[] = [];
  defaultColumns: Column[] = [
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
      if(data['data']['columnOrder'] == null){
        this.columns = JSON.parse(JSON.stringify(this.defaultColumns));
      } else {
        this.columns = JSON.parse(data['data']['columnOrder']['column_order']);
      }
    })
  }

  SortColumn(event: LazyLoadEvent){
    console.log(event)
    this.sort = {'field':event['sortField'],'order':event['sortOrder']}
    this.ngOnInit()
  }

  columnOrder(event){
    this.sociService.saveColumnOrder(event.columns,'soci')
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe()
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
