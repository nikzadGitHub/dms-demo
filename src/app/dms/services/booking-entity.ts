import { Observable } from 'rxjs';

import { BookingStatus } from './booking-status.enum';
import { MainAsset } from './asset-entity';


export interface UserInfo {
  name: string;
  id: BigInt;
}

export interface ApprovalEntity {
  description: string;
  status: string;
  user_list: UserInfo[];
}
export type ApprovalList = ApprovalEntity[];

export interface BookingDetail {
  status: string;
  status_request_date: string;
  code: string;
  branch: string;
  booking_reason: string;
  request_date: string;
  customer: string;
  preferred_date_of_elivery: string;
  preferred_date_of_collection: string;
  demo_duration: string;
  department: string;
  shipment_to_contact_name: string;
  ship_to_contact_number: string;
  remarks: string;
  loan_start_date: string;
  loan_end_date: string;
}

export interface OpportunitySummary {
  customer: string;
  opportunity_id: string;
  initiator: string;
  opportunity_amount: string;
  opportunity_no: string;
  winning_probability: string;
}

export interface BookingEntity {
  status: BookingStatus;
  approvalList: ApprovalList;
  bookingDetailList: BookingDetail;
  opportunitySummary: OpportunitySummary;
  mainAsset: MainAsset
}

export type BookingEntityList = BookingEntity[];

export interface BookingEntityInterface {
  getEntity(bookingId: BigInt): Observable<BookingEntity>;
  getApprovals(bookingId: BigInt): Observable<ApprovalList>;
  getBookingDetail(bookingId: BigInt): Observable<BookingDetail>;
  getOpportunitySummary(bookingId: BigInt): Observable<OpportunitySummary>;
  getMainAsset(bookingId: BigInt): Observable<MainAsset>;
}
