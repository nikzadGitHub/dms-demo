import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DialogService } from '@app/common/dialog/dialog.service';
import { SkuService } from '@app/fps/services/sku.service';
import { CountryService, Country } from '@app/_services/shared/country.service';
import {SkuInterface, SkuList, SaveResult} from '@app/fps/services/sku-interface';
import { FinancialInstitutionService, FinancialInstitution } from '@app/_services/shared/finantial-institution.service';
import { CurrencyService } from '@app/_services/shared/currency.service';
import { FpsService } from '@app/fps/fps.service';

@Component({
  selector: 'app-sku-create',
  templateUrl: './sku-create.component.html',
  styleUrls: [
    './sku-create.component.scss',
    '../../common/shared.styles.component.scss'
  ]
})
export class SkuCreateComponent implements OnInit {

  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  @ViewChild('submitSkuAdd') submitSkuAdd: ElementRef<HTMLElement>;
  @ViewChild('skuAddFormContainer') skuAddFormContainerRef: ElementRef;

  skuAddForm : FormGroup;
  rateAddForm: FormGroup;
  alertBody: string;
  alertHeader: string;
  sku: SkuInterface;
  rate_counter = 0;
  countryList: Country[] = [];
  currencies_list = [];
  institutions_list: FinancialInstitution[] = [];
  countryCode : string = 'MY';

  constructor(
    private countryService: CountryService,
    private currencyService: CurrencyService,
    private institutionService: FinancialInstitutionService,
    private dialogService: DialogService,
    private zone: NgZone,
    private fb: FormBuilder,
    private SkuService: SkuService,
    private datePipe: DatePipe,
    private router: Router,
    private fpsService: FpsService,
  ) { }

  fpsTypeList = this.fpsService.getTransSactionTypeList();
  rateStatusList = this.fpsService.getrateStatusList();
  rateTypeOptions = [
    {'value': 'normal', 'label': 'Normal'},
    {'value': 'promotion', 'label': 'Promotion'}
  ]

  ngOnInit(): void {

    this.skuAddForm = this.fb.group({
      uuid: new FormControl('',[Validators.required]),
      validity_start_at : new FormControl(new Date()),
      package_type_id : new FormControl('1',[Validators.required]),
      validity_end_at : new FormControl(new Date()),
      country_code : new FormControl('',[Validators.required]),
      interest_rate : new FormControl(),
      financier_id : new FormControl('', [Validators.required]),
      has_interest : new FormControl(),
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

    this.rateAddForm = this.fb.group({
      addRates: this.fb.array([]),
    });

    this.institutionService.getSkuAutoGeneratedKey().subscribe({
      next: (response) => {
        if (response.success) {
          this.zone.run(() => {
            this.skuAddForm.controls.uuid.setValue('FPS-' + (response.data[0].id + 1));
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

    this.currencyService.getCurrencyList().subscribe({
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
    })
    
    this.setConditionalValidators();
  }

  setConditionalValidators() {

    const interest_rate = this.skuAddForm.get('interest_rate');

    this.skuAddForm.get('has_interest').valueChanges
      .subscribe(has_interest => {
        if (has_interest == 1) {
          interest_rate.setValidators([Validators.required]);
        }
        else {
          interest_rate.clearValidators();
        }
      });
  }

  // initData()
  // {
  //   this.sku.forEach(element => {
  //     element.additional_costs.forEach(addCost => {
  //       this.addRates().push(this.existingRates(addCost));
  //     });
  //   });
  // }

  onSave(): void {

    if (!this.skuAddForm.valid) {
      this.fpsService.validateAllFormFields(this.skuAddForm);
      this.skuAddFormContainerRef.nativeElement.scrollIntoView({behavior: 'smooth'});
      return;
    } 
    this.SkuService.saveSku({
      uuid: this.skuAddForm.get("uuid").value + "",      
      country_code: this.skuAddForm.get("country_code").value + "",
      financier_id: this.skuAddForm.get("financier_id").value + "",  
      monthly_payment: (this.skuAddForm.get("monthly_payment").value) ? 1 : 0,  
      quarterly_payment: (this.skuAddForm.get("quarterly_payment").value) ? 1 : 0,  
      half_yearly_payment: (this.skuAddForm.get("half_yearly_payment").value) ? 1 : 0,  
      package_type_id: this.skuAddForm.get("package_type_id").value + "",
      interest_rate: ((this.skuAddForm.get("interest_rate").value)? this.skuAddForm.get("interest_rate").value : 0) + "",
      currency_code: this.skuAddForm.get("currency_code").value + "",
      validity_start_at: this.datePipe.transform(this.skuAddForm.get("validity_start_at").value, "yyyy-MM-dd"),
      validity_end_at: this.datePipe.transform(this.skuAddForm.get("validity_end_at").value, "yyyy-MM-dd"),
      required_docs: this.skuAddForm.get("required_docs").value + "",
      procedure_per_month: this.skuAddForm.get("procedure_per_month").value + "",
      min_usage: this.skuAddForm.get("min_usage").value + "",
      required_tenure: this.skuAddForm.get("required_tenure").value + "",
      agreement_mandatory: this.skuAddForm.get("agreement_mandatory").value + "",
    
    }).subscribe((res) => {
        if (res.id) {
          this.alertBody = "FPS saved successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();

            let rates = this.rateAddForm.value.addRates;
            
            for(let x = 0; x <rates.length; x++) {
              let rate = {
                'financial_package_id': res.id,
                'validity_start_at': rates[x].validity_start_at,
                'validity_end_at': rates[x].validity_end_at,
                'status': rates[x].status,
                'type': rates[x].rate_type,
              }
              // Store rate.
              this.storeRates(rate);
            }              
            // 
          }, 2000);
          
        }
      },
      err => {
        console.log(err);
          this.alertBody = "The FPS can't save <br>" +  err;
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
      });
      
  }

  triggerFalseClick() {
    let el: HTMLElement = this.submitSkuAdd.nativeElement;
    el.click();
  }

  cancelSkuForm() {
    this.router.navigateByUrl('/fps/sku-listing', {replaceUrl: true})
  }

  
   //---------------- SKU Rate  -------------------

   addRates(): FormArray {
    return this.rateAddForm.get("addRates") as FormArray;
  }

  // existingCosts(addRates): FormGroup {
  //   return this.fb.group({
  //     id: addRates.id,
  //     description: addRates.description,
  //     quantity: addRates.quantity,
  //     unit_price: addRates.unit_price,
  //     total_price: addRates.total_price,
  //     remarks: addRates.remarks,
  //   });
  // }

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

  //---------------- End of  SKU Rate -------------------
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

  isFieldValid(field: string) {
    return !this.skuAddForm.get(field).valid && this.skuAddForm.get(field).touched;
  }
  
}
