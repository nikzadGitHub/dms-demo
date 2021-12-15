import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@app/common/dialog/dialog.service';
import { SkuService } from '@app/fps/services/sku.service';
import { CountryService, Country } from '@app/_services/shared/country.service';
import {SkuInterface, SkuList, SaveResult} from '@app/fps/services/sku-interface';
import { FinancialInstitutionService, FinancialInstitution } from '@app/_services/shared/finantial-institution.service';
import { CurrencyService } from '@app/_services/shared/currency.service';
import { FpsService } from '@app/fps/fps.service';


@Component({
  selector: 'app-sku-edit',
  templateUrl: './sku-edit.component.html',
  styleUrls: [
    './sku-edit.component.scss',
    '../../common/shared.styles.component.scss'
  ]
})
export class SkuEditComponent implements OnInit {
  @ViewChild("addProductModal") addRateDetailsModal: ModalDirective;
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @ViewChild('submitSkuAdd') submitSkuAdd: ElementRef<HTMLElement>;
  @ViewChild('skuEditFormContainer') skuEditFormContainerRef: ElementRef;

  skuEditForm : FormGroup;
  rateAddForm: FormGroup;
  rateDatailAddForm: FormGroup;
  alertBody: string;
  alertHeader: string;
  sku: SkuInterface;
  rate_counter = 0;
  countryList: Country[] = [];
  currencies_list = [];
  existingRatesIds = [];
  institutions_list: FinancialInstitution[] = [];
  countryCode : string = '';
  data_area_id : string = '';
  has_interest_flag : boolean = false;
  min_payment_amount_flag : boolean;
  skuID : string;
  addLine: boolean;

  currentRateNo : string;
  currentRateStart : string;
  currentRateEnd : string;
  currentRateType : string;

  constructor(
    private countryService: CountryService,
    private currencyService: CurrencyService,
    private institutionService: FinancialInstitutionService,
    private dialogService: DialogService,
    private zone: NgZone,
    private fb: FormBuilder,
    private SkuService: SkuService,
    private route: ActivatedRoute,
    private fpsService: FpsService,
    private datePipe: DatePipe,
    private router: Router,

  ) {}

  fpsTypeList = this.fpsService.getTransSactionTypeList();
  rateStatusList = this.fpsService.getrateStatusList();
  rateTypeOptions = [
    {'value': 'normal', 'label': 'Normal'},
    {'value': 'promotion', 'label': 'Promotion'}
  ]

