import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-access-setup',
  templateUrl: './user-access-setup.component.html',
  styleUrls: ['./user-access-setup.component.scss']
})

export class UserAccessSetupComponent implements OnInit {
  userGroupList: any = [];
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
    this.userGroupList = [
      { userGroup: 'FSS Malaysia', status: 'Active', createdDate: '17-Jul-2021' },
      { userGroup: 'FSS Singapore', status: 'Active', createdDate: '17-Jul-2021' },
      { userGroup: 'FSS Vietnam', status: 'Active', createdDate: '17-Jul-2021' },
      { userGroup: 'FSS Thailand', status: 'Active', createdDate: '17-Jul-2021' },
      { userGroup: 'FSS Malaysia', status: 'Active', createdDate: '17-Jul-2021' },
      { userGroup: 'FSS Indonesia', status: 'Active', createdDate: '17-Jul-2021' },
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
      return this.userGroupList ? this.first === (this.userGroupList.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.userGroupList ? this.first === 0 : true;
  }

}
