import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewActiveComponent } from './manager-view-active.component';

describe('ManagerViewActiveComponent', () => {
  let component: ManagerViewActiveComponent;
  let fixture: ComponentFixture<ManagerViewActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
