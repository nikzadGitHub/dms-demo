import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { QuoteService } from '../quote.service';
import { Product } from './products';
import { Soci } from './soci';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;

  filteredProducts: Product[];
  selectedProductAdvanced: Product;
  form: FormGroup;
  sociSelect: Soci[] = [
    {id: 1, desc: 'Bill To'}, 
    {id: 2, desc: 'Ship To'},
    {id: 3, desc: 'Tender/Contract No'}, 
    {id: 4, desc: 'Contract Start Date'}, 
    {id: 5, desc: 'Contract Expiry Date'}
  ];
  tnc: String = '';
  alertBody: String = '';
  quote_id: number;

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuoteService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.quote_id = event.quote_id;
     });
    this.form =  this.formBuilder.group({
      tnc:this.tnc,
      quote_id:this.quote_id,
      products: this.formBuilder.array([]),
      sociList: this.formBuilder.array([])
    })
  }

  sociList(): FormArray{
    return this.form.get('sociList') as FormArray
  }

  newSoci(){
    return this.formBuilder.group({
      'soci': '',
      'description': ''
    })
  }

  addNewSoci(){
    this.sociList().push(this.newSoci());
  }

  removeSoci(i:number) {
    this.sociList().removeAt(i);
  }

  products(): FormArray{
    return this.form.get('products') as FormArray
  }

  newProduct(){
    return this.formBuilder.group({
      'product_id': '',
      'sku': '',
      'quantity': '',
      'unit_price': 0.00,
      'total_price': 0.00,
      'discount': 0.00,
      'net_amount': 0.00
    })
  }

  addNewProduct(){
    this.products().push(this.newProduct());
  }

  removeProduct(i:number) {
    this.products().removeAt(i);
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
    this.quoteService.getFilteredProducts(query).subscribe((data)=>{
      this.filteredProducts = data['data']['items'];
    });
  }

  redirectPage(){
    this.router.navigateByUrl('quote/index');
  }

  submit(){
    console.log(this.form.value);
    this.quoteService.storeProducts(this.form.value).subscribe(res => {
        console.log(res);
        this.alertBody = "Quotation product stored successfully";
        this.successModal.show();
    })
  }

}
