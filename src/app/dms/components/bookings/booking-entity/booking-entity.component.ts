import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MockBookingEntityService } from '../../../services/mock-booking-entity.service';
import {
  ButtonEvent as ApprovalButtonEvent
} from '../booking-approval/booking-approval.component';
import { ApprovalList, BookingDetail, BookingEntity, OpportunitySummary } from '../../../services/booking-entity';
import { BookingStatus, statusIncrement } from '../../../services/booking-status.enum';
import { MainAsset } from '../../../services/asset-entity';

/**
 * Provides View for single Booking-Entity (in Demo-Bookings table).
 * @class
 */
@Component({
  selector: 'dms-booking-entity',
  templateUrl: './booking-entity.component.html',
  styleUrls: ['./booking-entity.component.scss']
})
export class BookingEntityComponent implements OnInit, OnDestroy {
  private routeListener: Subscription;
  private apiListener: Subscription;

  status = BookingStatus.unknown;
  bookingId: BigInt = BigInt(0);
  approvalList: ApprovalList = [];
  bookingDetailList: BookingDetail;
  opportunitySummary: OpportunitySummary;
  mainAsset: MainAsset;


  constructor(
    private route: ActivatedRoute,
    private api: MockBookingEntityService,
  ) { }

  ngOnInit(): void {
    this.routeListener = this.route.params.subscribe(paramList => {
      if (this.apiListener) {
        this.apiListener.unsubscribe();
      }
      let param: string = paramList['id'] + '';
      if (param.toLowerCase().startsWith('bk-')) {
        param = param.substring(3);
      }
      const id = BigInt(param);
      this.bookingId = id;
      // Updates anything related to ID.
      if (id !== BigInt(0)) {
        this.apiListener = this.api.getEntity(id)
          .subscribe((response) => {
            if (response as BookingEntity) {
              this.status = response.status;
              this.approvalList = response.approvalList;
              this.bookingDetailList = response.bookingDetailList;
              this.opportunitySummary = response.opportunitySummary;
              this.mainAsset = response.mainAsset;
            }
            console.log('api: entity', this.bookingId, response);
          });
      }
    });
  }

  ngOnDestroy() {
    this.routeListener.unsubscribe();
    if (this.apiListener) {
      this.apiListener.unsubscribe();
    }
  }

  onApprovalAction(event: ApprovalButtonEvent) {
    // TODO: do actual approval API requests (instead below demo).
    if (event.index === 0) {
      const lastStatus = this.status;
      this.status = statusIncrement(this.status);
      console.log('Status changed from ', lastStatus, 'to', this.status);
    }
    console.log('Approval onAction', event);
  }
}
