import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductsComponent } from './products/products.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { RevisionComponent } from './revision/revision.component';
import { IndexTemplateComponent } from './index-template/index-template.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { QuoteTemplateComponent } from './quote-template/quote-template.component';
import { QuoteMobileTemplateComponent } from './quote-mobile-template/quote-mobile-template.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TabViewModule} from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {BadgeModule} from 'primeng/badge';
import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';





@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    ProductsComponent,
    RevisionComponent,
    IndexTemplateComponent,
    QuoteTemplateComponent,
    QuoteMobileTemplateComponent,
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    BsDropdownModule,
    IconModule,
    ModalModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    FileUploadModule,
    DropdownModule,
    MultiSelectModule,
    BadgeModule,
    CheckboxModule,
    TooltipModule
  ]
})
export class QuoteModule { }
