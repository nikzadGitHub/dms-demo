import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { settings } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesTargetSetupService {
  private apiURL = settings.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCountryList() {
    let query = '/countries-list';

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getUnitList(countryCode): Observable<any> {
    let query = '/countries-units/' + countryCode;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getFssList(countryCode, unitId): Observable<any> {
    let query = '/sales-target/fss-by-unit-country/' + countryCode + '/' + unitId;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getTeamLeadList(countryCode, unitId): Observable<any> {
    let query = '/sales-target/team-lead-by-unit-country/' + countryCode + '/' + unitId;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getOpcPicList(countryCode, unitId): Observable<any> {
    let query = '/sales-target/pic-by-unit-country/' + countryCode + '/' + unitId;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getClassList(countryCode): Observable<any> {
    let query = '/sales-target/class/' + countryCode;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getDimensionLevelList(countryCode): Observable<any> {
    let query = '/sales-target/dimension-level/' + countryCode;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getDimensionDescList(countryCode, levelId): Observable<any> {
    let query = '/sales-target/dimension-description/'+ countryCode + '/' + levelId;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getQuarterStartMonth(countryCode,year): Observable<any> {
    let query = '/sales-target/first-quarter/' + countryCode + '/' + year;

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  getSalesTargetData(): Observable<any> {
    let query = '/sales-target';

    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    );
  }

  saveSalesTargetSetupData(data) {
    let query = '/sales-target';    
    return this.httpClient.post<any[]>(this.apiURL + query, data, this.httpOptions)
      .pipe(
        tap((response: any) => {
          console.log(response);
      }),
        catchError(this.errorHandler)
      )
  }

  updateSalesTargetSetupData(id, data) {
    let query = '/sales-target/' + id;

    return this.httpClient.post<any[]>(this.apiURL + query, data, this.httpOptions)
      .pipe(
        tap((response: any) => {
          console.log(response);
      }),
        catchError(this.errorHandler)
      )
  }

  deleteSalesTargetSetupData(id) {
    let query = '/sales-target/' + id;

    return this.httpClient.delete<any[]>(this.apiURL + query, this.httpOptions)
      .pipe(
        tap((response: any) => {
          console.log(response);
      }),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
