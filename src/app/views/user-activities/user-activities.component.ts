import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.scss']
})
export class UserActivitiesComponent implements OnInit {
  loading:boolean
	opportunities: [];
	paginate: [];
	pageItems: number = 200;
	search_text: string = '';
  constructor() { }

  ngOnInit(): void {
		

	}
  }




