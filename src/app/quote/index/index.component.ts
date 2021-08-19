import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../quote.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
   
  quotes: Quote[] = [];
  paginate: [];
  pageItems: number = 10;
  search_text: string = '';
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
      console.log(data);
    })  
  }
  
  deleteQuote(id){
    this.quoteService.delete(id).subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  getAll(){
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
      console.log(data);
    })  
  }

  onClick(url){
    this.quoteService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
      console.log(data);
    })  
  }
}