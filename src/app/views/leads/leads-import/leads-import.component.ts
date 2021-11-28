import { Component, HostListener, OnInit } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { LeadsService } from '../leads.service';

@Component({
  selector: 'app-leads-import',
  templateUrl: './leads-import.component.html',
  styleUrls: ['./leads-import.component.scss']
})
export class LeadsImportComponent implements OnInit {
  headers:any = [
    'Created Date',
    'Lead ID',
    'Company Name',
    'Contact Name',
    'Email',
    'Phone',
    'Prospect',
    'Source'
  ];
  displayData: any = 0;
  successCreate: any = 0;
  danger: any = 0;
  danger_number_of_record: any = 0;
  csvRecords: any[] = [];
  dragAreaClass: string;
  number_of_record: any = 0;

  constructor(
    private ngxCsvParser: NgxCsvParser,
    public leadsService: LeadsService,
  ) { }

  ngOnInit(): void {
    this.dragAreaClass = "dragarea";
  }

  onChange(files: any){
    if(files[0]){
      this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        this.displayData = 1;
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }
  }

  submit(){
    let stopCreate = false
    for (var i = 0, len = this.csvRecords.length; i < len; i++) {
      this.csvRecords[i].mobile_number = this.csvRecords[i].phone;
      if (stopCreate) {
        this.danger = 1;
        this.successCreate = 0;
        break;
      }
      this.leadsService.store(this.csvRecords[i]).subscribe(res => {
        if(!res.success) {
          stopCreate = true;
        }
        this.successCreate = 1;
        this.number_of_record += 1;
      },
      errors => {
        this.danger_number_of_record = 1 + this.number_of_record;
        this.danger = 1;
      });
    }
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      this.onChange(event.dataTransfer.files);
    }
  }

}
