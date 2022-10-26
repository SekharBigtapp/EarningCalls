import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { Event, RouterEvent, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { DataStorageService } from './core/services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EarningCalls-Angular';

  constructor(public dataStorage: DataStorageService,
    private router: Router,) {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if (e instanceof NavigationStart) {
        //browserRefresh = !router.navigated;
      }
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        if (localStorage.getItem("token")) {
          this.dataStorage.isUserLoggedIn = true;
        }
      }
    });
  }

}
