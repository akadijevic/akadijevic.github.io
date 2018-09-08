import { Component } from '@angular/core';
import {DatepickerOptions, NgDatepickerModule,} from 'ng2-datepicker'
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GGL';

  constructor(private router: Router) {

    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          document.body.style.background="#161616"

      }
    })
  }
}

