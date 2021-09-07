import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CareAreasService } from '../care-areas.service';

@Component({
  selector: 'app-care-areas-edit',
  templateUrl: './care-areas-edit.component.html',
  styleUrls: ['./care-areas-edit.component.scss']
})
export class CareAreasEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public caService: CareAreasService,
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
      care_area: '',
      care_area_code: '',
      is_active: 0
    });
  }

  getData(id) {
    this.caService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ca/index');
  }

  submit(){
    this.caService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
