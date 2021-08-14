import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { Term } from './terms';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  @ViewChild('successModal') successModal : ModalDirective;

  form: FormGroup;
  sub_total: number;
  terms: Term[] = [];
  billingIdList: number[] = [];
  termSelected: number;
  alertBody: string;
  id:number;
  company: String[] = [];

  fromDate: Date;
  toDate: Date;

  constructor(
    public quoteService: QuoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.dateInit();
    this.quoteService.create('3630').subscribe((data)=>{
      console.log(data);
      this.terms = data['data']['items'];
    });
    this.form =  this.formBuilder.group({
      standard_payment: this.termSelected,
      fromDate: this.fromDate,
      toDate: this.toDate,
      term_id: this.termSelected,
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

  termSelect(term){
    this.termSelected = this.terms.find(x => x.id == term).no_of_days;
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
      this.alertBody = "Please add billing milestone before adding payment schedule.";
      return false;
    }
  }

  redirectPage(){
    let id = this.id;
    this.router.navigate(['quote/create/product',{quote_id:id}]);
  }

  submit(){
    console.log(this.form.value);
    this.quoteService.storeDetails(this.form.value).subscribe(res => {
        this.alertBody = res.message;
        this.id = res.data.value;
        this.successModal.show();
    })
  }
}