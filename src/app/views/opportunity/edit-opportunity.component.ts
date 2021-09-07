import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { AppService } from './app.service';

export interface Product {
	id: any;
	uuid: string;
	name: any;
	data_area_id: any;
	sku: any;
	external_product_number: any;
	amount: any;
	principle: any;
	group: any;
	tax_code: any;
  }

@Component({
  templateUrl: 'edit-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss'],
  providers: [AppService]
})

export class EditOpportunityComponent implements OnInit{
	
	@ViewChild('addProductModal') public addProductModal: ModalDirective;
	@ViewChild('editProductModal') public editProductModal: ModalDirective;
	@ViewChild('deleteOptionModal') public deleteOptionModal: ModalDirective;
	@ViewChild('cloneOptionModal') public cloneOptionModal: ModalDirective;

	default_active_option_tab = 0;
	product_name:any[] = [];
	sku:any[] = [];
	quantity:any[] = [];
	unit_price:any[] = [];
	total_price:any[] = [];
	discount:any[] = [];
	amount:any[] = [];
	// final_sub_total_before_tax:any[] = [];	
	// final_discount:any[] = [];
	// final_total_amount:any[] = [];
	tax:any[] = [];
	opportunity_id = '';
	product_options = [];
	icons = [];
	detail = [];
	competitors = [];
	competitor_name = '';
	competitor_amount = '';
	active_option_id = 0;
	search_product_name = '';
	delete_option_id = 0;
	delete_option_index = 0;
	clone_option_id = 0;
	statuses = [];
	stages = [];

	productList : Product[] = [];
  	filteredProductList: Observable<Product[]>;
	productControl = new FormControl();

	active = 1;

	addProductForm = this.formBuilder.group({
		product_name: '',
		sku: '',
		quantity: '',
		discount: '',
		list_price: '',
		floor_price: '',
		principle: '',
		product_manager: '',
		standard_warranty: '',
		extended_warranty: '',
		tax_rate: '',
		customer_tax_code: '',
		tax_code: '',
		category: '',
		local_distribution: '',
	});

	editProductForm = this.formBuilder.group({
		product_name: '',
		sku: '',
		quantity: '',
		discount: '',
		list_price: '',
		floor_price: '',
		principle: '',
		product_manager: '',
		standard_warranty: '',
		extended_warranty: '',
		tax_rate: '',
		customer_tax_code: '',
		tax_code: '',
		category: '',
		local_distribution: '',
	});

	constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
		
	}

	ngOnInit(): void {
		
		this.icons = this.appService.getIconsView('cil');

		this.filteredProductList = this.productControl.valueChanges.pipe(
			startWith(''),
			map(value => typeof value === 'string' ? value : value.name),
			map(name => name ? this._filter(name) : this.productList.slice())
		);

		this.route.params.subscribe(event => {
			this.opportunity_id = event.opportunityId;
		});

		this.appService.getQuery('/opportunity/detail/'+this.opportunity_id, null).subscribe((data) => {	
			console.log('opportunity-detail:');		
			console.log(data);
			this.detail = data['data'];
		})
		
		this.appService.getQuery('/opportunity/forecast/'+this.opportunity_id, null).subscribe((data) => {		
			console.log('forecast:');	
			console.log(data);
		})

		this.appService.getQuery('/opportunity/product-list/'+this.opportunity_id, null).subscribe((data) => {
			console.log('product-list:');
			this.product_options = data['data'];			
			console.log(this.product_options);
		})		

		this.appService.getQuery('/opportunity/competitor/'+this.opportunity_id, null).subscribe((data) => {	
			console.log('competitors:');		
			console.log(data);
			this.competitors = data['data'];
		})

		this.appService.getQuery('/opportunity-status', null).subscribe((data) => {	
			console.log('statuses:');		
			console.log(data);
			this.statuses = data['data'];
		})
	}

	// get subTotal() { 
	// 	return `${this.person.firstName} ${this.person.lastName}`; 
	// }

	addOption(){
		
		this.appService.postQuery('/opportunity/create-product-option', 
			{
				opportunity_id: this.opportunity_id
			}
		).subscribe((data) => {						
			console.log(data);
			this.product_options.push(data['data']);			
		})
	}
	
  	addProduct(index, option_id){		

		this.appService.postQuery('/opportunity/create-product', 
			{
				opportunity_product_group_id: option_id, 
				name: this.product_name[index], 
				sku: this.sku[index], 
				quantity: this.quantity[index], 
				unit_price: this.unit_price[index], 
				total_price: this.total_price[index], 
				discount: this.discount[index], 
				amount: this.amount[index]
			}
		).subscribe((data) => {						
			this.product_options[index].products.push(data['data']);
			this.product_name[index] = this.sku[index] = this.quantity[index] = this.unit_price[index] = this.total_price[index] = this.discount[index] = this.amount[index] = '';
		})
  	}	

	addFullProduct(){
		this.appService.postQuery('/opportunity/create-product', 
			{
				opportunity_product_group_id: this.active_option_id, 
				name: this.addProductForm.value.product_name, 
				sku: this.addProductForm.value.sku, 
				quantity: this.addProductForm.value.quantity, 
				unit_price: this.addProductForm.value.list_price, 
				total_price: this.addProductForm.value.quantity * this.addProductForm.value.list_price, 
				discount: this.addProductForm.value.discount, 
				amount: (this.addProductForm.value.quantity * this.addProductForm.value.list_price) - this.addProductForm.value.discount,
            	product_manager: this.addProductForm.value.product_manager,
            	standard_warranty: this.addProductForm.value.standard_warranty,
            	extended_warranty: this.addProductForm.value.extended_warranty,
            	tax_rate: this.addProductForm.value.tax_rate,
            	customer_tax_code: this.addProductForm.value.customer_tax_code,
            	local_distribution: this.addProductForm.value.local_distribution,
            	category: this.addProductForm.value.category
			}
		).subscribe((data) => {						
			this.product_options[this.default_active_option_tab].products.push(data['data']);
			this.addProductForm.reset();
			this.addProductModal.hide();
		})

		console.log(this.addProductForm.value);
	}

	//product filter functions
	displayFn(product: Product): string {
		return product && product.name ? product.name : '';
	  }
	
	//product filter functions
	private _filter(name: string): Product[] {
		
		const filterValue = name.toLowerCase();    
		
		return this.productList.filter(option => option.name.toLowerCase().includes(filterValue));    
	}

	//product filter functions
	productSearch(keyword): void{  		
		if(keyword.length >= 2){
			this.appService.getQuery('/opportunity/get-product?product_name='+keyword).subscribe((data) => {
				if(data['data'].length > 0){
				  
				  this.productList.splice(0, this.productList.length);
				  
				  data['data'].forEach(value => {      				
					  this.productList.push(value);          
				  });
		  
				}        
			}); 
		}		
	
	}
	
	productSearch2(): void{  		
		
		this.appService.getQuery('/opportunity/get-product?product_name='+this.search_product_name).subscribe((data) => {
			if(data['data'].length > 0){
				
				this.productList.splice(0, this.productList.length);
				
				data['data'].forEach(value => {      				
					this.productList.push(value);          
				});
		
			}        
		}); 
	
	
	}

	productById(id){
		this.appService.getQuery('/opportunity/get-opportunity-product?id='+id).subscribe((data) => {
			console.log(data['data']);     
	
			this.editProductForm.patchValue({
				product_name: data['data'][0]['name'],
				sku: data['data'][0]['sku'],
				quantity: data['data'][0]['quantity'],
				discount: data['data'][0]['discount'],
				list_price: data['data'][0]['unit_price'],
				floor_price: data['data'][0]['floor_price'],
				principle: data['data'][0]['principle'],
				product_manager: data['data'][0]['product_manager'],
				standard_warranty: data['data'][0]['standard_warranty'],
				extended_warranty: data['data'][0]['extended_warranty'],
				tax_rate: data['data'][0]['tax_rate'],
				customer_tax_code: data['data'][0]['customer_tax_code'],
				tax_code: data['data'][0]['tax_code'],
				category: data['data'][0]['category'],
				local_distribution: data['data'][0]['local_distribution'],				
			});	
		});
	}
	
	calculateSubTotal(index){

		let sum = 0;
		
		for(let i = 0; i < this.product_options[index].products.length; i++) {
		  sum += this.product_options[index].products[i].total_price;		
		}

		return sum;
	}

	calculateDiscount(index){
		let sum = 0;
		
		for(let i = 0; i < this.product_options[index].products.length; i++) {
		  sum += this.product_options[index].products[i].discount;		
		}

		return sum;
	}

	calculateNetAmount(index){
		
		let sum = 0;
		
		for(let i = 0; i < this.product_options[index].products.length; i++) {
		  sum += this.product_options[index].products[i].amount;		
		}

		return sum;
	}

	calculateAmount(index){
		this.total_price[index] = (this.unit_price[index] ? this.unit_price[index] : 0) * (this.quantity[index] ? this.quantity[index] : 0);
		this.discount[index] = (this.discount[index] ? this.discount[index] : 0);
		this.amount[index] = (this.total_price[index] ? this.total_price[index] : 0) * ((100 - (this.discount[index] ? this.discount[index] : 0)) / 100);
		 
		// <td><input type="text" class="form-control" [(ngModel)]="sku[i]" readonly/></td>
		// 			    				<td><input type="text" class="form-control" [(ngModel)]="quantity[i]" (input)="calculateAmount(i)"/></td>
		// 			    				<td><input type="text" class="form-control" [(ngModel)]="unit_price[i]" (input)="calculateAmount(i)"/></td>
		// 			    				<td><input type="text" class="form-control" [(ngModel)]="total_price[i]" (input)="calculateAmount(i)" readonly/></td>
		// 			    				<td><input type="text" class="form-control" [(ngModel)]="discount[i]" (input)="calculateAmount(i)"/></td>
	}

	productSelected(value, index){
		console.log('product SELECTED:');
		console.log(value);		
		this.sku[index] = value.sku;
		this.product_name[index] = value.name;
		
	}

	openAddProductModal(option, index){
		this.active_option_id = option.id;		
		this.default_active_option_tab = index;	
		this.productList.splice(0, this.productList.length); //clear search		
		this.addProductModal.show();
	}	  

	openEditProductModal(product_id){
		this.editProductModal.show();
		this.productById(product_id);
		console.log('edit product: '+product_id);
	}

	openDeleteOptionModal(index, option_id){
		this.deleteOptionModal.show();
		this.delete_option_index = index;
		this.delete_option_id = option_id;		
	}

	openCloneOptionModal(index, option_id){
		this.cloneOptionModal.show();
		this.clone_option_id = option_id;		
	}

	cloneOption(index, option_id){
		this.appService.postQuery('/opportunity/clone-product-option', 
			{
				id: this.clone_option_id				
			}
		).subscribe((data) => {			
			console.log(data);			
			this.product_options.push(data['data']);
			this.cloneOptionModal.hide();
		})
	}

	deleteOption(){
		this.appService.postQuery('/opportunity/delete-product-option', 
			{
				id: this.delete_option_id				
			}
		).subscribe((data) => {						
			this.product_options.splice(this.delete_option_index, 1);
			this.deleteOptionModal.hide();
		})
	}

	addCompetitor(){
		
		this.appService.postQuery('/opportunity/create-competitor', 
			{
				opportunity_id: this.opportunity_id, 
				name: this.competitor_name, 
				amount: this.competitor_amount, 				
			}
		).subscribe((data) => {						
			this.competitors.push(data['data']);
			this.competitor_name = this.competitor_amount = '';
		})
	}
}
