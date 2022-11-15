import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  data_1: any;
  data_2: any;
  data_3: any;
  data_4: any;
  financial: any;
  marketposition: any;
  legal: any;
  headwinds: any

  financialpercentage: any;
  marketpositionpercentage: any;
  legalpercentage: any
  headwindspercentage: any

  constructor(public http: HttpClient, public router: Router) {
    this.http.get('http://18.139.84.119:5003/pn', { responseType: 'text' }).subscribe((res) => {
      // console.log(res);
      this.data_1 = res;
    });

    this.http.get('http://18.139.84.119:5003/finance', { responseType: 'text' }).subscribe((res) => {
      // console.log(res);
      this.data_4 = res;
    });

    this.http.get('http://18.139.84.119:5003/count').subscribe((res) => {
      // console.log(res);
      this.data_2 = res;

      // [positive,netural,negative]
      this.financial = [this.data_2[6], this.data_2[8], this.data_2[7]]
      this.marketposition = [this.data_2[3], this.data_2[5], this.data_2[4]]
      this.legal = [this.data_2[0], this.data_2[2], this.data_2[1]]
      this.headwinds = [this.data_2[0] + this.data_2[3] + this.data_2[6], this.data_2[2] + this.data_2[5] + this.data_2[8], this.data_2[1] + this.data_2[4] + this.data_2[7]]

      this.financialpercentage = this.calculatepercentage(this.financial)

      this.marketpositionpercentage = this.calculatepercentage(this.marketposition)

      this.legalpercentage = this.calculatepercentage(this.legal)

      this.headwindspercentage = this.calculatepercentage(this.headwinds)




    });
  }

  onclick() {

    this.http.get('http://18.139.84.119:5003/marketing', { responseType: 'text' }).subscribe((res) => {
      // console.log(res);
      this.data_3 = res;
    });
  }

  ngOnInit() {


  }

  calculatepercentage(values: number[]) {
    const sum = values.reduce((a: number, b: number) => a + b)
    const positive = Math.round((values[0] / sum) * 100)
    const negative = Math.round((values[2] / sum) * 100)
    const neutral = Math.round((values[1] / sum) * 100)
    const totalpercentage = positive + negative + neutral
    console.log({ positive, negative, neutral, totalpercentage });


    return [positive, neutral, negative]



  }





}
