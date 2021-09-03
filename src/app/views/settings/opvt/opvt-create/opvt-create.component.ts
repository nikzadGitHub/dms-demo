import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OpcsService } from '../../opcs/opcs.service';
import { OpvtService } from '../opvt.service';

@Component({
  selector: 'app-opvt-create',
  templateUrl: './opvt-create.component.html',
  styleUrls: ['./opvt-create.component.scss']
})
export class OpvtCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public opvtService: OpvtService,
    public pgService: OpcsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      data_area_id: '',
      opc: '',
      opc_code: '',
      is_active: 0
    });
  }

  redirectPage(){
    this.router.navigateByUrl('settings/opvt/index');
  }

  submit(){
    this.pgService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
