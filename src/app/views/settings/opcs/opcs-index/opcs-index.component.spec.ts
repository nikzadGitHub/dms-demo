import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcsIndexComponent } from './opcs-index.component';

describe('OpcsIndexComponent', () => {
  let component: OpcsIndexComponent;
  let fixture: ComponentFixture<OpcsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
