import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
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
  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('dangerModal') dangerModal : ModalDirective;
  @ViewChild('notFoundModal') notFoundModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;
  alertHeader: string;
  alretType: string = 'company';
  filteredData: any;
  source_items:any = [
    'Partner',
    'Partner 1',
    'Partner 2',
  ];
  states:any = [
    'Selangor',
    'Kuala Lumpur',
    'Perak',
  ];
  items:any = [
    {label: 'item 1'},
    {label: 'item 2'},
    {label: 'item 3'},
    {label: 'item 4'},
    {label: 'item 5'},
  ];
  not_found_message = 'Do you want to proceed to create new lead?';
  isSkipcompany:any = false;
  isSkipcontact:any = false;

  constructor(
    private formBuilder: FormBuilder,
    public leadsService: LeadsService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      //hardcode
      company_id: '',
      contact_id: '1',
      company_name: ['aa', Validators.required],
      contact_name: '',
      department: '',
      email: ['abc@hotmail.com', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      mobile_number: ['aa', Validators.required],
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
      this.form.controls['prospect_type'].setValue(val, {emitEvent: false});
    });
    this.form.get('other_source').valueChanges.subscribe(val => {
      if (val) {
        this.form.controls['source'].setValue(val, {emitEvent: false});
      }
    });
    this.authService.getUserSession().then(res => {
      if (res.fullname) {
        this.form.controls['lead_owner'].setValue(res.fullname, {emitEvent: false});
      }
    });
  }

  redirectPage(){
    this.router.navigateByUrl('leads/index');
  }
  skip(alretType) {
    if (alretType == 'company') {
      this.isSkipcompany = true;
      this.submit();
    } else if (alretType == 'contact') {
      this.isSkipcontact = true;
      this.submit();
    }
  }

  submit(){
    // if (this.form.value.company_id == '' && !this.isSkipcompany) {
    //   this.alertHeader = 'Company name not found!';
    //   this.alertBody = this.not_found_message;
    //   this.alretType = 'company';
    //   this.notFoundModal.show();
    // } else if (this.form.value.contact_id == '' && !this.isSkipcontact) {
    //   this.alertHeader = 'Individual name not found!';
    //   this.alertBody = this.not_found_message;
    //   this.alretType = 'contact';
    //   this.notFoundModal.show();
    // } else {
    this.leadsService.store(this.form.value).subscribe(res => {
      this.alertBody = res.message || 'Created Successfully';
      this.id = res.data.value;
      this.successModal.show();
    });
    // }
  }

  verify(){
    this.leadsService.store(this.form.value).subscribe(
      res => {
        this.id = res.data.id;
      },error => {
        this.alertBody = error.message || 'Failed';
        this.dangerModal.show();
      },() => {
        this.router.navigateByUrl('leads/'+ this.id + '/verify');
      });
  }

  searchName(event){
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

  onSelect(event, title)
  {
    let selectedData = event.label;
    let control = this.form.get(title);
    control.patchValue(selectedData);
  }

}
