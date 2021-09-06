import { Component, OnInit } from '@angular/core';
import { CareAreasService } from '../care-areas.service';

@Component({
  selector: 'app-care-areas-index',
  templateUrl: './care-areas-index.component.html',
  styleUrls: ['./care-areas-index.component.scss']
})
export class CareAreasIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'Care Area',
    'Care Area Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/ca';
  key:any = 'care_area';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public caService: CareAreasService
  ) { }

  ngOnInit(): void {
    this.caService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.caService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.caService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.caService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
