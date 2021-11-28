import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfstEditComponent } from './ofst-edit.component';

describe('OfstEditComponent', () => {
  let component: OfstEditComponent;
  let fixture: ComponentFixture<OfstEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfstEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfstEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
