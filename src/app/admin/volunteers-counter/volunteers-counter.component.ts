import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteers-counter',
  templateUrl: './volunteers-counter.component.html',
  styleUrls: ['./volunteers-counter.component.scss'] 
})
export class VolunteersCounterComponent implements OnInit, OnDestroy {



  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedVolCount : any;
  VolCount = [];  


  //control who looged in and data to show
  OrgAdmins:boolean = false;

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

    this.loadVolCount();

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }



  //to load all countries
  private loadVolCount() {
    this.apiService.GetVolCountRequest().pipe(first()).subscribe(data => {
        this.RuturnedVolCount = data;
        this.VolCount = this.RuturnedVolCount.data;
   
        console.log(this.VolCount);
    });
  }

}
