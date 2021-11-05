import { Component, Input, OnInit } from '@angular/core';
import { MainAsset } from '../../../services/main-asset-service/main-asset-entity';


@Component({
  selector: 'app-booking-form-main-asset',
  templateUrl: './main-asset.component.html',
  styleUrls: ['./main-asset.component.scss']
})
export class MainAssetComponent implements OnInit{
  @Input() mainAsset: MainAsset ;
  constructor() { }
  ngOnInit(): void {}
}
