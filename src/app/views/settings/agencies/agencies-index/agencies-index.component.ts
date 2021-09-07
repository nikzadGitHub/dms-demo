import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../agencies.service';

@Component({
  selector: 'app-agencies-index',
  templateUrl: './agencies-index.component.html',
  styleUrls: ['./agencies-index.component.scss']
})
export class AgenciesIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'Agency',
    'Agency Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/agencies';
  key = 'agency';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';
  
  constructor(
    public agencyService: AgenciesService,
  ) { }

  ngOnInit(): void {
    this.agencyService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.agencyService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.agencyService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.agencyService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
