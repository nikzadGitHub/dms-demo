
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySummaryComponent } from './opportunity-summary.component';

describe('BookingFormComponent', () => {

  let component: OpportunitySummaryComponent;
  let fixture: ComponentFixture<OpportunitySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
