import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserActivitiesService } from '../user-activities.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class CreateActivityComponent implements OnInit {
  @ViewChild("createActivity")
  public createActivity: ModalDirective;
  @ViewChild("createActivityModal")
  public createActivityModal: ModalDirective;
  @ViewChild("columnChooserModal")
  public columnChooserModal: ModalDirective;
  @ViewChild("successModal") successModal: ModalDirective;
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
  isTypeOthers: any = false;

  addActivityData :any = {
    activityDesc:"",
    activityDueDate:"",
    activityCompletionDate:"",
    activityStatus:"NEW",
    activityType:"MEETING",
    activityTypeOther:"",
    activityRemarks:"",
  }
  companyId: any;
  customer_id: any;
  successMessage: string;
  activityMainHeading: string = "Add Activity";
  activityHeading: string = "Add Activity";
  activityButton: string = "Save";
  selectedActivityId: any;
  
  constructor(
    public userAactivitiesService: UserActivitiesService,
    private router: Router
    ) { }

  ngOnInit(): void {
		this.getActivitydata();
    this.isCompanyName = false

	}
  getActivitydata() {
    this.loading=true
    
    this.userAactivitiesService.getActivity().subscribe(res => {
    
      this.activitydata = res.data;
      this.customer_id = res?.data[0]?.customer_id
      this.closedData =  this.activitydata.filter(function(item) {
        return item.status == "CLOSED";
      });
      
      this.openData =  this.activitydata.filter(function(item) {
        return item.status != "CLOSED";
      });
      this.loading=false
      
    });
  }

  searchName(event) {
    let query = event.query;
    this.userAactivitiesService.getCumpanyDetails(query).subscribe((res) => {
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
      this.companyId = event.id
      this.companyName = event.company_name
      this.isCompanyName = true
      this.activityMainHeading = "Add Activity"
      this.activityHeading = "Add Activity"
      this.activityButton = "Save"
      //to make the values empty 
    this.addActivityData.activityDesc = ""
    this.addActivityData.activityType = "New"
    this.addActivityData.activityStatus = "Meeting"
    this.addActivityData.activityDueDate = ""
    this.addActivityData.activityCompletionDate = ""
    this.addActivityData.activityRemarks = ""
    }
  }

  activityTypeGet(event){
    if(event.target.value == "others"){
      this.isTypeOthers = true
    } else {
      this.isTypeOthers = false
    }
  }

  saveActivity(event,type){
    if(this.activityButton == type){
      this.userAactivitiesService.createActivity(this.customer_id,this.addActivityData).subscribe((res) => {
        this.createActivityModal.hide()
        this.successMessage = "Data added Successfully...!!"
        this.successModal.show()
        setTimeout(() => {
          if(res){
            this.router.navigateByUrl("/activities", { replaceUrl: true});
          }
        }, 1000);
      })
    } else {
      this.userAactivitiesService.updateActivity(this.selectedActivityId,this.addActivityData).subscribe(state=>{
        this.createActivityModal.hide()
        this.successMessage = "Data Updated Successfully...!!"
        this.successModal.show()
        setTimeout(() => {
          this.getActivitydata()
        }, 500);
        
      })
    }
    
  }

  selectedActivity(data){
    this.selectedActivityId = data.id
    this.activityMainHeading = "Update Activity"
    this.activityHeading = "Update Activity"
    this.activityButton = "Update"
    this.createActivityModal.show()
    this.addActivityData.activityDesc = data.description
    this.addActivityData.activityType = data.activity_type
    this.addActivityData.activityStatus = data.status
    this.addActivityData.activityDueDate = data.due_date.slice(0,10)
    this.addActivityData.activityCompletionDate = data.completion_date.slice(0,10)
    this.addActivityData.activityRemarks = data.remark

  }
  
  getDate(date){

  }
}
