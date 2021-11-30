import { Component, Output, Inject,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { DialogInterface } from '../..//interfaces/dialog.interface';
import { AuthService } from '../../auth/auth.service';
import { DialogService } from '../../common/dialog/dialog.service';
import { SystemConfig } from '../../config/system-config';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  @Output() errorMessage: string = "";

  formSubmitted : boolean = false;
  version: string = '';
  appType: string = '';  
  formLogin : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
    private azureAuthService : MsalService,
    private msalBroadcastService: MsalBroadcastService,
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
    this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
    )
    .subscribe((result: EventMessage) => {
      const payload = result.payload as AuthenticationResult;
      console.log('payload',payload)
      if(payload.accessToken){
        this.loginwithAzureToken(payload.accessToken)
      }
      this.azureAuthService.instance.setActiveAccount(payload.account);
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
  loginwithAzureToken =async(token:any)=> {
    //   let data  = {
    //   azure_token : token,
    //   fcm_code : ''
    // }
      // const headers= new HttpHeaders()
      // .set('x-app-token', SystemConfig.apiAppToken);
      // this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/azure-login", data, {
      //   headers: headers
      // })
      // .subscribe(async (res:any) => {
      //   if (!res.success) {
      //         this.dialogService.showErrorDialog(res.message);
      //       } else {
      //         localStorage.setItem('userRole',JSON.stringify(res.data))
      //         await this.authService.setAuthorizationToken(res.data.access_token);
      //         await this.authService.saveUserSession(JSON.stringify(res.data.user));
      //         await this.authService.getUserSession();
      //         await this.authService.loadToken();
      //         this.router.navigateByUrl("/dashboard", {replaceUrl: true});
      //       }
      // });


      let res = this.authService.loginAzureToken({
        azure_token: token,
        fcm_code: '', 
      }).pipe(
  
      ).subscribe(async (res) => {
        console.log(res);
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
      }, async (error) => {
        localStorage.clear();
        if (typeof error.error.message === 'undefined') {
          this.dialogService.showErrorDialog(SystemConfig.generalErrorMsg);
        } else {
          this.dialogService.showErrorDialog(error.error.message);
        }
      });
}
  loginUsingAzure(){
  this.azureAuthService.loginPopup();  
  }
}
