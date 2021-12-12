import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  file: any;
  fileName: any;
  check: boolean;
  imageWidth: number;
  imageHeight: number;
  url: string | ArrayBuffer;
  userRoleName: any;
  userName: any;
  successMessage: string;
  @ViewChild("successModal") successModal: ModalDirective;
  imageMsg: any;
  uploadMessage: boolean = false;

  constructor(private userProfileService:UserprofileService) { }

  ngOnInit(): void {
    let userRole = JSON.parse(localStorage.getItem("userRole"));
    if (userRole) {
      this.userRoleName = userRole?.roles[0]?.name;
      this.userName = userRole?.user.full_name;
    }
  }

  ngAfterViewInit(): void{
    this.getSignatureImage()
  }
  onImageUpload(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
    let extension = this.file.name.split('.').pop();
    this.imageMsg = false
    if(extension == 'png'){
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
        // this.alertHeader = "Image uploaded successfully";
        // this.alertBody = "Do you want to download one pdf or two pdf ?";
        // this.successModal.show();
      }
    } else{
      // this.successMessage = "Plz Select PNG files Only....";
      // this.successModal.show();
      this.imageMsg = true
    }
  }

  getSignatureImage(){
    this.userProfileService.getSignatureImage().subscribe(state=>{
      this.url = state['data'].signature
      
    })
  }

  saveSignatureImage(){
    var formData = new FormData();
    formData.append("signature", this.file);
    this.userProfileService.uploadSignatureImage(formData).subscribe(state=>{
      this.uploadMessage = true
      if(state){
        setTimeout(() => {
          this.uploadMessage = false
        }, 1000);
      }
    })
    // this.successMessage = "Plz Select PNG files Only....";
    // this.successModal.show();
  }
}
