import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CustomersInterface } from './customers.interface';
import {CustomerList} from './customer-entity';

export const mockCustomersData: CustomerList = [
  {
    id: BigInt(1),
    name: 'John Due',
    company_name: 'My Company'
  },
  {
    id: BigInt(2),
    name: 'John L. Hennessy',
    company_name: 'Google',
  },
  {
    id: BigInt(3),
    name: 'Satya Nadella',
    company_name: 'Microsoft'
  },
  {
    id: BigInt(4),
    name: 'Wiki',
    company_name: 'Wiki Co'
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockCustomersService implements CustomersInterface {
  constructor() { }

  getList(_page: number): Observable<CustomerList> {
    return of(mockCustomersData);
  }
}
