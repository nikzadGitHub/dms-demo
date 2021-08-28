import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-index-template',
  templateUrl: './index-template.component.html',
  styleUrls: ['./index-template.component.scss']
})
export class IndexTemplateComponent implements OnInit {

  @Input() quotes: Quote[];
  @Input() title: string;
  @Input() table_header: string;
  paginate: [];
  pageItems: number = 10;
  search_text: string = '';

  constructor(private quoteService:QuoteService) { }
  
  ngOnInit(): void {
    // this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
    //   this.quotes = data['data']['data'] ?? data['data']['items'];
    //   this.paginate = data['data']['links'];
    //   console.log(data);
    // })  
  }
  
  // deleteQuote(id){
  //   this.quoteService.delete(id).subscribe(res => {
  //        this.quotes = this.quotes.filter(item => item.id !== id);
  //        console.log('Quote deleted successfully!');
  //   })
  // }

  // getAll(){
  //   this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
  //     this.quotes = data['data']['data'] ?? data['data']['items'];
  //     this.paginate = data['data']['links'];
  //     console.log(data);
  //   })  
  // }

  // onClick(url){
  //   this.quoteService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
  //     this.quotes = data['data']['data'] ?? data['data']['items'];
  //     this.paginate = data['data']['links'];
  //     console.log(data);
  //   })  
  // }

  getAll(){
    this.quoteService.getAllRevision(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
      console.log(data);

    })
  }

}
