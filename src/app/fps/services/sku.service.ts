import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SkuInterface, SkuList, SaveResult} from '@app/fps/services/sku-interface';
import { ApiClientService } from '@app/fps/api-client.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { settings } from '../../../environments/environment';


@Injectable({providedIn: 'root'})

export class SkuService implements SkuInterface {

  private apiURL = settings.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    private apiClient: ApiClientService,
    private httpClient: HttpClient
    ) { }
  

  getList(pageItems, search_text, sort): Observable<any> {
    
    let query = 'sku?page_items=' + pageItems + '&search_text=' + search_text;

    if(sort && sort['field']!= null){
      query += '&field=' + sort.field + '&order=' + sort.order;
    }

    return this.apiClient.get<any>(query);    
  }

  getPage(url, pageItems, search_text){
    let query = '&page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get<any>(url + query,this.httpOptions);
  }

  saveSku(data: any): Observable<SaveResult> {
    return this.apiClient.post('sku/createDraft', data);
  }
  updateSku(data: any, id: string): Observable<SaveResult> {
    return this.apiClient.post('sku/update/' + id, data);
  }

  updateSkuPaymentMethod(data: any): Observable<SaveResult> {
    return this.apiClient.post('sku/UpdatePaymentMethod', data);
  }

  saveRates(data: any): Observable<SaveResult> {
    return this.apiClient.post('rate/store', data);
  }

  find(id): Observable<any> {
    console.log(id);
    return this.httpClient.get(this.apiURL + '/sku-details/' + id).pipe()
  }

}