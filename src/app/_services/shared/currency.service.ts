import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SystemConfig } from '../../config/system-config';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCurrencyList(): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/currencies-list").pipe();
  }

}