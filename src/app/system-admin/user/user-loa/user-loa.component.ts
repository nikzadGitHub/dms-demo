import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-loa',
  templateUrl: './user-loa.component.html',
  styleUrls: ['./user-loa.component.scss']
})
export class UserLoaComponent implements OnInit {

  dummy_data = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
