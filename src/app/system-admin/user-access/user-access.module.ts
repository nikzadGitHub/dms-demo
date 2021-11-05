import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAccessRoutingModule } from './user-access-routing.module';
import { UserAccessSetupComponent } from './user-access-setup.component';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    UserAccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [
    UserAccessSetupComponent
  ]
})
export class userAccessModule { }
