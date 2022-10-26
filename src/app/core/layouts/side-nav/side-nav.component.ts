import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navLinkId : any = 1;
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(id:any){
    this.navLinkId = id;
    console.log(this.navLinkId);
  }
}
