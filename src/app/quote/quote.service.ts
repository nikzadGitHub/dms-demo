import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
  
import { Quote } from './quote';
import { settings } from '../../environments/environment';
   
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
   
  private apiURL = settings.apiBaseUrl;
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(pageItems,search_text,sort): Observable<Quote[]> {
    let query = '/quote?page_items=' + pageItems + '&search_text=' + search_text;
    if(sort && sort['field']!= null){
      query += '&field=' + sort.field + '&order=' + sort.order;
    }
    return this.httpClient.get<Quote[]>(this.apiURL + query,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  create(data_area_id): Observable<any>{
    let param = {dataAreaId:data_area_id};
    return this.httpClient.get(this.apiURL + '/quote/create',{params:param})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  storeDetails(quote): Observable<any> {
    console.log(quote);
    return this.httpClient.post(this.apiURL + '/quote', quote, this.httpOptions)
    .pipe(
      tap((response: any) => {
        console.log(response);               
    }),
      catchError(this.errorHandler)
    )
  }  

  storeProducts(quote): Observable<any> {
    console.log(quote);
    return this.httpClient.post(this.apiURL + '/quote/products', quote, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<any> {
    return this.httpClient.get(this.apiURL + '/quote/' + id + '/edit')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(quote, id): Observable<any> {
    return this.httpClient.put(this.apiURL + '/quote/' + id, JSON.stringify(quote), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Quote>(this.apiURL + '/quote/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  getPage(pageNo,pageItems,search_text,sort){
    let url = this.apiURL + '/quote?page='+ pageNo + '&page_items=' + pageItems + '&search_text=' + search_text;
    if(sort && sort['field']!= null){
      url += '&field=' + sort.field + '&order=' + sort.order;
    }
    return this.httpClient.get(url,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getProducts(){
    return this.httpClient.get(this.apiURL + '/quote/products',this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getFilteredProducts(filter){
    filter = filter == '' ? 0 : filter; 
    return this.httpClient.get(this.apiURL + '/quote/products/filtered/' + filter,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getCompany(id){
    let param = {id:id};
    return this.httpClient.get(this.apiURL + '/quote/company/',{params:param})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  quoteApproval(quoteId,type): Observable<any>{
    return this.httpClient.post(this.apiURL + '/quote/'+ type,{quoteId:quoteId})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getQuotationPendingApproval(){
    return this.httpClient.get(this.apiURL + '/quote/approval',this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  getAllRevision(pageItems,search_text): Observable<Quote[]> {
    let param = {page_items:pageItems,search_text:search_text};
    // let query = '/quote-revision?page_items=' + pageItems + '&search_text=' + search_text;
    return this.httpClient.get<Quote[]>(this.apiURL + '/quote-revision',{params:param})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getQuotationRevision(id,revNumber){
    return this.httpClient.get(this.apiURL + '/quote/revision/'+ id + '/' + revNumber)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  cancelQuote(id,remarks): Observable<any>{
    let param = {id:id,remarks:remarks}
    return this.httpClient.post(this.apiURL + '/quote/cancel-quote', param)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  saveColumnOrder(columnOrder,type): Observable<any>{
    let param = {'columnOrder':columnOrder,'type':type}
    return this.httpClient.post(this.apiURL + '/quote/column-order',param)
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