import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'dms-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent implements OnInit{
  @Input() title: string;
  @Input() name: string;
  @Input() show: string;
  @Output() buttonAction = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {}

  onClose() {
    this.buttonAction.emit('none');
  }
}
