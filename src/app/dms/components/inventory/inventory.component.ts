import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventoryList: [];
	paginate: [];
	pageItems: number = 10;
	search_text: string = '';
	icons = [];

  constructor() { }

  ngOnInit(): void {
  }

}
