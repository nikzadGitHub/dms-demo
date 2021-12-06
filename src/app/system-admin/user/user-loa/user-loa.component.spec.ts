import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoaComponent } from './user-loa.component';

describe('UserLoaComponent', () => {
  let component: UserLoaComponent;
  let fixture: ComponentFixture<UserLoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
