import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtIndexComponent } from './ot-index.component';

describe('OtIndexComponent', () => {
  let component: OtIndexComponent;
  let fixture: ComponentFixture<OtIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
