import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsIndexComponent } from './leads-index.component';

describe('LeadsIndexComponent', () => {
  let component: LeadsIndexComponent;
  let fixture: ComponentFixture<LeadsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
