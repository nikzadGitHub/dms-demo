import { Observable } from 'rxjs';

export interface FpsItem {
    id: bigint;
    booking_no: string;
    request_date: string;
    // Here ...
}

export type FpsList = FpsItem[];

export interface SaveResult {
id: any;
}

export interface FpsInterface {
getList(): Observable<FpsList>;

saveFps(form: any): Observable<SaveResult>;
}
  