import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { IconSetService } from "@coreui/icons-angular";
import { settings } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient, public iconSet: IconSetService) {}

  getQuery(url, pageItems = null): Observable<object> {
    let query = url;

    if (pageItems != null) {
      query += "?page_items=" + pageItems;
    }

    return this.httpClient.get(this.apiURL + query, this.httpOptions);
  }

  postQuery(url, req): Observable<object> {
    let query = url;

    // this.httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.httpClient.post(
      this.apiURL + query,
      JSON.stringify(req),
      this.httpOptions
    );
  }

  putQuery(url, req): Observable<Object> {
      console.log("req:", req);

    let query = url;
    return this.httpClient.put(
      this.apiURL + query,
      JSON.stringify(req),
      this.httpOptions
    );
  }

  getIconsView(prefix: string) {
    return Object.entries(this.iconSet.icons).filter((icon) => {
      return icon[0].startsWith(prefix);
    });
  }

  toKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
}
