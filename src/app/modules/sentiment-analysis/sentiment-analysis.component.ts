import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  data_1:any;
  data_2:any;
  data_3:any;
  data_4:any;

  constructor(public http:HttpClient, public router:Router){
    this.http.get('http://localhost:5001/pn',{responseType:'text'}).subscribe((res)=>{
    console.log(res);
    this.data_1=res;
  });
  
  this.http.get('http://localhost:5001/finance',{responseType:'text'}).subscribe((res)=>{
    console.log(res);
    this.data_4=res;
  });

  this.http.get('http://18.139.84.119:5003/count').subscribe((res)=>{
    console.log(res);
    this.data_2=res;
  });
  }
  onclick(){

    this.http.get('http://localhost:5001/marketing',{responseType:'text'}).subscribe((res)=>{
      console.log(res);
      this.data_3=res;
    });
  }
  ngOnInit(){

  }
    
  }
  