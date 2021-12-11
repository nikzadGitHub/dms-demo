import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {EquipmentQuery, EquipmentsInterface} from './equipments';
import {EquipmentList} from './equipment-entity';


@Injectable()
export class MockEquipmentsService implements EquipmentsInterface {
  public mockData: EquipmentList = [
    {
      id: BigInt(123),
      name: 'First Product',
      sku: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sale_price: 200.5,
      available_quantity: 7,
      cost: 100.50,
      serial_no: 'd-serial',
    },
    {
      id: BigInt(321),
      name: 'Another Product',
      sku: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sale_price: 150.5,
      available_quantity: 3,
      cost: 70.50,
      serial_no: 'd-serial',
    },
    {
      id: BigInt(1),
      name: 'Last Product',
      sku: 'd-sku',
      quantity: 7,
      uom: 'd-uom',
      availability: 'd-avail',
      expected_sale_price: 200.5,
      available_quantity: 50,
      cost: 100.50,
      serial_no: 'd-serial',
    }
  ];

  constructor() {
  }

  findEquipments(query: EquipmentQuery): Observable<EquipmentList> {
    const result: EquipmentList = [];
    const filter = query.search_text.toLowerCase();
    for (const equipment of this.mockData) {
      if (equipment.name.toLowerCase().match(filter)) {
        result.push(equipment);
      }
    }
    return of(result.length > 0 ? result : this.mockData);
  }

}
