import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuotationApprovalComponent } from './edit-quotation-approval.component';

describe('EditQuotationApprovalComponent', () => {
  let component: EditQuotationApprovalComponent;
  let fixture: ComponentFixture<EditQuotationApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuotationApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotationApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
