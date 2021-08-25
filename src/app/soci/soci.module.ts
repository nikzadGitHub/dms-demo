import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociRoutingModule } from './soci-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SociRoutingModule
  ]
})
export class SociModule { }
