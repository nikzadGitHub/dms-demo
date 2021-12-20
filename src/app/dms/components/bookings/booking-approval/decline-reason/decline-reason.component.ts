import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { BookingEntityService } from '@app/dms/services/booking-entity.service';
import { BookingApprovalComponent } from '../booking-approval.component';

/**
 * Form/View for finding and saving resulted equipments.
 */
@Component({
  selector: 'dms-decline-reason',
  templateUrl: './decline-reason.component.html',
  styleUrls: ['./decline-reason.component.scss']
})
export class DeclineReasonComponent implements OnInit {

  /**
   * Event triggered by Closing component.
   */
  @Output() byClose = new EventEmitter();

  reason: string;


  constructor(
    private api: BookingEntityService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }


  /**
   * View listener for Saving form, emits {@link bySave}.
   */
  onSave() {
    this.api.decline_booking({
      bookingId: this.route.snapshot.params.id,
      reason: this.reason,
    }).subscribe((res) => {
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dms/bookings', this.route.snapshot.params.id]);
          }); 
      },
      err => {
        console.log(err);
          alert("error")
      }
    );
  }

  /**
   * View listener for Closing form, emits {@link byClose}.
   */
  onClose() {
    this.byClose.emit(this);
  }
}
