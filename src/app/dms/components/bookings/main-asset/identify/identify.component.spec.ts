
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyComponent } from './identify.component';
import {MockEquipmentsService} from '../../../../services/mock-equipments.service';

describe('BookingFormComponent', () => {

  let component: IdentifyComponent;
  let fixture: ComponentFixture<IdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyComponent ],
      providers: [ MockEquipmentsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
