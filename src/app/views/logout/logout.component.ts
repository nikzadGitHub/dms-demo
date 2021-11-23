import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.scss']
})
export class LogoutComponent {

  constructor(private authService: AuthService,private router: Router) {
    this.logout()
   }


  logout() {
    this.authService
      .logoutUser()
      .toPromise()
      .then(() => {
        this.router.navigateByUrl("/login", { replaceUrl: true });
      });

    return false;
  }

}
