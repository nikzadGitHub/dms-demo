import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClient } from './api-client.service';
import { BookingEntityInterface, ApprovalList, BookingEntity, BookingDetail, OpportunitySummary } from './booking-entity';
import { MainAsset } from './asset-entity';


@Injectable()
export class BookingEntityService implements BookingEntityInterface {

  constructor(private apiClient: ApiClient) { }

  getEntity(bookingId: BigInt): Observable<BookingEntity> {
    return this.apiClient.get<BookingEntity>('bookings/' + bookingId.toString());
  }

  getApprovals(bookingId: BigInt): Observable<ApprovalList> {
    return this.apiClient.get<ApprovalList>('bookings/'
      + bookingId.toString()
      + '/approvals');
  }

  getBookingDetail(bookingId: BigInt): Observable<BookingDetail> {
    return this.apiClient.get<BookingDetail>('bookings/' + bookingId.toString());
  }

  getOpportunitySummary(bookingId: BigInt): Observable<OpportunitySummary> {
    return this.apiClient.get<OpportunitySummary>('bookings/' + bookingId.toString() + '/opportunitySummary');
  }

  getMainAsset(bookingId: BigInt): Observable<MainAsset> {
    return this.apiClient.get<MainAsset>('bookings/' + bookingId.toString() + '/mainAsset');
  }

}
