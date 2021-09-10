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
      care_area: '',
      contact_preference: '',
      contact_type: '',
      owner: ''
	});

  get form_controls() {
    // console.log(this.form.controls)
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
  }
  getData(id) {
    this.Service.find(id).subscribe((data)=>{
      var result = data.data;
      if (result.care_area) {
        result.care_area = result.care_area.split(",");
      }
      if (result.contact_preference) {
        result.contact_preference = result.contact_preference.split(",");
      }
      if (result.other_accounts) {
        result.other_accounts = result.other_accounts.split(",");
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
    this.Service.update(this.form.value, this.id).subscribe(res => {
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

}
