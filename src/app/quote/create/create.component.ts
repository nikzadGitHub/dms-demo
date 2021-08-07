import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { Term } from './terms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  form: FormGroup;
  sub_total: number;
  terms: [];
  billingIdList: number[] = [];
  termSelected = 30;
  dangerTitle: string;
  dangerBody: string;

  fromDate: Date;
  toDate: Date;

  constructor(
    public quoteService: QuoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.dateInit();
    this.quoteService.create(3630).subscribe((data)=>{
      this.terms = data['data']['items'];
    });
    this.form =  this.formBuilder.group({
      standard_payment: this.termSelected,
      billings: this.formBuilder.array([]),
      payments: this.formBuilder.array([]),
      addCosts: this.formBuilder.array([]),
    });
  }

  //---------------- Billings Milestone -------------------

  billings() : FormArray {
    return this.form.get("billings") as FormArray
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

  //---------------- Payment Schedule -------------------

  payments() : FormArray {
    return this.form.get("payments") as FormArray
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

  //---------------- End of Payment Schedule -------------------

  //---------------- Additional Cost -------------------
    
  addCosts() : FormArray {
    return this.form.get("addCosts") as FormArray
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
      console.log(element);
      this.sub_total += <number>element.controls.total_price.value;
    });
    console.log(this.sub_total);
  }

  allTotal(costControl,costs){
    this.addTotal(costControl);
    this.subTotal(costs);
  }

  //---------------- End of Additional Cost -------------------

  get f(){
    return this.form.controls;
  }

  termSelect(term:number){
    console.log(term);
    this.termSelected = term;
  }

  dateInit(){
    this.fromDate = new Date();
    const init = new Date();
    this.toDate = new Date(init.setDate(init.getDate() + this.termSelected));
  }

  dateChange(){
    var tempDate = this.fromDate;
    tempDate = new Date(tempDate.setDate(tempDate.getDate() + this.termSelected));
    this.toDate = tempDate;
  }

  addBillingMilestone(){
    var billing_id = this.billings().controls;
    billing_id.forEach(test=>{
      var data = test['controls']['billing_id'].value;
      this.billingIdList.push(data);
    });

    this.billingIdList = this.billingIdList.map(item => item)
    .filter((value, index, self) => self.indexOf(value) === index);
  }

  checkBilling(){
    if(this.billingIdList.length > 0){
      return true;
    } else {
      this.dangerTitle = "Warning";
      this.dangerBody = "Please add billing milestone before adding payment schedule or additional cost.";
      return false;
    }
  }

  submit(){
    console.log(this.form.value);
    this.quoteService.store(this.form.value).subscribe(res => {
         console.log('Quote created successfully!');
         this.router.navigateByUrl('quote/index');
    })
  }
}