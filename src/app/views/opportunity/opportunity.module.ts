import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IconModule } from '@coreui/icons-angular';

import { ListOpportunityComponent } from './list-opportunity.component';
import { NewOpportunityComponent } from './new-opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity.component';
import { AccordionModule } from 'primeng/accordion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [    
    CommonModule,
    OpportunityRoutingModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    IconModule,
    ModalModule,
    MatAutocompleteModule
  ],
  declarations: [
    NewOpportunityComponent,
    EditOpportunityComponent,
    ListOpportunityComponent    
  ]
})
export class OpportunityModule { }