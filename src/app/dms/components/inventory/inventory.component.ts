import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InventoryService } from '../../services/inventory.service';
import { InventoryList, bookingIdFormat } from '../../services/inventory';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'dms-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  loading: boolean;
  searchTimerId: number;

  constructor(private api: InventoryService) { }
  menuItems: MenuItem[] = [
    {
      label: 'On-Hand',
      icon: 'pi pi-home',
    }, {
      label: 'Incoming',
      icon: 'pi pi-clock',
    }, {
      label: 'Archived',
      icon: 'pi pi-file-excel',
    }
  ];
  activeItem: MenuItem = this.menuItems[0];

  inventoryList: InventoryList;
  pageItems: number = 10;
  search_text: string = '';

  formatBooking: (id: number) => string = bookingIdFormat;

  ngOnInit(): void {
    this.loading = true;
    this.api.getList().subscribe(
      (response) => {
        if (response as InventoryList) {
          this.inventoryList = response;
        }
      //console.log(response);
      this.loading = false;
    }, 
    err => {
      this.loading = false;
    }
    );
  }

  onSearch() {
    if (this.searchTimerId) {
      clearTimeout(this.searchTimerId)
    }
    this.searchTimerId = window.setTimeout(() => {
      this.api.getListSearch(this.search_text).subscribe((response) => {
        if (response as InventoryList) {
          this.inventoryList = response;
        }
      });
    },1500)
  }
}
