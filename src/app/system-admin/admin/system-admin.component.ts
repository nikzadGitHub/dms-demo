import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-system-admin",
  templateUrl: "./system-admin.component.html",
  styleUrls: ["./system-admin.component.scss"],
})
export class SystemAdminComponent implements OnInit {
  test: any;
  selectedValues: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addSystemAdmin() {
    this.router.navigate(["/systemadmin/add-system-admin"]);
  }
  todo() {}

  onSubmit() {}

  resetForm() {}
}
