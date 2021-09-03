import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    IconModule,
    ModalModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule
  ]
})
export class ContactModule { }
