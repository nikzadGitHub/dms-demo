import { Observable } from 'rxjs';

export interface SkuItem {
    
}

export type SkuList = SkuItem[];

export interface SaveResult {
id: any;
code : number;
}

export interface SkuInterface {
    getList(pageItems, search_text, sort): Observable<SkuList>;
    saveSku(form: any): Observable<SaveResult>;
    updateSkuPaymentMethod(data: any): Observable<any>;
}
  