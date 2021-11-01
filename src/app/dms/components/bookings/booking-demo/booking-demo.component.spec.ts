
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDemoComponent } from './booking-demo.component';

describe('BookingDemoComponent', () => {

  let component: BookingDemoComponent;
  let fixture: ComponentFixture<BookingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
