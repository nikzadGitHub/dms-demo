import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss']
})
export class AzureComponent  {


   constructor(
     private authService: MsalService,
      private msalBroadcastService: MsalBroadcastService,
      private localService: AuthService,
      private router: Router
      ) {
      debugger
       }

       ngOnInit(): void {
        debugger

        this.msalBroadcastService.msalSubject$
          .pipe(
            filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
          )
          .subscribe((result: EventMessage) => {
            const payload = result.payload as AuthenticationResult;        
            this.authService.instance.setActiveAccount(payload.account);
            console.log('redirect payload',result);
          });
    

          // this.http.post(`https://api.idsmed-dev.websight-app.com/api/auth/azure-login`, data, {
          //   headers: headers
          // })
          //   .subscribe(profile => {
          //     console.log('data', profile);
              
          //     // this.profile = profile;
          //   });
       
        // const localStorageKeyList = Object.keys(localStorage)
        // console.log('localStorageKeyList', localStorageKeyList);
        // const accessTokenKey = localStorageKeyList.findIndex(e => e.includes('accesstoken'))
        // const refreshtokenKey = localStorageKeyList.findIndex(e => e.includes('refreshtoken'))
        // const accesstoken =  JSON.parse(localStorage.getItem(localStorageKeyList[accessTokenKey]) || '')
        // const refreshtoken =  JSON.parse(localStorage.getItem(localStorageKeyList[refreshtokenKey]) || '')
        // console.log('refreshtoken', refreshtoken?.secret) ;
        // console.log('accesstoken', accesstoken?.secret) ;
        
      }
    


  logout() {
    console.log('test');
    
    // this.localService
    //   .logoutUser()
    //   .toPromise()
    //   .then(() => {
    //     this.router.navigateByUrl("/login", { replaceUrl: true });
    //   });
    //   localStorage.removeItem("userRole");
    //   localStorage.removeItem("user-json");
    //   localStorage.removeItem("auth-token");
    // return false;
  }

}

