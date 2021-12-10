import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { SystemAdminService } from "../../system-admin.service";

@Component({
  selector: "app-user-setup",
  templateUrl: "./user-setup.component.html",
  styleUrls: ["./user-setup.component.scss"],
})
export class UserSetupComponent implements OnInit {
  inputfield = "#ffffff";

  filtereduser: any[];
  userSetupForm: FormGroup;
  dummyUserSetupData: any = [];
  parenUnit: any[] = [];
  agency: any[] = [];
  manufactures: any[] = [];
  opc: any[] = [];
  careArea: any[] = [];
  principles: any[] = [];
  selectParentUnit: any;
  selectAgency: any[] = [];
  selectManufectures: any[] = [];
  selectOpc: any[] = [];
  selectedCareArea: any[] = [];
  selectPrinciples: any[] = [];
  userList: any[] = [];

  constructor(
    private systemAdminService: SystemAdminService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userSetupForm = this.formBuilder.group({
      name: "",
      code: "",
      dataAreaId: "",
      parentUnit: "",
      agency: "",
      manufacture: "",
      opc: "",
      careArea: "",
      principles: "",
    });
  }

  ngOnInit(): void {
    this.getParentUnit();
    this.getAgency();
    this.getManufactures();
    this.getOpc();
    this.getCareArea();
    this.getPrinciples();
  }

  createUnit() {
    this.systemAdminService
      .postQuery("/create/unit", {
        name: this.userSetupForm.value.name,
        code: this.userSetupForm.value.code,
        unitUserId: 0,
        dataAreaId: this.userSetupForm.value.dataAreaId,
        // user: this.userSetupForm.value.user.id,
        parent_unit: this.selectParentUnit,
        agency: this.selectAgency,
        manufactures: this.selectManufectures,
        opc: this.selectOpc,
        care_area: this.selectedCareArea,
        principles: this.selectPrinciples,
      })
      .subscribe((res: any) => {
        console.log("create-unit:", res);
      });
  }

  filterProduct(event) {}

  selectUser() {}
  // Parent-Unit
  getParentUnit() {
    this.systemAdminService
      .getQuery("/countries-list")
      .subscribe((res: any) => {
        console.log("parent-unit:", res);
        this.parenUnit = res.data.countries;
      });
  }

  addParentUnit(event, unit) {
    console.log("Event:", event);
    console.log("unit:", unit);
    this.selectParentUnit = unit;
    console.log("select:", this.selectParentUnit);
  }

  //Agency

  getAgency() {
    this.systemAdminService
      .getQuery("/agency/active-list")
      .subscribe((res: any) => {
        console.log("agency-res:", res);
        this.agency = res.data;
      });
  }

  changeAgency(agency) {
    console.log("code:", agency);
    this.selectAgency.push(agency);
    console.log("selectAgency:", this.selectAgency);
  }

  //manufactures

  getManufactures() {
    this.systemAdminService
      .getQuery("/manufacturer/active-list")
      .subscribe((res: any) => {
        console.log("manufactures-res:", res);
        this.manufactures = res.data;
      });
  }

  changeManufectures(event, manufecture) {
    console.log("value:", this.userSetupForm.value.manufacture);
    console.log("Manufecture:", manufecture);
    this.selectManufectures.push(manufecture);
    console.log("selectManufectures:", this.selectManufectures);
  }

  // OPC

  getOpc() {
    this.systemAdminService
      .getQuery("/opc/active-list")
      .subscribe((res: any) => {
        console.log("opc-res:", res);
        this.opc = res.data;
      });
  }

  changeOPC(opc) {
    console.log("opc:", opc);
    this.selectOpc.push(opc);
    console.log("opc-arr:", this.selectOpc);
  }

  // care-area

  getCareArea() {
    this.systemAdminService
      .getQuery("/care-area/active-list")
      .subscribe((res: any) => {
        console.log("care-area:", res);
        this.careArea = res.data;
      });
  }

  selectCareArea(care_area) {
    console.log("care_area:", care_area);
    this.selectedCareArea.push(care_area);
  }

  //Principles
  getPrinciples() {
    this.systemAdminService
      .getQuery("/product-group/active-list")
      .subscribe((res: any) => {
        console.log("principles-res:", res);
        this.principles = res.data;
      });
  }

  changePrinciples(principles) {
    console.log("value:", this.userSetupForm.value.principles);
    console.log("principles:", principles);
    this.selectPrinciples.push(principles);
  }

  resetForm() {
    this.userSetupForm.reset();
    this.selectParentUnit = null;
    this.selectOpc = null;
    this.selectPrinciples = null;
    this.selectAgency = null;
    this.selectedCareArea = null;
    this.selectManufectures = null;
  }
  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
}
