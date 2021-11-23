import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CustomersInterface } from './customers.interface';
import {CustomerList} from './customer-entity';

export const mockCustomersData: CustomerList = [
  {
    id: BigInt(1),
    company_name: 'My Company'
  },
  {
    id: BigInt(2),
    company_name: 'Google',
  },
  {
    id: BigInt(3),
    company_name: 'Microsoft'
  },
  {
    id: BigInt(4),
    company_name: 'Wiki Co'
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockCustomersService implements CustomersInterface {
  constructor() { }

  getList(): Observable<CustomerList> {
    return of(mockCustomersData);
  }
}
