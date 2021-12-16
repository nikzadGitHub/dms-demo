import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
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


  
  // console(str);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',  
    weekends: false,
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ] 
  };   

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.loaderService.loaderGet().subscribe(state=>{
      console.log("state------>", state);
      
      this.isLoading = state
    })
  }


  
}
