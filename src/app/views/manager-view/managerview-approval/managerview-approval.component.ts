import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { SociService } from "../../../soci/soci.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ManagerViewService } from "../../../views/manager-view/manager-view.service";
import { Soci } from "../../../soci/soci";
import { Table } from "primeng/table";
import * as XLSX from "xlsx";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-managerview-approval",
  templateUrl: "./managerview-approval.component.html",
  styleUrls: ["./managerview-approval.component.scss"],
})
export class ManagerviewApprovalComponent implements OnInit {
  @ViewChild("confirmationExportExcelModal")
  public confirmationExportExcelModal: ModalDirective;
  @ViewChild("columnChooserModal")
  public columnChooserModal: ModalDirective;

  private ngUnsubscribe = new Subject();
  sort: any;
  search_text: string = "";

  pages: any[];
  totalRecords: number;
  totalQuotationApproval: number;
  quotationApprovalLoading: boolean = false;
  pendingSOCI: any[] = [];
  pendingQuotationApproval: any[] = [];
  socis: Soci[] = [];
  pageItems: number = 10;
  is_quotation_view = false;
  is_soci_view = false;
  selectedValues: any[] = [];
  sociBtnColor = "btn btn-primary";
  quotationBtn = "btn btn-primary";
  isManagerViewAction: boolean;
  columnValue = [
    { name: "Created date:", key: "c_date" },
    { name: "SOCI ID:", key: "soci_id" },
    { name: "FSS Name:", key: "fss_name" },
    { name: "Company Name:", key: "company_name" },
    { name: "Quotation ID:", key: "quote_full_id" },
    { name: "Status:", key: "status_desc" },
  ];
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
    setTimeout(() => {
      this.selectedValues = this.columnValue.slice(0, 7);
    }, 1000);
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
        this.pendingSOCI.forEach((value) => {
          value.created_at = new Date(value.created_at);
        });
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
    this.quotationApprovalLoading = true;
    this.managerView
    .getPendingQuotationApproval(this.pageItems, this.search_text, this.sort)
    .subscribe((data) => {
      this.pendingQuotationApproval = data["data"]["data"];
      this.totalQuotationApproval = data["data"]["total"];
      this.quotationApprovalLoading = false;

    });
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
      .getPendingSOCI(this.pageItems, this.search_text, this.sort)
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
        this.pendingSOCI = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
      });
  }

  exportToExcel($event) {
    this.confirmationExportExcelModal.hide();
    let dupArr: Array<any> = this.pendingSOCI;
    let exportArr: Array<any> = [];
    for (let i = 0; i < dupArr.length; i++) {
      let compObj: any = {};
      compObj.soci_id = dupArr[i].soci_id;
      compObj.created_at = dupArr[i].created_at;
      compObj.quote_full_id = dupArr[i].quote_full_id;
      compObj.company_name = dupArr[i].customer?.company_name
        ? dupArr[i].customer?.company_name
        : "";

      // compObj.quote_date = dupArr[i].quote_date;
      // compObj.amount = dupArr[i].po_amount ? dupArr[i].po_amount : 0;
      // compObj.po_no = dupArr[i].po_no;
      // compObj.po_date = dupArr[i].po_date;
      // compObj.fo_order_number = dupArr[i].fo_order_number;
      exportArr.push(compObj);
    }
    const fileName = "Pending_SOCI.xlsx";
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArr);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "test");

    XLSX.writeFile(wb, fileName);
  }

  updateCols(e, item) {
    if (!e.checked) {
      let index = this.selectedValues.indexOf(item);
      this.selectedValues.splice(0, index);
    } else {
      this.selectedValues.push(item);
    }
  }
  checkItem(item) {
    return this.selectedValues.some((ele) => ele.key === item);
  }
  clear(table: Table) {
    table.clear();
  }

  columnFilter(event) {
    console.log("column-filter:", event);
  }
}
