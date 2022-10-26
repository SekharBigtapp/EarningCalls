import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-named-entities-recg',
  templateUrl: './named-entities-recg.component.html',
  styleUrls: ['./named-entities-recg.component.css']
})
export class NamedEntitiesRecgComponent implements OnInit {

  data_1:any;

  constructor(public http:HttpClient, public router:Router){
    this.http.get('http://18.139.84.119:5003/colors',{responseType:'text'}).subscribe((res)=>{
    console.log(res);
    this.data_1=res;
  });
  
  }

  ngOnInit(){

  }
    
  }
  