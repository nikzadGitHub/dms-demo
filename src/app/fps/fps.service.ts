import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FpsInterface, FpsList, SaveResult} from './services/fps-interface';
import { ApiClientService } from './api-client.service';


@Injectable({providedIn: 'root'})

export class FpsService implements FpsInterface {

  constructor(private apiClient: ApiClientService) { }

  getList(): Observable<FpsList> {
    return this.apiClient.get<FpsList>('fps');
  }

  saveFps(data: any): Observable<SaveResult> {
    return this.apiClient.post('fps/createDraft', data);
  }

}
