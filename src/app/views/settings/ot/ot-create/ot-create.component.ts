import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OpcsService } from '../../opcs/opcs.service';
import { OtService } from '../ot.service';

@Component({
  selector: 'app-ot-create',
  templateUrl: './ot-create.component.html',
  styleUrls: ['./ot-create.component.scss']
})
export class OtCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public otService: OtService,
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
    this.router.navigateByUrl('settings/ot/index');
  }

  submit(){
    this.pgService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
