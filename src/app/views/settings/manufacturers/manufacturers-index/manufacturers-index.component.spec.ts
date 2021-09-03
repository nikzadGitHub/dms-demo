import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersIndexComponent } from './manufacturers-index.component';

describe('ManufacturersIndexComponent', () => {
  let component: ManufacturersIndexComponent;
  let fixture: ComponentFixture<ManufacturersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturersIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
