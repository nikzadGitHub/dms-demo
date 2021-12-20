import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorPresentationComponent } from './form-error-presentation.component';

describe('FormErrorPresentationComponent', () => {
  let component: FormErrorPresentationComponent;
  let fixture: ComponentFixture<FormErrorPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
