import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAreasEditComponent } from './care-areas-edit.component';

describe('CareAreasEditComponent', () => {
  let component: CareAreasEditComponent;
  let fixture: ComponentFixture<CareAreasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareAreasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAreasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
