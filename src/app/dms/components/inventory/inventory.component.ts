import { Component, OnInit } from '@angular/core';

import { MockInventoryService } from '../../services/mock-inventory.service';
import { InventoryList, bookingIdFormat } from '../../services/inventory.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventoryList: InventoryList;
  formatBooking = bookingIdFormat;
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

  constructor(private api: MockInventoryService) { }

  ngOnInit(): void {
    this.api.getList().subscribe((response) => {
      if (response as InventoryList) {
        this.inventoryList = response;
      }
			console.log(response);
		});
  }

  getAll(){
    
  }

}
