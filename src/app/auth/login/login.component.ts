import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    public dataStorage: DataStorageService) 
    {
      
     } 

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigateByUrl('sentimentanalysiscomponent')
    this.dataStorage.isUserLoggedIn = true
  }

  onRegister(){
    this.router.navigateByUrl('register')
  }

}
