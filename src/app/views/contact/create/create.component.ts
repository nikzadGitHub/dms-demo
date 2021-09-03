import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;

  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public Service: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      primary_customer: '',
      other_accounts: '',
      solution: '',
      full_name: '',
      nickname: '',
      job_title: '',
      department: '',
      specialization: '',
      email: '',
      business_phone: '',
      mobile_phone: '',
      fax: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      contact_category: '',
      care_area: '',
      contact_preference: '',
      contact_type: '',
      owner: ''
    });
  }

  redirectPage(){
    this.router.navigateByUrl('contact/index');
  }

  submit(){
    this.Service.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }


}
