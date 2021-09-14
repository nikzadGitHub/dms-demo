import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CareAreasService } from '../care-areas.service';

@Component({
  selector: 'app-care-areas-create',
  templateUrl: './care-areas-create.component.html',
  styleUrls: ['./care-areas-create.component.scss']
})
export class CareAreasCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;

  form: FormGroup;
  data_areas:any;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public caService: CareAreasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      data_area_id: '',
      care_area: '',
      care_area_code: '',
      is_active: 0
    });
    this.dataArea();
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ca/index');
  }

  submit(){
    this.caService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

  dataArea() {
    this.caService.getCareArea().subscribe(res => {
      this.data_areas = res.data;
    });
  }

}
