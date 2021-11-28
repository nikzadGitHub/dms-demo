import {Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from './app.service';

@Component({
  templateUrl: 'list-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss'],
  providers: [AppService]
})

export class ListOpportunityComponent implements OnInit{

	opportunities: [];
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];
	listUrl = '/opportunity/list';

	constructor(private appService: AppService) { }
	
	ngOnInit(): void {
		
		this.icons = this.appService.getIconsView('cil');
		
		this.appService.getQuery(this.listUrl, this.pageItems).subscribe((data) => {
			this.opportunities = data['data']['data'] ?? data['data']['items'];
      		this.paginate = data['data']['links'];
			console.log(data);
		})  

	}
	
	getAll(){
		
	}
}
