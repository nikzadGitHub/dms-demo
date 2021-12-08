import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  constructor(private httpClient: HttpClient) {}

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
}
