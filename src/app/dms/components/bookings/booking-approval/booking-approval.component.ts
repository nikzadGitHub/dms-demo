import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalList } from '../../../services/booking-entity';
import { BookingEntityService } from '../../../services/booking-entity.service';
import {BookingStatus, statusToText} from '../../../services/booking-status.enum';

export interface Button {
  title: string;
  id?: number;
  status?: any;
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
  _status = BookingStatus.unknown;
  private _bookingReason: any;

  statusText: string = 'Unknown';
  isConfirmed: boolean = false;
  show_decline: boolean = false;
  buttons: Button[] = [];
  is_demo: boolean = false;

  @Input() list: ApprovalList = [];
  @Input() access: boolean = false;
  @Output() buttonAction = new EventEmitter<ButtonEvent>();

  constructor(
    private api: BookingEntityService,
    private route: ActivatedRoute,
    private router: Router, 
  ) {}

  ngOnInit(): void {
  }

  @Input() public get bookingReason(): any{
    return this._bookingReason;
  }
  public set bookingReason(value: any) {
    this._bookingReason = value;
    this.is_demo = value == '2' ? true : false;
  }

  @Input() public get status(): any {
    return this._status;
  }
  public set status(value: any) {
    this._status = value;
    this.statusText = statusToText(value);
    // Defaults.
    this.isConfirmed = false;
    this.buttons = [];
    // Update buttons.
    switch (value) {
      case '1':
        this.buttons = [{ title: 'Submit for Approval', id: 0, status: '2' }];
        break;
      case '9':
      case '2':
        this.buttons = [
          { title: 'MSC Reviewed', id: 0, status: '3' },
          { title: 'Decline', id: 1, status: '5' }
        ];
        break;
      case '3':
        this.buttons = [
          { title: 'Endorse', id: 0, status: '6' },
          { title: 'Decline', id: 1, status: '5' }
        ];
        break;
      case '6':
        this.buttons = [
          { title: 'Approve', id: 0, status: '7' },
          { title: 'Conflict', id: 1, status: '4' },
          { title: 'Decline', id: 2, status: '5' },
        ];
        break;
      case '7':
        this.buttons = [
          { title: 'Confirm', id: 0, status: '8' },
          { title: 'Decline', id: 1, status: '5' },
        ];
        break;
      case '8':
        this.isConfirmed = true;
        break;
    }
  }

  onButtonClick(status: any) {
    if(status == 5){
      this.show_decline = true;
    }else{
      this.api.updateStatus({
        bookingId: this.route.snapshot.params.id,
        status: status,
      }).subscribe((res) => {
        console.log(res);
          if (res) {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/dms/bookings', this.route.snapshot.params.id]);
            }); 
          }
        },
        err => {
          console.log(err);
            alert("error")
        }
      );
    }
  }
  onClose(){
    this.show_decline = false;
  }
}
