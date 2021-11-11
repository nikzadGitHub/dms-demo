import { Component, Input, OnInit } from '@angular/core';
import { MainAsset } from '../../../services/asset-entity';

/**
 * View/Picking-form for equipments and/or assets.
 */
@Component({
  selector: 'app-booking-form-main-asset',
  templateUrl: './main-asset.component.html',
  styleUrls: ['./main-asset.component.scss']
})
export class MainAssetComponent implements OnInit{
  @Input() mainAsset: MainAsset;
  @Input() isAddable: boolean = false;
  @Input() isAssignable: boolean = true;

  constructor() { }
  ngOnInit(): void {}

  /**
   * Pipe callback, preventing original-order change.
   */
  onSortIgnore(): number {
    return -1;
  }
}
