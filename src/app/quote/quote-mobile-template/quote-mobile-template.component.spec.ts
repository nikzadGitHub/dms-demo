import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMobileTemplateComponent } from './quote-mobile-template.component';

describe('QuoteMobileTemplateComponent', () => {
  let component: QuoteMobileTemplateComponent;
  let fixture: ComponentFixture<QuoteMobileTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteMobileTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMobileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
