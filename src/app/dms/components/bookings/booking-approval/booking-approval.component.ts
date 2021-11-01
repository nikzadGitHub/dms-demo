import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

import { ApprovalList } from '../../../services/booking-entity';

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
  @Input() statusText: string = 'Unknown';
  @Input('list') approvalList: ApprovalList = [];
  @Input() buttons: Button[] = [];

  @Output() buttonAction = new EventEmitter<ButtonEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(index: number) {
    const event = new ButtonEvent();
    event.index = index;
    event.button = this.buttons[index];
    this.buttonAction.emit(event);
  }
}
