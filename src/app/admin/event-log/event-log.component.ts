import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedEventLogs : any;
  EventLogs = [];  

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

    this.loadEventLogs();

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


    //to load all event logs
    private loadEventLogs() {
      this.apiService.GetEventLogsRequest().pipe(first()).subscribe(data => {
          this.RuturnedEventLogs = data;
          this.EventLogs = this.RuturnedEventLogs.data;
     
          console.log(this.EventLogs);
      });
    }

}
