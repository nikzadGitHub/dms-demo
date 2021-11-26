import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss']
})
export class AzureComponent  {

  constructor(private authService: AuthService,private router: Router) {
    
   }
 


  logout() {
    this.authService
      .logoutUser()
      .toPromise()
      .then(() => {
        this.router.navigateByUrl("/login", { replaceUrl: true });
      });
      localStorage.removeItem("userRole");
      localStorage.removeItem("user-json");
      localStorage.removeItem("auth-token");
    return false;
  }

}

