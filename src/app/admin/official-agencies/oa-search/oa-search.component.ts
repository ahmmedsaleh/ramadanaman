
import { VolSearch } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../../_services';

@Component({
  selector: 'app-oa-search',
  templateUrl: './oa-search.component.html',
  styleUrls: ['./oa-search.component.scss']
})
export class OaSearchComponent implements OnInit, OnDestroy {


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];

  Result:  VolSearch[];
OASearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date: null};

 
  ///test function
showww(){
  console.log(this.OASearchResult);
}


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
