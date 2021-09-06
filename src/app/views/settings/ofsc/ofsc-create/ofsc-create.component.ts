import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OfscService } from '../ofsc.service';

@Component({
  selector: 'app-ofsc-create',
  templateUrl: './ofsc-create.component.html',
  styleUrls: ['./ofsc-create.component.scss']
})
export class OfscCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public ofscService: OfscService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      title: '',
      value: ''
    });
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ofsc/index');
  }

  submit(){
    this.ofscService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
