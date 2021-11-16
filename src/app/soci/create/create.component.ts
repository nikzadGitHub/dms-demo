import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Quote } from "../../quote/quote";
import { Soci } from "../soci";
import { SociService } from "../soci.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("createModal") modal: ModalDirective;
  @Output() sociDataEvent = new EventEmitter<any>();
  private ngUnsubscribe = new Subject();

  tabIndex: number = -1;
  form: FormGroup;
  filteredQuotes: Quote[];
  selectedQuoteAdvanced: Quote;
  file: any;
  alertBody: string;
  quote_full_id: any;
  is_quote_id_found: boolean;
  soci_id: any;
  soci_data: Object;
  //
  // sort: any;
  // search_text: string = "";
  // pageItems: number = 10;
  // totalRecords: number;
  // datasource: any;
  // pages: any[];
  // socis: Soci[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sociService: SociService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quote_id: "",
      po_no: "",
      po_amount: "",
      po_date: "",
      receive_po_date: "",
      file: null,
    });
  }

  addPo(quote_full_id, sociId) {
    this.soci_id = sociId;
    this.quote_full_id = quote_full_id;
    // this.is_quote_id_found = true
    this.form.patchValue({
      quote_id: this.quote_full_id,
    });
    this.modal.show();
  }
  createSoci() {
    this.form.reset();
    this.modal.show();
  }

  filterQuote(event) {
    var query = event.query;

    this.sociService
      .getFilteredQuote(query.toString())
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        this.filteredQuotes = data["data"];
      });
  }

  getFile(event) {
    this.file = event.target.files[0];
  }

  submit() {
    const formData = new FormData();

    // formData.append("quote_id", this.form.controls["quote_id"].value["id"]);
    formData.append("quote_id", this.form.controls["quote_id"].value["id"]);
    formData.append("po_no", this.form.controls["po_no"].value);
    formData.append("po_date", this.form.controls["po_date"].value);
    formData.append("po_amount", this.form.controls["po_amount"].value);
    formData.append(
      "receive_po_date",
      this.form.controls["receive_po_date"].value
    );
    formData.append("file", this.file);
    if (this.quote_full_id) {
      this.sociService
        .updatePODetail(this.soci_id, formData)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          console.log("update-soci-res: ", res);
          this.soci_data = res
          this.sendSociData(this.soci_data)
          this.modal.hide();
          this.alertBody = res["message"];
          this.successModal.show();
        });
    } else {
      this.sociService
        .store(formData)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          console.log("create-soci-res: ", res);
          this.soci_data = res
          this.sendSociData(this.soci_data)
          this.modal.hide();
          this.alertBody = res["message"];
          this.successModal.show();
        });
    }
  }
  resetForm() {
    this.quote_full_id = null;
  }
  redirectPage() {
    this.form.reset();
    this.router.navigateByUrl("soci/index");
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  sendSociData(soci_data) {
    console.log("SOCI-data:-------->", soci_data);
    
    this.sociDataEvent.emit(soci_data)
  }
}
