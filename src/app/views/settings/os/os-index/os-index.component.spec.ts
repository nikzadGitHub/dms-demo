import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsIndexComponent } from './os-index.component';

describe('OsIndexComponent', () => {
  let component: OsIndexComponent;
  let fixture: ComponentFixture<OsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
