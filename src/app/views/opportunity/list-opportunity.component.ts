import {Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from './app.service';
import { Column } from '../../soci/column';

@Component({
  templateUrl: 'list-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss'],
  providers: [AppService]
})

export class ListOpportunityComponent implements OnInit{
	columns: Column[] = [
		{'header':'Created Date','field':'created_date','type':'date'},
		{'header':'Opportunity ID','field':'op_id','type':'text'},
		{'header':'Topic','field':'topic','type':'text'},
		{'header':'Company Name','field':'company_name','type':'text'},
		{'header':'Status','field':'status_id','type':'text'},
		{'header':'Amount (MYR)','field':'amount','type':'numeric'},
	];
	
	loading:boolean
	opportunities: [];
	paginate: [];
	pageItems: number = 200;
	search_text: string = '';
	icons = [];
	listUrl = '/opportunity/list';

	constructor(private appService: AppService) { }
	
	ngOnInit(): void {
		this.loading=true
		
		this.icons = this.appService.getIconsView('cil');
		
		this.appService.getQuery(this.listUrl, this.pageItems).subscribe((data) => {
			console.log("data---->", data);
			this.opportunities = data['data']['data'] ?? data['data']['items'];
      		this.paginate = data['data']['links'];
			console.log("oppertunities-data: ", this.opportunities);
			this.loading = false;
			
		},error => {
			this.loading = false;
		  })  

	}
}
