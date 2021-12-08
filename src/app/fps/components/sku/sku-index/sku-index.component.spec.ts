import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuIndexComponent } from './sku-index.component';

describe('SkuIndexComponent', () => {
  let component: SkuIndexComponent;
  let fixture: ComponentFixture<SkuIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
