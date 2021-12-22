import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserActivitiesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
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

    }),
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

  createActivity(id,data): Observable<any> {
    let authToken = localStorage.getItem('auth-token');
    let body = {
      "customer_id": id,
      "activities": [
          {
              "subject": "subject",
              "due_date": data.activityDueDate,
              "description": data.activityDesc,
              "type": data.activityType,
              "status": data.activityStatus,
              "completion_date": data.activityCompletionDate,
              "remark": data.activityRemarks,
              "is_open": "1"
          }
      ]
  }
    return this.httpClient.post(this.apiURL + '/activity/',body, {
      headers: {
        'Authorization': authToken,
      },
    })
    .pipe(
      tap((response: any) => {

      }),
      catchError(this.errorHandler)
    )
  }


  updateActivity(id,data): Observable<any> {
    let body ={
      customer_id: 1,
      completion_date: data.activityCompletionDate,
      description: data.activityDesc,
      due_date: data.activityDueDate,
      remark: data.activityRemarks,
      status: data.activityStatus,
      activity_type: data.activityType
  }
    let authToken = localStorage.getItem('auth-token');
    return this.httpClient.put(this.apiURL + '/activity/'+ id, body,{
      headers: {
        'Authorization': authToken,
      },
    })
    .pipe(
      tap((response: any) => {
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








