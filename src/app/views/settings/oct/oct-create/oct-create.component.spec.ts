import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctCreateComponent } from './oct-create.component';

describe('OctCreateComponent', () => {
  let component: OctCreateComponent;
  let fixture: ComponentFixture<OctCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
