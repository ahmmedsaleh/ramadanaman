import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sites-supervisors',
  templateUrl: './sites-supervisors.component.html',
  styleUrls: ['./sites-supervisors.component.scss']
})
export class SitesSupervisorsComponent implements OnInit, OnDestroy { 

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedSupervisor : any;
  SiteSupervisors = [];  

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
    this.loadSiteSupervisor();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe(); 
  }


  //to go to edit Place 
  goToEditSiteSupervisor(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditSitesSupervisors'], {queryParams:{id : elementId, city_id : 1}}); 
  }


  //to load all Members
  private loadSiteSupervisor() {
    this.apiService.GetSiteSupRequest().pipe(first()).subscribe(data => {
        this.RuturnedSupervisor = data;
        this.SiteSupervisors = this.RuturnedSupervisor.data;
        console.log(this.SiteSupervisors);
    });
  }

}
