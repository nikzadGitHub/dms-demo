import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpcsRoutingModule } from './opcs-routing.module';
import { OpcsIndexComponent } from './opcs-index/opcs-index.component';
import { OpcsCreateComponent } from './opcs-create/opcs-create.component';
import { OpcsEditComponent } from './opcs-edit/opcs-edit.component';
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
    OpcsIndexComponent,
    OpcsCreateComponent,
    OpcsEditComponent
  ],
  imports: [
    CommonModule,
    OpcsRoutingModule,
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
export class OpcsModule { }
