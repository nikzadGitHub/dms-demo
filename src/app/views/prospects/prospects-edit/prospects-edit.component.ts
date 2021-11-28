import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProspectsService } from '../prospects.service';

@Component({
  selector: 'app-prospects-edit',
  templateUrl: './prospects-edit.component.html',
  styleUrls: ['./prospects-edit.component.scss']
})
export class ProspectsEditComponent implements OnInit {
  public autoResize: boolean = true;
  @ViewChild('successModal') successModal : ModalDirective;
  id:any;
  alertBody: string;
  form: FormGroup;
  reasons:any = [
    'Customer Budget',
    'Low Budget',
    'Scam',
  ];
  prospect_list:any = [
    {name: 'abc', title: 'abc',phone: 'abc', email:'abc', department:'abc'},
    {name: 'abc', title: 'abc',phone: 'abc', email:'abc', department:'abc'}
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
    private router: Router
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
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(params.get('id'));
        this.getModificationLog(this.id);
      }
    });
  }

  getData(id) {
    this.prospectsService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  getModificationLog(id) {
    this.prospectsService.getModificationLog(id).subscribe((data)=>{
      let log = this.form.get('modifiction_log') as FormArray;
      for (let index = 0; index < data.data.length; ++index) {
        log.push(this.formBuilder.group(data.data[index]));
      }
      console.log(log);
    });
  }

  redirectPage(){
    this.router.navigateByUrl('prospects/index');
  }

  submit(){
    this.prospectsService.update(this.form.value, this.id).subscribe(res => {
      console.log(res);
      this.alertBody = res.message || 'Updated Successfully';
      this.id = res.data.value;
      this.successModal.show();
    })
  }

  selectedRow(i) {
    console.log(i);
  }
  deleteRow(i) {
    console.log(i);
  }

}
