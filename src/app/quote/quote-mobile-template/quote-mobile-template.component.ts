import { DOCUMENT } from "@angular/common";
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import jsPDF from "jspdf";

import html2canvas from "html2canvas";
import { ModalDirective } from "ngx-bootstrap/modal";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-quote-mobile-template",
  templateUrl: "./quote-mobile-template.component.html",
  styleUrls: ["./quote-mobile-template.component.scss"],
})
export class QuoteMobileTemplateComponent implements OnInit {
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
  elem;
  quotationId: number;
  templateId: number;
  userToken: any;
  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setToken();
    let element = Array.from(
      document.getElementsByTagName(
        "app-header"
      ) as HTMLCollectionOf<HTMLElement>
    );
    element.forEach((el) => {
      el.style.visibility = "hidden";
    });
    this.getMobileOperatingSystem();
    this.toggleFullScreen();
    this.elem = document.documentElement;
  }

  downloadPDF() {
    if (this.single == true) {
      this.generateCompletePDF();
    } else {
      this.generateTemplatePDF();
      this.generateQuotationImagePDF();
    }
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
      formData.append("file", this.file);
      this.alertBody = "Image uploaded successfully";
      this.successModal.show();
    } else {
      this.alertHeader = "Image type error";
      this.alertBody = "Please select png, jpg, jpeg";
      this.dangerModal.show();
    }
  }

  generateCompletePDF() {
    let pWidth = 595.28;
    let srcWidth = document.getElementById("pdfTable").scrollWidth;
    let margin = 36;

    let scale = (pWidth - margin * 2) / srcWidth;
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.setProperties;
    var self = this;
    pdf.html(document.getElementById("pdfTable"), {
      // x: margin,
      // y: margin,
      margin: [20, 25, 20, 25],
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        if (self.url) {
          pdf.addPage();
          if (self.imageWidth > pWidth) {
            pdf.addImage(self.url, "", 10, 10, 550, self.imageHeight);
            pdf.save("Quotation.pdf");
          } else {
            pdf.addImage(
              self.url,
              "",
              10,
              10,
              self.imageWidth,
              self.imageHeight
            );
            pdf.save("Quotation.pdf");
          }
        } else {
          pdf.save("Quotation.pdf");
        }
      },
    });
  }
  generateTemplatePDF() {
    let pWidth = 595.28;
    let srcWidth = document.getElementById("pdfTable").scrollWidth;
    let margin = 36;

    let scale = (pWidth - margin * 2) / srcWidth;
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.setProperties;
    // var self = this;
    pdf.html(document.getElementById("pdfTable"), {
      // x: margin,
      // y: margin,
      margin: [20, 25, 20, 25],
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        pdf.save("Quotation.pdf");
        // if (self.url) {
        //   pdf.addPage();
        //   if (self.imageWidth > pWidth) {
        //     pdf.addImage(self.url, "", 10, 10, 550, self.imageHeight);
        //     pdf.save("Quotation.pdf");
        //   } else {
        //     pdf.addImage(
        //       self.url,
        //       "",
        //       10,
        //       10,
        //       self.imageWidth,
        //       self.imageHeight
        //     );
        //     pdf.save("Quotation.pdf");
        //   }
        // } else {
        //   pdf.save("Quotation.pdf");
        // }
      },
    });
  }

  generateQuotationImagePDF() {
    let pWidth = 595.28;
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.setProperties;
    if (this.url) {
      if (this.imageWidth > pWidth) {
        pdf.addImage(this.url, "", 10, 10, 550, this.imageHeight);
        pdf.save("Quotation.pdf");
      } else {
        pdf.addImage(this.url, "", 10, 10, this.imageWidth, this.imageHeight);
        pdf.save("Quotation.pdf");
      }
    } else {
      pdf.save("Quotation.pdf");
    }
  }

  toggleFullScreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
  }
  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.match(/iPhone/i)) {
      return "iOS";
    } else if (userAgent.match(/Android/i)) {
      return "Android";
    } else {
      this.router.navigateByUrl("quote/view/quote-template");
      return "unknown";
    }
  }

  async setToken() {
    this.activatedRoute.queryParams.subscribe((params) => {
      (this.quotationId = params.quotationId),
        (this.templateId = params.templateId),
        (this.userToken = params.token);
    });
    localStorage.setItem("auth-token", this.userToken);
    await this.authService.setAuthorizationToken(this.userToken);
  }
  onePDF() {
    this.successModal.hide();
    this.reset();
    this.single = true;
  }
  twoPDF() {
    this.successModal.hide();
    this.reset();
    this.single = false;
  }

  reset() {
    this.fileUpload.nativeElement.value = null;
  }
}
