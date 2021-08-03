import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
  
import { Quote } from './quote';
import { settings } from '../../environments/environment';
   
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
   
  private apiURL = settings.apiBaseUrl;
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.apiURL + '/quote')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<Quote> {
    return this.httpClient.get<Quote>(this.apiURL + '/quote/create')
    .pipe(
      tap((response: any) => {
        console.log("Success logging in: "+response.success);               
    }),
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<Quote> {
    return this.httpClient.get<Quote>(this.apiURL + '/quote/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, quote): Observable<Quote> {
    return this.httpClient.put<Quote>(this.apiURL + '/quote/' + id, JSON.stringify(quote), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Quote>(this.apiURL + '/quote/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  getPage(url){
    return this.httpClient.get(url,this.httpOptions)
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