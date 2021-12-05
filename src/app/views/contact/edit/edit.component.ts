import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;

  submitted:any = false;
  id:any;
  alertBody: string;
  filteredData: any;
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

  form: FormGroup = this.formBuilder.group({
      primary_customer: '',
      other_accounts: '',
      solution: '',
      full_name: ['', Validators.required],
      nickname: '',
      job_title: '',
      department: '',
      specialization: '',
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      business_phone: '',
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
      care_areas: '',
      contact_preferences: '',
      contact_type: '',
      owner: ''
	});

  get form_controls() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    public Service: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(params.get('id'));
      }
    });
    this.contactPreferences();
    this.department();
    this.careAreas();
    this.contactType();
  }
  getData(id) {
    this.Service.find(id).subscribe((data)=>{
      var result = data.data;
      result.contact_preferences = [];
      result.other_accounts = [];
      result.care_areas = [];
      if (result.contact_care_area) {
        for(var i=0; i<result.contact_care_area.length; i++){
          result.care_areas.push({ id: result.contact_care_area[i].id, value: result.contact_care_area[i].value});
        }
      }
      if (result.contact_contact_preference) {
        for(var i=0; i<result.contact_contact_preference.length; i++){
          result.contact_preferences.push({ id: result.contact_contact_preference[i].id, value: result.contact_contact_preference[i].value});
        }
      }
      if (result.contact_other_account) {
        for(var i=0; i<result.contact_other_account.length; i++){
          result.other_accounts.push({ id: result.contact_other_account[i].id, value: result.contact_other_account[i].value});
        }
      }
      this.form.patchValue(result);
    })
  }

  onSelect(event, title)
  {
    let selectedData = event.label;
    let control = this.form.get(title);
    control.patchValue(selectedData);
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
      data.care_areas = [];
    }
    if (data.contact_preferences.length > 0 && data.contact_preferences instanceof Array) {
      data.contact_preferences = data.contact_preferences.map(function(item) {
        return item['value'];
      });
    } else {
      data.contact_preferences = [];
    }
    if (data.other_accounts.length > 0 && data.other_accounts instanceof Array) {
      data.other_accounts = data.other_accounts.map(function(item) {
        return item['label'];
      }).join(",");
    } else {
      data.other_accounts = [];
    }
    this.Service.update(data, this.id).subscribe(res => {
    
      
        this.alertBody = res.message || 'Updated Successfully';
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

  removeSelectedItem(index, title) {
    let control = this.form.get(title).value;
    control.splice(index,1);
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
