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

  getList(page, pageItems): Observable<BookingList> {
    return this.apiClient.get<BookingList>('booking?page=' + page + '&pageItems=' + pageItems);
  }

  getListSearch(data: any, page, pageItems): Observable<BookingList> {
    let params = (new URLSearchParams({search: data})).toString();
    return this.apiClient.get<BookingList>('booking/search?'+ params + '&page=' + page + '&pageItems=' + pageItems);
  }

  create(data: any): Observable<SaveResult> {
    return this.apiClient.post('booking/createDraft', data);
  }

  updateBooking(data: any, id: any): Observable<SaveResult> {
    return this.apiClient.put('booking/update/' + id, data);
  }

  createFromOpp(opp_id: number , data: string = 'booking f opportunity'): Observable<SaveResult> {
    return this.apiClient.post('booking/createDraft?opp_id='+opp_id, data);
  }

  getListForOpp(opp_id: number): Observable<BookingList> {
    return this.apiClient.get<BookingList>('booking?opp_id='+opp_id);
  }

}
