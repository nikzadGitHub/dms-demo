import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpvtRoutingModule } from './opvt-routing.module';
import { OpvtEditComponent } from './opvt-edit/opvt-edit.component';
import { OpvtIndexComponent } from './opvt-index/opvt-index.component';
import { OpvtCreateComponent } from './opvt-create/opvt-create.component';
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
    OpvtEditComponent,
    OpvtIndexComponent,
    OpvtCreateComponent
  ],
  imports: [
    CommonModule,
    OpvtRoutingModule,
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
export class OpvtModule { }
