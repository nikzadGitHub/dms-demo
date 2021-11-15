import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {EquipmentQuery, EquipmentsInterface} from './equipments';
import {EquipmentList} from './equipment-entity';


@Injectable({
  providedIn: 'root'
})
export class MockEquipmentsService implements EquipmentsInterface {
  public mockData: EquipmentList = [
    {
      id: BigInt(123),
      product_name: 'First Product',
      sku_id: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sales_price: 200.5,
      available_qty: 7,
      cost: 100.50,
      serial_no: 'd-serial',
    },
    {
      id: BigInt(321),
      product_name: 'Another Product',
      sku_id: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sales_price: 150.5,
      available_qty: 3,
      cost: 70.50,
      serial_no: 'd-serial',
    },
    {
      id: BigInt(1),
      product_name: 'Last Product',
      sku_id: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sales_price: 200.5,
      available_qty: 50,
      cost: 100.50,
      serial_no: 'd-serial',
    }
  ];

  constructor() {
  }

  findEquipments(query: EquipmentQuery): Observable<EquipmentList> {
    const result: EquipmentList = [];
    const filter = query.filter.toLowerCase();
    for (const equipment of this.mockData) {
      if (equipment.product_name.toLowerCase().match(filter)) {
        result.push(equipment);
      }
    }
    return of(result.length > 0 ? result : this.mockData);
  }

}
