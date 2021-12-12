import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { SystemAdminService } from "../../system-admin.service";
import { SociService} from './../../../soci/soci.service'

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
  selectManufecturesData: any[] = [];

  selectOpc: any[] = [];
  selectedCareArea: any[] = [];
  selectPrinciples: any[] = [];
  userList: any[] = [];
  companies:Array<any>=[];
  allUnits;
  company_Id = ''
  unit_Name = ''
  unit_Code = ''
  isEditEnabled: boolean = false
  editedUnit: any = []
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  alertBody;
  selectedAllUnits: any = []
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
    this.systemAdminService
      .getAllCompamanies().subscribe((res:any) => {
        res.data.forEach(ele => {
          this.companies.push(ele)
        });
        
      })
    this.systemAdminService.getUnits().subscribe(res=>{
      this.allUnits = res;
      this.selectedAllUnits = this.allUnits?.data
    })
  }

  createUnit() {
    // if(this.isValidate()){
      let body :any = {}
      body = {
       name: this.unit_Name,
       code: this.unit_Code,
       // unitUserId: 0,
       dataAreaId: this.company_Id,
       min_profit_margin_percentage: "0.00",
       allowed_discount_percentage : "0.0",
       // user: this.userSetupForm.value.user.id,
       parent_unit: this.selectParentUnit?.dail_code,
       agency: this.selectAgency,
       manufactures: this.selectManufectures,
       opc: this.selectOpc,
       care_area: this.selectedCareArea,
       principles: this.selectPrinciples,
     }
     if(this.isEditEnabled){
       body.id = this.editedUnit.id
       this.systemAdminService.updateUnit(body).subscribe((res:any)=>{
         if (res.success) {
           let item = this.selectedAllUnits.find(x => x.id == res.data.id)
           if(item) this.selectedAllUnits[this.selectedAllUnits.indexOf(item)] = res.data
           this.resetForm();
           this.alertBody = "Unit Updated successfully.";
           this.successModal.show();
           setTimeout(() => {
             this.successModal.hide();
           }, 2000);
         }
       },(err)=>{
         this.alertBody = "Error";
           this.dangerModal.show();
           setTimeout(() => {
             this.dangerModal.hide();
           }, 2000);
       })
     }else{
       this.systemAdminService.createUnit(body).subscribe((res:any)=>{
         if (res.success) {
           this.selectedAllUnits.push(res.data)
           this.resetForm();
           this.alertBody = "Unit saved successfully.";
           this.successModal.show();
           setTimeout(() => {
             this.successModal.hide();
           }, 2000);
         }
       },(err)=>{
         this.alertBody = "Error";
         this.dangerModal.show();
         setTimeout(() => {
           this.dangerModal.hide();
         }, 2000);
       }) 
     }
    // }else {
    //   this.alertBody = "Please fill all required fields.";
    //   this.dangerModal.show();
    //   setTimeout(() => {
    //     this.dangerModal.hide();
    //   }, 2000);
    // }
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
    this.userSetupForm.markAsPristine();
    this.userSetupForm.markAsUntouched();
    this.selectParentUnit = null;
    this.selectOpc = null;
    this.selectPrinciples = null;
    this.selectAgency = null;
    this.unit_Code = ''
    this.unit_Name=''
    this.isEditEnabled = false
    this.company_Id = ''
    this.selectedCareArea = null;
    this.selectManufectures = null;
  }
  back() {
    this.router.navigateByUrl("user/adduser");
  }
  getUnit(id){
    this.systemAdminService.getSingleUnit(id).subscribe((res:any)=>{
      if (res.success) {
        this.editedUnit = res.data
        this.isEditEnabled = true
        let data  = res.data
        this.unit_Name = data.title
        this.unit_Code = data.code
        this.company_Id = data.data_area_id
        this.selectAgency = data.unit_agencies
        this.selectedCareArea = data.unit_care_areas
        this.selectManufectures = data.unit_manufactures
        this.selectOpc = data.unit_opcs
        console.log("this is the response if ",res)
      }
    })
  }
  isValidate() {
    if (this.selectParentUnit != null &&
      this.selectOpc != null &&
      this.selectPrinciples != null &&
      this.selectAgency != null &&
      this.unit_Code != '' &&
      this.unit_Name != '' &&
      this.company_Id != '' &&
      this.selectedCareArea != null &&
      this.selectManufectures != null) {
      return true
    } else {
      return false
    }
  }
}
