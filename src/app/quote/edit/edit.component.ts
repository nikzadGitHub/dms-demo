import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Term } from '../create/terms';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;

  quotations: Quote;
  latestQuotation: Quote;
  quotationRevisions: Quote[] = [];
  form: FormGroup;
  rev: number = 0;
  termSelected: number;
  terms: Term[];
  id: number;
  billingIdList: number[] = [];
  fromDate: Date;
  toDate: Date;
  company_details: string[] = [];
  sub_total: number;
  alertBody: string;
  quote_id: string;
  quoteIdList: any[] = [];

  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { 
    this.quoteService.create('3630').subscribe(data => {
      this.terms = data['data'];
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.quoteId; // fetch ID from url
      this.quoteService.find(this.id).subscribe(data => {
        this.quotations = data['data']['quotation'];
        this.latestQuotation = data['data']['quotation'];
        this.quotationRevisions = data['data']['quotationRevisions'];

        this.setInitialValue();
        this.addQuoteIdList();
        this.initData();
      });
    });

    this.form =  this.formBuilder.group({
      company: '',
      id: 0,
      standard_payment_term: this.termSelected,
      fromDate: this.fromDate,
      toDate: this.toDate,
      quote_id: this.quote_id,
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
    this.f.quote_id.setValue(this.quotations.quote_id);
    this.f.standard_payment_term.setValue(this.quotations.standard_payment_term);
    this.f.fromDate.setValue(this.quotations.fromDate);
    this.f.toDate.setValue(this.quotations.toDate);
    this.f.company.setValue(this.quotations.company);

    this.fromDate = this.quotations.fromDate;
    this.toDate = this.quotations.toDate;
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
    console.log(this.products().controls)
    this.subTotal(this.addCosts().controls);
  }

  changeRev(revNumber){
    this.quoteService.getQuotationRevision(this.id,revNumber).subscribe(data => {
      console.log(data);
      this.billings().clear();
      this.payments().clear();
      this.addCosts().clear();
      this.products().clear();
      this.quotations = data['data'];
      this.setInitialValue();
      this.initData();
    })
    
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

  //---------------- Quotation Producs -------------------

  products(): FormArray {
    return this.form.get('products') as FormArray
  }

  existingProducts(product){
    return this.formBuilder.group({
      'id': product.id,
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
    this.billingIdList.push(billing.billing_id);
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
    billing_id.forEach(test=>{
      var data = test['controls']['billing_id'].value;
      this.billingIdList.push(data);
    });

    this.billingIdList = this.billingIdList.map(item => item)
    .filter((value, index, self) => self.indexOf(value) === index);
  }

  addQuoteIdList(){
    this.quoteIdList = [];
    let newArray = [];
    newArray['rev_number'] = 0; // rev_number 0 for latest quotation
    newArray['quote_id'] = this.quotations.quote_id;
    newArray['created_at'] = this.quotations.created_at;
    newArray['days'] = this.termSelected + ' days / ' + this.datePipe.transform(this.quotations.validity_date,'dd-MMM-yyyy');
    newArray['status'] = this.quotations.status;
    this.quoteIdList.push(newArray);
    this.quotationRevisions.forEach(element => {
        let newArray = [];
        newArray['rev_number'] = element['rev_number'];
        newArray['quote_id'] = element['quote_id'];
        newArray['created_at'] = this.quotations.created_at;
        newArray['days'] = this.termSelected + ' days / ' + this.datePipe.transform(this.quotations.validity_date,'dd-MMM-yyyy');
        newArray['status'] = this.quotations.status;
        this.quoteIdList.push(newArray);
    });
  }

  get f(){
    return this.form.controls;
  }

  test(test){
    console.log(test)
  }

  redirectPage(){
    this.router.navigateByUrl('quote/index');
  }

  submit(){
    console.log(this.form.value);
    this.quoteService.update(this.form.value,this.id).subscribe(res => {
      this.alertBody = res.message;
      this.successModal.show();
    })
  }
}
