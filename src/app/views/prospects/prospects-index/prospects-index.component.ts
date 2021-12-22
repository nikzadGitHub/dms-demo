import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProspectsService } from '../prospects.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-prospects-index',
  templateUrl: './prospects-index.component.html',
  styleUrls: ['./prospects-index.component.scss']
})
export class ProspectsIndexComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('confirmModal') confirmModal : ModalDirective;
  private ngUnsubscribe = new Subject;
  sort: any;
  search_text: string = '';
  pageItems: number = 10;
  datasource:any;
  pages: any[];
  totalRecords:number;
  columns: any[] = [
    {'header':'Created Date','field':'created_at','type':'date'},
    {'header':'Prospect ID','field':'id','type':'text'},
    {'header':'Company Name','field':'company_name','type':'text'},
    {'header':'Individual Name','field':'contact_name','type':'text'},
    {'header':'Email','field':'email','type':'text'},
    {'header':'Phone','field':'mobile_number','type':'text'}
  ];
  loading: boolean;
  selectedId: any;
  modalHeader: any;
  modalBody: any;
  constructor(
    public prospectsService: ProspectsService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.loading=true
    this.prospectsService.getAll(this.pageItems,this.search_text).subscribe(data => {
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
      this.loading=false
    }, err => {
      this.loading = false;
    });
  }

  getAll(){
    this.prospectsService.getAll(this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.datasource.forEach(value => {
        value.created_at = new Date(value.created_at)
      });
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
    let url =this.pages[pageNo].url
    this.prospectsService.getPage(url,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      console.log(data,'page data');
      
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
    })
  }
  showConfirmationDialog (id): void {
    this.selectedId = id;
    this.modalHeader = 'Delete Prospect';
    this.modalBody = 'Are you sure you want to delete this prospect?'
    this.confirmModal.show();
  }

  deleteData(id) {
    this.prospectsService.delete(id)
      .subscribe(res => {
        this.getList();
        this.confirmModal.hide();
        this.successModal.show();
    });
  }
}
