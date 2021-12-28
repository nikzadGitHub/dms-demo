import { Component, OnInit, Input, Injectable, NgZone, ViewChild } from '@angular/core';
import { FpsService } from '@app/fps/fps.service';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DialogService } from '@app/common/dialog/dialog.service';
import { Column } from '@app/soci/column';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-fps-list',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.scss',
    '../../common/listing.styles.component.scss'
  ]
})

@Injectable()
export class IndexComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;

  @Input() current_opportunity_id = '';

  private ngUnsubscribe = new Subject;
  sort: any;
  search_text: string = '';
  pageItems: number = 10;
  pages: any[];
  totalRecords:number;
  skuList : any = [] ;
  rateStatusList = this.fpsService.getFpsStatusList();
  
  columns: Column[] = [

    {'header':'FPS Request  No','field':'fps_no','type':'string'},
    {'header':'Opportunity ID','field':'fps_opportunity_id','type':'string'},
    {'header':'Quote ID','field':'fps_quote_id','type':'string'},
    {'header':'Financial Institute','field':'title','type':'text'},
    {'header':'Total Financial Amount','field':'fps_total_financial_amount','type':'number'},
    {'header':'Tenure (Months)','field':'details_tenure','type':'number'},
    {'header':'Monthly Payment Amount','field':'fps_monthly_payment_amount','type':'number'},
    {'header':'Status','field':'fps_status_id','type':'string'},

  ];

  constructor(
    public fpsService: FpsService,
    public dialogService: DialogService,
    private zone: NgZone,
  ) { }

  ngOnInit() {

    this.fpsService.getList(this.current_opportunity_id, this.pageItems,this.search_text, this.sort)
    .pipe()
    .subscribe(
      {
        next: (response) => {
          if (response.data.length) {
            this.zone.run(() => {
              this.skuList = response.data;
              this.pages = response.links;
              this.totalRecords = response.total;
            });
          } 
        },
        error: (error) => {
          if (error.error.message != undefined) {
            this.dialogService.showErrorDialog(error.error.message);
          } else {
            this.dialogService.showErrorDialog("Error retrieve FPS list");
          }
        }
    }); 
  }

  showStatus (key) {
    return this.rateStatusList.find(statusItem => statusItem.id == key).title;
  }

  paginate(event) {
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo){
    let url = this.pages[pageNo].url
    this.fpsService.getPage(url,this.current_opportunity_id, this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((response)=>{
      this.zone.run(() => {
        this.skuList = response.data.data;
        this.pages = response.data.links;
        this.totalRecords = response.data.total;
      });     
    })  
  }

  deleteFps(fpsID) {
    if (
      confirm(
        `Are you sure you want to delete FPS '${fpsID}'`
      )
    ) {
      this.fpsService.deleteFps(fpsID)
      .subscribe(res => {
       alert("FPS remove successfully!");
       window.location.reload()
      });
    }
    
  }
}
