import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctIndexComponent } from './oct-index.component';

describe('OctIndexComponent', () => {
  let component: OctIndexComponent;
  let fixture: ComponentFixture<OctIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
