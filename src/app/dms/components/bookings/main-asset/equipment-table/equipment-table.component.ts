import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

import {EquipmentKind, equipmentKindToTitle, isEquipmentMain} from '../../../../services/equipment-kind.enum';
import {EquipmentWithEdit, IdentifyComponent} from '../identify/identify.component';
import {EquipmentEntity, EquipmentList} from '../../../../services/equipment-entity';

/**
 * Applies {@edit} on top of {@entity}.
 * @param edit List of changes.
 * @param entity Destination to store changes.
 */
export function applyEdit(edit: EquipmentWithEdit, entity: EquipmentEntity) {
  if (edit.newSku !== '') {
    entity.sku = edit.newSku;
  }
}

/**
 * View showing table (header and rows), for each entry in {@link data}.
 */
@Component({
  selector: 'dms-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.scss']
})
export class EquipmentTableComponent implements OnInit {
  isAdding: boolean = false;

  @Input() kind: EquipmentKind = 'unknown';
  @Input() data: EquipmentList = [];
  @Output() dataChange = new EventEmitter<EquipmentList>();
  @Input() isAddable: boolean = false;
  @Input() isRemovable: boolean = false;
  @Input() isAssignable: boolean = true;

  constructor() {
  }

  ngOnInit(): void {}

  get isRoot() {
    return this.kind === 'main';
  }

  get isMain() {
    return isEquipmentMain(this.kind);
  }

  get title(): string {
    return equipmentKindToTitle(this.kind);
  }

  /**
   * Maximum count of Equipment's list, for set {@link kind}.
   */
  get maxPick(): number {
    return this.isRoot ? 1 : 0;
  }

  /**
   * Checks if maximum item-count limit is reached.
   */
  get isLimitReached() {
    const max = this.maxPick;
    return max ? this.data.length >= max : false;
  }

  /**
   * Listens for addition-form's submit, and updates data.
   */
  onSave(form: IdentifyComponent) {
    if (form.list.length > 0) {
      const newList: EquipmentList = [];
      // Handles duplicates.
      for (const entry of form.list) {
        if (entry.isPicked) {
          const id = entry.id;
          let isNew = true;
          for (const existing of this.data) {
            if (existing.id === id) {
              applyEdit(entry, existing);
              isNew = false;
              break;
            }
          }
          if (isNew) {
            applyEdit(entry, entry);
            newList.push(entry);
          }
        }
      }
      // Adds new entries.
      console.log('Saved, with new count:', newList.length);
      for (const entry of newList) {
        this.data.push(entry);
      }
      this.dataChange.emit(this.data);
      // Hides addition-form.
      this.isAdding = false;
    }
  }

  /**
   * Listen's for removal of rows, and updates {@link data} accordingly.
   * @param index Row-index.
   */
  onRemove(index: number) {
    this.data.splice(index, 1);
    this.dataChange.emit(this.data);
  }
}
