import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfscRoutingModule } from './ofsc-routing.module';
import { OfscCreateComponent } from './ofsc-create/ofsc-create.component';
import { OfscIndexComponent } from './ofsc-index/ofsc-index.component';
import { OfscEditComponent } from './ofsc-edit/ofsc-edit.component';
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
    OfscCreateComponent,
    OfscIndexComponent,
    OfscEditComponent
  ],
  imports: [
    CommonModule,
    OfscRoutingModule,
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
export class OfscModule { }
