import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { ProspectsEditComponent } from './prospects-edit/prospects-edit.component';
import { ProspectsIndexComponent } from './prospects-index/prospects-index.component';
import { PrimeNgModule } from '../../sharedModule/prime-ng.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    ProspectsEditComponent,
    ProspectsIndexComponent
  ],
  imports: [
    CommonModule,
    ProspectsRoutingModule,
    CommonModule,
    PrimeNgModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatSlideToggleModule,
    CheckboxModule
  ]
})
export class ProspectsModule { }
