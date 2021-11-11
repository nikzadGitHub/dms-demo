import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { settings } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClient {
  private baseUrl = settings.apiBaseUrl + '/dms/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string|String): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + path, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(response) {
    let errorMessage = '';
    if (response.error instanceof ErrorEvent) {
      errorMessage = response.error.message;
    } else {
      errorMessage = `Error Code: ${response.status}\nMessage: ${response.message}`;
    }
    return throwError(errorMessage);
  }
}
