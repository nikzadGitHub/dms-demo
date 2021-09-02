import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociRoutingModule } from './soci-routing.module';
import { IndexComponent } from './index/index.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SociRoutingModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    IconModule
  ]
})
export class SociModule { }
