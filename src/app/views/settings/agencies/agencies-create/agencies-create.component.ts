import { Component, OnInit, ViewChild } from '@angular/core';
import { AgenciesService } from '../agencies.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-agencies-create',
  templateUrl: './agencies-create.component.html',
  styleUrls: ['./agencies-create.component.scss']
})
export class AgenciesCreateComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;

  form: FormGroup;
  data_areas:any;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public agencyService: AgenciesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      data_area_id: '',
      agency: '',
      agency_code: '',
      is_active: 0
    });
    this.dataArea();
  }

  redirectPage(){
    this.router.navigateByUrl('settings/agencies/index');
  }

  submit(){
    this.agencyService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

  dataArea() {
    this.agencyService.getCareArea().subscribe(res => {
      this.data_areas = res.data;
    });
  }

}
