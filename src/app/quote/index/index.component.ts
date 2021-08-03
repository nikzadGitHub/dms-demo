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
  public selections = ['Quote','Opportunity'];
  selected = 'Quote';
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getAll().subscribe((data)=>{
      this.quotes = data['data'];
      this.paginate = data['links'];
      console.log(data);
    })  
  }
  
  deleteQuote(id){
    this.quoteService.delete(id).subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  onSelect(selection){
    this.selected = selection;
  }

  onClick(url){
    this.quoteService.getPage(url).subscribe((data)=>{
      this.quotes = data['data'];
      this.paginate = data['links'];
      console.log(data);
    })  
  }
}