import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerviewApprovalComponent } from './managerview-approval.component';

describe('ManagerviewApprovalComponent', () => {
  let component: ManagerviewApprovalComponent;
  let fixture: ComponentFixture<ManagerviewApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerviewApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerviewApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
