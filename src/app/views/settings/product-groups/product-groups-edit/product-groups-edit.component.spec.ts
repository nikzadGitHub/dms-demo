import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsEditComponent } from './product-groups-edit.component';

describe('ProductGroupsEditComponent', () => {
  let component: ProductGroupsEditComponent;
  let fixture: ComponentFixture<ProductGroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
