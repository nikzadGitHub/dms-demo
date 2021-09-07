import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from '../manufacturers.service';

@Component({
  selector: 'app-manufacturers-index',
  templateUrl: './manufacturers-index.component.html',
  styleUrls: ['./manufacturers-index.component.scss']
})
export class ManufacturersIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'Manufacturer',
    'Manufacturer Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/manufacturers';
  key:any = 'manufacturer';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public mService: ManufacturersService,
  ) { }

  ngOnInit(): void {
    this.mService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.mService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.mService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.mService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
