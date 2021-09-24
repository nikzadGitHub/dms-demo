import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { SalesTargetRoutingModule } from './sales-target-routing.module';
import { SalesTargetComponent } from './sales-target.component';
import { SalesTargetStructureComponent } from '../sales-target-structure/sales-target-structure.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    SalesTargetComponent,
    SalesTargetStructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    SalesTargetRoutingModule
  ]
})
export class SalesTargetModule { }
