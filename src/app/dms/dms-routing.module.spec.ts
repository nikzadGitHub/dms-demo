
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DmsComponent } from './dms.component';
import { routes, mainChildren, fallbackPath } from './dms-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components//calendar/calendar.component';

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

  function expectChild(path: string|String, component: any) {
    expect(mainChildren).toContain(
      jasmine.objectContaining({
        path,
        component
      })
    );
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
    expectChild('bookings', BookingsComponent)
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
