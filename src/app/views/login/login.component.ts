import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../common/dialog/dialog.service';
import { SystemConfig } from '../../config/system-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  formSubmitted : boolean = false;
  version: string = '';
  appType: string = '';
  
  formLogin : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private authService: AuthService,
    private dialogService: DialogService
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
    this.formSubmitted = true;
    if(this.formLogin.valid) 
    {
	    this.resetForm();
    } 
    else 
    {
	    this.formSubmitted = false;
    }
  }

  resetForm() { 
    this.formLogin.reset();
  }
}
