import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    PaginatorModule,
    InputTextModule,
    ModalModule,
    TableModule
  ]
})
export class CustomersModule { }
