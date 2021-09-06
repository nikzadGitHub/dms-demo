import { Component, OnInit } from '@angular/core';
import { OpcsService } from '../../opcs/opcs.service';

@Component({
  selector: 'app-opcs-index',
  templateUrl: './opcs-index.component.html',
  styleUrls: ['./opcs-index.component.scss']
})
export class OpcsIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'OPC',
    'OPC Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/opcs';
  key:any = 'opc';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public pgService: OpcsService,
  ) { }

  ngOnInit(): void {
    this.pgService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'];
      this.paginate = data['data']['links'];
    }) 
  }

  getAll(){
    this.pgService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.tableData = data['data']['data'] ?? data['data']['items'];
      this.paginate = data['data']['links'];
    })  
  }

  onClick(url){
    if (url) {
      this.pgService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
        this.tableData = data['data']['data'] ?? data['data']['items'];
        this.paginate = data['data']['links'];
      })
    }
  }

  deleteData(id){
    this.pgService.delete(id).subscribe((data)=>{
      this.tableData = this.tableData.filter(item => item.id !== id);
      console.log('Deleted successfully!');
    })  
  }

}
