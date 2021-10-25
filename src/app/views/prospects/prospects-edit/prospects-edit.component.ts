import { navItems } from './../../../_nav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProspectsService } from '../prospects.service';
import { LeadsService } from "../../leads/leads.service";
import * as moment from 'moment';

@Component({
  selector: 'app-prospects-edit',
  templateUrl: './prospects-edit.component.html',
  styleUrls: ['./prospects-edit.component.scss']
})

export class ProspectsEditComponent implements OnInit {
  @ViewChild('confirmModal') confirmModal : ModalDirective;
  moment: any = moment;
  public autoResize: boolean = true;
  @ViewChild('addContactModal') public addContactModal: ModalDirective;
  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('successContactModal') successContactModal : ModalDirective;
  id:any;
  alertBody: string;
  form: FormGroup;
  addContactForm: FormGroup;
  selectedId: any;
  modalHeader: any;
  modalBody: string = '';
  contactList: any = [];
  prospect_list:any;
  searchByName: string = '';
  filterData: any = [];
  primaryContact: string;
  primaryContactIndex: any = 0;

  reasons:any = [
    'Customer Budget',
    'Low Budget',
    'Scam',
  ];

  get form_controls() {
    return this.form.controls;
  }
  get getLog() : FormArray {
    return this.form.get("modifiction_log") as FormArray
  }

  constructor(
    private formBuilder: FormBuilder,
    public prospectsService: ProspectsService,
    private route: ActivatedRoute,
    private router: Router,
    private leadsService: LeadsService,
  ) {
    this.form =  this.formBuilder.group({
      id: '',
      created_at: '',
      company_name: '',
      contact_name: '',
      department: '',
      email: '',
      mobile_number: '',
      office_number: '',
      address: '',
      state: '',
      country: '',
      postcode: '',
      prospect_type: '',
      source: '',
      other_source: '',
      lead_status: '',
      able_to_contact: false,
      do_we_sell_these_product: false,
      products_thats_not_selling: '',
      reason_for_disqualifying: '',
      remark: '',
      lead_owner: '',
      additional_notes: '',
      modifiction_log: this.formBuilder.array([]) ,
    });

    this.addContactForm = this.formBuilder.group({
      id: '',
      name: '',
      title: '',
      phone: '',
      email: '',
      department: ''
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(this.id);
        this.getContactList(this.id);
        this.getModificationLog(this.id);
      }
    });
  }

  getData(id) {
    this.prospectsService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
    })
  }

  getContactList(id) {
    this.prospect_list = [];
    this.prospectsService.getContactList(id)
      .subscribe(res => {
        this.primaryContact = res['data']['primary_contact'];
        this.contactList = res['data']['contacts'];
        this.contactList.forEach(element => {
          this.prospect_list.push({
            'id': element.id,
            'name': element.full_name,
            'title': element.job_title,
            'phone': element.mobile_phone,
            'email': element.email,
            'department': element.department,
            'primary': element.id == this.primaryContact ? true : false,
          });
          this.primaryContactIndex= this.prospect_list.findIndex(x => x.primary === true);
        });
    });
  }

  getModificationLog(id) {
    this.prospectsService.getModificationLog(id).subscribe((data)=>{
      let log = this.form.get('modifiction_log') as FormArray;
      for (let index = 0; index < data.data.length; ++index) {
        log.push(this.formBuilder.group(data.data[index]));
      }
    });
  }

  redirectPage(){
    this.router.navigateByUrl('prospects/index');
  }

  submit(){
    this.prospectsService.update(this.form.value, this.id).subscribe(res => {
      //console.log(res);
      this.alertBody = res.message || 'Updated Successfully';
      this.id = res.data.value;
      this.successModal.show();
    })
  }

  deleteRow(i) {
    this.selectedId = i;
    this.modalHeader = 'Delete Contact';
    this.modalBody = 'Are you sure you want to delete this contact?'
    this.confirmModal.show();
  }

  deleteData(i) {
    let prospect = this.prospect_list[i];
    this.prospectsService.deleteContact(this.id, prospect.id).subscribe(res => {
      this.prospect_list.splice(i, 1);
      this.confirmModal.hide();
      this.modalBody = res.message || 'Contact deleted successfully';
      this.successContactModal.show();
    })
  }

  onNewContact(){
    this.addContactModal.show();
  }

  addContact(_frm) {
    this.addContactModal.hide();
    this.prospectsService.addContact(this.id, _frm.value.id).subscribe(res => {
      this.modalBody = res.message || 'Contact added successfully';
      this.successContactModal.show();

      this.prospect_list.push(
        {
          'id': _frm.value.id,
          'name': _frm.value.name,
          'title': _frm.value.title,
          'phone': _frm.value.phone,
          'email': _frm.value.email,
          'department': _frm.value.department,
          'primary': false,
        }
      );
    })
  }

  searchContact(name) {
    this.filterData = [];
    this.leadsService.searchContact(name).subscribe((res) => {
      if (res.success) {
        if (res.data.length == 0) {
          //do nothing
        } else {
          this.filterData = res.data;
          this.prospect_list.forEach(element => {
            this.filterData = this.filterData.filter(item => item.id !== element.id);
          });
        }
      }
    });
  }

  contactSelectedRadio(contact){
		this.addContactForm.patchValue({
			id: contact.id,
      name: contact.full_name,
      title: contact.job_title,
      phone: contact.mobile_phone,
      email: contact.email,
      department: contact.department
		});
	}

  updatePrimary(i, event: any) {
    if (this.primaryContactIndex !== i) {
      this.prospect_list[this.primaryContactIndex].primary = false;
      this.prospect_list[i].primary = true;
    }
    this.primaryContactIndex = i;

    this.prospectsService.setPrimaryContact(this.id, this.prospect_list[i].id).subscribe(res => {
      this.modalBody = res.message || 'Primary contact changed';
      this.successContactModal.show();
    });
  }
}
