import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfscEditComponent } from './ofsc-edit.component';

describe('OfscEditComponent', () => {
  let component: OfscEditComponent;
  let fixture: ComponentFixture<OfscEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfscEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfscEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
