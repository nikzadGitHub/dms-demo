import { Component, OnInit } from '@angular/core';
import { OpcsService } from '../../opcs/opcs.service';
import { OfscService } from '../ofsc.service';


@Component({
  selector: 'app-ofsc-index',
  templateUrl: './ofsc-index.component.html',
  styleUrls: ['./ofsc-index.component.scss']
})
export class OfscIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'OFSC',
    'OFSC Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/ofsc';
  key:any = 'ofsc';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public ofscService: OfscService,
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
