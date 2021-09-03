import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OctRoutingModule } from './oct-routing.module';
import { OctEditComponent } from './oct-edit/oct-edit.component';
import { OctIndexComponent } from './oct-index/oct-index.component';
import { OctCreateComponent } from './oct-create/oct-create.component';
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
    OctEditComponent,
    OctIndexComponent,
    OctCreateComponent
  ],
  imports: [
    CommonModule,
    OctRoutingModule,
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
export class OctModule { }
