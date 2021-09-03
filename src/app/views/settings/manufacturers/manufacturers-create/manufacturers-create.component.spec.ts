import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersCreateComponent } from './manufacturers-create.component';

describe('ManufacturersCreateComponent', () => {
  let component: ManufacturersCreateComponent;
  let fixture: ComponentFixture<ManufacturersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
