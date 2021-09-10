import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Term } from '../../quote/create/terms';
import { BillingList } from '../../quote/edit/billing-list';
import { Product } from '../../quote/products/products';
import { Quote } from '../../quote/quote';
import { QuoteService } from '../../quote/quote.service';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  filteredProducts: Product[];
  enableEdit: boolean = false;
  enableIndex: number = null;
  termSelected: number;
  quotations: Quote[];
  terms: Term[];
  id: number;
  company_details: string[] = [];
  fromDate: Date;
  toDate: Date;
  form: FormGroup;
  billingList: BillingList[] = [];
  sub_total: number;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private sociService: SociService,
    private formBuilder: FormBuilder,
  ) {
    this.quoteService.create('3630').subscribe(data => {
      this.terms = data['data'];
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.sociId;
      this.sociService.edit(this.id).subscribe(res => {
        this.quotations = res['data']['quotes']
        this.setInitialValue();
        this.initData();
      })
      this.form = this.formBuilder.group({
        standard_payment_term: this.termSelected,
        fromDate: this.fromDate,
        toDate: this.toDate,
        billings: this.formBuilder.array([]),
        payments: this.formBuilder.array([]),
        addCosts: this.formBuilder.array([]),
        products: this.formBuilder.array([])
      })
      this.form.get('products').disable()
    });
  }

  setInitialValue(){
    this.company_details['company_name'] = this.quotations[0].company;
    this.company_details['quote_id'] = this.quotations[0].quote_id;
    this.f.standard_payment_term.setValue(this.quotations[0].standard_payment_term);
    this.f.fromDate.setValue(this.quotations[0].fromDate);
    this.f.toDate.setValue(this.quotations[0].toDate);
    this.fromDate = this.quotations[0].fromDate;
    this.toDate = this.quotations[0].toDate;
    this.termSelected = this.terms.find(x => x.id == this.quotations[0].standard_payment_term).no_of_days;
    this.dateInit();
  }

  initData()
  {
    this.quotations.forEach(element => {
      element.billing_milestones.forEach(billing => {
        this.billings().push(this.existingBillings(billing));
      });
      element.payment_schedules.forEach(payment => {
        this.payments().push(this.existingPayments(payment));
      });
      element.additional_costs.forEach(addCost => {
        this.addCosts().push(this.existingCosts(addCost));
      });
      element.products.forEach(product => {
        this.products().push(this.existingProducts(product));
      });
      this.subTotal(this.addCosts().controls);
    });
  }

  dateInit(){
    this.fromDate = new Date(this.quotations[0].fromDate);
    this.toDate = new Date(this.quotations[0].toDate);
  }

  //---------------- Billings Milestone -------------------

  billings() : FormArray {
    return this.form.get("billings") as FormArray
  }
  
  existingBillings(billing){
    let bill = new BillingList;
    bill['billing_id'] = billing['billing_id'];
    bill['amount'] = billing['amount'];
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
      'name': [{value:product.name,disabled:true}],
      'sku': [{value:product.sku,disabled:true}],
      'quantity': [{value:product.quantity,disabled:true}],
      'unit_price': [{value:product.unit_price,disabled:true}],
      'total_price': [{value:(product.quantity * product.unit_price),disabled:true}],
      'discount': [{value:product.discount,disabled:true}],
      'amount': [{value:product.amount,disabled:true}],
    })
  }

  //---------------- End of Quotation Products -------------------

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

  enableEditMethod(control,index){
    this.enableIndex = index
    this.enableEdit = true
    control['controls']['name'].enable()
    control['controls']['quantity'].enable()
    control['controls']['discount'].enable()
  }

  disableEditMethod(control){
    this.enableIndex = null
    this.enableEdit = false
    control.disable()
  }

  productDetails(product,productControl){
    productControl.controls.sku.setValue(product['sku']);
    productControl.controls.unit_price.setValue(product['amount']);
  }

  countNetAmount(product){
    let quantity = product.controls.quantity.value;
    let unit_price = product.controls.unit_price.value;
    let total_price = quantity * unit_price;
    let discount = product.controls.discount.value;
    discount = (100 - discount) / 100;

    product.controls.total_price.setValue(total_price);
    product.controls.net_amount.setValue(total_price * discount);
  }

  filterProduct(event) {
    let query = event.query;
    console.log(query)
    this.quoteService.getFilteredProducts(query).subscribe((data)=>{
      console.log(data)
      this.filteredProducts = data['data'];
    });
  }

  get f(){
    return this.form.controls;
  }
}
