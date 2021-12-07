import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { TableModule } from "primeng/table";
import { UserLoaComponent } from "./user-loa/user-loa.component";
import { DropdownModule } from "primeng/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AccordionModule } from "primeng/accordion";
import { MultiSelectModule } from "primeng/multiselect";
import { BadgeModule } from "primeng/badge";
import { PaginatorModule } from "primeng/paginator";
import { IconModule } from "@coreui/icons-angular";
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { UserSetupComponent } from './user-setup/user-setup.component';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ModalModule,
    AutoCompleteModule,
    MultiSelectModule,
    PaginatorModule,
    InputTextModule,
    AccordionModule,
    CheckboxModule,
    IconModule,
    InputNumberModule,
    TableModule,
  ],
  declarations: [UserLoaComponent, UserSetupComponent],
})
export class UserModule {}
