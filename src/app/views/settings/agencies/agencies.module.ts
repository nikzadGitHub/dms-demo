import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
// import { IndexComponent } from './index/index.component';
// import { CreateComponent } from './create/create.component';
// import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { AgenciesIndexComponent } from './agencies-index/agencies-index.component';
import { AgenciesCreateComponent } from './agencies-create/agencies-create.component';
import { AgenciesEditComponent } from './agencies-edit/agencies-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgenciesIndexComponent,
    AgenciesCreateComponent,
    AgenciesEditComponent,
    // ListTableComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
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
export class AgenciesModule { }
