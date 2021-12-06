export interface SkuInterface {
}

import { Observable } from 'rxjs';

export interface SkuItem {
    id: bigint;
    booking_no: string;
    request_date: string;
    // Here ...
}

export type SkuList = SkuItem[];

export interface SaveResult {
id: any;
}

export interface SkuInterface {
getList(): Observable<SkuList>;

saveSku(form: any): Observable<SaveResult>;
}
  