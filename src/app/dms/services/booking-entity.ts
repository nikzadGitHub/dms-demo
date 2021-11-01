import { Observable } from 'rxjs';

import { BookingStatus } from './booking-status.enum';


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

export interface BookingEntity {
  status: BookingStatus;
  approvalList: ApprovalList;
}

export type BookingEntityList = BookingEntity[];

export interface BookingEntityInterface {
  getEntity(bookingId: BigInt): Observable<BookingEntity>;
  getApprovals(bookingId: BigInt): Observable<ApprovalList>;
}
