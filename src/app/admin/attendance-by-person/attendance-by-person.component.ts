import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-by-person',
  templateUrl: './attendance-by-person.component.html',
  styleUrls: ['./attendance-by-person.component.scss']
})
export class AttendanceByPersonComponent implements OnInit, OnDestroy {

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedAttByPerson : any;
  AttByPerson = [];  

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

    this.loadAttByPerson();

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


   //to load all countries
   private loadAttByPerson() {
    this.apiService.GetAttByPersonRequest().pipe(first()).subscribe(data => {
        this.RuturnedAttByPerson = data;
        this.AttByPerson = this.RuturnedAttByPerson.data;
   
        console.log(this.AttByPerson);
    });
  }


}
