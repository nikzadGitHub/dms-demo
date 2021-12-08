import { Observable } from 'rxjs';

export interface SaveResult {
    id: any;
}

export interface FpsInterface {
    getList(currentOpportunityId, pageItems, search_text, sort): Observable<any>;
    saveFps(form: any): Observable<SaveResult>;
}
  