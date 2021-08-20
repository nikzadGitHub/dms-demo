import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'new-opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class NewOpportunityComponent {
	@ViewChild('largeModal') public largeModal: ModalDirective;
}
