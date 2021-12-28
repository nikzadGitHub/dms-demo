import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppService } from "./app.service";

@Component({
  templateUrl: "list-opportunity.component.html",
  styleUrls: ["./opportunity.component.scss"],
  providers: [AppService],
})
export class ListOpportunityComponent implements OnInit {
  columns = [6];
  private ngUnsubscribe = new Subject();
  loading: boolean;
  opportunities: [];
  paginate: [];
  search_text: string = "";
  icons = [];
  listUrl = "/opportunity/list";
  pageItems: number = 10;
  datasource: any;
  pages: any[];
  totalRecords: number;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loading = true;

    this.icons = this.appService.getIconsView("cil");

    this.appService.getQuery(this.listUrl, this.pageItems).subscribe(
      (data) => {
      
        this.opportunities = data["data"]["data"] ?? data["data"]["items"];
        this.pages = data["data"]["links"];
		this.totalRecords = data['data']['total'];
		this.opportunities.forEach((value:any) => {
			
			
			value.created_date = new Date(value.created_date)
		})
     
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  pagination(event) {
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo) {
    let url = this.pages[pageNo].url;
    this.appService
      .getPage(url, this.pageItems, this.search_text)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
      
        this.opportunities = data["data"]["data"];
        this.pages = data["data"]["links"];
      });
  }
}
