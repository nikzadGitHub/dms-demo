
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { JwtTokenService } from '../auth/jwt-token.service';
import { SystemConfig } from '../config/system-config';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService, 
    private router : Router
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken: string = this.auth.getAuthorizationToken();

    if (authToken != null) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      req = req.clone({ headers: req.headers.set('Authorization', "Bearer " + authToken) });
    }
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    
    req = req.clone({ headers: req.headers.set('x-device-id', this.auth.deviceId) });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    req = req.clone({ headers: req.headers.set("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type, Accept")});
    
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    req = req.clone({ headers: req.headers.set('app-token', SystemConfig.apiAppToken) });

    // send cloned request with header to the next handler.
    return next.handle(req).pipe( 
      tap(async (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let newToken = event.headers.get("x-new-token");

          if (newToken !== null) {
            console.log("found new token");
            await this.auth.setAuthorizationToken(newToken)
          }
        } 
      }),
      // retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          if (this.auth.getAuthorizationToken() != "") {
            this.auth.refreshSession().subscribe(
              (res) => {},
              async (error) => {
                console.log(error);
                if (error.status == 401) {
                  await this.auth.setAuthorizationToken("");
                  await this.auth.removeUserSession();
                  this.router.navigateByUrl("/login", { replaceUrl: true});
                }
              }
            )
          }
          
        }
        return throwError(error);
      })
      
    );

  }

}
