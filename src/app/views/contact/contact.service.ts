import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { settings } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllContactData(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiURL + '/contacts', this.httpOptions)
  }
  getAll(pageItems,search_text): Observable<any[]> {
    let query = '/contacts?page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get<any[]>(this.apiURL + query, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id): Observable<any> {
    return this.httpClient.get(this.apiURL + '/contacts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  store(data): Observable<any> {
    return this.httpClient.post(this.apiURL + '/contacts', data, this.httpOptions)
    .pipe(
      tap((response: any) => {
    }),
      catchError(this.errorHandler)
    )
  }





  update(data, id): Observable<any> {
    return this.httpClient.put(this.apiURL + '/contacts/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getContactPreferences(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/contacts/dropdown/contact-preference')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getDepartment(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/contacts/dropdown/department')
    .pipe(
      catchError(this.errorHandler)
    )
  }




  // getSolution(): Observable<any> {
  //   return this.httpClient.get(this.apiURL+'/contacts/dropdown/solution')
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }


  getCareAreas(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/contacts/dropdown/care-area')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getContactType(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/contacts/dropdown/contact-type')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<any>(this.apiURL + '/contacts/' + id, this.httpOptions)
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
