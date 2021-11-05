import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  userList: any = [];
  first: number = 0;
  rows: number = 10;
  searchInput: string = '';

  constructor (

  ) {

  }

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList() {
    this.userList = [
      { userName: 'jack.lee@idsmed.com', status: 'Active', createdDate: '17-Jul-2021' },
      { userName: 'kim.tan@idsmed.com', status: 'Active', createdDate: '17-Jul-2021' },
      { userName: 'alex.tan@idsmed.com', status: 'Active', createdDate: '17-Jul-2021' },
      { userName: 'vicky.lee@idsmed.com', status: 'Active', createdDate: '17-Jul-2021' },
      { userName: 'albert.wong@idsmed.com', status: 'Suspended', createdDate: '17-Jul-2021' },
      { userName: 'shimi.ong@idsmed.com', status: 'Suspended', createdDate: '17-Jul-2021' },
    ];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.userList ? this.first === (this.userList.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.userList ? this.first === 0 : true;
  }

}
