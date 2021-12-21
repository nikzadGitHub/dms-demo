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
    {'header':'Created Date','field':'created_at','type':'date'},
    {'header':'Lead ID','field':'id','type':'text'},
    {'header':'Company Name','field':'company_name','type':'text'},
    {'header':'Individual Name','field':'contact_name','type':'text'},
    {'header':'Email','field':'email','type':'text'},
    {'header':'Phone','field':'mobile_number','type':'text'},
    {'header':'Status','field':'lead_status','type':'text'},
  ];
  loading: boolean;
  constructor(
    public leadService: LeadsService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.leadService.getAll(this.pageItems,this.search_text, this.sort).subscribe(data => {
      this.datasource = data['data']['data'];
      this.datasource.forEach(value => {
        value.created_at = new Date(value.created_at)
      });
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
      this.loading = false;
    }, err => {
      this.loading = false;
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
