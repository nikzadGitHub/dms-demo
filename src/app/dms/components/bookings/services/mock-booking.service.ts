import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {BookingList, BookingInterface, SaveResult} from './booking.interface';
import {CustomerList} from '../../../services/customers/customer-entity';

export const mockBookingsData: BookingList = [
  {
    id: BigInt(1),
    booking_no: 'BK-0092',
    request_date: '9/3/2021',
    requester: 'trxt',
    sku: 'ZY2332',
    product_desc: 'xxxxxx',
    customer: 'Parkway Singapore  (P001)',
    booking_reason: 'Demo',
    status: 'Approved',
  },
  {
    id: BigInt(2),
    booking_no: 'BK-0292',
    request_date: '13/3/2021',
    requester: 'trxt',
    sku: 'CX32312',
    product_desc: 'xxxxxx',
    customer: 'Parkway Singapore  (P001)',
    booking_reason: 'Demo',
    status: 'Pending Approva',
  },
  {
    id: BigInt(3),
    booking_no: 'BK-0192',
    request_date: '9/3/2021',
    requester: 'trxt',
    sku: 'ZY2332',
    product_desc: 'xxxxxx',
    customer: 'Parkway Singapore  (P001)',
    booking_reason: 'Event',
    status: 'In Progress',
  },
  {
    id: BigInt(4),
    booking_no: 'BK-0692',
    request_date: '13/3/2021',
    requester: 'trxt',
    sku: 'CX32312',
    product_desc: 'xxxxxx',
    customer: 'Parkway Singapore  (P001)',
    booking_reason: 'Contigencies',
    status: 'Draft',
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockBookingService implements BookingInterface {
  constructor() { }

  getList(): Observable<BookingList> {
    return of(mockBookingsData);
  }

  create(form: any): Observable<SaveResult> {
    return of({
      id: 1
    });
  }

  updateBooking(form: any, id: any): Observable<SaveResult> {
    return of({
      id: 1
    });
  }
}
