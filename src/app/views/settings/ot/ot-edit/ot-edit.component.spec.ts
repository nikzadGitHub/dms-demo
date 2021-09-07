import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtEditComponent } from './ot-edit.component';

describe('OtEditComponent', () => {
  let component: OtEditComponent;
  let fixture: ComponentFixture<OtEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