  ngOnInit(): void {

    this.rateAddForm = this.fb.group({
      addRates: this.fb.array([]),
    });

    this.rateDatailAddForm = this.fb.group({
      addRateDetails: this.fb.array([]),
    });

    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.getData(params.get('id'));
        this.skuID = params.get('id');
      }
    });

    this.skuEditForm = this.fb.group({
      uuid: new FormControl('',[Validators.required]),
      validity_start_at : new FormControl(new Date()),
      package_type_id : new FormControl('1',[Validators.required]),
      validity_end_at : new FormControl(new Date()),
      country_code : new FormControl('',[Validators.required]),
      interest_rate : new FormControl(),
      financier_id : new FormControl('', [Validators.required]),
      has_interest_flag : new FormControl(),
      min_payment_amount_flag : new FormControl(),
      monthly_payment : new FormControl(),
      quarterly_payment : new FormControl(),
      half_yearly_payment : new FormControl(),
      currency_code : new FormControl(),
      min_payment_amount : new FormControl(0),
      consumable_usage : new FormControl(),
      min_procedure : new FormControl(),
      required_tenure : new FormControl(0),
      required_docs: new FormControl(),
      agreement_mandatory: new FormControl(0),
      has_min_procedure:  new FormControl(0),
      has_consumable_usage:  new FormControl(0),
    });

    this.countryService.getCountry().subscribe({
      next: (response) => {
        if (response.success) {
          this.zone.run(() => {
            this.countryList = response.data.countries;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve country list");
        }
      }
    })
    
    this.loadInstitutionsList();

    this.setConditionalValidators();
  
  }

  setConditionalValidators() {

    const interest_rate = this.skuEditForm.get('interest_rate');

    this.skuEditForm.get('has_interest_flag').valueChanges
      .subscribe(has_interest_flag => {
        if (has_interest_flag == 1) {
          interest_rate.setValidators([Validators.required]);
        }
        else {
          interest_rate.clearValidators();
        }
      });
  }

  getData(id) {
    this.SkuService.find(id).subscribe((data)=>{

      this.skuEditForm.patchValue(data.data);
      this.countryCode = this.skuEditForm.get("country_code").value;
      this.countryChange();

      if(data.data.interest_rate > 0) {
        this.skuEditForm.controls.has_interest_flag.setValue(true);
      }
      if(data.data.min_payment_amount > 0) {
        this.skuEditForm.controls.min_payment_amount_flag.setValue(true);
      }
      if(data.data.consumable_usage > 0) {
        this.skuEditForm.controls.has_consumable_usage.setValue(true);
      }
      if(data.data.min_procedure > 0) {
        this.skuEditForm.controls.has_min_procedure.setValue(true);
      }

      // Set Rate values:
      data.data.rates.forEach((addCost) => {
        this.rate_counter = addCost.id;
        this.addRates().push(this.existingRates(addCost));
        console.log("existing rate to push ", addCost)
        this.existingRatesIds.push(addCost.id)
      });
      
    });
    
  }

  isFieldValid(field: string) {
    return !this.skuEditForm.get(field).valid && this.skuEditForm.get(field).touched;
  }

  onSave(){
    if (!this.skuEditForm.valid) {
      this.fpsService.validateAllFormFields(this.skuEditForm);
      this.skuEditFormContainerRef.nativeElement.scrollIntoView({behavior: 'smooth'});
      return;
    } 
    this.SkuService.updateSku({
      uuid: this.skuEditForm.get("uuid").value + "",      
      country_code: this.skuEditForm.get("country_code").value + "",
      financier_id: this.skuEditForm.get("financier_id").value + "",  
      monthly_payment: (this.skuEditForm.get("monthly_payment").value) ? 1 : 0,  
      quarterly_payment: (this.skuEditForm.get("quarterly_payment").value) ? 1 : 0,  
      half_yearly_payment: (this.skuEditForm.get("half_yearly_payment").value) ? 1 : 0,  
      package_type_id: this.skuEditForm.get("package_type_id").value + "",
      interest_rate: ((this.skuEditForm.get("interest_rate").value)? this.skuEditForm.get("interest_rate").value : 0) + "",
      currency_code: this.skuEditForm.get("currency_code").value + "",
      validity_start_at: this.datePipe.transform(this.skuEditForm.get("validity_start_at").value, "yyyy-MM-dd"),
      validity_end_at: this.datePipe.transform(this.skuEditForm.get("validity_end_at").value, "yyyy-MM-dd"),
      required_docs: this.skuEditForm.get("required_docs").value + "",
      required_tenure: this.skuEditForm.get("required_tenure").value + "",
      agreement_mandatory: this.skuEditForm.get("agreement_mandatory").value + "",
      data_area_id : 'test_data_rea_id',
      consumable_usage: this.skuEditForm.get("consumable_usage").value + "",
      min_procedure: this.skuEditForm.get("min_procedure").value + "",
      min_payment_amount: this.skuEditForm.get("min_payment_amount").value + ""
    
    }, this.skuID).subscribe((res) => {
        if (res.id) {
          this.alertBody = "FPS updated successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();

            let rates = this.rateAddForm.value.addRates;
            let rateData = [];
            for(let x = 0; x <rates.length; x++) {
              rateData.push({
                'id': this.existingRatesIds.includes(rates[x].rate_no) ? rates[x].rate_no : null,
                'financial_package_id': res.id,
                'validity_start_at': rates[x].validity_start_at,
                'validity_end_at': rates[x].validity_end_at,
                'status': rates[x].status,
                'type': rates[x].type,
              });
            }
            this.storeRates(rateData);
            this.router.navigateByUrl('/fps/sku-listing', {replaceUrl: true})
          }, 2000);
          
        }
      },
      err => {
        console.log(err);
          this.alertBody = "The FPS can't updated <br>" +  err;
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
      });
  }

  onSaveRateDetails() {

    let rateDetails = this.rateDatailAddForm.value.addRateDetails;
    let rateDetailsData = [];
    for(let x = 0; x <rateDetails.length; x++) {
      if(rateDetails[x].details_tenure > 0 && rateDetails[x].details_interest_rate > 0) {
        rateDetailsData.push({
          'details_rate_no': this.currentRateNo,
          'details_tenure': rateDetails[x].details_tenure,
          'details_interest_rate': rateDetails[x].details_interest_rate,
        });
      }
      
    } 
    // Store rate.
    this.storeRatesDetails(rateDetailsData);
    this.addRateDetailsModal.hide();
    
  }

  //---------------- SKU Rate  -------------------

  addRates(): FormArray {
    return this.rateAddForm.get("addRates") as FormArray;
  }

  existingRates(addRates): FormGroup {
    return this.fb.group({
      rate_no: addRates.id,
      validity_start_at: addRates.validity_start_at,
      validity_end_at: addRates.validity_end_at,
      status: addRates.status,
      type: addRates.type
    });
  }

  newAddRates(): FormGroup {
    return this.fb.group({
      rate_no: (++this.rate_counter),
      validity_start_at: 0,
      validity_end_at: 0.0,
      status: 1,
      type: 'normal',
    });
  }

  addAddRates() {
    this.addRates().push(this.newAddRates());
  }

  removeAddRates(i: number) {
    this.addRates().removeAt(i);
  }

  storeRates(rate) {
    this.SkuService.saveRates(rate).subscribe((res) => {
        if (res.id) {
          console.log("Rates Stored successfully.");
        }
      },
      err => {
        console.log(err);
      });
  }

  //---------------- End of  SKU Rate -------------------

  countryChange() {

    this.countryCode = this.skuEditForm.get("country_code").value;
  
    this.currencyService.getCurrencyList(this.countryCode).subscribe({
      next: (response) => {
        if (response.success) {
          this.zone.run(() => {
            this.currencies_list = response.data;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve currencies list");
        }
      }
    });
    this.loadInstitutionsList();
  }

  loadInstitutionsList() {

    if(this.countryCode.length > 0) {
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
  }

  //---------------- Start of  SKU Rate Details -------------------

  openAddRateDetailsModal(check, i) {

    this.rateDatailAddForm = this.fb.group({
      addRateDetails: this.fb.array([]),
    });

    this.currentRateNo = this.rateAddForm.value.addRates[i].rate_no;
    this.currentRateStart = this.rateAddForm.value.addRates[i].validity_start_at;
    this.currentRateEnd = this.rateAddForm.value.addRates[i].validity_end_at;
    this.currentRateType = this.rateAddForm.value.addRates[i].type;

    this.SkuService.loadRateDetails(this.currentRateNo).subscribe((data)=>{
      
      // Set Rate values:
      data.data.rate_details.forEach((addRateDetails) => {
        this.addRateDetails().push(this.existingRateDetails(addRateDetails));
      });

      this.addLine = check;
      this.addRateDetailsModal.show();

    },
    err => {
      alert("Details for new rates can be added only after saving. please save and re-edit.");
    });

  }

  addRateDetails(): FormArray {
    return this.rateDatailAddForm.get("addRateDetails") as FormArray;
  }

  existingRateDetails(addRateDetails): FormGroup {
    return this.fb.group({
      details_tenure: addRateDetails.details_tenure,
      details_interest_rate: addRateDetails.details_interest_rate,
    });
  }

  newAddRateDetails(): FormGroup {
    return this.fb.group({
      details_tenure: 0,
      details_interest_rate: 0.0,
    });
  }

  addAddRateDetails() {
    this.addRateDetails().push(this.newAddRateDetails());
  }

  removeAddRateDetails(i: number) {
    this.addRateDetails().removeAt(i);
  }

  storeRatesDetails(rate) {
    this.SkuService.saveRateDetails(rate).subscribe((res) => {
        if (res.id) {
          console.log("Rate Details Stored successfully.");
        }
      },
      err => {
        console.log(err);
      });
  }
  //---------------- End of  SKU Rate Details -------------------
}
