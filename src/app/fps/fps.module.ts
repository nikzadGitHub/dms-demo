import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../sharedModule/prime-ng.module';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CheckboxModule }  from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

import { FpsRoutingModule } from './fps-routing.module';
import { IndexComponent } from './components/fps-form/index/index.component';
import { CreateComponent } from './components/fps-form/create/create.component';
import { EditComponent } from './components/fps-form/edit/edit.component';
import { SkuCreateComponent } from './components/sku/sku-create/sku-create.component';
import { SkuEditComponent } from './components/sku/sku-edit/sku-edit.component';
import { SkuIndexComponent } from './components/sku/sku-index/sku-index.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    SkuCreateComponent,
    SkuEditComponent,
    SkuIndexComponent
  ],
  imports: [
    CommonModule,
    FpsRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    IconModule,
    PrimeNgModule,
    MatSlideToggleModule

  ]
})
export class FpsModule { }
