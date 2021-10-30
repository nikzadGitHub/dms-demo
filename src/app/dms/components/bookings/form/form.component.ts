import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-form-submit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  curDate =  new Date(Date.now()).toLocaleDateString();
  constructor() { }
  ngOnInit(): void {}
}
