import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { OsCreateComponent } from './os-create/os-create.component';
import { OsIndexComponent } from './os-index/os-index.component';
import { OsEditComponent } from './os-edit/os-edit.component';
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
    OsCreateComponent,
    OsIndexComponent,
    OsEditComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule,
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
export class OsModule { }
