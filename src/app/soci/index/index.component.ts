import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Column } from "../column";
import { CreateComponent } from "../create/create.component";
import { Soci } from "../soci";
import { SociService } from "../soci.service";
import * as XLSX from "xlsx";
import { SelectItem } from "primeng/api";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Table } from "primeng/table";
// import { FilterUtils } from 'primeng/utils';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  @ViewChild("confirmationExportExcelModal")
  public confirmationExportExcelModal: ModalDirective;
  @ViewChild("columnChooserModal")
  public columnChooserModal: ModalDirective;

  private ngUnsubscribe = new Subject();
  sort: any;
  search_text: string = "";
  pageItems: number = 10;
  totalRecords: number;
  datasource: any;
  pages: any[];
  socis: Soci[] = [];
  is_po_added = false;
  is_preview_check: boolean;
  rolesPermission = [];
  colors: SelectItem[];
  user_json: any;
  isPermission: boolean;
  sociStatus: any;
  badgeColor = "";
  selectedValues: any[] = [];
  dash = "_";
  zero = 0;
  columnValue = [
    { name: "Created date", key: "c_date" },
    { name: "SOCI ID", key: "soci_id" },
    { name: "Quotation ID", key: "quote_full_id" },
    { name: "Status", key: "status_desc" },
    { name: "Customer PO Amount", key: "po_amount" },
    { name: "Customer PO No", key: "po_no" },
    { name: "FO Status", key: "backend_status" },
    { name: "FO Number", key: "fo_order_number" },
    { name: "Country", key: "country" },
    { name: "Unit", key: "unit" },
    { name: "Individual/Company Name", key: "company_name" },
    { name: "Quotation Date", key: "quote_date" },
    { name: "Customer PO Date", key: "po_date" },
    { name: "OPC", key: "opc" },
  ];
  isTooltipSown: any = "";
  sociDate: any;
  loading: boolean;

  constructor(public sociService: SociService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe(
        (data) => {
          data["data"]["soci"]["data"].forEach((value) => {
            value.created_at = new Date(value.created_at);
            if (value.po_date != null) {
              value.po_date = new Date(value.po_date);
            }
            if (value.quote_date != null) {
              value.quote_date = new Date(value.quote_date);
            }
          });
          this.socis = data["data"]["soci"]["data"];
          this.pages = data["data"]["soci"]["links"];
          this.totalRecords = data["data"]["soci"]["total"];
          this.checkPermission();
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        }
      );
    setTimeout(() => {
      this.selectedValues = this.columnValue.slice(1, 8);
    }, 1000);
  }

  getAll() {
    // this.loading=true
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        this.socis = data["data"]["soci"]["data"];
        this.totalRecords = data["data"]["soci"]["total"];
        //   this.loading=false
        // },error => {
        //   this.loading = false;
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
    this.sociService
      .getPage(url, this.pageItems, this.search_text)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.socis = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
      });
  }
  previewSOCI(soci_id) {
    this.is_preview_check = true;
    let navigate: NavigationExtras = {
      queryParams: {
        is_preview_check: true,
      },
    };
    this.router.navigate(["/soci/", soci_id, "edit"], navigate);
  }

  receiveSociData($event) {
    if ($event.edit) {
      let index = this.socis.findIndex((x) => x.soci_id == $event.data.soci_id);
      this.socis[index] = $event.data;
    } else {
      this.socis.unshift($event.data);
    }
  }

  checkPermission() {
    this.user_json = JSON.parse(localStorage.getItem("user-json"));
    this.rolesPermission = this.user_json.permissions;
    if (this.rolesPermission) {
      this.rolesPermission.forEach((value) => {
        if (value.name == "Create SOCI" || value.slug == "create_soci") {
          this.isPermission = true;
        } else {
          this.isPermission = false;
        }
      });
    }
  }
  exportToExcel($event) {
    this.confirmationExportExcelModal.hide();
    let dupArr: Array<any> = this.socis;
    let exportArr: Array<any> = [];
    for (let i = 0; i < dupArr.length; i++) {
      let compObj: any = {};
      compObj.Created_at = dupArr[i].created_at
        ? dupArr[i].created_at
        : this.dash;
      compObj.Company_name = dupArr[i].customer?.company_name
        ? dupArr[i].customer.company_name
        : "_";
      compObj.Soci_id = dupArr[i].soci_id ? dupArr[i].soci_id : this.dash;
      compObj.Quote_full_id = dupArr[i].quote_full_id
        ? dupArr[i].quote_full_id
        : this.dash;
      compObj.Quote_date = dupArr[i].quote_date
        ? dupArr[i].quote_date
        : this.dash;
      compObj.Customer_PO_Amount = dupArr[i].po_amount
        ? dupArr[i].po_amount
        : 0;
      compObj.Customer_PO_No = dupArr[i].po_no ? dupArr[i].po_no : this.dash;
      compObj.Customer_PO_Date = dupArr[i].po_date
        ? dupArr[i].po_date
        : this.dash;
      compObj.Fo_order_number = dupArr[i].fo_order_number
        ? dupArr[i].fo_order_number
        : this.dash;
      compObj.Backend_status = dupArr[i].backend_status
        ? dupArr[i].backend_status
        : this.dash;
      compObj.Country = dupArr[i].country ? dupArr[i].country : this.dash;
      compObj.Unit = dupArr[i].unit ? dupArr[i].unit : this.dash;
      compObj.Opc = dupArr[i].opc ? dupArr[i].opc : this.dash;
      compObj.Status = dupArr[i].status_desc
        ? dupArr[i].status_desc
        : this.dash;
      exportArr.push(compObj);
    }
    const fileName = "SOCI_List.xlsx";
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
