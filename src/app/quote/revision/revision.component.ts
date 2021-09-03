import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss']
})
export class RevisionComponent implements OnInit {

  datas: any[] = [];
  quotes: Quote[] = [];
  paginate: [];
  pageItems: number = 10;
  search_text: string = '';
  table_header: string[];
  title:string;
  constructor(public quoteService:QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getAllRevision(this.pageItems,this.search_text).subscribe((data)=>{
        this.quotes = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })  
      this.table_header = [
                        'Created Date',
                        'Quotation ID',
                        'Company Name',
                        'Validity Date',
                        'Status',
                        'Amount (MYR)',
                        'Action'
                      ]
      this.title = 'Quote Revision Listing'
  }

}
