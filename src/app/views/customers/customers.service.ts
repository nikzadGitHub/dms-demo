import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { settings } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = settings.apiBaseUrl;
  constructor(private http:HttpClient) { }
  getCustomerData(){
    return this.http.get(this.apiUrl+'/customers')
  }
}
