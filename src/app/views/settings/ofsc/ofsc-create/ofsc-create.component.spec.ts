import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfscCreateComponent } from './ofsc-create.component';

describe('OfscCreateComponent', () => {
  let component: OfscCreateComponent;
  let fixture: ComponentFixture<OfscCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfscCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfscCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
