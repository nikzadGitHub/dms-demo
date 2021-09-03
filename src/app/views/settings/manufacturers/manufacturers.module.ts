import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturersRoutingModule } from './manufacturers-routing.module';
import { ManufacturersIndexComponent } from './manufacturers-index/manufacturers-index.component';
import { ManufacturersCreateComponent } from './manufacturers-create/manufacturers-create.component';
import { ManufacturersEditComponent } from './manufacturers-edit/manufacturers-edit.component';
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
    ManufacturersIndexComponent,
    ManufacturersCreateComponent,
    ManufacturersEditComponent
  ],
  imports: [
    CommonModule,
    ManufacturersRoutingModule,
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
export class ManufacturersModule { }
