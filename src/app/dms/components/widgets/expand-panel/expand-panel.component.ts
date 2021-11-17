import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dms-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss']
})
export class ExpandPanelComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon: string = 'cil-cart';
  @Input() open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
