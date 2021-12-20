import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BookingInterface, BookingList, SaveResult} from './booking.interface';
import { ApiClient } from '../../../services/api-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService implements BookingInterface {

  constructor(private apiClient: ApiClient) { }

  getList(): Observable<BookingList> {
    return this.apiClient.get<BookingList>('booking');
  }

  getListSearch(data: any): Observable<BookingList> {
    let params = (new URLSearchParams({search: data})).toString();
    return this.apiClient.get<BookingList>('booking/search?'+ params);
  }

  create(data: any): Observable<SaveResult> {
    return this.apiClient.post('booking/createDraft', data);
  }

  updateBooking(data: any, id: any): Observable<SaveResult> {
    return this.apiClient.put('booking/update/' + id, data);
  }
}
