import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AgenciesService } from '../agencies.service';

@Component({
  selector: 'app-agencies-edit',
  templateUrl: './agencies-edit.component.html',
  styleUrls: ['./agencies-edit.component.scss']
})
export class AgenciesEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public agencyService: AgenciesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(params.get('id'));
      }
    });
    this.form =  this.formBuilder.group({
      data_area_id: '',
      agency: '',
      agency_code: '',
      is_active: 0
    });
  }

  getData(id) {
    this.agencyService.find(id).subscribe((data)=>{
      console.log(data);
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/agencies/index');
  }

  submit(){
    console.log(this.form.value);
    this.agencyService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }
}
