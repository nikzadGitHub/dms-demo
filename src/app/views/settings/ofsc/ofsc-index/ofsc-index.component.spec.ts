import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfscIndexComponent } from './ofsc-index.component';

describe('OfscIndexComponent', () => {
  let component: OfscIndexComponent;
  let fixture: ComponentFixture<OfscIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfscIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfscIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
