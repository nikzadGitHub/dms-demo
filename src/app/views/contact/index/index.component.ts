import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  headers = [
    'Craeted Date',
    'Contact ID',
    'Primary Account',
    'Full Name',
    'Email',
    'Business Phone',
    'Care Area',
  ];
  path:any = 'contact';
  key:any = 'contact';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public Service: ContactService
  ) { }

  ngOnInit(): void {
    this.Service.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    })
  }

  getAll(){
    this.Service.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })
  }

  onClick(url){
    if (url) {
      this.Service.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.Service.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })
  }

}
