import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 
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
  current_tab: string = 'available'; 
  pageItems: number = 10;
  search_text: string = '';
  menuItems: MenuItem[] = [
    {
      label: 'On-Hand',
      icon: 'pi pi-home',
      routerLink: ['available'],
      command: event => {
        this.changeInvList(0, 'available');
      }
    }, {
      label: 'Incoming',
      icon: 'pi pi-clock',
      routerLink: ['incoming'],
      command: event => {
        this.changeInvList(1, 'incoming');
      }
    },{
      label: 'AFS',
      icon: 'pi pi-bookmark',
      routerLink: ['afs'],
      command: event => {
        this.changeInvList(2, 'afs');
      }
    }, {
      label: 'Archived',
      icon: 'pi pi-file-excel',
      routerLink: ['archived'],
      command: event => {
        this.changeInvList(3, 'archived');
      }
    }
  ];
  activeItem: MenuItem = this.menuItems[0];
  inventoryList: InventoryList;
  formatBooking: (id: number) => string = bookingIdFormat;

  constructor(
    private api: InventoryService,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.changeInvList(0 , 'available');
    this.location.replaceState("/dms/inventory/available");
  }

  onSearch() {
    if (this.searchTimerId) {
      clearTimeout(this.searchTimerId)
    }
    this.searchTimerId = window.setTimeout(() => {
      this.api.getList(this.current_tab, this.search_text).subscribe((response) => {
        if (response as InventoryList) {
          this.inventoryList = response;
          console.log(this.current_tab);
        }
      });
    },1500)
  }

  public changeInvList(tabNo: number, tabName: string) {
    this.activeItem[tabNo];
    this.current_tab = tabName;
    this.loading = true;
    this.api.getList(tabName).subscribe(
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
}
