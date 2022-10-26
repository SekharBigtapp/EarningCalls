import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  data_1:any;

  constructor(public http:HttpClient, public router:Router){
    this.http.get('http://18.139.84.119:5003/color' ).subscribe((res)=>{
    console.log(res);
    this.data_1=res;
  });
 
  }
  ngOnInit(){

  }
    
  }

  
