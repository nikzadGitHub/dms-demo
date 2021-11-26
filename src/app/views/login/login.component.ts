import { Component, Output, Inject,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { DialogInterface } from '../..//interfaces/dialog.interface';
import { AuthService } from '../../auth/auth.service';
import { DialogService } from '../../common/dialog/dialog.service';
import { SystemConfig } from '../../config/system-config';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  @Output() errorMessage: string = "";

  formSubmitted : boolean = false;
  version: string = '';
  appType: string = '';
  timesetoutId: any =  null;
  
  formLogin : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
    private azureAuthService : MsalService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.version = SystemConfig.version;
    this.appType = SystemConfig.appType;
    
    this.formLogin = this.fb.group({
      username: new FormControl('', [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(255)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(128)
      ])
    });
  }

  onFormSubmit(): void {
    
    if(this.formLogin.valid) 
    {
      // this.dialogService.showErrorDialog("In");
      this.formSubmitted = true;

      let res = this.authService.loginUser({
        username: this.formLogin.get("username").value + "", 
        password: this.formLogin.get("password").value + ""
      }).pipe(
  
      ).subscribe(async (res) => {
        console.log(res);
        // await loading.dismiss();
        if (!res.success) {
          this.dialogService.showErrorDialog(res.message);
          // this.errorMessage = res.message;
          // this.dangerModal.show();
        } else {
          localStorage.setItem('userRole',JSON.stringify(res.data))
          await this.authService.setAuthorizationToken(res.data.access_token);
          await this.authService.saveUserSession(JSON.stringify(res.data.user));
          await this.authService.getUserSession();
  
          await this.authService.loadToken();
          this.resetForm();

          this.router.navigateByUrl("/dashboard", {replaceUrl: true});
  
        }
      }, async (error) => {
        console.log(error);
  
        // await loading.dismiss();
  
        if (typeof error.error.message === 'undefined') {
          this.dialogService.showErrorDialog(SystemConfig.generalErrorMsg);
          // this.errorMessage = SystemConfig.generalErrorMsg;
          // this.dangerModal.show();
        } else {
          // this.errorMessage = error.error.message;
          // this.dangerModal.show();
          this.dialogService.showErrorDialog(error.error.message);
        }
      });

	    
    } 
    else 
    {
	    this.formSubmitted = false;
      this.dialogService.showErrorDialog("Username or Password is invalid");
      // this.errorMessage = "Username or Password is invalid";
      // this.dangerModal.show();
    }
  }

  resetForm() { 
    this.formLogin.reset();
  }
  getToken =async()=> {
   const localStorageKeyList = Object.keys(localStorage)
   if(localStorageKeyList.length){
    const accessTokenKey = localStorageKeyList.findIndex(e => e.includes('accesstoken'))
    const refreshtokenKey = localStorageKeyList.findIndex(e => e.includes('refreshtoken'))
    if(accessTokenKey && refreshtokenKey){

    const accesstoken =  JSON.parse(localStorage.getItem(localStorageKeyList[accessTokenKey]) || '')
    const refreshtoken =  JSON.parse(localStorage.getItem(localStorageKeyList[refreshtokenKey]) || '')
    let data  = {
      azure_token : accesstoken?.secret,
      refresh_token : refreshtoken?.secret,
      fcm_code : ''
    }
      const headers= new HttpHeaders()
      .set('x-app-token', SystemConfig.apiAppToken);
      this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/azure-login", data, {
        headers: headers
      })
      .subscribe(async (res:any) => {
              clearInterval(this.timesetoutId);
              if (!res.success) {
                    this.dialogService.showErrorDialog(res.message);
                  } else {
                    localStorage.setItem('userRole',JSON.stringify(res.data))
                    await this.authService.setAuthorizationToken(res.data.access_token);
                    await this.authService.saveUserSession(JSON.stringify(res.data.user));
                    await this.authService.getUserSession();
                    await this.authService.loadToken();
                    this.router.navigateByUrl("/dashboard", {replaceUrl: true});
                  }

      });

    }
  }
}
  loginUsingAzure(){
  this.azureAuthService.loginPopup();  
  this.timesetoutId = setInterval(this.getToken, 3000);
  }
}
