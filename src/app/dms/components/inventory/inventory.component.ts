import { Component, OnInit } from '@angular/core';

import { MockInventoryService } from '../../services/mock-inventory.service';
import { InventoryList, bookingIdFormat } from '../../services/inventory';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'dms-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  loading: boolean;
  constructor(private api: MockInventoryService) { }
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
      console.log(response);
      this.loading = false;

    }, 
    err => {
      this.loading = false;
    }
    );
  }

  onSearch() {
    // console.log('searching for:', this.search_text);
  }
}
