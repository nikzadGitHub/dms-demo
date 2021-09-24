import { Component, NgZone, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { DialogService } from '../../common/dialog/dialog.service';
import { CountryService, Country } from '../../_services/shared/country.service';
import { SalesTargetService } from '../../_services/shared/sales-target.service';
import { Unit, UnitService } from '../../_services/shared/unit.service';

@Component({
  selector: 'app-sales-target-structure',
  templateUrl: './sales-target-structure.component.html',
  styleUrls: ['./sales-target-structure.component.scss']
})
export class SalesTargetStructureComponent implements OnInit {

  countryList: Country[] = [];
  selectedCountry: string = "";
  selectedUnit: string = "";
  countryUnits: Unit[] = null;
  salesTarget: any = null;

  constructor(
    private countryService: CountryService,
    private zone: NgZone,
    private dialogService: DialogService,
    private unitService: UnitService,
    private salesTargetService: SalesTargetService
  ) { }

  ngOnInit(): void {
    this.countryService.getCountry().subscribe({
      next: (response) => {
        console.log(response);
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
  }

  countryChanged(event) {
    this.selectedUnit = "";
    this.salesTarget = null;

    this.unitService.getCountryUnit(event.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          this.zone.run(() => {
            this.countryUnits = response.data.units;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve country units");
        }
      }
    })
  }

  unitChanged(event) {
    this.salesTarget = null;
    
    console.log(event.value);
    this.salesTargetService.getSalesTargetByUnit(event.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          this.zone.run(() => {
            this.salesTarget = response.data.sales_targets;
          });
        } else {
          this.dialogService.showErrorDialog(response.message);
        }
      },
      error: (error) => {
        if (error.error.message != undefined) {
          this.dialogService.showErrorDialog(error.error.message);
        } else {
          this.dialogService.showErrorDialog("Error retrieve country units");
        }
      }
    })
  }

  getTargetTotal(target) {
    return parseFloat(target.month_01_target) + parseFloat(target.month_02_target) + 
    parseFloat(target.month_03_target) + parseFloat(target.month_04_target) + 
    parseFloat(target.month_05_target) + parseFloat(target.month_06_target) +
    parseFloat(target.month_07_target) + parseFloat(target.month_08_target) + 
    parseFloat(target.month_09_target) + parseFloat(target.month_10_target) + 
    parseFloat(target.month_11_target) + parseFloat(target.month_12_target);

  }
}
