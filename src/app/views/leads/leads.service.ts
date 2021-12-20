import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { settings } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LeadsService {
  private apiURL = settings.apiBaseUrl;
  public static leadErrorMessage = "";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(pageItems, search_text, sort): Observable<any[]> {
    let query = "/lead?page_items=" + pageItems + "&search_text=" + search_text;
    if (sort && sort["field"] != null) {
      query += "&field=" + sort.field + "&order=" + sort.order;
    }
    return this.httpClient
      .get<any[]>(this.apiURL + query, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getPage(url, pageItems, search_text) {
    let query = "&page_items=" + pageItems + "&search_text=" + search_text;
    return this.httpClient
      .get(url + query, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  store(data): Observable<any> {
    let body={
      company_name: data.company_name,
      contact_name: data.contact_name,
      department:data.department,
      email:data.email,
      mobile_number: data.mobile_number,
      office_number:data.office_number,
      address:data.address,
      postcode:data.postcode,
      state:data.state,
      country:data.country,
      prospect_type:data.prospect_type,
      source:data.source,
      other_source:data.other_source
  }
    
    return this.httpClient
      .post(this.apiURL + "/lead", body, this.httpOptions)
      .pipe(
        tap((response: any) => {
        }),
        catchError(this.errorHandler)
      );
  }

  update(data, id): Observable<any> {
    let body = {
      able_to_contact: data.able_to_contact,
      additional_notes: data.additional_notes,
      address: data.address,
      company_name: data.company_name,
      contact_name: data.contact_name,
      country: data.country,
      department: data.department,
      do_we_sell_these_product: data.do_we_sell_these_product,
      email: data.email,
      lead_owner: data.lead_owner,
      lead_status: data.lead_status,
      mobile_number: data.mobile_number,
      office_number: data.office_number,
      other_source: data.other_source,
      reason_for_disqualifying: data.reason_for_disqualifying,
      // postcode:data.postcode,
      products_thats_not_selling: data.products_thats_not_selling,
      remark: data.remark,
      source: data.source,
      state: data.state,
    };
    return this.httpClient
      .put(this.apiURL + "/lead/" + id, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  createProspect(id): Observable<any> {
    return this.httpClient
      .post(this.apiURL + "/lead/create-prospect", id, this.httpOptions)
      .pipe(
        tap((response: any) => {
        }),
        catchError(this.errorHandler)
      );
  }

  find(id): Observable<any> {
    return this.httpClient
      .get(this.apiURL + "/lead/" + id)
      .pipe(catchError(this.errorHandler));
  }

  getModificationLog(id): Observable<any> {
    return this.httpClient
      .get(this.apiURL + "/lead/modification-log/" + id)
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete(this.apiURL + "/lead/" + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  searchContact(contact): Observable<any> {
    return this.httpClient
      .get(this.apiURL + "/lead/contact?contact_name=" + contact)
      .pipe(catchError(this.errorHandler));
  }

  searchCompany(company): Observable<any> {
    return this.httpClient
      .get(this.apiURL + "/lead/customer?company_name=" + company)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = "";
    LeadsService.leadErrorMessage = "";
    LeadsService.leadErrorMessage = error?.error?.message || "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
