import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvtCreateComponent } from './opvt-create.component';

describe('OpvtCreateComponent', () => {
  let component: OpvtCreateComponent;
  let fixture: ComponentFixture<OpvtCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpvtCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpvtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
