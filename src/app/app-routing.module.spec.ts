
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

describe('App: Routing', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should redirect to main route', () => {
    expect(routes).toContain({
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    });
  });

  it('should contain route for /dms', () => {
    expect(routes).toContain(
      jasmine.objectContaining({
        path: 'dms',
        loadChildren: jasmine.any(Function)
      })
    );
  });
});
