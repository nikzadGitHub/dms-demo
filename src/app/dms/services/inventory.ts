import { Observable } from 'rxjs';

export interface InventoryItem {
  serial_no: number;
  stock_keep_unit: string;
  product_name: string;
  agency_name: string;
  description: string;
  status: string;
  booking_id: BigInt;
}

export function bookingIdFormat(booking_id: number) : string {
  let id = '' + booking_id;
  while (id.length < 4) {
    id = '0' + id;
  }
  return 'BK-' + id;
}

export type InventoryList = InventoryItem[];

export interface InventoryInterface {
  getList(): Observable<InventoryList>;
}
