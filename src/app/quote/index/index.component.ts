import { Component, OnInit, ViewChild } from '@angular/core';

import { QuoteService } from '../quote.service';
import { Quote } from '../quote';
import { LazyLoadEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Column } from '../../soci/column';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private ngUnsubscribe = new Subject;

  sort: any;
  datasource: Quote[] = [];
  quotes: Quote[] = [];
  pages: [];
  columns: Column[] = [];
  existingColumns: Column[] = [];
  defaultColumns: Column[] = [
    {header:'Created Date', field: 'created_at', type: 'date'},
    {header:'Quotation ID', field: 'quote_id', type: 'text'},
    {header:'Company Name', field: 'company', type: 'text'},
    {header:'Validity Date', field: 'validity_date', type: 'date'},
    {header:'Reason', field: 'cancelled_remarks', type: 'text'},
    {header:'Status', field: 'status', type: 'text'},
    {header:'Amount (MYR)', field: 'amount', type: 'numeric'},
  ];
  pageItems: number = 10;
  totalRecords:number;
  search_text: string = '';
  loading: boolean;
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.loading = true;
    this.quoteService.getAll(this.pageItems,this.search_text,this.sort)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data=>{
      this.datasource = data['data'];
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
      this.totalRecords = data['data']['quotes']['total'];
      if(data['data']['columnOrder'] == null){
        this.columns = JSON.parse(JSON.stringify(this.defaultColumns));
      } else {
        this.columns = JSON.parse(data['data']['columnOrder']['column_order']);
      }
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }
  
  deleteQuote(id){
    this.quoteService.delete(id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  getAll(){
    this.quoteService.getAll(this.pageItems,this.search_text,this.sort)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
      this.totalRecords = data['data']['quotes']['total'];
    })  
  }

  onClick(pageNo){
    this.quoteService.getPage(pageNo,this.pageItems,this.search_text,this.sort)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
    })  
  }

  columnOrder(event){
    this.quoteService.saveColumnOrder(event.columns,'quote')
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe()
  }

  columnFilter(event){
    console.log("column-filter:",event)
  }

  SortColumn(event: LazyLoadEvent){
    console.log(event)
    this.sort = {'field':event['sortField'],'order':event['sortOrder']}
    this.ngOnInit()
  }

  paginate(event){
    console.log(event);
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}