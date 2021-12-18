import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
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
  @ViewChild("createModal") fileAddFormModal: ModalDirective;
  @ViewChild('fpsEditFormContainer') fpsEditFormContainerRef: ElementRef;

  fpsEditForm : FormGroup;
  alertBody: string;
  alertHeader: string;
  fps_user_list;
  agreement_mandatory = false;
  fpsID: string;
  minProcedureAddForm: FormGroup;
  minUsageAddForm: FormGroup;
  existingProcedureIds = [];
  existingConsumeIds = [];
  fileUploadForm: FormGroup;
  file;
  fileName;
  url: any;
  formData = new FormData();
  fileList : any = [];

  payment_frequency_list = [
    {'value': 'monthly_payment', 'label': 'Monthly'},
    {'value': 'quarterly_payment', 'label': 'Quarterly'},
    {'value': 'half_yearly_payment', 'label': 'Half-yearly'}
  ];

  institutions_list : [];
  tenure_list : [] = [];
  current_apportunity_id : number;
  current_quot_id : number;
  countryCode : string = null;
  has_consumable_usage: boolean = false;
  has_min_procedure: boolean = false;

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
  fileTypeList = this.fpsService.getFileTypeList();

  get form_controls() {
    return this.fpsEditForm.controls;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.fpsID = params.get('id');
      }
    });

    this.minProcedureAddForm = this.fb.group({
      addMinProcedure: this.fb.array([]),
    });

    this.minUsageAddForm = this.fb.group({
      addMinUsage: this.fb.array([]),
    });

    this.fileUploadForm = this.fb.group(
      {
        file_name: new FormControl('test 1'),
        file_uploaded_by: new FormControl(1),
        file_type: new FormControl(1),
        file_valid_until: new FormControl(),
        file_ramark: new FormControl('My remark'),
        file : new FormControl(null),
      }
    );

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
      fps_adv_payment : new FormControl(0),
      fps_adv_payment_percentage : new FormControl(0),
      fps_net_financing_amount : new FormControl(0),
      fps_monthly_payment_amount : new FormControl(),
      fps_interest_rate : new FormControl(),
      fps_validated_by : new FormControl(),
      fps_approved_by : new FormControl(),
      fps_leas_aggr_no : new FormControl(0),
      fps_internal_aggr_no : new FormControl(),
      fps_remarks : new FormControl(),
      fps_currency_code: new FormControl(),
      fps_total_financial_amount: new FormControl(),
      fps_min_payment_amount: new FormControl(),
      fps_required_docs: new FormControl(),
      fps_data_area_id: new FormControl(),
      fps_consumable_usage: new FormControl(),
      fps_min_procedure: new FormControl(),
    });

    this.route.queryParams.subscribe(params => {
      this.current_apportunity_id = params['opport_id'];
      this.fpsEditForm.controls.fps_opportunity_id.setValue(this.current_apportunity_id);
      this.current_quot_id = params['quot_id'];
      this.fpsEditForm.controls.fps_quote_id.setValue(this.current_quot_id);
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

          let procedures = this.minProcedureAddForm.value.addMinProcedure;
          let procedureList = [];
          for(let x = 0; x < procedures.length; x++) {
            procedureList.push({
              'id': this.existingProcedureIds.includes(procedures[x].id) ? procedures[x].id : null,
              'fps_id': res.id,
              'date': procedures[x].date,
              'no_procedure': procedures[x].no_procedure,
              'updated_by': procedures[x].updated_by,
              'updated_on': procedures[x].updated_on,
            });
          }
          if(procedureList.length > 0) {
          this.fpsService.storeMinProcedure(procedureList);
          }

          let usages = this.minUsageAddForm.value.addMinUsage;
          let usageList = [];
          for(let x = 0; x <usages.length; x++) {
            usageList.push({
              'id': this.existingConsumeIds.includes(usages[x].id) ? usages[x].id : null,
              'fps_id': res.id,
              'date': usages[x].date,
              'usage': usages[x].usage,
              'updated_by': usages[x].updated_by,
              'updated_on': usages[x].updated_on,
            });
          }
          if(usageList.length > 0) {
          this.fpsService.storeMinUsage(usageList);
          }
          
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
    
    this.fpsEditForm.controls.fps_adv_payment.setValue(adv_payment);
    this.fpsEditForm.controls.fps_net_financing_amount.setValue(totalAmount - adv_payment);
  }

  updateInterestRate() {
    let rateID = this.fpsEditForm.controls.fps_tenure_id.value;
    var result = this.getFilteredCodes(this.tenure_list, "id", rateID);
    
    if (result.length > 1) {
      
      this.fpsEditForm.controls.fps_interest_rate.setValue(result[0].details_interest_rate);
      this.fpsEditForm.controls.fps_min_payment_amount.setValue(result[0].min_payment_amount);
      this.fpsEditForm.controls.fps_required_docs.setValue(result[0].required_docs ?? '');
      this.fpsEditForm.controls.fps_consumable_usage.setValue(result[0].consumable_usage);
      this.fpsEditForm.controls.fps_min_procedure.setValue(result[0].min_procedure);
      this.has_consumable_usage = result[0].consumable_usage > 0;
      this.has_min_procedure = result[0].min_procedure > 0
      
      if(result[0].agreement_mandatory == 0) {
        this.agreement_mandatory = false;
      }
      else {
        this.agreement_mandatory = true
      }
      
      this.updateMontlyPayment();
    }
    
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
        this.updateInterestRate();
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

      data.data.min_procedures.forEach((addMinProcedure) => {
        this.has_min_procedure = true;
        this.addMinProcedure().push(this.existingMinProcedure(addMinProcedure));
        this.existingProcedureIds.push(addMinProcedure.id);
      });

      data.data.min_usages.forEach((addMinUsage) => {
        this.has_consumable_usage = true;
        this.addMinUsage().push(this.existingMinUsage(addMinUsage));
        this.existingConsumeIds.push(addMinUsage.id);
      });

      data.data.files.forEach((file) => {
        this.fileList.push(file);
      });

      this.updateTenure();      
    });
  }

  //---------------- Min Procedure  -------------------
    addMinProcedure(): FormArray {
      return this.minProcedureAddForm.get("addMinProcedure") as FormArray;
    }
  
    newMinProcedure(): FormGroup {
      return this.fb.group({
        id:'',
        date: '',
        no_procedure: 12,
        updated_by: 1,
        updated_on: '',
      });
    }
  
    addAddMinProcedure() {
      this.addMinProcedure().push(this.newMinProcedure());
    }
  
    removeAddMinProcedure(i: number) {
      this.addMinProcedure().removeAt(i);
    }

    existingMinProcedure(minProcedure): FormGroup {
      return this.fb.group({
        id: minProcedure.id,
        date: minProcedure.date,
        no_procedure: minProcedure.no_procedure,
        updated_by: minProcedure.updated_by,
        updated_on: minProcedure.updated_on,
      });
    }
  
  //---------------- End of  Min Procedure -------------------

  //---------------- Min Usage  -------------------
    addMinUsage(): FormArray {
      return this.minUsageAddForm.get("addMinUsage") as FormArray;
    }

    newMinUsage(): FormGroup {
      return this.fb.group({
        date: '',
        usage: 12,
        updated_by: 1,
        updated_on: '',
      });
    }

    addAddMinUsage() {
      this.addMinUsage().push(this.newMinUsage());
    }

    removeAddMinUsage(i: number) {
      this.addMinUsage().removeAt(i);
    }

    existingMinUsage(minUsage): FormGroup {
      return this.fb.group({
        id: minUsage.id,
        date: minUsage.date,
        usage: minUsage.usage,
        updated_by: minUsage.updated_by,
        updated_on: minUsage.updated_on,
      });
    }
  //---------------- End of  Min Usage -------------------

  //---------------- File Library  -------------------
  
  resetForm() {
    
  }

  onFileSelect(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event: any) => {
        this.url = reader.result;
      };
      this.formData.append("file", this.file);
    }
  }

  createFile() {
    this.fileAddFormModal.show();
  }

  fileUpload() {

    let file = {
      file_name: this.fileUploadForm.get('file_name').value,
      file_type: this.fileUploadForm.get('file_type').value,
      file_valid_until: this.fileUploadForm.get('file_valid_until').value,
      file_uploaded_by: this.fileUploadForm.get('file_uploaded_by').value,
      file_uploaded_on: new Date(),
      file_ramark: this.fileUploadForm.get('file_ramark').value,
      file_size: this.file.size,
    }

    this.fileList.push(file);

    this.formData.append("file_name", this.fileUploadForm.get('file_name').value);
    this.formData.append("file_type", this.fileUploadForm.get('file_type').value);
    this.formData.append("file_valid_until", this.fileUploadForm.get('file_valid_until').value);
    this.formData.append("file_uploaded_by", this.fileUploadForm.get('file_uploaded_by').value);
    this.formData.append("file_ramark", this.fileUploadForm.get('file_valid_until').value);
    this.formData.append("fps_id", this.fpsID);
    this.formData.append("file_size", this.convertSize(this.file.size));
    
    this.fpsService.storeFileLibrary(this.formData);
    this.fileAddFormModal.hide();
  }

  showFileType(key) {
    return this.fileTypeList.find(typeItem => typeItem.id == key).title; 
  }

  showUser(key) {
    return this.fps_user_list.find(typeItem => typeItem.id == key).full_name; 
  }

  convertSize(size) {
    if (typeof size === 'number' ){
      return this.fpsService.humanFileSize(size);
    }
    else {
      return size;
    }
  }
}
