
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityBookingComponent } from './opportunity-booking.component';

describe('BookingFormComponent', () => {

  let component: OpportunityBookingComponent;
  let fixture: ComponentFixture<OpportunityBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
