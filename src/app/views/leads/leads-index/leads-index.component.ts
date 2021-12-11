import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Column } from '../../../soci/column';
import { LeadsService } from '../leads.service';


@Component({
  selector: 'app-leads-index',
  templateUrl: './leads-index.component.html',
  styleUrls: ['./leads-index.component.scss']
})
export class LeadsIndexComponent implements OnInit {
  private ngUnsubscribe = new Subject;
  sort: any;
  search_text: string = '';
  pageItems: number = 10;
  datasource:any;
  pages: any[];
  totalRecords:number;
  columns: Column[] = [
    {'header':'Created Date','field':'created_date','type':'date'},
    {'header':'Lead ID','field':'lead_id','type':'text'},
    {'header':'Company Name','field':'company_name','type':'text'},
    {'header':'Individual Name','field':'individual_name','type':'text'},
    {'header':'Email','field':'email','type':'text'},
    {'header':'Phone','field':'phone','type':'text'},
    {'header':'Status','field':'status','type':'text'},
  ];
  constructor(
    public leadService: LeadsService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.leadService.getAll(this.pageItems,this.search_text, this.sort).subscribe(data => {
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
      console.log("total-->", this.totalRecords);
    });
  }

  getAll(){
    this.leadService.getAll(this.pageItems,this.search_text,this.sort)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
    })  
  }

  // SortColumn(event: LazyLoadEvent){
  //   this.sort = {'field':event['sortField'],'order':event['sortOrder']}
  //   this.getList();
  // }

  paginate(event){
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo){
    let url =this.pages[pageNo].url
    this.leadService.getPage(url,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
    })  
  }

}
