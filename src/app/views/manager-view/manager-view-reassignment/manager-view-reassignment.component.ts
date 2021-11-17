import { Component, OnInit } from '@angular/core';
import { ManagerViewReassignmentService } from './manager-view-reassignment.service';
@Component({
  selector: 'app-manager-view-reassignment',
  templateUrl: './manager-view-reassignment.component.html',
  styleUrls: ['./manager-view-reassignment.component.scss']
})
export class ManagerViewReassignmentComponent implements OnInit {

  constructor(private managerviewreassignment:ManagerViewReassignmentService) { }

  ngOnInit(): void {
    
    
     // this.contactService.getAllContactData().subscribe((data) => {
    //   this.tableData = data["data"];
    // });
  }
  // getAlReassignment(){
  //   this.managerviewreassignment.getAlReassignment().subscribe(data => {
  //     console.log(data);
  //   }) 
  // }
  
  

}
