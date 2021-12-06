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
import { BookingEntityService } from '../../../services/booking-entity.service';

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

  status: any;
  access: boolean;
  statusText: string = 'Draft';
  bookingId: BigInt = BigInt(0);
  approvalList: ApprovalList = [];
  bookingDetailList: BookingDetail;
  opportunitySummary: OpportunitySummary;
  mainAsset: MainAsset;


  constructor(
    private route: ActivatedRoute,
    private api: BookingEntityService,
  ) { }

  ngOnInit(): void {
    this.routeListener = this.route.params.subscribe(paramList => {
      if (this.apiListener) {
        this.apiListener.unsubscribe();
      }
      let param: string = paramList['id'] + '';
      const id = BigInt(param);
      this.bookingId = id;
      // Updates anything related to ID.
      if (id !== BigInt(0)) {
        this.apiListener = this.api.getEntity(id)
          .subscribe((response) => {
            if (response as BookingEntity) {
              this.status = response.status
              this.approvalList = response.approvalList;
              this.bookingDetailList = response.bookingDetailList;
              this.bookingDetailList.status = this.statusName(this.bookingDetailList.status);
              this.opportunitySummary = response.opportunitySummary;
              this.mainAsset = response.mainAsset;
              this.access = response.access;
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

  statusName(status){
    const statusList =  [
      'Draft', 
      '1 Raising Booking Request - Draft',
      '2 Raising Booking Request - Submitted',
      '3 Raising Booking Request - MSC Reviewed',
      '4 Raising Booking Request - conflict',
      '5 Raising Booking Request - declined',
      '6 Raising Booking Request - Provisionally Accepted',
      '7 Raising Booking Request - Confirmed'
    ]
    if(status != '' && status != null){
      return statusList[status];
    }
    return statusList[0];
  }
}
