import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { settings } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }
  constructor(private http:HttpClient) { }

  getPage(url,pageItems,search_text){
    let query = '&page_items=' + pageItems + '&search_text=' + search_text;
    return this.http.get(url + query,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  getAll(pageItems,search_text,sort): Observable<any[]> {
    let query = '/customer?page_items=' + pageItems + '&search_text=' + search_text;
    if(sort && sort['field']!= null){
      query += '&field=' + sort.field + '&order=' + sort.order;
    }
    return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
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

 getCustomerDetails(id): Observable<any[]> {
  let query = '/customer/' + id;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

getCustomerActivities(id): Observable<any[]> {
  let query = '/activity/?customer_id=' + id;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

getCustomerRelatedOpportunities(pageItems,company): Observable<any[]> {
  let query = '/opportunity/list?page='+ 1 + '&page_items='+ pageItems + '&company=' + 'PT. BORNEO MEDICAL SERVICES';
  // let query = '/opportunity/list?page='+ 1 + '&page_items='+ pageItems + '&company=' + company;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

getCustomerRelatedQuotes(pageItems,company): Observable<any[]> {
  let query = '/quote/?page='+ 1 + '&page_items='+ pageItems + '&company=' + 'PT. PELITA ANUGERAH';
  // let query = '/quote/?page='+ 1 + '&page_items='+ pageItems + '&company=' + company;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

getCustomerRelatedSOCI(pageItems,company): Observable<any[]> {
  let query = '/soci/?page='+ 1 + '&page_items='+ pageItems + '&company=' + 'RUMAH SAKIT KHUSUS DAERAH DADI PROVINSI SULAWESI SELATAN';
  // let query = '/soci/?page='+ 1 + '&page_items='+ pageItems + '&company=' + company;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

getCustomerRelatedAttachments(id): Observable<any[]> {
  let query = '/customer/attachments/' + id;
  // let query = '/customer/attachments/' + 2673;
  return this.http.get<any[]>(this.apiUrl + query,this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}
}
