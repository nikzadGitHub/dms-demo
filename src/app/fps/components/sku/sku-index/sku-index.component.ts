import { Component, OnInit, Input, Injectable, NgZone, ViewChild } from '@angular/core';
import { SkuService } from '@app/fps/services/sku.service';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DialogService } from '@app/common/dialog/dialog.service';
import { Column } from '@app/soci/column';
import { FpsService } from '@app/fps/fps.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sku-index',
  templateUrl: './sku-index.component.html',
  styleUrls: [
    './sku-index.component.scss',
    '../../common/listing.styles.component.scss'
  ]
})
export class SkuIndexComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  private ngUnsubscribe = new Subject;
  sort: any;
  search_text: string = '';
  pageItems: number = 10;
  pages: any[];
  totalRecords:number;
  skuList : any;
  columns: Column[] = [

    {'header':'FPS SKU No','field':'uuid','type':'string'},
    {'header':'FPS Type','field':'','type':'text'},
    {'header':'Financial Instititue','field':'','type':'text'},
    {'header':'Validity Start Date','field':'validity_start_at','type':'date'},
    {'header':'Validity End Date','field':'validity_end_at','type':'date'},
    {'header':'Tenure','field':'required_tenure','type':'number'},
    {'header':'Rate','field':'interest_rate','type':'decimal'},
    {'header':'Monthly','field':'monthly_payment','type':'boolean'},
    {'header':'Quarterly','field':'quarterly_payment','type':'boolean'},
    {'header':'Half-Yearly','field':'half_yearly_payment','type':'boolean'},
    {'header':'Min Usage','field':'min_usage','type':'number'},
    {'header':'Min Procedure','field':'procedure_per_month','type':'number'}

  ];

  constructor(
    public skuService: SkuService,
    public dialogService: DialogService,
    private zone: NgZone,
    private fpsService : FpsService
  ) { }

  ngOnInit(): void {

    this.skuService.getList(this.pageItems,this.search_text, this.sort).subscribe({
      next: (response) => {
        if (response.data.length) {
          this.zone.run(() => {
            this.skuList = response.data;
            this.pages = response.links;
            this.totalRecords = response.total;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve institutions list");
        }
      }
    })
  }

  fpsTypeList = this.fpsService.getTransSactionTypeList();

  showFPSType(key) {
    return this.fpsTypeList.find(typeItem => typeItem.id == key).title; 
  }

  paginate(event) {
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo){
    let url = this.pages[pageNo].url
    this.skuService.getPage(url,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((response)=>{
      this.zone.run(() => {
        this.skuList = response.data.data;
        this.pages = response.data.links;
        this.totalRecords = response.data.total;
      });     
    })  
  }

}
