import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InventoryList, InventoryInterface } from './inventory';

@Injectable()
export class MockInventoryService implements InventoryInterface {
  private mockData: InventoryList = [
    {
      serial_no: 1,
      stock_keep_unit: 'ZY2332',
      product_name: 'xxxxxxx',
      agency_name: 'trxt',
      description: 'trxt',
      status: 'Approved',
      booking_id: BigInt(92),
    }, {
      serial_no: 2,
      stock_keep_unit: 'CX32312',
      product_name: 'xxxxxxx',
      agency_name: 'trxt',
      description: 'trxt',
      status: 'Provisionally accepted',
      booking_id: BigInt(292),
    }, {
      serial_no: 234,
      stock_keep_unit: 'UY4234',
      product_name: 'xxxxxxx',
      agency_name: 'trxt',
      description: 'trxt',
      status: 'Available',
      booking_id: BigInt(192),
    }, {
      serial_no: 412,
      stock_keep_unit: 'XY2568',
      product_name: 'xxxxxxx',
      agency_name: 'trxt',
      description: 'trxt',
      status: 'Draft',
      booking_id: BigInt(692),
    },
  ];

  constructor() { }

  getList(): Observable<InventoryList> {
    return of(this.mockData);
  }
}
