
import { VolSearch } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../../_services';

@Component({
  selector: 'app-vol-coun-search',
  templateUrl: './vol-coun-search.component.html',
  styleUrls: ['./vol-coun-search.component.scss']
})
export class VolCounSearchComponent implements OnInit, OnDestroy {

   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription; 
   RuturnedCount : any;
   Countries = [];
   RuturnedCities : any;
   Cities = [];

  //control who logged in and show his data
  OrgAdmins:boolean = true;




  Result:  VolSearch[];
  VolCounSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date : null};



  ///test function
showww(){
  console.log(this.VolCounSearchResult);
}







//array of days of ramadan
Dayes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


//send Search data as object
SendSearchDate(form){
  this.apiService.VolSearchRequest(form.value).subscribe((policy: VolSearch)=>{
    console.log("Policy created, ", policy);
  });
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
