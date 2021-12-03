import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ManagerViewRoutingModule } from './manager-view-routing.module';
import { SalesTargetSetupComponent } from './sales-target-setup/sales-target-setup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ManagerviewApprovalComponent } from './managerview-approval/managerview-approval.component';
import { ManagerViewReassignmentComponent } from './manager-view-reassignment/manager-view-reassignment.component';
import { ManagerViewActiveComponent } from './manager-view-active/manager-view-active.component';
import {TabViewModule} from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { PaginatorModule } from 'primeng/paginator';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    InputTextModule,
    InputNumberModule,
    TabViewModule,
    BadgeModule,
    AccordionModule,
    ModalModule
  ],
  declarations: [ SalesTargetSetupComponent, ManagerviewApprovalComponent, ManagerViewReassignmentComponent, ManagerViewActiveComponent,  ]
})
export class ManagerViewModule { }
