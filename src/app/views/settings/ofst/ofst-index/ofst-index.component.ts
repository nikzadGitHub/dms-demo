import { Component, OnInit } from '@angular/core';
import { OfstService } from '../ofst.service';

@Component({
  selector: 'app-ofst-index',
  templateUrl: './ofst-index.component.html',
  styleUrls: ['./ofst-index.component.scss']
})
export class OfstIndexComponent implements OnInit {
  headers = [
    'Title',
    'Value',
    'Action',
  ];
  path:any = 'settings/ofst';
  key:any = '';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public ofstService: OfstService,
  ) { }

  ngOnInit(): void {
    this.ofstService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.ofstService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.ofstService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.ofstService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
