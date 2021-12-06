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
  id: bigint;
  status: string;
  booking_no: string;
  branch: string;
  booking_reason: string;
  request_date: string;
  customer: string;
  preferred_date_of_delivery: string;
  preferred_date_of_collection: string;
  demo_duration: string;
  department: string;
  location: string;
  ship_to_contact_name: string;
  ship_to_contact_number: string;
  remarks: string;
  loan_start_date: string;
  loan_end_date: string;
  con_won:string;
  pdi_won:string;
  ins_won:string;
  trn_won:string;
  tnc_won:string;
  war_won:string;
  pdr_won:string;
  bme_booking_id:string;
}

export interface OpportunitySummary {
  customer: string;
  opportunity_id: string;
  initiator: string;
  opportunity_amount: string;
  opportunity_no: string;
  winning_probability: string;
}

export const emptyOpportunitySummary: OpportunitySummary = {
  customer: 'Unknown',
  opportunity_id: '',
  initiator: '',
  opportunity_amount: '',
  opportunity_no: '0',
  winning_probability: '',
};

export interface BookingEntity {
  status: BookingStatus;
  approvalList: ApprovalList | null;
  bookingDetailList: BookingDetail;
  opportunitySummary: OpportunitySummary | null;
  mainAsset: MainAsset | null
}

export type BookingEntityList = BookingEntity[];

export interface BookingEntityInterface {
  getEntity(bookingId: BigInt): Observable<BookingEntity>;
  // getApprovals(bookingId: BigInt): Observable<ApprovalList>;
  // getBookingDetail(bookingId: BigInt): Observable<BookingDetail>;
  // getOpportunitySummary(bookingId: BigInt): Observable<OpportunitySummary>;
  // getMainAsset(bookingId: BigInt): Observable<MainAsset>;
}