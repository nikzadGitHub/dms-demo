import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAreasCreateComponent } from './care-areas-create.component';

describe('CareAreasCreateComponent', () => {
  let component: CareAreasCreateComponent;
  let fixture: ComponentFixture<CareAreasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareAreasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAreasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
