import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Column } from "../column";
import { CreateComponent } from "../create/create.component";
import { Soci } from "../soci";
import { SociService } from "../soci.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  sort: any;
  search_text: string = "";
  pageItems: number = 25;
  totalRecords: number;
  datasource: any;
  pages: any[];
  socis: Soci[] = [];
  is_po_added = false;
  is_preview_check: boolean;
  // columns: Column[] = [];
  // defaultColumns: Column[] = [
  //   {'header':'Created Date','field':'created_at','type':'date'},
  //   {'header':'SOCI ID','field':'soci_id','type':'text'},
  //   {'header':'Quotation ID','field':'quote_full_id','type':'text'},
  //   {'header':'Quote Date','field':'quote_date','type':'date | date "dd-MM-yy"'},
  //   {'header':'Amount (MYR)','field':'po_amount','type':'number'},
  //   {'header':'PO No','field':'po_no','type':'text'},
  //   {'header':'PO Date','field':'po_date','type':'date'},
  //   {'header':'Status','field':'status','type':'text'},
  // ];

  constructor(public sociService: SociService, private router: Router) {}

  ngOnInit(): void {
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        console.log("Soci-list", data);
        this.socis = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
        this.totalRecords = data["data"]["soci"]["total"];
        console.log("total-->", this.totalRecords);

        // if(data['data']['columnOrder'] == null){
        //   this.columns = JSON.parse(JSON.stringify(this.defaultColumns));
        // } else {
        //   this.columns = JSON.parse(data['data']['columnOrder']['column_order']);
        // }
      });
  }

  getAll() {
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        console.log(data);
        this.socis = data["data"]["soci"]["data"];
        this.totalRecords = data["data"]["soci"]["total"];
        // if(data['data']['columnOrder'] == null){
        //   this.columns = JSON.parse(JSON.stringify(this.defaultColumns));
        // } else {
        //   this.columns = JSON.parse(data['data']['columnOrder']['column_order']);
        // }
      });
  }
  addPo(check) {
    this.is_po_added = check;
  }

  paginate(event) {
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo) {
    let url = this.pages[pageNo].url;
    console.log("pages:", this.pages);
    this.sociService
      .getPage(url, this.pageItems, this.search_text)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        console.log("page-data-->", data);

        this.socis = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
      });
  }
  previewSOCI(soci_id) {
    console.log("soci_id", soci_id);
    this.is_preview_check = true;
    let navigate: NavigationExtras = {
      queryParams: {
        is_preview_check: true,
      },
    };
    this.router.navigate(["/soci/", soci_id, "edit"], navigate);
  }

  receiveSociData($event){
    console.log("SOCI-event--->", $event);
    this.socis.unshift( $event.data)
  }

  // SortColumn(event: LazyLoadEvent){
  //   console.log(event)
  //   this.sort = {'field':event['sortField'],'order':event['sortOrder']}
  //   this.ngOnInit()
  // }

  // columnOrder(event){
  //   this.sociService.saveColumnOrder(event.columns,'soci')
  //   .pipe(takeUntil(this.ngUnsubscribe))
  //   .subscribe()
  // }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }
}
