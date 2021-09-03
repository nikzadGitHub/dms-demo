import { Component, OnInit } from '@angular/core';
import { OpcsService } from '../../opcs/opcs.service';
import { OfstService } from '../ofst.service';

@Component({
  selector: 'app-ofst-index',
  templateUrl: './ofst-index.component.html',
  styleUrls: ['./ofst-index.component.scss']
})
export class OfstIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'OFST',
    'OFST Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/ofst';
  key:any = 'ofst';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public ofstService: OfstService,
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
