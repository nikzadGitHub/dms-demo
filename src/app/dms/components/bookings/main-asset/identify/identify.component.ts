import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {MockEquipmentsService} from '../../../../services/mock-equipments.service';
import {EquipmentPurpose} from '../../../../services/equipment-purpose.enum';
import {EquipmentEntity, EquipmentList} from '../../../../services/equipment-entity';
import {EquipmentKind, isEquipmentMain} from '../../../../services/equipment-kind.enum';
import {EquipmentQuery} from '../../../../services/equipments';
import { EquipmentsService } from '../../../../services/equipments.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Same as {@link EquipmentEntity}, but has additional fields, for new changes.
 */
export type EquipmentWithEdit = EquipmentEntity & {
  newSku: string;
  isPicked: boolean;
};

/**
 * Stores multiple instances of {@link EquipmentWithEdit}.
 */
export type EquipmentWithEditList = EquipmentWithEdit[];

/**
 * Form/View for finding and saving resulted equipments.
 */
@Component({
  selector: 'dms-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent implements OnInit, OnDestroy {
  private searchListener: Subscription;

  /**
   * Items currently visible on view,
   * which should be saved, once {@link bySave} is triggered.
   */
  list: EquipmentWithEditList = [];

  /**
   * Inputting kind of Equipment/Asset to find.
   */
  @Input() kind: EquipmentKind = 'unknown';
  /**
   * Caption visible at top.
   */
  @Input() title: string;
  /**
   * Maximum allowed count/number of result, but zero means is unlimited.
   */
  @Input() maxPick: number = 0;
  /**
   * Inputting default value for search-field.
   */
  @Input() filter: string = '';
  /**
   * Event triggered by Closing component.
   */
  @Output() byClose = new EventEmitter<IdentifyComponent>();
  /**
   * Event triggered by Saving form (IoC).
   */
  @Output() bySave = new EventEmitter<IdentifyComponent>();

  equipmentId:BigInt;

  constructor(
    private api: EquipmentsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.searchListener) {
      this.searchListener.unsubscribe();
    }
  }

  /**
   * Shorthand for {@link isEquipmentMain}.
   */
  get isMain(): boolean {
    return isEquipmentMain(this.kind);
  }

  /**
   * View listener for Search start, subscribes on API-service,
   * and updates list based on response.
   */
  onSearch() {
    // Notify existing changes.
    for (const item of this.list) {
      if (item.isPicked || item.newSku !== '') {
        const msg: string = 'You have unsaved Changes, or selection.'
          + '\n\nDo you want to continue?';
        if (confirm(msg)) {
          break;
        }
        return;
      }
    }
    // Prepare.
    if (this.searchListener) {
      this.searchListener.unsubscribe();
    }
    // Actual search.
    const query: EquipmentQuery = {
      search_text: this.filter,
      purposes: this.isMain ? [
        EquipmentPurpose.demo, EquipmentPurpose.loan
      ] : []
    };
    this.searchListener = this.api.findEquipments(query).subscribe({
      next: (response) => {
        if (response as EquipmentList) {
          this.list = response.map((item) => {
            return {...item, newSku: '', isPicked: false};
          });
        } else {
          this.list = [];
        }
      },
      error: () => {
        this.list = [];
      }
    });
  }

  /**
   * View listener for Saving form, emits {@link bySave}.
   */
  onSave() {
    this.api.saveInventoryBooking({
      bookingId: this.route.snapshot.params.id,
      equipmentId: this.equipmentId,
      type: "main",
    }).subscribe((res) => {
        if (res) {
          this.bySave.emit(this);
        }
      },
      err => {
        console.log(err);
          alert("not added")
      }
    );
  }

  /**
   * View listener for Closing form, emits {@link byClose}.
   */
  onClose() {
    this.byClose.emit(this);
  }

  /**
   * Marks given index with {@link EquipmentWithEdit#isPicked},
   * and deselects everything else.
   */
  onSelect(selectedIndex: number, id:BigInt) {
    this.equipmentId = id;
    this.list.forEach((entry, index) => {
      entry.isPicked = index === selectedIndex;
    });
  }
}
