import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { QuoteService } from '../quote.service';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;
  show:boolean;
  filteredProducts: Product[];
  selectedProductAdvanced: Product;
  form: FormGroup;
  tnc: String = '';
  alertBody: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuoteService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      products: this.formBuilder.array([])
    })
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
    // ----- Route Navigation after popup modal success showed -------
    // this.router.navigateByUrl('quote/index');
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
