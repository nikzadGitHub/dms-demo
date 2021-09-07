import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ManufacturersService } from '../manufacturers.service';

@Component({
  selector: 'app-manufacturers-edit',
  templateUrl: './manufacturers-edit.component.html',
  styleUrls: ['./manufacturers-edit.component.scss']
})
export class ManufacturersEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public mService: ManufacturersService,
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
      manufacturer: '',
      manufacturer_code: '',
      is_active: 0
    });
  }

  getData(id) {
    this.mService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/manufacturers/index');
  }

  submit(){
    console.log(this.form.value);
    this.mService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
