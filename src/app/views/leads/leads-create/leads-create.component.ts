import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AgenciesService } from '../../settings/agencies/agencies.service';
import { LeadsService } from '../leads.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-leads-create',
  templateUrl: './leads-create.component.html',
  styleUrls: ['./leads-create.component.scss']
})
export class LeadsCreateComponent implements OnInit {
  public autoResize: boolean = true;
  @ViewChild('successModal') successModal: ModalDirective;
  @ViewChild('dangerModal') dangerModal: ModalDirective;
  @ViewChild('foundModal') foundModal: ModalDirective;

  form: FormGroup;
  id: any;
  alertBody: string;
  alertHeader: string;
  alretType: string = 'company';
  filteredData: any = [];
  filteredCompanyData: any = [];
  source_items: any = [
    'Partner',
    'Partner 1',
    'Partner 2',
  ];
  states: any = [
    'Selangor',
    'Kuala Lumpur',
    'Perak',
    'aa'
  ];
  items: any = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
    { label: 'item 4' },
    { label: 'item 5' },
  ];
  message = 'Do you want to go to opportunity add page?';
  errorMessage = 'Customer already exist';
  isSkipcompany: any = false;
  isSkipcontact: any = false;

  constructor(
    private formBuilder: FormBuilder,
    public leadsService: LeadsService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //hardcode
      company_id: '',
      contact_id: '1',
      company_name: ['', Validators.required],
      contact_name: '',
      department: '',
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      mobile_number: ['', Validators.required],
      office_number: '',
      address: '',
      state: '',
      country: '',
      postcode: '',
      prospect_type: 'individual',
      source: '',
      other_source: '',
      lead_status: '',
      able_to_contact: '',
      do_we_sell_these_product: '',
      products_thats_not_selling: '',
      reason_for_disqualifying: '',
      remark: '',
      lead_owner: '',
      additional_notes: ''
    });
    this.form.get('prospect_type').valueChanges.subscribe(val => {
      this.form.controls['prospect_type'].setValue(val, { emitEvent: false });
    });
    this.form.get('other_source').valueChanges.subscribe(val => {
      if (val) {
        this.form.controls['source'].setValue(val, { emitEvent: false });
      }
    });
    this.authService.getUserSession().then(res => {
      if (res.fullname) {
        this.form.controls['lead_owner'].setValue(res.fullname, { emitEvent: false });
      }
    });
  }

  redirectPage() {
    this.router.navigateByUrl('leads/index');
  }
  gotoOpertunityPage() {
    this.router.navigateByUrl('opportunity/new');
  }

  submit() {
    let company_name = this.form.value.company_name;
    this.searchCompany(company_name)
    // if (this.isSkipcompany) {
    //   this.create(true);
    //   this.router.navigateByUrl('opportunity');
    // } else {
    // this.leadsService.searchCompany(company_name).subscribe(res => {
    //   if (res.success) {
    //     this.alertHeader = this.errorMessage;
    //     this.alertBody = res.message || this.message;
    //     this.alretType = 'company';
    //     this.foundModal.show();
    //     return;
    //   } else {
    //     this.create();
    //   }
    // });
    // }

  }
  searchCompany(company_name) {
    this.leadsService.searchCompany(company_name).subscribe(res => {
      console.log("search-res: ", res);
      if (res.success) {
        if (res.message == 'Company name is available.') {
          this.alertHeader=this.errorMessage;
          this.alertBody = this.message;
          this.foundModal.show();
        }
        else {
          this.create();
        }
      }

    });
  }
  create() {
    this.leadsService.store(this.form.value).subscribe(res => {
      console.log("store-res: ", res);

      this.alertBody = res.message || 'Created Successfully';
      this.id = res.data.value;
      this.successModal.show();

    }, error => {
      console.log("error: ", error.message);
      this.alertHeader = "Network Error";
      this.alertBody = 'Somethink went wrong please try again';
      this.dangerModal.show();
    });
  }

  verify() {
    let company_name = this.form.value.company_name;
    console.log("company_name: ", company_name);

    this.searchCompany(company_name);

    // this.leadsService.store(this.form.value).subscribe(
    //   res => {
    //     console.log("verify-res: ", res);

    //     this.id = res.data.id;
    //   }, error => {
    //     this.alertHeader = this.errorMessage;
    //     this.alertBody = error.message || this.message;
    //     this.foundModal.show();
    //   },
    //   () => {
    //     this.router.navigateByUrl('leads/' + this.id + '/verify');
    //   }
    // );
  }

  searchName(event) {
    let query = event.query;
    this.leadsService.searchContact(query).subscribe(res => {
      if (res.success) {
        if (res.data.length == 0) {
          setTimeout(() => {
            this.alertBody = 'Name is not Correct';
            this.dangerModal.show();
          }, 1000);
    
        } else {
          this.filteredData = res.data
        }
      }
    });
  }

  onSelect(event) {
    console.log(event);
    if (event) {
      let contact_name = this.form.get('contact_name');
      let mobile_number = this.form.get('mobile_number');
      let office_number = this.form.get('office_number');
      let postcode = this.form.get('postcode');
      let address = this.form.get('address');

      contact_name.patchValue(event.full_name);
      mobile_number.patchValue(event.mobile_phone);
      office_number.patchValue(event.business_phone);
      postcode.patchValue(event.zipcode);
      address.patchValue(event.address_1);
      this.form.patchValue(event);
    }
  }

  searchCompanyName(event) {
    let query = event;
    this.leadsService.searchCompany(query).subscribe(res => {
      if (res.success) {
        if (res.message == 'Company already exist.') {
          this.alertBody = 'Company already exist.';
          this.dangerModal.show();
        }
        else {
          this.alertBody = 'Company name is available to use.';
          this.successModal.show();
        }
        // this.filteredCompanyData = res.data;
      }
    }
    )
    // let filtered: any[] = [];
    // let query = event.query;
    // for (let i = 0; i < this.items.length; i++) {
    //   let data = this.items[i];
    //   if (data.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //     filtered.push(data);
    //   }
    // }

  }

  onSelectCompany(event, title) {
    console.log(event);
    if (event) {
      let selectedData = event.label;
      let control = this.form.get(title);
      control.patchValue(selectedData);
      this.form.patchValue(event);
    }
  }
}
