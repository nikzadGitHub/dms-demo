import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { settings } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ManagerViewService {
  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getPendingSOCI(pageItems, search_text, sort): Observable<Quote[]> {
    let query =
    "/soci/pending-list?page_items=" + pageItems + "&search_text=" + search_text;
    if (sort && sort["field"] != null) {
      query += "&field=" + sort.field + "&order=" + sort.order;
    }
    return this.httpClient
      .get<Quote[]>(this.apiURL + query, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
 
  getPendingQuotationApproval(pageItems, search_text, sort): Observable<Quote[]> {
    let query =
    "/quote/pending-approval-listing?page_items=" + pageItems + "&search_text=" + search_text;
    if (sort && sort["field"] != null) {
      query += "&field=" + sort.field + "&order=" + sort.order;
    }
    return this.httpClient
      .get<Quote[]>(this.apiURL + query, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  quotationApproval(id): Observable<object> {
    let body ={
      "quoteId": id
    }
    return this.httpClient.post(this.apiURL+"/quote/approval/",body, this.httpOptions);
  }

  quotationEscalate(id): Observable<object> {
    let body ={
      "id": id
    }
    return this.httpClient.post(this.apiURL+"/quote/escalate/",body, this.httpOptions);
  }

  quotationReject(id): Observable<object> {
    let body ={
      "quoteId": id
    }
    return this.httpClient.post(this.apiURL+"/quote/request-rejected",body, this.httpOptions);
  }
}

