import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcsEditComponent } from './opcs-edit.component';

describe('OpcsEditComponent', () => {
  let component: OpcsEditComponent;
  let fixture: ComponentFixture<OpcsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
