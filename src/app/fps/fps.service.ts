import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FpsInterface, FpsList, SaveResult} from './services/fps-interface';
import { ApiClientService } from './api-client.service';
import { SystemConfig } from '@app/config/system-config';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({providedIn: 'root'})

export class FpsService implements FpsInterface {

  constructor(private httpClient: HttpClient, private apiClient: ApiClientService) { }

  getList(): Observable<FpsList> {
    return this.apiClient.get<FpsList>('fps');
  }

  saveFps(data: any): Observable<SaveResult> {
    return this.apiClient.post('fps/createDraft', data);
  }

  getTransSactionTypeList() {
    return [
      {'id': 1, 'title': 'Non-Recourse Finance Lease/operating Lease' },
      {'id': 2, 'title': 'Bank Equipment Financing' },
      {'id': 3, 'title': 'Non-Recourse Variable Equipment Lease' },
      {'id': 4, 'title': 'Placement Instalment' },
      {'id': 5, 'title': 'Credit Card Instalment' },
      {'id': 6, 'title': 'New Office Physician' },
      {'id': 7, 'title': 'Short Term Equipment Rental' },
      {'id': 8, 'title': 'Company Instalment' },
      {'id': 9, 'title': 'Recourse Leases' }
    ];
  }

  getFpsStatusList() {
    return [
      {'id': 1, 'title': 'New' },
      {'id': 2, 'title': 'Submitted' },
      {'id': 3, 'title': 'Validated' },
      {'id': 4, 'title': 'Awaiting Quotation' },
      {'id': 5, 'title': 'Pending Customer Documents' },
      {'id': 6, 'title': 'Processing at Leasing Company' },
      {'id': 7, 'title': 'Internal Approval at Idsmeds' },
      {'id': 8, 'title': 'Approved at Leasing Company' },
      {'id': 9, 'title': 'Agreement signed' },
      {'id': 10, 'title': 'Closed' },
      {'id': 11, 'title': 'Cancelled'}
    ];
  }

  getrateStatusList() {
    return [
      {'id': 1, 'title': 'Not Started' },
      {'id': 2, 'title': 'Active' },
      {'id': 3, 'title': 'Obsolete' }
    ];
  }

  getTenureList(fps_type_id: number, financial_id: number, payment_frequency: string): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/tenure-list/"+ fps_type_id + "/" + financial_id + "/" + payment_frequency).pipe();
  }

  getUsersList(): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + "/user-list").pipe();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
