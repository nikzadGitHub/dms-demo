import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import * as moment from "moment";
import { DashboardService } from './dashboard.service';
import * as echarts from 'echarts';

@Component({
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  moment: any = moment;
  //period option
  selectedYear: number;
  funnelSelectedYear: number;
  salesPeriod: any;
  funnelPeriod: any;
  selectedSalesPeriod: string = "month";
  selectedFunnelPeriod: string = "month";
  graphPeriod: MenuItem[];
  activityPeriod: MenuItem[];
  forecastPeriod: MenuItem[];
  selectedGraphPeriod: string = "month";
  selectedActivityPeriod: string = "month";
  selectedForecastPeriod: string = "month";
  //sales performance vs sales target option
  salesOptions: any[];
  selectedOption: string = "monthly"
  selLabel: string = '';
  selPeriod: string = '';
  chartOptions: any;
  //sales performance tab - main array
  monthSalesArr: any[] = [];
  quarterSalesArr: any[] = [];
  yearlySalesArr: any[] = [];
  //hearder
  invoiceArr: any[] = [];
  openOrderArr: any[] = [];
  committedFunnelArr: any[] = [];
  invoiceAmt: any;
  invoicePerc: any;
  invoiceTargetAmt: any;
  orderAmt: any;
  orderQty: any;
  cfAmt: any;
  cfTotalAmt: any;
  //Chart 1 - Sales Performance VS Sales Target
  salesData: any;
  salesMthQtrArr: any[] = [];
  salesAccArr: any[] = [];
  chartSalesMthQtr = { labels: [], datasets: [] };
  salesTargetDataset: any = {};
  invoiceDataset: any = {};
  salesOrderDataset: any = {};
  funnelDataset: any = {};
  salesTargetCheck: boolean = true;
  invoiceCheck: boolean = true;
  salesOrderCheck: boolean = true;
  funnelCheck: boolean = true;
  //Sales Performance
  salesPerformanceArr: any[] = [];
  salesItemArr: any[] = [];
  balanceToAchieve: any;
  targetSalesAmt: any;
  ttlSalesAmt: any;
  q1TargetAmt: any;
  q2TargetAmt: any;
  q3TargetAmt: any;
  q4TargetAmt: any;
  q1SalesAmt: any;
  q2SalesAmt: any;
  q3SalesAmt: any;
  q4SalesAmt: any;
  progressPerc: any;
  currentQuarter: string = "";
  currTargetAmt: any;
  currSalesAMt: any;
  //chart 2 - Sales Performance - Brands
  brandSalesData: any;
  brandSalesArr: any[] = [];
  chartBrandSales = { labels: [], datasets: [] };
  brand_invoiceDataset: any = {};
  brand_salesOrderDataset: any = {};
  brand_funnelDataset: any = {};
  brand_invoiceCheck: boolean = true;
  brand_salesOrderCheck: boolean = true;
  brand_funnelCheck: boolean = true;
  //chart 3 - Top 10 Customer List
  custSalesData: any;
  custSalesArr: any[] = [];
  chartCustSales = { labels: [], datasets: [] };
  cust_invoiceDataset: any = {};
  cust_salesOrderDataset: any = {};
  cust_funnelDataset: any = {};
  cust_invoiceCheck: boolean = true;
  cust_salesOrderCheck: boolean = true;
  cust_funnelCheck: boolean = true;
  //funnel Tab
  activityChartOption:  echarts.EChartsOption;
  forecastChartOption: echarts.EChartsOption;
  activitySummDataset: any[];
  forecastCatDataset: any[];
  activitySummData: any;
  forecastCatData: any;
  opportunityData: any;
  activityLogData: any;
  notificationData: any;

  constructor(private _dashboardService: DashboardService) {
    this.salesOptions = [
      { label: "Monthly", value: "monthly" },
      { label: "Accumulative", value: "accumulative" }
    ];

    this.salesPeriod = this.funnelPeriod = [
      { name: 'Month', value: 'month' },
      { name: 'Quarter', value: 'quarter' },
      { name: 'Year', value: 'year' }
    ]

    this.graphPeriod = [
      {label: 'Month', command: () => {
        this.fetchSalesDataByPeriod('month');
      }},
      {label: 'Quarter', command: () => {
          this.fetchSalesDataByPeriod('quarter');
      }},
    ]

    this.activityPeriod = [
      {label: 'Week', command: () => {
        this.fetchActivitySummary('week');
      }},
      {label: 'Month', command: () => {
        this.fetchActivitySummary('month');
      }},
      {label: 'Quarter', command: () => {
          this.fetchActivitySummary('quarter');
      }},
      {label: 'Year', command: () => {
        this.fetchActivitySummary('year');
      }},
    ]

    this.forecastPeriod = [
      {label: 'Week', command: () => {
        this.fetchForecastCategory('week');
      }},
      {label: 'Month', command: () => {
        this.fetchForecastCategory('month');
      }},
      {label: 'Quarter', command: () => {
          this.fetchForecastCategory('quarter');
      }},
      {label: 'Year', command: () => {
        this.fetchForecastCategory('year');
      }},
    ]
  }

  ngOnInit(): void {
    this.selectedYear = this.funnelSelectedYear = new Date().getFullYear();
    this.fetchSalesPerformance(this.selectedYear, this.selectedSalesPeriod);
    this.fetchSalesFunnel(this.selectedYear,  this.selectedSalesPeriod);

    this.chartOptions = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          }],
        yAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Amount (RM)'
          },
        }]
      }
    };
  }

  public yearDecrement(sel): any {
    if (sel == 'sales') {
      this.selectedYear = this.selectedYear - 1;
      this.fetchSalesPerformance(this.selectedYear, this.selectedSalesPeriod);
    }
    else {
      this.funnelSelectedYear = this.funnelSelectedYear - 1;
      this.fetchSalesFunnel(this.funnelSelectedYear, this.selectedFunnelPeriod);
    }
  }

  public yearIncrement(sel): any {
    if (sel == 'sales') {
      this.selectedYear = this.selectedYear + 1;
      this.fetchSalesPerformance(this.selectedYear, this.selectedSalesPeriod);
    }
    else {
      this.funnelSelectedYear = this.funnelSelectedYear + 1;
      this.fetchSalesFunnel(this.funnelSelectedYear, this.selectedFunnelPeriod);
    }
  }

  fetchSalesPerformance(year, period): any {
    this.invoiceArr = [];
    this.openOrderArr = [];
    this.committedFunnelArr = [];
    this.monthSalesArr = [];
    this.quarterSalesArr = [];
    this.yearlySalesArr = [];
    this.selPeriod = '';

    if (period == 'month') {
      this.selPeriod = 'month'
      this.selLabel = 'Monthly'
    }
    else if (period == 'quarter') {
      this.selPeriod = 'quarter'
      this.selLabel = 'Quarterly'
    }

    this._dashboardService.getSalesPerformance(year)
    .subscribe(res => {
      this.invoiceArr = res['data']['totalinvoicedamount'];
      this.openOrderArr = res['data']['openorderamount'];
      this.committedFunnelArr = res['data']['committedfunnelamount'];
      this.monthSalesArr = res['data']['monthsales'];
      this.quarterSalesArr = res['data']['quartersales'];
      this.yearlySalesArr = res['data']['yearlysales'];

      this.fetchSalesSummary(this.selectedSalesPeriod);
      if (this.selPeriod != '') {
        this.fetchSalesDataByPeriod(this.selPeriod);
      }
      this.fetchSalesPerformanceDataByPeriod(this.selectedSalesPeriod);
      this.fetchBrandSalesDataByPeriod(this.selectedSalesPeriod);
      this.fetchCustSalesDataByPeriod(this.selectedSalesPeriod);
    })
  }

  fetchSalesFunnel(year, period): any {
    this.opportunityData = [];

    this._dashboardService.getSalesFunnel(year)
    .subscribe(res => {
      this.activitySummData = res['data']['activity_summary'];
      this.forecastCatData = res['data']['forecast_category'];
      this.opportunityData = res['data']['opportunity_list'];
      this.activityLogData = res['data']['activity_log'];
      this.notificationData = res['data']['notification'];

      this.fetchActivitySummary(period);
      this.fetchForecastCategory(period);
    });
  }

  fetchSalesSummary(period): any {
    this.invoiceAmt = this.invoiceArr[period]['amount'];
    this.invoicePerc = this.invoiceArr[period]['amountpercent'];
    this.invoiceTargetAmt = this.invoiceArr[period]['targetamount'];
    this.orderAmt = this.openOrderArr[period]['amount'];
    this.orderQty = this.openOrderArr[period]['orderquantity'];
    this.cfAmt = this.committedFunnelArr[period]['amount'];
    this.cfTotalAmt = this.committedFunnelArr[period]['totalamount'];
  }

  fetchSalesDataByPeriod(period): any {
    this.salesData = [];
    this.salesAccArr = [];
    this.salesMthQtrArr = [];
    let selArray = [];
    this.selectedGraphPeriod = period;

    if (period == "month") {
      this.selLabel = 'Monthly';
      this.salesAccArr = this.monthSalesArr['salespeformancevssalestarget']['accumulative'];
      this.salesMthQtrArr = this.monthSalesArr['salespeformancevssalestarget']['monthly'];

      if (this.selectedOption == "monthly") {
        selArray = this.salesAccArr;
      }
      else if (this.selectedOption == "accumulative") {
        selArray = this.salesMthQtrArr;
      }

      for(var i = 0; i < 12; i++){
        this.salesData.push( {
          'month': moment().month(i).format('MMM'),
          'invoice': parseInt(selArray[i].invoice.replace(',', '')),
          'salesorder': parseInt(selArray[i].salesorder.replace(',', '')),
          'committedfunnel': parseInt(selArray[i].committedfunnel.replace(',', '')),
          'salestarget': parseInt(selArray[i].salestarget.replace(',', ''))

        });
      }
    }
    else if (period == "quarter") {
      this.selLabel = 'Quarterly';
      this.salesAccArr = this.quarterSalesArr['salespeformancevssalestarget']['accumulative'];
      this.salesMthQtrArr = this.quarterSalesArr['salespeformancevssalestarget']['quarterly'];

      if(this.selectedOption == "monthly") {
        selArray = this.salesMthQtrArr;
      }
      else if (this.selectedOption == "accumulative") {
        selArray = this.salesAccArr;
      }

      for(var i = 0; i < 4; i++){
        this.salesData.push( {
          'month': 'Q' + (i+1),
          'invoice': parseInt(selArray[i].invoice.replace(',', '')),
          'salesorder': parseInt(selArray[i].salesorder.replace(',', '')),
          'committedfunnel': parseInt(selArray[i].committedfunnel.replace(',', '')),
          'salestarget': parseInt(selArray[i].salestarget.replace(',', ''))

        });
      }
    }

    this.salesTargetDataset = {
      data: this.salesData.map(a => a.salestarget),
      type: 'line',
      label: 'Sales Target',
      backgroundColor: '#656565',
      borderColor: '#656565',
      borderWidth: 2,
      fill: false,
      lineTension: 0
    };

    this.invoiceDataset = {
      data: this.salesData.map(a => a.invoice),
      type: 'bar',
      label: 'Invoice',
      backgroundColor: '#FCCE58'
    };

    this.salesOrderDataset = {
      data: this.salesData.map(a => a.salesorder),
      type: 'bar',
      label: 'Sales Order',
      backgroundColor: '#55C595'
    };

    this.funnelDataset = {
      data: this.salesData.map(a => a.committedfunnel),
      type: 'bar',
      label: 'Committed Funnel',
      backgroundColor: '#8EB9E5',
    };

    this.getSalesData();
  }

  getSalesData() {
    let selectedDatase = []

    if (this.salesTargetCheck) {
      selectedDatase.push(this.salesTargetDataset);
    }
    if (this.invoiceCheck) {
      selectedDatase.push(this.invoiceDataset);
    }
    if (this.salesOrderCheck) {
      selectedDatase.push(this.salesOrderDataset);
    }
    if (this.funnelCheck) {
      selectedDatase.push(this.funnelDataset);
    }

    this.chartSalesMthQtr = {
      labels: this.salesData.map(a => a.month),
      datasets: selectedDatase
    };
  }

  fetchSalesPerformanceDataByPeriod(period) {
    this.salesPerformanceArr = [];

    if (period == "month") {
      this.salesPerformanceArr = this.monthSalesArr['salesperformance'];
    }
    else if (period == "quarter") {
      this.salesPerformanceArr = this.quarterSalesArr['salesperformance'];
    }
    else if (period == "year") {
      this.salesPerformanceArr = this.yearlySalesArr['salesperformance'];
    }

    this.targetSalesAmt = this.salesPerformanceArr['targetamount'];
    this.ttlSalesAmt = this.salesPerformanceArr['totalsalesamount'];
    this.balanceToAchieve = this.salesPerformanceArr['balancetoachieve'];
    this.progressPerc = Math.floor((this.ttlSalesAmt.replace(',', '') / this.targetSalesAmt.replace(',', '')) * 100);

    if (period == "quarter") {
      let getCurrQuarter = "";

      this.salesItemArr = this.salesPerformanceArr['currentquarter'];
      getCurrQuarter = this.salesItemArr['label'].substring(0,2);
      this.currTargetAmt = this.salesItemArr['targetamount'];
      this.currSalesAMt = this.salesItemArr['totalsalesamount'];

      switch(getCurrQuarter) {
        case "Q1":
          this.currentQuarter = "Q1 (3+9): 1 Apr - 30 Jun " + this.selectedYear;
          break;
        case "Q2":
          this.currentQuarter = "Q2 (6+6): 1 Jul - 30 Sep " + this.selectedYear;
          break;
        case "Q3":
          this.currentQuarter = "Q2 (6+6): 1 Jul - 30 Sep " + this.selectedYear;
          break;
        case "Q4":
          this.currentQuarter = "Q2 (6+6): 1 Jul - 30 Sep " + (this.selectedYear +1);
          break;
        default:
          this.currentQuarter = this.salesItemArr['label'];
          break;
      }
    }
    else {
      this.salesItemArr = this.salesPerformanceArr['salesperformanceitem'];
      this.q1TargetAmt = this.salesItemArr['0']['targetamount'];
      this.q2TargetAmt = this.salesItemArr['1']['targetamount'];
      this.q3TargetAmt = this.salesItemArr['2']['targetamount'];
      this.q4TargetAmt = this.salesItemArr['3']['targetamount'];
      this.q1SalesAmt = this.salesItemArr['0']['totalsalesamount'];
      this.q2SalesAmt = this.salesItemArr['1']['totalsalesamount'];
      this.q3SalesAmt = this.salesItemArr['2']['totalsalesamount'];
      this.q4SalesAmt = this.salesItemArr['3']['totalsalesamount'];
    }
  }

  fetchBrandSalesDataByPeriod(period): any {
    this.brandSalesArr = [];
    this.brandSalesData = [];

    if (period == "month") {
      this.brandSalesArr = this.monthSalesArr['brandsalesperformance'];
    }
    else if (period == "quarter") {
      this.brandSalesArr = this.quarterSalesArr['brandsalesperformance'];
    }
    else if (period == "year") {
      this.brandSalesArr = this.yearlySalesArr['brandsalesperformance'];
    }

    for(var i = 0; i < this.brandSalesArr.length; i++){
      this.brandSalesData.push( {
        'brand': this.brandSalesArr[i].brand,
        'invoice': parseInt(this.brandSalesArr[i].invoice.replace(',', '')),
        'salesorder': parseInt(this.brandSalesArr[i].salesorder.replace(',', '')),
        'committedfunnel': parseInt(this.brandSalesArr[i].committedfunnel.replace(',', '')),
      });
    }

    this.brand_invoiceDataset = {
      data: this.brandSalesData.map(a => a.invoice),
      type: 'bar',
      label: 'Invoice',
      backgroundColor: '#FCCE58'
    };

    this.brand_salesOrderDataset = {
      data: this.brandSalesData.map(a => a.salesorder),
      type: 'bar',
      label: 'Sales Order',
      backgroundColor: '#55C595'
    };

    this.brand_funnelDataset = {
      data: this.brandSalesData.map(a => a.committedfunnel),
      type: 'bar',
      label: 'Committed Funnel',
      backgroundColor: '#8EB9E5',
    };

    this.getBrandSalesData();
  }

  getBrandSalesData() {
    let selectedDatase = [];

    if (this.brand_invoiceCheck) {
      selectedDatase.push(this.brand_invoiceDataset);
    }
    if (this.brand_salesOrderCheck) {
      selectedDatase.push(this.brand_salesOrderDataset);
    }
    if (this.brand_funnelCheck) {
      selectedDatase.push(this.brand_funnelDataset);
    }

    this.chartBrandSales = {
      labels: this.brandSalesData.map(a => a.brand),
      datasets: selectedDatase
    };
  }

  fetchCustSalesDataByPeriod(period): any {
    this.custSalesArr = [];
    this.custSalesData = [];

    if (period == "month") {
      this.custSalesArr = this.monthSalesArr['top10customers'];
    }
    else if (period == "quarter") {
      this.custSalesArr = this.quarterSalesArr['top10customers'];
    }
    else if (period == "year") {
      this.custSalesArr = this.yearlySalesArr['top10customers'];
    }

    for(var i = 0; i < this.custSalesArr.length; i++){
      this.custSalesData.push( {
        'customer': this.custSalesArr[i].customer,
        'invoice': parseInt(this.custSalesArr[i].invoice.replace(',', '')),
        'salesorder': parseInt(this.custSalesArr[i].salesorder.replace(',', '')),
        'committedfunnel': parseInt(this.custSalesArr[i].committedfunnel.replace(',', '')),
      });
    }

    this.cust_invoiceDataset = {
      data: this.brandSalesData.map(a => a.invoice),
      type: 'bar',
      label: 'Invoice',
      backgroundColor: '#FCCE58'
    };

    this.cust_salesOrderDataset = {
      data: this.brandSalesData.map(a => a.salesorder),
      type: 'bar',
      label: 'Sales Order',
      backgroundColor: '#55C595'
    };

    this.cust_funnelDataset = {
      data: this.brandSalesData.map(a => a.committedfunnel),
      type: 'bar',
      label: 'Committed Funnel',
      backgroundColor: '#8EB9E5',
    };

    this.getCustSalesData();
  }

  getCustSalesData() {
    let selectedDatase = []

    if (this.cust_invoiceCheck) {
      selectedDatase.push(this.cust_invoiceDataset);
    }
    if (this.cust_salesOrderCheck) {
      selectedDatase.push(this.cust_salesOrderDataset);
    }
    if (this.cust_funnelCheck) {
      selectedDatase.push(this.cust_funnelDataset);
    }

    this.chartCustSales = {
      labels: this.custSalesData.map(a => a.customer),
      datasets: selectedDatase
    };
  }

  fetchActivitySummary(period) {
    this.activitySummDataset = [];
    this.selectedActivityPeriod = period;

    let selPeriod = period + '_summary';
    let dataset = this.activitySummData[selPeriod];

    for(var i = 0; i < dataset.length; i++){
      this.activitySummDataset.push( {
        'name': dataset[i].name,
        'value': parseInt(dataset[i].amount.replace(',', '')),
      });
    };

    this.activityChartOption = {
      title: {
        text: 'Activity Summary',
        left: 'center',
        top: 'center'
      },
      tooltip: {
      trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20
      },
      series: [{
        name: 'Activity Summary',
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        data: this.activitySummDataset
      }]
    };
  }

  fetchForecastCategory(period) {
    this.forecastCatDataset = [];
    this.selectedActivityPeriod = period;
    let dataset = this.forecastCatData[period];
    let sum = dataset.reduce((accumulator, current) => accumulator + parseInt(current.value), 0);

    for(var i = 0; i < dataset.length; i++){
      this.forecastCatDataset.push( {
        'name': dataset[i].name + ' (' + ((dataset[i].value/sum)*100).toFixed(1) + '%)',
        'value': dataset[i].value
      });
    }

    this.forecastChartOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
       legend: {
        data: this.forecastCatDataset['name'],
        orient: 'vertical',
        right: 10,
        top: 20
      },
      series: [ {
        type: 'funnel',
        left: '10%',
        top: 20,
        bottom: 20,
        width: '60%',
        sort: 'descending',
        gap: 2,
        label: {
          position: 'inside',
          formatter: '{c}',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          data: this.forecastCatDataset
      }]
    };
  }
}



