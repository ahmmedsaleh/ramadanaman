import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../../_services';
import { Router, ActivatedRoute } from '@angular/router';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedVistor : any;
  VistorToday = [];  



  z = 1000;

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
     //to get the token and user type
     this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(data);
  });
  }

  ngOnInit(): void {


    this.loadVistors();


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


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }



   //to load all countries
   private loadVistors() {
    this.apiService.GetVistorsRequest().pipe(first()).subscribe(data => {
        this.RuturnedVistor = data;
        this.VistorToday = this.RuturnedVistor.data;
   
        console.log(this.VistorToday);
    });
  }


}
