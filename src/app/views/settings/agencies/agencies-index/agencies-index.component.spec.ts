import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesIndexComponent } from './agencies-index.component';

describe('AgenciesIndexComponent', () => {
  let component: AgenciesIndexComponent;
  let fixture: ComponentFixture<AgenciesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
