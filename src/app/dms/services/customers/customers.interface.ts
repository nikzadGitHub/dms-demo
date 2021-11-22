import { Observable } from 'rxjs';
import {CustomerList} from './customer-entity';


export interface CustomersInterface {
  getList(page: number): Observable<CustomerList>;
}
