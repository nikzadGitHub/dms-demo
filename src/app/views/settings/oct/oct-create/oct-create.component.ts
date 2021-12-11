import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OctService } from '../oct.service';

@Component({
  selector: 'app-oct-create',
  templateUrl: './oct-create.component.html',
  styleUrls: ['./oct-create.component.scss']
})
export class OctCreateComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    public octService: OctService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      title: '',
      value: ''
    });
  }

  redirectPage(){
    this.router.navigateByUrl('settings/oct/index');
  }

  submit(){
    this.octService.store(this.form.value).subscribe(res => {
        this.alertBody = res.message || 'Created Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
