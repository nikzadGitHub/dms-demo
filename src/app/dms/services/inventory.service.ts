import { Injectable } from '@angular/core';

import { InventoryInterface, InventoryList } from './inventory';
import { ApiClient } from './api-client.service';
import { Observable } from 'rxjs';


@Injectable()
export class InventoryService implements InventoryInterface {

  constructor(private apiClient: ApiClient) { }

  getList(): Observable<InventoryList> {
    return this.apiClient.get<InventoryList>('inventory');
  }
  getListSearch(data: any): Observable<InventoryList> {
    return this.apiClient.get<InventoryList>('inventory/search?search=' + data);
  }
}
