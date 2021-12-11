import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { PrimeNgModule } from '../../sharedModule/prime-ng.module';
import { LeadsIndexComponent } from './leads-index/leads-index.component';
import { LeadsCreateComponent } from './leads-create/leads-create.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LeadsImportComponent } from './leads-import/leads-import.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LeadsVerifyComponent } from './leads-verify/leads-verify.component';
// import { NgxCsvParserModule } from 'ngx-csv-parser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LeadsEditComponent } from './leads-edit/leads-edit.component';

@NgModule({
  declarations: [
    LeadsIndexComponent,
    LeadsCreateComponent,
    LeadsImportComponent,
    LeadsVerifyComponent,
    LeadsEditComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    PrimeNgModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    // NgxCsvParserModule,
    MatSlideToggleModule
  ]
})
export class LeadsModule { }
