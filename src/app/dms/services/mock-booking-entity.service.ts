import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApprovalList, BookingEntityInterface, BookingEntity, BookingEntityList } from './booking-entity';
import { BookingStatus } from './booking-status.enum';

const mockApproval: ApprovalList = [
  {
    description: 'MSC SKU & accessories review',
    status: 'Pending',
    user_list: [
      { name: 'Mark', id: BigInt(700) }
    ],
  }, {
    description: 'Country MD endorsement for > 14 days deployment',
    status: 'Pending',
    user_list: [
      { name: 'John', id: BigInt(800) }
    ],
  }, {
    description: 'Demo Coordinator accept booking',
    status: 'Pending',
    user_list: [
      { name: 'Kelly', id: BigInt(120) },
      { name: 'Reesha', id: BigInt(130) }
    ],
  }, {
    description: 'Demo Coordinator confirm booking',
    status: 'Pending',
    user_list: [
      { name: 'Kelly', id: BigInt(120) },
      { name: 'Reesha', id: BigInt(130) }
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockBookingEntityService implements BookingEntityInterface {
  private mockData: BookingEntityList = [
    {
      status: BookingStatus.draft,
      approvalList: mockApproval,
    }
  ];

  constructor() { }

  getEntity(bookingId: BigInt): Observable<BookingEntity> {
    const data = this.mockData[+bookingId.toString()];
    return of(data || this.mockData[0]);
  }

  getApprovals(bookingId: BigInt): Observable<ApprovalList> {
    return this.getEntity(bookingId).pipe(map((e) => {
      return e.approvalList;
    }));
  }
}
