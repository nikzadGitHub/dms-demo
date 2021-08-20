import {Component, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'edit-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class EditOpportunityComponent {
	
	product_name = '';
	sku = '';
	quantity = '';
	unit_price = '';
	total_price = '';
	discount = '';
	net_amount = '';

	products = [];

  	addProduct(){
		this.products.push({product_name: this.product_name, sku: this.sku, quantity: this.quantity, unit_price: this.unit_price, total_price: this.total_price, discount: this.discount, net_amount: this.net_amount});    
		console.log(this.products);
  	}

}
