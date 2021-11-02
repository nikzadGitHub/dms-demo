import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ApprovalList, BookingEntityInterface, BookingEntity, BookingEntityList,
  BookingDetail, OpportunitySummary
} from './booking-entity';
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

const mockBookingDetail: BookingDetail = {
    status: "2 Raising Booking Request - Submitted",
    status_request_date: "10/1/2021",
    booking_no: "BK-00992",
    branch: "XXXX",
    booking_reason: "Demo",
    request_date: "9/3/2021",
    customer: "Parkway Singapore",
    preferred_date_of_elivery: "10/13/2021",
    preferred_date_of_collection: "12/13/2021",
    demo_duration: "2 months",
    department: "Ward 1, ",
    shipment_to_contact_name: "XXXXXX",
    ship_to_contact_number: "XXXXXXXX",
    remarks: "",
    loan_start_date: "",
    loan_end_date: "",
};

const mockOpportunitySummary: OpportunitySummary = {
  customer: "Parkway Singapore",
  opportunity_id: "00123456",
  initiator: "Jane Doe (BK-0092)",
  opportunity_amount: "35,000.00",
  opportunity_no: "123567.01",
  winning_probability: "65%",
};

@Injectable({
  providedIn: 'root'
})
export class MockBookingEntityService implements BookingEntityInterface {
  public mockData: BookingEntityList = [
    {
      status: BookingStatus.draft,
      approvalList: mockApproval,
      bookingDetailList: mockBookingDetail,
      opportunitySummary: mockOpportunitySummary,
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

  getBookingDetail(bookingId: BigInt): Observable<BookingDetail> {
    return this.getEntity(bookingId).pipe(map((e) => {
      return e.bookingDetailList;
    }));
  }

  getOpportunitySummary(bookingId: BigInt): Observable<OpportunitySummary> {
    return this.getEntity(bookingId).pipe(map((e) => {
      return e.opportunitySummary;
    }));
  }
}
