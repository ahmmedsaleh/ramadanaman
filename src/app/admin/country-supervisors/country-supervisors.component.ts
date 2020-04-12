import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-supervisors',
  templateUrl: './country-supervisors.component.html',
  styleUrls: ['./country-supervisors.component.scss']
})
export class CountrySupervisorsComponent implements OnInit, OnDestroy {


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCountSup : any;
  CountSupervisors = [];  

  //control who log in and data to show 
  OrgAdmins:boolean = true;

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

    this.loadCountSupervisor(232);

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe(); 
  }


  //to go to edit Place 
  goToEditCountSup(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditCountrySupervisors'], {queryParams:{id : elementId, city_id : 1}}); 
  }

  //to delete country
  goToDeleteCountSup(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteCountSupRequest(elementId) 
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
    this.apiService.ChangeCountSupStatusRequest(elementId)
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
  selectedCountSup = []; 
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.selectedCountSup.push(e.target.value);
      console.log(this.selectedCountSup);
    } else {
      for(let i = 0; i <  this.selectedCountSup.length; i++){
        if(this.selectedCountSup[i] == e.target.value){
          this.selectedCountSup.splice(i,1)
        }
        console.log(this.selectedCountSup);
      } 
    }
  }



   //to load all country supervisor
   private loadCountSupervisor(id : number) {
    this.apiService.GetCountSupRequest(id).pipe(first()).subscribe(data => {
        this.RuturnedCountSup = data;
        this.CountSupervisors = this.RuturnedCountSup.data;
        console.log(this.CountSupervisors);
    });
  }


}
