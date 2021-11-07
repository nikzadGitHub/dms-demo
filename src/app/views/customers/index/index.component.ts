import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageItems: number = 10;

  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomerData().subscribe(data =>{
      console.log(data)
    })
  }

}
