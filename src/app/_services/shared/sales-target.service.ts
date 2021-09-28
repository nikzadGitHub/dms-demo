import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SystemConfig } from '../../config/system-config';

@Injectable({
  providedIn: 'root'
})
export class SalesTargetService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSalesTargetByUnit(unitUuid: string): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/sales-target/byunit/" + unitUuid).pipe();
  }

  getSalesTargetOrgChartByCountry(countryCode: string): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/sales-target/orgchart/" + countryCode).pipe();
  }
}

// export interface Country {
//   code: string,
//   iso3: string,
//   dail_code: string,
//   currency_code: string,
//   official_name: string,
//   region_name: string,
//   languages: string,
//   is_active: boolean
// }