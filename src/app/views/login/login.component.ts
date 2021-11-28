import { Component, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { DialogInterface } from '../..//interfaces/dialog.interface';
import { AuthService } from '../../auth/auth.service';
import { DialogService } from '../../common/dialog/dialog.service';
import { SystemConfig } from '../../config/system-config';

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
    private dialogService: DialogService,
    // private dialog: MatDialog
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
}
