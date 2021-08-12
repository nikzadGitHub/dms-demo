import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filter: Product;
  form: FormGroup;
  productList: Product[]= [];
  oriProductList: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.quoteService.getProducts().subscribe((data)=>{
      this.productList = data['data']['items'];
      this.oriProductList = data['data']['items'];
    });
    this.form =  this.formBuilder.group({
      products: this.formBuilder.array([])
    })
  }

  products(): FormArray{
    return this.form.get('products') as FormArray
  }

  newProduct(){
    return this.formBuilder.group({
      'product_name': 1,
      'sku_id': '',
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

  productDetails(product){
    console.log(product.controls);
  }
}
