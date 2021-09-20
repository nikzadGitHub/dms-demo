import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { settings } from '../../environments/environment';
import { Soci } from './soci';

@Injectable({
  providedIn: 'root'
})
export class SociService {

  private apiURL = settings.apiBaseUrl;
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(pageItems,search_text,sort): Observable<Soci[]> {
    let param: any;
    if(sort && sort['field']!= null){
      param = {page_items: pageItems, search_text:search_text, field:sort.field, order:sort.order};
    } else {
      param = {page_items: pageItems, search_text:search_text};
    }
    return this.httpClient.get<Soci[]>(this.apiURL + '/soci',{params:param})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getFilteredQuote(filter){
    filter = filter == '' ? 0 : filter; 
    return this.httpClient.get(this.apiURL + '/soci/filtered/' + filter,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  store(formData:any){
    // return this.httpClient.post(this.apiURL + '/soci', formData,{headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })})
    return this.httpClient.post(this.apiURL + '/soci', formData,{headers: new HttpHeaders({ 'Content-Type': 'file', 'Accept': 'file' })})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  edit(id:number){
    return this.httpClient.get(this.apiURL + '/soci/' + id + '/edit',this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  saveColumnOrder(columnOrder,type): Observable<any>{
    let param = {'columnOrder':columnOrder,'type':type}
    return this.httpClient.post(this.apiURL + '/soci/column-order',param)
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
