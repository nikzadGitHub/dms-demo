import { Observable } from 'rxjs';

export interface SkuItem {
    
}

export type SkuList = SkuItem[];

export interface SaveResult {
id: any;
}

export interface SkuInterface {
    getList(pageItems, search_text, sort): Observable<SkuList>;
    saveSku(form: any): Observable<SaveResult>;
}
  