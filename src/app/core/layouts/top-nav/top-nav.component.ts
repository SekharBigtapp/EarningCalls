import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    private router: Router,
    
    public dataStorage: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  onSignOut(){
    localStorage.clear();
    this.dataStorage.isUserLoggedIn = false;
    this.router.navigateByUrl('')
  }

}
