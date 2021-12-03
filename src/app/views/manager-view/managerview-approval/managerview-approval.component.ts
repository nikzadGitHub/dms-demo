import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { SociService } from "../../../soci/soci.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ManagerViewService } from "../../../views/manager-view/manager-view.service";
import { Soci } from "../../../soci/soci";

@Component({
  selector: "app-managerview-approval",
  templateUrl: "./managerview-approval.component.html",
  styleUrls: ["./managerview-approval.component.scss"],
})
export class ManagerviewApprovalComponent implements OnInit {
  private ngUnsubscribe = new Subject();

  sort: any;
  search_text: string = "";

  pages: any[];
  totalRecords: number;
  pendingSOCI: any[] = [];
  socis: Soci[] = [];
  pageItems: number = 10;
  is_quotation_view = false;
  is_soci_view = false;
  sociBtnColor = "btn btn-primary";
  quotationBtn = "btn btn-primary";
  isManagerViewAction: boolean;
  // is_approval_view_check: boolean;
  constructor(
    private sociService: SociService,
    private managerView: ManagerViewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getPendingSociList();
    this.route.queryParams.subscribe((params) => {
      this.isManagerViewAction = params.isManagerViewAction;
    });
    if (this.isManagerViewAction) {
      this.getPendingSociList();
    } else {
      this.getPendingQuotationList();
    }
  }

  getPendingSociList() {
    this.is_soci_view = true;
    this.is_quotation_view = false;
    this.sociBtnColor = "btn btn-primary";
    this.quotationBtn = "btn btn-secondary";
    this.managerView
      .getPendingSOCI(this.pageItems, this.search_text, this.sort)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        this.pendingSOCI = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
        this.totalRecords = data["data"]["soci"]["total"];
      });
  }

  getPendingQuotationList() {
    this.isManagerViewAction = false;
    this.is_quotation_view = true;
    this.is_soci_view = false;
    this.sociBtnColor = "btn btn-secondary";
    this.quotationBtn = "btn btn-primary";
  }

  goToApproval(soci_id) {
    // this.is_approval_view_check = true;
    let navigate: NavigationExtras = {
      queryParams: {
        is_approval_view_check: true,
      },
    };
    this.router.navigate(["/soci/", soci_id, "edit"], navigate);
  }
  searchSoci() {
    this.managerView
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        this.pendingSOCI = data["data"]["soci"]["data"];
        this.totalRecords = data["data"]["soci"]["total"];
      });
  }

  paginate(event) {
    this.pageItems = event.rows;
    this.onClick(parseInt(event.page) + 1);
  }

  onClick(pageNo) {
    let url = this.pages[pageNo].url;
    this.sociService
      .getPage(url, this.pageItems, this.search_text)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        // this.socis = data["data"]["soci"]["data"];
        this.pendingSOCI =data["data"]["soci"]["data"]
        this.pages = data["data"]["soci"]["links"];
      });
  }
}
