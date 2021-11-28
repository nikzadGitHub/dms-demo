import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsIndexComponent } from './product-groups-index.component';

describe('ProductGroupsIndexComponent', () => {
  let component: ProductGroupsIndexComponent;
  let fixture: ComponentFixture<ProductGroupsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
