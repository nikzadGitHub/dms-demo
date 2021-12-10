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
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { PaginatorModule } from "primeng/paginator";
import { IconModule } from "@coreui/icons-angular";
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { UserSetupComponent } from './user-unit/user-setup.component';
import {UserComponent} from './add-user/user.component'
import { CreateUserComponent } from './add-user/create-user/create-user.component';


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
    ButtonModule,
    CheckboxModule,
    IconModule,
    InputNumberModule,
    TableModule,
  ],
  declarations: [UserComponent, UserLoaComponent, UserSetupComponent, CreateUserComponent],
})
export class UserModule {}
