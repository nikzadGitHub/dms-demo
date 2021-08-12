import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  filter: Product;
  form: FormGroup;
  productList: Product[]= [];
  sociSelect: Soci[] = [
    {id: 1, desc: 'Bill To'}, 
    {id: 2, desc: 'Ship To'},
    {id: 3, desc: 'Tender/Contract No'}, 
    {id: 4, desc: 'Contract Start Date'}, 
    {id: 5, desc: 'Contract Expiry Date'}
  ];
  tnc: String = '';
  alertBody: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuoteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.quoteService.getProducts().subscribe((data)=>{
      this.productList = data['data']['items'];
    });
    this.form =  this.formBuilder.group({
      tnc:this.tnc,
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
      'product_name': '',
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



  productDetails(product){
    var id:number = product.controls.product_name.value;
    var objProduct:Product = this.productList.find(p => p.id == id);
    product.controls.sku.setValue(objProduct['sku']);
    product.controls.unit_price.setValue(objProduct['amount']);
  }

  countNetAmount(product){
    var quantity = product.controls.quantity.value;
    var unit_price = product.controls.unit_price.value;
    var total_price = quantity * unit_price;
    var discount = product.controls.discount.value;
    discount = (100 - discount) / 100;

    product.controls.total_price.setValue(total_price);
    product.controls.net_amount.setValue(total_price * discount);
  }

  redirectPage(){
    this.router.navigateByUrl('quote/create/product');
  }

  submit(){
    console.log(this.form.value);
    this.quoteService.storeDetails(this.form.value).subscribe(res => {
        this.alertBody = res.message;
        this.successModal.show();
    })
  }

}
