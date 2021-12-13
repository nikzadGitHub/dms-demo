import { Injectable } from '@angular/core';
import { LocalStorageService } from '../_services/local-storage.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private storage: LocalStorageService) { }

  async getJwtToken(): Promise<string> {
    return this.storage.get(TOKEN_KEY);
  }

  async saveJwtToken(token: string) {
    return this.storage.set(TOKEN_KEY,token);
  }

  async deleteJwtToken() : Promise<any> {
    return this.storage.remove(TOKEN_KEY);
  }
}
