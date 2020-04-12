import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-site-pages',
  templateUrl: './main-site-pages.component.html',
  styleUrls: ['./main-site-pages.component.scss']
})
export class MainSitePagesComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedSitePages : any;
  SitePages = [];  

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

    this.loadSitePages();

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


   //to load all countries
   private loadSitePages() {
    this.apiService.GetSitePagesRequest().pipe(first()).subscribe(data => {
        this.RuturnedSitePages = data;
        this.SitePages = this.RuturnedSitePages.data;
   
        console.log(this.SitePages);
    });
  }

}
