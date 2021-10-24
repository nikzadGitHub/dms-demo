import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmsRoutingModule } from './dms-routing.module';
import { DmsComponent } from './dms.component';


@NgModule({
  declarations: [
    DmsComponent
  ],
  imports: [
    CommonModule,
    DmsRoutingModule
  ]
})
export class DmsModule { }
