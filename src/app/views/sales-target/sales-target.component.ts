import { Component, OnInit } from '@angular/core';
import { SalesTargetSetupService } from '../manager-view/sales-target-setup/sales-target-setup.service';

@Component({
  selector: 'app-sales-target',
  templateUrl: './sales-target.component.html',
  styleUrls: ['./sales-target.component.scss']
})
export class SalesTargetComponent implements OnInit {
  list = [];
  salesTargetData: any[];
  dataLength: number;
  pageItems: any;
  currency: string;

  constructor(private _salesTargetSetupService: SalesTargetSetupService) { }

  ngOnInit(): void {
    this.fetchSalesTargetData()
    setTimeout(() => {
      this.loadSetupList("MY")
    }, 3000);
  }
  fetchSalesTargetData() {
    this._salesTargetSetupService.getSalesTargetData().subscribe((res) => {
      this.salesTargetData = res["data"]["sales_targets"];
    });
  }
  loadSetupList(code) {
    this.currency = "MYR"
    this.list = [];
    let q1total: number = 0.0;
    let q2total = 0.0;
    let q3total = 0.0;
    let q4total = 0.0;
    let sum = 0.0;

    const result = this.salesTargetData.filter((s) => s.country_code == code);
    result.forEach((item) => {
      q1total = Number(
        (
          parseFloat(item.month_01_target) +
          parseFloat(item.month_02_target) +
          parseFloat(item.month_03_target)
        ).toFixed(2)
      );
      q2total = Number(
        (
          parseFloat(item.month_04_target) +
          parseFloat(item.month_05_target) +
          parseFloat(item.month_06_target)
        ).toFixed(2)
      );
      q3total = Number(
        (
          parseFloat(item.month_07_target) +
          parseFloat(item.month_08_target) +
          parseFloat(item.month_09_target)
        ).toFixed(2)
      );
      q4total = Number(
        (
          parseFloat(item.month_10_target) +
          parseFloat(item.month_11_target) +
          parseFloat(item.month_12_target)
        ).toFixed(2)
      );
      sum = Number((q1total + q2total + q3total + q4total).toFixed(2));

      this.list.push({
        id: item.id,
        title: item.title,
        q1: q1total,
        q2: q2total,
        q3: q3total,
        q4: q4total,
        total: sum,
      });
    });

    this.dataLength = this.list.length;
  }

}
