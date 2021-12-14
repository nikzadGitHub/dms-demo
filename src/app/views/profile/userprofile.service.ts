import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { settings } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private apiURL = settings.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private httpClient: HttpClient) { }


  uploadSignatureImage(signature): Observable<any> {
    // let data = {
    //   signature: signature
    // }
    let authToken = localStorage.getItem('auth-token');
    return this.httpClient.post(this.apiURL + '/user/upload-signature',signature, {
      headers: {
        'Content-Type':'file',
        'Authorization': authToken
      },
    })
    .pipe(
      tap((response: any) => {
        console.log(response);               
    }),
      catchError(this.errorHandler)
    )
  }

  getSignatureImage(): Observable<any> {
    let authToken = localStorage.getItem('auth-token');
    return this.httpClient.get(this.apiURL + '/user/get-signature-web', {
      headers: {
        'Authorization': authToken,
        // responseType: 'blob'
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
