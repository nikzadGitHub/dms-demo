import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote/quote';
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

  constructor(public sociService: SociService) { }

  ngOnInit(): void {
    this.sociService.getAll(1,1).subscribe(data => {
      console.log(data);
    })
  }

}
