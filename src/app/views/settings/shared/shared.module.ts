import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListTableComponent
  ]
})
export class SharedModule { }
