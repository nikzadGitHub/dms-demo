
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityBookingFormComponent } from './opportunity-booking-form.component';

describe('Opportunity Booking Form Component', () => {

  let component: OpportunityBookingFormComponent;
  let fixture: ComponentFixture<OpportunityBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityBookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
