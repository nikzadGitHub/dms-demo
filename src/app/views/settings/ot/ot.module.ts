import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtRoutingModule } from './ot-routing.module';
import { OtEditComponent } from './ot-edit/ot-edit.component';
import { OtIndexComponent } from './ot-index/ot-index.component';
import { OtCreateComponent } from './ot-create/ot-create.component';
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
    OtEditComponent,
    OtIndexComponent,
    OtCreateComponent
  ],
  imports: [
    CommonModule,
    OtRoutingModule,
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
export class OtModule { }
