import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTargetStructureComponent } from './sales-target-structure.component';

describe('SalesTargetStructureComponent', () => {
  let component: SalesTargetStructureComponent;
  let fixture: ComponentFixture<SalesTargetStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTargetStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTargetStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
