import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomersInterface } from './customers.interface';
import { ApiClient } from '../api-client.service';
import {CustomerList} from './customer-entity';

@Injectable({
  providedIn: 'root'
})
export class CustomersService implements CustomersInterface {

  constructor(private apiClient: ApiClient) { }

  getList(): Observable<CustomerList> {
    return this.apiClient.get<CustomerList>('customer-list');
  }
}





