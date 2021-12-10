import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DialogService } from '@app/common/dialog/dialog.service';
import { FpsService } from '@app/fps/fps.service';
import { AppService } from '@app/_services/shared/app.service';
import { FinancialInstitutionService, FinancialInstitution } from '@app/_services/shared/finantial-institution.service';
import { CurrencyService } from '@app/_services/shared/currency.service';

export interface OpportunityDetail {
	company_name: any;
	opportunity_code: any;
	created_at: any;
  currency_code: any;
  data_area_id: number;
  amount: any;
  
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [
    './edit.component.scss',
    '../../common/shared.styles.component.scss'
  ],
  providers: [AppService],
})

export class EditComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @ViewChild('fpsEditFormContainer') fpsEditFormContainerRef: ElementRef;

  fpsEditForm : FormGroup;
  alertBody: string;
  alertHeader: string;
  fps_user_list;
  agreement_mandatory = false;
  fpsID: string;

  payment_frequency_list = [
    {'value': 'monthly_payment', 'label': 'Monthly'},
    {'value': 'quarterly_payment', 'label': 'Quarterly'},
    {'value': 'half_yearly_payment', 'label': 'Half-yearly'}
  ];

  institutions_list : [];
  tenure_list : [] = [];
  current_apportunity_id : number;
  countryCode : string = null;

  oppt_details : any = {
    opportunity_code: '',
    created_at: '',
    currency_code: '',
    amount: '',
    customer: '',
  };
   
  constructor(
    private fb: FormBuilder,
    private fpsService: FpsService,
    private appService: AppService,
    private institutionService: FinancialInstitutionService,
    private zone: NgZone,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private currencyService: CurrencyService,
    private router: Router,
  ) {}

  fpsTypeList = this.fpsService.getTransSactionTypeList();
  fpsStatusList = this.fpsService.getFpsStatusList();

  get form_controls() {
    return this.fpsEditForm.controls;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.fpsID = params.get('id');
      }
    });

    this.fpsEditForm = this.fb.group({
      fps_no: new FormControl('',[Validators.required]),
      fps_opportunity_id: new FormControl(),
      fps_quote_id: new FormControl(),
      fps_customer_name: new FormControl(),
      fps_soci_uuid: new FormControl(),
      fps_transaction_type_id: new FormControl(1, [Validators.min(1)]),
      fps_financier_id: new FormControl('',[Validators.required, Validators.min(1)]),
      fps_payment_frequency: new FormControl('',[Validators.required]),
      fps_status_id : new FormControl(1, [Validators.min(1)]),
      fps_tenure_id : new FormControl('',[Validators.required]),
      fps_adv_payment : new FormControl('0'),
      fps_adv_payment_percentage : new FormControl('0'),
      fps_net_financing_amount : new FormControl('0'),
      fps_monthly_payment_amount : new FormControl(),
      fps_interest_rate : new FormControl(),
      fps_validated_by : new FormControl(),
      fps_approved_by : new FormControl(),
      fps_leas_aggr_no : new FormControl('0'),
      fps_internal_aggr_no : new FormControl(),
      fps_remarks : new FormControl(),
      fps_currency_code: new FormControl(),
      fps_total_financial_amount: new FormControl(),
      fps_min_payment_amount: new FormControl(),
      fps_required_docs: new FormControl(),
      fps_data_area_id: new FormControl()
    });

    this.route.queryParams.subscribe(params => {
      this.current_apportunity_id = params['opport_id'];
      this.fpsEditForm.controls.fps_opportunity_id.setValue(this.current_apportunity_id);
    });

    // Get the opportity which PFS is going to be added to.
    this.appService.getQuery('/opportunity/detail/'+this.current_apportunity_id, null).subscribe((data) => {	
      this.oppt_details = data['data'];
      this.fpsEditForm.controls.fps_currency_code.setValue(this.oppt_details.currency_code);
      this.fpsEditForm.controls.fps_total_financial_amount.setValue(this.oppt_details.amount);
      this.fpsEditForm.controls.fps_data_area_id.setValue(this.oppt_details.customer.data_area_id);

      this.loadUsers();
      this.currencyService.getCountryCodeFromCurrency(this.oppt_details.currency_code).subscribe({
        next: (response) => {
          if (response.success) {
            this.zone.run(() => {
              this.countryCode = response.data.iso3;
              this.loadFpsDetails();
            });
          } 
        }
      });
    })

  }

  onSave(): void {

    if (!this.fpsEditForm.valid) {
      this.fpsService.validateAllFormFields(this.fpsEditForm);
      this.fpsEditFormContainerRef.nativeElement.scrollIntoView({behavior: 'smooth'});
      return;
    } 

    this.fpsService.updateFps({
      fps_no: this.fpsEditForm.get("fps_no").value + "",
      fps_opportunity_id: this.fpsEditForm.get("fps_opportunity_id").value + "",
      fps_quote_id: this.fpsEditForm.get("fps_quote_id").value + "",
      fps_transaction_type_id: this.fpsEditForm.get("fps_transaction_type_id").value + "",
      fps_payment_frequency: this.fpsEditForm.get("fps_payment_frequency").value + "",
      fps_financier_id: this.fpsEditForm.get("fps_financier_id").value + "",
      fps_adv_payment: this.fpsEditForm.get("fps_adv_payment").value + "",
      fps_adv_payment_percentage: this.fpsEditForm.get("fps_adv_payment_percentage").value + "",
      fps_total_financial_amount: this.fpsEditForm.get("fps_total_financial_amount").value + "",
      fps_net_financing_amount: this.fpsEditForm.get("fps_net_financing_amount").value + "",
      fps_monthly_payment_amount: this.fpsEditForm.get("fps_monthly_payment_amount").value + "",
      fps_tenure_id: this.fpsEditForm.get("fps_tenure_id").value + "",
      fps_interest_rate: this.fpsEditForm.get("fps_interest_rate").value + "",
      fps_status_id: this.fpsEditForm.get("fps_status_id").value + "",
      fps_validated_by: this.fpsEditForm.get("fps_validated_by").value,
      fps_approved_by: this.fpsEditForm.get("fps_approved_by").value,
      fps_leas_aggr_no: this.fpsEditForm.get("fps_leas_aggr_no").value + "",
      fps_remarks: this.fpsEditForm.get("fps_remarks").value + "",
      fps_required_docs: this.fpsEditForm.get("fps_required_docs").value + "",
      fps_customer_name: this.oppt_details.customer.owner + "",
      fps_internal_aggr_no:  "",
      fps_data_area_id: this.fpsEditForm.get("fps_data_area_id").value + ""
      
    }, this.fpsID).subscribe((res) => {
        if (res.id) {
          this.alertBody = "FPS updated successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
          this.router.navigateByUrl('/fps/fps-listing', {replaceUrl: true})
        }
      },
      err => {
        console.log(err);
          this.alertBody = "The FPS can't save";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
      });
  }

  onChangeAdvancePayment() {
    let totalAmount = this.fpsEditForm.controls.fps_total_financial_amount.value;
    let percentage = this.fpsEditForm.controls.fps_adv_payment_percentage.value;
    let adv_payment = totalAmount / 100 * percentage;
    
    this.fpsEditForm.controls.fps_net_financing_amount.setValue(totalAmount - adv_payment);
  }

  updateInterestRate() {
    let rateID = this.fpsEditForm.controls.fps_tenure_id.value;
    var result = this.getFilteredCodes(this.tenure_list, "id", rateID);    
    this.fpsEditForm.controls.fps_interest_rate.setValue(result[0].details_interest_rate);
    this.fpsEditForm.controls.fps_min_payment_amount.setValue(result[0].min_payment_amount);
    this.fpsEditForm.controls.fps_required_docs.setValue(result[0].required_docs ?? '');
    
    if(result[0].agreement_mandatory == 0) {
      this.agreement_mandatory = false;
    }
    else {
      this.agreement_mandatory = true
    }
    
    this.updateMontlyPayment();
  }

  updateMontlyPayment() {
    let totalPayment = parseFloat(this.fpsEditForm.controls.fps_total_financial_amount.value);
    let interestRate = parseFloat(this.fpsEditForm.controls.fps_interest_rate.value);
    let tenure = parseFloat(this.fpsEditForm.controls.fps_tenure_id.value);
    let calculatedVal = totalPayment * (1 + interestRate / 12 * tenure) / tenure;
    this.fpsEditForm.controls.fps_monthly_payment_amount.setValue(calculatedVal.toFixed(2));
  }

  updateTenure() {
    
    if(this.countryCode.length > 0) {
      this.loadFinancialInstitutions();
    }
  
    let financial_id = this.fpsEditForm.controls.fps_financier_id.value;
    let payment_frequency = this.fpsEditForm.controls.fps_payment_frequency.value;
    let fps_transaction_type = this.fpsEditForm.controls.fps_transaction_type_id.value;

    if(fps_transaction_type && financial_id && payment_frequency) {
      this.fpsService.getTenureList(fps_transaction_type, financial_id, payment_frequency).subscribe((res) => {
        if(res.length > 0) {
          res.unshift({'id': '', 'details_tenure' : 'Select Tenure'})
        }
        else {
          res.unshift({'id': '', 'details_tenure' : 'No Tenure Available'})
        }
        this.tenure_list = res;
      },
      err => {
        console.log(err);
      });
    }
  }

  loadFinancialInstitutions() {
    this.institutionService.getFinancialInstition(this.countryCode).subscribe({
      next: (response) => {
        if (response.success) {
          this.zone.run(() => {
            this.institutions_list = response.data.institutions;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve institutions list");
        }
      }
    })
  }

  getFilteredCodes(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

  isFieldValid(field: string) {
    return !this.fpsEditForm.get(field).valid && this.fpsEditForm.get(field).touched;
  }

  loadUsers() {
    // Get list of users.
    this.fpsService.getUsersList().subscribe((res) => {	
      this.fps_user_list = res.data;
    })
  }

  loadFpsDetails(){
    this.fpsService.find(this.fpsID).subscribe((data)=>{
      this.updateTenure();
      this.fpsEditForm.patchValue(data.data);
      this.updateTenure();      
    });
  }

}
