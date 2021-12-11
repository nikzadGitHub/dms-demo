import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import {UserActivitiesRoutingModule} from './user-activities-routing.module'
import  {UserActivitiesComponent} from './user-activities.component'
import { PrimeNgModule } from '../../sharedModule/prime-ng.module';



@NgModule({
  declarations: [
    UserActivitiesComponent
    
  ],
  imports: [
    CommonModule,
    UserActivitiesRoutingModule,
    PrimeNgModule,
    
    
    FormsModule,
    
    ReactiveFormsModule,
  
  ]
})
export class UserActivitiesModule { }
