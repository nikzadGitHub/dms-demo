import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserActivitiesService } from '../user-activities.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {
  @ViewChild("createActivity")
  public createActivity: ModalDirective;
  @ViewChild("columnChooserModal")
  public columnChooserModal: ModalDirective;
  loading:boolean
	opportunities: [];
	paginate: [];
	pageItems: number = 200;
	search_text: string;
  activitydata: any[] =[];
  
  closedData: any[];
  openData: any[];
  filteredData: any;
  isCompanyName: boolean = false;
  dangerBody: string = 'Company Name is Required...!';
  companyName: any;
  
  constructor(public userAactivities: UserActivitiesService,) { }

  ngOnInit(): void {
		this.getActivitydata();
    this.isCompanyName = false

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

  searchName(event) {
    let query = event.query;
    this.userAactivities.getCumpanyDetails(query).subscribe((res) => {
      if (res.success) {
        if (res.data.length == 0) {
          setTimeout(() => {
            // this.alertBody = "Name is not Correct";
            // this.dangerModal.show();
            this.filteredData = ''
          }, 2000);
        } else {
          this.filteredData = res.data;
        }
      }
    });
  }
  onSelect(event){
    if(event){
      console.log('event onselect',event);
      this.companyName = event.company_name
      this.isCompanyName = true
    }
  }
}
