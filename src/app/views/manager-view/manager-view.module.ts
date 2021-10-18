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

@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    ModalModule
  ],
  declarations: [ SalesTargetSetupComponent ]
})
export class ManagerViewModule { }
