import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
