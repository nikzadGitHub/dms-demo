import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { SociService } from "../../../soci/soci.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ManagerViewService } from "../manager-view.service";

@Component({
  selector: "app-managerview-approval",
  templateUrl: "./managerview-approval.component.html",
  styleUrls: ["./managerview-approval.component.scss"],
})
export class ManagerviewApprovalComponent implements OnInit {
  private ngUnsubscribe = new Subject();

  sort: any;
  search_text: string = "";
  paginate: [];
  pendingSOCI: any[] = [];
  pageItems: number = 10;
  is_quotation_view = false;
  is_soci_view = false;
  sociBtnColor = "btn btn-primary"
  quotationBtn = "btn btn-primary"
  // is_approval_view_check: boolean;
  constructor(
    private sociService: SociService,
    private managerView: ManagerViewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getPendingSociList();
    this.getPendingQuotationList();
  }

  getPendingSociList() {
    this.is_soci_view = true;
    this.is_quotation_view = false;
    this.sociBtnColor = "btn btn-primary"
    this.quotationBtn = "btn btn-secondary"
    this.managerView
      .getPendingSOCI(this.pageItems, this.search_text, this.sort)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        this.pendingSOCI = data["data"]["soci"]["data"];
      });
  }

  getPendingQuotationList() {
    this.is_quotation_view = true;
    this.is_soci_view = false;
    this.sociBtnColor = "btn btn-secondary"
    this.quotationBtn = "btn btn-primary"
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
}
