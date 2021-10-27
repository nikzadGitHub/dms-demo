import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BookingInterface, BookingList } from './booking.interface';
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
}
