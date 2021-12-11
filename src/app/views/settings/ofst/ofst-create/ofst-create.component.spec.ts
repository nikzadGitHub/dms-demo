import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfstCreateComponent } from './ofst-create.component';

describe('OfstCreateComponent', () => {
  let component: OfstCreateComponent;
  let fixture: ComponentFixture<OfstCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfstCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfstCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
