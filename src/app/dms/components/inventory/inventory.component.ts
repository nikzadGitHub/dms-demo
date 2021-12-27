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
  totalRecords:number;
  pageItems: number = 10;
  pages: any[];

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
      this.api.getPagedList(this.current_tab, 1, this.pageItems, this.search_text)
      .subscribe((response) => {
        if (response as InventoryList) {
          this.inventoryList = response;
        }
      });
    },1500)
  }

  public changeInvList(tabNo: number, tabName: string) {
    this.activeItem[tabNo];
    this.current_tab = tabName;
    this.loading = true;
    this.api.getPagedList(tabName, 1, this.pageItems, this.search_text)
    .subscribe((response) => {
        this.inventoryList = response['data'];
        this.pages = response['links'];
        this.totalRecords = response['total'];
        this.loading = false;
      }, 
      err => {
        this.loading = false;
      }
    );
    
  }

  paginate(event){
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo){
    this.api.getPagedList(this.current_tab, pageNo, this.pageItems, this.search_text)
    .subscribe((data)=>{
      this.inventoryList = data['data'];
      this.pages = data['links'];
      this.totalRecords = data['total'];
    })  
  }


}
