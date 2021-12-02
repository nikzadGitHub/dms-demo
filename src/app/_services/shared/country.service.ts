import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SystemConfig } from '../../config/system-config';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCountry(): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/countries-list").pipe();
  }

}

export interface Country {
  code: string,
  iso3: string,
  dail_code: string,
  currency_code: string,
  official_name: string,
  region_name: string,
  languages: string,
  is_active: boolean
}