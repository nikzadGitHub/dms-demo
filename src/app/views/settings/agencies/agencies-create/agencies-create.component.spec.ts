import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesCreateComponent } from './agencies-create.component';

describe('AgenciesCreateComponent', () => {
  let component: AgenciesCreateComponent;
  let fixture: ComponentFixture<AgenciesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
