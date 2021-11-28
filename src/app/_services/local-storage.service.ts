import { Injectable } from '@angular/core';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage: Storage;
  
  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  set(key: string, value: string) : void {
    this._localStorage.setItem(key, value);
  }

  get(key:string, defaultValue?: string) : string {
    let value = this._localStorage.getItem(key);

    if(value == null){
      return defaultValue;
    }
    else{
      return value;
    }
  }

  remove(key: string) : void {
    this._localStorage.removeItem(key);
  }

  clear() : void {
    this._localStorage.clear();
  }
}
