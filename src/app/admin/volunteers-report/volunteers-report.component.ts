
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';



@Component({
  selector: 'app-volunteers-report',
  templateUrl: './volunteers-report.component.html',
  styleUrls: ['./volunteers-report.component.scss']
})
export class VolunteersReportComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedPlaces : any;
  Places = [];  
  RuturnedCount : any;
  Countries = [];  


  constructor( private apiService: ApiService,
    private authenticationService: AuthenticationService) {
       //to get the token and user type
       this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
        console.log(data);
    });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }




  ngOnInit(): void { 

    //for read data from database  
    // this.apiService.readCountriesO().subscribe((Country: CountO[])=>{
    //   this.Country = Country;
    //   console.log(this.Country[1].name);
    // })

    this.loadPlaces();
  }


  //to load all Places
  private loadPlaces() {
    this.apiService.GetPlacesRequest().pipe(first()).subscribe(data => {
        this.RuturnedPlaces = data;
        this.Places = this.RuturnedPlaces.data;
        console.log(this.Places);
    });
  }



}
