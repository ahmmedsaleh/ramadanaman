
import { VolSearch } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../../_services';


@Component({
  selector: 'app-attsearch',
  templateUrl: './attsearch.component.html',
  styleUrls: ['./attsearch.component.scss']
})
export class attSearchComponent implements OnInit, OnDestroy {


  //varaible to recive countries
  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = []; 
  Cities = [];
  Places = [];



 //to control search depended on type of login
    //to control the form show if true & hide if false
  OrgCounCityAdmins:boolean = true;
    //control the search inputs hide or show depended on admin type
  OrgAdmins:boolean = true;
  CountryAdmins:boolean = true;
  CityAdmins:boolean = true;
    //if place admin login hide the form and show div this day
  PlaceAdmin:boolean = false;

  

  

//array of days of ramadan
Dayes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];



Result:  VolSearch[];
AttSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date : null};


//send Search data as object
SendSearchDate(form){
  this.apiService.VolSearchRequest(form.value).subscribe((policy: VolSearch)=>{
    console.log("Policy created, ", policy);
  });
}


///test function
showww(){
  console.log(this.AttSearchResult);
}

  constructor(private apiService: ApiService,
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


 //to return cities depended on country id 
 selectChangeHandler (event) {
  let countryid = event.target.value ;
  console.log(countryid);
   for (let index = 0; index < this.Countries.length; index++){
      if ( this.Countries[index].id == countryid ){
        this.Cities = this.Countries[index].cities;
        console.log(this.Cities);
      }
    }
    console.log(this.Cities);
  }


   //to return places depended on city id 
   selectChangeHandlerCity (event) {
    let cityid = event.target.value ;
    console.log(cityid);
    for (let index = 0; index < this.Cities.length; index++){
      if ( this.Cities[index].id == cityid ){
        this.Places = this.Cities[index].places;
        console.log(this.Places);
       
      }
    }
  }

  ngOnInit(): void {
    this.loadCountries(); 
  }

   //to load all countries
   private loadCountries() {
    this.apiService.GetCounRequest().pipe(first()).subscribe(data => {
        this.RuturnedCount = data;
        this.Countries = this.RuturnedCount.data;
   
        console.log(this.Countries);
    });
  }




 



}
