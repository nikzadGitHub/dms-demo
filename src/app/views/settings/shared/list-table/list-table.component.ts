import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ContactService } from "../../../contact/contact.service";

@Component({
  selector: "app-list-table",
  templateUrl: "./list-table.component.html",
  styleUrls: ["./list-table.component.scss"],
})
export class ListTableComponent implements OnInit {
  @Output() delete_id = new EventEmitter<any>();
  @Input() headers: any;
  @Input() tableData: any;
  @Input() path: any;
  @Input() key: any;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAllContactData().subscribe((data) => {
      this.tableData = data["data"];
    });
  }

  deleteData(value) {
    this.delete_id.emit(value);
  }
}
