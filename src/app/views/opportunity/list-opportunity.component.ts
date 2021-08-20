import {Component, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'list-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})

export class ListOpportunityComponent {
		
  	testing = 1;

  	test(){
	    this.testing++; 	   
  	}

}
