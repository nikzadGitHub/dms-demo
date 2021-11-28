import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ManufacturersService } from '../manufacturers.service';

@Component({
  selector: 'app-manufacturers-create',
  templateUrl: './manufacturers-create.component.html',
  styleUrls: ['./manufacturers-create.component.scss']
})
export class ManufacturersCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;

  form: FormGroup;
  data_areas:any;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public mService: ManufacturersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      data_area_id: '',
      manufacturer: '',
      manufacturer_code: '',
      is_active: 0
    });
    this.dataArea();
  }

  redirectPage(){
    this.router.navigateByUrl('settings/manufacturers/index');
  }

  submit(){
    this.mService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

  dataArea() {
    this.mService.getCareArea().subscribe(res => {
      this.data_areas = res.data;
    });
  }

}
