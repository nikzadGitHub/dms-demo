import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesEditComponent } from './agencies-edit.component';

describe('AgenciesEditComponent', () => {
  let component: AgenciesEditComponent;
  let fixture: ComponentFixture<AgenciesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
