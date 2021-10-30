
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssetComponent } from './main-asset.component';

describe('BookingFormComponent', () => {

  let component: MainAssetComponent;
  let fixture: ComponentFixture<MainAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
