import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OfstService } from '../ofst.service';

@Component({
  selector: 'app-ofst-edit',
  templateUrl: './ofst-edit.component.html',
  styleUrls: ['./ofst-edit.component.scss']
})
export class OfstEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public ofstService: OfstService,
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
    this.ofstService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ofst/index');
  }

  submit(){
    console.log(this.form.value);
    this.ofstService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
