import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvtIndexComponent } from './opvt-index.component';

describe('OpvtIndexComponent', () => {
  let component: OpvtIndexComponent;
  let fixture: ComponentFixture<OpvtIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpvtIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpvtIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
