import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfstRoutingModule } from './ofst-routing.module';
import { OfstIndexComponent } from './ofst-index/ofst-index.component';
import { OfstCreateComponent } from './ofst-create/ofst-create.component';
import { OfstEditComponent } from './ofst-edit/ofst-edit.component';
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
    OfstIndexComponent,
    OfstCreateComponent,
    OfstEditComponent
  ],
  imports: [
    CommonModule,
    OfstRoutingModule,
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
export class OfstModule { }
