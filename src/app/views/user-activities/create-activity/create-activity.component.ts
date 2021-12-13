import { Component, OnInit } from '@angular/core';
import { UserActivitiesService } from '../user-activities.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {
  createlist: any;

  constructor(public userAactivities: UserActivitiesService) { }

  ngOnInit(): void {
    // this.createList();
  }


//  createList() {
   
//     this.userAactivities.getCreatelist().subscribe(res => {
//       this.createlist = res.data;
//       console.log('this is res', res);
      
//     });
//   }


}
