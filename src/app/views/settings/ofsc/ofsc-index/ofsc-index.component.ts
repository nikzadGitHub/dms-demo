import { Component, OnInit } from '@angular/core';
import { OfscService } from '../ofsc.service';


@Component({
  selector: 'app-ofsc-index',
  templateUrl: './ofsc-index.component.html',
  styleUrls: ['./ofsc-index.component.scss']
})
export class OfscIndexComponent implements OnInit {
  headers = [
    'Title',
    'Value',
    'Action',
  ];
  path:any = 'settings/ofsc';
  key:any = '';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public ofscService: OfscService,
  ) { }

  ngOnInit(): void {
    this.ofscService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.ofscService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.ofscService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.ofscService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
