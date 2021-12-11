import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {
          this.authService.refreshSession().subscribe(async (res) => {
            console.log(res);
            if (!res.success) {
              this.router.navigateByUrl("/login",{replaceUrl:true});
            } else {
              
              await this.authService.setAuthorizationToken(res.data.access_token);
              await this.authService.saveUserSession(JSON.stringify(res.data.user));
              await this.authService.getUserSession();
      
              await this.authService.loadToken();
      
              this.router.navigateByUrl("/dashboard", {replaceUrl: true});
      
            }
          }, async (error) => {
            console.log(error);
            //TODO: Need to handle internet connection error.

            if (typeof error.error.message === 'undefined') {
              console.log("Need to handle internet connection error.");
            } else if (error.status == 401) {
              this.router.navigateByUrl("/login",{replaceUrl:true});
            } else {
              console.log("Need to handle internet connection error.");
            }
          });
        } else {          
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
 
  // canLoad(): Observable<boolean> {    
  //   return this.authService.isAuthenticated.pipe(
  //     filter(val => val !== null), // Filter out initial Behaviour subject value
  //     take(1), // Otherwise the Observable doesn't complete!
  //     map(isAuthenticated => {
  //       if (isAuthenticated) {
  //         console.log('Found previous token, automatic login');
  //         // Directly open inside area       
  //         this.router.navigateByUrl('/dashboard', { replaceUrl: true });
  //       } else {          
  //         // Simply allow access to the login
  //         return true;
  //       }
  //     })
  //   );
  // }
}
