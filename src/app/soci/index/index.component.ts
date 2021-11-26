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
  rolesPermission = [];
  user_json: any;
  isPermission: boolean;

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
    this.socis.unshift($event.data);
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
}
