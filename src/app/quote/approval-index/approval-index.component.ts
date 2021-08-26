import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-approval-index',
  templateUrl: './approval-index.component.html',
  styleUrls: ['./approval-index.component.scss']
})
export class ApprovalIndexComponent implements OnInit {

  quotations: Quote[] = []

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotationPendingApproval().subscribe(data => {
      this.quotations = data['data']
      console.log(this.quotations)
    })
  }

}
