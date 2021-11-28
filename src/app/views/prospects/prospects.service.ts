import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { settings } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {
  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(pageItems,search_text): Observable<any[]> {
    let query = '/prospect?page_items=' + pageItems + '&search_text=' + search_text;
    // if(sort && sort['field']!= null){
    //   query += '&field=' + sort.field + '&order=' + sort.order;
    // }
    return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  store(data): Observable<any> {
    return this.httpClient.post(this.apiURL + '/prospect', data, this.httpOptions)
    .pipe(
      tap((response: any) => {
        console.log(response);
    }),
      catchError(this.errorHandler)
    )
  }

  update(data, id): Observable<any> {
    return this.httpClient.put(this.apiURL + '/prospect/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createProspect(id): Observable<any> {
    return this.httpClient.post(this.apiURL + '/prospect/create-prospect', id, this.httpOptions)
    .pipe(
      tap((response: any) => {
        console.log(response);
    }),
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<any> {
    console.log(id);
    return this.httpClient.get(this.apiURL + '/prospect/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getModificationLog(id): Observable<any> {
    return this.httpClient.get(this.apiURL + '/prospect/modification-log/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete(this.apiURL + '/prospect/' + id, this.httpOptions)
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