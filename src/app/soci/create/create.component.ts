import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
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
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @Output() sociDataEvent = new EventEmitter<any>();
  private ngUnsubscribe = new Subject();

  tabIndex: number = -1;
  form: FormGroup;
  filteredQuotes: Quote[];
  selectedQuoteAdvanced: Quote;
  file: any;
  fileName: any;
  alertBody: string;
  quote_full_id: any;
  is_quote_id_found: boolean;
  soci_id: any;
  soci_data: Object;
  addMultipleFiles = [];

  isFileAdded: boolean;
  is_update_soci: boolean;
  fileExtension: any;
  isCreateSoci: boolean;
  poNumber: boolean;
  // rolesPermission: any[] = [];
  // user_json: any;
  // checkPermission: any[] = [];

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
      fileLabel: "",
      attachments: [],
    });
  }

  addPo(quote_full_id, sociId) {
    this.isCreateSoci = false;
    this.is_update_soci = true;
    this.soci_id = sociId;
    this.quote_full_id = quote_full_id;
    this.getAttachments();
    this.form.patchValue({
      quote_id: this.quote_full_id,
    });
    this.modal.show();
  }
  getAttachments() {
    this.sociService.getSpecificSoci(this.soci_id).subscribe((data) => {
      if(data["data"]["po_no"]){
        this.poNumber = true;
      this.form.patchValue({
        po_no:data["data"]["po_no"],
        po_date: data["data"]["po_date"],
        po_amount: data["data"]["po_amount"],
        receive_po_date: data["data"]["receive_po_date"],
      })
      }
      if (data["data"]["attachments"].length != 0) {
        this.isFileAdded = true;
        this.addMultipleFiles = data["data"]["attachments"];
      }
    });
  }
  createSoci() {
    this.form.reset();
    this.is_update_soci = false;
    this.isCreateSoci = true
    // this.isFileAdded = false;
    // this.addMultipleFiles = null;
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
    this.fileName = this.file.name;
    this.fileExtension = this.file.type;
  }

  addMultiFile() {
    const reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.file);
  }

  handleReaderLoaded(e) {
    let base64textString =
      "data:" + this.fileExtension + ";base64," + btoa(e.target.result);
    if (this.file && this.form.value.fileLabel) {
      this.isFileAdded = true;
      this.addMultipleFiles.push({
        remarks: this.form.value.fileLabel,
        file: base64textString,
        fileName: this.fileName,
      });

      this.form.get("fileLabel").reset();
      this.fileName = "";
      this.file = null;
    }
  }

  deleteFile(index, attachmentId) {
    if (attachmentId) {
      this.sociService
        .deleteQuery("/soci/attachment-delete/" + attachmentId)
        .subscribe((data) => {
          this.addMultipleFiles.splice(index, 1);
          if (this.addMultipleFiles.length == 0) {
            this.isFileAdded = false;
          }
        });
    } else {
      this.addMultipleFiles.splice(index, 1);
      if (this.addMultipleFiles.length == 0) {
        this.isFileAdded = false;
      }
    }
  }

  submit() {
    if (this.form.controls["quote_id"].value) {
      let formData = {
        quote_id: this.form.controls["quote_id"].value
          ? this.form.controls["quote_id"].value["id"]
          : "",
        po_no: this.form.controls["po_no"].value
          ? this.form.controls["po_no"].value
          : "",
        po_date: this.form.controls["po_date"].value,
        po_amount: this.form.controls["po_date"].value
          ? this.form.controls["po_amount"].value
          : "",
        receive_po_date: this.form.controls["receive_po_date"].value
          ? this.form.controls["receive_po_date"].value
          : "",
        file: this.addMultipleFiles,
      };

      if (this.quote_full_id && this.is_update_soci) {
        let dataWithoutId = this.addMultipleFiles.filter((x) => !x.id);
        formData["file"] = dataWithoutId;
        this.sociService
          .updatePODetail(this.soci_id, formData)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe((res) => {
            this.soci_data = res;
            this.soci_data["edit"] = true;
            this.sendSociData(this.soci_data);
            this.modal.hide();
            this.alertBody = res["message"];
            this.successModal.show();
            setTimeout(() => {
              this.successModal.hide();
              this.form.reset();
              this.addMultipleFiles = [];
            }, 2000);
          });
      } else {
        this.sociService
          .store(formData)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe((res) => {
            this.soci_data = res;
            this.soci_data["edit"] = false;
            this.sendSociData(this.soci_data);
            this.form.reset();
            this.addMultipleFiles = [];
            this.modal.hide();
            this.alertBody = res["message"];
            this.successModal.show();
          });
      }
    } else {
      this.alertBody = "Please enter quotation reference no";
      this.dangerModal.show();
      setTimeout(() => {
        this.dangerModal.hide();
      }, 2000);
    }
  }
  resetForm() {
    this.quote_full_id = null;
    this.poNumber = false;
    this.form.get("po_no").reset();
    this.form.get("po_amount").reset();
    this.form.get("po_date").reset();
    this.form.get("receive_po_date").reset();

  }
  redirectPage() {
    this.isCreateSoci = false;
    this.is_update_soci = false;
    
    this.form.reset();
    this.addMultipleFiles = [];
    this.router.navigateByUrl("soci/index");
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  sendSociData(soci_data) {
    this.sociDataEvent.emit(soci_data);
  }
}
