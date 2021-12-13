import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserActivitiesService {
  private apiURL = settings.apiBaseUrl
  constructor(private httpClient: HttpClient) { }



  getActivity(): Observable<any> {
    return this.httpClient.get(this.apiURL+'/activity')
   
  }
  // getCreatelist(): Observable<any> {
  //   return this.httpClient.get(this.apiURL+'/activity')


 
  


}








