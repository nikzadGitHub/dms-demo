import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SystemConfig } from '../../config/system-config';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCountryUnit(countryCode: string): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/countries-units/" + countryCode).pipe();
  }
}

export interface Unit {
  id: string
  code: string,
  title: string,
  unit_category_id: number,
  is_active: boolean
}