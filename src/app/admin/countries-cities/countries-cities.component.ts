import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';

 
@Component({
  selector: 'app-countries-cities',
  templateUrl: './countries-cities.component.html',
  styleUrls: ['./countries-cities.component.scss']  
})
export class CountriesCitiesComponent implements OnInit, OnDestroy  {

//to store user authentication and countries and cities get request
  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = [];  
 

  // varibles come from url
  Type:any;
  Id : number; 

  constructor( private apiService: ApiService,
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
    this.loadCountries();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  // to show and hide cities 
  showCities(e){
    let element = $(e.srcElement).parents(".count-head");
    $(element).siblings(".citiess").toggleClass("showww");
  }

  //to load all countries
  private loadCountries() {
    this.apiService.GetCounRequest().pipe(first()).subscribe(data => {
        this.RuturnedCount = data;
        this.Countries = this.RuturnedCount.data;   
    });
  }


 

  //to go to edit country
  goToEditCountry(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditCountriesCites'], {queryParams:{type:"country", id : elementId}}); 
  }

  //to go to edit city
  goToEditCity(e){
    console.log(e);
    let elementId = e.target.value;
    console.log(elementId);
    this.router.navigate(['/EditCountriesCites'], {queryParams:{type:"city", id : elementId}}); 
  }

  //to delete country
  goToDeleteCountry(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteCountry(elementId)
    .pipe(first())
    .subscribe(
        data => {
          alert("country Deleted");
        },
        error => {     
        } 
    ); 
  }

  //to delete city
  goToDeleteCity(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteCity(elementId)
    .pipe(first())
    .subscribe(
        data => {
          alert("City Deleted");
        },
        error => {     
        } 
    ); 
  }


  //to change country status
  goToChStatusCountry(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangeCountryStatusRequest(elementId)
  .pipe(first()) 
  .subscribe(
      data => {
        alert("status Edited");
         
      },
      error => {
         
      }
  );
  }

  //to get value of checked countries
  selectedCountries = []; 
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.selectedCountries.push(e.target.value);
      console.log(this.selectedCountries);
    } else {
      for(let i = 0; i <  this.selectedCountries.length; i++){
        if(this.selectedCountries[i] == e.target.value){
          this.selectedCountries.splice(i,1)
        }
        console.log(this.selectedCountries);
      } 
    }
  }
}
