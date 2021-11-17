import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ApprovalList, BookingEntityInterface, BookingEntity, BookingEntityList,
  BookingDetail, OpportunitySummary
} from './booking-entity';
import { BookingStatus } from './booking-status.enum';
import { CompatibleAccessories, Consumables, Main, MainAsset, PackingDuringShipment, PeripheralAccessories } from './asset-entity';


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
    code: 'BK-00992',
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
    loan_end_date: ""
};

const mockOpportunitySummary: OpportunitySummary = {
  customer: "Parkway Singapore",
  opportunity_id: "00123456",
  initiator: "Jane Doe (BK-0092)",
  opportunity_amount: "35,000.00",
  opportunity_no: "123567.01",
  winning_probability: "65%"
};

const mockMain: Main[] = [
  {
    id: BigInt(1),
    name: 'Product 1',
    sku: 'ZY2332',
    quantity: 1,
    uom: 'pc',
    availability: '-',
    expected_sale_price: 80000.00,
    serial_no: null,
    available_quantity: 1,
    cost: 80000.00
  }
];

const mockCompatibleAccessories: CompatibleAccessories = [
  {
    id: BigInt(1),
    name: 'Product 1',
    sku: 'ZY2332',
    quantity: 1,
    uom: 'pc',
    availability: '-',
    expected_sale_price: 80000.00,
    serial_no: null,
    available_quantity: 1,
    cost: 80000.00
  }
];

const mockPeripheralAccessories: PeripheralAccessories = [
  {
    id: BigInt(1),
    name: 'Product 1',
    sku: 'ZY2332',
    quantity: 1,
    uom: 'pc',
    availability: '-',
    expected_sale_price: 80000.00,
    available_quantity: 1,
    cost: 80000.00
  }
];

const mockConsumables: Consumables = [
  {
    id: BigInt(1),
    name: 'Product 1',
    sku: 'ZY2332',
    quantity: 1,
    uom: 'pc',
    availability: '-',
    expected_sale_price: 80000.00,
    available_quantity: 1,
    cost: 80000.00
  }
];

const mockPackingDuringShipment: PackingDuringShipment = [
  {
    id: BigInt(1),
    name: 'Product 1',
    sku: 'ZY2332',
    quantity: 1,
    uom: 'pc',
    availability: '-',
    expected_sale_price: 80000.00,
    available_quantity: 1,
    cost: 80000.00
  }
];


const mockMainAsset: MainAsset = {
  main: mockMain,
  compatibles: mockCompatibleAccessories,
  peripherals: mockPeripheralAccessories,
  consumables: mockConsumables,
  packing: mockPackingDuringShipment,
  accessories: null
};


@Injectable()
export class MockBookingEntityService implements BookingEntityInterface {
  public mockData: BookingEntityList = [
    {
      status: BookingStatus.draft,
      approvalList: mockApproval,
      bookingDetailList: mockBookingDetail,
      opportunitySummary: mockOpportunitySummary,
      mainAsset: mockMainAsset
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

  getMainAsset(bookingId: BigInt): Observable<MainAsset> {
    return this.getEntity(bookingId).pipe(map((e) => {
      return e.mainAsset;
    }));
  }
}
