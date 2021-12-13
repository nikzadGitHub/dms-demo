import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import {UserActivitiesRoutingModule} from './user-activities-routing.module'
import  {UserActivitiesComponent} from './user-activities.component'
import { PrimeNgModule } from '../../sharedModule/prime-ng.module';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import {TabViewModule} from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

import { PaginatorModule } from 'primeng/paginator';
import { AddActivityComponent } from './add-activity/add-activity.component';



@NgModule({
  declarations: [
    UserActivitiesComponent,
    CreateActivityComponent,
    AddActivityComponent
    
  ],
  imports: [
    CommonModule,
    UserActivitiesRoutingModule,
    PrimeNgModule,
    AccordionModule,
    TabViewModule,
    PaginatorModule,
    TableModule,
    
    
    FormsModule,
    
    ReactiveFormsModule,
  
  ]
})
export class UserActivitiesModule { }
