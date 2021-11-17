
// Framework.
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies.
//
import { PrimeNgModule } from '../../../sharedModule/prime-ng.module';
// FullCalendar must be imported before it's plugins, else runtime-error occurs.
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

// Local.
//
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,

    // Dependencies.
    PrimeNgModule,
    FullCalendarModule
  ],
  exports: [
    FullCalendarModule
  ]
})
export class CalendarModule { }
