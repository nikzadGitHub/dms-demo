import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  form: FormGroup;
   
  constructor(
    public postService: QuoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      billings: this.formBuilder.array([]),
      payments: this.formBuilder.array([])
    });
    // new FormGroup({
    //   title: new FormControl('', [Validators.required]),
    //   body: new FormControl('', Validators.required)

    // });
  }

  billings() : FormArray {
    return this.form.get("billings") as FormArray
  }
   
  newBillings(): FormGroup {
    return this.formBuilder.group({
      'billing_id': '',
      'stage': '',
      'percentage': '',
      'amount': '',
      'status': '',
      'remarks': '',
    })
  }

  addBillings() {
    this.billings().push(this.newBillings());
  }
   
  removeBillings(i:number) {
    this.billings().removeAt(i);
  }

  payments() : FormArray {
    return this.form.get("payments") as FormArray
  }
   
  newPayments(): FormGroup {
    return this.formBuilder.group({
      'billing_id': '',
      'percentage': '',
      'schedule': '',
      'soc_payment_term': '',
      'amount': '',
      'status': '',
      'remarks': '',
    })
  }

  addPayments() {
    this.payments().push(this.newPayments());
  }
   
  removePayments(i:number) {
    this.payments().removeAt(i);
  }

  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
         console.log('Quote created successfully!');
         this.router.navigateByUrl('quote/index');
    })
  }
  
}