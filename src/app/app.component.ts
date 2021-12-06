import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { LocalStorageService } from './_services/local-storage.service';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconSetService],
})
export class AppComponent implements OnInit {

  isLoading = false

  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private loaderService:LocalStorageService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.loaderService.loaderGet().subscribe(state=>{
      this.isLoading = state
    })
  }
}
