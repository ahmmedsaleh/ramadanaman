import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-by-place',
  templateUrl: './attendance-by-place.component.html',
  styleUrls: ['./attendance-by-place.component.scss']
})
export class AttendanceByPlaceComponent implements OnInit, OnDestroy {

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedAttByPlace : any;
  AttByPlace = [];  

   //control who looged in and data to show
   OrgAdmins:boolean = true;

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

    this.loadAttByPlace();

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


   //to load all countries
   private loadAttByPlace() {
    this.apiService.GetAttByPlaceRequest().pipe(first()).subscribe(data => {
        this.RuturnedAttByPlace = data;
        this.AttByPlace = this.RuturnedAttByPlace.data;
   
        console.log(this.AttByPlace);
    });
  }

}
