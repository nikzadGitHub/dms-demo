import { Component, OnInit } from '@angular/core';
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

  constructor(private userProfileService:UserprofileService) { }

  ngOnInit(): void {
  }

  onImageUpload(event: any) {
    debugger
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
      console.log("formData =>",formData)
      this.userProfileService.uploadSignatureImage(formData).subscribe(state=>{
        console.log("uploaded images =>",state)
      })
      // this.alertHeader = "Image uploaded successfully";
      // this.alertBody = "Do you want to download one pdf or two pdf ?";
      // this.successModal.show();
    }

  }
}
