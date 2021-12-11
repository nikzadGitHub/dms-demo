import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareAreasRoutingModule } from './care-areas-routing.module';
import { CareAreasIndexComponent } from './care-areas-index/care-areas-index.component';
import { CareAreasCreateComponent } from './care-areas-create/care-areas-create.component';
import { CareAreasEditComponent } from './care-areas-edit/care-areas-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CareAreasIndexComponent,
    CareAreasCreateComponent,
    CareAreasEditComponent
  ],
  imports: [
    CommonModule,
    CareAreasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    IconModule,
    ModalModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule,
    SharedModule
  ]
})
export class CareAreasModule { }
