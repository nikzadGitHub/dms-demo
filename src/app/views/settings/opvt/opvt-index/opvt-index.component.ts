import { Component, OnInit } from '@angular/core';
import { OpvtService } from '../opvt.service';

@Component({
  selector: 'app-opvt-index',
  templateUrl: './opvt-index.component.html',
  styleUrls: ['./opvt-index.component.scss']
})
export class OpvtIndexComponent implements OnInit {
  headers = [
    'Title',
    'Value',
    'Action',
  ];
  path:any = 'settings/opvt';
  key:any = '';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public opvtService: OpvtService,
  ) { }

  ngOnInit(): void {
    this.opvtService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.opvtService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.opvtService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.opvtService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
