import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

import { ApprovalList } from '../../../services/booking-entity';
import {BookingStatus, statusToText} from '../../../services/booking-status.enum';

export interface Button {
  title: string;
  id?: number;
}

export class ButtonEvent {
  button: Button;
  index: number;
}

@Component({
  selector: 'dms-booking-approval',
  templateUrl: './booking-approval.component.html',
  styleUrls: ['./booking-approval.component.scss']
})
export class BookingApprovalComponent implements OnInit {
  private _status = BookingStatus.unknown;
  statusText: string = 'Unknown';
  isConfirmed: boolean = false;
  buttons: Button[] = [];

  @Input() list: ApprovalList = [];
  @Output() buttonAction = new EventEmitter<ButtonEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public get status(): BookingStatus {
    return this._status;
  }
  public set status(value: BookingStatus) {
    this._status = value;
    this.statusText = statusToText(value);
    // Defaults.
    this.isConfirmed = false;
    this.buttons = [];
    // Update buttons.
    switch (value) {
      case BookingStatus.draft:
        this.buttons = [{ title: 'Submit for Approval', id: 0 }];
        break;
      case BookingStatus.submitted:
        this.buttons = [
          { title: 'MSC Reviewed', id: 0 },
          { title: 'Decline', id: 1 }
        ];
        break;
      case BookingStatus.reviewed:
        this.buttons = [
          { title: 'Endorse', id: 0 },
          { title: 'Decline', id: 1 }
        ];
        break;
      case BookingStatus.endorsed:
        this.buttons = [
          { title: 'Approve', id: 0 },
          { title: 'Conflict', id: 1 },
          { title: 'Decline', id: 2 },
        ];
        break;
      case BookingStatus.accepted:
        this.buttons = [
          { title: 'Confirm', id: 0 },
          { title: 'Decline', id: 1 },
        ];
        break;
      case BookingStatus.confirmed:
        this.isConfirmed = true;
        break;
    }
  }

  onButtonClick(index: number) {
    const event = new ButtonEvent();
    event.index = index;
    event.button = this.buttons[index];
    this.buttonAction.emit(event);
  }
}
