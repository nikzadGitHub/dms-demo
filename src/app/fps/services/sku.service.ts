import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SkuInterface, SkuList, SaveResult} from '../services/sku-interface';
import { ApiClientService } from '../api-client.service';


@Injectable({providedIn: 'root'})

export class SkuService implements SkuInterface {

  constructor(private apiClient: ApiClientService) { }

  getList(): Observable<SkuList> {
    return this.apiClient.get<SkuList>('sku');
  }

  saveFps(data: any): Observable<SaveResult> {
    return this.apiClient.post('sku/createDraft', data);
  }

}