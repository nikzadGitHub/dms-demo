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
  loading:boolean;

  private ngUnsubscribe = new Subject;

  @ViewChild("successModal") successModal: ModalDirective;
  modalData: any;
  selectedCustomerData: any;
  detailsTab: Array<any>;
  customerActivities: any;
  customerOpportunities: any;
  customerQuotes: any;
  customerSOCI: any;
  customerAttachments: any;
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getList();
  }

  openModel(data:any){
    this.modalData=data.primary_contact
    this.successModal.show();
    this.selectedCustomerData = data
    this.customerDetails()
    this.getCustomerActivities()
    this.getCustomerOpportunities()
    this.getCustomerQuotes()
    this.getCustomerSOCI()
    this.getCustomerAttachments()

  }
  closeModel(){
    this.successModal.hide()
  }
  stepperClick(id){
    this.stepperId=id
    if(id == 1){
      this.customerDetails()
    } else if(id ==2){
      this.getCustomerOpportunities()
    } else if(id ==3){
      this.getCustomerActivities()
      this.getCustomerQuotes()
      this.getCustomerSOCI()
      this.getCustomerAttachments()
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
    this.loading=true
      this.customerService.getAll(this.pageItems,this.search_text, this.sort).subscribe(data => {
      this.datasource = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
      this.loading=false
    }, err => {
      this.loading = false;
    }
    );
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
    })
  }

  getCustomerActivities(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerActivities(data.id).subscribe((state:any)=>{
      this.customerActivities = state['data']
    })
  }

  getCustomerOpportunities(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerRelatedOpportunities(this.pageItems,data.company_name).subscribe((state:any)=>{
      this.customerOpportunities = state['data']['data'];
    })
  }

  getCustomerQuotes(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerRelatedQuotes(this.pageItems,data.company_name).subscribe((state:any)=>{
      this.customerQuotes = state['data']['quotes']['data'];
    })
  }

  getCustomerSOCI(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerRelatedSOCI(this.pageItems,data.company_name).subscribe((state:any)=>{
      this.customerSOCI = state['data']['soci'];
    })
  }

  getCustomerAttachments(){
    let data = this.selectedCustomerData
    this.customerService.getCustomerRelatedAttachments(data.id).subscribe((state:any)=>{
      this.customerAttachments = state['data'];
    })
  }
}
