
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { DmsComponent } from './dms.component';
import { routes, mainChildren, fallbackPath, bookingsChildren } from './dms-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components//calendar/calendar.component';
import { BookingEntityComponent } from './components/bookings/booking-entity/booking-entity.component';

function expectRoute(list: Routes, path: string|String, other: object = {}) {
  expect(list).toContain(
    jasmine.objectContaining({
      path,
      ...other,
    })
  );
}

function expectComponent(list: Routes, path: string|String, component: any, other: object = {}) {
  expectRoute(list, path, {
    component, ...other
  });
}

describe('DMS: Routing', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DmsComponent
      ],
    }).compileComponents();
  }));

  function expectChild(path: string|String, component: any, other: object = {}) {
    expectComponent(mainChildren, path, component, other);
  }

  it('should contain main route', () => {
    expect(routes).toContain(
      jasmine.objectContaining({
        path: '', component: DmsComponent,
        children: mainChildren
      })
    );
  });

  it('should contain route for /inventory', () => {
    expectChild('inventory', InventoryComponent)
  });

  it('should contain route for /bookings', () => {
    expectRoute(mainChildren, 'bookings', {
      children: bookingsChildren
    })
  });

  it('should contain route for /approvals', () => {
    expectChild('approvals', ApprovalsComponent)
  });

  it('should contain route for /calendar', () => {
    expectChild('calendar', CalendarComponent)
  });

  it('should handle invalid route', () => {
    expect(mainChildren).toContain(
      jasmine.objectContaining({
        path: '**', redirectTo: fallbackPath
      })
    );
  });

  it('should default to /inventory', () => {
    expect(mainChildren).toContain(
      jasmine.objectContaining({
        path: '', redirectTo: fallbackPath, pathMatch: 'full',
      })
    );
  });
});

describe('DMS: Booking routes', function() {
  function expectChild(path: string|String, component: any, other: object = {}) {
    expectComponent(bookingsChildren, path, component, other);
  }

  it('should contain route for viewing', () => {
    expectChild(':id', BookingEntityComponent);
  });
});
