import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserAccessRoutingModule } from "./user-access-routing.module";
import { UserAccessSetupComponent } from "./user-access-setup.component";
import { TableModule } from "primeng/table";
import { EditRoleComponent } from "./edit-role/edit-role.component";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { CheckboxModule } from "primeng/checkbox";
import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { PanelModule } from "primeng/panel";
import { ModalModule } from "ngx-bootstrap/modal";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  imports: [
    CommonModule,
    UserAccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MultiSelectModule,
    CheckboxModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    ModalModule,
    AutoCompleteModule,
    TableModule,
  ],
  declarations: [UserAccessSetupComponent, EditRoleComponent],
})
export class userAccessModule {}
