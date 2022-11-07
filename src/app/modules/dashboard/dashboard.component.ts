import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }
   companies: string[] = ['apple', 'microsoft', 'google']

  ngOnInit(): void {
    this.companies.forEach(name => {

      this.generateapplepie(name)
      this.generateapplelinechart(name)
    })


  }

  generateapplepie(name: string) {

    const myChart = new Chart(`${name}-pie`, {
      type: 'pie',
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
          },

          title: {
            display: true,
            text: 'Scales',
            font: {
              size: 24,

            }
          }
        }
      },
      data: {
        labels: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'],
        datasets: [{
          data: [20, 20, 40, 20],
          backgroundColor: [
            'blue',
            'orange',
            'grey',
            'yellow'
          ],


        }]
      },


    });
    myChart.resize(200, 200);
  }

  generateapplelinechart(name: string) {

    const myChart = new Chart(`${name}-line`, {
      type: 'line',
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
          },

          title: {
            display: true,
            text: 'Chart Title',
            font: {
              size: 24,

            }
          }
        }
      },
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],

        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "1st Qtr",
          borderColor: "blue",
          fill: false
        }, {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "2nd Qtr",
          borderColor: "orange",
          fill: false
        }, {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "3rd Qtr",
          borderColor: "grey",
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "4th Qtr",
          borderColor: "yello",
          fill: false
        }
        ]
      },


    });
    myChart.resize(400, 400);

  }

  adddashboard() {
    alert("added")
    console.log("added");
  }

}
