import { Platform } from "@angular/cdk/platform";
import { DOCUMENT } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import jsPDF from "jspdf";

import { ModalDirective } from "ngx-bootstrap/modal";
import { AuthService } from "../../auth/auth.service";
import { QuoteService } from "../quote.service";

@Component({
  selector: "app-quote-mobile-template",
  templateUrl: "./quote-mobile-template.component.html",
  styleUrls: ["./quote-mobile-template.component.scss"],
})
export class QuoteMobileTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("fileUpload") fileUpload: ElementRef;

  @ViewChild("bodyContent") bodyData: ElementRef;
  @ViewChild("headerContent") headerData: ElementRef;
  @ViewChild("headerQuoteNo") headerQuoteNo: ElementRef;
  @ViewChild("headerRefNo") headerRefNo: ElementRef;
  @ViewChild("headerDate") headerDate: ElementRef;
  @ViewChild("headerRevisionNo") headerRevisionNo: ElementRef;
  @ViewChild("headerExpDate") headerExpDate: ElementRef;
  @ViewChild("headerAttention") headerAttention: ElementRef;
  @ViewChild("headerAttentionEmail") headerAttentionEmail: ElementRef;
  @ViewChild("headerAttentionPhone") headerAttentionPhone: ElementRef;
  @ViewChild("headerAttentionFax") headerAttentionFax: ElementRef;
  @ViewChild("headerSalesPerson") headerSalesPerson: ElementRef;
  @ViewChild("headerSalesPersonEmail") headerSalesPersonEmail: ElementRef;
  @ViewChild("headerSalesPersonPhone") headerSalesPersonPhone: ElementRef;
  @ViewChild("headerSalesPersonFax") headerSalesPersonFax: ElementRef;

  @ViewChild("footerContent") footerData: ElementRef;
  @ViewChild("price") priceFooter: ElementRef;
  @ViewChild("deliveryP") deliveryPFooter: ElementRef;
  @ViewChild("validity") validityFooter: ElementRef;
  @ViewChild("paymentTer") paymentTerFooter: ElementRef;
  @ViewChild("manufacturer") manufacturerFooter: ElementRef;
  @ViewChild("warranty") warrantyFooter: ElementRef;
  @ViewChild("servicing") servicingFooter: ElementRef;

  alertBody: string;
  alertHeader: string;
  fileName = "";
  file!: File;
  durationInSeconds = 5;
  check = false;
  editable = false;
  url: any;
  imageWidth: any;
  imageHeight: number;
  single: boolean;
  elem;
  quotationId: number;
  templateId: number;
  userToken: any;
  quotationsTemplateData: any;
  salesPersonData: any;
  salesPersonSignature: any;
  quotationContent: any;
  productDetails: any;
  quotationContentFooter: any;
  quotationContentHeader: any;
  productTotalPrice: number;
  netTotal: number;
  discountedValue: string;
  successMessage: string;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private platform: Platform,
    private quoteService:QuoteService
  ) {}
  ngAfterViewInit(): void {
    this.getMobileOperatingSystem();
    // setTimeout(() => {
    let element = Array.from(
      document.getElementsByTagName(
        "app-sidebar"
      ) as HTMLCollectionOf<HTMLElement>
    );
    element.forEach((el) => {
      el.remove();
    });
    // }, 1000);
    let elem = Array.from(
      document.getElementsByClassName("main") as HTMLCollectionOf<HTMLElement>
    );
    elem.forEach((el) => {
      el.style.margin = "0 0 0 0";
    });
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.quotationId = params.quotationId;
      this.templateId = params.templateId;
      this.viewQuotationTemplate()
    })

    this.setToken();
    let element = Array.from(
      document.getElementsByTagName(
        "app-header"
      ) as HTMLCollectionOf<HTMLElement>
    );
    element.forEach((el) => {
      el.style.visibility = "hidden";
    });
    // this.getMobileOperatingSystem();
    this.elem = document.documentElement;
    // this.toggleFullScreen();
    // this.elem = document.documentElement;
  }

  viewQuotationTemplate() { 

    this.quoteService.getQuatation(this.quotationId).subscribe((res) =>{
      this.quotationsTemplateData = res["data"]
      this.salesPersonData = res["data"].quotations?.sales_person
      this.salesPersonSignature = this.salesPersonData?.signature_base64
      this.quotationContent = res["data"].quotations?.quotation_contents
      this.productDetails = res["data"].quotations?.products
      if(this.quotationContent){
        this.quotationContentFooter = JSON.parse(this.quotationContent?.footer_content)
        this.quotationContentHeader = JSON.parse(this.quotationContent?.header_content)
      }
      for(let i = 0; i < this.quotationsTemplateData.quotations.products.length; i++){
        this.productTotalPrice = parseFloat(this.productDetails[i].list_price);
      }
      this.netTotal = this.productTotalPrice - parseFloat(this.discountedValue)
      
    })
    
    // this.router.navigateByUrl("quote/view/quote-template");
  }

  downloadUploadedPDF() {
      if (this.url) {
        this.generateCompletePDF();
      } else {
        this.generateTemplatePDF();
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
      this.successMessage = "Image uploaded successfully";
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
    let margins = 36;
    let scale = (pWidth - margins * 2) / srcWidth;
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.setProperties;
    var self = this;
    pdf.html(document.getElementById("pdfTable"), {
      margin: [25, 25, 20, 25],
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        pdf.addPage();
        if (self.imageWidth > pWidth) {
          pdf.addImage(self.url, "", 10, 10, 550, self.imageHeight);
          pdf.save("Quotation.pdf");
        } else {
          pdf.addImage(self.url, "", 10, 10, self.imageWidth, self.imageHeight);
          pdf.save("Quotation.pdf");
        }
      },
    });
  }
  generateTemplatePDF() {
    let pWidth = 595.28;
    let srcWidth = document.getElementById("pdfTable").scrollWidth;
    let pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
      compress: true,
    });
    let margin = 36;
    let scale = (pWidth - margin * 2) / srcWidth;
    pdf.setProperties;

    pdf.html(document.getElementById("pdfTable"), {
      margin: [20, 25, 20, 25],
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        pdf.save("Quotation.pdf");
      },
    });
  }

  generateQuotationImagePDF() {
    let pWidth = 595.28;
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.setProperties;
    if (this.imageWidth > pWidth) {
      pdf.addImage(this.url, "", 10, 10, 550, this.imageHeight);
      pdf.save("Appendix.pdf");
    } else {
      pdf.addImage(this.url, "", 10, 10, this.imageWidth, this.imageHeight);
      pdf.save("Appendix.pdf");
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
      this.editable = false;
      return "iOS";
    } else if (userAgent.match(/iPad/i) || userAgent.match(/iPod/i)) {
      this.editable = true;
      return "iOS";
    } else if (userAgent.match(/Android/i)) {
      this.editable = false;
      return "Android";
    } else {
      this.router.navigateByUrl("quote/view/quote-template");
      return "unknown";
    }
  }

  BackButton() {}

  async setToken() {
    this.activatedRoute.queryParams.subscribe((params) => {
      (this.quotationId = params.quotationId),
        (this.templateId = params.templateId),
        (this.userToken = params.token);
    });
    // localStorage.setItem("auth-token", this.userToken);
    // await this.authService.setAuthorizationToken(this.userToken);
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

  savePreviewContent(){
    // let header =  this.headerData.nativeElement.innerHTML
    let header ={
      quoteNo: this.headerQuoteNo.nativeElement.innerText,
      refNo: this.headerRefNo.nativeElement.innerText,
      date: this.headerDate.nativeElement.innerText,
      revisionNo: this.headerRevisionNo.nativeElement.innerText,
      expDate: this.headerExpDate.nativeElement.innerText,
      attention: this.headerAttention.nativeElement.innerText,
      attentionEmail: this.headerAttentionEmail.nativeElement.innerText,
      attentionPhone: this.headerAttentionPhone.nativeElement.innerText,
      attentionFax: this.headerAttentionFax.nativeElement.innerText,
      salesPersonName: this.headerSalesPerson.nativeElement.innerText,
      salesPersonEmail: this.headerSalesPersonEmail.nativeElement.innerText,
      salesPersonPhone: this.headerSalesPersonPhone.nativeElement.innerText,
      salesPersonFax: this.headerSalesPersonFax.nativeElement.innerText,
    }
    // let footer = this.footerData.nativeElement.innerHTML
    let footer = {
      price:this.priceFooter.nativeElement.innerText,
      deliveryP:this.deliveryPFooter.nativeElement.innerText,
      validity:this.validityFooter.nativeElement.innerText,
      paymentTer:this.paymentTerFooter.nativeElement.innerText,
      manufacturer:this.manufacturerFooter.nativeElement.innerText,
      warranty:this.warrantyFooter.nativeElement.innerText,
      servicing:this.servicingFooter.nativeElement.innerText,
    }
    let fullBody = this.bodyData.nativeElement.innerHTML

    

    this.quoteService.saveTemplateData(this.quotationId,JSON.stringify(header),JSON.stringify(footer),fullBody).subscribe(state=>{
    })

      this.successMessage = "Data is Updated Successfully......!!";
      this.successModal.show();
  }

}
