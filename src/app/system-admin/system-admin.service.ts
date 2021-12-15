import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { settings } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SystemAdminService {
  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getQuery(url): Observable<object> {
    let query = url;

    return this.httpClient.get(this.apiURL + query, this.httpOptions);
  }

  postQuery(url, req): Observable<object> {
    let query = url;

    return this.httpClient.post(
      this.apiURL + query,
      JSON.stringify(req),
      this.httpOptions
    );
  }

  putQuery(url, req): Observable<object> {
    let query = url;
    return this.httpClient.put(
      this.apiURL + query,
      JSON.stringify(req),
      this.httpOptions
    );
  }

  deleteQuery(url): Observable<object> {
    let query = url;
    return this.httpClient.delete(
      this.apiURL + query,
      // JSON.stringify(req),
      this.httpOptions
    );
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
  createUnit(req): Observable<object> {
    return this.httpClient.post(
      this.apiURL + '/units',
      JSON.stringify(req),
      this.httpOptions
    )
  }
  updateUnit(req): Observable<object> {
    return this.httpClient.put(
      this.apiURL + '/units',
      JSON.stringify(req),
      this.httpOptions
    )
  }
  getUnits(): Observable<object> {
    return this.httpClient.get(
      this.apiURL + '/units',
      this.httpOptions
    )
  }
  getSingleUnit(id): Observable<object> {
    return this.httpClient.get(
      this.apiURL + '/units/'+id+'/edit',
      this.httpOptions
    )
  }
  getAllCompamanies(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.apiURL + "/data-area-id/all")
      .pipe(catchError(this.errorHandler));
  }
}
