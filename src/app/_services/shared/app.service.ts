import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IconSetService } from '@coreui/icons-angular';
import { settings } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {  
    
    private apiURL = settings.apiBaseUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',            
        })
    }

    constructor(private httpClient: HttpClient) { }

    getQuery(url, pageItems = null): Observable<object> { 
        
        let query = url;

        if(pageItems != null){
            query += '?page_items=' + pageItems;
        }
        
        return this.httpClient.get(this.apiURL + query,this.httpOptions);
        
    }

    postQuery(url, req): Observable<object> {

        let query = url;

        // this.httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');

        return this.httpClient.post(this.apiURL + query, JSON.stringify(req), this.httpOptions);  
    }

} 