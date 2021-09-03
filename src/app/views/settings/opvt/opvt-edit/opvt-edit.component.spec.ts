import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvtEditComponent } from './opvt-edit.component';

describe('OpvtEditComponent', () => {
  let component: OpvtEditComponent;
  let fixture: ComponentFixture<OpvtEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpvtEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpvtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
