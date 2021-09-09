import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Quote } from '../../quote/quote';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('createModal') modal : ModalDirective

  private ngUnsubscribe = new Subject;

  tabIndex: number = -1;
  form: FormGroup;
  filteredQuotes: Quote[];
  selectedQuoteAdvanced: Quote;
  file: any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    private sociService: SociService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      quote_id: '',
      po_no: '',
      po_value: '',
      po_date: '',
      receive_po_date: '',
      file: null,
    })
  }

  showModal(){
    this.modal.show();
  }

  filterQuote(event) {
    let query = event.query;

    this.sociService.getFilteredQuote(query)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data)=>{
      this.filteredQuotes = data['data'];
      console.log(this.filteredQuotes);
    });
  }

  getFile(event){
    this.file = event.target.files[0];
  }

  submit(){
    console.log(this.form.controls);
    const formData = new FormData;
    formData.append('file',this.file,this.file.name)
    formData.append('quote_id',this.form.controls['quote_id'].value['id'])
    formData.append('po_no',this.form.controls['po_no'].value)
    formData.append('po_value',this.form.controls['po_value'].value)
    formData.append('po_date',this.form.controls['po_date'].value)
    formData.append('receive_po_date',this.form.controls['receive_po_date'].value)

    this.sociService.store(formData)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res=>{
      console.log(res)
      this.modal.hide()
      this.alertBody = res['message']
      this.successModal.show();
    })
  }

  redirectPage(){
    this.router.navigateByUrl('soci/index');
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
