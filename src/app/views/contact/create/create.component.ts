import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  submitted:any = false;
  form: FormGroup;
  id:any;
  alertBody: string;
  filteredData: any;
  filteredNameData: any;
  data_contactPreference: any;
  data_department: any;
  data_careAreas: any;
  data_contactType: any;
  items:any = [
    {label: 'item 1'},
    {label: 'item 2'},
    {label: 'item 3'},
    {label: 'item 4'},
    {label: 'item 5'},
  ];

  get form_controls() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    public Service: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      primary_customer: '2',
      other_accounts: '',
      solution: '',
      full_name: ['Test name', Validators.required],
      nickname: '',
      job_title: 'Test Job ',
      department: '',
      specialization: '',
      email: ['test@test.com', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      business_phone: '12345678',
      mobile_phone: '',
      fax: '',
      address_1: '',
      address_2: '',
      address_3: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      contact_category: '',
      care_area_code: 'care111',
      care_areas: '',
      contact_preferences: '',
      contact_type: '',
      owner: '',
      external_id:"",
      // care_areas:  [
      //   "care area 1",
      //   "care area 22"]
       
       
    
  
    });
    this.contactPreferences();
    this.department();
    this.careAreas();
    this.contactType();
  }

  
  redirectPage(){
    this.router.navigateByUrl('contact/index');
  }

  submit(){
    this.submitted = true;
    var data = this.form.value;
    if (data.care_areas.length > 0 && data.care_areas instanceof Array) {
      data.care_areas = data.care_areas.map(function(item) {
        return item['value'];
      });
    } else {
      data.care_areas = ['aesthetic care','Test'];
    }
    if (data.contact_preferences.length > 0 && data.contact_preferences instanceof Array) {
      data.contact_preferences = data.contact_preferences.map(function(item) {
        return item['value'];
      });
    } else {
      data.contact_preferences = ['email','bulk email'];
    }
    if (data.other_accounts.length > 0 && data.other_accounts instanceof Array) {
      data.other_accounts = data.other_accounts.map(function(item) {
        return item['label'];
      })
      // .join(",");
    } else {
      data.other_accounts = [1,2];
    }
    this.Service.store(data).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }
  searchCust(event){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.items.length; i++) {
      let data = this.items[i];
      if (data.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(data);
      }
    }

    this.filteredData = filtered;
  }
  searchName(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.items.length; i++) {
      let data = this.items[i];
      if (data.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(data);
      }
    }

    this.filteredNameData = filtered;
  }

  removeSelectedItem(index, title) {
    let control = this.form.get(title).value;
    control.splice(index,1);
  }

  onSelect(event, title)
  {
    let selectedData = event.label;
    let control = this.form.get(title);
    control.patchValue(selectedData);
  }

  contactPreferences() {
    this.Service.getContactPreferences().subscribe(res => {
      this.data_contactPreference = res.data;
    });
  }

  department() {
    this.Service.getDepartment().subscribe(res => {
      this.data_department = res.data;
    });
  }

  careAreas() {
    this.Service.getCareAreas().subscribe(res => {
      this.data_careAreas = res.data;
    });
  }

  contactType() {
    this.Service.getContactType().subscribe(res => {
      this.data_contactType = res.data;
    });
  }

}
