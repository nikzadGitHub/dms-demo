import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfstIndexComponent } from './ofst-index.component';

describe('OfstIndexComponent', () => {
  let component: OfstIndexComponent;
  let fixture: ComponentFixture<OfstIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfstIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfstIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
