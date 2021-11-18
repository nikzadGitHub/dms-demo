import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingApprovalComponent } from './booking-approval.component';

describe('BookingApprovalComponent', () => {
  let component: BookingApprovalComponent;
  let fixture: ComponentFixture<BookingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
