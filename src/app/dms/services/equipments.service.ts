import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiClient} from './api-client.service';
import {parameterize} from './api-client';
import {
  EquipmentsInterface, EquipmentQuery
} from './equipments';
import {EquipmentList} from './equipment-entity';


@Injectable() 
export class EquipmentsService implements EquipmentsInterface {

  constructor(private apiClient: ApiClient) {
  }

  findEquipments(query: EquipmentQuery): Observable<EquipmentList> {
    return this.apiClient.get<EquipmentList>('equipments/search?' + parameterize(query));
  }
}
