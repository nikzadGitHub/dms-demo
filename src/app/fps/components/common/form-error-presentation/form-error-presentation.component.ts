import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-presentation',
  templateUrl: './form-error-presentation.component.html',
  styleUrls: ['./form-error-presentation.component.scss']
})
export class FormErrorPresentationComponent implements OnInit {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
