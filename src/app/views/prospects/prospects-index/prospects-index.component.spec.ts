import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsIndexComponent } from './prospects-index.component';

describe('ProspectsIndexComponent', () => {
  let component: ProspectsIndexComponent;
  let fixture: ComponentFixture<ProspectsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
