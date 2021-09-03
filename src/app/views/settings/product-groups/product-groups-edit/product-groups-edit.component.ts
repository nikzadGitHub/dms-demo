import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProductGroupsService } from '../product-groups.service';

@Component({
  selector: 'app-product-groups-edit',
  templateUrl: './product-groups-edit.component.html',
  styleUrls: ['./product-groups-edit.component.scss']
})
export class ProductGroupsEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public pgService: ProductGroupsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(params.get('id'));
      }
    });
    this.form =  this.formBuilder.group({
      data_area_id: '',
      product_group: '',
      product_group_code: '',
      is_active: 0
    });
  }

  getData(id) {
    this.pgService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/pg/index');
  }

  submit(){
    console.log(this.form.value);
    this.pgService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
