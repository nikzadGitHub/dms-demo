import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OfscService } from '../ofsc.service';

@Component({
  selector: 'app-ofsc-edit',
  templateUrl: './ofsc-edit.component.html',
  styleUrls: ['./ofsc-edit.component.scss']
})
export class OfscEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public ofscService: OfscService,
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
      title: '',
      value: ''
    });
  }

  getData(id) {
    this.ofscService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ofsc/index');
  }

  submit(){
    console.log(this.form.value);
    this.ofscService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
