import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtCreateComponent } from './ot-create.component';

describe('OtCreateComponent', () => {
  let component: OtCreateComponent;
  let fixture: ComponentFixture<OtCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
