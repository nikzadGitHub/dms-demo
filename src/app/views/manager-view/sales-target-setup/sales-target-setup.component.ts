import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sales-target-setup',
  templateUrl: './sales-target-setup.component.html',
  styleUrls: ['./sales-target-setup.component.scss']
})

export class SalesTargetSetupComponent implements OnInit {
  public setupForm: FormGroup;
  monthNames: any[] = [];
  salesTargetMonth: any[] = [];
  currency: String = "RM";
  setupData: any[] = [];




  test: any = [];

  constructor (private formBuilder: FormBuilder) {
    this.monthNames = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"
    ];

  }

  ngOnInit(): void {
    this.setupForm = this.formBuilder.group( {

    });

    this.test = [
      {label: 'test 1', value: 'test'},
      {label: 'test 2', value: 'test2'}
    ];

    var d = new Date();
    d.setMonth(2); //REM: To prevent month skipping.
    console.log(d.getMonth());

    console.log(d.setDate(1));

    for (var i = 0; i < 12; i ++) {
      d.setMonth(d.getMonth() + 1);
      this.salesTargetMonth[i] = this.monthNames[d.getMonth()] + '-' + d.getFullYear();
    };

    this.setupData = [
      {desc: 'Sales Target - Dinamap', q1: '225,000', q2: '225,000', q3: '225,000', q4: '225,000', total: '900,000'},
      {desc: 'Sales Targe - MS Premium', q1: '425,000', q2: '425,000', q3: '425,000', q4: '425,000', total: '1,700,000'},
      {desc: 'Sales Target - MS Value', q1: '135,000', q2: '135,000', q3: '135,000', q4: '135,000', total: '540,000'}
    ]

  }

  onSubmit() {
    //todo
  }

  addDemision() {
    //todo
  }

}
