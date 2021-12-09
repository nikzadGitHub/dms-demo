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
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @ViewChild('submitSkuAdd') submitSkuAdd: ElementRef<HTMLElement>;
  @ViewChild('skuEditFormContainer') skuEditFormContainerRef: ElementRef;

  skuEditForm : FormGroup;
  rateAddForm: FormGroup;
  alertBody: string;
  alertHeader: string;
  sku: SkuInterface;
  rate_counter = 0;
  countryList: Country[] = [];
  currencies_list = [];
  institutions_list: FinancialInstitution[] = [];
  countryCode : string = '';
  data_area_id : string = '';
  has_interest_flag : boolean = false;
  min_payment_amount_flag : boolean;
  skuID : string;

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

  ) {
    
   }

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
      min_payment_amount : new FormControl('0'),
      min_usage : new FormControl('0'),
      consumable_usage : new FormControl(),
      procedure_per_month : new FormControl(),
      required_tenure : new FormControl('0'),
      required_docs: new FormControl(),
      agreement_mandatory: new FormControl('0')
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
      
      // Set Rate values:
      data.data.rates.forEach((addCost) => {
        this.rate_counter++;
        this.addRates().push(this.existingCosts(addCost));
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
      procedure_per_month: this.skuEditForm.get("procedure_per_month").value + "",
      min_usage: this.skuEditForm.get("min_usage").value + "",
      required_tenure: this.skuEditForm.get("required_tenure").value + "",
      agreement_mandatory: this.skuEditForm.get("agreement_mandatory").value + "",
      data_area_id : 'test_data_rea_id'
    
    }, this.skuID).subscribe((res) => {
        if (res.id) {
          this.alertBody = "FPS updated successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();

            let rates = this.rateAddForm.value.addRates;
            
            for(let x = 0; x <rates.length; x++) {
              let rate = {
                'id': rates[x].rate_no,
                'financial_package_id': res.id,
                'validity_start_at': rates[x].validity_start_at,
                'validity_end_at': rates[x].validity_end_at,
                'status': rates[x].status,
                'type': rates[x].rate_type,
              }
              // Store rate.
              this.storeRates(rate);
            }              
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

     //---------------- SKU Rate  -------------------

   addRates(): FormArray {
    return this.rateAddForm.get("addRates") as FormArray;
  }

  existingCosts(addRates): FormGroup {
    return this.fb.group({
      rate_no: addRates.id,
      validity_start_at: addRates.validity_start_at,
      validity_end_at: addRates.validity_end_at,
      status: addRates.status,
      rate_type: addRates.rate_type
    });
  }

  newAddRates(): FormGroup {
    return this.fb.group({
      rate_no: (++this.rate_counter),
      validity_start_at: 0,
      validity_end_at: 0.0,
      status: 1,
      rate_type: 'normal',
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

}
