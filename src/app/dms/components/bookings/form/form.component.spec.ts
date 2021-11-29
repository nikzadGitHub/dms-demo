
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {DmsModule} from '../../../dms.module';

describe('BookingFormComponent', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmsModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
