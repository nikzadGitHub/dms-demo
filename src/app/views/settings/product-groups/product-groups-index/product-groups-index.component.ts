import { Component, OnInit } from '@angular/core';
import { ProductGroupsService } from '../product-groups.service';

@Component({
  selector: 'app-product-groups-index',
  templateUrl: './product-groups-index.component.html',
  styleUrls: ['./product-groups-index.component.scss']
})
export class ProductGroupsIndexComponent implements OnInit {
  headers = [
    'Area ID',
    'Product Group',
    'Product Group Code',
    'Active',
    'Action',
  ];
  path:any = 'settings/pg';
  key = 'product_group';
  tableData:any;
  paginate:any;
  pageItems: number = 10;
  search_text: string = '';

  constructor(
    public pgService: ProductGroupsService,
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
    })  
  }

}
