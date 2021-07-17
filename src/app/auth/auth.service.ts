import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import * as forge from 'node-forge';

import { getUniqueId } from '../common/common-function';

// import { User } from './user';
import { UserSession } from './user-session';
import { SystemConfig } from '../config/system-config';
import { Router } from '@angular/router';
import { LocalStorageService } from '../_services/local-storage.service';
// import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

export const USER_JSON = "user-json";
export const TOKEN_KEY = 'auth-token';
export const DEVICE_ID = 'device-id';
export const FCM_CODE = 'fcm-code';
export const RSA_PRIVATE_KEY = 'PP';
export const RSA_PUBLIC_KEY = 'PPUB';
export const SERVER_PUB_KEY = "SPUB";

// declare var Forge: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token: string = "";
  deviceId: string = "";
  fcmCode: string = "";
  private rsaKey = "";
  private rsaPub = "";
  private serverPub = "";
  private forge: any;

  constructor(
    private storage: LocalStorageService, 
    private httpClient: HttpClient,
    private router: Router
  ) { 
    
    // this.loadRSAKey();
    // this.loadToken();
    // this.loadDeviceId();
    // this.getFCMCode();
  }

  async loadToken() {
    const token = this.storage.get(TOKEN_KEY);    
    if (token) {
      // console.log('set token: ', token.value);
      this.token = token;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  async loadDeviceId() {
    const deviceId = this.storage.get(DEVICE_ID);    
    if (deviceId) {
      this.deviceId = deviceId;
    } else {
      this.deviceId = getUniqueId(4);
      console.log(this.deviceId);
      this.storage.set(DEVICE_ID, this.deviceId);
    }
  }

  getDeviceId(): string {
    return this.deviceId;
  }

  // async loadRSAKey() {
  //   const privateKey = this.storage.get(RSA_PRIVATE_KEY);
  //   const pubKey = this.storage.get(RSA_PUBLIC_KEY);
  //   const serverPubKey = this.storage.get(SERVER_PUB_KEY);

  //   if (serverPubKey) {
  //     this.serverPub = serverPubKey;
  //   } else {
  //     //Request for server public key.
  //     let res: any = this.httpClient.get(SystemConfig.apiBaseUrl + "/server-pub-key").toPromise();
  //     console.log(res);
  //     if (res.success) { 
  //       this.serverPub = res.data.pub_key;
  //       let a = this.storage.set(SERVER_PUB_KEY, this.serverPub);
  //     }
  //   }

  //   if ((privateKey) && (pubKey)) {
  //     this.rsaPub = pubKey;
  //     this.rsaKey = privateKey;
  //   } else {
  //     var keypair = forge.pki.rsa.generateKeyPair({bits: 2048});
  //     this.rsaPub = forge.pki.publicKeyToPem(keypair.publicKey,72);
  //     this.rsaKey = forge.pki.encryptRsaPrivateKey(keypair.privateKey,SystemConfig.rsaPass);

  //     this.storage.set(RSA_PUBLIC_KEY, this.rsaPub);
  //     this.storage.set(RSA_PRIVATE_KEY, this.rsaKey);

  //     //TODO: send local public key to server
  //     await this.updateRSAPubKey();
  //   }
  // }

  getAuthorizationToken(): string {
    return this.token;
  }

  async setAuthorizationToken(authToken: string) {
    this.storage.set(TOKEN_KEY, authToken);
    this.token = authToken;
    
    if (authToken == "") {
      this.storage.remove(TOKEN_KEY);
      this.isAuthenticated.next(false);
    } else {
      this.isAuthenticated.next(true);
    }
  }

  async getUserSession(): Promise<UserSession> {
    let userSession: UserSession;
    
    let objUser = JSON.parse(this.storage.get(USER_JSON));

    if ((objUser) && (objUser.trim())) {
      objUser = JSON.parse(objUser);
      console.log(objUser);
      userSession = {
        fullname: objUser.name, 
        id: objUser.id, 
        needCreateProfile: objUser.need_profile,
        phoneNumber: objUser.phone_number,
        email: objUser.email
      };
    }

    return userSession;

  }

  async removeUserSession(): Promise<any> {
    return this.storage.remove(USER_JSON);
  }

  async saveUserSession(userJson: string): Promise<any> {

    return this.storage.set(USER_JSON, userJson);

  }

  async removeFCMCode(): Promise<any> {
    this.fcmCode = "";
    return this.storage.remove(FCM_CODE);
  }

  async saveFCMCode(fcm_code: string): Promise<any> {
    if (fcm_code == "") {
      return this.removeFCMCode();
    } else {
      this.fcmCode = fcm_code;
      return this.storage.set(FCM_CODE, fcm_code);
    }
  }

  async getFCMCode(): Promise<string> {
    let fcm_code = this.storage.get(FCM_CODE);
    if (fcm_code == null) {
      fcm_code = '';
    }

    this.fcmCode = fcm_code;

    return fcm_code;
  }

  loginUser(credential: {username: string, password: string}): Observable<any>  {
    let os: string = "web"; //this.platform.platforms().join();
    
    if (os.length > 50) {
      os = os.substr(0,50);
    }
    
    let credentialSend = {
      'username': credential.username,
      'password': credential.password,
      'device_id': this.deviceId,
      'fcm_code': this.fcmCode,
      'app_id': SystemConfig.appId,
      'os': os
    }
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/login", credentialSend);
  }

  refreshSession(): Observable<any>  {
    let os: string = "web"; // this.platform.platforms().join();
    
    if (os.length > 50) {
      os = os.substr(0,50);
    }

    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/refresh",{
      'device_id': this.deviceId,
      'fcm_code': this.fcmCode,
      'app_id': SystemConfig.appId,
      'os': os
    });
  }

  logoutUser(): Observable<any> {
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/logout",{}).pipe(
      tap(async (event: HttpEvent<any>) => {
        console.log(event);
        this.storage.remove(USER_JSON);
        await this.setAuthorizationToken("");
        this.storage.remove(TOKEN_KEY);
      }),
      catchError(async (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.storage.remove(USER_JSON);  
          await this.setAuthorizationToken("");  
          this.storage.remove(TOKEN_KEY);  
        }
        return throwError(error);
      })
    );
    
  }
  
  changePassword(paswordInfo: {
    current_password: string, password: string, password_confirmation: string
  }): Observable<any> {
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/change-password", paswordInfo).pipe();
  }

  updateFcmCodeToServer(fcmCode: string): Observable<any>  {
    let os: string = "web"; //this.platform.platforms().join();
    
    if (os.length > 50) {
      os = os.substr(0,50);
    }

    return this.httpClient.post(SystemConfig.apiBaseUrl + "/fcm-code/update",{
      'device_id': this.deviceId,
      'fcm_code': fcmCode,
      'app_id': SystemConfig.appId,
      'os': os
    });
  }

  removeFcmCodeFromServer(fcmCode: string): Observable<any>  {

    return this.httpClient.post(SystemConfig.apiBaseUrl + "/fcm-code/remove",{
      'device_id': this.deviceId,
      'fcm_code': fcmCode,
      'app_id': SystemConfig.appId
    });
  }

  getProfile(): Observable<any> {
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/me", {}).pipe();
  }

  updateProfile(profile: {
    email: string, first_name: string, last_name: string,
    address_1: string, address_2: string, address_3: string, state: string, 
    city:string, postcode: number
  }): Observable<any> {
    let os: string = "web"; //this.platform.platforms().join();
    
    if (os.length > 50) {
      os = os.substr(0,50);
    }
    
    let profileSend = {
      'email': profile.email,
      'first_name': profile.first_name,
      'last_name': profile.last_name,
      'address_1': profile.address_1,
      'address_2': profile.address_2,
      'address_3': profile.address_3,
      'state': profile.state,
      'city': profile.city,
      'postcode': profile.postcode,
      'device_id': this.deviceId,
      'fcm_code': this.fcmCode,
      'app_id': SystemConfig.appId,
      'os': os
    }
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/me/update", profileSend);
  }

  loginAzureToken(azureToken: {
    azure_token: string, refresh_token: string
  }): Observable<any> {
    
    return this.httpClient.post(SystemConfig.apiBaseUrl + "/auth/azure-login", azureToken);
  }

}
