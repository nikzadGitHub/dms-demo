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
  customer_id: bigint|null;
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
  bme_con_req: number;
  bme_pdi_re: number;
  bme_ins_req: number;
  bme_tnc_won: number;
  bme_trn_req: number;
  bme_war_req: number;
  bme_pdr_req: number;
  priority: string|null,
  probability: string|null,
  initiator: string|null,
  is_competitor_in_demo: boolean|null,
  squence_of_demo: string|null,
  opportunity_code: string|null,
  selling_points: string|null,
  customer_feedback: string|null,
  pain_points: string|null,
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
  mainAsset: MainAsset | null;
  access: boolean;
}

export type BookingEntityList = BookingEntity[];

export interface BookingEntityInterface {
  getEntity(bookingId: BigInt): Observable<BookingEntity>;
  // getApprovals(bookingId: BigInt): Observable<ApprovalList>;
  // getBookingDetail(bookingId: BigInt): Observable<BookingDetail>;
  // getOpportunity(bookingId: BigInt): Observable<bookingOpportunity>;
  // getOpportunitySummary(bookingId: BigInt): Observable<OpportunitySummary>;
  // getMainAsset(bookingId: BigInt): Observable<MainAsset>;
}