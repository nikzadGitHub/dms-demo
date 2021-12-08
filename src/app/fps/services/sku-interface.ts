export interface SkuInterface {
}

import { Observable } from 'rxjs';

export interface SkuItem {
    
}

export type SkuList = SkuItem[];

export interface SaveResult {
id: any;
}

export interface SkuInterface {
getList(): Observable<SkuList>;

saveSku(form: any): Observable<SaveResult>;
}
  