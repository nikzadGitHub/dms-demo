import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import {  ComingSoonComponent } from './coming-soon.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {OrganizationChartModule} from 'primeng/organizationchart';

@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    OrganizationChartModule,
    ComingSoonRoutingModule
  ]
})
export class ComingSoonModule { }
