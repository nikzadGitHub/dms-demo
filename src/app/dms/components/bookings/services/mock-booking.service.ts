import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookingList, BookingInterface } from './booking.interface';

@Injectable({
  providedIn: 'root'
})
export class MockBookingService implements BookingInterface {
  private mockData: BookingList = [
    {
      code: 'BK-0092',
      request_date: '9/3/2021',
      requester: 'trxt',
      sku: 'ZY2332',
      product_desc: 'xxxxxx',
      customer: 'Parkway Singapore  (P001)',
      booking_reason: 'Demo',
      status: 'Approved',
    },
    {
      code: 'BK-0292',
      request_date: '13/3/2021',
      requester: 'trxt',
      sku: 'CX32312',
      product_desc: 'xxxxxx',
      customer: 'Parkway Singapore  (P001)',
      booking_reason: 'Demo',
      status: 'Pending Approva',
    },
    {
      code: 'BK-0192',
      request_date: '9/3/2021',
      requester: 'trxt',
      sku: 'ZY2332',
      product_desc: 'xxxxxx',
      customer: 'Parkway Singapore  (P001)',
      booking_reason: 'Event',
      status: 'In Progress',
    },
    {
      code: 'BK-0692',
      request_date: '13/3/2021',
      requester: 'trxt',
      sku: 'CX32312',
      product_desc: 'xxxxxx',
      customer: 'Parkway Singapore  (P001)',
      booking_reason: 'Contigencies',
      status: 'Draft',
    },
  ];

  constructor() { }

  getList(): Observable<BookingList> {
    return of(this.mockData);
  }
}
