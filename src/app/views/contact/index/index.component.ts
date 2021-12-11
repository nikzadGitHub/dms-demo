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
  contact_detail: any[]= [];
  isLoading = false;
  constructor(
    public contactService: ContactService,
  ) { }

  ngOnInit(): void {    
    this.contactService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      // this.isLoading = true;
      // setTimeout( () => this.isLoading = false, 2000 );
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
      
    })
}
  

  getAll(){
    this.contactService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })
  }

  onClick(url){
    if (url) {
      this.contactService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.contactService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })
  }

}
