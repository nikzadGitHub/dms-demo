import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './admin/system-admin.component';


@NgModule({
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ SystemAdminComponent ]
})
export class SystemAdminModule { }
