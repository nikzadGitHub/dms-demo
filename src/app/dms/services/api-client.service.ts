import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { settings } from '../../../environments/environment';
import {ApiJsonResponse} from './api-client';

/**
 * Manages requests to Backend's API.
 */
@Injectable({
  // FIXME: not even a single module-service should be provided directly in Root-App.
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

  /**
   * Sends a request with Get-method to Backend's API.
   *
   * @param path URL-encoded (Sub-route and optional parameters).
   */
  get<T>(path: string|String): Observable<T> {
    return this.map<T>(
      this.httpClient.get<ApiJsonResponse>(this.baseUrl + path, this.httpOptions)
    );
  }

  /**
   * Sends a request with Post-method to Backend's API.
   */
  post<T>(path: string|String, data: any) : Observable<T> {
    return this.map<T>(
      this.httpClient.post<ApiJsonResponse>(this.baseUrl + path, data, this.httpOptions)
    );
  }

  /**
   * Sends a request with Put-method to Backend's API.
   */
   put<T>(path: string|String, data: any) : Observable<T> {
    return this.map<T>(
      this.httpClient.put<ApiJsonResponse>(this.baseUrl + path, data, this.httpOptions)
    );
  }

  /**
   * Casts input {@link ApiJsonResponse} to given type {@link T}.
   */
  map<T>(json: Observable<ApiJsonResponse>): Observable<T> {
    return json.pipe(
      catchError(this.errorHandler),
      map((e) => {
        return e.data;
      })
    );
  }

  /**
   * Handler for any {@link HttpClient} failures.
   */
  errorHandler = (response) => {
    let errorMessage = '';
    if (response.error instanceof ErrorEvent) {
      errorMessage = response.error.message;
    } else {
      errorMessage = `Error Code: ${response.status}\nMessage: ${response.message}`;
    }
    return throwError(errorMessage);
  }
}
