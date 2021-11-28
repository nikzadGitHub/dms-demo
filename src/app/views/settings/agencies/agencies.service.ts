import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Agencies } from './agencies';
import { settings } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(pageItems,search_text): Observable<Agencies[]> {
    let query = '/agency?page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get<Agencies[]>(this.apiURL + query,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(data_area_id): Observable<any>{
    let param = {dataAreaId:data_area_id};
    return this.httpClient.get(this.apiURL + '/agency/create',{params:param})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  store(agencies): Observable<any> {
    console.log(agencies);
    return this.httpClient.post(this.apiURL + '/agency', agencies, this.httpOptions)
    .pipe(
      tap((response: any) => {
        console.log(response);
    }),
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<any> {
    console.log(id);
    return this.httpClient.get(this.apiURL + '/agency/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(agencies, id): Observable<any> {
    return this.httpClient.put(this.apiURL + '/agency/' + id, JSON.stringify(agencies), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Agencies>(this.apiURL + '/agency/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPage(url,pageItems,search_text){
    let query = '&page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get(url + query,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getCareArea(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/data-area-id/all')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
