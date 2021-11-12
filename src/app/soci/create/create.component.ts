import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Quote } from "../../quote/quote";
import { SociService } from "../soci.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("createModal") modal: ModalDirective;

  private ngUnsubscribe = new Subject();

  tabIndex: number = -1;
  form: FormGroup;
  filteredQuotes: Quote[];
  selectedQuoteAdvanced: Quote;
  file: any;
  alertBody: string;
  quote_full_id: any;
  is_quote_id_found: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private sociService: SociService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quote_id: "",
      po_no: "",
      po_value: "",
      po_date: "",
      receive_po_date: "",
      file: null,
    });
  }

  addPo(quote_full_id) {
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
    console.log("event: ", event);
    var query = event.query;
    console.log("event-query: ", query);

    this.sociService
      .getFilteredQuote(query.toString())
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        console.log("filter_data:", data);
        this.filteredQuotes = data["data"];
        console.log(this.filteredQuotes);
      });
  }

  getFile(event) {
    console.log("file:", event);

    this.file = event.target.files[0];
    console.log("file-->:", this.file);
  }

  submit() {
    console.log(this.form.controls);
    const formData = new FormData();
    formData.append("quote_id", this.form.controls["quote_id"].value["id"]);
    formData.append("po_no", this.form.controls["po_no"].value);
    formData.append("po_date", this.form.controls["po_date"].value);
    formData.append("po_value", this.form.controls["po_value"].value);
    formData.append(
      "receive_po_date",
      this.form.controls["receive_po_date"].value
    );
    formData.append("file", this.file);
    this.sociService
      .store(formData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        console.log(res);
        this.modal.hide();
        this.alertBody = res["message"];
        this.successModal.show();
      });
  }
  resetForm() {
    this.quote_full_id = null;
    console.log("working value-->", this.quote_full_id);
  }
  redirectPage() {
    this.form.reset();
    this.router.navigateByUrl("soci/index");
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
