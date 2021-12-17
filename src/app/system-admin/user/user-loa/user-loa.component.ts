import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SystemAdminService } from "../../system-admin.service";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-user-loa",
  templateUrl: "./user-loa.component.html",
  styleUrls: ["./user-loa.component.scss"],
})
export class UserLoaComponent implements OnInit {
  userList: any = [];

  authorityForm: FormGroup;
  TeamEmailForm: FormGroup;
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;

  allUnits: any[] = [];
  unitId: string;
  alertBody = "";
  priceApprovalChk: boolean=true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private systemAdminSerive: SystemAdminService,
    private location: Location
  ) {
    this.authorityForm = this.formBuilder.group({
      unit: "",
      paymentTermApproval: "",
      personInCharges: "",
      amount: "",
      approve_by: "",
      profitMargin: "",
      discount: "",
      cellingPriceAmount: "",
      cellingPriceApproval: "",
      priceApprovel: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.getUserRole();
    this.getAllUnits();
    this.addPriceLevelApproval();
    console.log("this.authorityForm.value =>", this.authorityForm.value);
    // this.dummyAuthorityData.forEach((value) => {
    //   value.created_at = new Date(value.created_at);
    // });
  }

  createUserLoad() {
    let data = {
      parent_unit_id: this.authorityForm.value.unit,
      pic_user_id: this.authorityForm.value.personInCharges,
      profit_margin: this.authorityForm.value.profitMargin,
      approval_discount: this.authorityForm.value.discount,
      celling_price_amount: this.authorityForm.value.cellingPriceAmount,
      celling_price_approval_id: this.authorityForm.value.cellingPriceApproval,
      price_level_approval: this.authorityForm.value.priceApprovel,
    };
    let priceApprovel=data.price_level_approval;
    for(let i=0;i<priceApprovel.length;i++){
      console.log('alsdk',priceApprovel[i])
      if(priceApprovel[i].amount == '' || priceApprovel[i].approve_by == ''){
        this.priceApprovalChk= false
      }
      else{
        this.priceApprovalChk=true
      }
    }
    if(this.priceApprovalChk){
      this.systemAdminSerive
      .putQuery("/units/level-approval/" + this.unitId, data)
      .subscribe(
        (res: any) => {
          console.log("user-loa-res:", res);
          (this.alertBody = res.message), this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
            this.authorityForm.reset();
          }, 2000);
        },
        (error) => {
          console.log("Error:", error);

          this.alertBody = error.error.message;
          this.dangerModal.show();
        }
      );
    }
  }

  getUserRole() {
    this.systemAdminSerive.getQuery("/user-role").subscribe((res: any) => {
      console.log("user-role-data:", res);
      this.userList = res.data;
    });
  }
  getAllUnits() {
    // /units/level-approval/1
    this.systemAdminSerive.getQuery("/units").subscribe((res: any) => {
      console.log("Unit-res:", res);
      this.allUnits = res.data;
    });
  }
  goForEdit(authorityUnit) {
    this.unitId = authorityUnit.id;
    console.log("authorityUnit:", authorityUnit);
    // debugger;

    this.systemAdminSerive
      .getQuery("/units/level-approval/" + this.unitId)
      .subscribe((res: any) => {
        if (this.authorityForm.value.priceApprovel.length) {
          this.getPriceApprovelForm().removeAt(0);
        }
        res?.data?.price_levels.forEach((ele) => {
          this.getPriceApprovelForm().push(
            this.formBuilder.group({
              amount: ele.level_amount,
              approve_by: ele.approval_personel_id,
            })
          );
        });

        this.authorityForm.patchValue({
          unit: res?.data?.parent_unit_id,
          personInCharges: res?.data?.pic?.id,
          // amount: "",
          // approve_by: "",
          profitMargin: res?.data?.min_profit_margin_percentage,
          discount: res?.data?.allowed_discount_percentage,
          cellingPriceAmount: res?.data?.ceiling?.ceiling_amount,
          cellingPriceApproval: res?.data?.ceiling?.approval_personel_id,
          // priceApprovel: res?.data?.price_levels,
        });
      });
  }

  addPriceLevelApproval() {
    this.getPriceApprovelForm().push(this.newPriceApprovelFields());
  }

  deletePriceLevelRow(index) {
    this.getPriceApprovelForm().removeAt(index);
  }

  getPriceApprovelForm(): FormArray {
    return this.authorityForm.get("priceApprovel") as FormArray;
  }
  newPriceApprovelFields(): FormGroup {
    return this.formBuilder.group({
      amount: "",
      approve_by: "",
    });
  }

  dynamicForm() {
    console.log("array form ", this.authorityForm.value);
  }
  back() {
    // this.location.back();
    this.router.navigateByUrl("user/adduser");
  }
}
