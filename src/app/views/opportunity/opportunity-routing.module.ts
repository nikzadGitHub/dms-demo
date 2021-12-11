import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOpportunityComponent } from './new-opportunity.component';
import { ListOpportunityComponent } from './list-opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity.component';

const routes: Routes = [
	{
		path : '', 
		data: { title: 'Opportunity' },
		component: ListOpportunityComponent,		
	},
	{
		path : '', 
		data: { title: 'Opportunity' },		
		children: [
			{ path: 'new', component: NewOpportunityComponent, data: { title: 'New Opportunity' } },
			{ path: 'edit/:opportunityId', component: EditOpportunityComponent, data: { title: 'Edit Opportunity' } },
		]
	},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OpportunityRoutingModule {}