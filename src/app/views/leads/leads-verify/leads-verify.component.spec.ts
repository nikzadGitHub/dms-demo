import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsVerifyComponent } from './leads-verify.component';

describe('LeadsVerifyComponent', () => {
  let component: LeadsVerifyComponent;
  let fixture: ComponentFixture<LeadsVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
