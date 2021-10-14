import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-quote-template',
  templateUrl: './quote-template.component.html',
  styleUrls: ['./quote-template.component.scss']
})
export class QuoteTemplateComponent implements OnInit {
  @ViewChild('successModal') successModal: ModalDirective;
  @ViewChild('dangerModal') dangerModal: ModalDirective;
  @ViewChild('fileUpload') fileUpload: ElementRef;
  alertBody: string;
  alertHeader: string;
  fileName = '';
  file!: File;
  durationInSeconds = 5;
  check = false;
  editable = true;
  url: any;
  imageWidth: any
  imageHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.getMobileOperatingSystem();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;

    if (this.file && (this.file.type == 'image/png' || this.file.type == 'image/jpg' || this.file.type == 'image/jpeg')) {
      this.check = true
      this.fileName = this.file.name;
      var reader = new FileReader();
      reader.readAsDataURL(this.file)
      var self = this;
      reader.onload = (event: any) => {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          self.imageWidth = image.width;
          self.imageHeight = image.height;
        };

        this.url = reader.result;
      }
      // Create form data
      const formData = new FormData();
      // Store form name as "file" with file data
      formData.append('file', this.file);
      this.alertBody = 'Image uploaded successfully';
      this.successModal.show();
    }
    else {
      console.log("Type: ", this.file.type);
      this.alertHeader = 'Image type error';
      this.alertBody = 'Please select png, jpg, jpeg';
      this.dangerModal.show();
    }

  }

  generatePDF() {
    let data = document.getElementById('pdfTable');
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210;
      var pageHeight = 300;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeights = doc.internal.pageSize.getHeight();
      var position = 10;
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.addPage();
      if (this.imageWidth > 50) {
        doc.addImage(this.url, '', 10, 10, 190, 210);
        doc.save('file.pdf');
      }
    });
  }
  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.match(/iPhone/i)) {
      console.log("Ios");
      this.editable = false
      return 'iOS';

    }
    else if (userAgent.match(/Android/i)) {
      console.log("android");
      this.editable = false
      return 'Android';
    }
    else {
      console.log("unknown");
      this.editable = true
      return 'unknown';
    }
  }
  reset() {
    this.fileUpload.nativeElement.value = null;
  }

}
