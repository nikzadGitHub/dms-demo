import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PrimeNgModule } from '../../sharedModule/prime-ng.module';
import { SharedModule } from '../settings/shared/shared.module';


@NgModule({
  declarations: [
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    IconModule,
    ModalModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class ContactModule { }
