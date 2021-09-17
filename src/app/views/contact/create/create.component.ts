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
  items:any = [
    {label: 'item 1'},
    {label: 'item 2'},
    {label: 'item 3'},
    {label: 'item 4'},
    {label: 'item 5'},
  ];

  get form_controls() {
    // console.log(this.form.controls)
    return this.form.controls; 
  }

  constructor(
    private formBuilder: FormBuilder,
    public Service: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      primary_customer: 'aa',
      other_accounts: '',
      solution: 'aa',
      full_name: ['aa', Validators.required],
      nickname: 'aa',
      job_title: 'aa',
      department: 'aa',
      specialization: 'aa',
      email: ['abc@hotmail.com', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      business_phone: 'aa',
      mobile_phone: 'aa',
      fax: 'aa',
      address_1: 'aa',
      address_2: 'aa',
      address_3: 'aa',
      city: 'aa',
      state: 'aa',
      country: 'aa',
      zipcode: 'aa',
      contact_category: 'aa',
      care_area: '',
      contact_preference: '',
      contact_type: 'aa',
      owner: 'aa'
    });
  }

  redirectPage(){
    this.router.navigateByUrl('contact/index');
  }

  submit(){
    this.submitted = true;
    var data = this.form.value;
    // if (data.care_area.length > 0 && data.care_area instanceof Array) {
    //   data.care_area = data.care_area.map(function(item) {
    //     return item['label'];
    //   }).join(",");
    // }
    // if (data.contact_preference.length > 0 && data.contact_preference instanceof Array) {
    //   data.contact_preference = data.contact_preference.map(function(item) {
    //     return item['label'];
    //   }).join(",");
    // }
    // if (data.other_accounts.length > 0 && data.other_accounts instanceof Array) {
    //   data.other_accounts = data.other_accounts.map(function(item) {
    //     return item['label'];
    //   }).join(",");
    // }
    console.log(data);
    this.Service.store(data).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }
  searchCust(event){
    let filtered: any[] = [];
    let query = event.query;
    //here change to api
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
    //here change to api
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

}
