import { Observable } from 'rxjs';
import {CustomerList} from './customer-entity';


export interface CustomersInterface {
  getList(): Observable<CustomerList>;
}
