import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import {TableModule} from 'primeng/table';
import { UserLoaComponent } from './user-loa/user-loa.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule
  ],
  declarations: [
    UserLoaComponent
  ]
})
export class UserModule { }
