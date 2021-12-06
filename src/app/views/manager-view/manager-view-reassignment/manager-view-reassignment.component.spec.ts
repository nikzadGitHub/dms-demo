import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewReassignmentComponent } from './manager-view-reassignment.component';

describe('ManagerViewReassignmentComponent', () => {
  let component: ManagerViewReassignmentComponent;
  let fixture: ComponentFixture<ManagerViewReassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewReassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewReassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
