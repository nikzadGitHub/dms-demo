import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { settings } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManagerViewReassignmentService {
  private apiURL = settings.apiBaseUrl;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
  constructor() { }



  // getAlReassignment(): Observable<any[]>{
  //   return this.httpClient.get<any[]>(this.apiURL + '/manager/opportunity-reassign/', this.httpOptions)
  // }
}
