import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
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




  loading:boolean
	opportunities: [];
	paginate: [];
	pageItems: number = 200;
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
    
    this.userAactivities.getActivity().subscribe(res => {
    
      this.activitydata = res.data;
      this.closedData =  this.activitydata.filter(function(item) {
        return item.status == "CLOSED";
      });
      console.log('this is res', this.closedData);
      
      this.openData =  this.activitydata.filter(function(item) {
        return item.status != "CLOSED";
      });
      console.log('this is res', this.openData);
      this.loading=false
      
    });
  }

  }




