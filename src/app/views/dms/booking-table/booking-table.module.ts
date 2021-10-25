import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';

import { BookingTableRoutingModule } from './booking-table-routing.module';
import { BookingTableComponent } from './booking-table.component';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    BookingTableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    IconModule,
    ModalModule,
    PaginatorModule,
    InputTextModule,
    BookingTableRoutingModule,
  ]
})
export class BookingTableModule { }
