import { Component, OnInit, OnDestroy } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ChartType } from 'chart.js';

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  salesData: any;
  performData: any;
  custData: any;
  chartOptions: any;
  graph1: string[] = [];
  graph2: string[] = [];
  graph3: string[] = [];

  graphOptions=[
    {label:'code1',value:'id1'},
    {label:'code2',value:'id2'},
   ];

  ngOnInit(): void {
    this.graph1 = ['salesTarget','invoice','salesOrder','funnel'];
    this.graph2 = ['invoice','salesOrder','funnel'];
    this.graph3 = ['invoice','salesOrder','funnel'];

    this.salesData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
          type: 'line',
          label: 'Sales Target',
          backgroundColor: '#656565',
          borderColor: '#656565',
          borderWidth: 2,
          fill: false,
          data: [500000, 250000, 120000, 480000, 560000, 760000, 420000, 120000, 480000, 560000, 60000, 420000]
        },
        {
          type: 'bar',
          label: 'Invoice',
          backgroundColor: '#FCCE58',
          data: [50000, 25000, 12000, 48000, 90000, 76000, 42000, 12000, 48000, 90000, 76000, 42000]
        },
        {
          type: 'bar',
          label: 'Sales Order',
          backgroundColor: '#55C595',
          data: [21000, 84000, 24000, 75000, 37000, 65000, 34000, 24000, 75000, 37000, 65000, 34000]
        },
        {
          type: 'bar',
          label: 'Committed Funnel',
          backgroundColor: '#FFA726',
          data: [41000, 52000, 24000, 74000, 23000, 21000, 32000, 24000, 74000, 23000, 21000, 32000]
        }
      ]
    };

    this.performData = {
      labels: ['Philips', 'GE Healthcare', 'Hillrom', 'Atmos', 'Timesco', 'Smiths Medical', 
               'Allied Healthcare', 'Critical Diagnotics', 'Redax', 'DS Maref', 'EGZOTech'],
      datasets: [{
          type: 'bar',
          label: 'Invoice',
          backgroundColor: '#FCCE58',
          data: [50000, 25000, 12000, 48000, 90000, 76000, 42000, 12000, 48000, 90000, 76000, 42000]
        },
        {
          type: 'bar',
          label: 'Sales Order',
          backgroundColor: '#55C595',
          data: [21000, 84000, 24000, 75000, 37000, 65000, 34000, 24000, 75000, 37000, 65000, 34000]
        },
        {
          type: 'bar',
          label: 'Committed Funnel',
          backgroundColor: '#FFA726',
          data: [41000, 52000, 24000, 74000, 23000, 21000, 32000, 24000, 74000, 23000, 21000, 32000]
        }
      ]
    };

    this.custData = {
      labels: ['Hospital Serdang', 'Hospital Pantai', 'Hospital UKM', 'Hospital Ampang', 'Hospital KPJ', 
               'General Hospital', 'Hospital KPJ KL', 'Gleneagles Hospital', 'Hospital Columbia Asia', 'Hospital Putra Jaya'],
      datasets: [{
          type: 'bar',
          label: 'Invoice',
          backgroundColor: '#FCCE58',
          data: [50000, 25000, 12000, 48000, 90000, 76000, 42000, 12000, 48000, 90000, 76000, 42000]
        },
        {
          type: 'bar',
          label: 'Sales Order',
          backgroundColor: '#55C595',
          data: [21000, 84000, 24000, 75000, 37000, 65000, 34000, 24000, 75000, 37000, 65000, 34000]
        },
        {
          type: 'bar',
          label: 'Committed Funnel',
          backgroundColor: '#FFA726',
          data: [41000, 52000, 24000, 74000, 23000, 21000, 32000, 24000, 74000, 23000, 21000, 32000]
        }
      ]
    };

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
}

