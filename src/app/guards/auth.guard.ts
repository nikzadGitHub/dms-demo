import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {          
          return true;
        } else {          
          this.router.navigateByUrl('/login', {replaceUrl: true})
          return false;
        }
      })
    );
  }

  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  // canLoad(): Observable<boolean> {    
  //   return this.authService.isAuthenticated.pipe(
  //     filter(val => val !== null), // Filter out initial Behaviour subject value
  //     take(1), // Otherwise the Observable doesn't complete!
  //     map(isAuthenticated => {
  //       if (isAuthenticated) {          
  //         return true;
  //       } else {          
  //         this.router.navigateByUrl('/login', {replaceUrl: true})
  //         return false;
  //       }
  //     })
  //   );
  // }
}
