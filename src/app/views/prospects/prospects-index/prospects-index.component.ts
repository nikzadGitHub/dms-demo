import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProspectsService } from '../prospects.service';

@Component({
  selector: 'app-prospects-index',
  templateUrl: './prospects-index.component.html',
  styleUrls: ['./prospects-index.component.scss']
})
export class ProspectsIndexComponent implements OnInit {
  private ngUnsubscribe = new Subject;
  sort: any;
  search_text: string = '';
  pageItems: number = 10;
  datasource:any;
  pages: [];
  totalRecords:number;
  columns: any[] = [
    {'header':'Created Date','field':'created_date','type':'date'},
    {'header':'Prospect ID','field':'prospect_id','type':'text'},
    {'header':'Company Name','field':'company_name','type':'text'},
    {'header':'Individual Name','field':'individual_name','type':'text'},
    {'header':'Email','field':'email','type':'text'},
    {'header':'Phone','field':'phone','type':'text'}
  ];
  constructor(
    public prospectsService: ProspectsService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.prospectsService.getAll(this.pageItems,this.search_text).subscribe(data => {
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
    });
  }

  getAll(){
    this.prospectsService.getAll(this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
    })  
  }

  SortColumn(event: LazyLoadEvent){
    this.sort = {'field':event['sortField'],'order':event['sortOrder']}
    this.getList();
  }

  paginate(event){
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo){
    this.prospectsService.getPage(pageNo,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
    })  
  }

}
