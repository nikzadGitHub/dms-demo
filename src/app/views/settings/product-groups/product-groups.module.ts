import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProductGroupsRoutingModule } from './product-groups-routing.module';
import { ProductGroupsCreateComponent } from './product-groups-create/product-groups-create.component';
import { ProductGroupsEditComponent } from './product-groups-edit/product-groups-edit.component';
import { ProductGroupsIndexComponent } from './product-groups-index/product-groups-index.component';
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
    ProductGroupsCreateComponent,
    ProductGroupsEditComponent,
    ProductGroupsIndexComponent
  ],
  imports: [
    CommonModule,
    ProductGroupsRoutingModule,
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
export class ProductGroupsModule { }
