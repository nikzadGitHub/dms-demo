import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesTargetRoutingModule } from './sales-target-routing.module';
import { SalesTargetComponent } from './sales-target.component';
import { SalesTargetStructureComponent } from '../sales-target-structure/sales-target-structure.component';
import { ButtonModule } from 'primeng/button';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {BadgeModule} from 'primeng/badge';
import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';
@NgModule({
  declarations: [
    SalesTargetComponent,
    SalesTargetStructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    OrganizationChartModule,
    SalesTargetRoutingModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    IconModule,
    ModalModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    FileUploadModule,
    BadgeModule,
    CheckboxModule,
    TooltipModule,
    AccordionModule
  ]
})
export class SalesTargetModule { }
