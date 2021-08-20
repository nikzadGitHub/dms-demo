import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NewOpportunityComponent } from './new-opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [    
    CommonModule,
    OpportunityRoutingModule,
    TabsModule,
    FormsModule
  ],
  declarations: [
    NewOpportunityComponent,
    EditOpportunityComponent,
    // TabsComponent
  ]
})
export class OpportunityModule { }