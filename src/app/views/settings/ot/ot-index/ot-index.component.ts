import { Component, OnInit } from '@angular/core';
import { OtService } from '../ot.service';

@Component({
  selector: 'app-ot-index',
  templateUrl: './ot-index.component.html',
  styleUrls: ['./ot-index.component.scss']
})
export class OtIndexComponent implements OnInit {
  headers = [
    'Title',
    'Value',
    'Action',
  ];
  path:any = 'settings/ot';
  key:any = '';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public otService: OtService,
  ) { }

  ngOnInit(): void {
    this.otService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.otService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.otService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.otService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
