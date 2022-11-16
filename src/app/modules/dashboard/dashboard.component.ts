import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  private root: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}


  ngOnInit(): void {
  }

 

}


