import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Term } from '../create/terms';
import { QuoteService } from '../quote.service';
import { Quotation } from './quotations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  quotations: Quotation;
  form: FormGroup;
  termSelected: number;
  terms: Term[];
  quote_id: number;
  billingIdList: number[] = [];
  fromDate: Date;
  toDate: Date;
  company_details: string[] = [];

  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.quoteService.create('3630').subscribe(data => {
      this.terms = data['data']['items'];
    });

    this.route.params.subscribe(event => {
      this.quote_id = event.quoteId; // fetch ID from url
      this.quoteService.find(this.quote_id).subscribe(data => {
        this.quotations = data['data']['item'];
        console.log(this.quotations);
        this.setInitialValue();
      });
    });

    this.form =  this.formBuilder.group({
      standard_payment_term: this.termSelected,
      fromDate: this.fromDate,
      toDate: this.toDate,
      term_id: this.termSelected,
      billings: this.formBuilder.array([]),
      payments: this.formBuilder.array([]),
      addCosts: this.formBuilder.array([]),
    });
  }

  setInitialValue(){
    this.company_details['company_name'] = this.quotations.company;
    this.company_details['quote_id'] = this.quote_id;
    
    console.log(this.company_details);
    
    this.f.standard_payment_term.setValue(this.quotations.standard_payment_term);
    this.fromDate = this.quotations.fromDate;
    this.toDate = this.quotations.toDate;
    this.termSelected = this.quotations.standard_payment_term;
    this.dateInit();
    this.quotations.billing_milestones.forEach(billing => {
      this.billings().push(this.existingBillings(billing));
    });
    this.quotations.payment_schedules.forEach(payment => {
      this.payments().push(this.existingPayments(payment));
    });
  }

  dateInit(){
    this.fromDate = new Date(this.quotations.fromDate);
    this.toDate = new Date(this.quotations.toDate);
  }

  dateChange(){
    let tempDate = new Date(this.fromDate);
    tempDate = new Date(tempDate.setDate(tempDate.getDate() + this.termSelected));
    this.toDate = new Date(tempDate);
    this.f.fromDate.setValue(this.fromDate);
    this.f.toDate.setValue(this.toDate);
  }

  termSelect(term){
    this.termSelected = this.terms.find(x => x.id == term).no_of_days;
  }

  //---------------- Billings Milestone -------------------

  billings() : FormArray {
    return this.form.get("billings") as FormArray
  }
  
  existingBillings(billing){
    this.billingIdList.push(billing.billing_id);
    return this.formBuilder.group({
      'billing_id': billing.billing_id,
      'stage': billing.stage,
      'percentage': billing.percentage,
      'amount': billing.amount,
      'status': billing.status,
      'remarks': billing.remarks,
    })
  }

  newBillings(): FormGroup {
    return this.formBuilder.group({
      'billing_id': '',
      'stage': '',
      'percentage': '',
      'amount': '',
      'status': '',
      'remarks': '',
    })
  }

  addBillings() {
    this.billings().push(this.newBillings());
  }
   
  removeBillings(i:number) {
    this.billings().removeAt(i);
  }

  //---------------- End of Billings Milestone -------------------

  //---------------- Payment Schedules -------------------

  payments() : FormArray {
    return this.form.get("payments") as FormArray
  }
  
  existingPayments(payment): FormGroup {
    return this.formBuilder.group({
      'billing_id': payment.billing_id,
      'percentage': payment.percentage,
      'schedule': payment.schedule,
      'soc_payment_term': payment.soc_payment_term,
      'amount': payment.amount,
      'status': payment.status,
      'remarks': payment.remarks,
    })
  }

  newPayments(): FormGroup {
    return this.formBuilder.group({
      'billing_id': '',
      'percentage': '',
      'schedule': '',
      'soc_payment_term': '',
      'amount': '',
      'status': '',
      'remarks': '',
    })
  }

  addPayments() {
    this.payments().push(this.newPayments());
  }
   
  removePayments(i:number) {
    this.payments().removeAt(i);
  }

  //---------------- End of Payment Schedules -------------------

  addBillingMilestone(){
    var billing_id = this.billings().controls;
    billing_id.forEach(test=>{
      var data = test['controls']['billing_id'].value;
      this.billingIdList.push(data);
    });

    this.billingIdList = this.billingIdList.map(item => item)
    .filter((value, index, self) => self.indexOf(value) === index);
  }

  get f(){
    return this.form.controls;
  }
}
