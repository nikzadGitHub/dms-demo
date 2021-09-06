import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcsCreateComponent } from './opcs-create.component';

describe('OpcsCreateComponent', () => {
  let component: OpcsCreateComponent;
  let fixture: ComponentFixture<OpcsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
