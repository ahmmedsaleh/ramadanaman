import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  z = 1000;

  constructor() { }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Vistor To The Site Today"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "12AM" },
          { y: 55, label: "02AM" },
          { y: this.z, label: "04AM" },
          { y: 65, label: "06AM" },
          { y: 95, label: "08AM" },
          { y: 68, label: "10AM" },
          { y: 28, label: "12PM" },
          { y: 34, label: "02PM" },
          { y: 300, label: "04PM" },
          { y: 14, label: "06PM" },
          { y: 14, label: "08PM" },
          { y: 14, label: "10PM" }
        ]
      }]
    });
      
    chart.render();
  }

}
