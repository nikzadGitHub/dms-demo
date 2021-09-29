import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { settings } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    private apiURL = settings.apiBaseUrl;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    }

    constructor(private httpClient: HttpClient) { }

    getSalesPerformance(selectedYear): Observable<any[]> {
      let query = '/dashboard/sales-performance?currency=RM&year=' + selectedYear

      return this.httpClient.get<any[]>(this.apiURL + query,this.httpOptions)
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
