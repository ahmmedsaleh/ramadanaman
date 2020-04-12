import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteers-notes',
  templateUrl: './volunteers-notes.component.html',
  styleUrls: ['./volunteers-notes.component.scss']
})
export class VolunteersNotesComponent implements OnInit, OnDestroy {

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedVolunteers : any;
  Volunteers = [];  

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
     //to get the token and user type
     this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(data);
  });
  }

  ngOnInit(): void { 

    this.loadSiteVolunteersNotes();
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe(); 
  }

   //to load all Members
   private loadSiteVolunteersNotes() {
    this.apiService.GetVolNotesRequest().pipe(first()).subscribe(data => {
        this.RuturnedVolunteers = data;
        this.Volunteers = this.RuturnedVolunteers.data;
        console.log(this.Volunteers);
    });
  }


}
