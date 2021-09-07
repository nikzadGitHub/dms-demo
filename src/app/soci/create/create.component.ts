import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Quote } from '../../quote/quote';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('createModal') modal : ModalDirective

  tabIndex: number = -1;
  form: FormGroup;
  filteredQuotes: Quote[];
  selectedQuoteAdvanced: Quote;
  file: any;

  constructor(
    private formBuilder: FormBuilder,
    private sociService: SociService
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
    this.sociService.getFilteredQuote(query).subscribe((data)=>{
      this.filteredQuotes = data['data'];
      console.log(this.filteredQuotes);
    });
  }

  getFile(event){
    this.file = event.target.files[0];
  }

  submit(){
    // console.log(this.form.value);
    const formData = new FormData;
    formData.append('file',this.file,this.file.name)
    this.sociService.store(formData).subscribe(res=>{
      console.log(res)
    })
  }

}
