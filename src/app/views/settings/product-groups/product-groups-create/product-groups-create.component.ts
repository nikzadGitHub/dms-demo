import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProductGroupsService } from '../product-groups.service';

@Component({
  selector: 'app-product-groups-create',
  templateUrl: './product-groups-create.component.html',
  styleUrls: ['./product-groups-create.component.scss']
})
export class ProductGroupsCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;
  
  constructor(
    private formBuilder: FormBuilder,
    public pgService: ProductGroupsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      data_area_id: '',
      product_group: '',
      product_group_code: '',
      is_active: 0
    });
  }

  redirectPage(){
    this.router.navigateByUrl('settings/pg/index');
  }

  submit(){
    this.pgService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
