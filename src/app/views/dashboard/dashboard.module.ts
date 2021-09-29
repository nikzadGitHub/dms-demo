import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule }  from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabViewModule,
    CheckboxModule,
    ProgressBarModule,
    DropdownModule,
    ChartModule,
    SplitButtonModule,
    InputNumberModule,
    SelectButtonModule
  ],
  declarations: [ DashboardComponent ],
  exports:[ DashboardComponent ]
})
export class DashboardModule { }
