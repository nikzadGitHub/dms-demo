import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditComponent } from './leads-edit.component';

describe('LeadsEditComponent', () => {
  let component: LeadsEditComponent;
  let fixture: ComponentFixture<LeadsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
