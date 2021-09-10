import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    AutoCompleteModule,
    CalendarModule,
    AccordionModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
