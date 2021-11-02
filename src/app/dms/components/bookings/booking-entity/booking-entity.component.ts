import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MockBookingEntityService } from '../../../services/mock-booking-entity.service';
import {
  Button as ApprovalButton, ButtonEvent as ApprovalButtonEvent
} from '../booking-approval/booking-approval.component';
import { ApprovalList, BookingDetail, BookingEntity, OpportunitySummary } from '../../../services/booking-entity';
import { BookingStatus, statusToNumber, statusFromNumber, statusToText, statusIncrement } from '../../../services/booking-status.enum';

@Component({
  selector: 'dms-booking-entity',
  templateUrl: './booking-entity.component.html',
  styleUrls: ['./booking-entity.component.scss']
})
export class BookingEntityComponent implements OnInit, OnDestroy {
  private routeListener: Subscription;
  private apiListener: Subscription;
  private _status = BookingStatus.unknown;

  bookingId: BigInt = BigInt(0);
  statusText: string = 'Unknown';
  approvalButtons: ApprovalButton[] = [];
  approvalList: ApprovalList = [];
  isConfirmed: boolean = false;
  bookingDetailList: BookingDetail;
  opportunitySummary: OpportunitySummary;

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
      if (id != BigInt(0)) {
        this.apiListener = this.api.getEntity(id)
          .subscribe((response) => {
            if (response as BookingEntity) {
              this.status = response.status;
              this.approvalList = response.approvalList;
              this.bookingDetailList = response.bookingDetailList
              this.opportunitySummary = response.opportunitySummary
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

  public get status(): BookingStatus {
    return this._status;
  }
  public set status(value: BookingStatus) {
    this._status = value;
    this.statusText = statusToText(value);
    // Defaults.
    this.isConfirmed = false;
    this.approvalButtons = [];
    // Update buttons.
    switch(value) {
    case BookingStatus.draft:
      this.approvalButtons = [{ title: 'Submit for Approval', id: 0 }];
      break;
    case BookingStatus.submitted:
      this.approvalButtons = [
        { title: 'MSC Reviewed', id: 0 },
        { title: 'Decline', id: 1 }
      ];
      break;
    case BookingStatus.reviewed:
      this.approvalButtons = [
        { title: 'Endorese', id: 0 },
        { title: 'Decline', id: 1 }
      ];
      break;
    case BookingStatus.endorced:
      this.approvalButtons = [
        { title: 'Approve', id: 0 },
        { title: 'Conflict', id: 1 },
        { title: 'Decline', id: 2 },
      ];
      break;
    case BookingStatus.accepted:
      this.approvalButtons = [
        { title: 'Confirm', id: 0 },
        { title: 'Decline', id: 1 },
      ];
      break;
    case BookingStatus.confirmed:
      this.isConfirmed = true;
      break;
    }
  }

  onApprovalAction(event: ApprovalButtonEvent) {
    // TODO: do actual approval API requests (instead below demo).
    if (event.index == 0) {
      const lastStatus = this.status;
      this.status = statusIncrement(this.status);
      console.log('Status changed from ', lastStatus, 'to', lastStatus);
    }
    console.log('Approval onAction', event);
  }
}
