import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClient } from './api-client.service';
import { BookingEntityInterface, ApprovalList, BookingEntity, BookingDetail, OpportunitySummary } from './booking-entity';
import { MainAsset } from './asset-entity';


@Injectable({
  providedIn: 'root'
})
export class BookingEntityService implements BookingEntityInterface {

  constructor(private apiClient: ApiClient) { }

  getEntity(bookingId: BigInt): Observable<BookingEntity> {
    return this.apiClient.get<BookingEntity>('booking/show/' + bookingId.toString());
  }

  updateStatus(data: any): Observable<any> {
    return this.apiClient.post<any>('booking/status/update', data);
  }

}
