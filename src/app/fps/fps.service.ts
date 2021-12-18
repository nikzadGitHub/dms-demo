import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {FpsInterface, SaveResult} from './services/fps-interface';
import { ApiClientService } from './api-client.service';
import { SystemConfig } from '@app/config/system-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { settings } from '../../environments/environment';
import { catchError } from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class FpsService implements FpsInterface {

  private apiURL = settings.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient, private apiClient: ApiClientService) { }

  getList(currentOpportunityId, pageItems, search_text, sort): Observable<any> {
    let query = 'fps?page_items=' + pageItems + '&search_text=' + search_text + '&current_opportunity_id=' + currentOpportunityId;

    if(sort && sort['field']!= null){
      query += '&field=' + sort.field + '&order=' + sort.order;
    }
    return this.apiClient.get<any>(query);
  }

  getPage(url, currentOpportunityId, pageItems, search_text){
    let query = '&page_items=' + pageItems + '&search_text=' + search_text + '&current_opportunity_id=' + currentOpportunityId;
    return this.httpClient.get<any>(url + query,this.httpOptions);
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

  getFileTypeList() {
    return [
      {'id': 1, 'title': 'Product Flyer' },
      {'id': 2, 'title': 'Customer Documents' },
      {'id': 3, 'title': 'Agreement ' },
      {'id': 4, 'title': 'Forms' },
      {'id': 5, 'title': 'Others' }
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

  find(id): Observable<any> {
    return this.httpClient.get(SystemConfig.apiBaseUrl + '/fps-details/' + id).pipe()
  }

  updateFps(data: any, id: string): Observable<SaveResult> {
    return this.apiClient.post('fps/update/' + id, data);
  }

  saveMinProcedure(data: any): Observable<SaveResult> {
    return this.apiClient.post('minProcedure/store', data);
  }
  
  storeMinProcedure(minProcedure) {
    this.saveMinProcedure(minProcedure).subscribe((res) => {
      if (res.id) {
        console.log("Min Procedure Stored successfully.");
      }
    },
    err => {
      console.log(err);
    });
  }

  saveMinUsage(data: any): Observable<SaveResult> {
    return this.apiClient.post('minUsage/store', data);
  }
  
  storeMinUsage(minUsage) {
    this.saveMinUsage(minUsage).subscribe((res) => {
      if (res.id) {
        console.log("Min Usage Stored successfully.");
      }
    },
    err => {
      console.log(err);
    });
  }

  deleteFps(fpsID: number) {
    return this.httpClient.delete(this.apiURL + '/fps/delete/' + fpsID, this.httpOptions)
  }

  saveFile(formData: any): Observable<any> {
    // return this.apiClient.post('fileLibrary/store', data).pipe(catchError(this.errorHandler));
    return this.httpClient
    .post(this.apiURL + "/fps/fileLibrary/store", formData, {
      headers: new HttpHeaders({ "Content-Type": "file", Accept: "file" }),
    })
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  storeFileLibrary(data) {
    this.saveFile(data).subscribe((res) => {
      if (res.id) {
        console.log("Files stored successfully.");
      }
    },
    err => {
      console.log(err);
    });
  }

/**
 * Format bytes as human-readable text.
 * 
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use 
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 * 
 * @return Formatted string.
 * 
 * @Credit goes to https://stackoverflow.com/a/14919494
 */
humanFileSize(bytes, dp=1) {
  const thresh = 1000;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = ['kB', 'MB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}

}
