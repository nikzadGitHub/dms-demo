import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { LazyLoadEvent } from 'primeng/api';
import { state } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageItems: number = 10;
  customerData:any
  stepperId:any=2
  totalRecords:number;
  datasource:any;
  search_text: string = '';
  pages: any [];
  sort: any;

  private ngUnsubscribe = new Subject;

  @ViewChild("successModal") successModal: ModalDirective;
  modalData: any;
  selectedCustomerData: any;
  detailsTab: Array<any>;
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getList();
  }

  openModel(data:any){
    this.modalData=data.primary_contact
    this.successModal.show();
    this.selectedCustomerData = data
    this.customerDetails()

  }
  closeModel(){
    this.successModal.hide()
  }
  stepperClick(id){
    this.stepperId=id
    if(id == 1){
      this.customerDetails()
    }
  }
  paginate(event){
    this.pageItems = event.rows;
    this.onClick((event.page) + 1);
  }

  onClick(pageNo){
    let url=this.pages[pageNo].url
    this.customerService.getPage(url,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
    })  
  }

  getList() {
      this.customerService.getAll(this.pageItems,this.search_text, this.sort).subscribe(data => {
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
    });
  }

  getAll(){
    this.customerService.getAll(this.pageItems,this.search_text,this.sort)
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

  customerDetails(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerDetails(data.id).subscribe((state:any)=>{
      this.detailsTab = state.data.contacts
      console.log('id',data.id,"selected Customer",this.detailsTab)
    })
  }
}
