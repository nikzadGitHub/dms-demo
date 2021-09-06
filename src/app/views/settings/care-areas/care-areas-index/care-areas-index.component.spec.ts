import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAreasIndexComponent } from './care-areas-index.component';

describe('CareAreasIndexComponent', () => {
  let component: CareAreasIndexComponent;
  let fixture: ComponentFixture<CareAreasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareAreasIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAreasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
