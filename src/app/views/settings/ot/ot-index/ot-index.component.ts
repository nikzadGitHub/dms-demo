import { Component, OnInit } from '@angular/core';
import { OpcsService } from '../../opcs/opcs.service';
import { OtService } from '../ot.service';

@Component({
  selector: 'app-ot-index',
  templateUrl: './ot-index.component.html',
  styleUrls: ['./ot-index.component.scss']
})
export class OtIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'OT',
    'OT Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/ot';
  key:any = 'ot';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public otService: OtService,
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
