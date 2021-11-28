import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTableComponent } from './equipment-table.component';

describe('AssetTableComponent', () => {
  let component: EquipmentTableComponent;
  let fixture: ComponentFixture<EquipmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
