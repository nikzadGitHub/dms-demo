import { Observable } from 'rxjs';

export interface BookingItem {
  id: bigint;
  booking_no: string;
  request_date: string;
  requester: string;
  sku: string;
  product_desc: string;
  customer: string;
  booking_reason: string;
  status: string;
}

export type BookingList = BookingItem[];

export interface BookingInterface {
  getList(): Observable<BookingList>;
}
