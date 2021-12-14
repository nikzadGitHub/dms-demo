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
import { SociService } from "./../../../soci/soci.service";

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
  selectParentUnit = "";
  selectAgency: any[] = [];
  selectManufectures: any[] = [];
  selectManufecturesData: any[] = [];

  selectOpc: any[] = [];
  selectedCareArea: any[] = [];
  selectPrinciples: any[] = [];
  userList: any[] = [];
  companies: Array<any> = [];
  allUnits;
  company_Id = "";
  unit_Name = "";
  unit_Code = "";
  isEditEnabled: boolean = false;
  editedUnit: any = [];
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  alertBody;
  selectedAllUnits: any = [];
  unitId: string;
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
    this.systemAdminService.getAllCompamanies().subscribe((res: any) => {
      res.data.forEach((ele) => {
        this.companies.push(ele);
      });
    });
    // getUnits()
    this.systemAdminService.getQuery("/units").subscribe((res) => {
      this.allUnits = res;
      this.selectedAllUnits = this.allUnits?.data;
      this.selectedAllUnits.forEach((element) => {
        if (element.created_at) {
          element.created_at = new Date(element.created_at);
        }
      });
    });
  }

  createUnit() {
    let body: any = {};
    body = {
      name: this.unit_Name,
      code: this.unit_Code,
      dataAreaId: this.company_Id,
      min_profit_margin_percentage: "0.00",
      allowed_discount_percentage: "0.20",
      parent_unit: this.selectParentUnit.toString(),
      unit_agencies: this.selectAgency,
      unit_manufactures: this.selectManufectures,
      unit_opcs: this.selectOpc,
      unit_care_areas: this.selectedCareArea,
      unit_principals: this.selectPrinciples,
    };
    if (this.isEditEnabled) {
      body.id = this.editedUnit.id;
      this.systemAdminService.putQuery("/units/" + this.unitId, body).subscribe(
        (res: any) => {
          if (res.success) {
            let item = this.selectedAllUnits.find((x) => x.id == res.data.id);
            if (item)
              this.selectedAllUnits[this.selectedAllUnits.indexOf(item)] =
                res.data;

            this.alertBody = "Unit Updated successfully.";
            this.successModal.show();
            setTimeout(() => {
              this.successModal.hide();
              this.resetForm();
            }, 2000);
          }
        },
        (err) => {
          this.alertBody = "Error";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
    } else {
      this.systemAdminService.postQuery("/units", body).subscribe(
        (res: any) => {
          if (res.success) {
            this.selectedAllUnits.push(res.data);

            this.alertBody = "Unit saved successfully.";
            this.successModal.show();
            setTimeout(() => {
              this.successModal.hide();
              this.resetForm();
            }, 2000);
          }
        },
        (err) => {
          this.alertBody = "Error";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
        }
      );
    }
  }

  selectUser() {}
  // Parent-Unit
  // /countries-list
  getParentUnit() {
    this.systemAdminService.getQuery("/units").subscribe((res: any) => {
      console.log("parent-unit:", res);
      this.parenUnit = res.data;
    });
  }

  // addParentUnit(event, unit) {
  //   console.log("Event:", event);
  //   console.log("unit:", unit);
  //   this.selectParentUnit = unit;
  //   console.log("select:", this.selectParentUnit);
  // }

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
      .getQuery("/principal/active-list")
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

  getUnit(id) {
    // getSingleUnit(id)
    this.unitId = id;
    this.systemAdminService
      .getQuery("/units/" + id + "/edit")
      .subscribe((res: any) => {
        if (res.success) {
          this.editedUnit = res.data;
          this.isEditEnabled = true;
          let data = res.data;
          data.parent.id ? (this.selectParentUnit = data.parent.id) : "";
          data.title ? (this.unit_Name = data.title) : "";
          data.code ? (this.unit_Code = data.code) : "";
          data.data_area_id ? (this.company_Id = data.data_area_id) : "";
          // agency
          setTimeout(() => {
            var agn = [];
            data.unit_agencies.forEach((ele) => {
              let agnArr = this.agency.filter(
                (agnEle) => agnEle.id == ele.agency?.id
              );
              agnArr.forEach((data) => {
                agn.push(data);
              });
            });
            this.selectAgency = agn;
          }, 300);
          // manufactures
          setTimeout(() => {
            var ag = [];

            data.unit_manufactures.forEach((ele) => {
              let arr = this.manufactures.filter(
                (elem) => elem.id == ele.manufacturer?.id
              );
              arr.forEach((data) => {
                ag.push(data);
              });
            });
            this.selectManufectures = ag;
          }, 300);
          // opc
          setTimeout(() => {
            var opcArr = [];
            data.unit_opcs.forEach((ele) => {
              let newOpcArr = this.opc.filter(
                (opcEle) => opcEle.id == ele.opc?.id
              );
              newOpcArr.forEach((data) => {
                opcArr.push(data);
              });
            });
            this.selectOpc = opcArr;
          }, 300);
          this.selectOpc = data.unit_opcs;
          // unit_care_areas
          setTimeout(() => {
            var careArr = [];
            data.unit_care_areas.forEach((ele) => {
              let care_arr = this.careArea.filter(
                (careElem) => careElem.id == ele.care_area?.id
              );
              care_arr.forEach((data) => {
                careArr.push(data);
              });
            });
            this.selectedCareArea = careArr;
          }, 2000);

          // principles
          setTimeout(() => {
            var prinArr = [];
            data.unit_principals.forEach((ele) => {
              let newPrinArr = this.principles.filter(
                (prinEle) => prinEle.id == ele.principal?.id
              );
              newPrinArr.forEach((data) => {
                prinArr.push(data);
              });
            });
            this.selectPrinciples = prinArr;
          }, 300);

          console.log("this is the response if ", res);
        }
      });
  }
  isValidate() {
    if (
      this.selectParentUnit != null &&
      this.selectOpc != null &&
      this.selectPrinciples != null &&
      this.selectAgency != null &&
      this.unit_Code != "" &&
      this.unit_Name != "" &&
      this.company_Id != "" &&
      this.selectedCareArea != null &&
      this.selectManufectures != null
    ) {
      return true;
    } else {
      return false;
    }
  }

  resetForm() {
    this.selectParentUnit = null;
    this.selectOpc = null;
    this.selectPrinciples = null;
    this.selectAgency = null;
    this.unit_Code = "";
    this.unit_Name = "";
    this.isEditEnabled = false;
    this.company_Id = "";
    this.selectedCareArea = null;
    this.selectManufectures = null;
    this.selectPrinciples = null;
  }
  back() {
    this.router.navigateByUrl("user/adduser");
  }
}
