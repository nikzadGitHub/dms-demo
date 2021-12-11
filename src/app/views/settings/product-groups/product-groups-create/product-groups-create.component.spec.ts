import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsCreateComponent } from './product-groups-create.component';

describe('ProductGroupsCreateComponent', () => {
  let component: ProductGroupsCreateComponent;
  let fixture: ComponentFixture<ProductGroupsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
