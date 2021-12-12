import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';
import { AddSystemAdminComponent } from './add-system-admin/add-system-admin.component';
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AccordionModule } from "primeng/accordion";
import { MultiSelectModule } from "primeng/multiselect";
import { BadgeModule } from "primeng/badge";
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { PaginatorModule } from "primeng/paginator";
import { IconModule } from "@coreui/icons-angular";
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    FormsModule,
    AutoCompleteModule,
    MultiSelectModule,
    ButtonModule,
    ModalModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule
  ],
  declarations: [
    SystemAdminComponent,
    AddSystemAdminComponent
  ]
})
export class SystemAdminModule { }
