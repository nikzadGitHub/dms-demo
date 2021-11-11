import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TableModule } from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

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
    TableModule,
    AccordionModule,
    TabViewModule
  ]
})
export class CustomersModule { }
