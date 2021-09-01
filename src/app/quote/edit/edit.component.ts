import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Term } from '../create/terms';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';
import { BillingList } from './billing-list';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('dangerModal') dangerModal : ModalDirective;

  submitType: string;
  quotations: Quote;
  requested_date: Date;
  form: FormGroup;
  termSelected: number;
  terms: Term[];
  id: number;
  billingList: BillingList[] = [];
  fromDate: Date;
  toDate: Date;
  company_details: string[] = [];
  sub_total: number;
  alertBody: string;
  dangerBody:string;
  quote_id: string;
  modal_type: string = "";
  quoteIdList: any[] = [];
  paymentCurrentIndex: 0;

  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sanitizer:DomSanitizer
  ) { 
    this.quoteService.create('3630').subscribe(data => {
      this.terms = data['data'];
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.quoteId; // fetch ID from url
      if(this.router.url.includes('revision')){
        this.quoteService.getQuotationRevision(this.id).subscribe(data => {
          console.log(data)
          this.quotations = data['data'];
          this.setInitialValue();
          this.initData();
        });
      } else {
        this.quoteService.find(this.id).subscribe(data => {
          this.quotations = data['data']['quotation'];
          this.setInitialValue();
          this.initData();
        });
      }
    });

    this.form =  this.formBuilder.group({
      company: '',
      id: 0,
      data_area_id: '',
      external_id: '',
      standard_payment_term: this.termSelected,
      fromDate: this.fromDate,
      toDate: this.toDate,
      quote_id: this.quote_id,
      status: '',
      billings: this.formBuilder.array([]),
      payments: this.formBuilder.array([]),
      addCosts: this.formBuilder.array([]),
      products: this.formBuilder.array([]),
    });
  }

  setInitialValue(){
    this.company_details['company_name'] = this.quotations.company;
    this.company_details['quote_id'] = this.quotations.quote_id;
    console.log(this.quotations)
    this.f.id.setValue(this.quotations.id);
    this.f.data_area_id.setValue(this.quotations.data_area_id);
    this.f.external_id.setValue(this.quotations.external_id);
    this.f.quote_id.setValue(this.quotations.quote_id);
    this.f.standard_payment_term.setValue(this.quotations.standard_payment_term);
    this.f.fromDate.setValue(this.quotations.fromDate);
    this.f.toDate.setValue(this.quotations.toDate);
    this.f.status.setValue(this.quotations.status);
    this.f.company.setValue(this.quotations.company);

    this.fromDate = this.quotations.fromDate;
    this.toDate = this.quotations.toDate;
    this.requested_date = this.quotations.requested_date;
    this.termSelected = this.terms.find(x => x.id == this.quotations.standard_payment_term).no_of_days;
    this.dateInit();
  }

  initData()
  {
    this.quotations.billing_milestones.forEach(billing => {
      this.billings().push(this.existingBillings(billing));
    });
    this.quotations.payment_schedules.forEach(payment => {
      this.payments().push(this.existingPayments(payment));
    });
    this.quotations.additional_costs.forEach(addCost => {
      this.addCosts().push(this.existingCosts(addCost));
    });
    this.quotations.products.forEach(product => {
      this.products().push(this.existingProducts(product));
    });
    this.subTotal(this.addCosts().controls);
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

  changePaymentPercent(index){
    this.paymentCurrentIndex = index;
    let maxPercentage = 100;
    let currentPercentage = 0;

    let payments = this.payments().controls;
    let billing_id = payments[index]['controls'].billing_id.value;
    let fullAmount = this.billingList.find(x => x.billing_id == billing_id).amount;

    let filteredPayments = payments.filter(x => x['controls'].billing_id.value == billing_id);

    filteredPayments.forEach(payment => {
      currentPercentage += parseFloat(payment['controls'].percentage.value);
      if(currentPercentage > maxPercentage){
        this.dangerBody = "You have entered more than 100% for the payment schedule for billing ID: "+billing_id;
        this.modal_type = 'paymentPercentage';
        this.dangerModal.show();
      } else {
        payment['controls'].amount.setValue((fullAmount * ((payment['controls'].percentage.value)/100)).toFixed(2))
      }
    });
  }

  changePaymentValue(index){
    this.paymentCurrentIndex = index;

    let payments = this.payments().controls;
    let billing_id = payments[index]['controls'].billing_id.value;
    let fullAmount = this.billingList.find(x => x.billing_id == billing_id).amount;
    let currentAmount = 0;

    let filteredPayments = payments.filter(x => x['controls'].billing_id.value == billing_id);

    filteredPayments.forEach(payment => {
      currentAmount += parseFloat(payment['controls'].amount.value);
      if(currentAmount > fullAmount){
        this.dangerBody = "You have entered excessive amount of "+(currentAmount-fullAmount)+" for the payment schedule for "+
                          "billing ID: "+billing_id;
        this.modal_type = 'paymentValue';
        this.dangerModal.show();
      } else {
        payment['controls'].percentage.setValue(((currentAmount/fullAmount) * 100).toFixed(2))
      }
    });
  }

  setDefaultPayment(){
    this.payments().clear();
    this.quotations.payment_schedules.forEach(payment => {
      this.payments().push(this.existingPayments(payment));
    });
  }

  setPaymentAutoAssignPercentage(){
    let index = this.paymentCurrentIndex;
    let maxPercentage = 100;

    let payments = this.payments().controls;
    let billing_id = payments[index]['controls'].billing_id.value;
    let fullAmount = this.billingList.find(x => x.billing_id == billing_id).amount;

    let filteredPayments = payments.filter(x => x['controls'].billing_id.value == billing_id);

    filteredPayments.forEach(payment => {
        maxPercentage -= parseFloat(payment['controls'].percentage.value)
        if( maxPercentage < 0 )
        {
          payment['controls'].percentage.setValue(parseFloat(payment['controls'].percentage.value) + maxPercentage)
          payment['controls'].amount.setValue((fullAmount * ((payment['controls'].percentage.value)/100)).toFixed(2))
        }
        else if( maxPercentage == 0 ){
          payment['controls'].percentage.setValue(0)
          payment['controls'].amount.setValue(0)
        } else {
          payment['controls'].amount.setValue((fullAmount * ((payment['controls'].percentage.value)/100)).toFixed(2))
        }
    });
  }

  setPaymentAutoAssignValue(){
    let index = this.paymentCurrentIndex;

    let payments = this.payments().controls;
    let billing_id = payments[index]['controls'].billing_id.value;
    let fullAmount = this.billingList.find(x => x.billing_id == billing_id).amount;
    let fixFullAmount = fullAmount;

    let filteredPayments = payments.filter(x => x['controls'].billing_id.value == billing_id);

    filteredPayments.forEach(payment => {
      fullAmount -= parseFloat(payment['controls'].amount.value);
      console.log(fullAmount)
      if( fullAmount < 0 ){
        payment['controls'].amount.setValue(parseFloat(payment['controls'].amount.value) + fullAmount)
        payment['controls'].percentage.setValue(
          (
            (payment['controls'].amount.value/fixFullAmount)*100
          ).toFixed(2)
          )
      } else {
        let percentage = (payment['controls'].amount.value/fixFullAmount) * 100;
        payment['controls'].percentage.setValue(percentage.toFixed(2))
      }
    });
  }

  //---------------- Quotation Producs -------------------

  products(): FormArray {
    return this.form.get('products') as FormArray
  }

  existingProducts(product){
    return this.formBuilder.group({
      'id': product.id,
      'external_product_number': product.external_product_number,
      'data_area_id': product.data_area_id,
      'quote_id': product.quote_id,
      'name': product.name,
      'sku': product.sku,
      'quantity': product.quantity,
      'unit_price': product.unit_price,
      'total_price': product.quantity * product.unit_price,
      'discount': product.discount,
      'amount': product.amount,
    })
  }

  //---------------- End of Quotation Products -------------------

  //---------------- Billings Milestone -------------------

  billings() : FormArray {
    return this.form.get("billings") as FormArray
  }
  
  existingBillings(billing){
    let bill = new BillingList;
    bill['billing_id'] = billing.billing_id;
    bill['amount'] = billing.amount;
    this.billingList.push(bill);

    return this.formBuilder.group({
      'id': billing.id,
      'billing_id': billing.billing_id,
      'stage': billing.stage,
      'percentage': billing.percentage,
      'amount': billing.amount,
      'status': billing.status,
      'remarks': billing.remarks,
      'quote_id': billing.quote_id
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
      'id': payment.id,
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

  //---------------- Additional Cost -------------------
    
  addCosts() : FormArray {
    return this.form.get("addCosts") as FormArray
  }
  
  existingCosts(addCosts): FormGroup {
    
    return this.formBuilder.group({
      'id': addCosts.id,
      'description': addCosts.description,
      'quantity': addCosts.quantity,
      'unit_price': addCosts.unit_price,
      'total_price': addCosts.total_price,
      'remarks': addCosts.remarks,
    })
  }

  newAddCosts(): FormGroup {
    return this.formBuilder.group({
      'description': '',
      'quantity': 0,
      'unit_price': 0.00,
      'total_price': 0.00,
      'remarks': '',
    })
  }

  addAddCosts() {
    this.addCosts().push(this.newAddCosts());
  }
   
  removeAddCosts(i:number) {
    this.addCosts().removeAt(i);
  }

  addTotal(costControl)
  {
    costControl.total_price.setValue(<number>costControl.quantity.value * <number>costControl.unit_price.value);
  }

  subTotal(costs){
    this.sub_total = 0.00;
    costs.forEach(element => {
      this.sub_total += parseInt(element.controls.total_price.value);
    });
  }

  allTotal(costControl,costs){
    this.addTotal(costControl);
    this.subTotal(costs);
  }

  //---------------- End of Additional Cost -------------------

  addBillingMilestone(){
    var billing_id = this.billings().controls;
    this.billingList = [];
    billing_id.forEach(test=>{
      // var data = test['controls']['billing_id'].value;
      let bill = new BillingList;
      bill['billing_id'] = test['controls']['billing_id'].value;
      bill['amount'] = test['controls']['amount'].value;
      this.billingList.push(bill);
    });

    this.billingList = this.billingList.map(item => item)
    .filter((item, index, self) => self.indexOf(item) === index);
  }

  

  get f(){
    return this.form.controls;
  }

  redirectPage(){
    this.router.navigateByUrl('quote/index');
  }

  setSubmitType(type){
    this.submitType = type;
  }

  submitRev(){
    console.log(this.form.value);
    this.quoteService.update(this.form.value,this.id).subscribe(res => {
      this.alertBody = res.message;
      this.successModal.show();
    })
  }

  submitApproval(){
    this.quoteService.submitApproval(this.id).subscribe(res => {
      this.alertBody = res.message
      this.successModal.show();
    })
  }
}
