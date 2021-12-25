import { Component, OnInit } from '@angular/core';
import { ApiClient } from '../../../../services/api-client.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-status-log',
  templateUrl: './status-log.component.html',
  styleUrls: ['./status-log.component.scss']
})
export class StatusLogComponent implements OnInit{
  
  @Input() bookingId: BigInt;
  private logs:[]|null = [];

  constructor(
    private apiClient: ApiClient
  ) { }
  ngOnInit(): void {
    this.getLogs()
  }

  getLogs()  {
    this.apiClient.get<[]>(`booking/logs/${this.bookingId}`).subscribe(res => {
      this.logs = res;
    })
  }
}
