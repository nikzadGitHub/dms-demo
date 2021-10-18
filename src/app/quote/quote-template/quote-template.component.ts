import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ModalDirective } from "ngx-bootstrap/modal";
import * as screenfull from "screenfull";
import { DOCUMENT } from "@angular/common";
import { NavigationExtras, Router } from "@angular/router";
@Component({
  selector: "app-quote-template",
  templateUrl: "./quote-template.component.html",
  styleUrls: ["./quote-template.component.scss"],
})
export class QuoteTemplateComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("fileUpload") fileUpload: ElementRef;
  alertBody: string;
  alertHeader: string;
  fileName = "";
  file!: File;
  durationInSeconds = 5;
  check = false;
  editable = true;
  url: any;
  imageWidth: any;
  imageHeight: number;
  single: boolean;
  userToken: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userToken = localStorage.getItem("auth-token");

    this.getMobileOperatingSystem();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;

    if (
      this.file &&
      (this.file.type == "image/png" ||
        this.file.type == "image/jpg" ||
        this.file.type == "image/jpeg")
    ) {
      this.check = true;
      this.fileName = this.file.name;
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      var self = this;
      reader.onload = (event: any) => {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          self.imageWidth = image.width;
          self.imageHeight = image.height;
        };

        this.url = reader.result;
      };

      const formData = new FormData();
      // Store form name as "file" with file data
      formData.append("file", this.file);
      this.alertHeader = "Image uploaded successfully";
      this.alertBody = "Do you want to download one pdf or two pdf ?";
      this.successModal.show();
    } else {
      this.alertHeader = "Image type error";
      this.alertBody = "Please select png, jpg or jpeg image";
      this.dangerModal.show();
    }
  }

  downloadPDF() {
    if (this.single == true) {
      this.generateCompletePDF();
    } else {
      this.generateTemplatePDF();
      this.generateQuotationImagePDF();
    }
  }
  generateCompletePDF() {
    let data = document.getElementById("pdfTable");
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 300;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeights = doc.internal.pageSize.getHeight();
      var position = 10;
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      if (this.url) {
        doc.addPage();
        if (this.imageWidth > pageWidth) {
          doc.addImage(this.url, "", 10, 10, 190, 210);
          doc.save("Quotation.pdf");
        } else {
          doc.addImage(this.url, "", 10, 10, 190, 210);
          doc.save("Quotation.pdf");
        }
      } else {
        doc.save("Quotation.pdf");
      }
    });
  }

  generateTemplatePDF() {
    let data = document.getElementById("pdfTable");
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 300;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeights = doc.internal.pageSize.getHeight();
      var position = 10;
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("Quotation.pdf");
    });
  }
  generateQuotationImagePDF() {
    var doc = new jsPDF("p", "mm");
    const pageWidth = doc.internal.pageSize.getWidth();
    if (this.imageWidth > pageWidth) {
      doc.addImage(this.url, "", 10, 10, 190, 210);
      doc.save("Quotation.pdf");
    } else {
      doc.addImage(this.url, "", 10, 10, 190, 210);
      doc.save("Quotation.pdf");
    }
  }

  onePDF() {
    console.log("One PDF working");
    this.successModal.hide();
    this.reset();
    this.single = true;
  }
  twoPDF() {
    console.log("Two PDF working");
    this.successModal.hide();
    this.reset();
    this.single = false;
  }
  getMobileOperatingSystem() {
    // let navigate: NavigationExtras = {
    //   queryParams: {
    //     quotationId: 1,
    //     templateId: 10,
    //     token: this.userToken,
    //   },
    // };
    var userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.match(/iPhone/i)) {
      this.editable = false;
      this.router.navigate(["quote/mobile/view/quote-template"]);
      return "iOS";
    } else if (userAgent.match(/Android/i)) {
      this.editable = false;
      this.router.navigate(["quote/mobile/view/quote-template"]);
      return "Android";
    } else {
      this.editable = true;
      return "unknown";
    }
  }
  reset() {
    this.fileUpload.nativeElement.value = null;
  }
}
