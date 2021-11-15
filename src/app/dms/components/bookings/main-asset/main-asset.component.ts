import { Component, Input, OnInit } from '@angular/core';
import { MainAsset } from '../../../services/main-asset-service/main-asset-entity';


@Component({
  selector: 'app-booking-form-main-asset',
  templateUrl: './main-asset.component.html',
  styleUrls: ['./main-asset.component.scss']
})

/**
 * This class is used to add the main asset to different parts of DMS
 * @class
 */
export class MainAssetComponent implements OnInit{
  @Input() mainAsset: MainAsset ;
  show = "none";
  constructor() { }
  ngOnInit(): void {}
  onShow(name: string) {
    this.show = name;
  }
}
