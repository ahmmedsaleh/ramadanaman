import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-supervisors',
  templateUrl: './city-supervisors.component.html',
  styleUrls: ['./city-supervisors.component.scss']
})
export class CitySupervisorsComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCitySup : any;
  CitySupervisors = [];  

  //control who is loged in and show his data only
  OrgAdmins:boolean = true;
  CounAdmins:boolean = true; 

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

    this.loadCitySupervisor();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe(); 
  }


   //to go to edit Place 
   goToEditCitySup(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditCitySupervisors'], {queryParams:{id : elementId, city_id : 1}}); 
  }

  //to delete country
  goToDeleteCitySup(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteCitySupRequest(elementId) 
    .pipe(first())
    .subscribe(
        data => {
          alert("Member Deleted");
        },
        error => {     
        } 
    );  
  }


   //to change city supervisor status
   goToChStatusCitySup(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangeCitySupStatusRequest(elementId)
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


  //to load all city supervisor
  private loadCitySupervisor() {
    this.apiService.GetCitySupRequest().pipe(first()).subscribe(data => {
        this.RuturnedCitySup = data;
        this.CitySupervisors = this.RuturnedCitySup.data;
        console.log(this.CitySupervisors);
    });
  }


}
