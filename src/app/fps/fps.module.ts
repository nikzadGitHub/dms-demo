import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../sharedModule/prime-ng.module';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableModule } from 'primeng/table';
import { FpsRoutingModule } from './fps-routing.module';
import { CreateComponent } from './components/fps-form/create/create.component';
import { EditComponent } from './components/fps-form/edit/edit.component';
import { SkuCreateComponent } from './components/sku/sku-create/sku-create.component';
import { SkuEditComponent } from './components/sku/sku-edit/sku-edit.component';
import { SkuIndexComponent } from './components/sku/sku-index/sku-index.component';
import { FormErrorPresentationComponent } from './components/common/form-error-presentation/form-error-presentation.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    SkuCreateComponent,
    SkuEditComponent,
    SkuIndexComponent,
    FormErrorPresentationComponent
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
