import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserActivitiesService {
  private apiURL = settings.apiBaseUrl
  constructor(private httpClient: HttpClient) { }



  getActivity(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/activity')
   
  }

  getCumpanyDetails(text): Observable<any> {
    let authToken = localStorage.getItem('auth-token');
    return this.httpClient.get(this.apiURL + '/opportunity/get-customer?company_name='+text, {
      headers: {
        'Authorization': authToken,
      },
    })
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
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

 
  


}








