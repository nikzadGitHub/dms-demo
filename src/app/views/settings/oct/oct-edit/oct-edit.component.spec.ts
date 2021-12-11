import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctEditComponent } from './oct-edit.component';

describe('OctEditComponent', () => {
  let component: OctEditComponent;
  let fixture: ComponentFixture<OctEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
