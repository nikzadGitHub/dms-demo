import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      title: '',
      value: ''
    });
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ot/index');
  }

  submit(){
    this.otService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
