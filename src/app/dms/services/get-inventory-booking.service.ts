import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
}) 
export class GetInventoryBookingService {

  constructor(private httpclient:HttpClient) { }
 
  getInventories() { 
    // console.log('hello, I am running');
    return this.httpclient.get('http://localhost:8000/api/dms/enventories');
  }  
}   
 

