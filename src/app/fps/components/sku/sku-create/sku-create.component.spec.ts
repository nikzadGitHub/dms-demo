import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuCreateComponent } from './sku-create.component';

describe('SkuCreateComponent', () => {
  let component: SkuCreateComponent;
  let fixture: ComponentFixture<SkuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
