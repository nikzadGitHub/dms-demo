import { Observable } from 'rxjs';

import { EquipmentList } from './equipment-entity';
import {EquipmentPurpose} from './equipment-purpose.enum';

export interface EquipmentQuery {
  search_text: string;
  purposes: EquipmentPurpose[];
}

/**
 * General interaction interface, for Equipments API.
 */
export interface EquipmentsInterface {
  /**
   * Searches the Database based on query,
   * @param query input/ filter specified by user.
   * @return Async response.
   */
  findEquipments(query: EquipmentQuery): Observable<EquipmentList>;
}
