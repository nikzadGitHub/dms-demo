import { Injectable } from '@angular/core';
import { InventoryInterface, InventoryList } from './inventory';
import { ApiClient } from './api-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService implements InventoryInterface {

  constructor(private apiClient: ApiClient) { }

  getList(tabName: string, search: string = null): Observable<InventoryList> {
    return this.apiClient.get<InventoryList>('inventories/'+tabName+ (search ? '?search=' + search : '') );
  }

  getPagedList(tabName, page, pageItems, search): Observable<InventoryList> {    
    return this.apiClient.get<InventoryList>('inventories/' + tabName + 
      '?page=' + page + 
      '&pageItems=' + pageItems + 
      '&search=' + search
    );
  }

}
