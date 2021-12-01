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
// import { FilterUtils } from 'primeng/utils';

interface City {
  name: string,
  code: string
}

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
  rolesPermission = [];
  colors: SelectItem[];
  user_json: any;
  isPermission: boolean;
  cities: City[];
  selectedCities: City[];
  constructor(public sociService: SociService, private router: Router) {}

  ngOnInit(): void {
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        this.socis = data["data"]["soci"]["data"];
        this.pages = data["data"]["soci"]["links"];
        this.totalRecords = data["data"]["soci"]["total"];
        this.checkPermission();
      });
  }

  getAll() {
    this.sociService
      .getAll(this.pageItems, this.search_text, this.sort)
      .subscribe((data) => {
        this.socis = data["data"]["soci"]["data"];
        this.totalRecords = data["data"]["soci"]["total"];
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
    let dupArr: Array<any> = this.socis;
    let exportArr: Array<any> = [];
    for (let i = 0; i < dupArr.length; i++) {
      let compObj: any = {};
      compObj.created_at = dupArr[i].created_at;
      compObj.company_name = dupArr[i].customer.company_name
        ? dupArr[i].customer.company_name
        : "";
      compObj.soci_id = dupArr[i].soci_id;
      compObj.quote_full_id = dupArr[i].quote_full_id;
      compObj.quote_date = dupArr[i].quote_date;
      compObj.amount = dupArr[i].po_amount ? dupArr[i].po_amount : 0;
      compObj.po_no = dupArr[i].po_no;
      compObj.po_date = dupArr[i].po_date;
      compObj.fo_order_number = dupArr[i].fo_order_number;
      exportArr.push(compObj);
    }
    const fileName = "SOCI_Listing.xlsx";
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArr);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "test");

    XLSX.writeFile(wb, fileName);
  }

  columnFilter() {

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    // this.colors = [
    //   { label: "White", value: "White" },
    //   { label: "Green", value: "Green" },
    //   { label: "Silver", value: "Silver" },
    //   { label: "Black", value: "Black" },
    //   { label: "Red", value: "Red" },
    //   { label: "Maroon", value: "Maroon" },
    //   { label: "Brown", value: "Brown" },
    //   { label: "Orange", value: "Orange" },
    //   { label: "Blue", value: "Blue" },
    // ];
  }
}
