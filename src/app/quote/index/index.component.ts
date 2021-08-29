import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../quote.service';
import { Quote } from '../quote';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
   
  datasource: Quote[] = [];
  quotes: Quote[] = [];
  paginate: [];
  pageItems: number = 10;
  search_text: string = '';
  loading: boolean;
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe(data=>{
      this.datasource = data['data'];
      this.paginate = data['data']['links'];
      console.log(data['data'])
    })  
    this.loading = true;
  }
  
  deleteQuote(id){
    this.quoteService.delete(id).subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  getAll(){
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'];
      this.paginate = data['data']['links'];
      console.log(data);
    })  
  }

  onClick(url){
    this.quoteService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'];
      this.paginate = data['data']['links'];
      console.log(data);
    })  
  }

  loadQuotations(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      if (this.datasource) {
          this.quotes = this.datasource.slice(event.first, (event.first + event.rows));
          this.loading = false;
      }
    }, 1000);
  }
}