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
import { DOCUMENT } from "@angular/common";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { QuoteService } from "../quote.service";
import { Quote } from "../quote";
import { FormGroup , FormBuilder} from "@angular/forms";
import { LocalStorageService } from "../../_services/local-storage.service";
@Component({
  selector: "app-quote-template",
  templateUrl: "./quote-template.component.html",
  styleUrls: ["./quote-template.component.scss"],
})
export class QuoteTemplateComponent implements OnInit {
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("fileUpload") fileUpload: ElementRef;
  @ViewChild("bodyContent") bodyData: ElementRef;
  @ViewChild("headerContent") headerData: ElementRef;
  @ViewChild("headerQuoteNo") headerQuoteNo: ElementRef;
  @ViewChild("headerRefNo") headerRefNo: ElementRef;
  @ViewChild("headerDate") headerDate: ElementRef;

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
  editable = true;
  url: any;
  quotationsTemplateData:any;
  elem;
  imageWidth: any;
  imageHeight: number;
  single: boolean = true;
  userToken: any;
  quotationId: any;
  quotationContent: any;
  successMessage: string;
  templateId: any;
  loader: boolean;
  blob: any;
  quotationContentFooter: any;
  quotationContentHeader: any;
  salesPersonData: any;
  salesPersonSignature: any;
  productTotalPrice: any;
  productDetails: any;
  discountedValue: any = 2000;
  netTotal: number;
  constructor(private router: Router,
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loaderService:LocalStorageService
    ) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {
      this.quotationId = params.quotation_id
      this.templateId = params.template_id

    })
    this.userToken = localStorage.getItem("auth-token");
    this.getMobileOperatingSystem();
    this.viewQuotationTemplate();
  }

  viewQuotationTemplate() {

    this.quoteService.getQuatation(this.quotationId).subscribe((res) =>{
      this.quotationsTemplateData = res["data"]
      // console.log('this is quotation-template',this.quotationsTemplateData);
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
        console.log('total product price =>',this.productTotalPrice);
      }
      this.netTotal = this.productTotalPrice - parseFloat(this.discountedValue)
      
      
      // console.log('quoatation content',this.quotationContentFooter)
      // console.log('quoatation content',this.quotationContentHeader)
      
    })
    // this.router.navigateByUrl("quote/view/quote-template");
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
    let extension = this.file.name.split('.').pop();
    // console.log("this.file",this.file,'extension =>',extension)

    if (this.file) {
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

      var formData = new FormData();
      formData.append("file", this.file);
      // this.alertHeader = "Image uploaded successfully";
      // this.alertBody = "Do you want to download one pdf or two pdf ?";
      // this.successModal.show();
    } else {
      this.alertHeader = "Image type error";
      this.alertBody = "Please select png, jpg or jpeg image";
      this.dangerModal.show();
    }
    
    // if (this.templateId && this.quotationId) {
    //   // this.loaderService.loaderSet(true)
    //   this.loader = true
    //   this.quoteService.uploadTemplateImage(formData, this.quotationId, this.templateId).subscribe(state => {
    //     if (state) {
    //       // this.loaderService.loaderSet(false)
    //   this.loader = false

    //     }
    //   })
    // } else {
    //   this.alertHeader = "Template Id Erroe";
    //   this.alertBody = "Template Id is Missing.....";
    //   this.dangerModal.show();
    // }
  }

  downloadUploadedPDF() {
    // if(this.templateId && this.quotationId){
    //   this.quoteService.downloadUploadedPdfTemplate(this.quotationId,1).subscribe(state=>{
        
    //   })
    // } else{
    //   this.alertHeader = "Template Id Erroe";
    //   this.alertBody = "Template Id is Missing.....";
    //   this.dangerModal.show();
    // }
    if (this.single == true) {
      this.generateCompletePDF();
    } else {
      if (this.url) {
        this.generateTemplatePDF();
        this.generateQuotationImagePDF();
      } else {
        this.generateTemplatePDF();
      }
    }
  }
  generateCompletePDF() {
    let data = document.getElementById("pdfTable");
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 1200;
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
        // doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.addPage();
      if (this.imageWidth > pageWidth) {
        doc.addImage(this.url, "", 10, 10, 190, 210);
        doc.save("Quotation.pdf");
      } else {
        doc.addImage(this.url, "", 10, 10, 190, 210);
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
      doc.save("Appendix.pdf");
    } else {
      doc.addImage(this.url, "", 10, 10, 190, 210);
      doc.save("Appendix.pdf");
    }
  }

  onePDF() {
    // console.log("One PDF working");
    this.successModal.hide();
    this.reset();
    this.single = true;
  }
  twoPDF() {
    // console.log("Two PDF working");
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

    if (
      userAgent.match(/iPhone/i) ||
      userAgent.match(/iPad/i) ||
      userAgent.match(/iPod/i)
    ) {
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
  savePreviewContent(){
    // let header =  this.headerData.nativeElement.innerHTML
    let header ={
      quoteNo: this.headerQuoteNo.nativeElement.innerText,
      refNo: this.headerRefNo.nativeElement.innerText,
      date: this.headerDate.nativeElement.innerText,
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
    // console.log("Header =>",header)
    // console.log("Footer =>",footer)
    // console.log("fullBody =>",fullBody)

    this.quoteService.saveTemplateData(this.quotationId,JSON.stringify(header),JSON.stringify(footer),fullBody).subscribe(state=>{
    })

      this.successMessage = "Data is Updated Successfully......!!";
      this.successModal.show();
  }

  // downloadQuotationTemplate(){
  //   this.quoteService.downloadQuoteTemplate(this.quotationId,this.templateId).subscribe(state=>{
  //     if(state){
  //       this.blob = new Blob([state as BlobPart], {type: 'application/pdf'});

  //       var downloadURL = window.URL.createObjectURL(state);
  //       var link = document.createElement('a');
  //       link.href = downloadURL;
  //       link.download = "Quotation_1.pdf";
  //       link.click();
  //     this.successMessage = "Quotaion Downloaded Successfully......!!";
  //     this.successModal.show();
  //     }
  //   })
  // }
  
}
