import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { settings } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfstService {

  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(pageItems,search_text): Observable<any[]> {
    let query = '/opportunity-funding-status?page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get<any[]>(this.apiURL + query, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id): Observable<any> {
    return this.httpClient.get(this.apiURL + '/opportunity-funding-status/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  store(data): Observable<any> {
    return this.httpClient.post(this.apiURL + '/opportunity-funding-status', data, this.httpOptions)
    .pipe(
      tap((response: any) => {
        console.log(response);        
    }),
      catchError(this.errorHandler)
    )
  }

  update(data, id): Observable<any> {
    return this.httpClient.put(this.apiURL + '/opportunity-funding-status/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<any>(this.apiURL + '/opportunity-funding-status/' + id, this.httpOptions)
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
