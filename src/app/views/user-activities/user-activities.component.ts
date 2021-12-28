import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserActivitiesService } from './user-activities.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.scss']
})
export class UserActivitiesComponent implements OnInit {

  @ViewChild("confirmationExportExcelModal")
  public confirmationExportExcelModal: ModalDirective;
  @ViewChild("columnChooserModal")
  public columnChooserModal: ModalDirective;

  private ngUnsubscribe = new Subject;
  pageItems: number = 10;
  datasource: any;
  pages: any[];
  totalRecords: number;
  loading:boolean
	activities: [];
	paginate: [];
	search_text: string = '';
  activitydata: any[] =[];
  
  closedData: any[];
  openData: any[];
  
  constructor(public userAactivities: UserActivitiesService,) { }

  ngOnInit(): void {
		this.getActivitydata();

	}
  getActivitydata() {
    this.loading=true
    
    this.userAactivities.getActivity().subscribe((res:any) => {
      this.activitydata = res.data;
      this.activitydata.forEach((value) => {
        value.completion_date = new Date(value.completion_date);
        value.due_date = new Date(value.due_date)
      });
      
      this.closedData =  this.activitydata.filter(function(item) {
        return item.status == "CLOSED";
      });
      
      this.openData =  this.activitydata.filter(function(item) {
       
        
     
        return item.status != "CLOSED";
      });
      this.loading=false
      
    });
  }
  pagination(event){
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }


  onClick(pageNo){
    let url =this.pages[pageNo].url
    this.userAactivities.getPage(url,this.pageItems,this.search_text)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      console.log(data,'page data');
      
      this.activities = data['data']['data'];
      this.pages = data['data']['links'];
    })
  }


  selectedActivity(data){

  }

  }




